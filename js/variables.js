class Variables {
    constructor() {
        if (!Variables.instance) {
            this.torres = document.querySelectorAll(".zonaTorre");
            this.towerContent = [[], [], []];
            this.size = 3;
            this.discs;
            this.sleepTime = 300;
            this.speed = 100;
            this.lastColor = "";
            this.startWidth = 80;
            this.discSelect = document.getElementById("discSelect");
            this.speedRange = document.getElementById("speedRange");
            this.btnSolve = document.getElementById("btnSolve");
            this.originTower;
            this.currentTower;
            this.initialTower = document.querySelector("#initialSel");
            this.finalTower = document.querySelector("#finalSel");
            this.errorMessagesList = document.querySelector(".alertas");
            this.errorMessageEx = document.querySelector(".alerta");
            this.reintentarButt = document.getElementById("reintentarButt")
            this.winWindow = document.querySelector(".winWindow");
            this.cantMov = 0;
            Variables.instance = this;
        }
        return Variables.instance
    }

    getDiscSelect() {
        return this.discSelect
    }

    getLastColor() {
        return this.lastColor
    }

    setLastColor(color) {
        this.lastColor = color
    }

    getTowerContent() {
        return this.towerContent;
    }

    putTowercontent(newTowerContent) {
        this.towerContent = newTowerContent;
    }

    getTowers() {
        return this.torres
    }

    getStartWidth() {
        return this.startWidth
    }

    getDiscs() {
        return this.discs
    }

    getOriginTower() {
        return this.originTower
    }

    setOriginTower(newOriginTower) {
        this.originTower = newOriginTower
    }

    getCurrentTower() {
        return this.currentTower
    }

    setCurrentTower(newCurrentTower) {
        this.currentTower = newCurrentTower
    }

    getSleepTime() {
        return this.sleepTime
    }

    getSpeed() {
        return this.speed
    }

    putSpeed(newSpeed) {
        this.speed = newSpeed
    }

    getSpeedRange() {
        return this.speedRange
    }

    getNewGameBtn() {
        return this.newGameBtn
    }

    getSolveBtn() {
        return this.btnSolve
    }

    getSize() {
        return this.size
    }

    putSize(newSize) {
        this.size = newSize
    }

    aumentarMovs() {
        this.cantMov++
    }
    getCantMobs() {
        return this.cantMov
    }
    restCantMobs() {
        this.cantMov = 0;
    }


}
export default Variables