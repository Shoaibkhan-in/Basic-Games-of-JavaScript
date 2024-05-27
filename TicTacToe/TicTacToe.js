    let currentPlayer = 'X';

    function makeMove(event) {
        if (event.target.classList.contains('cell') && !event.target.innerHTML) {
            event.target.innerHTML = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            checkWinner();
        }
    }

    var result = document.querySelector(".result");


    function checkWinner() {
        const cells = document.querySelectorAll('.cell');
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                result.innerHTML=`<div class="res"> ${cells[a].innerHTML} wins! </div>`;
                resetBoard();
                return;
            }
        }
        if ([...cells].every(cell => cell.innerHTML)) {
            result.innerHTML=`<div class="res"> It's A Tie </div>`
            resetBoard();
        }
    }

    function resetBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => cell.innerHTML = '');
    }
