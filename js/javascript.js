console.log("Hij doet het!!")

/*----- constants -----*/
let board
    /*----- app's state (variables) -----*/

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#speelbord div'));
console.log(squares);
/*----- event listeners -----*/

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
        console.log(mark, squares[index]);
    });
}