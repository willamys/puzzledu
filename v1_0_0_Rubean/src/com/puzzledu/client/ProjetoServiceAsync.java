package com.puzzledu.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.puzzledu.gerenciador.Projeto;

@SuppressWarnings("rawtypes")
public interface ProjetoServiceAsync {

	public void salvarProjeto(Projeto projeto, AsyncCallback callback);
}
