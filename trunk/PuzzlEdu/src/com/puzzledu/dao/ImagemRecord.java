package com.puzzledu.dao;

import com.smartgwt.client.widgets.tile.TileRecord;

public class ImagemRecord extends TileRecord {

	public ImagemRecord() {
		
	}
	
	public ImagemRecord(String name, String image) {
		
		setName(name);
		setPicture(image);
		setHeader(name);
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
	
	public String getHeader() {
		
		return getAttribute("name");
	}
	
	public void setHeader(String header) {
		
		setAttribute("name", header);
	}
}
