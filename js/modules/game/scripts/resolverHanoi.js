import Variables from "../../../variables.js"

const variables = new Variables();

const getHanoiSolutions = (nDiscs) => {
    const solutions = []

    //Sacando cuales seran la posicion inicial y final y el auxiliar segun lo desee el usuario con los select
    let posAux = [0, 1, 2];
    const initialTower = Number(variables.initialTower.value)
    const finalTower = Number(variables.finalTower.value)
    posAux.splice(posAux.indexOf(initialTower), 1)
    posAux.splice(posAux.indexOf(finalTower), 1)
    const auxTower = posAux[0]
    // console.log({initialTower, finalTower, auxTower});

    // funcion recursiva para mover los discos de las torres desde el origen al destino
    const hanoi = (n, origin, destiny, aux) => {
        if (n == 1) {
            // Caso Base: Si solo hay un disco lo mueve al sitio de destino
            solutions.push({ disc: n, origin, destiny })
            return;
        }

        // Mover n - 1 discros desde el origen al auxiliar, usando destino como vara auxiliar
        hanoi(n - 1, origin, aux, destiny)

        // Mover el nesimo disco desde el origen al destino
        solutions.push({ disc: n, origin, destiny })

        // Mover n - 1 discos desde el origen al desitno, usando el origen como vara auxiliar
        hanoi(n - 1, aux, destiny, origin)
    }

    // Iniciar el proceso recursivo con una llamada inicial de la funcion
    if (initialTower != finalTower) {
        hanoi(nDiscs, initialTower, finalTower, auxTower)
    }


    return solutions;
}

export default getHanoiSolutions
