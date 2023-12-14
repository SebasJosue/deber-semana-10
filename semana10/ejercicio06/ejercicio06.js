'use strict'

let url = 'Facebook.com/angelmena'

let slash = url.indexOf('/');

let nombreUsuario = url.substring(slash+1);

alert(nombreUsuario);