"use strict";

var persona = ['Yury', 19, undefined, 'Desarrollador Web'];
var nombre = persona[0],
    edad = persona[1],
    _persona$ = persona[2],
    pais = _persona$ === void 0 ? "No especificado" : _persona$,
    profesion = persona[3];
console.log(pais);