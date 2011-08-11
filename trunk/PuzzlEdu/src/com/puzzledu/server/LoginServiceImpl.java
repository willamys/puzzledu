package com.puzzledu.server;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.puzzledu.client.LoginService;

@SuppressWarnings("serial")
public class LoginServiceImpl extends RemoteServiceServlet implements LoginService {

	public void login() {
		System.out.println(123);
     	Anchor signInLink = new Anchor("Entrar");
     	
	    UserService userService = UserServiceFactory.getUserService();
	    User user = userService.getCurrentUser();
	    
	    if (user != null)
	    	GWT.log(user.getEmail());
	    
	    signInLink.setHref(userService.createLoginURL(GWT.getHostPageBaseURL()));
	}
}
