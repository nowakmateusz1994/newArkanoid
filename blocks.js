class Blocks {
    constructor(postionX, postionY, lifes) {
        this.postionX = postionX
        this.postionY = postionY
        this.lifes = lifes
    }
    blockLifes = () => {
        this.lifes--
    }

    createBlock = () => {
        this.block = document.createElement('div');
        this.block.classList.add('blocks');
        this.block.style.left = this.postionX + 'px';
        this.block.style.top = this.postionY + 'px';
        this.block.style.backgroundColor = `hsla(120,${100 / this.lifes}%,50%,1)`;
        arena.appendChild(this.block);
        console.log('asdfa')
    }
}