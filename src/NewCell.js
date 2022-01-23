function createCustomCell(){
    let x = Math.round(getRandom(0, data.numColumns-1))
    let y = Math.round(getRandom(0, data.numRows-1))
    let chosenIndex = gridToIndex(x,y)
    data.cells[chosenIndex].alive = true
    newCell.innerText = `You magically brought Cell ${chosenIndex} to life!`
}