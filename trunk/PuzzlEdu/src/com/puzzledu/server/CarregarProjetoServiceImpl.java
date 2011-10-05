package com.puzzledu.server;

import java.util.ArrayList;
import java.util.List;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.puzzledu.client.CarregarProjetoService;
import com.puzzledu.gerenciador.Projeto;

@SuppressWarnings("serial")
public class CarregarProjetoServiceImpl extends RemoteServiceServlet implements CarregarProjetoService {

public List<Projeto> listarProjetos() {
		
		ArrayList<Projeto> lst = null;
		
		PersistenceManager pm = GerenciadorPersistencia.get().getPersistenceManager();

		Query query = pm.newQuery(Projeto.class);
		
		
		try {
			
    		 @SuppressWarnings("unchecked")
    		 List<Projeto> results = (List<Projeto>) query.execute();
			
    		 lst = new ArrayList<Projeto>();
    		 
    		 for (Projeto p : results) 
    			 lst.add(p);
    		 
			return lst;				
			 
		} finally {
			
			query.closeAll();
		}
		
	}
}
