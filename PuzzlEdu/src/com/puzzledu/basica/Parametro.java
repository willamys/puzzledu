package com.puzzledu.basica;

import com.google.gwt.user.client.rpc.IsSerializable;

public class Parametro implements IsSerializable {

	private Long id;
	private String nome;
	private String tipo;
	
	public Parametro() {
		
	}
	
	public Parametro(String nome, String tipo) {
		
		this.nome = nome;
		this.tipo = tipo;
	}

	public Parametro(Long id, String nome, String tipo) {
		super();
		this.id = id;
		this.nome = nome;
		this.tipo = tipo;
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

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
}
