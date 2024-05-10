import Variables from "../variables.js"

export default function isOnTop(originTowerindex, disc) {
    const variables = new Variables
    const towerContent = variables.getTowerContent();
    let size = towerContent[originTowerindex].length
    return disc.style.width === towerContent[originTowerindex][size - 1].style.width
}