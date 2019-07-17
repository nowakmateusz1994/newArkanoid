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

    deskGenerator = () => {
        this.desk = document.createElement('div');
        this.desk.classList.add('desk');
        this.desk.style.left = this.positionX + 'px';
        arena.appendChild(this.desk);
        // console.log(this)
    }
}

const desk = new Desk((arena.offsetWidth / 2) - 40)
desk.deskGenerator();