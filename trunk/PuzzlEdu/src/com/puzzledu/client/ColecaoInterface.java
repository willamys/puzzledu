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
		avancar.setAcesso("public");
		avancar.adicionarParametro(new Parametro("valor", "int"));
		interfaceAnimavel.adicionarMetodo(avancar);		
		
		Metodo voltar = new Metodo("voltar");		
		voltar.setRetorno("void");
		voltar.setAcesso("public");
		voltar.adicionarParametro(new Parametro("valor", "int"));		
		interfaceAnimavel.adicionarMetodo(voltar);		
		
		Metodo girar = new Metodo("girar");
		girar.setRetorno("void");
		girar.setAcesso("public");
		girar.adicionarParametro(new Parametro("graus", "float"));
		interfaceAnimavel.adicionarMetodo(girar);
		
		Metodo encontrar = new Metodo("encontrar");
		encontrar.setRetorno("void");	
		encontrar.setAcesso("public");
		encontrar.adicionarParametro(new Parametro("objeto", "Object"));
		interfaceAnimavel.adicionarMetodo(encontrar);
		
		Metodo destruir = new Metodo("destruir");
		destruir.setRetorno("void");	
		destruir.setAcesso("public");
		interfaceAnimavel.adicionarMetodo(destruir);	
		
		Interface interfaceDesenhavel = new Interface("Desenh&aacute;vel");
		
		Variavel imagem = new Variavel("imagem");
		imagem.setTipo("Image");
		imagem.setAcesso("private");
		interfaceDesenhavel.adicionarVariavel(imagem);
		
		Metodo setImagem = new Metodo("setImagem");
		setImagem.adicionarParametro(new Parametro("imagem", "Image"));
		setImagem.setRetorno("void");
		setImagem.setAcesso("public");
		interfaceDesenhavel.adicionarMetodo(setImagem);
		
		Metodo getImagem = new Metodo("getImagem");
		getImagem.setRetorno("Image");
		getImagem.setAcesso("public");
		interfaceDesenhavel.adicionarMetodo(getImagem);
		
		Interface interfaceComunicavel = new Interface("Comunic&aacute;vel");
		
		Metodo mostrarMsg = new Metodo("mostrarMensagem");
		mostrarMsg.setRetorno("void");
		mostrarMsg.setAcesso("public");
		mostrarMsg.adicionarParametro(new Parametro("mensagem", "String"));
		interfaceComunicavel.adicionarMetodo(mostrarMsg);	
		
		Metodo lerAtributo = new Metodo("lerAtributo");
		lerAtributo.setRetorno("void");
		lerAtributo.setAcesso("public");
		lerAtributo.adicionarParametro(new Parametro("atributo", "Atributo"));
		interfaceComunicavel.adicionarMetodo(lerAtributo);		
		
		listaInterfaces.add(interfaceAnimavel);
		listaInterfaces.add(interfaceDesenhavel);
		listaInterfaces.add(interfaceComunicavel);
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
