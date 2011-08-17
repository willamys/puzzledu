package com.puzzledu.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.puzzledu.gerenciador.Projeto;

@RemoteServiceRelativePath("SalvarProjetoService")
public interface SalvarProjetoService extends RemoteService {

	public void salvarProjeto(Projeto projeto);
}
