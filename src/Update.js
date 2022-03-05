const cellsAliveText = document.getElementById('cellsAlive')
const newCell = document.getElementById("createCell")
function updateHTML(){
    cellsAliveText.innerText = `There are ${formatWhole(data.aliveCells)} Cells currently alive`
}
