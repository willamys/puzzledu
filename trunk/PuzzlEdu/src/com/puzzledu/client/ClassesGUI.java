package com.puzzledu.client;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.DragAppearance;
import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.types.TreeModelType;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.util.BooleanCallback;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ShowContextMenuEvent;
import com.smartgwt.client.widgets.events.ShowContextMenuHandler;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.ButtonItem;
import com.smartgwt.client.widgets.form.fields.CheckboxItem;
import com.smartgwt.client.widgets.form.fields.RadioGroupItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.form.fields.events.ChangedEvent;
import com.smartgwt.client.widgets.form.fields.events.ChangedHandler;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.ListGridRecord;
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
	private Gerenciador gerenciador;
	private Canvas painel;
	private PartsListGrid scriptList;
	
	public ClassesGUI(Gerenciador gerenciador, PropriedadesGUI propriedadesGUI, Canvas painel, PartsListGrid scriptList) {

		classeSelecionada = null;
		this.gerenciador = gerenciador;
		this.propriedadesGUI = propriedadesGUI;
		this.painel = painel;
		this.scriptList = scriptList;
	}

	public TreeGrid createArvoreClasses() {
		
		TreeNode[] root = getRootClasses();
		
        tree = new Tree();  
        tree.setModelType(TreeModelType.CHILDREN);  
        tree.setShowRoot(false);
        tree.setNameProperty("Name");  
        tree.setIdField("Id");
        tree.setParentIdField("ParentId"); 
        tree.setData(root);
                  
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
				
				classeSelecionada = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz(), ((TreeNode) event.getRecord()).getAttribute("Name").toString());
				
				propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(((TreeNode) event.getRecord()).getAttribute("Name")));
				
				propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(((TreeNode) event.getRecord()).getAttribute("Name")));
										
			}
		});
        
        
        Classe raiz = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz();
        fillTree(raiz, (ClasseTreeNode)root[0]);
    	
    	tree.openAll(root[0]);
        
        return treeGrid;
    }
   
    public TreeNode[] getRootClasses() {
    	
    	Classe raiz = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz();

    	return  new TreeNode[]{new ClasseTreeNode(raiz.getNome(), raiz.getNome(), true)};
    }
    
    public TreeNode[] getInterfaces() {
    	
    	List<TreeNode> listaNodes = new ArrayList<TreeNode>();
    	
    	for (Interface i : gerenciador.getProjetoAtual().getRepositorioDados().getColecaoInterface().getListaInterfaces()) {
    	
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
    
    
    public void fillTree(Classe raiz, ClasseTreeNode nodeRaiz) {
    	
    	if (raiz.getFilhas() == null)
    		return;
    	
    	for (Classe c : raiz.getFilhas()) {
    		
        	ClasseTreeNode node = new ClasseTreeNode(c.getNome(), c.getNome(), raiz.getNome(), c.isAbstrata());
        	 tree.add(node, nodeRaiz);
        	 fillTree(c, nodeRaiz);
    	}    	
    }
                    
    private Menu createMenuClasses(final ClasseTreeNode raiz) {
		
    	classeSelecionada = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz(), raiz.getAttribute("Name"));
    	
    	Menu menuClasses = new Menu();
    	menuClasses.setWidth(130);
    	menuClasses.setCanSelectParentItems(true);
    	
    	MenuItem itemCriarClasse = new MenuItem("Criar Classe", "/icons/plugin_add.png"); 
    	
    	itemCriarClasse.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				final Window winModal = new Window();  
                winModal.setWidth(360);  
                winModal.setHeight(130);  
                winModal.setTitle("Digite os dados da classe");  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage();
                
                winModal.addShowContextMenuHandler(new ShowContextMenuHandler() {
                    public void onShowContextMenu(ShowContextMenuEvent event) {
                        event.cancel();
                    }
                });
                
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
                btnAdicionar.setTitle("Criar Classe");
                
                ButtonItem btnCancelar = new ButtonItem();
                btnCancelar.setTitle("Cancelar");                                
                
                btnAdicionar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {

						if (gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz(), textItem.getValue().toString()) != null) {
						
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

						Classe classePai = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().procurarClasse(classeSelecionada, raiz.getAttribute("Name"));
						
						for (Variavel v : classePai.getVariaveis()) {
									
							Variavel v1 = new Variavel(v.getNome(), v.getTipo(), v.getValorPadrao());
							classeFilha.addVariavel(v1);
						}
						
						gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().addClasseFilha(classeFilha, raiz.getAttribute("Name"));

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
				
				final Classe classe = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz(), raiz.getAttribute("Name")); 
				
				final Window winModal = new Window();  
                winModal.setWidth(360);  
                winModal.setHeight(130);  
                winModal.setTitle("Alterar informa&ccedil;&otilde;es da classe: " + raiz.getAttribute("Name"));  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage(); 
                
                winModal.addShowContextMenuHandler(new ShowContextMenuHandler() {
                    public void onShowContextMenu(ShowContextMenuEvent event) {
                        event.cancel();
                    }
                });
                
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
    		
    	MenuItem itemExcluirClasse = new MenuItem("Excluir Classe", "/icons/plugin_delete.png");
    	
    	if (classeSelecionada.getNome().equals("Object"))
    		itemExcluirClasse.setEnabled(false);
    		
    	itemExcluirClasse.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				if (raiz.getAttribute("Name").equals("Object")) {
					
					SC.say("Aten&ccedil;&atilde;o", "N&atilde;o &eacute; poss&iacute;vel excluir a classe base: Object!");
				
					return;
				}
				
				SC.ask("Confirma&ccedil;&atilde;o", "Deseja excluir a classe: <b>" + raiz.getAttribute("Name") + "</b> e todas as suas SubClasses?", new BooleanCallback() {  
                    
					public void execute(Boolean value) {  
                        
						if (value != null && value) {  
            				
                        	if (!raiz.getAttribute("Name").equals("Object")) {
            					
                        		gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().removerClasse(raiz.getAttribute("Name"));
                        		
                        		gerenciador.getProjetoAtual().getPilha().removerInstanciaPilhaDaClasse(raiz.getAttribute("Name"));
                        		
            					tree.remove(raiz);
            				
            					tree.reloadChildren(raiz);

            					classeSelecionada = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz(), tree.getRootValue());
            					
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
                
                winModal.addShowContextMenuHandler(new ShowContextMenuHandler() {
                    public void onShowContextMenu(ShowContextMenuEvent event) {
                        event.cancel();
                    }
                });                
                
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
					
						Classe classe = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz(), raiz.getAttribute("Name").toString());												
						
						String nomeInterface = treeGrid.getSelectedRecord().getAttribute("ParentId");
						
						if (nomeInterface == null)
							nomeInterface = treeGrid.getSelectedRecord().getAttribute("Name");
						
						Interface i = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoInterface().procurarInterface(nomeInterface);
						
						if (classe == null) {
							
							SC.say("Aten&ccedil;&atilde;o", "Classe N&atilde;o Encontrada!");
							
							return;
						}
						
						if (i == null) {
							
							SC.say("Aten&ccedil;&atilde;o", "Interface N&atilde;o Encontrada!");
							
							return;
						}

						String result = classe.implementaInterface(classe, i);
						if (!result.equals("")) {
							
							SC.say("Aten&ccedil;&atilde;o", "Esta interface j&aacute; foi implementada na Classe: <b>" + result + "</b>");
							return;
						}
							
						classe.addInterface(i);
							
						for (Variavel v : i.getVariaveis()) {

							classe.addVariavel(new Variavel(v.getNome(), v.getTipo(), v.getValorPadrao()));
							classe.addVariavelRecursivamente(classe, v);											
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
    	
    	MenuItem itemCriarInstancia = new MenuItem("Criar Inst&acirc;ncia", "/icons/brick.png");
    	
    	if (classeSelecionada.isAbstrata())    		
    		itemCriarInstancia.setEnabled(false);
    	
    	itemCriarInstancia.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				Variavel varImg = classeSelecionada.procurarVariavel(classeSelecionada, "imagem");
				
				if(varImg == null){
				  varImg = new Variavel("imagem", "Image", "/galery/alomundo.png");
			      classeSelecionada.addVariavel(varImg);
				}
				
				Img img = new Img(varImg.getValorPadrao());
				
				img.setCanDrag(true);
				img.setCanDrop(true);
				img.setDragType("Classe");
				img.setDragAppearance(DragAppearance.TARGET);
				img.setCanDragReposition(true);
				img.setCursor(Cursor.MOVE);
				
				img.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
					
					public void onClick(ClickEvent event) {

						final Img imagem = (Img) event.getSource();
						
						carregarScript(imagem.getTitle());
					}

				});
				
				
				img.addShowContextMenuHandler(new ShowContextMenuHandler() {
					
					public void onShowContextMenu(ShowContextMenuEvent event) {

						final Img imagem = (Img) event.getSource();

						classeSelecionada = gerenciador.getProjetoAtual().getPilha().procurarClasseDaInstancia(imagem.getTitle());

						Menu menuPropriedades = new Menu();
				    	menuPropriedades.setWidth(130);
				    	
				    	ListGridField partSrcField = new ListGridField("partSrc", 20);  
				        partSrcField.setType(ListGridFieldType.IMAGE);  
				        partSrcField.setImgDir("pieces/16/");  
				   
				        ListGridField partNameField = new ListGridField("partName");  
				        partNameField.setWidth(70);  			
				        menuPropriedades.setFields(partSrcField, partNameField);  

				        MenuItem condicaoIf = new MenuItem();
				        condicaoIf.setAttribute("partName", "<b>Condi&ccedil;&atilde;o ... </b> ");
				        condicaoIf.setAttribute("partSrc", "/icons/arrow_branch.png");
				        
				        MenuItem lacoFor = new MenuItem();
				        lacoFor.setAttribute("partName", "<b>Repeti&ccedil;&atilde;o ... </b> ");
				        lacoFor.setAttribute("partSrc", "/icons/arrow_rotate_clockwise.png");
				        
				        lacoFor.addClickHandler(new ClickHandler() {
							
							public void onClick(MenuItemClickEvent event) {
								
								getJanelaFor(imagem.getTitle());
							}
						});
				        
				        menuPropriedades.addItem(condicaoIf);
				        menuPropriedades.addItem(lacoFor);
				        
				        menuPropriedades.addItem(new MenuItemSeparator());
				        
				    	MenuItem removerInstancia = new MenuItem();
				    	removerInstancia.setAttribute("partName", "Remover Inst&acirc;ncia: <b>" + imagem.getTitle() + "</b>");
				    	removerInstancia.setAttribute("partSrc", "/icons/brick_delete.png");

				    	removerInstancia.addClickHandler(new ClickHandler() {
				    	
							public void onClick(MenuItemClickEvent event) {
										
								SC.ask("Confirma&ccedil;&atilde;o", "Deseja excluir esta inst&acirc;ncia: <b>" +  imagem.getTitle() + "</b>?", new BooleanCallback() {  
				                    
									public void execute(Boolean value) {  
				                        
										if (value != null && value) {  
											
											gerenciador.getProjetoAtual().getPilha().removerInstanciaPilha(imagem.getTitle());
											
										}
				                    }
				                });  				
							}
						});
						
						for (final Metodo m : classeSelecionada.getAllMetodos(classeSelecionada)) {

							MenuItem item1 = new MenuItem();
							item1.setAttribute("partName", "<b>" + m.getNome() + "</b>(" + m.getParametrosString() + ") : " + m.getRetorno());
							item1.setAttribute("partSrc", "/icons/shape_square.png");
							
							if (!m.getRetorno().equals("void"))
								item1.setEnabled(false);
							
							item1.addClickHandler(new ClickHandler() {
								
								public void onClick(MenuItemClickEvent event) {

									getJanelaValor(m, imagem.getTitle());
								}
							});
							
							menuPropriedades.addItem(item1);
						}

						propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(classeSelecionada.getNome()));
						propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(classeSelecionada.getNome()));
						
						menuPropriedades.addItem(new MenuItemSeparator());
						
						menuPropriedades.addItem(removerInstancia);
						
						menuPropriedades.setTop(event.getY());
						menuPropriedades.setLeft(event.getX());
						
						menuPropriedades.draw();
						
						event.cancel(); 
						
					}					
				});				
			
				painel.addChild(img);
				
				String nomeInstancia = gerenciador.getProjetoAtual().getPilha().gerarNomeInstancia(classeSelecionada.getNome());
				img.setTooltip(nomeInstancia);
				img.setTitle(nomeInstancia);
				
				gerenciador.getProjetoAtual().getPilha().adicionarInstanciaPilha(new Instancia(classeSelecionada, img, nomeInstancia));
			}
		});
    	
      	MenuItem itemCriarVariavel = new MenuItem("Criar Atributo", "/icons/bullet_green.png");
    	
      	itemCriarVariavel.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				final Window winModal = new Window();  
                winModal.setWidth(360);  
                winModal.setHeight(150);  
                winModal.setTitle("Digite os dados do Atributo");  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage(); 
                
                winModal.addShowContextMenuHandler(new ShowContextMenuHandler() {
                    public void onShowContextMenu(ShowContextMenuEvent event) {
                        event.cancel();
                    }
                });
                
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
                btnAdicionar.setTitle("Criar Atributo");
                
                ButtonItem btnCancelar = new ButtonItem();
                btnCancelar.setTitle("Cancelar");                                
                
                btnAdicionar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {
						String varName = textNome.getValue().toString();
						if (varName.equals("")) {
							SC.say("Aten&ccedil;&atilde;o", "Informe o nome do Atributo!");
							return;
						}
					   
						if (ClassesGUI.classeSelecionada.procurarVariavel(varName) == null){
						  
						  Variavel var = new Variavel();
						  var.setNome(varName);
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
					  }else{
						  SC.say("Aten&ccedil;&atilde;o", "J&aacute; existe um Atributo com este nome!!"); 
					  }
						
					}
				});
                
                form.setFields(textNome, comboTipo, textValorPadrao, btnAdicionar);
                winModal.addItem(form);  
                winModal.show();                
			}
		});      	

      	MenuItem itemAlterarImagem = new MenuItem("Alterar Imagem", "/icons/picture_edit.png");      	
      	itemAlterarImagem.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				if (ClassesGUI.classeSelecionada.procurarInterface(ClassesGUI.classeSelecionada, "Desenh&aacute;vel"))
					getJanelaSelecionarImagem();
				else {

					Interface i = gerenciador.getProjetoAtual().getRepositorioDados().getColecaoInterface().procurarInterface("Desenh&aacute;vel");
								
					for (Variavel v : i.getVariaveis()) {

						classeSelecionada.addVariavel(new Variavel(v.getNome(), v.getTipo()));
						classeSelecionada.addVariavelRecursivamente(classeSelecionada, v);											
					}
								
					classeSelecionada.addInterface(i);
																								
					getJanelaSelecionarImagem();
							
					propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(classeSelecionada.getNome()));
								
					propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(classeSelecionada.getNome()));																
					
				}
			}
		});
      	
     	MenuItem itemCriarMetodo = new MenuItem("Criar M&eacute;todo", "/icons/shape_square.png");
      	itemCriarMetodo.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				final Window winModal = new Window();  
                winModal.setWidth(400);  
                winModal.setHeight(250);  
                winModal.setTitle("Digite os dados do M&eacute;todo");  
                winModal.setShowMinimizeButton(false);  
                winModal.setIsModal(true);  
                winModal.centerInPage(); 
                
                winModal.addShowContextMenuHandler(new ShowContextMenuHandler() {
                    public void onShowContextMenu(ShowContextMenuEvent event) {
                        event.cancel();
                    }
                });                
                
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
                
                ButtonItem btnCriarMetodo = new ButtonItem(); 
                btnCriarMetodo.setTitle("Criar M&eacute;todo");
                
                ButtonItem btnAdicionar = new ButtonItem(); 
                btnAdicionar.setTitle("Adicionar Parametro");
                
                final RadioGroupItem radioAcesso = new RadioGroupItem("Acesso");
                radioAcesso.setValueMap("public", "protected", "default", "private");
                radioAcesso.setVertical(false);
                
                final CheckboxItem checkAbstract = new CheckboxItem();
                checkAbstract.setTitle("abstract");
                
                final CheckboxItem checkFinal = new CheckboxItem();
                checkFinal.setTitle("final");
                
                final CheckboxItem checkSynchronized = new CheckboxItem();
                checkSynchronized.setTitle("synchronized");
                
                final SelectItem comboRetorno = new SelectItem();
                comboRetorno.setTitle("Retorno");
                comboRetorno.setType("comboBox");
                comboRetorno.setValueMap("void", "String", "int", "float");
                comboRetorno.setDefaultToFirstOption(true);
                
                btnCriarMetodo.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
					
					public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {
						String name   = textNome.getValue().toString().trim();
						String acesso = radioAcesso.getValue().toString();
						
						if (name.equals("")) {
							SC.say("Aten&ccedil;&atilde;o", "Informe o nome do M&eacute;todo");
							return;
						}
						if(acesso.equals("")){
							SC.say("Aten&ccedil;&atilde;o", "Escolha o modificador de acesso.");
						}

						try {
							if (LanguageUtils.getInstance()
									.isValidMethod(name)) {

								Metodo m      = ClassesGUI.classeSelecionada.procurarMetodo(name);
								Metodo method = new Metodo(name);
								method.setRetorno(comboRetorno.getValue().toString());
								method.setAcesso(acesso);
								method.setAbstract((checkAbstract.getValue() != null));
								method.setFinal((checkFinal.getValue() != null));
								method.setSync((checkSynchronized.getValue() != null));
								
								/**TODO, adicionar validação e tratamento baseado nos parametros do método antes
								 * de inserir um novo método na classe */
								if (m == null){
								  
								  ClassesGUI.classeSelecionada.addMetodo(method);
								  propriedadesGUI.getListaPropriedades().setData(propriedadesGUI.getPropriedades(ClassesGUI.classeSelecionada.getNome()));
								  propriedadesGUI.getListaInterfaces().setData(propriedadesGUI.getInterfaces(ClassesGUI.classeSelecionada.getNome()));
								  
								  winModal.destroy();
								  winModal.redraw();						
							  }else{
								  SC.say("Aten&ccedil;&atilde;o", "J&aacute; existe um M&eacute;todo com este nome"); 
							  }
							}
						} catch (Exception e) {
							SC.say("Aten&ccedil;&atilde;o", e.getMessage()); 
						}
						
					}
				});
                
                form.setFields(textNome, radioAcesso, checkAbstract, checkFinal, checkSynchronized, comboRetorno, btnCriarMetodo);
                winModal.addItem(form); 
                
                winModal.show();   
			}
		});

      	menuClasses.setItems(itemCriarClasse, itemAlterarClasse, itemExcluirClasse, new MenuItemSeparator(), itemCriarMetodo, itemCriarVariavel, new MenuItemSeparator(), itemImplementarInterface, itemAlterarImagem, itemCriarInstancia);
    	
    	return menuClasses;
    }
    
    private void carregarScript(String nomeInstancia) {

		Instancia i = gerenciador.getProjetoAtual().getPilha().procurarInstancia(nomeInstancia);

		ListGridRecord[] lst = new ListGridRecord[i.getAcoes().size()+1];
		
		for (int j=0; j<i.getAcoes().size(); j++) {							

			ListGridRecord record = new ListGridRecord();
			
			if (i.getAcoes().get(j).getTipo().equals("io")) {
				
				AcaoIO acaoIO = (AcaoIO) i.getAcoes().get(j);
				record.setAttribute("imageField", "/icons/shape_square.png");
				record.setAttribute("name", acaoIO.getMetodo().getNome());
				record.setAttribute("value", acaoIO.getValor());
			
			} else if (i.getAcoes().get(j).getTipo().equals("for")) {
				
				AcaoFor acaoFor = (AcaoFor) i.getAcoes().get(j);
				record.setAttribute("imageField", "/icons/arrow_rotate_clockwise.png");
				record.setAttribute("name", "repetir <b>" + acaoFor.getQtdRepeticoes() + "</b> vezes");
				record.setAttribute("value", acaoFor.getMetodo().getNome() + "(" + acaoFor.getValor() + ")");
			}
			
			lst[j] = record;
		}
		
		scriptList.setData(lst);
		
		scriptList.setTitle("Script: " + nomeInstancia);
	}    
    
    private void getJanelaValor(final Metodo metodo, final String nomeInstancia) {
    	
    	final Window winModal = new Window();  
        winModal.setWidth(360);  
        winModal.setHeight(160);  
        winModal.setTitle("Chamada de M&eacute;todo: ");
        winModal.setShowMinimizeButton(false);  
        winModal.setIsModal(true);  
        winModal.centerInPage(); 
        
        DynamicForm form = new DynamicForm();
        form.setAutoFocus(true);
        form.setNumCols(2);
        form.setHeight100();  
        form.setWidth100();  
        form.setPadding(40);
        form.setLayoutAlign(VerticalAlignment.CENTER);  
        form.setAlign(Alignment.CENTER);
         
        Img img1 = new Img("/icons/shape_square.png", 16, 16);
        img1.setTop(0);
        img1.setLeft(40);
        
        final TextItem textItem = new TextItem();
        textItem.setWidth(150);
        textItem.setTop(40);
        textItem.setTitle(nomeInstancia + "." + metodo.getNome());                
        textItem.setWrapTitle(true);
        
        ButtonItem btnAdicionar = new ButtonItem(); 
        btnAdicionar.setTitle("Confirmar");
        
        btnAdicionar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
			
			public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {

				AcaoIO acao1 = new AcaoIO(textItem.getValue().toString(), metodo);

				Instancia i = gerenciador.getProjetoAtual().getPilha().procurarInstancia(nomeInstancia);

				i.adicionarAcao(acao1);	
				
				carregarScript(nomeInstancia);
				
				winModal.destroy();
				winModal.redraw();												
				
			}
		});

        form.setFields(textItem, btnAdicionar);
        
        winModal.addItem(form);  
        winModal.show();              	
    }
    
    private void getJanelaFor(final String nomeInstancia) {
    	
    	final Window winModal = new Window();  
        winModal.setWidth(360);  
        winModal.setHeight(220);  
        winModal.setTitle("Estrutura de Repeti&ccedil;&atilde;o");
        winModal.setShowMinimizeButton(false);  
        winModal.setIsModal(true);  
        winModal.centerInPage();
        
        winModal.addShowContextMenuHandler(new ShowContextMenuHandler() {
            public void onShowContextMenu(ShowContextMenuEvent event) {
                event.cancel();
            }
        });
        
        DynamicForm form = new DynamicForm();
        form.setAutoFocus(true);
        form.setNumCols(2);
        form.setHeight100();  
        form.setWidth100();  
        form.setPadding(40);
        form.setLayoutAlign(VerticalAlignment.CENTER);  
        form.setAlign(Alignment.CENTER);
        
        final Label labelMetodo = new Label("<br /><center><b>for ( </b></center>");
        labelMetodo.setWidth(200);
        labelMetodo.setLeft(50);
        labelMetodo.setTop(30);
        
        Img img1 = new Img("/icons/shape_square.png", 16, 16);
        img1.setTop(0);
        img1.setLeft(40);        
        
        final SelectItem comboInicializacao = new SelectItem();
        comboInicializacao.setWidth(100);
        comboInicializacao.setTop(40);        
        comboInicializacao.setValueMap("1", "2", "3", "4", "5", "10", "20", "50");
        comboInicializacao.setDefaultValue("10");
        comboInicializacao.setTitle("Repeti&ccedil;&otilde;es");
        //comboInicializacao.setRequired(true);
        //comboInicializacao.setType("comboBox");
        
        final SelectItem comboAcao = new SelectItem();
        comboAcao.setWidth(150);
        comboAcao.setTop(40);
        comboAcao.setTitle("M&eacute;todo");
        comboAcao.setType("comboBox");
        comboAcao.setRequired(true);
        
        final SelectItem comboParametro1 = new SelectItem();
        comboParametro1.setWidth(150);
        comboParametro1.setTop(40);
        comboParametro1.setTitle(" ");
        comboParametro1.setType("comboBox");
        comboParametro1.setDisabled(true);
        comboParametro1.setRequired(true);
        //comboParametro1.setImageURLPrefix("/galery/");  
        
        LinkedHashMap<String, String> mapIcons = new LinkedHashMap<String, String>();
        
        for (ImagemRecord ir : ImagemData.getNewRecords()) {
        	
        	mapIcons.put(ir.getPicture(), ir.getPicture());
        }
        
        //mapIcons.put("/galery/dog2-c.png", "/galery/dog2-c.png");
        //mapIcons.put("/galery/bat1-a.png", "/galery/bat1-a.png");
        //mapIcons.put("/galery/elephant1-a.png", "/galery/elephant1-a.png");
		//mapIcons.put("/galery/chiwawa.png", "/galery/chiwawa.png");        
        
        comboParametro1.setValueIcons(mapIcons);
        
        final Instancia inst = gerenciador.getProjetoAtual().getPilha().procurarInstancia(nomeInstancia);
        
        if (inst == null)
        	return;
        
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        
        for (Metodo m : inst.getClasse().getAllMetodos(inst.getClasse())) {

       		if (m.getRetorno().equals("void"))
       			if (!map.containsKey(m.getNome()))
       				map.put(m.getNome(), m.getNome());
        }

        comboAcao.setValueMap(map);
        
        comboAcao.addChangedHandler(new ChangedHandler() {
			
			public void onChanged(ChangedEvent event) {

				Metodo m = inst.getClasse().procurarMetodoRecursivamente(inst.getClasse(), comboAcao.getValue().toString());
				
				if (m != null) {
					
					comboParametro1.setDisabled(false);
					comboParametro1.setTitle(m.getPrimeiroParametro().getNome());
					comboParametro1.setValue(" ");
					
					if (m.getParametros().size() > 0) {
						
						String tipo = m.getParametros().get(0).getTipo();
						
						if (tipo.equals("int") || tipo.equals("float"))							
							comboParametro1.setValueMap("1", "2", "3", "4", "5", "10", "20", "50");						
						
						else if (tipo.equals("Image")) {
							
							LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
							
							for (ImagemRecord ir : ImagemData.getNewRecords()) {
						        						
								map.put(ir.getPicture(), ir.getName());
						   }
							
							//map.put("/galery/dog2-c.png", "Cachorro");
						//	map.put("/galery/bat1-a.png", "Morcego");
							//map.put("/galery/elephant1-a.png", "Elefante");
							//map.put("/galery/chiwawa.png", "Chiwawa");
							 
							comboParametro1.setValueMap(map);
							
						} else							
							comboParametro1.setValueMap("Hello");
						
						comboParametro1.updateState();						
					}
						
				}
			}
		});
                
        
        ButtonItem btnAdicionar = new ButtonItem(); 
        btnAdicionar.setTitle("Confirmar");
        
        btnAdicionar.addClickHandler(new com.smartgwt.client.widgets.form.fields.events.ClickHandler() {
			
			public void onClick(com.smartgwt.client.widgets.form.fields.events.ClickEvent event) {	
				
				try {
					
					Integer.parseInt(comboInicializacao.getValue().toString().trim());
					
				} catch (Exception e) {
				
					SC.say("Aten&ccedil;&atilde;o", "Digite um n&uacute;mero de repeti&ccedil;&otilde;es v&aacute;lido!");
					
					comboInicializacao.focusInItem();
					
					return;				
				}		
				
				Metodo m1 = null;				

				if (comboAcao.getValue() != null)
					m1 = (inst.getClasse().procurarMetodoRecursivamente(inst.getClasse(), comboAcao.getValue().toString()));
				
				if (m1 == null) {
					
					SC.say("Aten&ccedil;&atilde;o", "Selecione um <b>m&eacute;todo</b> v&aacute;lido!");
					
					comboAcao.focusInItem();
					
					return;							
				}
				
				if (comboParametro1 == null | comboParametro1.getValue().equals("")) {
					
					SC.say("Aten&ccedil;&atilde;o", "Selecione um <b>" + m1.getPrimeiroParametro().getNome() + "</b> v&aacute;lido!");
					
					comboAcao.focusInItem();
					
					return;							
				}
				
				if (m1.getPrimeiroParametro().getTipo().equals("int")) {
					
					try {
						
						Integer.parseInt(comboParametro1.getValue().toString().trim());
						
					} catch (Exception e) {
					
						SC.say("Aten&ccedil;&atilde;o", "Digite um valor do tipo <b>" + m1.getPrimeiroParametro().getTipo() + "</b> !");
						
						comboInicializacao.focusInItem();
						
						return;				
					}
					
				} else if (m1.getPrimeiroParametro().getTipo().equals("float")) {
					
					try {
						
						Float.parseFloat(comboParametro1.getValue().toString().trim());
						
					} catch (Exception e) {
					
						SC.say("Aten&ccedil;&atilde;o", "Digite um valor do tipo <b>" + m1.getPrimeiroParametro().getTipo() + "</b> !");
						
						comboInicializacao.focusInItem();
						
						return;				
					}						
				}
			
				AcaoFor acao1 = new AcaoFor(m1, Long.parseLong(comboInicializacao.getValue().toString().trim()), comboParametro1.getValue().toString().trim());
				inst.adicionarAcao(acao1);	
				
				carregarScript(nomeInstancia);
				
				winModal.destroy();
				winModal.redraw();												
				
			}
		});

        form.setFields(comboInicializacao, comboAcao, comboParametro1, btnAdicionar);
        
        winModal.addItem(form);  
        winModal.show();              	
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
        
        winModal.addShowContextMenuHandler(new ShowContextMenuHandler() {
            public void onShowContextMenu(ShowContextMenuEvent event) {
                event.cancel();
            }
        });
        
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

				for (Variavel v : classeSelecionada.getVariaveis()) {									
				
					if (v.getNome().equals("imagem"))
						v.setValorPadrao(img);	
				}
				
				classeSelecionada.atribuirValorVariaveisRecursivamente(classeSelecionada, "imagem", img);				
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