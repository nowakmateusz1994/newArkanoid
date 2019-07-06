class Ball {
    constructor(postionX, postionY, speed, directionX, directionY) {
        this.postionX = postionX;
        this.postionY = postionY;
        this.speed = speed;
        this.directionX = directionX;
        this.directionY = directionY;
    }
    avergeSpeed = () => {
        this.speed++;
    }

    changeDirectionX = () => {
        this.directionX = !this.directionX;
    }
    changeDirectionY = () => {
        // let tabDirectionY = [1, 0.9, 0.8, 0.7]
        this.directionY = !this.directionY;
    }
}