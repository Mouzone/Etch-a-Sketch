const drawing_area = document.querySelector('.drawing-area');

function createDrawingArea(num_rows) {
    for (let i = 0; i < num_rows; i++) {
        const row = document.createElement('div');
        row.style.cssText = 'display: flex; flex-grow: 1; border: 0.5px solid;';
        
        for (let j = 0; j < num_rows; j++) {
            const column_square = document.createElement('div');
            column_square.style.cssText = 'flex-grow: 1; border: 0.5px solid;';
            column_square.addEventListener('mouseenter', () => {
                column_square.style.backgroundColor = 'black';
            });
            row.appendChild(column_square);
        }
        
        drawing_area.appendChild(row);
    }
}

window.onload = function () {
    let num_rows;
    
    do {
        const userInput = window.prompt('Please enter an integer between 0 and 100:');
        num_rows = parseInt(userInput, 10);

        if (!isNaN(num_rows) && Number.isInteger(num_rows) && num_rows >= 0 && num_rows <= 100) {
            alert(`You entered the integer: ${num_rows}`);
        } else {
            alert('Invalid input. Please enter a valid integer between 0 and 100.');
        }
    } while (isNaN(num_rows) || !Number.isInteger(num_rows) || num_rows < 0 || num_rows > 100);

    createDrawingArea(num_rows);
};
