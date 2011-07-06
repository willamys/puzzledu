package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

/**
 * Classe para manipular os projetos, a persistencia ainda em memoria.....
 */
public class ColecaoProjeto {
	private List<Projeto> projetos;

	public ColecaoProjeto() {
		projetos = new ArrayList<Projeto>();
		addProjetoExemplo();
	}

	public void addProjetoExemplo() {
		Projeto projeto = new Projeto();
		projeto.setId(1L);
		projeto.setNome("Projeto Exemplo");
		Classe hello = new Classe();
		hello.setNome("Hello");
		hello.setAbstrata(false);
		
		Variavel varNome = new Variavel("nome");
		hello.addVariavel(varNome);
		
		Metodo showMessage = new Metodo("showMessage");
		showMessage.setRetorno("void");
		showMessage.adicionarParametro(new Parametro("message", "String"));
		hello.addMetodo(showMessage);
		projeto.getColecaoClasse().addClasseFilha(hello, "Object");
		projetos.add(projeto);
	}

	public Projeto buscarPorNome(String nome) {
		Projeto projeto = null;
		if (nome != null) {
			for (Projeto p : projetos) {
				if (p.getNome().equals(nome)) {
					projeto = p;
					break;
				}
			}
		}
		return projeto;
	}

}
