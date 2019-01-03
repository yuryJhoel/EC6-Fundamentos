class Usuario{

    constructor(nombre, edad, correo){
        this.nombre = nombre;
        this.edad =edad,
        this.correo = correo
    }
    mostrarSaludo(mensaje){
        return mensaje
    }
    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br>
            <b>Edad:</b> ${this.edad} <br>
            <b>correo:</b> ${this.correo} <br>
            <hr>
        `
    }
}
const yury = new Usuario('Yury',19,"zionlenuz1@gmail.com");
document.write(yury.mostrarInfo())

/*
    Clase Heredado
*/
class Estudiante extends Usuario{
    constructor(nombre, edad, correo, carrera){
        super(nombre, edad, correo);
        this.carrera = carrera;
    }
    mostrarInfo(){
        return `
            <b>Nombre:</b> ${this.nombre} <br>
            <b>Edad:</b> ${this.edad} <br>
            <b>Correo:</b> ${this.correo} <br>
            <b>Carrera:</b> ${this.carrera} <br>
            <hr>
        `
    }
}


const alejandro = new Estudiante("Alejandro",15,"alej@gmail.com","Senior Developer");
document.write(alejandro.mostrarInfo())

