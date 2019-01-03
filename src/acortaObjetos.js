const createObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo(){
            return `${nombre} tiene ${edad} años`;
        }
    }
}
console.log(createObjeto("Ricardo",21).mostrarInfo())