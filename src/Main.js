function lifeLoop() {
    // Check the surrounding of each cell
    checkSurrounding();
    // Clear the screen
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw all the gameobjects
    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].draw();
    }
    // The loop function has reached it's end, keep requesting new frames
    setTimeout( () => {
        window.requestAnimationFrame(() => this.lifeLoop());
    }, 100)
}
window.onload = () => {
    createGrid();
    window.requestAnimationFrame(() => lifeLoop());
}