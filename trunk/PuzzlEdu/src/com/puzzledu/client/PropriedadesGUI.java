package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.types.TreeModelType;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.ListGridRecord;
import com.smartgwt.client.widgets.grid.events.CellClickEvent;
import com.smartgwt.client.widgets.grid.events.CellClickHandler;
import com.smartgwt.client.widgets.grid.events.CellContextClickEvent;
import com.smartgwt.client.widgets.grid.events.CellContextClickHandler;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import com.smartgwt.client.widgets.tree.Tree;
import com.smartgwt.client.widgets.tree.TreeGrid;
import com.smartgwt.client.widgets.tree.TreeGridField;
import com.smartgwt.client.widgets.tree.TreeNode;

public class PropriedadesGUI {

	private ListGrid listaPropriedades;
	private ColecaoClasse colecaoClasse;
	private Tree treeInterfaces;
	
	public PropriedadesGUI(ColecaoClasse colecaoClasse) {

		this.colecaoClasse = colecaoClasse;
	}

	public TabSet createPainelPropriedades() {
		
		TabSet topTabSet = new TabSet();
		topTabSet.setTabBarPosition(Side.TOP);
		topTabSet.setWidth100();
		topTabSet.setHeight(245);
		
		Tab tabMetodos = new Tab("Propriedades", "pieces/16/piece_yellow.png");
		Tab tabInterfaces = new Tab("Interfaces", "pieces/16/piece_blue.png");
		
		topTabSet.addTab(tabMetodos);  
        topTabSet.addTab(tabInterfaces); 
                        
        tabMetodos.setPane(createPropriedades());                
        tabInterfaces.setPane(createArvoreInterfaces());
                
        return topTabSet;
	}
	
	private ListGrid createPropriedades() {
		
		listaPropriedades = new ListGrid();
        listaPropriedades.setCellHeight(24);
        listaPropriedades.setImageSize(16);
        listaPropriedades.setWidth100();
        listaPropriedades.setHeight100();
        listaPropriedades.setTop(25);
        listaPropriedades.setBorder("0px");
        listaPropriedades.setBodyStyleName("normal");        
        listaPropriedades.setAlternateRecordStyles(true);
        listaPropriedades.setShowHeader(false);
        listaPropriedades.setEmptyMessage("Nenhuma Propriedade.");
        
        ListGridField imageField = new ListGridField("imageField", 24);
        imageField.setType(ListGridFieldType.IMAGE);
        imageField.setImgDir("/icons/");

        ListGridField nameField = new ListGridField("name");
        
        listaPropriedades.setFields(imageField, nameField);
        
        return listaPropriedades;
	}

	public TreeGrid createArvoreInterfaces() {
    	
        treeInterfaces = new Tree();  
        treeInterfaces.setModelType(TreeModelType.CHILDREN);  
        treeInterfaces.setShowRoot(false);
        treeInterfaces.setNameProperty("Name");  
        treeInterfaces.setIdField("Id");
        treeInterfaces.setParentIdField("ParentId"); 
        treeInterfaces.setData(getInterfaces("Object"));
                  
        TreeGrid treeGrid = new TreeGrid();  
        treeGrid.setFields(new TreeGridField("Name", "Interfaces"));  
        treeGrid.setData(treeInterfaces);            
        treeGrid.getData().openAll();
        treeGrid.setWidth100();
        treeGrid.setHeight100();
        treeGrid.setShowHeader(false);
        treeGrid.setShowResizeBar(true);
        treeGrid.setEmptyMessage("Nenhuma Interface.");
        treeGrid.setAppImgDir("/icons/");
        treeGrid.setShowResizeBar(false);
                
        treeGrid.addCellContextClickHandler(new CellContextClickHandler() {
			
			public void onCellContextClick(CellContextClickEvent event) {
				
				/*Menu menu = getMenuClasses(((ClasseTreeNode) event.getRecord()));
				menu.setTop(event.getY());
				menu.setLeft(event.getX());
				
				menu.draw();
				
				event.cancel();*/  
			}
		});
        
        treeGrid.addCellClickHandler(new CellClickHandler() {
			
			public void onCellClick(CellClickEvent event) {
				
				//propriedadesGUI.getLista().setData(getListaPropriedades(((ClasseTreeNode) event.getRecord()).getAttribute("Name")));
			}
		});
        
        return treeGrid;
    }
   
