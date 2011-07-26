package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.TextArea;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.DragAppearance;
import com.smartgwt.client.types.Overflow;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.types.TreeModelType;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.HTMLPane;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.events.DropEvent;
import com.smartgwt.client.widgets.events.DropHandler;
import com.smartgwt.client.widgets.events.ShowContextMenuEvent;
import com.smartgwt.client.widgets.events.ShowContextMenuHandler;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import com.smartgwt.client.widgets.toolbar.ToolStrip;
import com.smartgwt.client.widgets.tree.Tree;
import com.smartgwt.client.widgets.tree.TreeGrid;
import com.smartgwt.client.widgets.tree.TreeGridField;
import com.smartgwt.client.widgets.tree.TreeNode;
import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.ImgProperties;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.events.CellClickEvent;
import com.smartgwt.client.widgets.grid.events.CellClickHandler;

public class PuzzlEdu implements EntryPoint {
	
	private ClassesGUI classesGUI;
	private PropriedadesGUI propriedadesGUI;	
	private Gerenciador gerenciador;
	private Canvas painel; 
	private PartsListGrid scriptList;
	private TextArea console;
	private Window janelaPrincipal;
	
	public PuzzlEdu() {
					
		this.painel = createPainel();
		gerenciador = new Gerenciador();
		propriedadesGUI = new PropriedadesGUI(gerenciador);
		scriptList = new PartsListGrid();
		classesGUI = new ClassesGUI(gerenciador, propriedadesGUI, this.painel, scriptList);
		gerenciador.getProjetoAtual().getPilha().setPainel(painel);
	}
	
    public void onModuleLoad() {
    	        
        janelaPrincipal = getJanelaPrincipal();
        janelaPrincipal.setMargin(10);
        
        HLayout mainLayout = new HLayout();  
        mainLayout.setWidth100();  
        mainLayout.setHeight100();
        mainLayout.setPadding(15);
        mainLayout.setTop(60);
        //mainLayout.setBottom(10);
                        
        mainLayout.addMember(getPainelEsquerdo());
        mainLayout.addMember(getArea());
        mainLayout.addMember(getScript());
        
        janelaPrincipal.addChild(getMenu());
        janelaPrincipal.addChild(mainLayout);
        
        janelaPrincipal.draw();
   }
       
   public Window getJanelaPrincipal() {  
  
        Window window = new Window();  
        window.setAutoSize(false);  
        
        window.setTitle("PuzzlEdu 1.0: " + gerenciador.getProjetoAtual().getNome());  
        window.setWidth100();  
        window.setHeight100(); 
        
        window.setHeaderIcon("/icons/puzzle_white.png", 16, 16);
        window.setShowEdges(true); 
        
        window.addShowContextMenuHandler(new ShowContextMenuHandler() {
            public void onShowContextMenu(ShowContextMenuEvent event) {
                event.cancel();
            }
        });
  
        return window;  
   }    
   
   private Canvas getArea() {
	   
   	final VLayout leftPanel = new VLayout();
	leftPanel.setWidth100();
	leftPanel.setHeight100();
	leftPanel.setShowResizeBar(true);
	
	console = new TextArea();
	console.setHeight("100px");
	console.setWidth("660px");
	console.setEnabled(false);
	console.setStyleName("console");
	
	this.painel.setHeight("469px");
	
	leftPanel.addMember(this.painel);    	
	leftPanel.addMember(console);
	
	leftPanel.addShowContextMenuHandler(new ShowContextMenuHandler() {
        public void onShowContextMenu(ShowContextMenuEvent event) {
            event.cancel();
        }
    });

	return leftPanel;
	   
  }
    
   public Canvas createPainel() {
    	
        painel = new Canvas();  
        painel.setHeight("580");  
        painel.setWidth100();
        painel.setShowResizeBar(true);
        painel.setEdgeSize(1);
        painel.setShowEdges(true);        
        painel.setCanAcceptDrop(true);
        painel.setDropTypes("Classe");
        painel.setOverflow(Overflow.HIDDEN);

        painel.addShowContextMenuHandler(new ShowContextMenuHandler() {
            public void onShowContextMenu(ShowContextMenuEvent event) {
                event.cancel();
            }
        });
        
        painel.addDropHandler(new DropHandler() {
            public void onDrop(DropEvent event) {
            	
            }
        });
                
        return painel;
    }
    
