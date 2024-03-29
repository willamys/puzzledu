
/*

  SmartClient Ajax RIA system
  Version 7.0beta4/LGPL Development Only (2009-02-24)

  Copyright 2000-2007 Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF THE
     SOFTWARE EVALUATION LICENSE AGREEMENT. If you have received this file
     without an Isomorphic Software license file, please see:

         http://www.isomorphic.com/licenses/isc_eval_license_050316.html

     You are not required to accept this agreement, however, nothing else
     grants you the right to copy or use this software. Unauthorized copying
     and use of this software is a violation of international copyright law.

  EVALUATION ONLY
     This software is provided for limited evaluation purposes only. You must
     acquire a deployment license from Isomorphic Software in order to use
     the SmartClient system, or any portion thereof, in any non-evaluation
     application, including internal or non-commercial applications.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. YOU ARE EXPRESSLY PROHIBITED
     FROM ATTEMPTING TO REVERSE ENGINEER THIS SOFTWARE OR MODIFY THIS
     SOFTWARE FOR HUMAN READABILITY.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

if(window.isc&&window.isc.module_Core&&!window.isc.module_Containers){isc.module_Containers=1;isc._moduleStart=isc._Containers_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log && isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={ message:'Containers load/parse time: ' + (isc._moduleStart-isc._moduleEnd) + 'ms', category:'loadTime'};
if(isc.Log && isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime')
else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM
else isc._preLog=[isc._pTM]}isc.ClassFactory.defineClass("ImgTab","StretchImgButton");isc.A=isc.ImgTab.getPrototype();isc.A.capSize=2;isc.A.skinImgDir="images/Tab/";isc.A.baseStyle="tab";isc.A.src="[SKIN]tab.gif";isc.A.showRollOver=false;isc.A.showFocused=true;isc.A.actionType=isc.Button.RADIO;isc.A.mozOutlineOffset="0px";isc.A=isc.ImgTab.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.setPane=function(_1){this.parentElement.parentElement.updateTab(this,_1)}
,isc.A.selectTab=function(){this.parentElement.parentElement.selectTab(this)}
,isc.A.initWidget=function(_1,_2,_3,_4,_5,_6){this.skinImgDir=this.skinImgDir+this.tabBarPosition+"/";this.vertical=(this.tabBarPosition==isc.Canvas.LEFT||this.tabBarPosition==isc.Canvas.RIGHT);if(this.vertical&&this.titleStyle)this.titleStyle="v"+this.titleStyle;return this.invokeSuper(isc.ImgTab,this.$oc,_1,_2,_3,_4,_5,_6)}
);isc.B._maxIndex=isc.C+3;isc.ClassFactory.defineClass("TabBar","Toolbar");isc.A=isc.TabBar.getPrototype();isc.A.breadth=21;isc.A.buttonConstructor=isc.ImgTab;isc.A.tabWithinToolbar=false;isc.A.skinImgDir="images/Tab/";isc.A.baseLineThickness=1;isc.A.baseLineSrc="[SKIN]baseline.gif";isc.A.baseLineCapSize=2;isc.A.tabBarPosition=isc.Canvas.TOP;isc.A.selectedTab=0;isc.A.defaultTabSize=80;isc.A=isc.TabBar.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.initWidget=function(){for(var i=0;i<this.tabs.length;i++){var _2=this.tabs[i].pane;if(isc.isA.String(_2)&&isc.isA.Canvas(window[_2])){this.tabs[i].pane=window[_2]}}
this.buttons=this.tabs;this.skinImgDir=this.skinImgDir+this.tabBarPosition+"/";var _3=this.tabDefaults;if(_3==null)_3=this.tabDefaults={};_3=this.buttonDefaults=isc.addProperties({},this.buttonDefaults,_3);_3.actionType=isc.StatefulCanvas.RADIO;if(this.vertical){_3.defaultHeight=this.defaultTabSize}else{_3.defaultWidth=this.defaultTabSize}
_3.overflow=isc.Canvas.VISIBLE;_3.tabBarPosition=this.tabBarPosition;_3.iconClick=this.$42k;_3._generated=true;this.Super(this.$oc);if(this._baseLine==null)this.makeBaseLine()}
,isc.A.$42k=function(){return this.parentElement.tabIconClick(this)}
,isc.A.tabIconClick=function(_1){var _2=this.parentElement;return _2.$52a(_1)}
,isc.A.makeButton=function(_1,_2,_3,_4,_5){var _6=this.parentElement.canCloseTab(_1);if(_6){_1.icon=(_1.closeIcon||this.parentElement.closeTabIcon);_1.iconSize=(_1.closeIconSize||this.parentElement.closeTabIconSize);_1.iconOrientation=isc.Page.isRTL()?"left":"right";_1.iconAlign=_1.iconOrientation}
return this.invokeSuper("TabBar","makeButton",_1,_2,_3,_4,_5)}
,isc.A.addTabs=function(_1,_2){if(!_2&&this.tabBarPosition==isc.Canvas.LEFT)_2=0;this.addButtons(_1,_2);if(this._baseLine!=null){this._baseLine.bringToFront();var _3=this.getButton(this.getSelectedTab());if(_3)_3.bringToFront()}}
,isc.A.removeTabs=function(_1){if(_1==null)return;if(!isc.isAn.Array(_1))_1=[_1];var _2=this.map("getButton",_1);this.removeButtons(_1);for(var i=0;i<_2.length;i++){if(_2[i]!=null)_2[i].destroy()}}
,isc.A.draw=function(_1,_2,_3,_4){arguments.$cw=this;this.fixLayout();this.invokeSuper(isc.TabBar,"draw",_1,_2,_3,_4);this.bringToFront();var _5=this.getButton(this.selectedTab);if(_5){_5.setSelected(true)}}
,isc.A.makeBaseLine=function(){this._baseLine=this.addAutoChild("baseLine",{ID:this.getID()+"_baseLine",vertical:(this.tabBarPosition==isc.Canvas.LEFT||this.tabBarPosition==isc.Canvas.RIGHT),skinImgDir:this.skinImgDir,src:this.baseLineSrc,capSize:this.baseLineCapSize,imageType:isc.Img.STRETCH,addAsChild:true,autoDraw:false},isc.StretchImg);this.ignoreMemberZIndex(this._baseline)}
,isc.A.scrollTo=function(_1,_2,_3,_4,_5,_6){this.invokeSuper(isc.TabBar,"scrollTo",_1,_2,_3,_4,_5,_6);if(this._baseLine)this.fixLayout()}
,isc.A.fixLayout=function(){var _1=this._baseLine;if(_1==null)return;var _2=this.parentElement,_3=0;if(this.tabBarPosition==isc.Canvas.TOP){_1.setRect(this.getScrollLeft(),this.getHeight()-this.baseLineThickness,this.parentElement.getWidth()-_3,this.baseLineThickness)}else if(this.tabBarPosition==isc.Canvas.BOTTOM){_1.setRect(this.getScrollLeft(),0,this.parentElement.getWidth()-_3,this.baseLineThickness)}else if(this.tabBarPosition==isc.Canvas.LEFT){_1.setRect(this.getWidth()-this.baseLineThickness,this.getScrollTop(),this.baseLineThickness,this.parentElement.getHeight()-_3)}else if(this.tabBarPosition==isc.Canvas.RIGHT){_1.setRect(0,this.getScrollTop(),this.baseLineThickness,this.parentElement.getHeight()-_3)}}
,isc.A.layoutChildren=function(_1,_2,_3,_4){this.invokeSuper(isc.TabBar,"layoutChildren",_1,_2,_3,_4);this.fixLayout()}
,isc.A.buttonSelected=function(_1){this.ignoreMemberZIndex(_1);_1.bringToFront();this.lastSelectedButton=_1;this.$6b(this.lastSelectedButton)}
,isc.A.buttonDeselected=function(_1){_1.sendToBack();this.stopIgnoringMemberZIndex(_1)}
,isc.A.getSelectedTab=function(){return this.getButtonNumber(this.getSelectedButton())}
,isc.A.selectTab=function(_1){this.selectedTab=_1;this.selectButton(_1)}
,isc.A.setupButtonFocusProperties=function(){this.$6b(this.getButton(this.selectedTab));return this.Super("setupButtonFocusProperties",arguments)}
,isc.A.$6b=function(_1){if(!this.selectTabOnContextClick&&isc.EH.rightButtonDown()){if(this.$6g!=null&&this.getButton(_1)!=this.$6g)
{this.$6g.delayCall("focus")}
return}
var _2=this.getButton(_1);if(_2)_2.focus();this.Super("$6b",arguments);if(this.$6g!=null&&!this.$6g.selected){this.selectTab(this.$6g)}}
,isc.A.$7b=function(_1,_2){if(this.overflow==isc.Canvas.VISIBLE||!this.members||this.members.length==0)return;var _3,_4;if(this.$7c!=null){_3=this.members[this.$7c+(_1?-1:1)];if(_3==null){return}
_4=(_1?(this.vertical?_3.getTop():_3.getLeft()):(this.vertical?_3.getBottom():_3.getRight()))}else{var _5=(this.vertical?this.getScrollHeight():this.getScrollWidth());if(_5<=(this.vertical?this.getViewportHeight():this.getViewportWidth()))
return;var _6=(this.vertical?this.getScrollTop():this.getScrollLeft()),_7=(this.vertical?this.getViewportHeight():this.getViewportWidth());var _8=5;for(var i=0;i<this.members.length;i++){_3=(_1?this.members[this.members.length-(i+1)]:this.members[i]);_4=(_1?(this.vertical?_3.getTop():_3.getLeft()):(this.vertical?_3.getBottom():_3.getRight()));var _10=_1?(_4+_8<_6):(_4-_8>(_6+_7));if(_10)break}}
if(_2){this.$7c=this.members.indexOf(_3);this.scrollTabIntoView(_3,_1,true,"this.$7d("+this.$7c+")")}else this.scrollTabIntoView(_3,_1)}
,isc.A.$7d=function(_1){if(this.$7c==_1)delete this.$7c}
,isc.A.scrollTabIntoView=function(_1,_2,_3,_4){var _5;if(isc.isA.Number(_1)){_5=_1;_1=this.members[_1]}else{_5=this.members.indexOf(_1)}
if(!_1)return;var _6=_1.getRect(),_7,_8;var _9=this.vertical;if(_2==null){if(_5==0)_2=true;else if(_5==(this.members.getLength()-1))_2=false;else{if(_9){if(this.getScrollTop()>_6[1])_2=true;else _2=false}else{if(this.getScrollLeft()>_6[0])_2=true;else _2=false}}}
if(_9){_8=(_2?"top":"bottom");_7="left";_6[2]=0}else{_7=(_2?"left":"right");_8="top";_6[3]=0}
if(_5==0)_6[0]=_6[1]=0;this.scrollIntoView(_6[0],_6[1],_6[2],_6[3],_7,_8,_3,_4)}
,isc.A.scrollForward=function(_1){this.$7b(false,_1)}
,isc.A.scrollBack=function(_1){this.$7b(true,_1)}
);isc.B._maxIndex=isc.C+22;isc.ClassFactory.defineClass("Window","VLayout");isc.A=isc.Window.getPrototype();isc.A.styleName="windowBackground";isc.A.skinImgDir="images/Window/";isc.A.backgroundColor="#DDDDDD";isc.A.layoutMargin=2;isc.A.membersMargin=2;isc.A.dragStartDistance=1;isc.A.canDragReposition=true;isc.A.dragAppearance=isc.EventHandler.OUTLINE;isc.A.canDragResize=false;isc.A.resizeFrom=["R","B","BR"];isc.A.minWidth=100;isc.A.minHeight=100;isc.A.useBackMask=isc.Browser.isIE&&isc.Browser.minorVersion>=5.5;isc.A.isModal=false;isc.A.modalMaskOpacity=50;isc.A.modalMaskStyle="modalMask";isc.A.modalMaskConstructor="ScreenSpan";isc.A.dismissOnOutsideClick=false;isc.A.showBody=true;isc.A.bodyStyle="windowBody";isc.A.bodyColor="#FFFFFF";isc.A.hiliteBodyColor="#EEEEEE";isc.A.contentsType="page";isc.A.bodyDefaults={layoutMargin:0};isc.A.contentLayout="vertical";isc.A.autoSize=false;isc.A.showHeader=true;isc.A.headerConstructor="HLayout";isc.A.showHeaderBackground=!(isc.Browser.isIE&&!isc.Browser.isStrict&&isc.Browser.minorVersion>=5.5);isc.A.headerBackgroundConstructor="Img";isc.A.headerBackgroundDefaults={width:"100%",height:"100%",addAsChild:true,vertical:false,capSize:10};isc.A.headerStyle="windowHeader";isc.A.headerSrc=(!(isc.Browser.isIE&&!isc.Browser.isStrict&&isc.Browser.minorVersion>=5.5)?"[SKIN]Window/headerGradient.gif":null);isc.A.headerDefaults={height:18,layoutMargin:1,membersMargin:2,overflow:isc.Canvas.HIDDEN};isc.A.headerControls=["headerIcon","headerLabel","minimizeButton","maximizeButton","closeButton"];isc.A.hiliteHeaderStyle="windowHeaderHilite";isc.A.hiliteHeaderSrc=(!(isc.Browser.isIE&&isc.Browser.minorVersion>=5.5)?"[SKIN]Window/headerGradient_hilite.gif":null);isc.A.showTitle=true;isc.A.title="Untitled Window";isc.A.headerLabelConstructor="Label";isc.A.headerLabelDefaults={wrap:false,align:isc.Canvas.LEFT,styleName:"windowHeaderText",width:10,inherentWidth:true};isc.A.showHeaderIcon=true;isc.A.headerIconConstructor="Img";isc.A.headerIconDefaults={width:16,height:16,layoutAlign:"center",src:"[SKIN]/Window/headerIcon.gif"};isc.A.canFocusInHeaderButtons=false;isc.A.showCloseButton=true;isc.A.closeButtonConstructor="ImgButton";isc.A.closeButtonDefaults={width:16,height:14,layoutAlign:"center",src:"[SKIN]/Window/close.gif",click:function(){return this.creator.$7e()}};isc.A.showMinimizeButton=true;isc.A.minimizeButtonConstructor="ImgButton";isc.A.minimizeButtonDefaults={width:16,height:14,layoutAlign:"center",src:"[SKIN]/Window/minimize.gif",click:function(){this.creator.minimize();return false}};isc.A.minimized=false;isc.A.defaultMinimizeHeight=16;isc.A.restoreButtonDefaults={width:16,height:14,src:"[SKIN]/Window/restore.gif",layoutAlign:"center",click:function(){this.creator.restore();return false}};isc.A.minimized=false;isc.A.showMaximizeButton=false;isc.A.maximizeButtonConstructor="ImgButton";isc.A.maximizeButtonDefaults={width:16,height:14,src:"[SKIN]/Window/maximize.gif",layoutAlign:"center",click:function(){this.creator.maximize();return false}};isc.A.showFooter=true;isc.A.footerConstructor="HLayout";isc.A.footerHeight=18;isc.A.showStatusBar=true;isc.A.statusBarConstructor="Canvas";isc.A.statusBarDefaults={overflow:isc.Canvas.HIDDEN,styleName:"windowStatusBar",addAsChild:true,width:"100%",wrap:false,leftPadding:5};isc.A.showResizer=true;isc.A.resizerConstructor="Img";isc.A.resizerDefaults={canDragResize:true,getEventEdge:function(){return"BR"},src:"[SKIN]/Window/resizer.gif",width:16,height:16};isc.A.showToolbar=false;isc.A.toolbarConstructor="Toolbar";isc.A.toolbarDefaults={height:40,layoutMargin:10,membersMargin:5,overflow:"visible"};isc.A.customEdges=["T","B"];isc.A.overflow="hidden";isc.A=isc.Window.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.autoChildParentMap={resizer:"footer",statusBar:"footer",headerBackground:"header",headerIcon:"header",headerLabel:"header",minimizeButton:"header",maximizeButton:"header",closeButton:"header",toolbar:"body"};isc.B.push(isc.A.initWidget=function(){if(this.minimized&&this.maximized){this.logWarn("Window initialized with maximized and minimized both set to true. "+"This is unsupported. The Window will be rendered minimized.");this.maximized=false}
if(this.minimized){this.minimized=null;this.minimize()}else if(this.maximized){this.maximized=null;this.maximize()}
if(this.autoSize){this.vPolicy="none";this.overflow="visible"}
this.Super(this.$oc);if(!this.$7f&&this.items!=null){for(var i=0;i<this.items.length;i++){if(isc.isA.Canvas(this.items[i])&&this.items[i].isDrawn())this.items[i].clear()}}}
,isc.A.createChildren=function(){this.makeHeader();this.makeBody();this.makeToolbar();this.makeFooter();this.$7f=true}
,isc.A.makeToolbar=function(){this.addAutoChild("toolbar",{buttons:this.toolbarButtons,visibility:this.minimized?isc.Canvas.HIDDEN:isc.Canvas.INHERIT})}
,isc.A.draw=function(_1,_2,_3,_4){if(isc.$cv)arguments.$cw=this;if(!this.readyToDraw())return this;if(!this.$7f)this.createChildren();return this.invokeSuper(isc.Window,"draw",_1,_2,_3,_4)}
,isc.A.destroy=function(){if(!this.$7f){var _1=this.items;if(!isc.isAn.Array(_1))_1=[_1];for(var i=0;i<_1.length;i++){if(isc.isA.Canvas(_1[i]))_1[i].destroy()}}
this.items=null;this.destroyModalMask();return this.Super("destroy",arguments)}
,isc.A.mouseUp=function(){this.bringToFront();this.Super("mouseUp",arguments)}
,isc.A.makeHeader=function(){var _1=this.addAutoChild("header",{styleName:this.headerStyle});if(_1==null)return;if(_1!=null){var _2=this.addAutoChild("headerBackground",{src:this.headerSrc});if(_2)_2.sendToBack();if(this.minimized){this.$42l=this.minimizeButtonDefaults;this.$42m=this.minimizeButtonProperties;this.minimizeButtonDefaults=this.restoreButtonDefaults;this.minimizeButtonProperties=this.restoreButtonProperties}else if(this.maximized){this.$42n=this.maximizeButtonDefaults;this.$42o=this.maximizeButtonProperties;this.maximizeButtonDefaults=this.restoreButtonDefaults;this.maximizeButtonProperties=this.restoreButtonProperties}
this.addAutoChildren(this.headerControls,this.header);if(this.minimized){this.minimizeButtonDefaults=this.$42l;this.minimizeButtonProperties=this.$42m;this.$42l=this.$42p=null}else if(this.maximized){this.maximizeButtonDefaults=this.$42n;this.maximizeButtonProperties=this.$42o;this.$42n=this.$42q=null}}}
,isc.A.setShowHeaderControl=function(_1,_2,_3){var _4=this.headerControls;if(!_4.contains(_1)){this.logWarn("request to show/hide header control with name:"+_1+". No such control is present in this.headerControls - ignoring.");return}
if(!_3)
_3="show"+_1.substring(0,1).toUpperCase()+_1.substring(1);if(this[_3]==_2)return;this[_3]=_2;if(this.header==null)return;if(this[_1]){if(_2)this[_1].show();else this[_1].hide()}else if(_2){var _5=0;for(var i=0;i<_4.length;i++){if(_4[i]==_1)break;if(this[_4[i]])_5++}
this.addAutoChild(_1,null,null,this.header,_5);this[_1].show()}}
,isc.A.setShowCloseButton=function(_1){this.setShowHeaderControl("closeButton",_1,"showCloseButton")}
,isc.A.setShowMinimizeButton=function(_1){this.setShowHeaderControl("minimizeButton",_1,"showMinimizeButton")}
,isc.A.setShowMaximizeButton=function(_1){this.setShowHeaderControl("maximizeButton",_1,"showMaximizeButton")}
,isc.A.setShowHeaderIcon=function(_1){this.setShowHeaderControl("headerIcon",_1,"showHeaderIcon")}
,isc.A.getDynamicDefaults=function(_1){if(isc.endsWith(_1,isc.Button.Class)){return{canFocus:this.canFocusInHeaderButtons}}}
,isc.A.headerLabel_autoMaker=function(){if(!this.showTitle){this.headerLabel=null;return}
var _1=isc.Canvas.create({autoDraw:false,_generated:true,contents:isc.Canvas.blankImgHTML(1000,100),overflow:"hidden"});var _2=this.canDragReposition;if(_2){_1.canDragReposition=true;_1.dragTarget=this;this.canDragReposition=false}
var _3=this.headerLabel=this.createAutoChild("headerLabel",{height:"100%",contents:this.title,dragTarget:this,getCurrentCursor:function(){if(this.parentElement)
return this.parentElement.getCurrentCursor();return this.Super("getCurrentCursor",arguments)}});_1.addChild(_3);this.header.addMember(_1)}
,isc.A.setTitle=function(_1){if(_1)this.title=_1;if(!this.header)return;if(this.headerLabel)this.headerLabel.setContents(this.title);else this.header.setContents(this.title)}
,isc.A.setButtons=function(_1){this.toolbarButtons=_1;if(this.toolbar)this.toolbar.setButtons(_1)}
,isc.A.makeFooter=function(){if(!this.showFooter)return;this.addAutoChild("footer",{height:this.footerHeight});if(!this.footer)return;this.footer.addMember(isc.LayoutSpacer.create());this.addAutoChild("statusBar",{height:this.footer.getHeight(),visibility:this.minimized?isc.Canvas.HIDDEN:isc.Canvas.INHERIT});if(this.canDragResize){this.addAutoChild("resizer",{dragTarget:this,visibility:this.minimized?isc.Canvas.HIDDEN:isc.Canvas.INHERIT});if(this.resizer)this.resizer.bringToFront()}}
,isc.A.setStatus=function(_1){if(this.statusBar==null)return;var _2=(this.statusBar.leftPadding?isc.Canvas.spacerHTML(this.statusBar.leftPadding,1):"");this.statusBar.setContents(_2+_1)}
,isc.A.setSrc=function(_1){this.src=_1;if(this.body)this.body.setContentsURL(_1)}
,isc.A.makeBody=function(){if(!this.showBody)return;var _1,_2,_3;if(this.src){_3=this.src}else{var _4=this.items;if(isc.isA.Array(_4)){_1=_4.duplicate()}else if(isc.isA.Canvas(_4)){_1=_4}else{_2=_4}
if(!isc.isAn.Array(_4))_4=[_4];for(var i=0;i<_4.length;i++){if(isc.isAn.Object(_4[i]))_4[i].locatorParent=this}}
if(!this.bodyConstructor){if(_3){this.bodyConstructor="HTMLFlow"}else if(_2){this.bodyConstructor="Canvas"}else if(!this.autoSize){if(this.contentLayout!="none")this.bodyConstructor="Layout";else this.bodyConstructor="Canvas"}else{this.bodyConstructor="Layout";var _6={vPolicy:"none",hPolicy:"none"};if(!this.bodyProperties)this.bodyProperties=_6;else isc.addProperties(this.bodyProperties,_6)}}
this.createCanvii(_1);if(isc.Browser.isMoz&&_3!=null){if(!this.body)this.body={};this.body.useClipDiv=false}
var _7=("body",{contents:_2||"&nbsp;",_generated:false,defaultHeight:this.autoSize?50:100,contentsURL:_3,contentsType:this.contentsType,hideUsingDisplayNone:(isc.Browser.isMoz&&_3?true:false),styleName:this.bodyStyle,backgroundColor:this.bodyColor,visibility:this.minimized?isc.Canvas.HIDDEN:isc.Canvas.INHERIT,vertical:(this.contentLayout==isc.Canvas.VERTICAL),overflow:this.autoSize?"visible":"auto"});var _8=isc.ClassFactory.getClass(this.bodyConstructor);if(_8&&_8.isA("Layout")){_7.members=_1}else{_7.children=_1}
this.addAutoChild("body",_7)}
,isc.A.setBodyColor=function(_1){this.bodyColor=_1;if(this.body)this.body.setBackgroundColor(_1)}
,isc.A.hasInherentHeight=function(){return this.autoSize}
,isc.A.hasInherentWidth=function(){return this.autoSize}
,isc.A.addItem=function(_1,_2){return this.addItems([_1],_2)}
,isc.A.removeItem=function(_1){return this.removeItems([_1])}
,isc.A.addItems=function(_1,_2){if(!isc.isAn.Array(_1))_1=[_1];if(!this.items)this.items=[];for(var i=0;i<_1.length;i++){if(this.items.contains(_1[i]))continue;if(_2!=null)this.items.addAt(_1[i],_2+i);else this.items.add(_1[i]);_1[i].locatorParent=this;if(!this.$7f){if(isc.isA.Canvas(_1[i])&&_1[i].isDrawn())_1[i].clear()}else{if(this.body.addMember){this.body.addMember(_1[i],_2!=null?_2+i:null)}else{this.body.addChild(_1[i])}}}
return _1}
,isc.A.removeItems=function(_1){if(!isc.isAn.Array(_1))_1=[_1];for(var i=0;i<_1.length;i++){delete _1[i].locatorParent}
if(this.$7f){if(this.body.removeMembers)this.body.removeMembers(_1);else{for(var i=0;i<_1.length;i++){if(_1[i].parentElement==this.body)_1[i].deparent()}}}
this.items.removeList(_1);return _1}
,isc.A.locatorChildDestroyed=function(_1){if(this.items&&this.items.contains(_1))this.items.remove(_1)}
,isc.A.replaceItem=function(_1,_2){if(_1==_2)return _1;if(_2==null)return this.removeItem(_1);if(_1==null)return this.addItem(_2);for(var i=0;i<this.items.length;i++){if(this.items[i]==_1){this.items[i]=_2;if(!this.$7f){if(isc.isA.Canvas(_2)&&_2.isDrawn())_2.clear()}else{if(this.body.addMember){var _4=this.body.getMemberNumber(_1);this.body.removeMember(_1);this.body.addMember(_2,_4)}else{this.body.removeChild(_1);this.body.addChild(_2)}}
break}}}
,isc.A.layoutChildren=function(_1,_2,_3,_4){if(this.body==null)return;if(this.$7g){this.$7g=null;this.disableAutoSize()}
if(this.autoSize)this.$7h();this.invokeSuper(isc.Window,"layoutChildren",_1,_2,_3,_4);var _5=this.edgesAsChild?this.$l0:null;if(_5)_5.setHeight(this.getVisibleHeight(true))}
,isc.A.$7h=function(){if(this.minimized)return;if(this.$7i)return;this.$7i=true;var _1=this.edgesAsChild?this.$l0:null;if(!this.body.isDrawn())this.body.draw();this.body.inherentWidth=true;var _2=(this.getWidth()-this.getInnerWidth())+this.$tb+this.$tc;if(_1)_2+=_1.$tb+_1.$tc;var _3=this.body.getVisibleWidth()+_2;this.logInfo("edgeWidth is: "+_2+", setting window width to: "+_3,"layout");if(this.getWidth()!=_3)this.setWidth(_3);this.$7i=null}
,isc.A.disableAutoSize=function(){this.setAutoSize(false)}
,isc.A.setAutoSize=function(_1){this.autoSize=_1;if(_1){if(this.body){if(isc.isA.Layout(this.body))this.body.vPolicy=this.body.hPolicy="none";this.body.setOverflow("visible")}
this.vPolicy="none";this.setOverflow("visible")}else{if(this.body){if(isc.isA.Layout(this.body))this.body.vPolicy=this.body.hPolicy="fill";this.body.setOverflow("auto");this.body.inherentWidth=false}
this.vPolicy="fill";this.setOverflow("hidden")}}
,isc.A.dragResizeStart=function(){if(this.Super("dragResizeStart",arguments)==false)return;if(this.autoSize&&isc.EH.dragTarget==this){this.autoSize=false;this.$7g=true}}
,isc.A.returnValue=function(_1){if(this.isVisible())this.hide();if(this.callback){this.delayCall("fireCallback",[this.callback,"value",[_1]],50)}
return _1}
,isc.A.show=function(_1,_2,_3,_4){if(isc.$cv)arguments.$cw=this;if(this.isModal){if(this.modalTarget){if(!isc.isA.Canvas(this.modalTarget)||this.modalTarget.contains(this)){this.logWarn("Invalid modalTarget:"+this.modalTarget+". Should be a canvas, and not an ancestor of this Window.");delete this.modalTarget;this.isModal=false}else{this.modalTarget.showComponentMask(this.showModalMask?{styleName:this.modalMaskStyle,opacity:this.modalMaskOpacity}:null);this.observeModalTarget()}}else if(this.topElement!=null){this.logWarn("Window specified with 'isModal' set to true, but this window has a "+"parentElement. Only top level Windows can be shown modally.");this.isModal=false}else{this.showClickMask(this.getID()+(this.dismissOnOutsideClick?".closeClick()":".flash()"),false,[this]);this.makeModalMask()}}
if(this.autoCenter&&!this.parentElement){this.$7j=true;this.moveTo(-1000,-1000);this.$7j=false}
this.invokeSuper(isc.Window,"show",_1,_2,_3,_4);if(this.autoCenter){this.centerInPage();if(!this.parentElement){isc.Page.setEvent(this.$nx,this,null,"parentResized")}}
this.bringToFront()}
,isc.A.makeModalMask=function(){if(!this.showModalMask)return;if(!this.modalMask)this.modalMask=this.createAutoChild("modalMask",{styleName:this.modalMaskStyle,opacity:this.modalMaskOpacity});this.modalMask.show()}
,isc.A.hideModalMask=function(){if(this.modalMask)this.modalMask.hide()}
,isc.A.destroyModalMask=function(){if(this.modalMask){this.modalMask.destroy();this.modalMask=null}}
,isc.A.observeModalTarget=function(){if(this.$550)return;this.observe(this.modalTarget,"show","observer.modalTargetVisibilityChanged(observed)");this.observe(this.modalTarget,"hide","observer.modalTargetVisibilityChanged(observed)");this.observe(this.modalTarget,"clear","observer.modalTargetVisibilityChanged(observed)");this.observe(this.modalTarget,"draw","observer.modalTargetVisibilityChanged(observed)");this.observe(this.modalTarget,"parentVisibilityChanged","observer.modalTargetVisibilityChanged(observed)")}
,isc.A.ignoreModalTarget=function(){if(this.$550)return;this.ignore(this.modalTarget,"show");this.ignore(this.modalTarget,"hide");this.ignore(this.modalTarget,"draw");this.ignore(this.modalTarget,"clear");this.ignore(this.modalTarget,"parentVisibilityChanged")}
,isc.A.modalTargetVisibilityChanged=function(_1){this.$550=true;if(_1.isVisible()&&_1.isDrawn())this.show();else this.hide();delete this.$550}
,isc.A.shouldDismissOnEscape=function(){if(this.dismissOnEscape!=null)return this.dismissOnEscape;return this.showHeader&&this.headerControls&&this.showCloseButton&&this.headerControls.contains("closeButton")}
,isc.A.handleKeyPress=function(){var _1=isc.EH.getKey();if(_1=="Escape"&&this.shouldDismissOnEscape()){this.handleEscape();return false}
return this.Super("handleKeyPress",arguments)}
,isc.A.handleEscape=function(){if(this.isMasked())return;this.closeClick()}
,isc.A.resized=function(_1,_2,_3,_4){this.invokeSuper(isc.Window,"resized",_1,_2,_3,_4);if(this.autoCenter)this.centerInPage()}
,isc.A.hide=function(_1,_2,_3,_4){if(this.$7k)isc.Animation.finishAnimation(this.$7k);this.invokeSuper(isc.Window,"hide",_1,_2,_3,_4);if(this.isDrawn()&&this.isModal){if(this.modalTarget){this.modalTarget.hideComponentMask();this.ignoreModalTarget()}else{this.hideClickMask();this.hideModalMask()}}}
,isc.A.clear=function(_1,_2,_3,_4){if(this.$7k)isc.Animation.finishAnimation(this.$7k);this.invokeSuper(isc.Window,"clear",_1,_2,_3,_4);if(!this.clearingWithModalTarget&&this.isVisible()&&this.isModal){if(this.modalTarget){this.ignoreModalTarget();this.modalTarget.hideComponentMask()}else{this.hideClickMask();this.hideModalMask()}}}
,isc.A.parentResized=function(){this.Super("parentResized",arguments);if(this.autoCenter)this.centerInPage()}
,isc.A.moved=function(){if(this.isDrawn()&&!this.$7j)this.autoCenter=false}
,isc.A.centerInPage=function(){var _1=this.getVisibleWidth(),_2=this.getVisibleHeight(),_3=this.parentElement?this.parentElement:isc.Page,_4=((_3.getWidth()-_1)/2)+_3.getScrollLeft(),_5=((_3.getHeight()-_2)/2)+_3.getScrollTop();_4=Math.round(_4);_5=Math.round(_5);this.$7j=true;this.moveTo(_4,_5);this.$7j=null}
,isc.A.flash=function(_1){var _2=this.showHeader;if(_1==null){if(this.$7l)return false;this.$7l=true;_1=0;if(_2){this.$7m=this.header.getStateName();if(this.headerBackground){this.$7n=this.headerBackground.getStateName();this.$7o=this.headerBackground.src}}else{this.$7p=this.body.backgroundColor}}
if(_2){var _3=(_1%2==0?this.hiliteHeaderStyle:this.$7m),_4=(_1%2==0?this.hiliteHeaderSrc:this.$7o),_5=(_1%2==0?this.hiliteHeaderStyle:this.$7n);this.header.setStyleName(_3)
var _6=this.headerBackground;if(_6){this.headerBackground.setStyleName(_5)
if(_6.setSrc)_6.setSrc(_4)}}else{var _7=(_1%2==0?this.hiliteBodyColor:this.$7p);this.body.setBackgroundColor(_7)}
_1++;if(_1<4)this.delayCall("flash",[_1],100);else this.$7l=false;return false}
,isc.A.minimize=function(){if(this.$7k)isc.Animation.finishAnimation(this.$7k);if(this.minimized)return;if(!this.maximized){this.$7q=this.getHeight();this.$7r=this.getVisibleHeight();this.$7s=this.$po;this.$7t=this.canDragResize;this.canDragResize=false}else{if(this.maximizeButton){this.maximizeButton.addProperties(this.maximizeButtonDefaults);this.maximizeButton.redraw()}}
var _1;if(this.minimizeHeight){_1=this.minimizeHeight}else if(this.showHeader){var _2;if(this.header){_2=this.header.getHeight()}else{var _3=this.headerDefaults;_2=_3.height||_3.defaultHeight}
_1=_2+(this.layoutMargin*2)+this.getVMarginBorderPad()}else{_1=this.defaultMinimizeHeight}
if(this.overflow==isc.Canvas.VISIBLE){this.setHeight(this.getVisibleHeight())}
this.$7u=this.overflow;this.setOverflow("hidden");var _4=this.minimizeButton;if(_4){_4.disable();_4.addProperties(this.restoreButtonDefaults);_4.redraw()}
this.$7v=_1;if(this.animateMinimize&&this.isDrawn()&&this.isVisible()){this.$7w();this.$7k=isc.Animation.registerAnimation(this.animateMinimizeStep,(this.minimizeTime||this.animateTime),this.minimizeAcceleration||this.animateAcceleration,this)}else{this.completeMinimize(_1)}}
,isc.A.$7w=function(){if(this.body){this.$7x=this.body.getScrollTop();this.$7y=this.body.overflow;this.$7z=this.body.getHeight();this.$70=this.body.getWidth();this.$71=this.body.$po;this.$72=this.body.$pn;if(this.$7y==isc.Canvas.VISIBLE){this.body.resizeTo(this.body.getVisibleWidth(),this.body.getVisibleHeight())}
this.body.setOverflow(isc.Canvas.HIDDEN)}
if(this.footer){this.$73=this.footer.overflow;if(this.$73==isc.Canvas.VISIBLE){this.footer.setHeight(this.footer.getVisibleHeight())}
this.footer.setOverflow(isc.Canvas.HIDDEN)}}
,isc.A.$74=function(){if(this.body){this.body.scrollTo(null,this.$7x);this.body.resizeTo(this.$70,this.$7z);this.body.$po=this.$71;this.body.$pn=this.$72;this.body.setOverflow(this.$7y)}
if(this.footer){this.footer.scrollTo(null,0);this.footer.setHeight(this.footerHeight);this.footer.setOverflow(this.$73)}
delete this.$7x;delete this.$7z;delete this.$71;delete this.$70;delete this.$72;delete this.$7y;delete this.$73}
,isc.A.animateMinimizeStep=function(_1,_2,_3,_4,_5){var _6=(!_4&&!_5);if(this.maximized&&!this.$42u){this.$42v=(this.parentElement?this.parentElement.getInnerHeight():isc.Page.getHeight());this.$42w=(this.parentElement?this.parentElement.getInnerWidth():isc.Page.getWidth());this.$42u=true}
var _7=this.minimized?this.$7v:this.maximized?this.$42v:this.$7r,_8=_4?this.$7r:_5?this.$42v:this.$7v,_9=this.maximized?this.$42w:this.$42x,_10=_5?this.$42w:this.$42x;var _11=Math.round(_7+(_1*(_8-_7))),_12=(_10==_9?_10:Math.round(_9+(_1*(_10-_9))));var _13=_11-this.getVMarginBorder()-(2*this.layoutMargin)-
(this.showHeader?this.header.getHeight()+this.membersMargin:0),_14=(this.showBody?this.body:null),_15=(this.showFooter?this.footer:null),_16=0,_17=0,_18=(_15?this.footerHeight:0),_19=this.membersMargin||0;if(_15!=null){if(_13<=_18){_16=_13}else{_16=_18}}
var _20=_15?_18+_19:0;if(_14!=null&&(_13>_20)){_17=_13-_20}
if(_15){if(_16>0){if(_15.getHeight()!=_16){var _21=_15.getScrollTop()+_15.getViewportHeight();_15.resizeTo(null,_16);_15.scrollTo(null,_21-_15.getViewportHeight())}
if(!_15.isVisible())_15.show()}else if(_15.isVisible()){_15.hide()}}
if(_14){if(_17>0){if(_14.getHeight()!=_17){var _21=_14.getScrollTop()+_14.getViewportHeight();_14.resizeTo(null,_17);_14.scrollTo(null,_21-_14.getViewportHeight())}
if(!_14.isVisible())_14.show()}else if(_14.isVisible()){_14.hide()}}
if(_5||this.maximized){var _22=(_5?this.$42y:0),_23=(_5?this.$42z:0),_24=(_5?0:this.$42y),_25=(_5?0:this.$42z);this.moveTo(Math.round(_22+(_1*(_24-_22))),Math.round(_23+(_1*(_25-_23))),true)}
this.resizeBy((_12-this.getWidth()),(_11-this.getHeight()),null,null,true);if(_1==1){delete this.$42u;this.$74();delete this.$7k
if(_4)this.completeRestore(true);else if(_5)this.completeMaximize(true);else this.completeMinimize(this.$7v,true)}}
,isc.A.animateRestoreStep=function(_1,_2,_3){this.animateMinimizeStep(_1,_2,_3,true)}
,isc.A.animateMaximizeStep=function(_1,_2,_3){this.animateMinimizeStep(_1,_2,_3,null,true)}
,isc.A.isAnimating=function(_1,_2,_3,_4,_5){if(this.invokeSuper(isc.Window,"isAnimating",_1,_2,_3,_4,_5))return true;if(_1&&!isc.isAn.Array(_1))_1=[_1];if(this.$7k&&((_1==null)||(_1.contains("minimize"))||(_1.contains("rect"))))return true;return false}
,isc.A.completeMinimize=function(_1,_2){this.minimized=true;this.maximized=false;if(this.body&&this.body.isVisible())this.body.hide();if(this.footer&&this.footer.isVisible())this.footer.hide();this.$po=_1;if(this.$420!=null){if(!_2)this.setWidth(this.$420);this.$pn=this.$420}
if(!_2){this.setHeight(_1);if(this.$42y!=null)this.setLeft(this.$42y);if(this.$42z!=null)this.setTop(this.$42z)}
if(this.$421!=null)this.setShowShadow(this.$421);if(this.$422!=null&&this.headerLabel)
this.headerLabel.parentElement.canDragReposition=this.$422;delete this.$422;delete this.$42z;delete this.$42y;delete this.$421;delete this.$420;if(this.minimizeButton)this.minimizeButton.enable()}
,isc.A.restore=function(){if(this.$7k){isc.Animation.finishAnimation(this.$7k)}
if(!this.minimized&&!this.maximized)return;if(!this.$7r)this.$7r=this.getVisibleHeight();var _1=(this.minimized?this.minimizeButton:this.maximizeButton);if(_1){_1.disable();_1.addProperties(this.minimized?this.minimizeButtonDefaults:this.maximizeButtonDefaults);_1.redraw()}
if(this.animateMinimize&&this.isDrawn()&&this.isVisible()){this.$7w();this.$7k=isc.Animation.registerAnimation(this.animateRestoreStep,(this.minimizeTime||this.animateTime),this.minimizeAcceleration||this.animateAcceleration,this)}else{this.completeRestore()}}
,isc.A.completeRestore=function(_1){if(this.$7u!=null)this.setOverflow(this.$7u);if(this.$7q!=null)this.setHeight(this.$7q);if(this.$420!=null)this.setWidth(this.$420);if(!_1){if(this.$42y!=null)this.setLeft(this.$42y);if(this.$42z!=null)this.setTop(this.$42z)}
if(this.$po!=null)this.$po=this.$7s;if(this.$pn!=null)this.$pn=this.$423;if(this.$421!=null)this.setShowShadow(this.$421);if(this.$7t!=null)this.canDragResize=this.$7t;if(this.$422!=null&&this.headerLabel)
this.headerLabel.parentElement.canDragReposition=this.$422;var _2=this.minimized?this.minimizeButton:this.maximizeButton;this.minimized=false;this.maximized=false;this.$75();if(this.$424){this.reflowNow();this.setAutoSize(true)}
delete this.$7q;delete this.$7s;delete this.$7r;delete this.$7t;delete this.$422;delete this.$7u;delete this.$420;delete this.$423;delete this.$421;delete this.$42y;delete this.$42z;delete this.$424;if(_2)_2.enable()}
,isc.A.$75=function(){if(this.body&&!this.body.isVisible())this.body.show();if(this.footer&&!this.footer.isVisible())this.footer.show()}
,isc.A.maximize=function(){if(this.$7k)isc.Animation.finishAnimation(this.$7k);if(this.maximized)return;if(!this.minimized){this.$7q=this.getHeight();this.$7r=this.getVisibleHeight();this.$7s=this.$po;this.$7t=this.canDragResize;this.canDragResize=false}else{if(this.minimizeButton){this.minimizeButton.addProperties(this.minimizeButtonDefaults);this.minimizeButton.redraw()}}
this.$42y=this.getLeft();this.$42z=this.getTop();this.$420=this.getWidth();this.$42x=this.getVisibleWidth();this.$423=this.$pn;if(this.headerLabel){this.$422=this.headerLabel.parentElement.canDragReposition;this.headerLabel.parentElement.canDragReposition=false}
this.$421=this.showShadow;this.setShowShadow(false);if(this.autoSize){this.$424=true;this.setAutoSize(false)}
var _1=this.maximizeButton;if(_1){_1.disable();_1.addProperties(this.restoreButtonDefaults);_1.redraw()}
if(this.animateMinimize&&this.isDrawn()&&this.isVisible()){this.$42v=(this.parentElement?this.parentElement.getInnerHeight():isc.Page.getHeight());this.$42w=(this.parentElement?this.parentElement.getInnerWidth():isc.Page.getWidth());this.$7w();this.$7k=isc.Animation.registerAnimation(this.animateMaximizeStep,(this.minimizeTime||this.animateTime),this.minimizeAcceleration||this.animateAcceleration,this)}else{this.completeMaximize()}}
,isc.A.completeMaximize=function(_1){if(!_1)this.moveTo(0,0);this.resizeTo("100%","100%");this.$75();this.minimized=false;this.maximized=true;if(this.maximizeButton)this.maximizeButton.enable()}
,isc.A.resizeTo=function(_1,_2,_3,_4,_5){if(!_5&&this.$7k){isc.Animation.finishAnimation(this.$7k)}
return this.invokeSuper(isc.Window,"resizeTo",_1,_2,_3,_4,_5)}
,isc.A.resizeBy=function(_1,_2,_3,_4,_5){if(!_5&&this.$7k){isc.Animation.finishAnimation(this.$7k)}
return this.invokeSuper(isc.Window,"resizeBy",_1,_2,_3,_4,_5)}
,isc.A.$7e=function(){return this.closeClick()}
,isc.A.closeClick=function(){this.returnValue(null);this.hide();return false}
);isc.B._maxIndex=isc.C+69;if(isc.definePrintWindow)isc.definePrintWindow();isc.defineClass("PortletContainer","Layout","EditContext");isc.A=isc.PortletContainer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.defaultResizeBars="marked";isc.B.push(isc.A.getDropComponent=function(_1,_2){if(!isc.isA.Palette(_1))return _1;var _3=_1.transferDragData(),_4=(isc.isAn.Array(_3)?_3[0]:_3);var _5=isc.Portlet.create({autoDraw:false,title:_4.title,items:[_4.liveObject],closeClick:function(){isc.confirm("Close portlet?","if(value)"+this.getID()+".destroy()")}});return _5}
);isc.B._maxIndex=isc.C+1;isc.defineClass("Portlet","Window");isc.A=isc.Portlet.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.showShadow=false;isc.A.animateMinimize=true;isc.A.dragAppearance="outline";isc.A.canDrop=true;isc.A.dragType="Portlet";isc.A.resizeFrom=null;isc.A.showMaximizeButton=true;isc.A.headerControls=["headerLabel","minimizeButton","maximizeButton","closeButton"];isc.A.dragOpacity=30;isc.B.push(isc.A.closeClick=function(){isc.confirm("Close portlet?","if(value)"+this.getID()+".hide()")}
,isc.A.maximize=function(){var _1=this.getVisibleWidth(),_2=this.getVisibleHeight(),_3=this.getPageLeft(),_4=this.getPageTop();this.$55d=isc.Canvas.create({width:this.getVisibleWidth(),height:this.getVisibleHeight()});this.masterLayout=this.parentElement;this.masterLayout.portletMaximizing=true;this.masterLayout.replaceMember(this,this.$55d,false);this.masterLayout.portletMaximizing=false;this.setWidth(_1);this.setHeight(_2);this.moveTo(_3,_4);this.bringToFront();this.draw();this.delayCall("doMaximize")}
,isc.A.completeRestore=function(){this.Super("completeRestore",arguments);this.masterLayout.portletMaximizing=true;this.masterLayout.replaceMember(this.$55d,this);this.masterLayout.portletMaximizing=false;this.$55d.destroy();delete this.$55e;delete this.masterLayout}
,isc.A.doMaximize=function(){this.Super("maximize",arguments)}
);isc.B._maxIndex=isc.C+4;isc.defineClass("PortalColumnHeader","HLayout");isc.A=isc.PortalColumnHeader.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.height=20;isc.A.noResizer=true;isc.A.border="1px solid #CCCCCC";isc.A.canDragReposition=true;isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments);this.dragTarget=this.portalColumn;this.addMember(isc.LayoutSpacer.create());this.menu=isc.Menu.create({width:150,portalColumn:this.portalColumn,data:[{title:"Remove Column",click:"menu.portalColumn.destroy()"},{title:"Add Column",click:"menu.portalColumn.addNewColumn()"}]});this.addMember(isc.MenuButton.create({title:"Column Properties",width:150,menu:this.menu}));this.addMember(isc.LayoutSpacer.create())}
);isc.B._maxIndex=isc.C+1;isc.defineClass("PortalRow","PortletContainer");isc.A=isc.PortalRow.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.vertical=false;isc.A.overflow="hidden";isc.A.layoutMargin=3;isc.A.canAcceptDrop=true;isc.A.dropTypes=["Portlet"];isc.A.dropLineThickness=2;isc.A.dropLineProperties={backgroundColor:"blue"};isc.A.hDropOffset=15;isc.B.push(isc.A.isHDrop=function(){var _1=this.getDropPosition();var _2=this.getMember(_1==0?0:_1-1);if(!_2.containsEvent()&&_1<this.members.length){_2=this.getMember(_1)}
var _3=_2.getOffsetX();if(_3<this.hDropOffset||_3>_2.getVisibleWidth()-this.hDropOffset){return true}else{return false}}
,isc.A.dropMove=function(){if(this.isHDrop()){this.Super("dropMove",arguments);this.parentElement.hideDropLine();return isc.EH.STOP_BUBBLING}else{this.hideDropLine()}}
,isc.A.dropOver=function(){if(this.isHDrop()){this.Super("dropOver",arguments);this.parentElement.hideDropLine();return isc.EH.STOP_BUBBLING}else{this.hideDropLine()}}
,isc.A.drop=function(){if(this.isHDrop()){this.Super("drop",arguments);this.parentElement.hideDropLine();this.hideDropLine();return isc.EH.STOP_BUBBLING}else{this.hideDropLine()}}
,isc.A.membersChanged=function(){if(this.members.length==0&&!this.portletMaximizing)this.destroy();else this.invokeSuper(isc.PortalRow,"membersChanged",arguments)}
);isc.B._maxIndex=isc.C+5;isc.defineClass("PortalColumn","PortletContainer");isc.A=isc.PortalColumn.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.vertical=true;isc.A.border="1px solid gray";isc.A.layoutMargin=3;isc.A.dragAppearance="outline";isc.A.canAcceptDrop=true;isc.A.canDrop=true;isc.A.dragType="PortalColumn";isc.A.dropTypes=["Portlet"];isc.A.dropLineThickness=2;isc.A.dropLineProperties={backgroundColor:"blue"};isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments);this.columnHeader=isc.PortalColumnHeader.create({title:"Column",portalColumn:this});this.addMember(this.columnHeader)}
,isc.A.addNewColumn=function(){this.portalLayout.addColumnAfter(this)}
,isc.A.getDropComponent=function(_1,_2){var _3=this.Super("getDropComponent",arguments);var _4=isc.PortalRow.create();this.addMember(_4,this.getDropPosition());_4.addMember(_3)}
,isc.A.getDropPosition=function(){var _1=this.Super("getDropPosition",arguments);if(_1==0)_1=1;return _1}
);isc.B._maxIndex=isc.C+4;isc.defineClass("PortalLayout","Layout");isc.A=isc.PortalLayout.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.vertical=false;isc.A.numColumns=2;isc.A.canAcceptDrop=true;isc.A.dropTypes=["PortalColumn"];isc.A.dropLineThickness=2;isc.A.dropLineProperties={backgroundColor:"blue"};isc.B.push(isc.A.initWidget=function(){this.Super("initWidget",arguments);for(var i=0;i<this.numColumns;i++)this.addMember(this.makePortalColumn())}
,isc.A.makePortalColumn=function(_1){var _2=isc.PortalColumn.create({portalLayout:this},_1);return _2}
,isc.A.addColumnAfter=function(_1){var _2=this.getMemberNumber(_1)+1;this.addMember(this.makePortalColumn({}),_2)}
);isc.B._maxIndex=isc.C+3;isc.ClassFactory.defineClass("Dialog","Window");isc.A=isc.Dialog;isc.A.$76=[];isc.A.OK_BUTTON_TITLE="OK";isc.A.APPLY_BUTTON_TITLE="Apply";isc.A.YES_BUTTON_TITLE="Yes";isc.A.NO_BUTTON_TITLE="No";isc.A.CANCEL_BUTTON_TITLE="Cancel";isc.A.CONFIRM_TITLE="Confirm";isc.A.SAY_TITLE="Note";isc.A.WARN_TITLE="Note";isc.A.ASK_TITLE="Question";isc.A.ASK_FOR_VALUE_TITLE="Please enter a value";isc.A.LOGIN_TITLE="Please log in";isc.A.USERNAME_TITLE="Username";isc.A.PASSWORD_TITLE="Password";isc.A.LOGIN_BUTTON_TITLE="Log in";isc.A.LOGIN_ERROR_MESSAGE="Invalid username or password";isc.A.OK={getTitle:function(){return isc.Dialog.OK_BUTTON_TITLE},width:75,click:function(){this.topElement.okClick()}};isc.A.APPLY={getTitle:function(){return isc.Dialog.APPLY_BUTTON_TITLE},width:75,click:function(){this.topElement.applyClick()}};isc.A.YES={getTitle:function(){return isc.Dialog.YES_BUTTON_TITLE},width:75,click:function(){this.topElement.yesClick()}};isc.A.NO={getTitle:function(){return isc.Dialog.NO_BUTTON_TITLE},width:75,click:function(){this.topElement.noClick()}};isc.A.CANCEL={getTitle:function(){return isc.Dialog.CANCEL_BUTTON_TITLE},width:75,click:function(){this.topElement.cancelClick()}};isc.A=isc.Dialog.getPrototype();isc.A.styleName="dialogBackground";isc.A.skinImgDir="images/Dialog/";isc.A.canDragReposition=false;isc.A.canDragResize=false;isc.A.autoCenter=true;isc.A.bodyStyle="dialogBody";isc.A.bodyColor="#DDDDDD";isc.A.hiliteBodyColor="#FFFFFF";isc.A.messageStyle="normal";isc.A.headerStyle="dialogHeader";isc.A.hiliteHeaderStyle="dialogHeaderHilite";isc.A.headerLabelDefaults=isc.addProperties({},isc.Window.getInstanceProperty("headerLabelDefaults"),{styleName:"dialogHeaderText"});isc.A.showHeaderIcon=false;isc.A.showMinimizeButton=false;isc.A.showMaximizeButton=false;isc.A.showFooter=false;isc.A.showToolbar=true;isc.A.askIcon="[SKIN]ask.png";isc.A.sayIcon="[SKIN]say.png";isc.A.warnIcon="[SKIN]warn.png";isc.A.confirmIcon="[SKIN]confirm.png";isc.A.notifyIcon="[SKIN]notify.png";isc.A.errorIcon="[SKIN]error.png";isc.A.stopIcon="[SKIN]stop.png";isc.A=isc.Dialog.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.saveData=function(){}
,isc.A.cancelClick=function(){return this.closeClick()}
,isc.A.$7e=function(){return this.cancelClick()}
,isc.A.okClick=function(){this.saveData();this.clear();this.returnValue(true)}
,isc.A.applyClick=function(){this.saveData()}
,isc.A.yesClick=function(){this.returnValue(true)}
,isc.A.noClick=function(){this.returnValue(false)}
);isc.B._maxIndex=isc.C+7;isc.Dialog.Prompt={ID:"isc_globalPrompt",_generated:true,width:400,height:90,autoDraw:false,autoSize:true,isModal:true,autoCenter:true,showHeader:false,showFooter:false,showToolbar:false,dismissOnEscape:false,bodyStyle:"promptBody",message:"Loading...",blurbDefaults:{width:390,align:isc.Canvas.CENTER,valign:isc.Canvas.CENTER},layoutMargin:0,showMessage:function(_1,_2){this.setProperties(_2);this.message=_1;if(!this.$7f)this.createChildren();this.addAutoChild("blurb",null,isc.Label,this.body);if(this.messageStyle!=null)this.blurb.setBaseStyle(this.messageStyle);this.blurb.setContents(this.message);this.show()},clearMessage:function(){this.clear()},destroy:function(){isc.Dialog.Prompt=this.$77;return this.Super("destroy",arguments)}};isc.addGlobal("showPrompt",function(_1,_2){var _3=isc.Dialog.Prompt;if(!isc.isA.Dialog(_3)){var _4=_3;_3=isc.Dialog.Prompt=isc.Dialog.create(_3);_3.$77=_4}
isc.Dialog.Prompt.showMessage(_1,_2)});isc.addGlobal("clearPrompt",function(){if(!isc.isA.Dialog(isc.Dialog.Prompt))return;isc.Dialog.Prompt.clearMessage()});isc.Dialog.Warn={ID:"isc_globalWarn",_generated:true,width:400,height:60,isModal:true,canDragReposition:true,keepInParentRect:true,autoDraw:false,autoSize:true,autoCenter:true,toolbarButtons:[isc.Dialog.OK],message:"Your message here!",contentLayout:"horizontal",autoChildParentMap:isc.addProperties({},isc.Window.getInstanceProperty("autoChildParentMap"),{stack:"body",iconImg:"body",blurb:"stack",toolbar:"stack"}),stackDefaults:{height:1},bodyDefaults:isc.addProperties({},isc.Window.getInstanceProperty("bodyDefaults"),{layoutMargin:15,membersMargin:10}),toolbarDefaults:isc.addProperties({},isc.Window.getInstanceProperty("toolbarDefaults"),{width:20,layoutAlign:"center"}),iconImgDefaults:{width:32,height:32},createChildren:function(){this.showToolbar=false;this.Super("createChildren");this.addAutoChild("iconImg",null,isc.Img);this.addAutoChild("stack",null,isc.VStack);this.addAutoChild("blurb",{height:10},isc.Label);this.showToolbar=true;this.makeToolbar();this.body.hPolicy="fill"},showMessage:function(_1,_2){this.message=_1;this.setProperties(_2);if(_2.callback==null)delete this.callback;if(!this.$7f)this.createChildren();if(this.messageStyle!=null)this.blurb.setBaseStyle(this.messageStyle);this.blurb.setContents(this.message);if(this.icon){this.iconImg.setSrc(this.getImgURL(this.icon));this.iconImg.show()}else this.iconImg.hide();this.toolbar.layoutChildren();if(this.blurb.isDirty())this.blurb.redraw();if(this.isDrawn()){this.stack.layoutChildren();this.body.layoutChildren();this.layoutChildren()}
this.show();if(this.toolbar){var _3=this.toolbar.getMember(0);_3.focus()}}};isc.addGlobal("showMessage",function(_1,_2,_3,_4){if((isc.isA.String(_4)||isc.isA.Function(_4))||(_4==null&&isc.isAn.Object(_3)&&_3.methodName==null&&_3.action==null&&_3.method==null))
{var _5=_4;_4=_3;_3=_5}
if(!isc.isA.Dialog(isc.Dialog.Warn))isc.Dialog.Warn=isc.Dialog.create(isc.Dialog.Warn);if(!_4)_4={};if(!_4.buttons){if(_2=="confirm"){_4.buttons=[isc.Dialog.OK,isc.Dialog.CANCEL]}else if(_2=="ask"){_4.buttons=[isc.Dialog.YES,isc.Dialog.NO]}else{_4.buttons=[isc.Dialog.OK]}}
if(!_4.title){if(_2=="confirm")_4.title=isc.Dialog.CONFIRM_TITLE;else if(_2=="ask")_4.title=isc.Dialog.ASK_TITLE;else if(_2=="warn")_4.title=isc.Dialog.WARN_TITLE;else _4.title=isc.Dialog.SAY_TITLE}
isc.$78(_4);if(!_4.icon)_4.icon=isc.Dialog.getInstanceProperty(_2+"Icon");if(_3)_4.callback=_3;isc.Dialog.Warn.showMessage(_1,_4)});isc.$78=function(_1){var _2=this.$79=this.$79||["okClick","yesClick","noClick","cancelClick","closeClick","applyClick"];for(var i=0;i<_2.length;i++){var _4=_2[i];if(!_1[_4]){_1[_4]=isc.Dialog.getInstanceProperty(_4)}}}
isc.addGlobal("warn",function(_1,_2,_3){isc.showMessage(_1,"warn",_2,_3)});isc.addGlobal("say",function(_1,_2,_3){isc.showMessage(_1,"say",_2,_3)});isc.addGlobal("ask",function(_1,_2,_3){isc.showMessage(_1,"ask",_2,_3)});isc.confirm=function(_1,_2,_3){isc.showMessage(_1,"confirm",_2,_3)}
isc.askForValue=function(_1,_2,_3){_3=_3||isc.emptyObject;var _4=isc.Dialog.Ask
if(!_4){var askForm=isc.DynamicForm.create({numCols:1,padding:3,items:[{name:"message",type:"blurb"},{name:"value",showTitle:false,width:"*"}],saveOnEnter:true,submit:function(){this.askDialog.okClick()}});_4=isc.Dialog.Ask=isc.Dialog.create({items:[askForm],askForm:askForm,canDragReposition:true,isModal:true,bodyProperties:{overflow:"visible"},overflow:"visible"});askForm.askDialog=_4;_4.$8a=function(){this.clear();this.returnValue(this.askForm.getValue("value"))}}
var _5=_3.left!=null||_3.top!=null;_3=isc.addProperties({callback:_2,title:_3.title||isc.Dialog.ASK_FOR_VALUE_TITLE,autoCenter:!_5,left:(_5?_3.left||"10%":null),top:(_5?_3.top||"20%":null),width:_3.width||"80%",height:_3.height||20,buttons:_3.buttons||[isc.Dialog.OK,isc.Dialog.CANCEL],okClick:_3.okClick||_4.$8a},_3);isc.$78(_3);_4.setProperties(_3);_4.askForm.setValues({message:_1||"Please enter a value:",value:_3.defaultValue||""});_4.show();_4.askForm.focusInItem("value")}
isc.showLoginDialog=function(_1,_2){_2=_2||isc.emptyObject;var _3=isc.Dialog.Login;if(!_3){var _4=isc.DynamicForm.create({numCols:2,padding:4,autoDraw:false,fields:[{name:"loginFailure",type:"blurb",colSpan:2,visible:false},{name:"username",keyPress:function(_7,_8,_9){if(_9=="Enter"){_8.focusInItem("password");return false}}},{name:"password",type:"password"},{type:"button",name:"loginButton",type:"submit"}],saveOnEnter:true,submit:function(){var _4=this,_5=[{username:this.getValue("username"),password:this.getValue("password")}];_5[1]=function(_7){if(_7){_4.complete()}else{_4.showItem("loginFailure");_4.focusInItem("password")}};this.fireCallback(this.loginFunc,"credentials,dialogCallback",_5)},complete:function(_7){this.loginDialog.hide();this.setValue("username","");this.setValue("password","");this.hideItem("loginFailure");if(_7){this.fireCallback(this.loginFunc,"credentials,dialogCallback")}}});isc.Dialog.Login=_3=isc.Window.create({autoDraw:false,autoCenter:true,autoSize:true,isModal:true,loginForm:_4,showMinimizeButton:false,items:[_4],cancelClick:function(){this.loginForm.complete(true)}});_4.loginDialog=_3}
var _4=_3.loginForm;_2=isc.addProperties({title:_2.title||isc.Dialog.LOGIN_TITLE},_2);isc.$78(_2);_3.setProperties(_2);var _6=_2.dismissable!=null?_2.dismissable:false;_3.dismissOnEscape=_6;_3.setShowCloseButton(_6);_4.setValue("username",_2.username||"");_4.setValue("password",_2.password||"");_4.getItem("loginFailure").cellStyle=_2.errorStyle||"formCellError";_4.getItem("username").title=_2.usernameTitle||isc.Dialog.USERNAME_TITLE;_4.getItem("password").title=_2.passwordTitle||isc.Dialog.PASSWORD_TITLE;_4.getItem("loginButton").setTitle(_2.loginButtonTitle||isc.Dialog.LOGIN_BUTTON_TITLE);_4.markForRedraw();_4.loginFunc=_1;_4.setValue("loginFailure",_2.errorMessage||isc.Dialog.LOGIN_ERROR_MESSAGE);_3.show();_4.focusInItem("username")}
isc.ClassFactory.defineClass("TabSet","Canvas");isc.A=isc.TabSet.getPrototype();isc.A.overflow="hidden";isc.A.tabProperties={};isc.A.simpleTabBaseStyle="tabButton";isc.A.tabBarPosition=isc.Canvas.TOP;isc.A.tabBarThickness=21;isc.A.selectedTab=0;isc.A.closeTabIcon="[SKIN]/TabSet/close.png";isc.A.closeTabIconSize=16;isc.A.tabBarControls=["tabScroller","tabPicker"];isc.A.showTabScroller=true;isc.A.showTabPicker=true;isc.A.tabBarControlsConstructor="Layout";isc.A.tabBarControlsDefaults={};isc.A.animateTabScrolling=true;isc.A.scrollerButtonSize=16;isc.A.pickerButtonSize=16;isc.A.skinImgDir="images/TabSet/";isc.A.symmetricScroller=true;isc.A.scrollerSrc="[SKIN]/scroll.gif";isc.A.scrollerHSrc="[SKIN]hscroll.gif";isc.A.scrollerVSrc="[SKIN]vscroll.gif";isc.A.symmetricPickerButton=true;isc.A.pickerButtonSrc="[SKIN]/picker.gif";isc.A.pickerButtonHSrc="[SKIN]hpicker.gif";isc.A.pickerButtonVSrc="[SKIN]vpicker.gif";isc.A.paneContainerConstructor="PaneContainer";isc.A.paneContainerClassName="tabSetContainer";isc.A.paneContainerOverflow=isc.Canvas.AUTO;isc.A.symmetricEdges=true;isc.A=isc.TabSet.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.$537={top:"topEdgeSizes",bottom:"bottomEdgeSizes",left:"leftEdgeSizes",right:"rightEdgeSizes"};isc.A.$538={top:"topEdgeOffsets",bottom:"bottomEdgeOffsets",left:"leftEdgeOffsets",right:"rightEdgeOffsets"};isc.B.push(isc.A.initWidget=function(){this.showEdges=false;this.Super("initWidget",arguments);if(this.tabs==null)this.tabs=[];if(this.tabBarDefaults==null)this.tabBarDefaults={};this.tabProperties=this.tabProperties||this.tabInstanceDefaults||{};var _1=this.tabBarPosition;if(this.tabBarAlign==null){this.tabBarAlign=((_1=="left"||_1=="right")?"top":"left")}
if(this.useSimpleTabs){this.tabBarDefaults.buttonConstructor=isc.Button;this.tabProperties.baseStyle=this.simpleTabBaseStyle+_1.substring(0,1).toUpperCase()+_1.substring(1)}
this.makeTabBar();this.makePaneContainer();this.createPanes()}
,isc.A.makeTabBar=function(){if(this.tabs==null)return;var _1=(this.tabBarPosition==isc.Canvas.LEFT||this.tabBarPosition==isc.Canvas.RIGHT),_2=this.tabBarAlign;var _3=this.tabs.duplicate(),_4;for(var i=0;i<_3.length;i++){for(var j in this.tabProperties){if(_3[i][j]===_4)_3[i][j]=this.tabProperties[j]}}
var _7=isc.addProperties({selectTabOnContextClick:this.selectTabOnContextClick,ID:this.getID()+"_tabBar",width:(_1?this.tabBarThickness:"100%"),height:(_1?"100%":this.tabBarThickness),accessKey:this.accessKey,tabIndex:this.tabIndex,tabs:_3,align:this.tabBarAlign,vertical:_1?true:false,selectedTab:this.selectedTab,buttonDeselected:function(_8){this.Super("buttonDeselected",arguments);if(this.parentElement!=null)
this.parentElement.$8b(_8)},buttonSelected:function(_8){this.Super("buttonSelected",arguments);if(this.parentElement!=null){this.parentElement.$8c(_8)}},childResized:function(){this.Super("childResized",arguments);if(this.parentElement!=null){this.parentElement.$54m()}},tabBarPosition:this.tabBarPosition,tabBarAlign:this.tabBarAlign,autoDraw:false},this.tabBarDefaults,this.tabBarProperties);this.tabBar=this._tabBar=isc.TabBar.create(_7);this.addChild(this._tabBar)}
,isc.A.setTabIndex=function(_1){this.Super("setTabIndex",arguments)
if(this._tabBar!=null)this._tabBar.setTabIndex(_1)}
,isc.A.setAccessKey=function(_1){this.Super("setAccessKey",arguments);if(this._tabBar!=null)this._tabBar.setAccessKey(_1)}
,isc.A.createPanes=function(){for(var i=0;i<this.tabs.length;i++){var _2=this.tabs[i],_3=_2.pane;if(_3==null)continue;_2.pane=this.createPane(_3)}}
,isc.A.createPane=function(_1){if(_1==null)return _1;if(!isc.isA.Canvas(_1))_1=this.createCanvas(_1);if(_1==null)return _1;_1.hide();this.paneContainer.addMember(_1);return _1}
,isc.A.makePaneContainer=function(){var _1={ID:this.getID()+"_paneContainer",_generated:false,className:this.paneContainerClassName,layoutMargin:(this.paneMargin||0),overflow:this.paneContainerOverflow,$wn:function(){var _2=this.Super("$wn",arguments);_2.addMethods({$539:{top:"_top",left:"_left",bottom:"_bottom",right:"_right"},getEdgePrefix:function(_7){var _3=this.eventProxy,_4=_3?_3.creator:null;if(_4&&!_4.symmetricEdges){return this.$539[_4.tabBarPosition]}}});return _2}};if(this.showPaneContainerEdges!=null)_1.showEdges=this.showPaneContainerEdges;if(this.getPaneContainerEdges&&this.getPaneContainerEdges()!=null){_1.customEdges=this.getPaneContainerEdges()}
if(!this.symmetricEdges){var _5=this[this.$537[this.tabBarPosition]];if(_5&&_5.defaultSize!=null)_1.edgeSize=_5.defaultSize;if(_5&&_5.bottom!=null)_1.edgeBottom=_5.bottom;if(_5&&_5.top!=null)_1.edgeTop=_5.top;if(_5&&_5.left!=null)_1.edgeLeft=_5.left;if(_5&&_5.right!=null)_1.edgeRight=_5.right;var _6=this[this.$538[this.tabBarPosition]];if(_6&&_6.defaultSize!=null)_1.edgeOffset=_6.defaultSize;if(_6&&_6.bottom!=null)_1.edgeOffsetBottom=_6.bottom;if(_6&&_6.top!=null)_1.edgeOffsetTop=_6.top;if(_6&&_6.left!=null)_1.edgeOffsetLeft=_6.left;if(_6&&_6.right!=null)_1.edgeOffsetRight=_6.right}
this.addAutoChild("paneContainer",_1)}
,isc.A.getPaneContainerEdges=function(){if(this.showPartialEdges){if(this.tabBarPosition=="bottom")return["T","L","R"];else if(this.tabBarPosition=="left")return["T","B","R"];else if(this.tabBarPosition=="right")return["T","B","L"];else return["B","L","R"]}
return null}
,isc.A.draw=function(_1,_2,_3,_4){if(this.tabs&&this.tabs.length>0){var _5=this.getSelectedTabNumber();if(!isc.isA.Number(_5)||_5<0)_5=this.selectedTab=0;this._tabBar.selectTab(_5)}
this.invokeSuper(isc.TabSet,"draw",_1,_2,_3,_4);this.fixLayout()}
,isc.A.setTabTitle=function(_1,_2){this.getTabObject(_1).title=_2;this.getTab(_1).setTitle(_2);this.resetTabPickerMenu()}
,isc.A.setTabIcon=function(_1,_2){this.setTabProperties(_1,{icon:_2})}
,isc.A.enableTab=function(_1){this.setTabDisabled(_1,false)}
,isc.A.disableTab=function(_1){this.setTabDisabled(_1,true)}
,isc.A.setTabProperties=function(_1,_2){if(!_2)return;if(_2.ID!=null){this.logWarn("setTabProperties(): Unable to modify ID for an existing tab - ignoring "+"this property");delete _2.ID}
if(_2.pane!=null){this.updateTab(_1,_2.pane);delete _2.pane}
if(_2.disabled!=null){this.setTabDisabled(_1,_2.disabled);delete _2.disabled}
var _3=this.getTabObject(_1),_1=this.getTab(_1);if(!_3)return;isc.addProperties(_3,_2);if(_1){_1.setProperties(_2)}
this.resetTabPickerMenu()}
,isc.A.setTabDisabled=function(_1,_2){var _3=this.getTabObject(_1);if(_3)_3.disabled=_2;var _1=this.getTab(_1);if(_1){_1.setDisabled(_2);var _4=_1.pane;if(_4){if(isc.isA.Canvas(_4))_4.setDisabled(_2);else _4.disabled=_2}}
this.resetTabPickerMenu()}
,isc.A.addTab=function(_1,_2){return this.addTabs(_1,_2)}
,isc.A.addTabs=function(_1,_2){if(!isc.isAn.Array(_1))_1=[_1];var _3=this.getTab(this.getSelectedTabNumber()),_4=(this.getSelectedTabNumber()==-1);if(_2==null||_2>this.tabs.length)_2=this.tabs.length;for(var i=0;i<_1.length;i++){_1[i].pane=this.createPane(_1[i].pane);var _6;for(var _7 in this.tabProperties){if(_1[i][_7]===_6){_1[i][_7]=this.tabProperties[_7]}}
this.tabs.addAt(_1[i],(_2+i))}
this._tabBar.addTabs(_1,_2);this.resetTabPickerMenu();this.delayCall("fixLayout");if(_4){this.selectTab(0)}else{this.selectedTab=this.getTabNumber(_3)}
return _2}
,isc.A.removeTab=function(_1,_2){return this.removeTabs(_1,_2)}
,isc.A.removeTabs=function(_1,_2){if(!isc.isAn.Array(_1))_1=[_1];_1=this.map("getTab",_1);var _3=false,_4=this.getSelectedTab(),_5=0;for(var i=0;i<_1.length;i++){var _7=_1[i],_8=this.getTabNumber(_7),_9=this.tabs[_8];if(_9==_4){_3=true;if(_8>0)_5=_8-1;else if(_8<this.tabs.length+1)_5=_8}
this.tabs.removeAt(_8);var _10=_9.pane;if(_10&&_10.parentElement==this.paneContainer){this.paneContainer.removeChild(_10);if(!_2&&this.destroyPanes!==false)_10.destroy()}
this._tabBar.removeTabs(_7)}
if(_3&&this.tabs.length>0){if(_5>=this.tabs.length)_5=this.tabs.length-1;this.selectTab(_5)}
this.resetTabPickerMenu();this.delayCall("fixLayout",0)}
,isc.A.canCloseTab=function(_1){if(!isc.isAn.Object(_1))_1=this.getTabObject(_1);if(_1&&_1.canClose!=null)return _1.canClose;return this.canCloseTabs}
,isc.A.$52a=function(_1){var _2=this.canCloseTab(_1);if(_2){this.closeClick(_1);return false}else return this.tabIconClick(_1)}
,isc.A.closeClick=function(_1){this.removeTab(_1)}
,isc.A.tabIconClick=function(_1){var _2=_1.icon;if(_2&&_2.click)return this.fireCallback(_2.click,'tab,tabSet',[_1,this])}
,isc.A.getTabObject=function(_1){_1=this.getTabNumber(_1);return this.tabs[_1]}
,isc.A.getTab=function(_1){if(isc.isAn.Canvas(_1))return _1;if(!this.tabs)return null;if(this.tabs.contains(_1))_1=this.tabs.indexOf(_1);_1=this.getTabBar().getButton(_1);return _1}
,isc.A.getTabPane=function(_1){return this.getTabObject(_1).pane}
,isc.A.findTabObject=function(_1,_2){return this.tabs.find(_1,_2)}
,isc.A.getTabNumber=function(_1){if(isc.isA.Number(_1))return _1;if(!this.tabs)return null;var _2=this.tabs.indexOf(_1);if(_2!=-1)return _2;if(isc.isA.String(_1))return this.tabs.findIndex("ID",_1);return this.getTabBar().getButtonNumber(this.getTab(_1))}
,isc.A.updateTab=function(_1,_2){if(isc.isAn.Object(_1)&&!isc.isA.Canvas(_1)&&this.tabs.indexOf(_1)==-1)
{if(_2!=null)_1.pane=_2;return this.addTabs(_1)}
var _3=this.getTabNumber(_1);if(_3==-1){this.logWarn("no such tab: "+this.echo(_1));return}
var _4=this.getTabObject(_3),_5=_4.pane;if(_4.pane==_2)return;if(_5!=null){_5.hide();_5.deparent()}
var _6=this.getTab(_1);if(_2==null)return _4.pane=_6.pane=null;_2=_4.pane=this.createPane(_2);if(_6!=null)_6.pane=_2;if(!this.isDrawn())return;if(this.getSelectedTabNumber()==_3){if(!this.paneContainer.hasMember(_2))this.paneContainer.addMember(_2);_2.show()}}
,isc.A.fixLayout=function(){var _1=this._tabBar,_2=this.$l0||this.paneContainer;if(_1==null||_2==null)return;if(_2.getZIndex(true)>=_1.getZIndex(true))_2.moveBelow(_1);var _3=this.$du(this.tabBarOverlap,_1.borderThickness,_1.baseLineThickness);var _4;switch(this.tabBarPosition){case isc.Canvas.TOP:_4=false;_2.setRect(0,_1.getHeight()-_3,this.getWidth(),this.getHeight()-_1.getHeight()+_3);break;case isc.Canvas.BOTTOM:_4=false;_1.setTop(this.getHeight()-_1.getHeight());_2.setRect(0,0,this.getWidth(),this.getHeight()-_1.getHeight()+_3);break;case isc.Canvas.LEFT:_4=true;_2.setRect(_1.getWidth()-_3,0,this.getWidth()-_1.getWidth()+_3,this.getHeight());break;case isc.Canvas.RIGHT:_4=true;_1.setLeft(this.getWidth()-_1.getWidth());_2.setRect(0,0,this.getWidth()-_1.getWidth()+_3,this.getHeight());break}
var _5=this.showControls();if(_5){if(_4)_1.setHeight(this.getViewportHeight()-this.$8e.getHeight());else _1.setWidth(this.getViewportWidth()-this.$8e.getWidth())}else{_1.resizeTo(_4?null:"100%",_4?"100%":null)}
var _6=this.$8f();if(_4){if(_1.getScrollTop()>0&&_6<=_1.getViewportHeight())_1.scrollTo(null,0)}else{if(_1.getScrollLeft()>0&&_6<=_1.getViewportWidth())_1.scrollTo(0,null)}}
,isc.A.shouldShowControl=function(_1){if((_1=="tabScroller")||(_1=="tabPicker")){if(!this.showTabScroller&&_1=="tabScroller")return false;if(!this.showTabPicker&&_1=="tabPicker")return false;var _2=this.$8f();if(_2==0)return;var _3=0;for(var i=0;i<this.tabBarControls.length;i++){var _5=this.tabBarControls[i];if(_5=="tabScroller"||_5=="tabPicker")continue;if(this.shouldShowControl(_5)){if(!isc.isA.Canvas(_5))_5=this.getControl(_5);_3+=_6?_5.getHeight():_5.getWidth()}}
var _6=(this._tabBar.orientation==isc.Layout.VERTICAL),_7=(_2>(_6?(this.getViewportHeight()-_3):(this.getViewportWidth()-_3)));return _7}
var _1=this.getControl(_1);if(isc.isA.Canvas(_1)){if(_1.showIf)return _1.fireCallback(_1.showIf,[_1]);else return true}}
,isc.A.$8f=function(){if(!this._tabBar)return 0;var _1=this._tabBar.getMemberSizes(),_2=this._tabBar.vertical;if(_1==null||_1.length==0)return 0;_1=_1.sum();var _3=(_2?(this._tabBar.$td||0)+(this._tabBar.$te||0):(this._tabBar.$tb||0)+(this._tabBar.$tc||0));return _1+_3}
,isc.A.getControl=function(_1){if(isc.isA.Canvas(_1))return _1;var _2=(this._tabBar.orientation==isc.Layout.VERTICAL);if(_1=="tabScroller"){if(!this.scroller){var _3=this.scrollerButtonSize;var _4;if(this.symmetricScroller){_4=_2?this.scrollerVSrc:this.scrollerHSrc}else{_4=this.scrollerSrc}
var _5=this.symmetricScroller?"back":this.tabBarPosition+"_back",_6=this.symmetricScroller?"forward":this.tabBarPosition+"_forward";this.scroller=isc.StretchImgButton.create({noDoubleClicks:true,tabSet:this,vertical:_2,width:_2?(this.tabBarThickness-this._tabBar.baseLineThickness):(2*_3),height:_2?(2*_3):(this.tabBarThickness-this._tabBar.baseLineThickness),items:[{name:_5,width:_2?null:_3,height:_2?_3:null},{name:_6,width:_2?null:_3,height:_2?_3:null}],skinImgDir:this.skinImgDir,src:_4,showRollOver:false,showDown:false,backPartName:_5,forwardPartName:_6,mouseMove:function(){if(!this.tabSet.showScrollerRollOver)return;var _7=this.inWhichPart();var _8=_7==this.backPartName?this.forwardPartName:this.backPartName;this.setState(isc.StatefulCanvas.STATE_UP,_8);this.setState(isc.StatefulCanvas.STATE_OVER,_7)},mouseOut:function(){if(!this.tabSet.showScrollerRollOver)return;this.setState(isc.StatefulCanvas.STATE_UP,this.forwardPartName);this.setState(isc.StatefulCanvas.STATE_UP,this.backPartName)},mouseDown:function(){this.clickPart=this.inWhichPart();this.setState(isc.StatefulCanvas.STATE_DOWN,this.clickPart)},mouseUp:function(){this.setState(isc.StatefulCanvas.STATE_UP,this.clickPart)},mouseStillDown:function(){this.click()},click:function(){var _9=this.clickPart==this.backPartName;if(_9)this.tabSet.scrollBack();else this.tabSet.scrollForward();return false}})}
return this.scroller}else if(_1=="tabPicker"){var _10=this.pickerButtonSize;if(!this.tabPicker){var _11;if(this.symmetricPickerButton){_11=_2?this.pickerButtonVSrc:this.pickerButtonHSrc}else{_11=this.pickerButtonSrc}
this.tabPicker=isc.ImgButton.create({customState:this.symmetricPickerButton?null:this.tabBarPosition,tabSet:this,showRollOver:false,skinImgDir:this.skinImgDir,src:_11,height:(_2?_10:(this.tabBarThickness-this._tabBar.baseLineThickness)),width:(_2?(this.tabBarThickness-this._tabBar.baseLineThickness):_10),click:"this.tabSet.showTabPickerMenu()"})}
return this.tabPicker}
if(isc.isA.String(_1)&&isc.isA.Canvas(window[_1]))return window[_1];this.logWarn("Unable to resolve specified tabBarControl:"+isc.Log.echo(_1)+" to a valid control. Not displaying.");return null}
,isc.A.showControls=function(){var _1=this.tabBarControls,_2=0,_3=this.tabBarPosition,_4=_3==isc.Canvas.RIGHT||_3==isc.Canvas.LEFT,_5=0;for(var i=0;i<_1.length;i++){var _7=_1[i];if(!this.shouldShowControl(_7))continue;_7=this.getControl(_7);if(!_7)continue;if(!this.$8e){this.$8e=this.createAutoChild("tabBarControls",{tabSet:this,styleName:this.tabBar.styleName,childResized:function(){this.Super("childResized",arguments);this.tabSet.$510()},vertical:_4})}
if(this.$8e.getMemberNumber(_7)!=_5){this.$8e.addMember(_7,_5)}
_5++;_2+=_4?_7.getVisibleHeight():_7.getVisibleWidth()}
if(this.$8e&&this.$8e.members){var _8=[];for(var i=_5;i<this.$8e.members.length;i++){_8.add(i)}
this.$8e.removeMembers(_8)}
if(_5==0){this.hideControls();return false}
this.placeControlLayout(_2);if(!this.$8g){var _9=this._tabBar;this.$8g=this._tabBar.createAutoChild("baseLine",{vertical:(_3==isc.Canvas.LEFT||_3==isc.Canvas.RIGHT),_generated:true,skinImgDir:_9.skinImgDir,src:_9.baseLineSrc,capSize:_9.baseLineCapSize,imageType:isc.Img.STRETCH,autoDraw:false});this.addChild(this.$8g)}
var _9=this._tabBar,_10=(this.tabBarThickness-_9.baseLineThickness);if(_3==isc.Canvas.LEFT){this.$8g.setRect(_10,0,_9.baseLineThickness,this.getHeight())}else if(_3==isc.Canvas.RIGHT){this.$8g.setRect(this.getWidth()-this.tabBarThickness,0,_9.baseLineThickness,this.getHeight())}else if(_3==isc.Canvas.TOP){this.$8g.setRect(0,_10,this.getWidth(),_9.baseLineThickness)}else if(_3==isc.Canvas.BOTTOM){this.$8g.setRect(0,this.getHeight()-this.tabBarThickness,this.getWidth(),_9.baseLineThickness)}
if(!this.$8e.isVisible())this.$8e.show();this.$8g.moveBelow(_9);if(!this.$8g.isVisible())this.$8g.show();return true}
,isc.A.placeControlLayout=function(_1){var _2,_3,_4,_5,_6=this._tabBar,_7=(this.tabBarThickness-_6.baseLineThickness),_8=this.tabBarPosition;if(_8==isc.Canvas.LEFT){_2=0;_3=this.getHeight()-_1;_4=_7;_5=_1}else if(_8==isc.Canvas.RIGHT){_2=this.getWidth()-_7;_3=this.getHeight()-_1;_4=_7;_5=_1}else if(_8==isc.Canvas.BOTTOM){_4=_1;_2=this.getWidth()-_1;_3=this.getHeight()-_7;_5=_7}else{_4=_1;_2=this.getWidth()-_1;_3=0;_5=_7}
this.$8e.setRect(_2,_3,_4,_5);if(!this.children.contains(this.$8e))this.addChild(this.$8e)}
,isc.A.$510=function(){var _1=this.$8e;if(!_1||!_1.isDrawn()||!_1.isVisible())return;var _2=0;for(var i=0;i<_1.members.length;i++){if(_1.vertical)_2+=_1.members[i].getVisibleHeight();else _2+=_1.members[i].getVisibleWidth()}
this.placeControlLayout(_2)}
,isc.A.hideControls=function(){if(this.$8e&&this.$8e.isVisible())this.$8e.hide();if(this.$8g&&this.$8g.isVisible())this.$8g.hide()}
,isc.A.scrollForward=function(){this._tabBar.scrollForward(this.animateTabScrolling)}
,isc.A.scrollBack=function(){this._tabBar.scrollBack(this.animateTabScrolling)}
,isc.A.showTabPickerMenu=function(){if(!this.$8d){var _1=this.tabs,_2=[];for(var i=0;i<_1.length;i++){_2[i]={index:i,enabled:!this.tabs[i].disabled,checkIf:"this.tabSet.getSelectedTabNumber() == "+i,title:_1[i].pickerTitle||_1[i].title,icon:(this.canCloseTab(_1[i])?null:_1[i].icon),click:"menu.tabSet.selectTab(item.index)"}}
this.$8d=isc.Menu.create({tabSet:this,data:_2})}
this.$8d.$8h();this.$8d.placeNear(this.tabPicker.getPageLeft(),this.tabPicker.getPageBottom())
this.$8d.show()}
,isc.A.resetTabPickerMenu=function(){if(this.$8d){this.$8d.destroy();delete this.$8d}}
,isc.A.layoutChildren=function(_1,_2,_3,_4){this.invokeSuper(isc.TabSet,"layoutChildren",_1,_2,_3,_4);this.fixLayout()}
,isc.A.$54m=function(){this.fixLayout()}
,isc.A.$8i=function(_1){if(isc.isA.Canvas(_1))_1=this.getTabObject(_1);this.paneContainer.scrollTo(0,0);if(_1&&_1.pane){if(!this.paneContainer.hasMember(_1.pane))this.paneContainer.addMember(_1.pane);_1.pane.show()}
this.paneContainer.adjustOverflow()}
,isc.A.$8c=function(_1){var _2=this._tabBar.getButtonNumber(_1);this.selectedTab=_2;if(this.tabSelected){var _3=this.getTabObject(_2);this.tabSelected(_2,_3.pane,_3.ID,_3);if(this.getSelectedTabNumber()!=_2)return}
this.$8i(_1);var _4=this._tabBar;_4.scrollTabIntoView(_2,null,this.animateTabScrolling)}
,isc.A.$8b=function(_1){var _2=this._tabBar.getButtonNumber(_1),_3=this.getTabObject(_2);if(this.tabDeselected)this.tabDeselected(_2,_3.pane,_3.ID,_3);if(_3&&_3.pane)_3.pane.hide()}
,isc.A.getSelectedTab=function(){return this.tabs[this.selectedTab]}
,isc.A.getSelectedTabNumber=function(){if(!isc.isA.Number(this.selectedTab))this.selectedTab=this.getTabNumber(this.selectedTab);if(!this.tabs||!this.tabs[this.selectedTab])return-1;return this.selectedTab}
,isc.A.selectTab=function(_1){var _2=this.getTabNumber(_1);if(_2!=-1){if(this._tabBar&&this.isDrawn())this._tabBar.selectTab(_2);else this.selectedTab=_2}}
,isc.A.getTabBar=function(){return this._tabBar}
);isc.B._maxIndex=isc.C+50;isc.TabSet.registerStringMethods({tabSelected:"tabNum,tabPane,ID,tab",tabDeselected:"tabNum,tabPane,ID,tab",getPaneContainerEdges:""});isc.defineClass("PaneContainer","VLayout");isc.A=isc.PaneContainer.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.handleKeyPress=function(_1,_2){if(_1.keyName=="Tab"&&_1.ctrlKey){var _3=this.parentElement,_4=_3.tabs.length-1,_5=_3.getSelectedTabNumber();if(_1.shiftKey){if(_5>0)_5-=1;else _5=_4}else{if(_5<_4)_5+=1;else _5=0}
_3.selectTab(_5);_3.getTabBar().getButton(_5).focus();return false}
if(this.convertToMethod("keyPress"))return this.keyPress(_1,_2)}
);isc.B._maxIndex=isc.C+1;isc._moduleEnd=isc._Containers_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('Containers module init time: ' + (isc._moduleEnd-isc._moduleStart) + 'ms','loadTime');}else{if(window.isc && isc.Log && isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'Containers'.");}

/*

  SmartClient Ajax RIA system
  Version 7.0beta4/LGPL Development Only (2009-02-24)

  Copyright 2000-2007 Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF THE
     SOFTWARE EVALUATION LICENSE AGREEMENT. If you have received this file
     without an Isomorphic Software license file, please see:

         http://www.isomorphic.com/licenses/isc_eval_license_050316.html

     You are not required to accept this agreement, however, nothing else
     grants you the right to copy or use this software. Unauthorized copying
     and use of this software is a violation of international copyright law.

  EVALUATION ONLY
     This software is provided for limited evaluation purposes only. You must
     acquire a deployment license from Isomorphic Software in order to use
     the SmartClient system, or any portion thereof, in any non-evaluation
     application, including internal or non-commercial applications.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. YOU ARE EXPRESSLY PROHIBITED
     FROM ATTEMPTING TO REVERSE ENGINEER THIS SOFTWARE OR MODIFY THIS
     SOFTWARE FOR HUMAN READABILITY.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

