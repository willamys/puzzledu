package com.puzzledu.client;

import com.google.gwt.user.client.rpc.AsyncCallback;

public interface LoginServiceAsync {

	void login(AsyncCallback<Void> callback);
}
