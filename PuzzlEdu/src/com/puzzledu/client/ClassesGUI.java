package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.TreeModelType;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.util.BooleanCallback;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.ButtonItem;
import com.smartgwt.client.widgets.form.fields.CheckboxItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.events.CellClickEvent;
import com.smartgwt.client.widgets.grid.events.CellClickHandler;
import com.smartgwt.client.widgets.grid.events.CellContextClickEvent;
import com.smartgwt.client.widgets.grid.events.CellContextClickHandler;
import com.smartgwt.client.widgets.menu.Menu;
import com.smartgwt.client.widgets.menu.MenuItem;
import com.smartgwt.client.widgets.menu.MenuItemSeparator;
import com.smartgwt.client.widgets.menu.events.ClickHandler;
import com.smartgwt.client.widgets.menu.events.MenuItemClickEvent;
import com.smartgwt.client.widgets.tree.Tree;
import com.smartgwt.client.widgets.tree.TreeGrid;
import com.smartgwt.client.widgets.tree.TreeGridField;
import com.smartgwt.client.widgets.tree.TreeNode;

public class ClassesGUI {

	private Tree tree;
	private PropriedadesGUI propriedadesGUI;
	private ColecaoClasse colecaoClasse;
	
	public ClassesGUI(ColecaoClasse colecaoClasse, PropriedadesGUI propriedadesGUI) {

		this.propriedadesGUI = propriedadesGUI;
		this.colecaoClasse = colecaoClasse;
	}

	public TreeGrid createArvoreClasses() {
    	
        tree = new Tree();  
        tree.setModelType(TreeModelType.CHILDREN);  
        tree.setShowRoot(true);
        tree.setNameProperty("Name");  
        tree.setIdField("Id");
        tree.setParentIdField("ParentId"); 
        tree.setData(getClasses());
                  
        TreeGrid treeGrid = new TreeGrid();  
        treeGrid.setFields(new TreeGridField("Name", "Classes"));  
        treeGrid.setData(tree);            
        treeGrid.getData().openAll();
        treeGrid.setWidth100();
        treeGrid.setHeight(330);
        treeGrid.setShowResizeBar(true);
        treeGrid.setAppImgDir("/icons/");  
        
        treeGrid.addCellContextClickHandler(new CellContextClickHandler() {
			
			public void onCellContextClick(CellContextClickEvent event) {
				
				Menu menu = createMenuClasses(((ClasseTreeNode) event.getRecord()));
				menu.setTop(event.getY());
				menu.setLeft(event.getX());
				
				menu.draw();
				
				event.cancel();  
			}
		});
        
        treeGrid.addCellClickHandler(new CellClickHandler() {
			
			public void onCellClick(CellClickEvent event) {
				
				propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(((TreeNode) event.getRecord()).getAttribute("Name")));
				
				TreeNode[] nodes = propriedadesGUI.getInterfaces(((TreeNode) event.getRecord()).getAttribute("Name"));
				
				if (nodes != null)
					propriedadesGUI.getTreeInterfaces().setData(nodes);
				
			}
		});
        