    public InterfaceTreeNode[] getInterfaces(String nomeClasse) {
    	
    	List<InterfaceTreeNode> listaNodes = new ArrayList<InterfaceTreeNode>();
    	
    	Classe classe = colecaoClasse.procurarClasse(colecaoClasse.getRaiz(), nomeClasse);

    	if (classe.getInterfaces() == null)
    		return null;
    		
    	for (Interface i : classe.getInterfaces()) {
    		    	
    		InterfaceTreeNode node = new InterfaceTreeNode(i.getNome(), i.getNome(), true);
    		listaNodes.add(node);
    	}
    	
    	InterfaceTreeNode [] lst = new InterfaceTreeNode[listaNodes.size()];
    	int i = 0;
    	
    	for (InterfaceTreeNode t : listaNodes){
    		
    		lst[i] = t;
    		i++;
    	}

    	return lst;
    }

	public ListGrid getListaPropriedades() {
		return listaPropriedades;
	}

	public Tree getTreeInterfaces() {
		return treeInterfaces;
	}
	
	public ListGridRecord[] getPropriedades(String nomeClasse) {

		List<Variavel> variaveis = new ArrayList<Variavel>();
		
		Classe classe = colecaoClasse.procurarClasse(colecaoClasse.getRaiz(), nomeClasse);
		
		Classe c = classe;
		
		while (c != null) {
			
			if (c.getVariaveis() != null)
				variaveis.addAll(c.getVariaveis());
			
			c = c.getParent();
		}
		
		List<Metodo> metodos = new ArrayList<Metodo>();
		
		c = classe;
		
		while (c != null) {
			
			if (c.getMetodos() != null)
				metodos.addAll(c.getMetodos());
			
			c = c.getParent();
		}		
		
		
		if (variaveis.size() + metodos.size() == 0)
			return new ListGridRecord[0];
		
		ListGridRecord[] lst = new ListGridRecord[variaveis.size()+metodos.size()+1];

		int indice=0;
		
		for (int i=0; i<variaveis.size(); i++) {
			
			ListGridRecord record = new ListGridRecord();
			record.setAttribute("imageField", "/icons/bullet_green.png");
			record.setAttribute("name", variaveis.get(i).getNome());
			
			lst[indice] = record;
			indice++;
		}
		
		for (int i=0; i<metodos.size(); i++) {
			
			ListGridRecord record = new ListGridRecord();
			record.setAttribute("imageField", "/icons/shape_square.png");
			record.setAttribute("name", metodos.get(i).getNome() + " : " + metodos.get(i).getRetorno());
			
			lst[indice] = record;
			indice++;
		}		
		
		return lst;
	}	
}


class InterfaceTreeNode extends TreeNode {  
	  
    public InterfaceTreeNode(String classeId, String name, boolean abstrata) {  
        
    	super(name);
    	
    	setClasseId(classeId);  
        setName(name);  
        
        if (abstrata)
        	setIcon("/icons/puzzle_white.png");
        else
        	setIcon("/icons/puzzle_green.png");                
    }  
    
	public InterfaceTreeNode(String classeId, String name, String parentId, boolean abstrata) {  
        
    	setClasseId(classeId);  
    	setParentId(parentId);  
        setName(name);   
        
        if (abstrata)
        	setIcon("/icons/puzzle_white.png");
        else
        	setIcon("/icons/puzzle_green.png");
    }  

    public void setClasseId(String value) {  
        setAttribute("Id", value);  
    }  

    public void setParentId(String value) {  
        setAttribute("ParentId", value);  
    }  

    public void setName(String name) {  
        setAttribute("Name", name);  
    }  
    
    public void setIcon(String icon) {
        setAttribute("icon", icon);
    } 
    
    public void setIcon(boolean abstrata) {
    	
        if (abstrata)
        	setIcon("/icons/puzzle_white.png");
        else
        	setIcon("/icons/puzzle_green.png");    	
    }
}