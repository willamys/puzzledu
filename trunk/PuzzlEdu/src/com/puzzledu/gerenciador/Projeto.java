 package com.puzzledu.gerenciador;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gwt.user.client.rpc.IsSerializable;
import com.puzzledu.dao.RepositorioDados;

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class Projeto implements IsSerializable {

	@PrimaryKey @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	
	@Persistent 
	private String nome;
    
	@Persistent 
	private RepositorioDados repositorioDados;

	public Projeto() {
		
		repositorioDados = new RepositorioDados();
	}
	
	public Projeto(Long id, String nome) {
		
		this();
		this.id = id;
		this.nome = nome;		
	}
	
	public Projeto(String nome) {
		
		this.nome = nome;
	}

	public Projeto(Long id, String nome, RepositorioDados repositorioDados) {
		super();
		this.id = id;
		this.nome = nome;
		this.repositorioDados = repositorioDados;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public RepositorioDados getRepositorioDados() {
		return repositorioDados;
	}

	public void setRepositorioDados(RepositorioDados repositorioDados) {
		this.repositorioDados = repositorioDados;
	}
}
