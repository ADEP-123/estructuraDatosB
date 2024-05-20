import Variables from "../../../variables.js";
import agregarError from "./agregarError.js";
import showWinWindow from "./showWinWindow.js";

const variables = new Variables
export default function validarSiGana(size, actualTowerlength, currentTowerIndex) {
    const torreInicial = variables.initialTower.value
    const torreFinal = variables.finalTower.value
    if (size == actualTowerlength) {
        if (torreInicial == currentTowerIndex) {
            agregarError("Debe llevar los discos a una torre diferente a la inicial")
            return
        } else {
            if (torreFinal != currentTowerIndex) {
                agregarError(`Esta no es la torre final, recuerde que la torre final es la ${Number(torreFinal) +1}`)
                return
            }
            showWinWindow()
        }
    }
}