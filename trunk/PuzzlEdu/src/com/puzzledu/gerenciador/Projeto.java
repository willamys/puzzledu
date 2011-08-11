package com.puzzledu.gerenciador;

import com.google.gwt.user.client.rpc.IsSerializable;
import com.puzzledu.dao.RepositorioDados;

public class Projeto implements IsSerializable {
	
	private Long id;
	private String nome;
	//private Pilha pilha; 
	private RepositorioDados repositorioDados;

	public Projeto() {
		
		repositorioDados = new RepositorioDados();
		//pilha = new Pilha()
	}
	
	public Projeto(Long id, String nome, RepositorioDados repositorioDados) {
		this();
		this.id = id;
		this.nome = nome;
		this.repositorioDados = repositorioDados;
	}

	public Projeto(Long id, String nome) {
		
		this();
		this.id = id;
		this.nome = nome;		
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

	/*public Pilha getPilha() {
		return pilha;
	}

	public void setPilha(Pilha pilha) {
		this.pilha = pilha;
	}	*/	
}
