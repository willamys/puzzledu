package com.puzzledu.gerenciador;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.rpc.IsSerializable;
import com.google.gwt.user.client.ui.TextArea;
import com.puzzledu.basica.Classe;
import com.puzzledu.basica.Instancia;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.Label;

public class Pilha implements IsSerializable {

	private List<Instancia> pilha;
	private int contadorObjetos;
	private Canvas painel;
	
	public Pilha() {
	
		pilha = new ArrayList<Instancia>();
		contadorObjetos = 1;
	}
	
	public void adicionarInstanciaPilha(Instancia instancia) {
		
		pilha.add(instancia);
	}
	
	public void removerInstanciaPilha(String nome) {
		
		Instancia removida = null;
		
		for (Instancia i : pilha) {
			
			if (i.getNome().equals(nome)) {
				
				removida = i;
				break;
				
			}
		}
		
		if (removida != null) {
		
			pilha.remove(removida);
			removida.getImage().setVisible(false);
			removida.getImage().destroy();
		}
	}
	
	public String gerarNomeInstancia(String nome) {
		
		nome = nome.toLowerCase() + contadorObjetos;
		contadorObjetos++;
		
		return nome;
	}

	public void removerInstanciaPilhaDaClasse(String classeExcluida) {
		
		List<Instancia> remover = new ArrayList<Instancia>();
		
		for (Instancia i : pilha) {

			if (i.getClasse().pertenceArvore(i.getClasse(), classeExcluida)) {

				i.getImage().setVisible(false);
				i.getImage().destroy();
				remover.add(i);
				
			}
		}
		
		pilha.removeAll(remover);
	}	
	
	public Classe procurarClasseDaInstancia(String nomeInstancia) {
		
		for (Instancia i : pilha) {

			if (i.getNome().equals(nomeInstancia)) {
				
				return i.getClasse();
			}
		}
		
		return null;
	}
	
	public Instancia procurarInstancia(String nomeInstancia) {
		
		for (Instancia i : pilha) {
			
			if (i.getNome().equals(nomeInstancia))
				return i;			
		}
		
		return null;
	}	
	
	public LinkedHashMap<String, String> listarInstanciasDisponiveis(String nomeInstancia, String tipo) {
		
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		
		for (Instancia i : pilha) {
			
			if (map.containsKey(i.getNome()))
				continue;
			
			if (i.getClasse().pertenceArvore(i.getClasse(), tipo))
				if (!i.getNome().equals(nomeInstancia))
					map.put(i.getNome(), i.getNome());
		}
		
		return map;
	}
	
public void executarAcoesDasInstancias(final TextArea console) {
		
		console.setText("");
		
		for (Instancia i : pilha) {
			
			final Instancia inst = i;
			
			new Timer() {
				
				public void run() {
					
					for (Acao a : inst.getAcoes()) {

						if (a.getTipo().equals("io" )) {
						
							AcaoIO acaoIO = (AcaoIO) a;
							
							executarAcaoIO(acaoIO);
						
							console.setText(console.getText() + inst.getNome() + "."  + a.getMetodo().getNome() + "(" + acaoIO.getValor() + ")\n");
						
						} else if (a.getTipo().equals("for")) {
							
							final AcaoFor acaoFor = (AcaoFor) a;
							
							//Timer timer = new Timer(){
						
								//public void run(){
						
									for(int i=0; i<acaoFor.getQtdRepeticoes(); i++) {
																
										AcaoIO acaoIO = new AcaoIO(acaoFor.getValor(), acaoFor.getMetodo());
										executarAcaoIO(acaoIO);
									}
								//}
							//};

							//timer.schedule(1000); 
							
							console.setText(console.getText() + "repetir " + acaoFor.getQtdRepeticoes() + " vezes: " + inst.getNome() + "."  + a.getMetodo().getNome() + "("+ a.getValor() +")\n");
						}
					}					
				}

				private void executarAcaoIO(final AcaoIO a) {
				
					Timer timer = new Timer(){ 
						public void run(){ 
							
							if (a.getMetodo().getNome().equals("avancar"))
								
								inst.getImage().setLeft(inst.getImage().getLeft() + (Integer.valueOf(a.getValor())*3 ));
							
							else if (a.getMetodo().getNome().equals("voltar"))
								
								inst.getImage().setLeft(inst.getImage().getLeft() - (Integer.valueOf(a.getValor())*3));
							
							else if (a.getMetodo().getNome().equals("setNome"))	
								
								inst.setNome(a.getValor());	
							
							else if (a.getMetodo().getNome().equals("setImagem")) {	
								
								inst.getImage().setSrc(a.getValor());
								inst.getImage().redraw();
							
							} else if (a.getMetodo().getNome().equals("encontrar")) {	
								
								
							
							} else if (a.getMetodo().getNome().equals("destruir")) {	
								
								removerInstanciaPilha(inst.getNome());
							
							} else if (a.getMetodo().getNome().equals("mostrarMensagem")) {
								
								final Label label = new Label();  
							    label.setHeight(30);  
							    label.setPadding(0);
							    label.setAlign(Alignment.CENTER);
							    label.setValign(VerticalAlignment.CENTER);  
							    label.setWrap(false);  
							    label.setIcon("/icons/comment-square.png");  
							    label.setContents("<i>" +  a.getValor() + "</i>");
							    label.setLeft(inst.getImage().getLeft() + inst.getImage().getWidth());
							    label.setTop(inst.getImage().getTop() + (inst.getImage().getHeight() / 4));
							    
							    painel.addChild(label);
							    
							    Timer t2 = new Timer(){ 
									public void run(){ 
										
										label.setVisible(false);
										label.destroy();										
									}
									
							    };
							    
							    t2.schedule(3000);
							    
							}
						} 
					}; 

					timer.schedule(800); 							
				}
			}.schedule(1000);

		}
	}


	public Canvas getPainel() {
		return painel;
	}

	public void setPainel(Canvas painel) {
		this.painel = painel;
	}
} 