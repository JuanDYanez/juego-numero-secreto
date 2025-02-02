let numeroSecreto;
let numeroIntentos;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elem, texto) {
  let elementoHTML = document.querySelector(elem);
  elementoHTML.innerHTML = texto
}

document.querySelector('#valorUsuario').addEventListener('keydown', e => e.key === 'Enter' ? verificarIntento() : '')

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById('valorUsuario').value)
  
  console.log(numeroSecreto);
  
  if (numeroSecreto === numeroUsuario) {
    asignarTextoElemento('p', `Acertaste el número en ${numeroIntentos} ${numeroIntentos == 1 ? 'intento' : 'intentos'}`)
    habilitarBoton('reiniciar');
  } else {
    if (numeroSecreto > numeroUsuario) {
      asignarTextoElemento('p', 'El número secreto es mayor')
    } else {
      asignarTextoElemento('p', 'El número secreto es menor')
    }
    numeroIntentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = ''
}

function habilitarBoton(id){
  document.getElementById(id).removeAttribute('disabled')
}

function deshabilitarBoton(id){
  document.getElementById(id).setAttribute('disabled', true)
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1)

  console.log(numeroGenerado);
  console.log(numerosSorteados);
  
  if (numerosSorteados.length === numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    deshabilitarBoton('intentar')
  } else {
    if (numerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      numerosSorteados.push(numeroGenerado)
      return numeroGenerado
    }
  }
}

function generarCondicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  numeroIntentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  generarCondicionesIniciales();
  deshabilitarBoton('reiniciar');
}

generarCondicionesIniciales();