package com.puzzledu;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.logging.Logger;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Solução para o problema do deploy com mais de 3000 arquivos, encontrada no
// fórum da SmartGWT: http://forums.smartclient.com/showthread.php?t=5258
@SuppressWarnings("serial")
public class ScServlet extends HttpServlet {

	private static final Logger log = Logger.getLogger(ScServlet.class.getName());

	/**
	 * This servlet receives all '/sc/*' requests according to a rule defined in
	 * 'web.xml'. It looks for the necessary resource in 'sc.zip' which should
	 * be present in the application classpath.
	 */
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {

		// Sometimes the request URI begins with '/sc' and other times with
		// '/myappname/sc', so we always remove '/myappname' from the request URI
		String requestedURI = req.getRequestURI().replaceFirst("/puzzledu", "");

		// At this point requestedURI  begins with '/sc/...' but the zip file entries
		// begin with 'sc/...', so we remove the first '/'
		requestedURI = requestedURI.substring(1);

		log.info("Requested URI '" + req.getRequestURI() + "' converted to '" + requestedURI + "'");

		// search for resource
		ZipInputStream in = new ZipInputStream(new FileInputStream("sc.zip"));
		ZipEntry entry;
		while ((entry = in.getNextEntry()) != null) {

			if (requestedURI.equals(entry.getName())) {
				// resource found
				// redirect it to output stream
				OutputStream out = resp.getOutputStream();
				byte[] buf = new byte[1024];
				int len;
				while ((len = in.read(buf)) > 0) {
					out.write(buf, 0, len);
				}
				in.close();
				out.close();
				log.info("Requested '" + requestedURI + "' found in zip file entry: " + entry.getName());
				return;
			}
		}
		log.severe("Requested '" + requestedURI + "' not found in zip file!");
	}
}