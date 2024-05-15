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
            this.newGameBtn = document.getElementById("newGameBtn");
            this.discSelect = document.getElementById("discSelect");
            this.speedRange = document.getElementById("speedRange");
            this.btnSolve = document.getElementById("btnSolve");
            this.originTower;
            this.currentTower;
            this.initialTower = document.querySelector("#initialSel");
            this.finalTower = document.querySelector("#finalSel");
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


}
export default Variables