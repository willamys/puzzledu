package com.puzzledu.dao;

import java.util.ArrayList;
import java.util.List;

import com.puzzledu.gerenciador.Projeto;

/**
 * Classe para manipular os projetos, a persistencia ainda em memoria.....
 */
public class ColecaoProjeto {
	private List<Projeto> projetos;

	public ColecaoProjeto() {
		projetos = new ArrayList<Projeto>();
	}
	
	public void addProjeto(Projeto p){
		projetos.add(p);
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
