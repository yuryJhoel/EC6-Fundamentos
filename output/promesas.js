"use strict";

var promesa = new Promise(function (resolve, reject) {
  // resolve(); //con exito
  reject(); // sin exito 
});
promesa.then(function () {
  alert("Exito");
});
promesa.catch(function () {
  alert("Sin Exito");
});