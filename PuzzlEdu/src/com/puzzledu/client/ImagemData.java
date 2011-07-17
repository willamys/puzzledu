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
    			
            new ImagemRecord("Chiwawa", "/galery/chiwawa.png"),
            new ImagemRecord("Cachorro", "/galery/dog2-c.png"),
            new ImagemRecord("Morcego", "/galery/bat1-a.png"),            
            new ImagemRecord("Elefante", "/galery/elephant1-a.png"),
        };
    }
}