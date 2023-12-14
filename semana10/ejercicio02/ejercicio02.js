'use strict'

let codigo = '01.24'

let pos = codigo.indexOf('.')
 
let pisos = codigo.substring(0,pos);

let oficinas = codigo.substring(pos+1);

alert(pisos);
alert(oficinas);


