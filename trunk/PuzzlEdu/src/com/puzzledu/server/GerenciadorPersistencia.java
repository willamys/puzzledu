package com.puzzledu.server;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManagerFactory;

public class GerenciadorPersistencia {

    private static final PersistenceManagerFactory pmfInstance =
        JDOHelper.getPersistenceManagerFactory("transactions-optional");

    private GerenciadorPersistencia() {}

    public static PersistenceManagerFactory get() {
        return pmfInstance;
    }
}
