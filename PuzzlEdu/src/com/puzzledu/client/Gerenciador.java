package com.puzzledu.client;

import java.util.List;

public class Gerenciador {

	private Projeto projetoAtual;
	
	public Gerenciador() {
		
		novoProjetoExemplo();
		
		//novoProjeto("New Project");
	}
	
	public void novoProjeto(String nomeProjeto){
		
	 	setProjetoAtual(new Projeto(1L, nomeProjeto));
	}	
	
	public void salvarProjeto(){

		//Usar API do GAE para salvar projeto na nuvem
	}
	
	public void novoProjetoExemplo() {
		
		projetoAtual = new Projeto(1L, "Projeto Exemplo");

		Classe hello = new Classe();
		hello.setNome("Hello");
		hello.setAbstrata(false);
		hello.addVariavel(new Variavel("imagem", "Image", "/galery/alomundo.png"));	
		Metodo showMessage = new Metodo("showMessage");
		showMessage.setRetorno("void");
		showMessage.adicionarParametro(new Parametro("message", "String"));
		hello.addMetodo(showMessage);
		projetoAtual.getRepositorioDados().getColecaoClasse().addClasseFilha(hello, "Object");
	}	
	
	public List<Projeto> listarProjetos() {
		
		//Usar API do GAE para retornar os projetos do usuário logado
		
		return null;
	}
	
	public List<Projeto> buscarProjetoNome(String nomeProjeto) {
		
		return null;
	}

	/**
	 * @return the projetoAtual
	 */
	public Projeto getProjetoAtual() {
		return projetoAtual;
	}

	/**
	 * @param projetoAtual the projetoAtual to set
	 */
	public void setProjetoAtual(Projeto projetoAtual) {
		this.projetoAtual = projetoAtual;
	}	
}
