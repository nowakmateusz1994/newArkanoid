class Desk {
    constructor(positionX) {
        this.positionX = positionX;
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
        // console.log(this)
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