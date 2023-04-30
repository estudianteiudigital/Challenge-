		function encriptar() {
			var imagen = document.getElementById("imagen");
			var mensaje = document.getElementById("mensaje");
			var textoDescripcion = document.getElementById("texto_descripcion");
			var texto = document.getElementById("texto").value.toLowerCase();
			 // Eliminar acentos y caracteres especiales
			 texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
			 // Eliminar caracteres no permitidos
			 texto = texto.replace(/[^a-z]/gi, "");
			var texto_encriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
             // Ocultar o borrar el texto del textarea "texto"
			imagen.style.display = "none";
			mensaje.style.display = "none";
			textoDescripcion.style.display = "none";
			 document.getElementById("texto").value = "";
			document.getElementById("output").value = texto_encriptado;
			document.getElementById("btn_copiar").style.display = "block";
		} 
		function desencriptar() {
			var texto = document.getElementById("texto").value;
			var texto_encriptado = document.getElementById("texto").value;
			var texto_encriptado = texto_encriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
			document.getElementById("texto").value = "";
			document.getElementById("output").value = texto_encriptado;
		}

		function copiar() {
			let output = document.getElementById("output");
			output.select();
			document.execCommand("copy");
			document.getElementById("mensaje").innerHTML = "¡Texto copiado al portapapeles!";
			document.getElementById("output").value = "";
		}
