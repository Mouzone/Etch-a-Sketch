const height = 600.0;
const width = 600.0;
const drawing_area = document.querySelector(div.drawing-area)

function findLength(num_rows){
    length = 600/num_rows
    return length
}

function createRows(length){
    let row = document.createElement('div')
    row.style.width = length;
    row.style.height = width;
    for (let i= 0; i<num_rows; i++){
        drawing_area.appendChild(row)
    }
}