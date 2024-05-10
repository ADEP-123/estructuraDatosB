import Variables from "../variables.js"

export default function getTopDisc(towerIndex) {
    const variables = new Variables;
    const towerContent = variables.getTowerContent();
    let discs = variables.getDiscs();
    console.log({ towerIndex, discs });
    let size = towerContent[towerIndex].length;
    let sizeDisc = towerContent[towerIndex][size - 1].style.width
    let indexDisc = discs.length - 1
    // let indexDisc =  - 1
    discs.forEach((el, index) => {
        if (el.style.width === sizeDisc) {
            indexDisc = index
        }
    })
    return discs[indexDisc]
}