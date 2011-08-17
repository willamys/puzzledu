package com.puzzledu.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.puzzledu.client.SalvarProjetoService;
import com.puzzledu.gerenciador.Projeto;

@SuppressWarnings("serial")
public class SalvarProjetoServiceImpl extends RemoteServiceServlet implements SalvarProjetoService {

	public void salvarProjeto(Projeto projeto) {
		System.out.println("Salvando Aguarde ... " + projeto.getNome());
		
	}
}
