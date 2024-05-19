import Variables from "../../../variables.js"

export default function randomColors() {
    const variables = new Variables;

    const colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#3a86ff', '#523961', '#f22b56', '#a22365', '#9a8fc8', '#ffc0cb', '#2f58a5']

    let randNum = Math.trunc(Math.random() * colors.length);

    const lastColor = variables.getLastColor()

    while (lastColor == colors[randNum]) {
        randNum = Math.trunc(Math.random() * colors.length);
    }

    variables.setLastColor(colors[randNum])

    return colors[randNum]
}