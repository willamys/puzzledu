package com.puzzledu.client;

public class ImagemData {

    private static ImagemRecord[] records;

    public static ImagemRecord[] getRecords() {
        
    	if (records == null) {
            records = getNewRecords();
        }
    	
        return records;
    }

    public static ImagemRecord[] getNewRecords() {
      
    	return new ImagemRecord[]{
    			
            new ImagemRecord("Morcego 1", "/galery/dog2-b.png"),
            new ImagemRecord("Morcego 1", "/galery/dog2-c.png"),
        };
    }
}