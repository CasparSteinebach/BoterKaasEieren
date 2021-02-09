console.log("Hij doet het!!")

/*----- constants -----*/
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#speelbord div'));

const messages = document.querySelector('h2');
console.log(squares);
/*----- event listeners -----*/
document.getElementById('speelbord').addEventListener('click', handleTurn);

document.getElementById('reset-button').addEventListener('click', init);
/*----- functions -----*/

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', '',
    ]
    render();
};

init();

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
        //console.log(mark, squares[index]);
    });

    if (turn === 'X') {
        if (win === 'T') { messages.textContent = 'het is gelijkspel!' } else {
            messages.textContent = win ? `${win} heeft gewonnen!` : `Het is de beurt aan het ${turn}-je!`;
        }
    } else {
        if (win === 'T') { messages.textContent = 'het is gelijkspel!' } else {
            messages.textContent = win ? `${win} heeft gewonnen!` : `Het is de beurt aan het ${turn}-tje!`;
        }
    }

}

function handleTurn(event) {
    //console.log("hij klikt")
    let idx =
        squares.findIndex(function(square) {
            return square === event.target;
        });

    board[idx] = turn
    console.log(board)
    turn = turn === 'X' ? 'O' : 'X';

    win = getWinner();
    render();

};

function getWinner() {
    let winner = null;

    winningCombinations.forEach(function(combination, index) {
        if (board[combination[0]] && board[combination[0]] === board[combination[1]] &&
            board[combination[0]] === board[combination[2]])
            winner = board[combination[0]];
    });
    console.log(winner);
    return winner ? winner : board.includes('') ? null : 'T';

}