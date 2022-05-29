(() => {

    console.log('Inicio');

    const prom1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Se termino en timeout');
        }, 1500);
    });

    prom1.then(mensaje => console.log(mensaje))
    .catch(error => console.log('Error en la promesa', error));

    console.log('Fin');

})();



