const promesa = new Promise( (resolve, reject)=>{
    // resolve(); //con exito
    reject(); // sin exito 
} );
promesa.then(()=>{
    alert("Exito")
})
promesa.catch(()=>{
    alert("Sin Exito")
});