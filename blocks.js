let blockColor = ['green', 'blue', 'purple', 'black', 'pink', 'yellow']
class Blocks {
    constructor(postionX, postionY, lifes, blockIndex) {
        this.postionX = postionX,
            this.postionY = postionY,
            this.lifes = lifes,
            this.blockIndex = blockIndex,
            this.blockWidth,
            this.blockHeight

    }
    blockLifes = () => {
        if (this.lifes > 1) {
            this.lifes--;
            this.block.style.backgroundColor = blockColor[this.lifes - 1];
        } else {
            if (this.blockIndex < blockBoard.length-1) {
                blockBoard.splice(this.blockIndex, 1);
            } else {
                blockBoard.pop();
            }
            this.block.remove();
        }
    }

    createBlock = () => {
        this.block = document.createElement('div');
        this.block.classList.add('blocks');
        this.block.style.left = this.postionX + 'px';
        this.block.style.top = this.postionY + 'px';
        this.block.style.backgroundColor = blockColor[this.lifes - 1];
        arena.appendChild(this.block);
        this.blockWidth = this.block.offsetWidth;
        this.blockHeight = this.block.offsetHeight;
    }
}