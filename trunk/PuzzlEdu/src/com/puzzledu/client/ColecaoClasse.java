package com.puzzledu.client;

import java.util.List;

public class ColecaoClasse {

	private Classe raiz;
	
	public ColecaoClasse() {
		
		cadastrarClassesPadrao();
	}

	private void cadastrarClassesPadrao() {
		
		raiz = new Classe();
		raiz.setNome("Object");	
		raiz.setAbstrata(true);
		
		Variavel varNome = new Variavel("nome");
		raiz.addVariavel(varNome);
		
		Metodo metodoGetNome = new Metodo("getNome()");
		metodoGetNome.setRetorno("String");
		raiz.addMetodo(metodoGetNome);
	}

	public void addClasseFilha(Classe filha, final String nomeRaiz) {
				
		Classe raizEncontrada =  procurarClasse(raiz, nomeRaiz);
		
		filha.setParent(raizEncontrada);

		raizEncontrada.addClasseFilha(filha);
	}
	
	public Classe procurarClasse(Classe raiz, String nomeClasse) {
		
		if (raiz == null)
			return null;
		
		if (raiz.getNome().equals(nomeClasse))
			return raiz;
	
		if (raiz.getFilhas() == null)
			return null;
		
		for (Classe c : raiz.getFilhas()) {

			if (c.getNome().equals(nomeClasse))	
				return c; 
				
			Classe classeEncontrada = procurarClasse(c, nomeClasse);
				
			if (classeEncontrada != null)
				return classeEncontrada;
		}
			
		return null;
	}
	
	public Classe procurarPai(Classe raiz, String nomeClasse) {
		
		if (raiz == null)
			return null;
		
		if (raiz.getNome().equals(nomeClasse))
			return raiz;
	
		if (raiz.getFilhas() == null)
			return null;
		
		for (Classe c : raiz.getFilhas()) {

			if (c.getNome().equals(nomeClasse))	
				return raiz; 
				
			Classe classeEncontrada = procurarPai(c, nomeClasse);
				
			if (classeEncontrada != null)
				return classeEncontrada;
		}
			
		return null;
	}	

	public void addInterface(Interface i) {
		raiz.addInterface(i);
	}

	public void addMetodo(Metodo m) {
		raiz.addMetodo(m);
	}

	public void removerClasse(String nome) {
		
		Classe classeEncontrada = procurarClasse(raiz, nome);
		
		Classe paiEncontrado = procurarPai(raiz, nome);
		
		if (paiEncontrado != null && classeEncontrada != null) {
			
			classeEncontrada.removerFilhas();
			
			paiEncontrado.getFilhas().remove(classeEncontrada);
		}
	}

	public void removerInterface(String nome) {
		raiz.removerInterface(nome);
	}

	public void removerMetodo(String assinatura) {
		raiz.removerMetodo(assinatura);
	}

	public List<Classe> getFilhas() {
		return raiz.getFilhas();
	}

	public List<Interface> getInterfaces() {
		return raiz.getInterfaces();
	}

	public List<Metodo> getMetodos() {
		return raiz.getMetodos();
	}	
	
	public Classe getRaiz() {
		
		return raiz;
	}

	public void show(Classe raiz, String space) {

		if (raiz == null)
			return;
		
		System.out.println(space + raiz.getNome() + " - Abstract: " + raiz.isAbstrata());
		
		if (raiz.getFilhas() != null) {
		
			for (Classe c : raiz.getFilhas()) {
						
				show(c, space + "\t");
			}
		}
	}

	public void alterarClasse(Classe classe) {
		
	}
}

