package com.puzzledu.client;

public class Variavel {

	private String acesso;
	private String nome;
	private String tipo;
	private String valorPadrao;
	
	public Variavel() {
		
	}
	
	public Variavel(String nome) {
		
		super();
		
		this.nome = nome;
	}	

	public Variavel(String nome, String tipo) {
	
		super();
		
		this.nome = nome;
		this.tipo = tipo;
	}
	
	public Variavel(String nome, String tipo, String valorPadrao) {
		
		super();
		
		this.nome = nome;
		this.tipo = tipo;
		this.valorPadrao = valorPadrao;
	}	
	
	public Variavel(String nome, String tipo, String valorPadrao, String acesso) {
		
		super();
		
		this.nome = nome;
		this.tipo = tipo;
		this.valorPadrao = valorPadrao;
		this.acesso = acesso;
	}	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getValorPadrao() {
		return valorPadrao;
	}

	public void setValorPadrao(String valorPadrao) {
		this.valorPadrao = valorPadrao;
	}

	public String getAcesso() {
		return acesso;
	}

	public void setAcesso(String acesso) {
		this.acesso = acesso;
	}	
}