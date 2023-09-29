const height = 600.0;
const width = 600.0;
const drawing_area = document.querySelector('.drawing-area');

function findLength(num_rows) {
    const length = height / num_rows;
    return length;
}

function createRows(length, num_rows) {
    for (let i = 0; i < num_rows; i++){
        const row = document.createElement('div');
        row.style.width = width + 'px';
        row.style.height = length + 'px';
        row.style.border = '1 px solid';
        row.style.display = "flex"
        createColumns(row, length, num_rows);
    }
}

function createColumns(row, length, num_rows) {

    for (let i = 0; i < num_rows; i++) {
        const column_square = document.createElement('div');
        column_square.classList.add("square")
        column_square.style.width = length + 'px';
        column_square.style.height = length + 'px';
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

    createRows(findLength(num_rows), num_rows)
};


