package com.puzzledu.dao;

import com.google.gwt.user.client.rpc.IsSerializable;

public class RepositorioDados implements IsSerializable {

	private ColecaoClasse colecaoClasse;
	private ColecaoInterface colecaoInterface;

	/* Reposit�rio respons�vel por persistir os dados do projeto, e n�o os projetos. 
	 * A persist�ncia dos projetos v�o ser feitas diretamente pelo GAE, atrav�s
	 * da classe Gerenciador */
	
	public RepositorioDados() {
		
		colecaoInterface = new ColecaoInterface();
		colecaoClasse   = new ColecaoClasse();
	}

	public ColecaoClasse getColecaoClasse() {
		return colecaoClasse;
	}

	public void setColecaoClasse(ColecaoClasse colecaoClasse) {
		this.colecaoClasse = colecaoClasse;
	}

	public ColecaoInterface getColecaoInterface() {
		return colecaoInterface;
	}

	public void setColecaoInterface(ColecaoInterface colecaoInterface) {
		this.colecaoInterface = colecaoInterface;
	}
}
