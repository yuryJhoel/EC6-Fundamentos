import { mensajeAlerta, saludo } from "./modulos/mensajeAlerta";
import { Persona } from "./modulos/clasePersona";

mensajeAlerta('Hola Mundo')
console.log(saludo("Saludando a todos de desde Webpack 2"))

const juan = new Persona("Juan", 15);
juan.mostrarInfo();
