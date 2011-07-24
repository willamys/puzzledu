package com.puzzledu.client;

import java.util.HashMap;

/**
 * LanguageUtils
 * 
 */
public final class LanguageUtils {
	
	private HashMap<String, String> keyWords  = null;
	private static LanguageUtils instance     = new LanguageUtils();
	
	public static LanguageUtils getInstance(){
		return instance;
	}
	
	private LanguageUtils() {
		fillKeyWords();
	}
	
	
	private void fillKeyWords(){
		keyWords = new HashMap<String, String>();
		keyWords.put("private"      , "Acesso apenas dentro da classe. ");
		keyWords.put("protected"    , "Acesso por classes no mesmo pacote e subclasses. ");
		keyWords.put("public"       , "Acesso de qualquer classe. ");
		keyWords.put("abstract"     , "Classe que n�o pode ser instanciada ou m�todo que precisa ser implementado por uma subclasse n�o abstrata.");
		keyWords.put("class"        , "Especifica uma classe.");
		keyWords.put("extends"      , "Indica a superclasse que a subclasse est� estendendo.");
		keyWords.put("final"        , "Impossibilita que uma classe seja estendida, que um m�todo seja sobrescrito ou que uma vari�vel seja reinicializada ");
		keyWords.put("implements"   , "Indica as interfaces que uma classe ir� implementar ");
		keyWords.put("interface"    , "Especifica uma interface ");
		keyWords.put("native"       , "Indica que um m�todo est� escrito em uma linguagem dependente de plataforma, como o C ");
		keyWords.put("new"          , "Instancia um novo objeto, chamando seu construtor ");
		keyWords.put("static"       , "Faz um m�todo ou vari�vel pertencer � classe ao inv�s de �s inst�ncias ");
		keyWords.put("strictfp"     , "Usado em frente a um m�todo ou classe para indicar que os n�meros de ponto flutuante seguir�o as regras de ponto flutuante em todas as express�es  ");
		keyWords.put("synchronized" , "Indica que um m�todo s� pode ser acessado por uma thread de cada vez   ");
		keyWords.put("transient"    , "Impede a serializa��o de campos   ");
		keyWords.put("continue"     , "Pula a execu��o do c�digo que viria ap�s essa linha e vai para a pr�xima passagem do loop. ");
		keyWords.put("while"        , "Executa um bloco de c�digo repetidamente at� que uma certa condi��o seja verdadeira ");
		keyWords.put("do"           , "Executa um bloco de c�digo uma vez, e ent�o realiza um teste em conjunto com o while para determinar se o bloco dever� ser executado novamente. ");
		keyWords.put("if"           , "Usado para realizar um teste l�gico de verdadeiro ou falso ");
		keyWords.put("else"         , "Executa um bloco de c�digo alternativo caso o teste if seja falso. ");
		keyWords.put("for"          , "Usado para realizar um loop condicional de um bloco de c�digo ");
		keyWords.put("instanceof"   , "Determina se um objeto � uma inst�ncia de determinada classe, superclasse ou interface ");
		keyWords.put("return"       , "Retorna de um m�todo sem executar qualquer c�digo que venha depois desta linha (tamb�m pode retornar uma vari�vel) ");
		keyWords.put("switch"       , "Indica a vari�vel a ser comparada nas express�es case ");
		keyWords.put("case"         , "Executa um bloco de c�digo dependendo do teste do switch. ");
		keyWords.put("break"        , "Sai do bloco de c�digo em que ele est� definido.  ");
		keyWords.put("default"      , "Executa esse bloco de c�digo caso nenhum dos teste de switch-case seja verdadeiro. ");
		keyWords.put("assert"       , "Testa uma express�o condicional para verificar uma suposi��o do programador.  ");
		keyWords.put("catch"        , "Declara o bloco de c�digo usado para tratar uma exce��o.  ");
		keyWords.put("finally"      , "Bloco de c�digo, ap�s um try-catch, que � executado independentemente do fluxo de programa seguido ao lidar com uma exce��o.  ");
		keyWords.put("throw"        , "Usado para passar uma exce��o para o m�todo que o chamou.  ");
		keyWords.put("throws"       , "Indica que um m�todo pode passar uma exce��o para o m�todo que o chamou.  ");
		keyWords.put("try"          , "Bloco de c�digo que tentar� ser executado, mas que pode causar uma exce��o.  ");
		keyWords.put("import"       , "Importa pacotes ou classes para dentro do c�digo.  ");
		keyWords.put("package"      , "Especifica a que pacote todas as classes de um arquivo pertencem.  ");
		keyWords.put("boolean"      , "Um valor indicando verdadeiro ou falso.  ");
		keyWords.put("byte"         , "Um inteiro de 8 bits (signed).  ");
		keyWords.put("char"         , "Um caracter unicode (16-bit unsigned).  ");
		keyWords.put("float"        , "Um n�mero de ponto flutuante de 32 bits (signed).  ");
		keyWords.put("double"       , "Um n�mero de ponto flutuante de 64 bits (signed).  ");
		keyWords.put("int"          , "Um inteiro de 32 bits (signed).");
		keyWords.put("long"         , "Um inteiro de 64 bits (signed).");
		keyWords.put("short"        , "Um inteiro de 32 bits (signed).");
		keyWords.put("super"        , "refere-se a superclasse imediata.");
		keyWords.put("this"         , "refere-se a inst�ncia atual do objeto");
		keyWords.put("void"         , "indica que o m�todo n�o tem retorno.");
		keyWords.put("const"        , "N�o utilize para declarar constantes. Use public static final.");
		keyWords.put("goto"         , "N�o implementada na linguagem Java por ser considerada prejudicial .");
		
		/*Literais reservados*/
		keyWords.put("null"         , "Literal Reservado.");
		keyWords.put("true "        , "Literal Reservado.");
		keyWords.put("false  "      , "Literal Reservado.");	
	}
	
