package com.puzzledu.client;

import java.util.ArrayList;
import java.util.List;

public class ColecaoInterface {

	private List<Interface> listaInterfaces;
	
	public ColecaoInterface() {
		
		cadastrarInterfacesPadrao();
	}
	
	private void cadastrarInterfacesPadrao() {

		listaInterfaces = new ArrayList<Interface>();
		
		Interface interfaceAnimavel = new Interface("Anim&aacute;vel");
		
		Metodo avancar = new Metodo("avancar");
		avancar.setRetorno("void");
		avancar.adicionarParametro(new Parametro("valor", "int"));
		interfaceAnimavel.adicionarMetodo(avancar);		
		
		Metodo voltar = new Metodo("voltar");		
		voltar.setRetorno("void");
		voltar.adicionarParametro(new Parametro("valor", "int"));		
		interfaceAnimavel.adicionarMetodo(voltar);		
		
		Metodo girar = new Metodo("girar");
		girar.setRetorno("void");	
		girar.adicionarParametro(new Parametro("graus", "float"));
		interfaceAnimavel.adicionarMetodo(girar);
		
		Interface interfaceComestivel = new Interface("Comest&iacute;vel");
				
		Metodo comer = new Metodo("comer");
		comer.setRetorno("void");
		comer.adicionarParametro(new Parametro("quantidade", "int"));
		interfaceComestivel.adicionarMetodo(comer);
		
		Interface interfaceDesenhavel = new Interface("Desenh&aacute;vel");
		
		Variavel imagem = new Variavel("imagem");
		imagem.setTipo("Image");
		interfaceDesenhavel.adicionarVariavel(imagem);
		
		Metodo setImagem = new Metodo("setImagem");
		setImagem.adicionarParametro(new Parametro("imagem", "Image"));
		setImagem.setRetorno("void");
		interfaceDesenhavel.adicionarMetodo(setImagem);
		
		Metodo getImagem = new Metodo("getImagem");
		getImagem.setRetorno("Image");
		interfaceDesenhavel.adicionarMetodo(getImagem);
		
		listaInterfaces.add(interfaceAnimavel);
		listaInterfaces.add(interfaceComestivel);
		listaInterfaces.add(interfaceDesenhavel);
	}

	public void adicionarInterface(Interface i) {
		
		listaInterfaces.add(i);
	}
	
	public void removerInterface(Interface i) {
		
		listaInterfaces.remove(i);
	}
	
	public void removerInterface(String nome) {
		
		Interface i = procurarInterface(nome);
		
		if (i != null)
			removerInterface(i);
	}
	
	public Interface procurarInterface(String nome) {
		
		for (Interface i : listaInterfaces) {
			
			if (i.getNome().equals(nome)) {
				
				return i;
			}
		}
		
		return null;
	}
	
	public void alterarNomeInterface(String nomeAntigo, String nomeNovo) {
		
		Interface i = procurarInterface(nomeAntigo);
		
		if (i != null)
			i.setNome(nomeNovo);
	}

	public List<Interface> getListaInterfaces() {
		return listaInterfaces;
	}

	public void setListaInterfaces(List<Interface> listaInterfaces) {
		this.listaInterfaces = listaInterfaces;
	}
}
