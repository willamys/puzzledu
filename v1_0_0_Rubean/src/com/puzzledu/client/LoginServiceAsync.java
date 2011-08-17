package com.puzzledu.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface LoginServiceAsync {

	public void login(AsyncCallback<Void> callback);
}
