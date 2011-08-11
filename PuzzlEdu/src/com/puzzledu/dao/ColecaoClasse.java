package com.puzzledu.dao;

import java.util.List;
import com.google.gwt.user.client.rpc.IsSerializable;
import com.puzzledu.basica.Classe;
import com.puzzledu.basica.Interface;
import com.puzzledu.basica.Metodo;

public class ColecaoClasse implements IsSerializable {

	private Classe raiz;
	
	public ColecaoClasse() {
		
		cadastrarClassesPadrao();
	}

	private void cadastrarClassesPadrao() {
		
		raiz = new Classe();
		raiz.setNome("Object");	
		raiz.setAbstrata(true);
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
	
	public Classe procurarClassePai(Classe raiz, String nomeClasse) {
		
		if (raiz == null)
			return null;
		
		if (raiz.getNome().equals(nomeClasse))
			return raiz;
	
		if (raiz.getFilhas() == null)
			return null;
		
		for (Classe c : raiz.getFilhas()) {

			if (c.getNome().equals(nomeClasse))	
				return raiz; 
				
			Classe classeEncontrada = procurarClassePai(c, nomeClasse);
				
			if (classeEncontrada != null)
				return classeEncontrada;
		}
			
		return null;
	}	

	public void removerClasse(String nome) {
		
		Classe classeEncontrada = procurarClasse(raiz, nome);
		
		Classe paiEncontrado = procurarClassePai(raiz, nome);
		
		if (paiEncontrado != null && classeEncontrada != null) {
			
			classeEncontrada.removerFilhas();
			
			paiEncontrado.getFilhas().remove(classeEncontrada);
		}
	}

	public void removerInterfaceDaClasse(String nome) {
		raiz.removerInterface(nome);
	}

	public void removerMetodoDaClasse(String assinatura) {
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