    public ToolStrip getMenu() {
    	
    	 ToolStrip toolStrip = new ToolStrip();  
         toolStrip.setWidth("98%");  
         toolStrip.setPadding(5);
         toolStrip.setTop(28);
         toolStrip.setLeft(15);
         toolStrip.setAlign(Alignment.LEFT);
        
         Img imgNovo = new Img("/icons/page_white_add.png");
         imgNovo.setWidth("32px");
         imgNovo.setHeight("32px");
         imgNovo.setTooltip("Novo");
         imgNovo.setCursor(Cursor.HAND);
         
         imgNovo.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				
				//repositorioDados = new RepositorioDados();

			}
		 });
  
         Img imgSave = new Img("/icons/save.png");
         imgSave.setWidth("32px");
         imgSave.setHeight("32px");
         imgSave.setTooltip("Salvar");
         imgSave.setCursor(Cursor.HAND);     
         
         Img imgPlay = new Img("/icons/play-icon.png");
         imgPlay.setWidth("32px");
         imgPlay.setHeight("32px");
         imgPlay.setTooltip("Executar");
         imgPlay.setCursor(Cursor.HAND); 
         
         imgPlay.addClickHandler(new ClickHandler() {
			
			public void onClick(ClickEvent event) {

				gerenciador.getProjetoAtual().getPilha().executarAcoesDasInstancias(console);
			}
		});
         
         Img imgPause = new Img("/icons/pause-icon.png");
         imgPause.setWidth("32px");
         imgPause.setHeight("32px");
         imgPause.setTooltip("Pausar");
         imgPause.setCursor(Cursor.HAND); 
         
         Img imgStop = new Img("/icons/stop-icon.png");
         imgStop.setWidth("32px");
         imgStop.setHeight("32px");
         imgStop.setTooltip("Parar");
         imgStop.setCursor(Cursor.HAND);  
   
         Img imgPrinter = new Img("/icons/printer-icon.png");
         imgPrinter.setWidth("32px");
         imgPrinter.setHeight("32px");
         imgPrinter.setTooltip("Imprimir C&oacute;digo-Fonte");
         imgPrinter.setCursor(Cursor.HAND);
         
         imgPrinter.addClickHandler(new ClickHandler() {
			
			public void onClick(ClickEvent event) {
				getFonte("Códifo-Fonte", 500, 400);
				
			}
         });
         
         Img imgHelp = new Img("/icons/system-help.png");
         imgHelp.setWidth("32px");
         imgHelp.setHeight("32px");
         imgHelp.setTooltip("Documenta&ccedil;&atilde;o");
         imgHelp.setCursor(Cursor.HAND);
         
         imgHelp.addClickHandler(new ClickHandler() {
			
			public void onClick(ClickEvent event) {
				
				getHelp();
			}
		});


        toolStrip.addMember(imgNovo,  0);
        toolStrip.addMember(imgSave,  1);
        toolStrip.addMember(imgPlay,  2);
        toolStrip.addMember(imgPause, 3);
        toolStrip.addMember(imgStop,  4);
        toolStrip.addMember(imgPrinter, 5);
        toolStrip.addMember(imgHelp, 6);
                 
        return toolStrip;    	
    }   

    public VLayout getPainelEsquerdo() {
    	
    	final VLayout leftPanel = new VLayout();
    	leftPanel.setWidth("40%");
    	leftPanel.setHeight100();
    	leftPanel.setShowResizeBar(true);
    	leftPanel.setBottom(10);
    	
    	leftPanel.addMember(classesGUI.createArvoreClasses());    	
    	leftPanel.addMember(propriedadesGUI.createPainelPropriedades());
    	
    	leftPanel.addShowContextMenuHandler(new ShowContextMenuHandler() {
            public void onShowContextMenu(ShowContextMenuEvent event) {
                event.cancel();
            }
        });

    	return leftPanel;
    }
    
    public Canvas getScript() {
    	
    	final Window win = new Window();
        win.setTitle("Source");
        win.setHeaderIcon("pieces/16/cube_green.png", 16, 16);
        win.setKeepInParentRect(true);
        win.setWidth("30%");
        win.setHeight("100%");
        
        win.setCanDragReposition(true);
        win.setCanDragResize(true);
        win.setMembersMargin(5);    
        
        final TabSet tabs = new TabSet();
        tabs.setWidth("40%");
        tabs.setTabBarPosition(Side.TOP);
        tabs.setHeight(300);

        Tab tab1 = new Tab("Script", "silk/script_go.png");

        scriptList.setCanAcceptDroppedRecords(true);  
        scriptList.setCanReorderRecords(true);
        
        tab1.setPane(scriptList);        
        tabs.addTab(tab1);
        win.addItem(tabs);
        
        return tabs;
    }  
    
    public void getFonte(String sourceURL, int width, int height) {
    
    	final Window win = new Window();
        win.setTitle("C&oacute;digo-Fonte");
        win.setHeaderIcon("silk/page_white_cup.png", 16, 16);
        win.setShowMinimizeButton(false);  
        win.setIsModal(true);  
        win.setWidth(650);
        win.setHeight(450);

        win.setCanDragReposition(true);
        win.setCanDragResize(true);
        win.setMembersMargin(5);

        final TabSet tabs = new TabSet();
        tabs.setTabBarPosition(Side.TOP);
        tabs.setWidth100();
        tabs.setHeight100();

        construirArquivoClasses(tabs, gerenciador.getProjetoAtual().getRepositorioDados().getColecaoClasse().getRaiz());

        win.addItem(tabs);
        win.show();   
        win.centerInPage();
    }
    
    public void construirArquivoClasses(TabSet tabs, Classe classe) {
    	
    	if (classe != null)   		
    	
    		tabs.addTab(buildSourceTab(classe, "silk/page_white_cup.png"));    		
    	
    	
    	for (Classe c : classe.getFilhas())
    		
    		construirArquivoClasses(tabs, c);    	
    }

    
    public Tab buildSourceTab(Classe classe, String icon) {

    	String cabecalho = "<html> <head> <link rel='stylesheet' href='/js/sh/SyntaxHighlighter.css' type='text/css' /> <script src='/js/sh/shCore.js'></script> <script src='/js/sh/shBrushJava.js'></script> <style> .source{font-family:Courier New,monospace;  padding: 0;  margin: 0;  white-space: nowrap;  font-size: 11px;} .dp-highlighter {  white-space: nowrap;  overflow: visible;  width: 600px;  font-size: 11px;  font-family:Courier New,monospace; } </style> </head>  <body> <div class='source'><textarea name='code' class='java:nogutter' rows='22' cols='75' border='0'> ";
    	String rodape = "</textarea></div><script class='javascript'>dp.SyntaxHighlighter.HighlightAll('code');</script></body></html> ";
    	
    	//String cabecalho = " <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"> <html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\"> <head> 	<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" /> 	<title>Código-Fonte</title> ";
    	//cabecalho += "<script type=\"text/javascript\" src=\"/scripts/shCore.js\"></script> ";
    	//cabecalho += "<script type=\"text/javascript\" src=\"/scripts/shBrushJava.js\"></script> 	<link type=\"text/css\" rel=\"stylesheet\" href=\"/styles/shCoreDefault.css\"/> 	<script type=\"text/javascript\">SyntaxHighlighter.all();</script> </head> <body> <pre class=\"brush: java\"> ";    	
    	//String rodape = "</pre> </html>";
    	
    	String codigoFonte = classe.construirCodigoFonte();    	    	

        HTMLPane tabPane = new HTMLPane();
        tabPane.setWidth100();
        tabPane.setHeight100();
        tabPane.setContents(cabecalho + codigoFonte + rodape);

        Tab tab = new Tab(classe.getNome(), icon);
        tab.setPane(tabPane);
        
        return tab;
    }    
    
    public void getHelp() {
        
    	final Window win = new Window();
        win.setTitle("Ajuda");
        win.setHeaderIcon("[SKIN]/actions/help.png", 16, 16);
        win.setShowMinimizeButton(false);  
        win.setWidth(250);
        win.setHeight(485);
        win.setTop(40);
        
        int windowLeft = com.google.gwt.user.client.Window.getClientWidth() - (win.getWidth() + 140);
        win.setLeft(windowLeft);
        
        win.setAlign(Alignment.RIGHT);
        win.setAlign(VerticalAlignment.BOTTOM);
        win.setKeepInParentRect(true);

        win.setCanDragReposition(true);
        win.setCanDragResize(true);
        win.setMembersMargin(5);
        
        win.addChild(construirArvoreHelp());
        
        HTMLPane htmlPane = new HTMLPane();  
	    htmlPane.setWidth("60%");
	    htmlPane.setHeight100();  
	    htmlPane.setShowEdges(false);
	    
	    win.addChild(htmlPane);
        
        janelaPrincipal.addChild(win);
    }
    
    private TreeGrid construirArvoreHelp() {
    	
    	List<TopicoTreeNode> listaSubTopicos = new ArrayList<TopicoTreeNode>();
    	
    	Tree tree = new Tree();  
        tree.setModelType(TreeModelType.CHILDREN);  
        tree.setShowRoot(false);
        tree.setNameProperty("Name");  
        tree.setIdField("Id");
        tree.setParentIdField("ParentId"); 
        tree.setData(getTopicos(listaSubTopicos));
                  
        final TreeGrid treeGrid = new TreeGrid();  
        treeGrid.setFields(new TreeGridField("Name", "T&oacute;picos"));  
        treeGrid.setData(tree);            
        treeGrid.getData().openAll();
        treeGrid.setWidth("40%");
        treeGrid.setHeight100();
        treeGrid.setShowResizeBar(true);
        treeGrid.setAppImgDir("/icons/");
        treeGrid.setTop(20);
        
        treeGrid.addCellClickHandler(new CellClickHandler() {
			
			public void onCellClick(CellClickEvent event) {
				
				//getJanelaConteudo();				
			}
		});
        
        for (TopicoTreeNode t : listaSubTopicos) {
        	
        	tree.add(t, t.getParentId());
        }
        
        return treeGrid;
    }
    
    private void getJanelaConteudo() {
    	
    	final Window win = new Window();
        win.setTitle("Ajuda");
        win.setHeaderIcon("[SKIN]/actions/help.png", 16, 16);
        win.setShowMinimizeButton(false);  
        win.setWidth(250);
        win.setHeight(485);
        win.setTop(40);
        
        int windowLeft = com.google.gwt.user.client.Window.getClientWidth() - (win.getWidth() + 140);
        win.setLeft(windowLeft);
        
        win.setAlign(Alignment.RIGHT);
        win.setAlign(VerticalAlignment.BOTTOM);
        win.setKeepInParentRect(true);
        
        win.setCanDragReposition(true);
        win.setCanDragResize(true);
        win.setMembersMargin(5);
        
		HTMLPane htmlPane = new HTMLPane();  
	    htmlPane.setWidth100();
	    htmlPane.setHeight("40%");  
	    htmlPane.setShowEdges(false);  
	    
        //win.addChild(htmlPane);
        
        janelaPrincipal.addChild(win);        		
    }

	private TreeNode[] getTopicos(List<TopicoTreeNode> subTopicos) {
		
		//Tópico 1
		TopicoTreeNode topico1 = new TopicoTreeNode("1", "Janela de Classes");
		
			//Sub-Tópicos, pelo segundo parametro do construtor vai o nome do tópico pai, a qual o pertence
			TopicoTreeNode topico1_1 = new TopicoTreeNode("1.1", "Pra que serve?", topico1.getTopicoId());
			topico1_1.setConteudo("Janela com op&ccedil;ões espec&iacute;ficas para cria&ccedil;&atilde;o, altera&ccedil;&atilde;o e exclus&atilde;o de classes. Al&eacute;m disso, pode-se criar m&eacute;todos e atributos, implementar interface, alterar imagem e criar instância.");
			
			TopicoTreeNode topico1_2 = new TopicoTreeNode("1.2", "Como acessar?", topico1.getTopicoId());
			topico1_2.setConteudo("Clicando com o bot&atilde;o direito do mouse sobre uma classe, no menu suspenso que surgir&aacute;.");

			TopicoTreeNode topico1_3 = new TopicoTreeNode("1.3", "Classe Object?", topico1.getTopicoId());
			topico1_2.setConteudo("A classe Object &eacute;, em muitas linguagens, a classe no topo da hierarquia de classes . Todas as classes herdam direta ou indiretamente dela. Para saber mais sobre Heran&ccedil;a, entre no tópico relacionado.");
			
			TopicoTreeNode topico1_4 = new TopicoTreeNode("1.4", "Classe Hello?", topico1.getTopicoId());
			topico1_2.setConteudo("Na execu&ccedil;&atilde;o inicial do PuzzlEdu (ou quando a p&aacute;gina &eacute; atualizada), verifica-se a existência de uma classe nomeada como Hello. Ela &eacute; uma classe exemplo para verificar algumas das funcionalidades poss&iacute;veis.");
		
		//Tópico 2
		TopicoTreeNode topico2 = new TopicoTreeNode("2", "Guia de M&eacute;todos/Interfaces");
		
			//Sub-Tópicos, pelo segundo parametro do construtor vai o nome do tópico pai, a qual o pertence
			TopicoTreeNode topico2_1 = new TopicoTreeNode("2.1","Pra que serve?", topico2.getTopicoId());
			topico2_1.setConteudo("Guia onde ficam os atributos e m&eacute;todos da classe selecionada na janela Classes. Nesta &aacute;rea &eacute; poss&iacute;vel remover atributos e m&eacute;todos e inserir parâmetros aos m&eacute;todos.");
			
			TopicoTreeNode topico2_2 = new TopicoTreeNode("2.2","Como acessar?", topico2.getTopicoId());
			topico2_2.setConteudo("Clicando-se com bot&atilde;o direito do mouse em um atributo ou em um m&eacute;todo, acessando o menu suspenso com op&ccedil;ões espec&iacute;ficas.");

			TopicoTreeNode topico2_3 = new TopicoTreeNode("2.3","E a aba Interface?", topico2.getTopicoId());
			topico2_3.setConteudo("Nesta aba encontram-se as interfaces que a classe selecionada est&aacute; implementando. Para saber mais sobre Interface, entre no tópico relacionado.");

			TopicoTreeNode topico2_4 = new TopicoTreeNode("2.4","O que pode ser feito na aba Interface?", topico2.getTopicoId());
			topico2_4.setConteudo("Nesta &aacute;rea h&aacute; possibilidade apenas de remover a interface associada à classe selecionada.");
			
		//Tópico 3
		TopicoTreeNode topico3 = new TopicoTreeNode("3", "&Aacute;rea de Execu&ccedil;&atilde;o/Manipula&ccedil;&atilde;o");

			//Sub-Tópicos, pelo segundo parametro do construtor vai o nome do tópico pai, a qual o pertence	
			TopicoTreeNode topico3_1 = new TopicoTreeNode("3.1","Pra que serve?", topico3.getTopicoId());
			topico3_1.setConteudo("Local onde as classes s&atilde;o manipuladas, ou seja, &eacute; o corpo do programa ou projeto a ser desenvolvido. Dependendo da manipula&ccedil;&atilde;o realizada, essa &eacute; também a &aacute;rea de execu&ccedil;&atilde;o, como por exemplo, fazer um objeto mover-se de um lado a outro;");
				
			TopicoTreeNode topico3_2 = new TopicoTreeNode("3.2","Como acessar?", topico3.getTopicoId());
			topico3_2.setConteudo("Criando uma instância, ou objeto, da classe. Depois, clicando com o bot&atilde;o direito do mouse sobre a instância para acessar as op&ccedil;ões. Para saber mais sobre Instância, entre no tópico relacionado.");

			TopicoTreeNode topico3_3 = new TopicoTreeNode("3.3","Quais op&ccedil;ões est&atilde;o dispon&iacute;veis?", topico3.getTopicoId());
			topico3_3.setConteudo("Est&atilde;o dispon&iacute;veis as estruturas de sele&ccedil;&atilde;o e repeti&ccedil;&atilde;o para manipula&ccedil;&atilde;o, todos os m&eacute;todos da classe e a op&ccedil;&atilde;o de remo&ccedil;&atilde;o da instância.");							

		//Tópico 4
		TopicoTreeNode topico4 = new TopicoTreeNode("4","Console");

			//Sub-Tópicos, pelo segundo parametro do construtor vai o nome do tópico pai, a qual o pertence	
			TopicoTreeNode topico4_1 = new TopicoTreeNode("4.1","Pra que serve?", topico4.getTopicoId());
			topico4_1.setConteudo("Local onde os resultados s&atilde;o exibidos durante a execu&ccedil;&atilde;o dos programas constru&iacute;dos na &aacute;rea de execu&ccedil;&atilde;o.");
					
			TopicoTreeNode topico4_2 = new TopicoTreeNode("4.2","Como acessar?", topico4.getTopicoId());
			topico4_2.setConteudo("Esta &aacute;rea n&atilde;o possui intera&ccedil;&atilde;o.");

		//Tópico 5
		TopicoTreeNode topico5 = new TopicoTreeNode("5","&Aacute;rea de Script");

			//Sub-Tópicos, pelo segundo parametro do construtor vai o nome do tópico pai, a qual o pertence	
			TopicoTreeNode topico5_1 = new TopicoTreeNode("5.1","Pra que serve?", topico5.getTopicoId());
			topico5_1.setConteudo("Local onde ser&aacute; exibida a pilha de comandos de manipula&ccedil;&atilde;o realizada pelo usu&aacute;rio.");
					
			TopicoTreeNode topico5_2 = new TopicoTreeNode("5.2","Como acessar?", topico5.getTopicoId());
			topico5_2.setConteudo("A &uacute;nica intera&ccedil;&atilde;o nesta &aacute;rea &eacute; a possibilidade de alterar a ordem dos componentes da pilha.");

		//Tópico 6
		TopicoTreeNode topico6 = new TopicoTreeNode("6","Bot&otilde;es de Comandos");

			//Sub-Tópicos, pelo segundo parametro do construtor vai o nome do tópico pai, a qual o pertence	
			TopicoTreeNode topico6_1 = new TopicoTreeNode("6.1","Novo", topico6.getTopicoId());
			topico6_1.setConteudo("Cria novos projetos sem o programa exemplo.");
					
			TopicoTreeNode topico6_2 = new TopicoTreeNode("6.2","Salvar", topico6.getTopicoId());
			topico6_2.setConteudo("Salva o estado atual do projeto para acesso posterior. &Eacute; necess&aacute;rio ter conta na Google.");

			TopicoTreeNode topico6_3 = new TopicoTreeNode("6.3","Executar", topico6.getTopicoId());
			topico6_3.setConteudo("Executa a pilha de comandos do programa constru&iacute;do.");
			
			TopicoTreeNode topico6_4 = new TopicoTreeNode("6.4","Pausar", topico6.getTopicoId());
			topico6_4.setConteudo("Pausa a execu&ccedil;&atilde;o da pilha de comandos do programa constru&iacute;do.");
			
			TopicoTreeNode topico6_5 = new TopicoTreeNode("6.5","Parar", topico6.getTopicoId());
			topico6_5.setConteudo("Para e cancela a execu&ccedil;&atilde;o da pilha de comandos do programa constru&iacute;do.");
			
			TopicoTreeNode topico6_6 = new TopicoTreeNode("6.6","Imprimir C&oacute;digo-Fonte", topico6.getTopicoId());
			topico6_6.setConteudo("Abre uma janela para sele&ccedil;&atilde.o da classe que se quer imprimir o c&oacute;digo-fonte.");
			
			TopicoTreeNode topico6_7 = new TopicoTreeNode("6.7","Documenta&ccedil;&atilde;o", topico6.getTopicoId());
			topico6_7.setConteudo("Abre uma janela para sele&ccedil;&atilde;o da classe que se quer imprimir o c&oacute;digo-fonte.");

		//Tópico 7
		TopicoTreeNode topico7 = new TopicoTreeNode("8","Item do menu suspenso das classes");
			//Sub-Tópicos, pelo segundo parametro do construtor vai o nome do tópico pai, a qual o pertence	
			TopicoTreeNode topico7_1 = new TopicoTreeNode("7.1", "Criar classe", topico7.getTopicoId());
			topico7_1.setConteudo("Cria novas classes ('irm&atilde;s' ou 'filhas') na &aacute;rvore de classes. Classes irm&atilde;s s&atilde;o classes que est&atilde;o no mesmo n&iacute;vel de hierarquia. Classes filhas s&atilde;o as subclasses de uma classe.");

		//Adicionar todos os sub tópicos nesta lista
		subTopicos.add(topico1_1);
		subTopicos.add(topico1_2);
		subTopicos.add(topico1_3);
		subTopicos.add(topico1_4);
		subTopicos.add(topico2_1);
		subTopicos.add(topico2_2);
		subTopicos.add(topico2_3);
		subTopicos.add(topico2_4);
		subTopicos.add(topico3_1);
		subTopicos.add(topico3_2);
		subTopicos.add(topico3_3);
		subTopicos.add(topico4_1);
		subTopicos.add(topico4_2);
		subTopicos.add(topico5_1);
		subTopicos.add(topico5_2);		
		subTopicos.add(topico6_1);
		subTopicos.add(topico6_2);
		subTopicos.add(topico6_3);
		subTopicos.add(topico6_4);
		subTopicos.add(topico6_5);
		subTopicos.add(topico6_6);
		subTopicos.add(topico7_1);
		
		//adicionar aqui todos os tópicos raizes
		return new TreeNode[]{topico1, topico2, topico3, topico4, topico5, topico6, topico7};
	}
}

