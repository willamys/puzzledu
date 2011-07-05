package com.puzzledu.client;

public class Gerenciador {

	private Pilha pilha;
	private RepositorioDados repositorioDados;
	
	public Gerenciador() {
		
		pilha = new Pilha();
		repositorioDados = new RepositorioDados();
	}

	public Pilha getPilha() {
		return pilha;
	}

	public void setPilha(Pilha pilha) {
		this.pilha = pilha;
	}

	public RepositorioDados getRepositorioDados() {
		return repositorioDados;
	}

	public void setRepositorioDados(RepositorioDados repositorioDados) {
		this.repositorioDados = repositorioDados;
	}
}
