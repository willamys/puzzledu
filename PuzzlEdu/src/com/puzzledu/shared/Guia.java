package com.puzzledu.shared;

public class Guia {

	public String getGuia(String tipo) {
		
		if (tipo.equals("Classe"))
			return "Defini��o das Classes. Com o bot�o direito � poss�vel ativar a��es relacionadas a cria��o e altera��o desta classe";
		else if (tipo.equals("Interface"))
			return "Lista de Interfaces implementadas pela classe selecionada";
		else if (tipo.equals("M�todos"))
			return "Lista de M�todos implementados pela classe selecionada";
		else if (tipo.equals("Area"))
			return "�rea dispon�vel para cria��o das instancias";
		else if (tipo.equals("Console"))
			return "�rea dispon�vel para visualiza��o, em tempo real, da execu��o dos algoritmos";
		else if (tipo.equals("Script"))
			return "Lista de Comandos a serem executados. Cada inst�ncia possui seu Script de Execu��o";
		else
			return "";
	}
}
