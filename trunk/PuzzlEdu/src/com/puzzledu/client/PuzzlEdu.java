package com.puzzledu.client;

import com.google.gwt.core.client.EntryPoint;
import com.smartgwt.client.widgets.Button;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tile.TileGrid;
import com.smartgwt.client.widgets.toolbar.ToolStrip;

public class PuzzlEdu implements EntryPoint {
	
	private ColecaoClasse colecaoClasse;
	private PropriedadesGUI propriedadesGUI;
	private ClassesGUI classesGUI;
	
	public PuzzlEdu() {
		
		colecaoClasse = new ColecaoClasse();
		propriedadesGUI = new PropriedadesGUI(colecaoClasse);
		classesGUI = new ClassesGUI(colecaoClasse, propriedadesGUI);
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
        mainLayout.addMember(getArea());
        
        janela.addChild(getMenuPrincipal());
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
  
        return window;  
    }    
    
    public TileGrid getArea() {
    	
        TileGrid tileGrid = new TileGrid();  
        tileGrid.setHeight(400);  
        tileGrid.setWidth100();
        tileGrid.setShowResizeBar(true);
                
        return tileGrid;
    }
    
    public ToolStrip getMenuPrincipal() {
    	
    	 ToolStrip toolStrip = new ToolStrip();  
         toolStrip.setWidth("97%");  
         toolStrip.setPadding(10);
         toolStrip.setTop(25);
         toolStrip.setLeft(15);
   
         Button iconButton = new Button();  
         iconButton.setIcon("images/icons/32/arrow_down.png");  
         iconButton.setTitle("Print");  
         toolStrip.addMember(iconButton);
         
         IButton button = new IButton("Click Me");
         button.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				colecaoClasse.show(colecaoClasse.getRaiz(), " ");
				
			}
		});
         toolStrip.addMember(button);
              
         return toolStrip;    	
    }   

    public VLayout getPainelEsquerdo() {
    	
    	final VLayout leftPanel = new VLayout();
    	leftPanel.setWidth("30%");
    	leftPanel.setHeight100();
    	leftPanel.setShowResizeBar(true);
    	leftPanel.setBottom(10);
    	
    	leftPanel.addMember(classesGUI.createArvoreClasses());    	
    	leftPanel.addMember(propriedadesGUI.createPainelPropriedades());
    	
    	return leftPanel;
    }
    
}
