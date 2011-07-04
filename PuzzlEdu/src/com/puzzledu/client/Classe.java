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
		
		filhas = new ArrayList<Classe>();
		interfaces = new ArrayList<Interface>();
		metodos = new ArrayList<Metodo>();
		variaveis = new ArrayList<Variavel>();
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
	
	public void addInterface(Interface i) throws IntefaceJaImplementadaException {
		
		for (Interface i2 : interfaces)
			if (i2.getNome().equals(i.getNome()))
				throw new IntefaceJaImplementadaException("Esta interface j&aacute; foi implementada na Classe: " + getNome());
		
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
	
	public void removerMetodo(String nome) {
		
		Metodo removido = null;
		
		for (Metodo m : metodos) {
			
			if (m.getNome().equals(nome)) {
				
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
	
	public void addVariavelRecursivamente(Classe classe, Variavel v) {
		
		if (classe.getVariaveis()== null)
			classe.setVariaveis(new ArrayList<Variavel>());
		
		for (Classe c : classe.getFilhas()) {

			Variavel v1 = new Variavel(v.getNome(), v.getTipo(), v.getValorPadrao());
			c.getVariaveis().add(v1);
			
			addVariavelRecursivamente(c, v);
		}				
	}
	
	public void addVariavelMetodosRecursivamente(Classe classe, Variavel var) {
		
		if (classe.getVariaveis()== null)
			classe.setVariaveis(new ArrayList<Variavel>());
		
		for (Classe c : classe.getFilhas()) {

			Variavel v1 = new Variavel(var.getNome(), var.getTipo(), var.getValorPadrao());
			c.getVariaveis().add(v1);			

			Metodo set = new Metodo("set" + var.getNome().toUpperCase().charAt(0) + var.getNome().substring(1, var.getNome().length()));
			set.adicionarParametro(new Parametro(var.getNome(), var.getTipo()));
			set.setRetorno("void");
			
			Metodo get = new Metodo("get" + var.getNome().toUpperCase().charAt(0) + var.getNome().substring(1, var.getNome().length()));
			get.setRetorno(var.getTipo());					
			
			addVariavelRecursivamente(c, var);
		}				
	}	
	
	public void removerInterfaceFilhas(Classe classe, Interface i) {
		
		for (Classe c : classe.getFilhas()) {
			
			c.removerInterface(i.getNome());
			
			for (Variavel v : i.getVariaveis())
				c.removerVariavel(v.getNome());
			
			removerInterfaceFilhas(c, i);
		}
	}
	
	public void removerVariavel(String nomeVariavel) {
		
		Variavel removida = null;
		
		for (Variavel var : variaveis) {
			
			if (var.getNome().equals(nomeVariavel)) {
				
				removida = var;
				break;
			}
				
		}
		
		if (removida != null) {
		
			variaveis.remove(removida);
			
			Metodo metodoSet = procurarMetodo("set" + nomeVariavel);
			
			if (metodoSet != null)
				metodos.remove(metodoSet);

			Metodo metodoGet = procurarMetodo("get" + nomeVariavel);
			
			if (metodoGet != null)
				metodos.remove(metodoGet);
			
		}
	}
	
	public void removerVariavelFilhas(Classe classe, String nomeVariavel) {
		
		for (Classe c : classe.getFilhas()) {
			
			c.removerVariavel(nomeVariavel);
		}
	}
	
	public Metodo procurarMetodo(String nomeMetodo) {
		
		for (Metodo m : metodos) {
			
			if (m.getNome().equalsIgnoreCase(nomeMetodo))			
				return m;
		}
		
		return null;
	}
	
	public Variavel procurarVariavel(String nomeVariavel) {
		
		for (Variavel v : variaveis) {
			
			if (v.getNome().equals(nomeVariavel))			
				return v;
		}		
		
		return null;
	}	
	
	public Variavel procurarVariavel(Classe c, String nomeVariavel) {
		
		if (c == null)
			return null;

		for (Variavel v : c.getVariaveis()) {
			
			if (v.getNome().equals(nomeVariavel))			
				return v;
		}		
		
		return procurarVariavel(c.getParent(), nomeVariavel);
	}	
	
	public boolean procurarInterface(Classe c, String nome) {
		
		if (c == null)			
			return false;
		
		for (Interface i : c.getInterfaces()) {
			
			if (i.getNome().equals(nome))
				return true;
		}
		
		return procurarInterface(c.getParent(), nome);
	}

	public Classe getParent() {
		return parent;
	}

	public void setParent(Classe parent) {
		this.parent = parent;
	}
}

