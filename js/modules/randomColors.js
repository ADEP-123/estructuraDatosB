import Variables from "../variables.js";

const variables = new Variables;

export default function randomColors() {

    const colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#3a86ff']

    let randNum = Math.trunc(Math.random() * colors.length);

    const lastColor = variables.getLastColor

    while (lastColor == colors[randNum]) {
        randNum = Math.trunc(Math.random() * colors.length);
    }

    variables.setLastColor(colors[randNum])

    return colors[randNum]
}