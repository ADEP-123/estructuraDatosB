import Variables from "../variables.js"

export default function dragover() {
    const variables = new Variables;
    currentTower = this;
    variables.setCurrentTower(this)
}