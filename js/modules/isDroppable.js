import isOnTop from "./isOnTop.js";
import isDiscLessThan from "./isDiscLessThan.js";

export default function isDroppable(originTowerindex, currentTowerIndex, disc) {
    console.log(disc);
    let top = isOnTop(originTowerindex, disc);
    let topDiscIsLess = isDiscLessThan(currentTowerIndex, disc)

    return top && topDiscIsLess
}