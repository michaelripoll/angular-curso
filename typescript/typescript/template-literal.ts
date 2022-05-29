(function(){

    function getEdad(){
        return 100 + 100 + 300;
    }
    
    const nombre = 'Michael';
    const apellido = 'Ripoll';
    const edad = 28;

    //const salida = `${nombre} ${apellido} (${edad})`;
    //const salida = `${nombre} ${apellido} (${edad + 100})`;
    const salida = `${nombre} ${apellido} (${getEdad()})`;


    console.log(salida);
    
})();



