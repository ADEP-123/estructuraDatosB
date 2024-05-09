import Variables from "../variables.j"

const variables = new Variables

export default function isDiscLessThan(currentTowerIndex, disc) {
    const towerContent = variables.getTowerContent();
    let size = towerContent[currentTowerIndex].length;
    if (!towerContent[currentTowerIndex][size - 1]) {
        return true
    } else {
        let sizeTop = disc.style.width.substring(0, disc.style.width.indexOf("p"));
        let sizeBottom = towerContent[currentTowerIndex][size - 1].style.width.substring(0, towerContent[currentTowerIndex][size - 1].syle.width.indexOf("p"))

        return Number(sizeTop) < Number(sizeBottom)
    }

}