"use strict";

var createObjeto = function createObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

console.log(createObjeto("Ricardo", 21).mostrarInfo());