class TopicoTreeNode extends TreeNode {
	
	public TopicoTreeNode(String id, String nome) {
		
		super(nome);
		
		setName(nome);
		setTopicoId(id);
		setIcon("/icons/book.png");
	}
	
	public TopicoTreeNode(String id, String nome, String topicoPai) {
		
		super(nome);
		
		setIcon("/icons/page.png");
		
		setParentId(topicoPai);
		setName(nome);
		setTopicoId(id);
	}
	
	 public void setIcon(String icon) {
		 
		 setAttribute("icon", icon);
	 }
	 
	 public void setTopicoId(String value) {  
	        setAttribute("Id", value);  
	 }
	 
	 public String getTopicoId() {  
	        return getAttribute("Id");  
	 }	 
	 
	 public void setParentId(String value) {  
	 
		 setAttribute("ParentId", value);  
	 }
	 
	 public String getParentId() {  
		 
		 return getAttribute("ParentId");  
	 }
	 
	 public void setName(String name) {  
		 
		 setAttribute("Name", name);  
	 } 
	 
	 public String getNome() {
		 
		 return getAttribute("Name");
	 }

	public String getConteudo() {
		
		return getAttribute("Conteudo");
	}

	public void setConteudo(String conteudo) {
		
		setAttribute("Conteudo", conteudo);
	}
}

