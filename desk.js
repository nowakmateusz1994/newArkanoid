class Desk {
    constructor(positionX) {
        this.positionX = positionX;
        this.positionY = 0;
        this.deskWidth = 0;
        this.deskHeight = 0;
    }

    changePostionXtoLeft = () => {
        this.positionX -= 10;
        this.desk.style.left = this.positionX + 'px';
    }

    changePostionXtoRight = () => {
        this.positionX += 10;
        this.desk.style.left = this.positionX + 'px';
    }

    deskGenerator = () => {
        this.desk = document.createElement('div');
        this.desk.classList.add('desk');
        this.desk.style.left = this.positionX + 'px';
        arena.appendChild(this.desk);
        
        this.positionY = this.desk.offsetTop;
        this.deskWidth = this.desk.offsetWidth;
        this.deskHeight = this.desk.offsetHeight;
    }
}

const desk = new Desk((arena.offsetWidth / 2) - 40)
desk.deskGenerator();

window.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') {
        if ((desk.positionX + desk.desk.offsetWidth) <= arena.offsetWidth)
            desk.changePostionXtoRight();
    } else if (event.key === 'ArrowLeft') {
        if (desk.positionX >= 0) {
            desk.changePostionXtoLeft();
        }
    }
});