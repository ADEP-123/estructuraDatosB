import Variables from "../variables.js"

export default function dragenter() {
    const variables = new Variables;
    let originTower = variables.getOriginTower()
    if (!originTower) {
        originTower = this;
        variables.setOriginTower(this)
    }
}