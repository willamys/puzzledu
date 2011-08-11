package com.puzzledu.basica;

import java.util.ArrayList;
import java.util.List;

import com.puzzledu.gerenciador.Acao;
import com.smartgwt.client.widgets.Img;

public class Instancia {

	private String nome;
	private Classe classe;
	private Img image;
	private List<Acao> acoes;
	private long contador;
	private List<Variavel> variaveis;
	
	public Instancia() {
		
	}
	
	public Instancia(Classe classe, Img img, String nome) {
		
		this.image = img;
		this.classe = classe;
		this.nome = nome;
		acoes = new ArrayList<Acao>();
		variaveis = new ArrayList<Variavel>();
		contador = 0;
		
		for (Variavel v : classe.getAlVariaveis(classe)) {
			
			Variavel v1 = new Variavel();
			v1.setAcesso(v.getAcesso());
			v1.setNome(v.getNome());
			v1.setTipo(v.getTipo());
			v1.setValorPadrao(v.getValorPadrao());
			
			variaveis.add(v1);
		}
	}
	
	public Variavel procurarVariavel(String nomeVariavel) {
		
		for (Variavel v : variaveis) {
			
			if (v.getNome().equals(nomeVariavel))
				return v;
		}
		
		return null;
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

	public List<Variavel> getVariaveis() {
		return variaveis;
	}

	public void setVariaveis(List<Variavel> variaveis) {
		this.variaveis = variaveis;
	}
}
