package com.puzzledu.client;

public class Projeto {
	
	private Long id;
	private String nome;
	private ColecaoClasse colecaoClasse;
	private ColecaoInterface colecaoInterface;
	
	/**
	 * @param id
	 * @param nome
	 * @param colecaoClasse
	 * @param colecaoInterface
	 */
	public Projeto(Long id, String nome, ColecaoClasse colecaoClasse,
			ColecaoInterface colecaoInterface) {
		this.id = id;
		this.nome = nome;
		this.colecaoClasse = colecaoClasse;
		this.colecaoInterface = colecaoInterface;
	}
	
	/**
	 * @param id
	 * @param nome
	 */
	public Projeto(Long id, String nome) {
		this(id, nome, new ColecaoClasse(), new ColecaoInterface());
	}

	/**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the nome
	 */
	public String getNome() {
		return nome;
	}

	/**
	 * @param nome
	 *            the nome to set
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}

	/**
	 * @return the colecaoClasse
	 */
	public ColecaoClasse getColecaoClasse() {
		return colecaoClasse;
	}

	/**
	 * @param colecaoClasse
	 *            the colecaoClasse to set
	 */
	public void setColecaoClasse(ColecaoClasse colecaoClasse) {
		this.colecaoClasse = colecaoClasse;
	}

	/**
	 * @return the colecaoInterface
	 */
	public ColecaoInterface getColecaoInterface() {
		return colecaoInterface;
	}

	/**
	 * @param colecaoInterface
	 *            the colecaoInterface to set
	 */
	public void setColecaoInterface(ColecaoInterface colecaoInterface) {
		this.colecaoInterface = colecaoInterface;
	}

}
