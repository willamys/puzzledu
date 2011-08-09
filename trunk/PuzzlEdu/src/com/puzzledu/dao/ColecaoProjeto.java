package com.puzzledu.dao;

import java.util.ArrayList;
import java.util.List;

import com.puzzledu.basica.Classe;
import com.puzzledu.basica.Metodo;
import com.puzzledu.basica.Parametro;
import com.puzzledu.basica.Variavel;
import com.puzzledu.gerenciador.Projeto;

/**
 * Classe para manipular os projetos, a persistencia ainda em memoria.....
 */
public class ColecaoProjeto {
	private List<Projeto> projetos;

	public ColecaoProjeto() {
		projetos = new ArrayList<Projeto>();
		addProjetoExemplo();
	}
	
	public void addProjeto(Projeto p){
		projetos.add(p);
	}
	
	public void addProjetoExemplo() {
		Projeto projeto = new Projeto(1L, "Projeto Exemplo");

		Classe hello = new Classe();
		hello.setNome("Hello");
		hello.setAbstrata(false);
		hello.addVariavel(new Variavel("imagem", "Image", "/galery/alomundo.png"));	
		Metodo showMessage = new Metodo("showMessage");
		showMessage.setRetorno("void");
		showMessage.adicionarParametro(new Parametro("message", "String"));
		hello.addMetodo(showMessage);
		projeto.getRepositorioDados().getColecaoClasse().addClasseFilha(hello, "Object");
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
