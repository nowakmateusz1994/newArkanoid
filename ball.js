class Ball {
    constructor(postionX, postionY, speed = 1, directionX = 1, directionY = 1) {
        this.postionX = postionX;
        this.postionY = postionY;
        this.speed = speed;
        this.directionX = directionX;
        this.directionY = directionY;
    }

    ballMove = () => {
        this.postionX -= this.directionX;
        this.postionY -= this.directionY;
        this.ball.style.left = this.postionX + 'px';
        this.ball.style.top = this.postionY + 'px';

        if(this.postionX === 0 || this.postionX === arena.offsetWidth){
            this.changeDirectionX();
        }
        if(this.postionY === 0 || this.postionY === arena.offsetHeight){
            this.changeDirectionY();
            
        }
    }

    changeDirectionX = () => {
        this.directionX = this.directionX * (-1);
    }
    changeDirectionY = () => {
        // let tabDirectionY = [1, 0.9, 0.8, 0.7]
        this.directionY = this.directionY * (-1);
    }

    ballGenerator = () => {
        this.ball = document.createElement('div');
        this.ball.classList.add('ball');
        this.ball.style.left = this.postionX + 'px';
        this.ball.style.top = this.postionY + 'px';
        arena.appendChild(this.ball);
        // console.log(this)
    }
}

const ball = new Ball(((arena.offsetWidth / 2) - 5), ((arena.offsetHeight / 2) - 5));
ball.ballGenerator();
