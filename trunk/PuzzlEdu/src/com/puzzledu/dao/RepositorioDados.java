package com.puzzledu.dao;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gwt.user.client.rpc.IsSerializable;

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class RepositorioDados implements IsSerializable {
	
	@PrimaryKey @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)	
	private Long id;	
	
	@Persistent 
	private ColecaoClasse colecaoClasse;
	
	private ColecaoInterface colecaoInterface;
	
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
