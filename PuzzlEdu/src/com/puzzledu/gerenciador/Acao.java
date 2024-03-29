package com.puzzledu.gerenciador;

import com.puzzledu.basica.Metodo;

public abstract class Acao implements Comparable<Acao>{
	
	private long ordem;
	private String tipo;
	private Metodo metodo;
	private String valor;
	
	public Acao(Metodo m, String valor) {
		
		metodo = new Metodo();
		metodo.setNome(m.getNome());
		metodo.setParametros(m.getParametros());
		metodo.setRetorno(m.getRetorno());
		this.valor = valor;
	}	

	public long getOrdem() {
		return ordem;
	}

	public void setOrdem(long ordem) {
		this.ordem = ordem;
	}

	public int compareTo(Acao acao2) {
		
		if (this.getOrdem() < acao2.getOrdem())
			return -1;
		else if (this.getOrdem() > acao2.getOrdem())
			return 1;
		else
			return 0;			
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public Metodo getMetodo() {
		return metodo;
	}

	public void setMetodo(Metodo metodo) {
		this.metodo = metodo;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}
}

