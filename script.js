const height = 600.0;
const width = 600.0;
const drawing_area = document.querySelector(div.drawing-area)

function findLength(num_rows){
    length = 600/num_rows
    return length
}

function createRows(length, num_rows){

    let row = document.createElement('div')
    row.style.width = length;
    row.style.height = width;
    row.style.border = "2px solid"

    for (let i= 0; i<num_rows; i++){
        row = createColumns(row, length)
        drawing_area.appendChild(row)
    }
}

function createColumns(row, length, num_rows){

    let column_square = document.createElement('div')
    column_square.style.width = length;
    column_square.style.height = length;
    column_square.style.border = "2px solid"

    for (let i= 0; i<num_rows; i++){
        row.appendChild(column_square)
    }
}

