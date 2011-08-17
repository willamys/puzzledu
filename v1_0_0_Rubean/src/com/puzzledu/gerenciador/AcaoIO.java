package com.puzzledu.gerenciador;

import com.puzzledu.basica.Metodo;

public class AcaoIO extends Acao {

	public AcaoIO(String valor, Metodo m) {
		
		super(m, valor);
		setTipo("io");
	}
}
