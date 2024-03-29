package com.puzzledu.basica;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.user.client.rpc.IsSerializable;

public class Classe implements IsSerializable {

	private Long id;
	private String nome;
	private List<Classe> filhas;
	private List<Interface> interfaces;
	private List<Metodo> metodos;
	private List<Variavel> variaveis;
	private boolean abstrata;
	private Classe parent;
	private String comentario;
	
	public Classe() {
		
		filhas = new ArrayList<Classe>();
		interfaces = new ArrayList<Interface>();
		metodos = new ArrayList<Metodo>();
		variaveis = new ArrayList<Variavel>();
	}
	
	public Classe(Long id, String nome, List<Classe> filhas,
			List<Interface> interfaces, List<Metodo> metodos,
			List<Variavel> variaveis, boolean abstrata, Classe parent,
			String comentario) {
		super();
		this.id = id;
		this.nome = nome;
		this.filhas = filhas;
		this.interfaces = interfaces;
		this.metodos = metodos;
		this.variaveis = variaveis;
		this.abstrata = abstrata;
		this.parent = parent;
		this.comentario = comentario;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public Classe(String filha) {

		setNome(filha);
	}

	public Long getId() {
		return id;
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
	
	public boolean contemVariavel(String nomeVariavel) {
		
		for (Variavel v : variaveis) {
			
			if (v.getNome().equals(nomeVariavel))
				return true;
		}
		
		return false;
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
	
	public String implementaInterface(Classe classe, Interface iface) {
		
		if (classe == null)
			return "";
		
		for (Interface i : classe.getInterfaces()) {
			
			if (i.getNome().equals(iface.getNome()))
				return classe.getNome();
		}
		
		return implementaInterface(classe.getParent(), iface);
	}
	
	public void addMetodo(Metodo m) {
		
		if (metodos == null)
			metodos = new ArrayList<Metodo>();
		
		metodos.add(m);
	}
	
	public List<Metodo> getMetodos() {
		return metodos;
	}
	
	public List<Metodo> getAllMetodos(Classe classe) {
		
		List<Metodo> metodos = new ArrayList<Metodo>();
		
		while (classe != null) {
			
			for (Metodo m : classe.getMetodos()) {
				
				if (!metodos.contains(m))
					metodos.add(m);
			}
			
			for (Interface i : classe.getInterfaces()) {
				
				for (Metodo m : i.getMetodos())
					if (!metodos.contains(m))
						metodos.add(m);
			}
			
			classe = classe.getParent();
		}	
		
		return metodos;
	}
	
	public List<Variavel> getAlVariaveis(Classe classe) {
		
		List<Variavel> variaveis = new ArrayList<Variavel>();
		
		while (classe != null) {
			
			for (Variavel v : classe.getVariaveis()) {
				
				if (!variaveis.contains(v))
					variaveis.add(v);
			}
			
			for (Interface i : classe.getInterfaces()) {
				
				for (Variavel v : i.getVariaveis())
					if (!variaveis.contains(v))
						variaveis.add(v);
			}
			
			classe = classe.getParent();
		}	
		
		return variaveis;
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
		
		for (Metodo m : getMetodos()) {
			
			if (m.getNome().equals(nomeMetodo))
				return m;
		}
		
		return null;
	}
	
	public Metodo procurarMetodoRecursivamente(Classe classe, String nomeMetodo) {
	
		while (classe != null) {
				
			for (Metodo m : classe.getMetodos()) {
				
				if (m.getNome().equalsIgnoreCase(nomeMetodo))
					return m;				
			}	
			
			for (Interface i : classe.getInterfaces()) {
				
				for (Metodo m : i.getMetodos()) {
					
					if (m.getNome().equals(nomeMetodo)) {
						
						return m;
					}
				}
			}

			return procurarMetodoRecursivamente(classe.getParent(), nomeMetodo);
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
	
	public void atribuirValorVariaveisRecursivamente(Classe c, String nomeVariavel, String valor) {
		
		for (Variavel v : c.getVariaveis()) {
			
			if (v.getNome().equals(nomeVariavel))
				if (v.getValorPadrao() == null)
					v.setValorPadrao(valor);
		}
		
		for (Classe c1 : c.getFilhas()) {
		
			atribuirValorVariaveisRecursivamente(c1, nomeVariavel, valor);
		}		
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

	public boolean pertenceArvore(Classe classe, String classeProcurada) {
		
		if (classe == null)
			return false;
		
		if (classe.getNome().equals(classeProcurada))
			return true;
		
		return pertenceArvore(classe.getParent(), classeProcurada);		
	}
	
	public String construirCodigoFonte() {
		
		//Script Highlight
		String cabecalho = "/*\n * PuzzlEdu \n *\n * Classe: " + this.getNome() + "\n *\n */\n\n";
			
		//Declaração da Classe
		String codigoFonte = " public ";
		
		if (this.isAbstrata())
			codigoFonte += "abstract ";
		
		codigoFonte += "class " + this.getNome();

		if (this.getParent() != null){
			if (!this.getParent().getNome().equals("Object"))
				codigoFonte += " extends " + getParent().getNome();
		}
		
		if (this.getInterfaces().size() > 0) {
			
			codigoFonte += " implements ";
				
			for (int i=0; i<this.getInterfaces().size(); i++) {
					
				codigoFonte += this.getInterfaces().get(i).getNome();
					
				if (i < (this.getInterfaces().size() - 1))
					codigoFonte += ", ";
			}
					
		}
		
			
		//Fim, declaração da classe
		codigoFonte += " {\n";
		
		if (this.getVariaveis().size() > 0)
			codigoFonte += "\n";
		
		//Declaracação das variáveis
		for (Variavel v : this.getVariaveis()) {
			
			codigoFonte += "\t";
			
			if (v.getAcesso() != null)
				codigoFonte += v.getAcesso() + " ";
			
			if (v.getTipo() != null);
				codigoFonte += v.getTipo() + " ";
				
			if (v.getNome() != null)
				codigoFonte += v.getNome();
			
			if (v.getValorPadrao() != null)
			if (!v.getValorPadrao().equals("")) {
			
				if (v.getTipo().equals("int") || v.getTipo().equals("float"))
					codigoFonte += " = " + v.getValorPadrao();
				else if (v.getTipo().equals("String"))
					codigoFonte += " = \"" + v.getValorPadrao() + "\"";
				else 
					codigoFonte += " = new " + v.getTipo() + "(\"" + v.getValorPadrao() + "\")";				
			}
			
			codigoFonte += ";\n";	
		}

		codigoFonte += "\n";	
		
		//Declaração dos métodos
		for (Metodo m : this.getAllMetodos(this)) {

			//assinatura
			codigoFonte += "\t";
			
			if (m.getAcesso() != null)
				codigoFonte += m.getAcesso() + " ";
			
			if (m.getRetorno() != null)
				codigoFonte += m.getRetorno() + " ";

			if (m.getNome() != null)
				codigoFonte += m.getNome();
			
			//parâmetros
			codigoFonte += "(" + m.getParametrosString() + ")";
			
			codigoFonte += " {\n";

			codigoFonte += "\t\n";
				
			codigoFonte += "\t}\n\n";		
		}				
		
		//Fim, corpo da classe
		String rodape = " }";
			
		return cabecalho + codigoFonte + rodape;			
	
	}

	/**
	 * @return the comentario
	 */
	public String getComentario() {
		return comentario;
	}

	/**
	 * @param comentario the comentario to set
	 */
	public void setComentario(String comentario) {
		this.comentario = comentario;
	}
	
}