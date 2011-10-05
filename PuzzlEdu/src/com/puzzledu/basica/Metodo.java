package com.puzzledu.basica;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.gwt.user.client.rpc.IsSerializable;

@PersistenceCapable(identityType = IdentityType.APPLICATION)
public class Metodo implements IsSerializable {

	@PrimaryKey @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long id;
	
	@Persistent		
	private String nome;
	
	@Persistent
	private String retorno;
	
	@Persistent
	private List<Parametro> parametros;
	
	@Persistent
	private String acesso;
	
	@Persistent
	private boolean isAbstract;
	
	@Persistent
	private boolean isFinal;
	
	@Persistent
	private boolean sync;
	
	public Metodo() {
		
		parametros = new ArrayList<Parametro>();
	}

	public Metodo(Long id, String nome, String retorno,
			List<Parametro> parametros, String acesso, boolean isAbstract,
			boolean isFinal, boolean sync) {
		super();
		this.id = id;
		this.nome = nome;
		this.retorno = retorno;
		this.parametros = parametros;
		this.acesso = acesso;
		this.isAbstract = isAbstract;
		this.isFinal = isFinal;
		this.sync = sync;
	}

	public Metodo(String nome) {

		this();
		
		setNome(nome);
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
			
			params += p.getTipo() + " : " + p.getNome(); 
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
	
	public Parametro procurarParametro(String name){
		Parametro result = null;
		if (name != null){
			for(Parametro p : parametros) {
				if (p.getNome().equals(name)){
					result = p;
					break;
				}
			}
		}
		return result;
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
