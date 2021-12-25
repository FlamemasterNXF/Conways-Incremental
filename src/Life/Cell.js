//the base code for this is from https://spicyyoghurt.com/tutorials/javascript/conways-game-of-life-canvas
class Cell
{
    static width = 10;
    static height = 10;

    constructor (context, gridX, gridY)
    {
        this.context = context;

        // Store the position of this cell in the grid
        this.gridX = gridX;
        this.gridY = gridY;

        // Make random cells alive
        this.alive = Math.random() > 0.5;
    }

    draw() {
        // Draw a simple square
        this.context.fillStyle = this.alive?'#404040':'#000000';
        this.context.fillRect(this.gridX * Cell.width, this.gridY * Cell.height, Cell.width, Cell.height);
    }
}