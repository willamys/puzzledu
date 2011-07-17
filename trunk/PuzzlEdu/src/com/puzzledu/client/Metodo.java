package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

public class Metodo {

	private String nome;
	private String retorno;
	private List<Parametro> parametros;
	private String acesso;
	private boolean isAbstract;
	private boolean isFinal;
	private boolean sync;
	
	public Metodo() {
		
		parametros = new ArrayList<Parametro>();
	}

	public Metodo(String assinatura) {

		this();
		
		setNome(assinatura);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRetorno() {
		return retorno;
	}

	public void setRetorno(String retorno) {
		this.retorno = retorno;
	}

	public List<Parametro> getParametros() {
		return parametros;
	}
	
	public Parametro getPrimeiroParametro() {
	
		if (parametros == null)
			return null;
		
		if (parametros.size() > 0)
			return parametros.get(0);
		else
			return null;
	}
	
	public String getParametrosString() {
		
		String params = "";
		
		if (parametros == null)
			return params;
		
		for(Parametro p : parametros) {
			
			if (!params.equals(""))
				params += ", ";
			
			params += p.getNome() + " : " + p.getTipo(); 
		}
		
		return params;
	}

	public void setParametros(List<Parametro> parametros) {
		this.parametros = parametros;
	}
	
	public void adicionarParametro(Parametro param) {
		
		this.parametros.add(param);
	}
	
	public void removerParametro(Parametro param) {
		
		this.parametros.remove(param);
	}

	/**
	 * @return the acesso
	 */
	public String getAcesso() {
		return acesso;
	}

	/**
	 * @param acesso the acesso to set
	 */
	public void setAcesso(String acesso) {
		this.acesso = acesso;
	}

	/**
	 * @return the isAbstract
	 */
	public boolean isAbstract() {
		return isAbstract;
	}

	/**
	 * @param isAbstract the isAbstract to set
	 */
	public void setAbstract(boolean isAbstract) {
		this.isAbstract = isAbstract;
	}
 
	/**
	 * @return the isFinal
	 */
	public boolean isFinal() {
		return isFinal;
	}

	/**
	 * @param isFinal the isFinal to set
	 */
	public void setFinal(boolean isFinal) {
		this.isFinal = isFinal;
	}

	/**
	 * @return the sync
	 */
	public boolean isSync() {
		return sync;
	}

	/**
	 * @param sync the sync to set
	 */
	public void setSync(boolean sync) {
		this.sync = sync;
	}
	
	

}
