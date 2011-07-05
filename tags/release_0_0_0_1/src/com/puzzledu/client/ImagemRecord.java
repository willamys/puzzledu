package com.puzzledu.client;

import com.smartgwt.client.widgets.tile.TileRecord;

public class ImagemRecord extends TileRecord {

	public ImagemRecord() {
		
	}
	
	public ImagemRecord(String name, String image) {
		
		setName(name);
		setPicture(image);
	}

	public void setPicture(String image) {
		
		 setAttribute("picture", image);
	}

	public void setName(String name) {
		
		 setAttribute("name", name);
	}
	
	public String getName() {
		
		return getAttribute("name");
	}
	
	public String getPicture() {
		
		return getAttribute("picture");
	}
}
