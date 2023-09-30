
const drawing_area = document.querySelector('.drawing-area');

function createRows(num_rows) {
    for (let i = 0; i < num_rows; i++){
        const row = document.createElement('div');
        row.classList.add("row")
        row.style.border = '1 px solid';
        row.style.display = "flex"
        row.style.flexGrow = "1"
        row.style.flexBasis = "auto"
        createColumns(row, num_rows);
    }
}

function createColumns(row, num_rows) {

    for (let i = 0; i < num_rows; i++) {
        const column_square = document.createElement('div');
        column_square.classList.add("square")
        column_square.style.flexGrow = "1"
        column_square.style.flexBasis = "auto"

        column_square.style.border= '1px solid';
        column_square.addEventListener('mouseenter', function () {
            column_square.style.backgroundColor = 'black';
        });
        row.appendChild(column_square);
    }
    drawing_area.appendChild(row);
}

window.onload = function () {
    let num_rows;
    
    do {
        // Display a prompt and store the user's input as a string
        const userInput = window.prompt('Please enter an integer between 0 and 100:');
        
        // Convert the user input to an integer
        num_rows = parseInt(userInput, 10);

        // Check if the user entered a valid integer within the range
        if (!isNaN(num_rows) && Number.isInteger(num_rows) && num_rows >= 0 && num_rows <= 100) {
            alert(`You entered the integer: ${num_rows}`);

        } else {
            alert('Invalid input. Please enter a valid integer between 0 and 100.');
        }
    } while (isNaN(num_rows) || !Number.isInteger(num_rows) || num_rows < 0 || num_rows > 100);

    createRows(num_rows)
};


