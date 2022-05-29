(function(){

    // Funcion tradicional
    const miFuncion = function(a: string) {
        return a.toUpperCase();
    }

    // Funcion flecha
    const miFuncionF = (a: string) => a.toUpperCase();

    // Funcion normal con dos parametros
    const sumarN = function(a: number, b: number) {
        return a + b;
    }

    // Funcion flecha con dos parametros
    const sumarF = (a: number, b: number) => a + b;

    const hulk = {
        nombre: 'Hulk',
        smash(){
            setTimeout(() => console.log(this.nombre + ' smash!'), 1500);
        }
    }

    console.log(sumarN(2, 2));
    console.log(sumarF(2, 2));
    
})();



