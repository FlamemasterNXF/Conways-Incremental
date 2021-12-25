function lifeLoop() {
    // Check the surrounding of each cell
    checkSurrounding();
    // Clear the screen
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw all the gameobjects
    for (let i = 0; i < data.cells.length; i++) {
        data.cells[i].draw();
    }
    // The loop function has reached it's end, keep requesting new frames
    setTimeout( () => {
        window.requestAnimationFrame(() => lifeLoop());
    }, 100)
}
function cellsLoop(){
    let tempAlive = 0
    for(let i=0;i<data.cells.length;i++){
        if (data.cells[i].alive) tempAlive++
    }
    data.aliveCells = tempAlive
}
function calculationsLoop(){
    calculateEssenceGain()
}
function gameLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    cellsLoop()
    calculationsLoop()
    increaseEssence(essenceGain*diff)
    updateHTML()
}
window.onload = () => {
    createGrid();
    window.requestAnimationFrame(() => lifeLoop());
    load()
}
window.setInterval(function(){
    gameLoop()
}, 20);