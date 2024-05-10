import Variables from "../variables.js"

export default function isDiscLessThan(currentTowerIndex, disc) {
    const variables = new Variables
    const towerContent = variables.getTowerContent();
    let size = towerContent[currentTowerIndex].length;

    if (!towerContent[currentTowerIndex][size - 1]) {
        return true
    } else {
        let sizeTop = disc.style.width.substring(0, disc.style.width.indexOf('p'))
        let sizeBottom = towerContent[currentTowerIndex][size - 1].style.width.substring(0, towerContent[currentTowerIndex][size - 1].style.width.indexOf('p'))

        return Number(sizeTop) < Number(sizeBottom)
    }

}