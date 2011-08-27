package com.puzzledu.server;

import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;

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

	
	public List<Projeto> listarProjetos() {
		
		PersistenceManager pm = GerenciadorPersistencia.get().getPersistenceManager();

		Query query = pm.newQuery(Projeto.class);
		
		try {
			
    		 @SuppressWarnings("unchecked")
    		 List<Projeto> results = (List<Projeto>) query.execute();
			 
			 if (results.iterator().hasNext())		          
				return results;				
			 
		} finally {
			
			query.closeAll();
		}
		
		return null;
	}
}
