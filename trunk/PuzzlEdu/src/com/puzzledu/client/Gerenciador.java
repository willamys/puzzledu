package com.puzzledu.client;

public class Gerenciador {

	private Pilha pilha;
	private RepositorioDados repositorioDados;
	private Projeto projetoAtual;
	
	public Gerenciador() {
		
		pilha = new Pilha();
		repositorioDados = new RepositorioDados();
		/*Recupera um projeto existente*/
	    setProjetoAtual(repositorioDados.getColecaoProjeto().buscarPorNome("Projeto Exemplo"));
	    
	    /*Para iniciar o projeto atual zerado*/
	    //novoProjeto();
	}

	public Pilha getPilha() {
		return pilha;
	}

	public void setPilha(Pilha pilha) {
		this.pilha = pilha;
	}

	/*public RepositorioDados getRepositorioDados() {
		return repositorioDados;
	}

	public void setRepositorioDados(RepositorioDados repositorioDados) {
		this.repositorioDados = repositorioDados;
	}*/

	/**
	 * @return the projetoAtual
	 */
	public Projeto getProjetoAtual() {
		return projetoAtual;
	}

	/**
	 * @param projetoAtual the projetoAtual to set
	 */
	public void setProjetoAtual(Projeto projetoAtual) {
		this.projetoAtual = projetoAtual;
	}
	
	public void salvarProjeto(){
		if(this.projetoAtual !=null){
			repositorioDados.getColecaoProjeto().addProjeto(this.projetoAtual);
		}
	}
	
	public void novoProjeto(){
	 	setProjetoAtual(new Projeto(1L, "New Project"));
	}
	
	
}