class DroppedPiece extends Img {
    
	public DroppedPiece(String src, int left, int top) {
		
		setSrc(src);
        setLeft(left);
        setTop(top);
        setWidth(24);
        setHeight(24);
        setAppImgDir("pieces/24/");
        setCanDragReposition(true);
        setKeepInParentRect(true);
        setDragAppearance(DragAppearance.TARGET);
        
        addShowContextMenuHandler(new ShowContextMenuHandler() {
            public void onShowContextMenu(ShowContextMenuEvent event) {
                destroy();
                event.cancel();
            }
        });
    }
}

class PartsListGrid extends ListGrid {

    PartsListGrid() {
    	
        setWidth100();
        setHeight100();
        setCellHeight(30);
        setImageSize(16);
        setWrapCells(true);
        setShowEdges(false);
        setBorder("0px");
        setBodyStyleName("normal");
        setShowHeader(false);
        setLeaveScrollbarGap(false);
        setEmptyMessage("<br><br>Lista Vazia...");

        ListGridField partSrcField = new ListGridField("imageField", 24);
        partSrcField.setType(ListGridFieldType.IMAGE);
        partSrcField.setImgDir("pieces/16/");

        ListGridField partNameField = new ListGridField("name");
        
        ListGridField valueField = new ListGridField("value");

        setFields(partSrcField, partNameField, valueField);

        setTrackerImage(new ImgProperties("pieces/24/cubes_all.png", 24, 24));
    }
}