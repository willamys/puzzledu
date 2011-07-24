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
		keyWords.put("abstract"     , "Classe que não pode ser instanciada ou método que precisa ser implementado por uma subclasse não abstrata.");
		keyWords.put("class"        , "Especifica uma classe.");
		keyWords.put("extends"      , "Indica a superclasse que a subclasse está estendendo.");
		keyWords.put("final"        , "Impossibilita que uma classe seja estendida, que um método seja sobrescrito ou que uma variável seja reinicializada ");
		keyWords.put("implements"   , "Indica as interfaces que uma classe irá implementar ");
		keyWords.put("interface"    , "Especifica uma interface ");
		keyWords.put("native"       , "Indica que um método está escrito em uma linguagem dependente de plataforma, como o C ");
		keyWords.put("new"          , "Instancia um novo objeto, chamando seu construtor ");
		keyWords.put("static"       , "Faz um método ou variável pertencer à classe ao invés de às instâncias ");
		keyWords.put("strictfp"     , "Usado em frente a um método ou classe para indicar que os números de ponto flutuante seguirão as regras de ponto flutuante em todas as expressões  ");
		keyWords.put("synchronized" , "Indica que um método só pode ser acessado por uma thread de cada vez   ");
		keyWords.put("transient"    , "Impede a serialização de campos   ");
		keyWords.put("continue"     , "Pula a execução do código que viria após essa linha e vai para a próxima passagem do loop. ");
		keyWords.put("while"        , "Executa um bloco de código repetidamente até que uma certa condição seja verdadeira ");
		keyWords.put("do"           , "Executa um bloco de código uma vez, e então realiza um teste em conjunto com o while para determinar se o bloco deverá ser executado novamente. ");
		keyWords.put("if"           , "Usado para realizar um teste lógico de verdadeiro ou falso ");
		keyWords.put("else"         , "Executa um bloco de código alternativo caso o teste if seja falso. ");
		keyWords.put("for"          , "Usado para realizar um loop condicional de um bloco de código ");
		keyWords.put("instanceof"   , "Determina se um objeto é uma instância de determinada classe, superclasse ou interface ");
		keyWords.put("return"       , "Retorna de um método sem executar qualquer código que venha depois desta linha (também pode retornar uma variável) ");
		keyWords.put("switch"       , "Indica a variável a ser comparada nas expressões case ");
		keyWords.put("case"         , "Executa um bloco de código dependendo do teste do switch. ");
		keyWords.put("break"        , "Sai do bloco de código em que ele está definido.  ");
		keyWords.put("default"      , "Executa esse bloco de código caso nenhum dos teste de switch-case seja verdadeiro. ");
		keyWords.put("assert"       , "Testa uma expressão condicional para verificar uma suposição do programador.  ");
		keyWords.put("catch"        , "Declara o bloco de código usado para tratar uma exceção.  ");
		keyWords.put("finally"      , "Bloco de código, após um try-catch, que é executado independentemente do fluxo de programa seguido ao lidar com uma exceção.  ");
		keyWords.put("throw"        , "Usado para passar uma exceção para o método que o chamou.  ");
		keyWords.put("throws"       , "Indica que um método pode passar uma exceção para o método que o chamou.  ");
		keyWords.put("try"          , "Bloco de código que tentará ser executado, mas que pode causar uma exceção.  ");
		keyWords.put("import"       , "Importa pacotes ou classes para dentro do código.  ");
		keyWords.put("package"      , "Especifica a que pacote todas as classes de um arquivo pertencem.  ");
		keyWords.put("boolean"      , "Um valor indicando verdadeiro ou falso.  ");
		keyWords.put("byte"         , "Um inteiro de 8 bits (signed).  ");
		keyWords.put("char"         , "Um caracter unicode (16-bit unsigned).  ");
		keyWords.put("float"        , "Um número de ponto flutuante de 32 bits (signed).  ");
		keyWords.put("double"       , "Um número de ponto flutuante de 64 bits (signed).  ");
		keyWords.put("int"          , "Um inteiro de 32 bits (signed).");
		keyWords.put("long"         , "Um inteiro de 64 bits (signed).");
		keyWords.put("short"        , "Um inteiro de 32 bits (signed).");
		keyWords.put("super"        , "refere-se a superclasse imediata.");
		keyWords.put("this"         , "refere-se a instância atual do objeto");
		keyWords.put("void"         , "indica que o método não tem retorno.");
		keyWords.put("const"        , "Não utilize para declarar constantes. Use public static final.");
		keyWords.put("goto"         , "Não implementada na linguagem Java por ser considerada prejudicial .");
		
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
