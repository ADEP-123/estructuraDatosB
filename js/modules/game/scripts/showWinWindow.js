import Variables from "../../../variables.js";

const variables = new Variables

export default function showWinWindow() {
    const h1 = variables.winWindow.querySelector("h1");
    h1.innerHTML = `¡Has Ganado en ${variables.getCantMobs()} movimientos!`
    variables.winWindow.style.display = "flex"
}