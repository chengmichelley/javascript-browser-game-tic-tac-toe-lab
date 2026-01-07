/*-------------------------------- Constants --------------------------------*/

const board = [];
const turn = [];
const winner = [];
const tie = [];

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr');

const messageEl = document.querySelector('#message');

console.log(squareEls);
console.log(messageEl);

/*-------------------------------- Functions --------------------------------*/

const updateBoard = () => {
    board.forEach((cell,idx) => {
        if(cell === 'X') {
            squareEls[idx].textContent = 'X';
        } else if (cell === 'O') {
            squareEls[idx].textContent = 'O';
        } else {
            squareEls[idx].textContent = '';
        }
    });
};

const updateMessage = () => {
    if(!winner && !tie) {
        if(turn === 'X') {
            messageEl.textContent = `It's X's turn`;
        } else {
            messageEl.textContent = `It's O's turn`;
        }
    } else if(!winner && tie) {
        messageEl.textContent = `It's a tie game!`;
    } else {
        if (turn === 'X') {
            messageEl.textContent = `Congratulations! X wins!`
        } else {
            messageEl.textContent = `Congratulations! O wins!`
        }
    }
};

const render = () => {
    updateBoard();
    updateMessage();
};

const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
};

init();
/*----------------------------- Event Listeners -----------------------------*/



