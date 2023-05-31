const areaTexto=document.querySelector(".TextoIngresado");
const areaMostrado = document.querySelector(".TextoMostrado");
const botonUno = document.querySelector(".BotonUno");
const botonDos = document.querySelector(".BotonDos");
const botonCopiar = document.querySelector(".BotonCopiar");
const imgTesoro = document.getElementById("Tesoro");
const msgAdvertencia = document.getElementById("Advertencia");

function analizarMensaje(){
    var mensaje1 = areaTexto.value;
    var caracteres = "ºª!¡@#·~$%&/()=¿?^[]`+{}¨ç;,:._-1234567890abcdefghijklmnñopqrstuvwxyz \\\'\v\t\b\´\n\"";
    var mensajeErroneo1= "";
    var aux = true;
    for(var caracter of mensaje1){
        if(!caracteres.includes(caracter)){
            mensajeErroneo1 = "ERROR"
        }
    }
    if (mensajeErroneo1 == "ERROR"){
        aux = false;
        alert("Ingrese texto en minusculas y sin acentos");
    }
    return aux;
}

function encriptar(){
    if(analizarMensaje() == false) return;

    var mensaje = areaTexto.value;
    var mensajeEncriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

    areaMostrado.style.display = "block";
    botonCopiar.style.display = "block";
    imgTesoro.hidden = true;  
    msgAdvertencia.hidden = true;  
    areaMostrado.value = mensajeEncriptado;
}

function desencriptar(){
    if(analizarMensaje() == false) return;

    var mensajeEncriptado = areaTexto.value;
    var mensajeDesencriptado = mensajeEncriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

    areaMostrado.style.display = "block";
    botonCopiar.style.display = "block";
    imgTesoro.hidden = true;
    msgAdvertencia.hidden = true;
    areaMostrado.value = mensajeDesencriptado;
}

function copiar(){
    var mensajeEncriptado = areaMostrado.value; 
    navigator.clipboard.writeText(mensajeEncriptado);
}

botonUno.onclick = encriptar;
botonDos.onclick = desencriptar;
botonCopiar.onclick = copiar;
