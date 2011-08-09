package com.puzzledu.gui;

import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.ImgProperties;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;

public class PartsListGrid extends ListGrid {

    public PartsListGrid() {
    	
        setWidth100();
        setHeight100();
        setCellHeight(30);
        setImageSize(16);
        setWrapCells(true);
        setShowEdges(false);
        setBorder("0px");
        setBodyStyleName("normal");
        setShowHeader(false);
        setLeaveScrollbarGap(false);
        setEmptyMessage("<br><br>Lista Vazia...");

        ListGridField partSrcField = new ListGridField("imageField", 24);
        partSrcField.setType(ListGridFieldType.IMAGE);
        partSrcField.setImgDir("pieces/16/");

        ListGridField partNameField = new ListGridField("name");
        
        ListGridField valueField = new ListGridField("value");

        setFields(partSrcField, partNameField, valueField);

        setTrackerImage(new ImgProperties("pieces/24/cubes_all.png", 24, 24));
    }
}

