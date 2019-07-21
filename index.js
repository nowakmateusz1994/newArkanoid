let arena = document.querySelector('.arena')
let blockBoard = [];
let index = 0;
let start = document.querySelector('button');
let isGameOn = false;

let gameStart = () => {
    ball.ballMove();
    blockBoard.map((block) => {
        if (
            ((ball.postionX >= block.postionX) && (ball.postionX <= (block.postionX + block.blockWidth)))
            &&
            ((ball.postionY >= block.postionY) && (ball.postionY <= (block.postionY + block.blockHeight)))
        ){
            block.blockLifes();
            ball.changeDirectionX();
            ball.changeDirectionY();
        }
    })
}

start.addEventListener('click', gameGenerator)
function gameGenerator() {
    if (!isGameOn) {
        isGameOn = !isGameOn
        let column = 5;
        for (let i = 0; i < 4; i++) {
            let row = 5;
            for (let j = 0; j < 10; j++) {
                blockBoard.push(new Blocks(row, column, i + 1, index))
                blockBoard[index].createBlock();
                row += 80;
                index++;
            }
            column += 30;
        }

        index = setInterval(gameStart, 0.005)
    }

}


