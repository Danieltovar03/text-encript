function encriptar(){
    let texto = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    
    
    .replace(/o/gi, "kk")
    .replace(/u/gi, "tx")
    .replace(/a/gi, "mm")
    .replace(/e/gi, "cacho")
    .replace(/i/gi, "neh")

     if (texto.length != 0 ){
      texto = document.getElementById("text").value = textoCifrado;
      tituloMensaje.textContent = "Secreto anti-toxic terminado";
      parrafo.textContent= "";
      muñeco.src = "./img/succes.jpg";
     }

     else{
      muñeco.src = "./img/error.jpg";
      parrafo.textContent= "Ingrese el texto que quiere ocultar o desencriptar"
      tituloMensaje.textContent = "Ningun mensaje fue encontrado";
      alert("Debes ingresar algun texto")
      
     }
}

function desencriptar(){
   let texto = document.getElementById("text").value;
   let tituloMensaje = document.getElementById("titulo-mensaje");
   let parrafo = document.getElementById("parrafo");
   let muñeco = document.getElementById("muñeco");

   let textoCifrado = texto
    
    
    .replace(/kk/gi, "o")
    .replace(/tx/gi, "u")
    .replace(/mm/gi, "a")
    .replace(/cacho/gi, "e")
    .replace(/neh/gi, "i")

    if (texto.length != 0 ){
      texto = document.getElementById("text").value = textoCifrado;
      tituloMensaje.textContent = "Secreto anti-toxic descubierto";
      parrafo.textContent= "";
      muñeco.src = "./img/descubierto.png";

      }

      else{

         tituloMensaje.textContent = "ningun mensaje encontrado";
         parrafo.textContent = "ingrese el texto que deseas ver"
         muñeco.src = "./img/cerrado.png"
         alert("Debes ingresar algun texto")
      }


   

    
}

