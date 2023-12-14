'use strict'

let codigo = 'LAB3#B'

let hastag = codigo.indexOf('#')
let fila = codigo.substring(hastag+1);
let lab = codigo.substring(0,hastag)

alert(lab);
alert(fila);