        return treeGrid;
    }
   
    public TreeNode[] getClasses() {
    	
    	List<TreeNode> listaNodes = new ArrayList<TreeNode>();
    	
    	Classe raiz = colecaoClasse.getRaiz();
    	
    	ClasseTreeNode raizNode = new ClasseTreeNode(raiz.getNome(), raiz.getNome(), true);
    	
    	listaNodes.add(raizNode);
    	
    	getClassesFilhas(listaNodes, raiz);
    	
    	TreeNode [] lst = new TreeNode[listaNodes.size()+1];
    	int i = 0;
    	
    	for (TreeNode t : listaNodes){
    		
    		lst[i] = t;
    		i++;
    	}
    	
    	return lst;
    }
    
    public void getClassesFilhas(List<TreeNode> listaNodes, Classe raiz) {
    	
    	if (raiz.getFilhas() == null)
    		return;
    	
    	for (Classe c : raiz.getFilhas()) {
    		
        	ClasseTreeNode node = new ClasseTreeNode(c.getNome(), c.getNome(), raiz.getNome(), c.isAbstrata());
    	
        	listaNodes.add(node);
        	
        	getClassesFilhas(listaNodes, c);
    	}    	
    }
                    
    private Menu createMenuClasses(final ClasseTreeNode raiz) {
		
    	Classe classeSelecionada = colecaoClasse.procurarClasse(colecaoClasse.getRaiz(), raiz.getAttribute("Name"));
    	
    	Menu menuClasses = new Menu();
    	menuClasses.setWidth(130);
    	menuClasses.setCanSelectParentItems(true);
    	
    	MenuItem itemNovaClasse = new MenuItem("Nova Classe", "/icons/plugin_add.png"); 
    	
    	itemNovaClasse.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				final Window winModal = new Window();  
                winModal.setWidth(360);  
                winModal.setHeight(130);  
                winModal.setTitle("Digita o nome da nova classe");  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage(); 
                
                DynamicForm form = new DynamicForm();
                form.setAutoFocus(true);
                form.setNumCols(2);
                form.setHeight100();  
                form.setWidth100();  
                form.setPadding(10);  
                form.setLayoutAlign(VerticalAlignment.CENTER);  
                form.setAlign(Alignment.CENTER);
                
                final TextItem textItem = new TextItem();
                textItem.setWidth(200);
                textItem.setTop(20);
                textItem.setTitle("Nome");                
                textItem.setWrapTitle(true);
                
                final CheckboxItem checkAbstract = new CheckboxItem();
                checkAbstract.setTitle("Abstract");

                ButtonItem btnAdicionar = new ButtonItem(); 
                btnAdicionar.setTitle("Adicionar");
                
                ButtonItem btnCancelar = new ButtonItem();
                btnCancelar.setTitle("Cancelar");                                
                
                btnAdicionar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {

						if (colecaoClasse.procurarClasse(colecaoClasse.getRaiz(), textItem.getValue().toString()) != null) {
						
							SC.say("Aten&ccedil;&atilde;o", "J&aacute; existe uma classe com este nome!");
							textItem.focusInItem();
							return;
						}
						
						Classe c = new Classe();
						c.setNome(textItem.getValue().toString());

						if (checkAbstract.getValue() != null)
							c.setAbstrata(true);
						else
							c.setAbstrata(false);

						colecaoClasse.addClasseFilha(c, raiz.getAttribute("Name"));

						ClasseTreeNode node = new ClasseTreeNode(
							textItem.getValue().toString(), textItem.getValue().toString(), raiz.getAttribute("Name"), c.isAbstrata());

						tree.add(node, raiz);

						tree.openAll(raiz);
						
						winModal.destroy();
						winModal.redraw();						
						
					}
				});

                form.setFields(textItem, checkAbstract, btnAdicionar);
                winModal.addItem(form);  
                winModal.show();                
			}
		});
    	
    	MenuItem itemAlterarClasse = new MenuItem("Alterar Classe", "/icons/plugin_edit.png");
    	
    	if (classeSelecionada.getNome().equals("Object"))
    		itemAlterarClasse.setEnabled(false);

    	itemAlterarClasse.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				final Classe classe = colecaoClasse.procurarClasse(colecaoClasse.getRaiz(), raiz.getAttribute("Name")); 
				
				final Window winModal = new Window();  
                winModal.setWidth(360);  
                winModal.setHeight(130);  
                winModal.setTitle("Alterar informa&ccedil;&otilde;es da classe: " + raiz.getAttribute("Name"));  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage(); 
                
                DynamicForm form = new DynamicForm();
                form.setAutoFocus(true);
                form.setNumCols(2);
                form.setHeight100();  
                form.setWidth100();  
                form.setPadding(10);  
                form.setLayoutAlign(VerticalAlignment.CENTER);  
                form.setAlign(Alignment.CENTER);
                
                final TextItem textItem = new TextItem();
                textItem.setWidth(200);
                textItem.setTop(20);
                textItem.setTitle("Nome");
                textItem.setValue(classe.getNome());
                textItem.setWrapTitle(true);
                
                final CheckboxItem checkAbstract = new CheckboxItem();
                checkAbstract.setTitle("Abstract");
                
                if (classe.isAbstrata())
                	checkAbstract.setValue(true);

                ButtonItem btnAlterar = new ButtonItem(); 
                btnAlterar.setTitle("Alterar");
                
                ButtonItem btnCancelar = new ButtonItem();
                btnCancelar.setTitle("Cancelar");                                
                
                btnAlterar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {

						classe.setNome(textItem.getValue().toString());
						
						if (checkAbstract.getValue() != null) {

							if (checkAbstract.getValue().equals(false))
								classe.setAbstrata(false);
							else
								classe.setAbstrata(true);
							
						} else
							classe.setAbstrata(false);
						
						raiz.setName(classe.getNome());						
						raiz.setIcon(classe.isAbstrata());

						tree.openAll(raiz);
						
						winModal.destroy();
						winModal.redraw();												
					}
				});

                form.setFields(textItem, checkAbstract, btnAlterar);
                winModal.addItem(form);  
                winModal.show();                
			}
		});
    		
    	MenuItem itemRemoverClasse = new MenuItem("Remover Classe", "/icons/plugin_delete.png");
    	
    	if (classeSelecionada.getNome().equals("Object"))
    		itemRemoverClasse.setEnabled(false);
    		
    	itemRemoverClasse.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				if (raiz.getAttribute("Name").equals("Object")) {
					
					SC.say("Aten&ccedil;&atilde;o", "N&atilde;o &eacute; poss&iacute;vel remover a classe base: Object!");
				
					return;
				}
				
				SC.ask("Confirma&ccedil;&atilde;o", "Deseja excluir a classe: " + raiz.getAttribute("Name") + " e todas as suas SubClasses?", new BooleanCallback() {  
                    
					public void execute(Boolean value) {  
                        
						if (value != null && value) {  
            				
                        	if (!raiz.getAttribute("Name").equals("Object")) {
            					
            					colecaoClasse.removerClasse(raiz.getAttribute("Name"));

            					tree.remove(raiz);
            				
            					tree.reloadChildren(raiz);
            				}
                        }
                    }
                });  				
			}
		});
    	
    	MenuItem itemImplementarInterface = new MenuItem("Implementar Interface", "pieces/16/piece_blue.png");
    	
    	itemImplementarInterface.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				final Window winModal = new Window();  
                winModal.setWidth(360);  
                winModal.setHeight(130);  
                winModal.setTitle("Selecione a Interface");  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage(); 
                
                DynamicForm form = new DynamicForm();
                form.setAutoFocus(true);
                form.setNumCols(2);
                form.setHeight100();  
                form.setWidth100();  
                form.setPadding(10);  
                form.setLayoutAlign(VerticalAlignment.CENTER);  
                form.setAlign(Alignment.CENTER);
                
                final TextItem textItem = new TextItem();
                textItem.setWidth(200);
                textItem.setTop(20);
                textItem.setTitle("Nome");                
                textItem.setWrapTitle(true);
                
                final CheckboxItem checkAbstract = new CheckboxItem();
                checkAbstract.setTitle("Abstract");

                ButtonItem btnAdicionar = new ButtonItem(); 
                btnAdicionar.setTitle("Adicionar");
                
                ButtonItem btnCancelar = new ButtonItem();
                btnCancelar.setTitle("Cancelar");                                
                
                btnAdicionar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {

						if (colecaoClasse.procurarClasse(colecaoClasse.getRaiz(), textItem.getValue().toString()) != null) {
						
							SC.say("Aten&ccedil;&atilde;o", "J&aacute; existe uma classe com este nome!");
							textItem.focusInItem();
							return;
						}
						
						Classe c = new Classe();
						c.setNome(textItem.getValue().toString());

						if (checkAbstract.getValue() != null)
							c.setAbstrata(true);
						else
							c.setAbstrata(false);

						colecaoClasse.addClasseFilha(c, raiz.getAttribute("Name"));

						ClasseTreeNode node = new ClasseTreeNode(
							textItem.getValue().toString(), textItem.getValue().toString(), raiz.getAttribute("Name"), c.isAbstrata());

						tree.add(node, raiz);

						tree.openAll(raiz);
						
						winModal.destroy();
						winModal.redraw();						
						
					}
				});

                form.setFields(textItem, checkAbstract, btnAdicionar);
                winModal.addItem(form);  
                winModal.show();                
			}
		});    	
    	
    	MenuItem itemInstanciarObjeto = new MenuItem("Criar Inst&acirc;ncia", "/icons/brick.png");
    	
    	if (classeSelecionada.isAbstrata())    		
    		itemInstanciarObjeto.setEnabled(false);     	
    	
    	menuClasses.setItems(itemNovaClasse, itemAlterarClasse, itemRemoverClasse, new MenuItemSeparator(), itemImplementarInterface, itemInstanciarObjeto);
    	
    	return menuClasses;
    }
	
}

class ClasseTreeNode extends TreeNode {  
	  
    public ClasseTreeNode(String classeId, String name, boolean abstrata) {  
        
    	super(name);
    	
    	setClasseId(classeId);  
        setName(name);  
        
        if (abstrata)
        	setIcon("/icons/puzzle_white.png");
        else
        	setIcon("/icons/puzzle_green.png");                
    }  
    
	public ClasseTreeNode(String classeId, String name, String parentId, boolean abstrata) {  
        
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