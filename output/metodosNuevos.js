"use strict";

var texto = "reanimate amigo yury";
console.log("El texto comienza con a: ".concat(texto.toLowerCase().startsWith('r')));
console.log("El texto comienza con a: ".concat(texto.toLowerCase().endsWith('o')));
console.log("El texto incluye yury ".concat(texto.includes('yury')));
var amigos = ['ryhan', 'cornelio', 'Maldtingsasd'];
console.log('ryhan esta entre mis amigos?' + amigos.includes('ryhan'));
console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
}));
console.log(amigos.findIndex(function (amigo) {
  return amigo == "cornelio";
}));