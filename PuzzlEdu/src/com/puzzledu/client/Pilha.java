package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.TextArea;

public class Pilha {

	private List<Instancia> pilha;
	private int contadorObjetos;
	
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
	
	public void executarAcoesDasInstancias(final TextArea console) {
		
		console.setText("");
		
		for (Instancia i : pilha) {
			
			final Instancia inst = i;
			
			new Runnable() {
				
				public void run() {
					
					for (Acao a : inst.getAcoes()) {

						if (a.getTipo().equals("io" )) {
						
							AcaoIO acaoIO = (AcaoIO) a;
							
							executarAcaoIO(acaoIO);
						
							console.setText(console.getText() + inst.getNome() + "."  + a.getMetodo().getNome() + "(" + acaoIO.getValor() + ")\n");
						
						} else if (a.getTipo().equals("for")) {
							
							final AcaoFor acaoFor = (AcaoFor) a;
							
							Timer timer = new Timer(){
						
								public void run(){
						
									for(int i=0; i<acaoFor.getQtdRepeticoes(); i++) {
																
										AcaoIO acaoIO = new AcaoIO(acaoFor.getValor(), acaoFor.getMetodo());
										executarAcaoIO(acaoIO);
									}
								}
							};

							timer.schedule(1000); 
							
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
							}
						} 
					}; 

					timer.schedule(1000); 							
				}
			}.run();

		}
	}
} 