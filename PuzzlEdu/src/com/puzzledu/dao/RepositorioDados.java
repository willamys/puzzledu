package com.puzzledu.dao;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gwt.user.client.rpc.IsSerializable;

@PersistenceCapable(detachable="false")
public class RepositorioDados implements IsSerializable {
	
	@PrimaryKey @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)	
	private Long id;	
	
	@Persistent 
	private ColecaoClasse colecaoClasse;
	
	private ColecaoInterface colecaoInterface;

	/* Reposit�rio respons�vel por persistir os dados do projeto, e n�o os projetos. 
	 * A persist�ncia dos projetos v�o ser feitas diretamente pelo GAE, atrav�s
	 * da classe Gerenciador */
	
	public RepositorioDados() {
		
		colecaoInterface = new ColecaoInterface();
		colecaoClasse   = new ColecaoClasse();
	}

	public RepositorioDados(ColecaoClasse colecaoClasse,
			ColecaoInterface colecaoInterface) {
		super();
		this.colecaoClasse = colecaoClasse;
		this.colecaoInterface = colecaoInterface;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public RepositorioDados(Long id, ColecaoClasse colecaoClasse,
			ColecaoInterface colecaoInterface) {
		super();
		this.id = id;
		this.colecaoClasse = colecaoClasse;
		this.colecaoInterface = colecaoInterface;
	}
}
