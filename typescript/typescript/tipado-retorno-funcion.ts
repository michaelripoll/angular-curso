(() => {

    const sumar = (a: number, b: number): number => {
        return a + b;
    };

    const nombre = (): string => 'Hola mundo';
    
    const obtenerSalario = (): Promise<string> => {

        return new Promise((resolve, reject) => {
            resolve('Michael');
        });
    }

    obtenerSalario().then(a => console.log(a.toUpperCase()));

})();