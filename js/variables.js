class Variables {
    constructor() {
        if (!Variables.instance) {
            this.torres = document.querySelectorAll(".zonaTorre");
            this.towerContent = [[], [], []];
            this.size = 6;
            this.discs = "";
            this.sleepTime = 300;
            this.speed = 100;
            this.lastColor = "";
            this.startWidth = 80;
            this.newGameBtn = document.getElementById("newGameBtn");
            this.discSelect = document.getElementById("discSelect");
            this.speedRange = document.getElementById("speedRange");
            this.btnSolve = document.getElementById("btnSolve");
            this.originTower = undefined;
            this.currentTower = undefined;
            Variables.instance = this;
        }
        return Variables.instance
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



}
export default Variables