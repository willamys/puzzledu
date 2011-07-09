package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.util.BooleanCallback;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.ListGridRecord;
import com.smartgwt.client.widgets.grid.events.CellContextClickEvent;
import com.smartgwt.client.widgets.grid.events.CellContextClickHandler;
import com.smartgwt.client.widgets.menu.Menu;
import com.smartgwt.client.widgets.menu.MenuItem;
import com.smartgwt.client.widgets.menu.events.ClickHandler;
import com.smartgwt.client.widgets.menu.events.MenuItemClickEvent;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;

public class PropriedadesGUI {

	private Gerenciador gerenciador;
	private ListGrid listaInterfaces;
	private ListGrid listaPropriedades;
	
	public PropriedadesGUI(Gerenciador gerenciador) {

		this.gerenciador = gerenciador;
	}

	public TabSet createPainelPropriedades() {
		
		TabSet topTabSet = new TabSet();
		topTabSet.setTabBarPosition(Side.TOP);
		topTabSet.setWidth100();
		topTabSet.setHeight(245);
		
		Tab tabMetodos = new Tab("M&eacute;todos", "pieces/16/piece_yellow.png");
		Tab tabInterfaces = new Tab("Interfaces", "pieces/16/piece_blue.png");
		
		topTabSet.addTab(tabMetodos);  
        topTabSet.addTab(tabInterfaces); 
                        
        tabMetodos.setPane(createPropriedades());                
        tabInterfaces.setPane(createInterfaces());        
        
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
        listaPropriedades.setEmptyMessage("Nenhum M&eacute;todo ou Atributo.");
        
        ListGridField imageField = new ListGridField("imageField", 24);
        imageField.setType(ListGridFieldType.IMAGE);
        imageField.setImgDir("/icons/");

        ListGridField nameField = new ListGridField("name");
        
        listaPropriedades.setFields(imageField, nameField);
        
        listaPropriedades.addCellContextClickHandler(new CellContextClickHandler() {
			
			public void onCellContextClick(CellContextClickEvent event) {
				
				Menu menu = createMenuPropriedades(((ListGridRecord) event.getRecord()));
				
				menu.setTop(event.getY());
				menu.setLeft(event.getX());
				
				menu.draw();
				
				event.cancel();				
			}

			private Menu createMenuPropriedades(ListGridRecord listGridRecord) {
			
				String m = listGridRecord.getAttribute("name").toString();
				final String nome;
				
		    	Menu menuPropriedades = new Menu();
		    	menuPropriedades.setWidth(130);
		    	menuPropriedades.setCanSelectParentItems(true);
		    	MenuItem removerMetodo = null, removerVariavel = null;

				if (m.contains("(")) {
					
					m = m.substring(0, m.indexOf("("));

					removerMetodo = new MenuItem("Remover M&eacute;todo", "/icons/plugin_delete.png");		    	
					menuPropriedades.setItems(removerMetodo);
					
				} else {
					
					if (m.contains("=")) 
						m = m.substring(0, m.indexOf("=")-1);						
					
					removerVariavel = new MenuItem("Remover Atributo", "/icons/plugin_delete.png");		    	
					menuPropriedades.setItems(removerVariavel);
				}
				
				nome = m;
				
				if (removerMetodo != null)
		    	removerMetodo.addClickHandler(new ClickHandler() {
		    	
					public void onClick(MenuItemClickEvent event) {
								
						SC.ask("Confirma&ccedil;&atilde;o", "Deseja excluir o m&eacute;todo: <b>" + nome + "()</b>?", new BooleanCallback() {  
		                    
							public void execute(Boolean value) {  
		                        
								if (value != null && value) {  
									
									Classe c = ClassesGUI.classeSelecionada;
									
									if (c.procurarMetodo(nome) == null) {
										
										SC.say("Aten&ccedil;&atilde;o", "Este m&eacute;todo n&atilde;o pode ser exclu&iacute;do!");
										
										return;
									}
									
		           					listaPropriedades.removeSelectedData();

		           					c.removerMetodo(nome);
		           					
		           					getListaPropriedades().setData(getPropriedades(ClassesGUI.classeSelecionada.getNome()));
		           					
		           					getListaInterfaces().setData(getInterfaces(ClassesGUI.classeSelecionada.getNome()));
		           					
		                         }
		                    }
		                });  				
					}
				});
				
				if (removerVariavel != null)
					removerVariavel.addClickHandler(new ClickHandler() {
			    	
						public void onClick(MenuItemClickEvent event) {
									
							SC.ask("Confirma&ccedil;&atilde;o", "Deseja excluir o Atributo: " + nome + "?", new BooleanCallback() {  
			                    
								public void execute(Boolean value) {  
			                        
									if (value != null && value) {  
										
										Classe c = ClassesGUI.classeSelecionada;
										
										if (c.procurarVariavel(nome) == null) {
											
											SC.say("Aten&ccedil;&atilde;o", "Este Atributo n&atilde;o pode ser exclu&iacute;da!");
											
											return;
										}
										
			           					listaPropriedades.removeSelectedData();

			           					c.removerVariavel(nome);
			           					
			           					c.removerVariavelFilhas(c, nome);
			           					
			           					getListaPropriedades().setData(getPropriedades(ClassesGUI.classeSelecionada.getNome()));
			           					
			           					getListaInterfaces().setData(getInterfaces(ClassesGUI.classeSelecionada.getNome()));
			           					
			                         }
			                    }
			                });  				
						}
					});

				return menuPropriedades;		    	
			}
		});
        
        return listaPropriedades;
	}

