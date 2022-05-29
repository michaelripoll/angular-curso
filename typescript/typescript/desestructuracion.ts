(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }

    const extraer = ({nombre, poder}: any) => {
        //const {nombre, clave, poder} = avenger;

        console.log(nombre);
        console.log(poder);
    }

    // extraer(avenger);

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    // const [thor, ironman, spiderman] = avengers;
    // console.log(thor);
    // console.log(ironman);
    // console.log(spiderman);

    const [, , spiderman] = avengers;

    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }

    extraerArr(avengers);
})();



