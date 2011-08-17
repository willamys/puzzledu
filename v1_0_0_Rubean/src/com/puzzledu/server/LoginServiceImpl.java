package com.puzzledu.server;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.puzzledu.client.LoginService;

@SuppressWarnings("serial")
public class LoginServiceImpl extends RemoteServiceServlet implements LoginService {

	public void login() {
		
	    UserService userService = UserServiceFactory.getUserService();
	    User user = userService.getCurrentUser();
	    
	    
	    if (user != null) {
	    	
	    	System.out.println(user.getEmail());
	    } else {
	    	
	    	//System.out.println("redirecionando..");
	    	//Window.open(userService.createLoginURL("https://www.google.com/accounts/"), "_self", "");
        }
	}

}
