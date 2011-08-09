package com.puzzledu.gerenciador;

import com.puzzledu.basica.Metodo;

public class AcaoFor extends Acao {

	private int qtdRepeticoes;
	
	public AcaoFor(Metodo m, int qtdRepeticoes, String valor) {
		
		super(m, valor);
		setTipo("for");
		this.qtdRepeticoes = qtdRepeticoes;		
	}

	public int getQtdRepeticoes() {
		return qtdRepeticoes;
	}

	public void setQtdRepeticoes(int qtdRepeticoes) {
		this.qtdRepeticoes = qtdRepeticoes;
	}
}
