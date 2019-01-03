const nombreUsuario = (nombre, pais="Peru", correo, telefono)=> {
    return `Nombre: ${nombre} País: ${pais} Correo:${correo} Telefono: ${telefono} `
}
console.log(nombreUsuario("Yury", "Perú", "zionlenuz1@gmail.com",9729929761));
console.log(nombreUsuario("Adriana"))