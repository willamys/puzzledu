package com.puzzledu.server;

import java.util.ArrayList;
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
		
		ArrayList<Projeto> lst = null;
		
		PersistenceManager pm = GerenciadorPersistencia.get().getPersistenceManager();

		Query query = pm.newQuery(Projeto.class);
		
		
		try {
			
    		 @SuppressWarnings("unchecked")
    		 List<Projeto> results = (List<Projeto>) query.execute();
			
    		 lst = new ArrayList<Projeto>();
    		 
    		 for (Projeto p : results) 
    			 lst.add(new Projeto(p.getNome()));
    		 
			return lst;				
			 
		} finally {
			
			query.closeAll();
		}
		
		//return null;
	}
}
