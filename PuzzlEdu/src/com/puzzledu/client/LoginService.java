package com.puzzledu.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

@RemoteServiceRelativePath("Login")
public interface LoginService extends RemoteService {

	public void login();
}
