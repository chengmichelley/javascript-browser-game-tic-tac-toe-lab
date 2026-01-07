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

const init = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();
};

init();

/*----------------------------- Event Listeners -----------------------------*/



