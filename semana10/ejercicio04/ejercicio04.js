'use strict'

let jugador = 'NY-10'

let pos = jugador.indexOf('-');

let iniciales = jugador.substring(0,pos);
let numero = jugador.substring(pos+1);

alert(iniciales);
alert(numero);