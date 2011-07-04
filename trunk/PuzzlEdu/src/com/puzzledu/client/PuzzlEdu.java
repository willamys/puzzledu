package com.puzzledu.client;

import com.google.gwt.core.client.EntryPoint;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.DragAppearance;
import com.smartgwt.client.types.Overflow;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.widgets.Button;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.RichTextEditor;
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

public class PuzzlEdu implements EntryPoint {
	
	private ClassesGUI classesGUI;
	private PropriedadesGUI propriedadesGUI;	
	private RepositorioDados repositorioDados;
	private Canvas painel; 
	
	public PuzzlEdu() {
				
		this.painel = createPainel();
		repositorioDados = new RepositorioDados();
		propriedadesGUI = new PropriedadesGUI(repositorioDados);
		classesGUI = new ClassesGUI(repositorioDados, propriedadesGUI, this.painel);		
	}
	
    public void onModuleLoad() {
    	        
        Window janela = getJanelaPrincipal();
        janela.setMargin(10);
        
        HLayout mainLayout = new HLayout();  
        mainLayout.setWidth100();  
        mainLayout.setHeight100();
        mainLayout.setPadding(15);
        mainLayout.setTop(60);
        mainLayout.setBottom(10);
                        
        mainLayout.addMember(getPainelEsquerdo());
        mainLayout.addMember(getPainel());
        mainLayout.addMember(getSourceCode());
        
        janela.addChild(getMenu());
        janela.addChild(mainLayout);
        
        janela.draw();
   }
       
   public Window getJanelaPrincipal() {  
  
        Window window = new Window();  
        window.setAutoSize(false);  
        window.setTitle("PuzzlEdu 1.0");  
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
   
   private Canvas getPainel() {
	   
	   return this.painel;
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
   
         Button iconButton = new Button();  
         iconButton.setIcon("/images/icons/32/arrow_down.png");  
         iconButton.setTitle("Print");  
         toolStrip.addMember(iconButton);
        
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
         
         toolStrip.addMember(imgNovo, 0);
         toolStrip.addMember(imgSave, 1);
         toolStrip.addMember(imgPlay, 2);
         toolStrip.addMember(imgPause, 3);
         toolStrip.addMember(imgStop, 4);
                 
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
        win.setWidth("40%");
        win.setHeight(300);
        
        win.setCanDragReposition(true);
        win.setCanDragResize(true);
        win.setMembersMargin(5);    
        
        final TabSet tabs = new TabSet();
        tabs.setWidth("40%");
        tabs.setTabBarPosition(Side.TOP);
        tabs.setHeight(300);
        
        tabs.addTab(buildSourceTab("Source", "silk/script_go.png"));
        win.addItem(tabs);
        
        return tabs;
    }
    
    public Tab buildSourceTab(String title, String icon) {
        
    	String contents = "<span style='font-size:22px;'>Ajax</span> " +
        "<b>A</b>synchronous <b>J</b>avaScript <b>A</b>nd <b>X</b>ML (AJAX) is a " +
        "Web development technique for creating interactive <b>web applications</b>. " +
        "The intent is to make web pages feel more responsive by exchanging small " +
        "amounts of data with the server behind the scenes, so that the entire Web " +
        "page does not have to be reloaded each time the user makes a change. " +
        "This is meant to increase the Web page's <b>interactivity</b>, <b>speed</b>, " +
        "and <b>usability</b>.<br>" +
        "(Source: <a href='http://www.wikipedia.org' title='Wikipedia' target='_blank'>Wikipedia</a>)";

    	final Canvas htmlCanvas = new Canvas();
        htmlCanvas.setHeight(130);
        htmlCanvas.setPadding(2);
        htmlCanvas.setOverflow(Overflow.HIDDEN);
        htmlCanvas.setCanDragResize(true);
        htmlCanvas.setContents(contents);
        
        final RichTextEditor richTextEditor = new RichTextEditor();
        richTextEditor.setHeight100();
        richTextEditor.setWidth100();
        richTextEditor.setOverflow(Overflow.HIDDEN);
        richTextEditor.setValue(contents);
        
        Tab tab = new Tab(title, icon);
        tab.setPane(richTextEditor);
        
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