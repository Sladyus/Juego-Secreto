//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un numero del 1 al 10";
//console.log(numeroSecreto);

//let numeroSecreto = generarNumeroSecreto();
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let limiteDeRondas = 10;

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length >= limiteDeRondas) {
        asignarTextoObjeto("p","Ya se alcanzo el limite de rondas");
        document.getElementById("verificar").setAttribute("disabled", "true");
    }
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoObjeto("p","Ya se sortearon todos los numeros posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoObjeto(objeto, texto) {
    let elementoHTML = document.querySelector(objeto);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //let numeroDeUsuario = document.querySelector(input);
    //alert("click");
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario === numeroSecreto);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoObjeto("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoObjeto("p", "El numero secreto es menor");
        } else {
            asignarTextoObjeto("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    //let valorCaja = document.querySelector("#valorUsuario");
    //valorCaja.value = "";
    document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute ("disabled","true");
}

function condicionesIniciales() {
    asignarTextoObjeto("h1", "Juego del Numero Secreto");
    asignarTextoObjeto("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

generarNumeroSecreto();
verificarIntento();
condicionesIniciales();
