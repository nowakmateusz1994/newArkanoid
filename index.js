let arena = document.querySelector('.arena')
let blockBoard = [];
let index = 0;
let start = document.querySelector('button');
let isGameOn = false;
start.addEventListener('click', gameGenerator)
function gameGenerator() {
    if (!isGameOn) {
        isGameOn = !isGameOn
        let column = 5;
        for (let i = 0; i < 4; i++) {
            let row = 5;
            for (let j = 0; j < 10; j++) {
                blockBoard.push(new Blocks(row, column, i + 1))
                blockBoard[index].createBlock();

                row += 80;
                index++;

            }
            column += 30;
        }
    }
}
