package com.puzzledu.gerenciador;

import com.puzzledu.dao.RepositorioDados;

public class Projeto {
	
	private Long id;
	private String nome;
	private Pilha pilha; 
	private RepositorioDados repositorioDados;
	
	/* Cada projeto tem sua pilha de execução individual, e seu repositório de dados 
	 * (classes, interfaces) */

	public Projeto(Long id, String nome) {
		
		this.id = id;
		this.nome = nome;
		
		repositorioDados = new RepositorioDados();
		pilha = new Pilha();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public RepositorioDados getRepositorioDados() {
		return repositorioDados;
	}

	public void setRepositorioDados(RepositorioDados repositorioDados) {
		this.repositorioDados = repositorioDados;
	}

	public Pilha getPilha() {
		return pilha;
	}

	public void setPilha(Pilha pilha) {
		this.pilha = pilha;
	}		
}
