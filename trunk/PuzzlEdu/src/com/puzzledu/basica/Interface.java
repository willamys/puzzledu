package com.puzzledu.basica;

import java.util.ArrayList;
import java.util.List;


public class Interface {

	private long id;
	private String nome;
	private List<Metodo> metodos;
	private List<Variavel> variaveis;
	
	public Interface() {
		
		metodos = new ArrayList<Metodo>();
		variaveis = new ArrayList<Variavel>();
	}

	public Interface(String nome) {
	
		this();
		
		this.nome = nome;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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
