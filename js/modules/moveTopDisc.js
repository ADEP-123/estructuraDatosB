import Variables from "../variables.js"
import moverTorre from "./moveTower.js"
import getTopDisc from "./getTopDisc.js";

export default function moveTopDisc(originTowerIndex, destinyTowerIndex) {
    const variables = new Variables;
    const towers = variables.getTowers()
    let originTower = variables.getOriginTower()
    let currentTower = variables.getCurrentTower()
    originTower = towers[originTowerIndex]
    variables.setOriginTower(originTower)
    currentTower = towers[destinyTowerIndex]
    variables.setCurrentTower(currentTower)
    let disc = getTopDisc(originTowerIndex)
    moverTorre(originTowerIndex, destinyTowerIndex, disc)
}