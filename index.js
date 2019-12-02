const strat = document.querySelector('button');
const arena = document.querySelector('.arena');
const arenaRight = arena.offsetWidth;
const arenaBottom = arena.offsetHeight;

const popup = document.querySelector('.popup');
const info = document.querySelector('.masage');

const score = document.querySelector(".scores");
let points = 0;

const lifes = document.querySelector('.lifes');
let life = 0;
const substractLife = function(){
    if(life>1){
        ballPostionX = 395;
        ballPostionY = 225;
        ball.style.left = ballPostionX + 'px';
        ball.style.top = ballPostionY + 'px';
        let i = 3;
        setTimeout(ballMove, 3000);
        life--;
        lifes.innerHTML = life;
    }
    else{
        popup.style.zIndex = 99;
        popup.style.opacity = 1;
        info.innerHTML = "You LOSE"
    }

        
}


let blockBoard = [];
let isTurnOn = false;

//blok odbijający piłkę(deska)

let desk = document.createElement('div');
desk.classList.add('desk');
let deskpostion = 350;
desk.style.left = deskpostion + 'px';
arena.appendChild(desk);

//bloki

const blockRemove = function () {
    blockBoard.forEach(function (el) {

        if ((ballPostionX >= el.offsetLeft && ballPostionX <= (el.offsetLeft + el.offsetWidth)) && (ballPostionY >= el.offsetTop && ballPostionY <= el.offsetTop + el.offsetHeight)) {
            changeBallDirectionY();
            el.remove();
            points += 10;
            score.innerHTML = points;
        }

    })
}


// piłka 

let ball = document.createElement('div');
ball.classList.add('ball');
let ballPostionX = 395;
let ballPostionY = 225;
let ballDirectionX = 1;
let ballDirectionY = 1;
ball.style.left = ballPostionX + 'px';
ball.style.top = ballPostionY + 'px';
ballWidth = ball.offsetWidth;
ballHeight = ball.offsetHeight;
arena.appendChild(ball);

const changeBallDirectionX = function () {
    ballDirectionX = ballDirectionX * (-1);
}

const changeBallDirectionY = function () {
    ballDirectionY = ballDirectionY * (-1);
}

const deskMove = function (e) {
    if (e.key === "ArrowRight") {
        if (deskpostion < arenaRight - desk.offsetWidth) {
            deskpostion += 10;
            desk.style.left = deskpostion + "px";
        }
    } else if (e.key === "ArrowLeft") {
        if (deskpostion > 0) {
            deskpostion -= 10;
            desk.style.left = deskpostion + "px";

        }
    }
}






const ballMove = function () {
    ballPostionX += ballDirectionX;
    ballPostionY += ballDirectionY;
    ball.style.left = ballPostionX + 'px';
    ball.style.top = ballPostionY + 'px';

    if (ballPostionX <= 0 || ballPostionX >= (arenaRight - ballWidth)) {
        changeBallDirectionX();
    }

    if (ballPostionY <= 0) {
        changeBallDirectionY();
    }

    if ((ballPostionX >= desk.offsetLeft && ballPostionX <= (desk.offsetLeft + desk.offsetWidth)) && (ballPostionY >= desk.offsetTop && ballPostionY <= desk.offsetTop + desk.offsetHeight)) {

        changeBallDirectionY();

    }



    blockRemove();

    if( ballPostionY >= arenaBottom - ballHeight){
        substractLife();
        return;
    }

    if (points < blockBoard.length * 10) {
        setTimeout(ballMove, 10)
    } else {
        popup.style.zIndex = 99;
        popup.style.opacity = 1;
        info.innerHTML = "You WIN"
    }

}




strat.addEventListener('click', function () {
    if (isTurnOn === false) {
        isTurnOn = !isTurnOn;
        let left = 0;
        let top = 0;
        points = 0;
        life = 3;
        lifes.innerHTML = life;
        for (let rows = 0; rows < 5; rows++) {
            for (let columns = 0; columns < 10; columns++) {
                const block = document.createElement('div');
                block.classList.add('blocks');
                block.style.top = (top + 5 + 'px');
                block.style.left = (left + 5 + 'px');
                arena.appendChild(block);
                left += 80;
                blockBoard.push(block);
            }
            top += 30;
            left = 0;
        }


    }
    setTimeout(ballMove, 10)
})


document.addEventListener('keydown', deskMove)