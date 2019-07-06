class Blocks {
    constructor(postionX, postionY, lifes) {
        this.postionX = postionX
        this.postionY = postionY
        this.lifes = lifes
    }
    blockLifes = () => {
        this.lifes--
    }
}