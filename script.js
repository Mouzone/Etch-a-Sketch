const height = 600.0;
const width = 600.0;
const drawing_area = document.querySelector('.drawing-area');

function findLength(num_rows) {
    const length = width / num_rows;
    return length;
}

function createRows(length, num_rows) {
    for (let i = 0; i < num_rows; i++){
        const row = document.createElement('div');
        row.style.width = width + 'px';
        row.style.height = length + 'px';
        row.style.border = '1px solid';
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

        row.appendChild(column_square);
    }
    drawing_area.appendChild(row);

}

createRows(findLength(10), 10);
