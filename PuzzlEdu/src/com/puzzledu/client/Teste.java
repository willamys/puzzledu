package com.puzzledu.client;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Label;

public class Teste extends Composite {

	public Teste() {
		
		FlowPanel flowPanel = new FlowPanel();
		initWidget(flowPanel);
		
		Label lblSilas = new Label("Silas");
		lblSilas.setStyleName("logo");
		flowPanel.add(lblSilas);
	}

}
