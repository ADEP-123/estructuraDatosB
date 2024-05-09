import Variables from "../variables.js"
import moverTorre from "./moveTower.js";

const variables = new Variables;

export default function dragend() {
    const originTower = variables.getOriginTower
    const currentTower = variables.getCurrentTower
    let originTowerindex = originTower.classList[1][1]
    let currentTowerindex = currentTower.classList[1][1]
    this.classList.remove('is-dragging')
    moverTorre(originTowerindex, currentTowerindex, this)

    variables.setOriginTower(undefined);
    originTowerindex = undefined;
}