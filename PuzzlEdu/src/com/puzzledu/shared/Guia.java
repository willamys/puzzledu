package com.puzzledu.shared;

public class Guia {

	public String getGuia(String tipo) {
		
		if (tipo.equals("Classe"))
			return "<h3>Defini&ccedil;&atilde;o das Classes. Com o bot&atilde;o direito &eacute; poss&iacute;vel ativar a&ccedil;&otilde;es relacionadas a cria&ccedil;&atilde;o e altera&ccedil;&atilde;o desta classe</h3>";
		else if (tipo.equals("Interface"))
			return "<h3>Lista de Interfaces implementadas pela classe selecionada</h3>";
		else if (tipo.equals("Métodos"))
			return "<h3>Lista de Métodos implementados pela classe selecionada</h3>";
		else if (tipo.equals("Area"))
			return "<h3>Área disponível para cria&ccedil;&atilde;o das instancias</h3>";
		else if (tipo.equals("Instancia"))
			return "<h3>Instancia criada</h3>";
		else if (tipo.equals("Console"))
			return "<h3>Área dispon&iacute;vel para visualiza&ccedil;&atilde;o, em tempo real, da execu&ccedil;&atilde;o dos algoritmos</h3>";
		else if (tipo.equals("Script"))
			return "<h3>Lista de Comandos a serem executados. Cada instância possui seu Script de Execu&ccedil;&atilde;o</h3>";
		else
			return "";
	}
}
