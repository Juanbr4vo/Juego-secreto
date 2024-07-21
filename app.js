
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoDeJuegos = 5;
let cantidadDeJuegos = 1; 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    texto = elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`cantidadDeJuegos = ${cantidadDeJuegos}`);
    //console.log(intentos);
    if(cantidadDeJuegos == numeroMaximoDeJuegos){
        document.getElementById('reiniciar').setAttribute('disabled', 'true');
        document.getElementById('intento').setAttribute('disabled', 'true');
        document.getElementById('valorUsuario').setAttribute('disabled', 'true');
        asignarTextoElemento('parrafo', `¡Acertaste! y has llegado al límite de juegos posibles.`)
        limpiarCaja();
    } else {
        if (numeroDeUsuario == numeroSecreto) {
            asignarTextoElemento('parrafo', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
            document.getElementById('intento').setAttribute('disabled', 'true');
            document.getElementById('reiniciar').removeAttribute('disabled');
            cantidadDeJuegos++;
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('parrafo', 'El número secreto es menor.');
            } else if (numeroDeUsuario < numeroSecreto) {
                asignarTextoElemento('parrafo', 'El número secreto es mayor.');
            }
            intentos++;
            limpiarCaja();
        }
        
    }

    
    //cantidadDeJuegos++;
    return;
}

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {

    } else {
        //Si el número está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {

            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales() {
    asignarTextoElemento('titulo', 'Juego del número secreto');
    asignarTextoElemento('parrafo', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    //console.log(numeroSecreto);
    //document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('intento').removeAttribute('disabled');
    intentos = 1;

}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();



