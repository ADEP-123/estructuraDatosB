import Variables from "../variables.js"

const variables = new Variables;

let currentTower = variables.getCurrentTower

export default function dragover() {
    currentTower = this;
    variables.setCurrentTower(this)
}