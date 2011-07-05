package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

import com.smartgwt.client.widgets.Img;

public class Instancia {

	private String nome;
	private Classe classe;
	private Img image;
	private List<Acao> acoes;
	private long contador;
	
	public Instancia(Classe classe, Img img, String nome) {
		
		this.image = img;
		this.classe = classe;
		this.nome = nome;
		acoes = new ArrayList<Acao>();
		contador = 0;
	}
	
	public Classe getClasse() {
		return classe;
	}
	
	public void setClasse(Classe classe) {
		this.classe = classe;
	}
	
	public Img getImage() {
		return image;
	}
	
	public void setImage(Img image) {
		this.image = image;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public void adicionarAcao(Acao acao) {
		
		contador++;
		acao.setOrdem(contador);
		acoes.add(acao);
	}

	public List<Acao> getAcoes() {
		return acoes;
	}

	public void setAcoes(List<Acao> acoes) {
		this.acoes = acoes;
	}

	public long getContador() {
		return contador;
	}

	public void setContador(long contador) {
		this.contador = contador;
	}
	
}
