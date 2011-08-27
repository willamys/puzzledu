package com.puzzledu.gerenciador;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.puzzledu.basica.Classe;
import com.puzzledu.basica.Variavel;
import com.puzzledu.client.ProjetoService;
import com.puzzledu.client.ProjetoServiceAsync;
import com.puzzledu.shared.Guia;
import com.smartgwt.client.widgets.Button;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;

public class Gerenciador implements ProjetoServiceAsync {

	private Pilha pilha;
	private Projeto projetoAtual;
	private ProjetoServiceAsync serviceSalvarProjeto;
	private Guia guia;
	
	public Gerenciador() {

		guia = new Guia();
		
		inicializarServicos();
		pilha = new Pilha();
		
		novoProjetoExemplo();
		//novoProjeto("New Project");		
	}
	
	private void inicializarServicos() {
		
		serviceSalvarProjeto = (ProjetoServiceAsync) GWT.create(ProjetoService.class);
		ServiceDefTarget endpoint = (ServiceDefTarget) serviceSalvarProjeto;
     	endpoint.setServiceEntryPoint("/ProjetoService");
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

		final Window winSaving = new Window();  
		winSaving.setWidth(360);  
		winSaving.setHeight(130);  
		winSaving.setTitle("Salvar Projeto");  
		winSaving.setShowMinimizeButton(false);  
		winSaving.setIsModal(true);  
		winSaving.centerInPage();
		
		final Canvas textCanvas = new Canvas();  
        textCanvas.setContents("<br /><center><b>Salvando, aguarde ...</b></center>");   
        textCanvas.setPadding(5);  
        textCanvas.setHeight(1);
        textCanvas.setWidth100();
        textCanvas.setTop(30);
        
        final Button botao = new Button("Sair");
        botao.setTop(80);
        botao.setLeft(125);
        
        botao.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				
				winSaving.hide();
				winSaving.redraw();
			}
		});
        
        
        
        winSaving.addChild(textCanvas);
        winSaving.addChild(botao);
        
		@SuppressWarnings("rawtypes")
		AsyncCallback callback = new AsyncCallback() {
			
			public void onFailure(Throwable caught) {
				
				textCanvas.setContents("<br /><center><b>Erro ao Salvar o Projeto: " + caught.getMessage() + "</b></center>");
			}

			public void onSuccess(Object result) {

				textCanvas.setContents("<br /><center><b>Projeto Salvo com Sucesso!</b></center>");
			}
		};
		
		winSaving.show();
		
		salvarProjeto(getProjetoAtual(), callback);
	}
	
	@SuppressWarnings("rawtypes")
	public void salvarProjeto(Projeto projeto, AsyncCallback callback) {
		
		serviceSalvarProjeto.salvarProjeto(projeto, callback);
	}

	@Override
	@SuppressWarnings("rawtypes") 
	public void listarProjetos(AsyncCallback callback) {
		// TODO Auto-generated method stub
		
	}

	public Guia getGuia() {
		return guia;
	}

	public void setGuia(Guia guia) {
		this.guia = guia;
	}	
	
}
