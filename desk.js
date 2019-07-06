class Desk {
    constructor(positionX) {
        this.positionX = positionX;
    }

    changePostionXtoLeft = () => {
        this.positionX--;
    }

    changePostionXtoRight = () => {
        this.positionX++;
    }
}