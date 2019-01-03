"use strict";

var nombreUsuario = function nombreUsuario(nombre) {
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Peru";
  var correo = arguments.length > 2 ? arguments[2] : undefined;
  var telefono = arguments.length > 3 ? arguments[3] : undefined;
  return "Nombre: ".concat(nombre, " Pa\xEDs: ").concat(pais, " Correo:").concat(correo, " Telefono: ").concat(telefono, " ");
};

console.log(nombreUsuario("Yury", "Perú", "zionlenuz1@gmail.com", 9729929761));
console.log(nombreUsuario("Adriana"));