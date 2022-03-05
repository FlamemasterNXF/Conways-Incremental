let gameWorld = 'canvas'
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
function createGrid() {
    for (let y = 0; y < data.numRows; y++) {
        for (let x = 0; x < data.numColumns; x++) {
            data.cells.push(new Cell(context, x, y));
        }
    }
}
function isAlive(x, y) {
    if (x < 0 || x >= data.numColumns || y < 0 || y >= data.numRows){return false;}
    return data.cells[gridToIndex(x, y)].alive?1:0;
}
function gridToIndex(x, y){
    return x + (y * data.numColumns);
}
function checkSurrounding () {
    // Loop over all cells
    for (let x = 0; x < data.numColumns; x++) {
        for (let y = 0; y < data.numRows; y++) {

            // Count the nearby population
            let numAlive = isAlive(x - 1, y - 1) + isAlive(x, y - 1) + isAlive(x + 1, y - 1) + isAlive(x - 1, y) + isAlive(x + 1, y) + isAlive(x - 1, y + 1) + isAlive(x, y + 1) + isAlive(x + 1, y + 1);
            let centerIndex = gridToIndex(x, y);

            if (numAlive == 2){
                // Do nothing
                data.cells[centerIndex].nextAlive = data.cells[centerIndex].alive;
            }else if (numAlive == 3){
                // Make alive
                data.cells[centerIndex].nextAlive = true;
            }else{
                // Make dead
                data.cells[centerIndex].nextAlive = false;
            }
        }
    }

    // Apply the new state to the cells
    for (let i = 0; i < data.cells.length; i++) {
        data.cells[i].alive = data.cells[i].nextAlive;
    }
}
