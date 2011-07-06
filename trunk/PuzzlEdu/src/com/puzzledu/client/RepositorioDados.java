package com.puzzledu.client;

public class RepositorioDados {

	private ColecaoClasse colecaoClasse;
	private ColecaoInterface colecaoInterface;
	private ColecaoProjeto colecaoProjeto;

	public RepositorioDados() {
		
		colecaoInterface = new ColecaoInterface();
		colecaoClasse   = new ColecaoClasse();
		colecaoProjeto = new ColecaoProjeto();
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

	/**
	 * @return the colecaoProjeto
	 */
	public ColecaoProjeto getColecaoProjeto() {
		return colecaoProjeto;
	}

	/**
	 * @param colecaoProjeto the colecaoProjeto to set
	 */
	public void setColecaoProjeto(ColecaoProjeto colecaoProjeto) {
		this.colecaoProjeto = colecaoProjeto;
	}
}
