package com.puzzledu.client;

public class RepositorioDados {

	private ColecaoClasse colecaoClasse;
	private ColecaoInterface colecaoInterface;

	public RepositorioDados() {
		
		colecaoInterface = new ColecaoInterface();
		colecaoClasse = new ColecaoClasse();	
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
