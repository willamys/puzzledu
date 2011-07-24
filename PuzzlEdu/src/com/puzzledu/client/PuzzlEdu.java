package com.puzzledu.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.TextArea;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.DragAppearance;
import com.smartgwt.client.types.Overflow;
import com.smartgwt.client.types.Side;
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
import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.ImgProperties;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;

public class PuzzlEdu implements EntryPoint {
	
	private ClassesGUI classesGUI;
	private PropriedadesGUI propriedadesGUI;	
	private Gerenciador gerenciador;
	private Canvas painel; 
	private PartsListGrid scriptList;
	private TextArea console;
	
	public PuzzlEdu() {
					
		this.painel = createPainel();
		gerenciador = new Gerenciador();
		propriedadesGUI = new PropriedadesGUI(gerenciador);
		scriptList = new PartsListGrid();
		classesGUI = new ClassesGUI(gerenciador, propriedadesGUI, this.painel, scriptList);
		gerenciador.getProjetoAtual().getPilha().setPainel(painel);
	}
	
    public void onModuleLoad() {
    	        
        Window janela = getJanelaPrincipal();
        janela.setMargin(10);
        
        HLayout mainLayout = new HLayout();  
        mainLayout.setWidth100();  
        mainLayout.setHeight100();
        mainLayout.setPadding(15);
        mainLayout.setTop(60);
        //mainLayout.setBottom(10);
                        
        mainLayout.addMember(getPainelEsquerdo());
        mainLayout.addMember(getArea());
        mainLayout.addMember(getSourceCode());
        
        janela.addChild(getMenu());
        janela.addChild(mainLayout);
        
        janela.draw();
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
				mostrarFonte("Códifo-Fonte", 500, 400);
				
			}
         });
         
         Img imgHelp = new Img("/icons/system-help.png");
         imgHelp.setWidth("32px");
         imgHelp.setHeight("32px");
         imgHelp.setTooltip("Documenta&ccedil;&atilde;o");
         imgHelp.setCursor(Cursor.HAND);


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
    
    public Canvas getSourceCode() {
    	
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
    
    public void mostrarFonte(String sourceURL, int width, int height) {
    
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