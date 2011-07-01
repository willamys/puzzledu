package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

public class Classe {

	private long id;
	private String nome;
	private List<Classe> filhas;
	private List<Interface> interfaces;
	private List<Metodo> metodos;
	private List<Variavel> variaveis;
	private boolean abstrata;
	private Classe parent;
	
	public Classe() {
		
	}

	public Classe(String filha) {

		setNome(filha);
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

	public List<Classe> getFilhas() {
		return filhas;
	}

	public void setFilhas(List<Classe> filhas) {
		this.filhas = filhas;
	}

	public List<Interface> getInterfaces() {
		return interfaces;
	}

	public void setInterfaces(List<Interface> interfaces) {
		this.interfaces = interfaces;
	}
	
	public void addClasseFilha(Classe filha) {
		
		if (filhas == null)
			filhas = new ArrayList<Classe>();
		
		filhas.add(filha);
	}
	
	public void addInterface(Interface i) {
		
		interfaces.add(i);
	}
	
	public void addMetodo(Metodo m) {
		
		if (metodos == null)
			metodos = new ArrayList<Metodo>();
		
		metodos.add(m);
	}
	
	public List<Metodo> getMetodos() {
		return metodos;
	}

	public void setMetodos(List<Metodo> metodos) {
		this.metodos = metodos;
	}

	public boolean isAbstrata() {
		return abstrata;
	}

	public void setAbstrata(boolean abstrata) {
		this.abstrata = abstrata;
	}

	public void removerFilhas() {
		
		if (getFilhas() != null)
			getFilhas().clear();
	}
	
	public void removerInterface(String nome) {
		
		Interface removida = null;
		
		for (Interface i : interfaces) {
			
			if (i.getNome().equals(nome)) {
				
				removida = i;
				break;
			}
				
		}
		
		if (removida != null)
			interfaces.remove(removida);
	}	
	
	public void removerMetodo(String assinatura) {
		
		Metodo removido = null;
		
		for (Metodo m : metodos) {
			
			if (m.getNome().equals(assinatura)) {
				
				removido = m;
				break;
			}
				
		}
		
		if (removido != null)
			metodos.remove(removido);
	}

	public List<Variavel> getVariaveis() {
		return variaveis;
	}
	
	public boolean coletarVariaveis(List<Variavel> variaveis, Classe raiz, String nomeClasse) {
				
		System.out.println("Classe: " + raiz.getNome());
		if (raiz.getNome().equals(nomeClasse)) {
			
			System.out.println("Classe encontrada, adicionados suas var: " + raiz.getVariaveis().toString());
			variaveis.addAll(raiz.getVariaveis());		
			
			return true;
		}
		
		boolean entrou = false;
		
		if (raiz.getFilhas() != null) {
			System.out.println("Procurando filhas");
			for (Classe c : raiz.getFilhas()) {
				System.out.println("\t" + c.getNome());
				if (coletarVariaveis(variaveis, c, nomeClasse)) {
					System.out.println("\t\tAdicionando Variaveis de " + c.getNome());
					variaveis.addAll(c.getVariaveis());
					
					entrou = true;
				}
			}
		}
		
		return entrou;
	}

	public void setVariaveis(List<Variavel> variaveis) {
		this.variaveis = variaveis;
	}
	
	public void addVariavel(Variavel v) {
		
		if (variaveis == null)
			variaveis = new ArrayList<Variavel>();
		
		variaveis.add(v);
	}
	
	public void removerVariavel(Variavel v) {
		
		Variavel removida = null;
		
		for (Variavel var : variaveis) {
			
			if (var.getNome().equals(v.getNome())) {
				
				removida = var;
				break;
			}
				
		}
		
		if (removida != null)
			metodos.remove(removida);
	}

	public Classe getParent() {
		return parent;
	}

	public void setParent(Classe parent) {
		this.parent = parent;
	}
}

