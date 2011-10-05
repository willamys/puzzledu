package com.puzzledu.server;

import javax.jdo.PersistenceManager;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.puzzledu.client.ProjetoService;
import com.puzzledu.gerenciador.Projeto;

@SuppressWarnings("serial")
public class ProjetoServiceImpl extends RemoteServiceServlet implements ProjetoService {

	public void salvarProjeto(Projeto projeto) {
		
		PersistenceManager pm = GerenciadorPersistencia.get().getPersistenceManager();

        try {
        	
            pm.makePersistent(projeto);
            
        } finally {
            pm.close();
        }
		
	}

}
