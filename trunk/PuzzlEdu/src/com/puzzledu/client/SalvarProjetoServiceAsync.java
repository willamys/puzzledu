package com.puzzledu.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.puzzledu.gerenciador.Projeto;

@SuppressWarnings("rawtypes")
public interface SalvarProjetoServiceAsync {

	public void salvarProjeto(Projeto projeto, AsyncCallback callback);
}
