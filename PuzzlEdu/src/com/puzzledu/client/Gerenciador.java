package com.puzzledu.client;

public class Gerenciador {

	private Pilha pilha;
	private RepositorioDados repositorioDados;
	private Projeto projetoAtual;
	
	public Gerenciador() {
		
		pilha = new Pilha();
		repositorioDados = new RepositorioDados();
		projetoAtual     = repositorioDados.getColecaoProjeto().buscarPorNome("Projeto Exemplo");
		
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
	
	
}
