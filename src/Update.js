const cellsAliveText = document.getElementById('cellsAlive')
const essenceText = document.getElementById('essence')
function updateHTML(){
    cellsAliveText.innerText = `There are ${formatWhole(data.aliveCells)} Cells currently alive`
    //essenceText.innerText = `There is ${format(data.essence)} Essence, your Cells generate ${format(essenceGain)}/s`
}
