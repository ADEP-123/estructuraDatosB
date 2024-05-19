import Variables from "../../variables.js"
import sleep from "./scripts/util.js";
import getHanoiSolutions from "./scripts/resolverHanoi.js";
import randomColors from "./scripts/randomColors.js";
import construirTorres from "./scripts/construirTorres.js";
import validarSiGana from "./scripts/validarSiGana.js";
import agregarError from "./scripts/agregarError.js";

//iniciar la clase variables
const variables = new Variables

// traer las torres
const torres = variables.getTowers();

// Inicializar el tower content
let towerContent = variables.getTowerContent()


// Inicializando el tamaño de los discos y los discos
let size = variables.getSize();
let discs = variables.getDiscs();

// Llamando a el sleeptime y la velocidad
const sleepTime = variables.getSleepTime()
let speed = variables.getSpeed()

// tamaño inicial de el ancho de los discos
const startWidth = variables.getStartWidth();


// html elements
const discSelect = variables.getDiscSelect();
const speedRange = variables.getSpeedRange();
const btnSolve = variables.getSolveBtn();

// variables para detectar los discos al moverlos
let currentTower = variables.getCurrentTower()
let originTower = variables.getOriginTower()


// iniciarJuego
iniciarJuego()

function iniciarJuego() {
    const initialTower = Number(variables.initialTower.value);
    // Limpiar el contenido de las torres
    towerContent = [[], [], []]
    variables.putTowercontent(towerContent)

    // Construir las torres con las varas y discos
    construirTorres(torres)

    // Crear discos y ubicarlos en la primera torre
    for (let i = 0; i < size; i++) {
        let tower = document.createElement('div')
        tower.classList.add('disc')
        tower.draggable = true
        tower.style.backgroundColor = randomColors()
        tower.style.width = (startWidth - (7 * i)) + '%'
        towerContent[initialTower].push(tower)
    }

    // Agregar discos a la primera torre en el dom
    towerContent[initialTower].forEach(t => {
        torres[initialTower].innerHTML = t.outerHTML + torres[initialTower].innerHTML
    })

    // Aggregar eventos de escucha para mover los discos
    for (let i = 0; i < torres.length; i++) {
        torres[i].classList.add('t' + i)
        torres[i].addEventListener('dragenter', dragenter)
        torres[i].addEventListener('dragover', dragover)
    }

    // Obtener todos los discos
    discs = document.querySelectorAll('.disc')
    // console.log(discs);

    discs.forEach(disc => {
        disc.addEventListener('dragstart', dragstart)
        disc.addEventListener('dragend', dragend)
    })
}

// manejador de evento para el dragenter
function dragenter() {
    if (!originTower) {
        originTower = this
    }
}

// manejador de evento para el dragover
function dragover() {
    currentTower = this
}

// manejador de evento para el dragstart
function dragstart() {
    this.classList.add('is-dragging')
}

// manejador de evento para el dragend
function dragend() {
    let originTowerIndex = originTower.classList[1][1]
    let currentTowerIndex = currentTower.classList[1][1]
    this.classList.remove('is-dragging')

    moveTower(originTowerIndex, currentTowerIndex, this)

    originTower = undefined
    originTowerIndex = undefined
}

// Mover el discro desde el origen a la nueva torre
function moveTower(originTowerIndex, currentTowerIndex, disc) {
    if (isDroppable(originTowerIndex, currentTowerIndex, disc)) {
        towerContent[currentTowerIndex].push(towerContent[originTowerIndex].pop())
        originTower.removeChild(disc)
        currentTower.prepend(disc)
        validarSiGana(towerContent[currentTowerIndex].length, size,currentTowerIndex)
    }
}

// Mirar si el disco puede ser posicionado en la torre
function isDroppable(originTowerIndex, currentTowerIndex, disc) {
    let top = isOnTop(originTowerIndex, disc)
    let topDiscIsLess = isDiscLessThan(currentTowerIndex, disc)
    return top && topDiscIsLess
}

// Mirar si el disco elegido esta en el tope de la torre de origen
function isOnTop(originTowerIndex, disc) {
    let size = towerContent[originTowerIndex].length
    const isTop = disc.style.width === towerContent[originTowerIndex][size - 1].style.width
    if (isTop == false) {
        agregarError("El disco debe estar en el tope de la torre para poderlo mover")
    }
    return isTop
}

// Mirar si el disco es menor al primero de la nueva torre
function isDiscLessThan(currentTowerIndex, disc) {
    let size = towerContent[currentTowerIndex].length

    if (!towerContent[currentTowerIndex][size - 1]) {
        return true
    } else {
        let sizeTop = disc.style.width.substring(0, disc.style.width.indexOf('%'))
        let sizeBottom = towerContent[currentTowerIndex][size - 1].style.width.substring(0, towerContent[currentTowerIndex][size - 1].style.width.indexOf('%'))
        const isLessThan = Number(sizeTop) < Number(sizeBottom)
        if (isLessThan == false) {
            agregarError("El disco debe ser menor que el existente")
        }
        return isLessThan
    }
}

//Mover el disco desde el tope de la anterior torre al tope de la nueva
function moveTopDisc(originTowerIndex, destinyTowerIndex) {
    originTower = torres[originTowerIndex]
    currentTower = torres[destinyTowerIndex]
    let disc = getTopDisc(originTowerIndex)
    moveTower(originTowerIndex, destinyTowerIndex, disc)
}

// Obtener el dico tope de la torre
function getTopDisc(towerIndex) {
    let size = towerContent[towerIndex].length

    let sizeDisc = towerContent[towerIndex][size - 1].style.width
    let indexDisc = -1
    discs.forEach((el, index) => {
        if (el.style.width === sizeDisc) {
            indexDisc = index
        }
    })
    return discs[indexDisc]
}

// Animar los movimientos de la solucion
async function moves(movements) {
    for (let i = 0; i < movements.length; i++) {
        const element = movements[i];
        moveTopDisc(element.origin, element.destiny)
        await sleep(5 * sleepTime - 14 * speed)
    }
}

// Game class
class Game {
    // metodos para iniciar un nuevo juego
    newGame = () => {
        // Evento de escucha para setear la velocidad
        speedRange.addEventListener('input', event => {
            speed = event.target.value
        })

        // Evento de escucha para un nuevo juego
        variables.discSelect.addEventListener('change', () => {
            size = discSelect.selectedIndex + 1
            // console.log(discSelect);
            iniciarJuego()
        })

        // Evento de escucha para el boton de resolver  
        btnSolve.onclick = function () {
            const movements = getHanoiSolutions(size)
            movements.length == 0 ? agregarError("La torre inicial y final no pueden ser la misma") : moves(movements);

        }

        variables.initialTower.addEventListener("change", e => {
            e.preventDefault();
            e.stopPropagation();
            size = discSelect.selectedIndex + 1
            iniciarJuego()
        })

        //Eliminar el mensaje de error por default:
        document.addEventListener("DOMContentLoaded", e => {
            e.preventDefault()
            e.stopPropagation()
            variables.errorMessagesList.innerHTML = "";
        })

        //evento de escucha para el boton reintentar
        variables.reintentarButt.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            location.reload();
        })
    }
}

export default Game