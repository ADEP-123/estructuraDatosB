import Variables from "./variables.js";
import sleep from "./modules/util.js";
import getHanoiSolutions from "./modules/resolverHanoi.js";
import randomColors from "./modules/randomColors.js";
import construirTorres from "./modules/construirTorres.js";
import dragenter from "./modules/dragenter.js";
import dragover from "./modules/dragover.js";
import dragstart from "./modules/dragstart.js";
import dragend from "./modules/dragend.js";
import moveTopDisc from "./modules/moveTopDisc.js";

const variables = new Variables;

iniciarJuego()

function iniciarJuego() {
    let towerContent = variables.getTowerContent();
    let torres = variables.getTowers()
    variables.putTowercontent([[], [], []])

    construirTorres(variables.getTowers())

    //Crear discos y colocarlos en la primera torre/vara
    for (let i = 0; i < variables.getSize(); i++) {
        let torre = document.createElement("div");
        torre.classList.add("disc")
        torre.draggable = true
        torre.style.backgroundColor = randomColors();
        torre.style.width = (variables.getStartWidth() - (5 * i)) + "%"
        towerContent[0].push(torre)
        variables.putTowercontent(towerContent)
    }

    //Agregar disco a la primera torre en el DOM
    towerContent[0].forEach(t => {
        torres[0].innerHTML = t.outerHTML + torres[0].innerHTML
    });

    //Agregar eventos de escucha para arrastrar
    for (let i = 0; i < torres.length; i++) {
        torres[i].classList.add("t" + i)
        torres[i].addEventListener("dragenter", dragenter)
        torres[i].addEventListener("dragover", dragover)
    }

    //Obtener las referencias a todos los discos
    const discs = variables.getDiscs()

    discs.forEach(disc => {
        disc.addEventListener("dragstart", dragstart)
        disc.addEventListener("dragend", dragend)
    });
}

//animar movimientos de la solucion
async function mover(movimientos) {
    for (let i = 0; i < movimientos.length; i++) {
        const element = movimientos[i];
        moveTopDisc(element.origin, element.destiny)
        await sleep(5 * variables.getSleepTime() - 14 * variables.getSpeed())
    }
}

variables.getSpeedRange().addEventListener('input', event => {
    variables.putSpeed(event.target.value)
})

variables.getNewGameBtn().addEventListener('click', () => {
    variables.putSize(discSelect.selectedIndex + 1)
    iniciarJuego()
})

variables.getSolveBtn().onclick = function () {
    const movimientos = getHanoiSolutions(variables.getSize())
    mover(movimientos)
}
