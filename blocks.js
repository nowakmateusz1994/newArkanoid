let blockColor = ['green', 'blue', 'purple','black','pink', 'yellow']
class Blocks {
    constructor(postionX, postionY, lifes, blockIndex) {
        this.postionX = postionX
        this.postionY = postionY
        this.lifes = lifes
        this.blockIndex = blockIndex
    }
    blockLifes = () => {
        this.lifes--
    }

    createBlock = () => {
        this.block = document.createElement('div');
        this.block.classList.add('blocks');
        this.block.style.left = this.postionX + 'px';
        this.block.style.top = this.postionY + 'px';
        // this.block.style.backgroundColor = `hsla(120,${100 / this.lifes}%,50%,1)`;
        this.block.style.backgroundColor = blockColor[this.lifes-1];
        arena.appendChild(this.block);
        this.block.addEventListener('click' , ()=>{
            console.log(this.blockIndex)
        })
    }
}