import Variables from "../../../variables.js";
import agregarError from "./agregarError.js";
import showWinWindow from "./showWinWindow.js";

const variables = new Variables
export default function validarSiGana(size, actualTowerlength, currentTowerIndex) {
    const torreInicial = variables.initialTower.value
    if (size == actualTowerlength) {
        if (torreInicial == currentTowerIndex) {
            agregarError("Debe llevar los discos a una torre diferente a la inicial")
        } else {
            showWinWindow()
        }
    }
}