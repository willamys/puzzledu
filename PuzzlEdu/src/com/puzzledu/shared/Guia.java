package com.puzzledu.shared;

public class Guia {

	public String getGuia(String tipo) {
		
		if (tipo.equals("Classe"))
			return "Definição das Classes. Com o botão direito é possível ativar ações relacionadas a criação e alteração desta classe";
		else if (tipo.equals("Interface"))
			return "Lista de Interfaces implementadas pela classe selecionada";
		else if (tipo.equals("Métodos"))
			return "Lista de Métodos implementados pela classe selecionada";
		else if (tipo.equals("Area"))
			return "Área disponível para criação das instancias";
		else if (tipo.equals("Console"))
			return "Área disponível para visualização, em tempo real, da execução dos algoritmos";
		else if (tipo.equals("Script"))
			return "Lista de Comandos a serem executados. Cada instância possui seu Script de Execução";
		else
			return "";
	}
}
