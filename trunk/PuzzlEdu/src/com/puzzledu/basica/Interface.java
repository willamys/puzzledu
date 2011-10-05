package com.puzzledu.basica;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gwt.user.client.rpc.IsSerializable;

@PersistenceCapable(detachable="false")
public class Interface implements IsSerializable {

	@PrimaryKey @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	
	@Persistent		
	private String nome;
	
	@Persistent	
	private List<Metodo> metodos;
	
	@Persistent	
	private List<Variavel> variaveis;
	
	public Interface() {
		
		metodos = new ArrayList<Metodo>();
		variaveis = new ArrayList<Variavel>();
	}

	public Interface(String nome) {
	
		this();
		
		this.nome = nome;
	}

	public Interface(Long id, String nome, List<Metodo> metodos,
			List<Variavel> variaveis) {
		super();
		this.id = id;
		this.nome = nome;
		this.metodos = metodos;
		this.variaveis = variaveis;
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

	public List<Metodo> getMetodos() {
		return metodos;
	}

	public void setMetodos(List<Metodo> metodos) {
		this.metodos = metodos;
	}
	
	public void adicionarMetodo(Metodo m) {
		
		metodos.add(m);
	}
	
	public void removerMetodo(Metodo m) {
		
		metodos.remove(m);
	}
	
	public void adicionarVariavel(Variavel v) {
		
		variaveis.add(v);
	}

	public List<Variavel> getVariaveis() {
		return variaveis;
	}

	public void setVariaveis(List<Variavel> variaveis) {
		this.variaveis = variaveis;
	}
}