	public ListGrid createInterfaces() {
    	
		listaInterfaces = new ListGrid();
		listaInterfaces.setCellHeight(24);
		listaInterfaces.setImageSize(16);
		listaInterfaces.setWidth100();
		listaInterfaces.setHeight100();
		listaInterfaces.setTop(25);
		listaInterfaces.setBorder("0px");
		listaInterfaces.setBodyStyleName("normal");        
		listaInterfaces.setAlternateRecordStyles(true);
        listaInterfaces.setShowHeader(false);
        listaInterfaces.setEmptyMessage("Nenhuma Interface.");
        
        ListGridField imageField = new ListGridField("imageField", 24);
        imageField.setType(ListGridFieldType.IMAGE);
        imageField.setImgDir("/icons/");

        ListGridField nameField = new ListGridField("name");
        
        listaInterfaces.setFields(imageField, nameField);
        
        listaInterfaces.addCellContextClickHandler(new CellContextClickHandler() {
			
			public void onCellContextClick(CellContextClickEvent event) {

				Menu menu = createMenuInterfaces(((ListGridRecord) event.getRecord()));
				
				menu.setTop(event.getY());
				menu.setLeft(event.getX());
				
				menu.draw();
				
				event.cancel(); 				
			}
		});
        
        return listaInterfaces;
    }
	
