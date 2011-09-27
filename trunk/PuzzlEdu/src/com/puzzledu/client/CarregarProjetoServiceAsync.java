package com.puzzledu.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.puzzledu.gerenciador.Projeto;

@SuppressWarnings("rawtypes")
public interface CarregarProjetoServiceAsync {

	public void listarProjetos(AsyncCallback callback);
}
