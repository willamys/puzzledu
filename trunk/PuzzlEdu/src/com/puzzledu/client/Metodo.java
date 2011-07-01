package com.puzzledu.client;

import java.util.List;

public class Metodo {

	private String nome;
	private String retorno;
	private List<String> parametros;
	
	public Metodo() {
		
	}

	public Metodo(String assinatura) {

		setNome(assinatura);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRetorno() {
		return retorno;
	}

	public void setRetorno(String retorno) {
		this.retorno = retorno;
	}

	public List<String> getParametros() {
		return parametros;
	}

	public void setParametros(List<String> parametros) {
		this.parametros = parametros;
	}
}