	private Menu createMenuInterfaces(ListGridRecord record) {

		final Interface interfaceSelecionada = gerenciador.getProjetoAtual().getColecaoInterface().procurarInterface(record.getAttribute("name").toString());
		
    	Menu menuInterfaces = new Menu();
    	menuInterfaces.setWidth(130);
    	menuInterfaces.setCanSelectParentItems(true);
    	
    	MenuItem excluirInterface = new MenuItem("Excluir Interface", "/icons/plugin_delete.png");
    	
    	excluirInterface.addClickHandler(new ClickHandler() {
			
			public void onClick(MenuItemClickEvent event) {
				
				final String ci = ClassesGUI.classeSelecionada.implementaInterface(ClassesGUI.classeSelecionada, interfaceSelecionada);

				SC.ask("Confirma&ccedil;&atilde;o", "Deseja excluir a interface <b>" + interfaceSelecionada.getNome() + "</b>, da classe <b>" + ci + "</b> e de todas as suas subclasses?", new BooleanCallback() {  
                    
					public void execute(Boolean value) {  
                        
						if (value != null && value) {  
							
							Classe classeImplementada =  gerenciador.getProjetoAtual().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getColecaoClasse().getRaiz(), ci);
							
           					listaInterfaces.removeSelectedData();
           					
           					classeImplementada.removerInterface(interfaceSelecionada.getNome());
           						
           					for (Variavel v : interfaceSelecionada.getVariaveis())
           						classeImplementada.removerVariavel(v.getNome());
           					
           					classeImplementada.removerInterfaceFilhas(classeImplementada, interfaceSelecionada);
           					
           					getListaPropriedades().setData(getPropriedades(ClassesGUI.classeSelecionada.getNome()));
           					
           					getListaInterfaces().setData(getInterfaces(ClassesGUI.classeSelecionada.getNome()));
           					
                         }
                    }
                });  				
			}
		});    	
    	
    	menuInterfaces.setItems(excluirInterface);
		return menuInterfaces;
	}	
   
    public ListGridRecord[] getInterfaces(String nomeClasse) {
    	
    	List<Interface> lista = new ArrayList<Interface>();
    	
    	Classe c =  gerenciador.getProjetoAtual().getColecaoClasse().procurarClasse(gerenciador.getProjetoAtual().getColecaoClasse().getRaiz(), nomeClasse);

		while (c != null) {
			
			if (c.getInterfaces() != null) {
				
				for (Interface i : c.getInterfaces()) {
					
					if (!lista.contains(i))
						
						lista.add(i);						
				}
			}
			
			c = c.getParent();
		}    	
    	
		if (lista.size() == 0)
			return new ListGridRecord[0];
		
		ListGridRecord[] lst = new ListGridRecord[lista.size()];
		
		for (int i=0; i<lista.size(); i++) {
			
			ListGridRecord record = new ListGridRecord();
			record.setAttribute("imageField", "/icons/puzzle_blue.png");
			record.setAttribute("name", lista.get(i).getNome());
			
			lst[i] = record;
		}
		 	
       	return lst;
    }

	public ListGrid getListaPropriedades() {
		return listaPropriedades;
	}
	
	public ListGrid getListaInterfaces() {
		return listaInterfaces;
	}

	public ListGridRecord[] getPropriedades(String nomeClasse) {

		List<Variavel> variaveis = new ArrayList<Variavel>();
		
		Classe classe =  gerenciador.getProjetoAtual().getColecaoClasse().procurarClasse( gerenciador.getProjetoAtual().getColecaoClasse().getRaiz(), nomeClasse);
		
		Classe c = classe;
		
		for (Variavel v : c.getVariaveis()) 			
			variaveis.add(v);
		
		List<Metodo> metodos = new ArrayList<Metodo>();
		
		c = classe;
		
		while (c != null) {
			
			for (Interface i : c.getInterfaces()) {
			
				for (Metodo m : i.getMetodos()) {
					
					if (!metodos.contains(m))
						metodos.add(m);
				}
			}
			
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
			
			if (variaveis.get(i).getValorPadrao() == null)
				record.setAttribute("name", variaveis.get(i).getNome());
			else
				record.setAttribute("name", variaveis.get(i).getNome() + " = " + variaveis.get(i).getValorPadrao());
			
			lst[indice] = record;
			indice++;
		}
		
		for (int i=0; i<metodos.size(); i++) {
			
			ListGridRecord record = new ListGridRecord();
			record.setAttribute("imageField", "/icons/shape_square.png");
			record.setAttribute("name", metodos.get(i).getNome() + "(" + metodos.get(i).getParametrosString() + ")" + " : " + metodos.get(i).getRetorno());
			
			lst[indice] = record;
			indice++;
		}		
		
		return lst;
	}	

}
