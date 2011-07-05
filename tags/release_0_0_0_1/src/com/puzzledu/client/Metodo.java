package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

public class Metodo {

	private String nome;
	private String retorno;
	private List<Parametro> parametros;
	
	public Metodo() {
		
		parametros = new ArrayList<Parametro>();
	}

	public Metodo(String assinatura) {

		this();
		
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

	public List<Parametro> getParametros() {
		return parametros;
	}
	
	public String getParametrosString() {
		
		String params = "";
		
		if (parametros == null)
			return params;
		
		for(Parametro p : parametros) {
			
			if (!params.equals(""))
				params += ", ";
			
			params += p.getNome() + " : " + p.getTipo(); 
		}
		
		return params;
	}

	public void setParametros(List<Parametro> parametros) {
		this.parametros = parametros;
	}
	
	public void adicionarParametro(Parametro param) {
		
		this.parametros.add(param);
	}
	
	public void removerParametro(Parametro param) {
		
		this.parametros.remove(param);
	}	
}
