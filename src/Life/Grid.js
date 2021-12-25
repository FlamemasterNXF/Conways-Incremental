let gameWorld = 'canvas'
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let gameObjects = []
function createGrid()
{
    for (let y = 0; y < data.numRows; y++) {
        for (let x = 0; x < data.numColumns; x++) {
            gameObjects.push(new Cell(context, x, y));
        }
    }
}
function isAlive(x, y)
{
    if (x < 0 || x >= data.numColumns || y < 0 || y >= data.numRows){return false;}
    return gameObjects[gridToIndex(x, y)].alive?1:0;
}
function gridToIndex(x, y){
    return x + (y * data.numColumns);
}
function checkSurrounding ()
{
    // Loop over all cells
    for (let x = 0; x < data.numColumns; x++) {
        for (let y = 0; y < data.numRows; y++) {

            // Count the nearby population
            let numAlive = isAlive(x - 1, y - 1) + isAlive(x, y - 1) + isAlive(x + 1, y - 1) + isAlive(x - 1, y) + isAlive(x + 1, y) + isAlive(x - 1, y + 1) + isAlive(x, y + 1) + isAlive(x + 1, y + 1);
            let centerIndex = gridToIndex(x, y);

            if (numAlive == 2){
                // Do nothing
                gameObjects[centerIndex].nextAlive = gameObjects[centerIndex].alive;
            }else if (numAlive == 3){
                // Make alive
                gameObjects[centerIndex].nextAlive = true;
            }else{
                // Make dead
                gameObjects[centerIndex].nextAlive = false;
            }
        }
    }

    // Apply the new state to the cells
    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].alive = gameObjects[i].nextAlive;
    }
}
