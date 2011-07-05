package com.puzzledu.client;

public abstract class Acao implements Comparable<Acao>{
	
	private long ordem;
	private String tipo;
	private Metodo metodo;
	
	public Acao(Metodo m) {
	
		metodo = new Metodo();
		metodo.setNome(m.getNome());
		metodo.setParametros(m.getParametros());
		metodo.setRetorno(m.getRetorno());

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
}

class AcaoFor extends Acao {

	private long qtdRepeticoes;
	
	public AcaoFor(long qtdRepeticoes, Metodo m) {
		
		super(m);
		setTipo("for");
		this.qtdRepeticoes = qtdRepeticoes;		
	}

	public long getQtdRepeticoes() {
		return qtdRepeticoes;
	}

	public void setQtdRepeticoes(long qtdRepeticoes) {
		this.qtdRepeticoes = qtdRepeticoes;
	}
}

class AcaoIO extends Acao {

	private String valor;
	
	public AcaoIO(String valor, Metodo m) {
		
		super(m);
		setTipo("io");
		setValor(valor);
	
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}
}