/*
 * Isomorphic SmartClient
 * Version 7.0beta4 (2009-02-24)
 * Copyright(c) 1998-2007 Isomorphic Software, Inc. All rights reserved.
 * "SmartClient" is a trademark of Isomorphic Software, Inc.
 *
 * licensing@smartclient.com
 *
 * http://smartclient.com/license
 */

 
isc.ClassFactory.defineClass("DOMTree", "Tree");

//!>Deferred
isc.DOMTree.addMethods({

    loadOnInit : true,

    // stick the root element on the root node, for uniformity in accessing node._element
    makeRoot : function () {    
        var root = this.Super("makeRoot", arguments);
        root._element = this.rootElement;
        return root;
    },

    getElement : function (node) { return node._element; },

    // whether to show text nodes as distinct elements
    hideTextNodes: true,

    // Node Titles
    // ---------------------------------------------------------------------------------------
    getTitle : function (node) {
        // look for an attributes named after the title or "name" properties.  If this produces
        // undesireable results, just set titleProperty/nameProperty to some attribute that
        // doesn't exist
        var element = this.getElement(node),
            title = element.getAttribute(this.titleProperty);
        if (!this.valueIsEmpty(title)) return title;

        title = element.getAttribute(this.nameProperty);
        if (!this.valueIsEmpty(title)) return title;
        
        // fall back to the tagName
        return element.tagName || element.nodeName;
    },
    valueIsEmpty : function (value) {
        return value == null || isc.isAn.emptyString(value);
    },

    // Folderness
    // ---------------------------------------------------------------------------------------
    isFolder : function (node) {
        if (node == this.root || node.children != null) return true;
        var element = node._element;
        if (!element || !element.childNodes || element.childNodes.length == 0) return false;

        // if we're not hiding text nodes, any child qualifies as a folder
        if (!this.hideTextNodes) return true;

        // otherwise show it as a folder only if it has element children, not just text
        return isc.xml.hasElementChildren(element);
    },

    // Modification
    // ---------------------------------------------------------------------------------------
    moveList : function (moveList, newParent, index) {
        var moveNode = moveList[0],
            moveElement = this.getElement(moveNode);

        this.logWarn("moveList: " + this.echoAll(moveList) +
                     ", newParent: " + this.echo(newParent) +
                     ", index: " + index);

        
        //moveElement.parentNode.removeChild(moveElement);
        this._addToDOM(moveElement, newParent, index);
        this.Super("moveList", arguments);
    },
    remove : function (node) {
        var element = this.getElement(node);
        element.parentNode.removeChild(element);
        return this.Super("remove", arguments);
    },
    // NOTE: overriding add() to auto-detect being passed an XML Element is painfully slow due
    // to the Super call..
    addElement : function (element, parent, position) {
        this._addToDOM(element, parent, position);
        // an already loaded parent needs add called - otherwise the child will be
        // discovered when loadChildren is called
        if (this.isLoaded(parent)) {
            var node = { _element : element };
            this.add(node, parent, position);
        } else {
            // otherwise we need to fire dataChanged() in order to cause an opener icon to be
            // rendered on any node that becomes a folder due to DOM addition
            this.dataChanged();
        }
    },
    
    _addToDOM : function (addElement, parent, position) {
        var parentElement = this.getElement(parent);
        if (position == null) {
            this.logWarn("appending: " + this.echoLeaf(addElement) +
                         " to: " + this.echoLeaf(parentElement));
            parentElement.appendChild(addElement);
        } else {
            // NOTE: the index in the visible nodes may not be the same as the index in the
            // DOM, since a DOMTree may not show all DOM nodes (eg it might hide text nodes).
            var beforeNode = this.getChildren(parent)[position],
                beforeElement = this.getElement(beforeNode);
            this.logWarn("inserting into: " + this.echoLeaf(parentElement) + 
                         ", before: " + this.echoLeaf(beforeElement));
            parentElement.insertBefore(addElement, beforeElement);
        }
    },

    loadChildren : function (parentNode) {
        if (this.isLoaded(parentNode)) return;
        try {
        //this.logWarn("loading children of: " + 
        //             (parentNode == this.root ? "root" : this.echoLeaf(parentNode._element)));

        var element = parentNode._element;
        if (element == null) return;
        var childNodes = element.childNodes;

        // allow inspection through IFRAMEs to get into SVGs in Moz
        if (isc.Browser.isMoz && element.contentDocument) {
            childNodes = [element.contentDocument.documentElement];
        } else {
            // defer loading uninteresting children if loading a batch
            // (IFRAMEs are exempt from this check)
            if (this.loadingBatch() && !isc.xml.hasElementChildren(element)) return;
        }

        parentNode[this.openProperty] = true;

        if (childNodes != null) {
            // make a node for each DOM child
            for (var i = 0; i < childNodes.length; i++) {
                var domNode = childNodes[i];
                // skip text, CDATA and comment nodes if so configured
                if (this.hideTextNodes && domNode.nodeName.startsWith("#")) continue;
                var node = { _element : domNode };
                this.add(node, parentNode);
            }
        }

        this.setLoadState(parentNode, isc.Tree.LOADED);
        } catch (e) {
            this.logWarn("parent node: " + this.echo(parentNode) +
                         ", at path: " + this.getPath(parentNode) + 
                         ", error: " + this.echo(e) +
                         this.getStackTrace());
        }
    }
});
//!<Deferred

