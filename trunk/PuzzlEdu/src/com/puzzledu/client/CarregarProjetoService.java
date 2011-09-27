package com.puzzledu.client;

import java.util.List;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import com.puzzledu.gerenciador.Projeto;

@RemoteServiceRelativePath("CarregarProjetoService")
public interface CarregarProjetoService extends RemoteService {

	public List<Projeto> listarProjetos();
	
}
