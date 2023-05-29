function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat"); 

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Haz encriptado el texto";
        parrafo.textContent = "";
        muñeco.src = "img/encriptado.jpg";
    }   else {
        muñeco.src = "img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooopss!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto 
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if (texto.length != 0){
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Listo!!! El texto ha sido desencriptado";
            parrafo.textContent = "";
            muñeco.src = "img/desencriptado.jpg";
        }   else {
            muñeco.src = "img/Muñeco.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ooopss!", "Debes ingresar un texto", "warning");
        }
}

/*function imprimirResultado() {
    impresionResultado.innerHTML = textoProcesado;
    mensajeVacio.style.display = "none";
    mensajeProcesado.style.display = "block";
}


const copiar = document.getElementById("Contenedor-btnCopy");
    copiar.addEventListener("click", (event) => copiarTexto()); 

function copiarTexto() {
    navigator.clipboard.writeText(Contenedor-btnCopy);
    swal({
        text : "Copiado con éxito",
        icon : "success",
        button : false,
    });
}*/



