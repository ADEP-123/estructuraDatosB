import Variables from "./variables.js";
import sleep from "./modules/util.js";
import getHanoiSolutions from "./modules/resolverHanoi.js";
import randomColors from "./modules/randomColors.js";
import construirTorres from "./modules/construirTorres.js";
import dragenter from "./modules/dragenter.js";
import dragover from "./modules/dragover.js";
import dragstart from "./modules/dragstart.js";
import dragend from "./modules/dragend.js";

const variables = new Variables;

function iniciarJuego() {
    let towerContent = variables.getTowerContent;
    const torres = variables.getTowers
    variables.putTowercontent([[], [], []])

    construirTorres(variables.getTowers)

    //Crear discos y colocarlos en la primera torre/vara
    for (let i = 0; i < array.length; i++) {
        let torre = document.createElement("div");
        torre.classList.add("disc")
        torre.draggable = "true"
        tower.style.backgroundColor = randomColors();
        tower.style.width = (variables.getStartWidth - (5 * i)) + "%"
        towerContent[0].push(tower)
        variables.putTowercontent(towerContent)
    }

    //Agregar dico a la primera torre en el DOM
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
    const discs = variables.getDiscs

    discs.forEach(disc => {
        disc.addEventListener("dragstart", dragstart)
        disc.addEventListener("dragend", dragend)
    });
}

