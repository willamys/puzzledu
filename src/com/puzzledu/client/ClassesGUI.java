package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.DragAppearance;
import com.smartgwt.client.types.TreeModelType;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.util.BooleanCallback;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.ButtonItem;
import com.smartgwt.client.widgets.form.fields.CheckboxItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
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
import com.smartgwt.client.widgets.tile.TileGrid;
import com.smartgwt.client.widgets.tile.events.RecordClickEvent;
import com.smartgwt.client.widgets.tile.events.RecordClickHandler;
import com.smartgwt.client.widgets.tree.Tree;
import com.smartgwt.client.widgets.tree.TreeGrid;
import com.smartgwt.client.widgets.tree.TreeGridField;
import com.smartgwt.client.widgets.tree.TreeNode;
import com.smartgwt.client.widgets.viewer.DetailViewerField;

public class ClassesGUI {

	public static Classe classeSelecionada;
	private Tree tree;
	private PropriedadesGUI propriedadesGUI;
	private RepositorioDados repositorioDados;
	private Canvas painel;
	
	public ClassesGUI(RepositorioDados repositorioDados, PropriedadesGUI propriedadesGUI, Canvas painel) {

		classeSelecionada = null;
		this.repositorioDados = repositorioDados;
		this.propriedadesGUI = propriedadesGUI;
		this.painel = painel;
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
        
        treeGrid.setDragType("Classe");
        treeGrid.setCanDrag(true);
        treeGrid.setCanDrop(true);
        treeGrid.setCursor(Cursor.MOVE);
        treeGrid.setDragAppearance(DragAppearance.TRACKER);
        
        treeGrid.addCellContextClickHandler(new CellContextClickHandler() {
			
			public void onCellContextClick(CellContextClickEvent event) {
				
				propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(((TreeNode) event.getRecord()).getAttribute("Name")));
				
				propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(((TreeNode) event.getRecord()).getAttribute("Name")));
				
				Menu menu = createMenuClasses(((ClasseTreeNode) event.getRecord()));
				
				menu.setTop(event.getY());
				menu.setLeft(event.getX());
				
				menu.draw();
				
				event.cancel();  
			}
		});
        
        treeGrid.addCellClickHandler(new CellClickHandler() {
			
			public void onCellClick(CellClickEvent event) {
				
				classeSelecionada = repositorioDados.getColecaoClasse().procurarClasse(repositorioDados.getColecaoClasse().getRaiz(), ((TreeNode) event.getRecord()).getAttribute("Name").toString());
				
				propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(((TreeNode) event.getRecord()).getAttribute("Name")));
				
				propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(((TreeNode) event.getRecord()).getAttribute("Name")));
										
			}
		});
        
        return treeGrid;
    }
   
    public TreeNode[] getClasses() {
    	
    	List<TreeNode> listaNodes = new ArrayList<TreeNode>();
    	
    	Classe raiz = repositorioDados.getColecaoClasse().getRaiz();
    	
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
    
    public TreeNode[] getInterfaces() {
    	
    	List<TreeNode> listaNodes = new ArrayList<TreeNode>();
    	
    	for (Interface i : repositorioDados.getColecaoInterface().getListaInterfaces()) {
    	
    		InterfaceTreeNode interfaceNode = new InterfaceTreeNode(i.getNome());
   	
    		listaNodes.add(interfaceNode);
    		
    		for (Variavel v : i.getVariaveis()) {
    			
    			VariavelTreeNode variavelNode = new VariavelTreeNode(v.getNome() + " : " + v.getTipo(), i.getNome());
    			listaNodes.add(variavelNode);
    		}	
    		
    		for (Metodo m : i.getMetodos()) {
    			
    			MetodoTreeNode metodoNode = new MetodoTreeNode(m.getNome() + "(" + m.getParametrosString() + ") : " + m.getRetorno(), i.getNome());
    			listaNodes.add(metodoNode);
    		}    		
    	}
    	
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
		
    	classeSelecionada = repositorioDados.getColecaoClasse().procurarClasse(repositorioDados.getColecaoClasse().getRaiz(), raiz.getAttribute("Name"));
    	
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

						if (repositorioDados.getColecaoClasse().procurarClasse(repositorioDados.getColecaoClasse().getRaiz(), textItem.getValue().toString()) != null) {
						
							SC.say("Aten&ccedil;&atilde;o", "J&aacute; existe uma classe com este nome!");
							textItem.focusInItem();
							return;
						}
						
						Classe classeFilha = new Classe();
						classeFilha.setNome(textItem.getValue().toString());

						if (checkAbstract.getValue() != null)
							classeFilha.setAbstrata(true);
						else
							classeFilha.setAbstrata(false);

						Classe classePai = repositorioDados.getColecaoClasse().procurarClasse(classeSelecionada, raiz.getAttribute("Name"));
						
						for (Variavel v : classePai.getVariaveis()) {
									
							Variavel v1 = new Variavel(v.getNome(), v.getTipo());
							classeFilha.addVariavel(v1);
						}
						
						repositorioDados.getColecaoClasse().addClasseFilha(classeFilha, raiz.getAttribute("Name"));

						ClasseTreeNode node = new ClasseTreeNode(
							textItem.getValue().toString(), textItem.getValue().toString(), raiz.getAttribute("Name"), classeFilha.isAbstrata());

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
				
				final Classe classe = repositorioDados.getColecaoClasse().procurarClasse(repositorioDados.getColecaoClasse().getRaiz(), raiz.getAttribute("Name")); 
				
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
				
				SC.ask("Confirma&ccedil;&atilde;o", "Deseja excluir a classe: <b>" + raiz.getAttribute("Name") + "</b> e todas as suas SubClasses?", new BooleanCallback() {  
                    
					public void execute(Boolean value) {  
                        
						if (value != null && value) {  
            				
                        	if (!raiz.getAttribute("Name").equals("Object")) {
            					
                        		repositorioDados.getColecaoClasse().removerClasse(raiz.getAttribute("Name"));

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
                winModal.setWidth(396);  
                winModal.setHeight(436);  
                winModal.setTitle("Selecione a Interface");  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage(); 
                winModal.setAlign(Alignment.CENTER);
                
                Tree treeInter = new Tree();  
                treeInter.setModelType(TreeModelType.PARENT);  
                treeInter.setShowRoot(true);
                treeInter.setNameProperty("Name");  
                treeInter.setIdField("Id");
                treeInter.setParentIdField("ParentId"); 
                treeInter.setData(getInterfaces());
                          
                final TreeGrid treeGrid = new TreeGrid();  
                treeGrid.setFields(new TreeGridField("Name", "Interfaces"));  
                treeGrid.setData(treeInter);            
                treeGrid.getData().openAll();
                treeGrid.setWidth100();
                treeGrid.setHeight(360);
                treeGrid.setShowResizeBar(false);
                treeGrid.setShowHeader(false);
                treeGrid.setAppImgDir("/icons/");              
        		                
                DynamicForm form = new DynamicForm();
                form.setAutoFocus(true);
                form.setNumCols(1);
 
                form.setWidth100();
                form.setPadding(10);
                form.setLayoutAlign(Alignment.CENTER);  
                
                ButtonItem btnImplementar = new ButtonItem();
                btnImplementar.setWidth("150px");
                btnImplementar.setHeight("25px");
                btnImplementar.setTitle("Implementar Interface");
                                     					
                form.setFields(btnImplementar);
                
                winModal.addItem(treeGrid);
                winModal.addItem(form);
                winModal.setAlign(Alignment.CENTER);
                
                btnImplementar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {
					
						Classe classe = repositorioDados.getColecaoClasse().procurarClasse(repositorioDados.getColecaoClasse().getRaiz(), raiz.getAttribute("Name").toString());												
						
						String nomeInterface = treeGrid.getSelectedRecord().getAttribute("ParentId");
						
						if (nomeInterface == null)
							nomeInterface = treeGrid.getSelectedRecord().getAttribute("Name");
						
						Interface i = repositorioDados.getColecaoInterface().procurarInterface(nomeInterface);
						
						if (classe == null) {
							
							SC.say("Aten&ccedil;&atilde;o", "Classe N&atilde;o Encontrada!");
							
							return;
						}
						
						if (i == null) {
							
							SC.say("Aten&ccedil;&atilde;o", "Interface N&atilde;o Encontrada!");
							
							return;
						}

						try {
							
							for (Variavel v : i.getVariaveis()) {

								classe.addVariavel(new Variavel(v.getNome(), v.getTipo()));
								classe.addVariavelRecursivamente(classe, v);											
							}
							
							classe.addInterface(i);
							
						} catch (IntefaceJaImplementadaException e) {
							
							SC.say("Aten&ccedil;&atilde;o", e.getMessage());
							return;
						}
						
						propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(classe.getNome()));
						
						propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(classe.getNome()));
						
						winModal.destroy();
						winModal.redraw();					
					}
				});

                winModal.show();                
			}
		});    	
    	
    	MenuItem itemInstanciarObjeto = new MenuItem("Criar Inst&acirc;ncia", "/icons/brick.png");
    	
    	if (classeSelecionada.isAbstrata())    		
    		itemInstanciarObjeto.setEnabled(false);
    	
    	itemInstanciarObjeto.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				Variavel varImg = classeSelecionada.procurarVariavel(classeSelecionada, "imagem");
				Img img = null;
				
				if (varImg != null)					
					img = new Img(varImg.getValorPadrao());
				else
					img = new Img("/icons/brick.png");
				
				img.setCanDrag(true);
				img.setCanDrop(true);
				img.setDragType("Classe");
				img.setDragAppearance(DragAppearance.TARGET);
				img.setCanDragReposition(true);
				img.setCursor(Cursor.MOVE);
				
				painel.addChild(img);				
			}
		});
    	
      	MenuItem itemNovaVariavel = new MenuItem("Nova Vari&aacute;vel", "/icons/bullet_green.png");
    	
      	itemNovaVariavel.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				final Window winModal = new Window();  
                winModal.setWidth(360);  
                winModal.setHeight(150);  
                winModal.setTitle("Digita o nome da nova vari&aacute;vel");  
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
                
                final TextItem textNome = new TextItem();
                textNome.setWidth(200);
                textNome.setTop(20);
                textNome.setTitle("Nome");                
                textNome.setWrapTitle(true);
                
                final SelectItem comboTipo = new SelectItem();
                comboTipo.setTitle("Tipo");
                comboTipo.setType("comboBox");
                comboTipo.setValueMap("String", "int", "float");
                
                final TextItem textValorPadrao = new TextItem();
                textValorPadrao.setWidth(200);
                textValorPadrao.setTitle("Valor Padr&atilde;o");                
                textValorPadrao.setWrapTitle(true);                
                
                ButtonItem btnAdicionar = new ButtonItem(); 
                btnAdicionar.setTitle("Adicionar");
                
                ButtonItem btnCancelar = new ButtonItem();
                btnCancelar.setTitle("Cancelar");                                
                
                btnAdicionar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {

						if (textNome.getValue().toString().equals("")) {
							
							SC.say("Aten&ccedil;&atilde;o", "Digite o nome da Vari&acute;vel!");
							
							return;
						}
	
						Variavel var = new Variavel();
						var.setNome(textNome.getValue().toString());
						var.setTipo(comboTipo.getValue().toString());
						
						if (textValorPadrao.getValue() != null)
							var.setValorPadrao(textValorPadrao.getValue().toString());
						
						Metodo set = new Metodo("set" + var.getNome().toUpperCase().charAt(0) + var.getNome().substring(1, var.getNome().length()));
						set.adicionarParametro(new Parametro(var.getNome(), var.getTipo()));
						set.setRetorno("void");
						
						Metodo get = new Metodo("get" + var.getNome().toUpperCase().charAt(0) + var.getNome().substring(1, var.getNome().length()));
						get.setRetorno(var.getTipo());						

						ClassesGUI.classeSelecionada.addVariavel(var);
						ClassesGUI.classeSelecionada.addMetodo(get);
						ClassesGUI.classeSelecionada.addMetodo(set);						
						
						ClassesGUI.classeSelecionada.addVariavelMetodosRecursivamente(ClassesGUI.classeSelecionada, var);
						
						propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(ClassesGUI.classeSelecionada.getNome()));
						
						propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(ClassesGUI.classeSelecionada.getNome()));
						
						winModal.destroy();
						winModal.redraw();						
						
					}
				});
                
                form.setFields(textNome, comboTipo, textValorPadrao, btnAdicionar);
                winModal.addItem(form);  
                winModal.show();                
			}
		});      	

      	MenuItem itemSelecionarImagem = new MenuItem("Selecionar Imagem", "/icons/picture_edit.png");
      	itemSelecionarImagem.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				getJanelaSelecionarImagem();
			}
		});
      	
      	MenuItem itemNovoMetodo = new MenuItem("Novo M&eacute;todo", "/icons/shape_square.png");
    	
      	if (ClassesGUI.classeSelecionada.procurarInterface(ClassesGUI.classeSelecionada, "Desenh&aacute;vel"))
      		itemSelecionarImagem.setEnabled(true);
      	else
      		itemSelecionarImagem.setEnabled(false);
      	
      	menuClasses.setItems(itemNovaClasse, itemAlterarClasse, itemRemoverClasse, new MenuItemSeparator(), itemNovoMetodo, itemNovaVariavel, new MenuItemSeparator(), itemImplementarInterface, itemSelecionarImagem, itemInstanciarObjeto);
    	
    	return menuClasses;
    }

    private Window getJanelaSelecionarImagem() {
    	
    	final Window winModal = new Window();  
        winModal.setWidth(360);  
        winModal.setHeight(360);  
        winModal.setTitle("Selecione a imagem correspondente ao objeto");  
        winModal.setShowMinimizeButton(false);  
        winModal.setIsModal(true);  
        winModal.centerInPage(); 
        winModal.show();
        
        TileGrid tileGrid = new TileGrid();
        tileGrid.setWidth100();
        tileGrid.setHeight100();
        tileGrid.setTop(20);
        tileGrid.setShowAllRecords(true);
        tileGrid.setData(ImagemData.getRecords());
        
        DetailViewerField image = new DetailViewerField("picture");
        image.setType("image");
        
        tileGrid.addRecordClickHandler(new RecordClickHandler() {
			
			public void onRecordClick(RecordClickEvent event) {
			
				winModal.destroy();
				winModal.redraw();	
				
				String img = event.getRecord().getAttribute("picture");
				Variavel varImg = classeSelecionada.procurarVariavel(classeSelecionada, "imagem");
				
				if (varImg != null)
					varImg.setValorPadrao(img);				
			}
		});
               
        tileGrid.setFields(image);
        
        winModal.addChild(tileGrid);
        
        return winModal;
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

class InterfaceTreeNode extends TreeNode {  
	  
    public InterfaceTreeNode(String name) {  
        
    	setClasseId(name);  
        setName(name);  
        
       	setIcon("/icons/puzzle_blue.png");                
    }  

    public void setClasseId(String value) {  
        setAttribute("Id", value);  
    }  

    public void setName(String name) {  
        setAttribute("Name", name);  
    }  
    
    public void setIcon(String icon) {
        setAttribute("icon", icon);
    } 
}

class MetodoTreeNode extends TreeNode {  
	  
    
	public MetodoTreeNode(String name, String parentId) {  
        
    	setClasseId(name);  
    	setName(name);  
    	setParentId(parentId);           
        
       	setIcon("/icons/shape_square.png");
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
}

class VariavelTreeNode extends TreeNode {  
	  
    
	public VariavelTreeNode(String name, String parentId) {  
        
    	setClasseId(name);  
    	setName(name);  
    	setParentId(parentId);           
        
       	setIcon("/icons/bullet_green.png");
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
}