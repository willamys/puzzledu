package com.puzzledu.gerenciador;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.google.gwt.user.client.ui.DialogBox;
import com.puzzledu.basica.Classe;
import com.puzzledu.basica.Variavel;
import com.puzzledu.client.SalvarProjetoService;
import com.puzzledu.client.SalvarProjetoServiceAsync;
import com.smartgwt.client.util.SC;

public class Gerenciador implements SalvarProjetoServiceAsync {

	private Pilha pilha;
	private Projeto projetoAtual;
	private final SalvarProjetoServiceAsync serviceSalvarProjeto;
	
	public Gerenciador() {

		serviceSalvarProjeto = (SalvarProjetoServiceAsync) GWT.create(SalvarProjetoService.class);
		ServiceDefTarget endpoint = (ServiceDefTarget) serviceSalvarProjeto;
     	endpoint.setServiceEntryPoint( "/SalvarProjetoService");

		pilha = new Pilha();
		novoProjetoExemplo();
		
		//novoProjeto("New Project");
	}
	
	public void novoProjeto(String nomeProjeto){
		
	 	setProjetoAtual(new Projeto(1L, nomeProjeto));
	}	
	public void novoProjetoExemplo() {
		
		projetoAtual = new Projeto(1L, "Projeto Exemplo");

		Classe hello = new Classe();
		hello.setNome("Hello");
		hello.setAbstrata(false);
		hello.addVariavel(new Variavel("imagem", "Image", "/galery/alomundo.png", "private"));
	
		projetoAtual.getRepositorioDados().getColecaoClasse().addClasseFilha(hello, "Object");
		
		hello.addInterface(projetoAtual.getRepositorioDados().getColecaoInterface().procurarInterface("Desenh&aacute;vel"));
		hello.addInterface(projetoAtual.getRepositorioDados().getColecaoInterface().procurarInterface("Anim&aacute;vel"));		
		hello.addInterface(projetoAtual.getRepositorioDados().getColecaoInterface().procurarInterface("Comunic&aacute;vel"));
	}	
	
	public List<Projeto> listarProjetos() {
		
		//Usar API do GAE para retornar os projetos do usuário logado
		
		return null;
	}
	
	public List<Projeto> buscarProjetoNome(String nomeProjeto) {
		
		return null;
	}

	public Projeto getProjetoAtual() {
		return projetoAtual;
	}

	public void setProjetoAtual(Projeto projetoAtual) {
		this.projetoAtual = projetoAtual;
	}

	public Pilha getPilha() {
		return pilha;
	}

	public void setPilha(Pilha pilha) {
		this.pilha = pilha;
	}

	public void salvar() {

		@SuppressWarnings("rawtypes")
		AsyncCallback callback = new AsyncCallback() {
			
			public void onFailure(Throwable caught) {
				
				SC.say("Aten&ccedil;&atilde;o", "Erro ao Salvar o Projeto: " + caught.getMessage());
			}

			public void onSuccess(Object result) {

				SC.say("Aten&ccedil;&atilde;o", "Projeto Salvo com Sucesso!");
			}
		};
		
		salvarProjeto(getProjetoAtual(), callback);
	}
	
	@SuppressWarnings("rawtypes")
	public void salvarProjeto(Projeto projeto, AsyncCallback callback) {
		
		serviceSalvarProjeto.salvarProjeto(projeto, callback);
	}	
}