	public boolean isValidMethod(String name)throws Exception{
	  return validate(name);
	}
	
	
	public boolean isValidAttribute(String name) throws Exception{
		return validate(name);
	}
	
	public boolean isValidClass(String name) throws Exception{
		return validate(name);
	}
	
	
	private boolean validate(String name) throws Exception{
		
		boolean result = false;
		if (name != null) {
			int len = name.length();
			result = (len > 0);
			if (result) {
				if (keyWords.containsKey(name))
					throw new KeyWordsException("Palavra resevada ( " + name + " ).");
				
				String tmp = name.toUpperCase();
				char c     = tmp.charAt(0);
				
				if (!(((c >= 'A') && (c <= 'Z')) || (c == '_')))
				   throw new SpecialCharactersException(" Caracter inicial ( " + c + " ) inv&aacute;lido.");
				
				for (int index = 1; (result && (index < len)); index++) {
					c = tmp.charAt(index);
					if (!((c >= 'A') && (c <= 'Z') || (c == '_') || (c >= '0' && c <='9'))){
						throw new SpecialCharactersException(" Caracter inv&aacute;lido ( " + c + " ) na posi&ccedil;&atilde;o: "+ (index + 1));
					}
				}

			}
		}
		return result;
	}
	
	/**
	 * @return the keyWords
	 */
	public HashMap<String, String> getKeyWords() {
		return keyWords;
	}

	/**
	 * @param keyWords the keyWords to set
	 */
	public void setKeyWords(HashMap<String, String> keyWords) {
		this.keyWords = keyWords;
	}

	public boolean isValidAttributeValue(String tipoAtributo, String valor) {

		if (tipoAtributo.equals("int")) {
			
			try {
				
				Integer.parseInt(valor.trim());
				
			} catch (Exception e) {
			
				return false;				
			}
			
		} else if (tipoAtributo.equals("float")) {
			
			try {
				
				Float.parseFloat(valor.trim());
				
			} catch (Exception e) {
			
				return false;				
			}						
		
		} else if (tipoAtributo.equals("String"))
			return true;
		
		return true;
	}
	
}
