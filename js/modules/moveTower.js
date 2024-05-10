import Variables from "../variables.js"
import isDroppable from "./isDroppable.js"

export default function moverTorre(originTowerindex, currentTowerIndex, disc) {
    const variables = new Variables
    const towerContent = variables.getTowerContent()
    const originTower = variables.getOriginTower()
    const currentTower = variables.getCurrentTower()
    if (isDroppable(originTowerindex, currentTowerIndex, disc)) {
        towerContent[currentTowerIndex].push(towerContent[originTowerindex].pop())
        variables.putTowercontent(towerContent)
        originTower.removeChild(disc)
        variables.setOriginTower(originTower)
        currentTower.prepend(disc)
        variables.setCurrentTower(currentTower)
    }
}