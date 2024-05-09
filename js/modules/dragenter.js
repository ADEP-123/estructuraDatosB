import Variables from "../variables.js"

const variables = new Variables;

let originTower = variables.getOriginTower

export default function dragenter() {
    if (!originTower) {
        originTower = this;
        variables.setOriginTower(this)
    }
}