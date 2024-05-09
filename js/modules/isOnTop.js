import Variables from "../variables.j"

const variables = new Variables

export default function isOnTop(originTowerindex, disc) {
    const towerContent = variables.getTowerContent();
    let size = towerContent[originTowerindex].length;
    return disc.style.width === towerContent[originTowerindex][size - 1].style.width

}