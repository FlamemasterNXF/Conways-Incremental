const cellsAliveText = document.getElementById('cellsAlive')
function updateHTML(){
    cellsAliveText.innerText = `There are ${formatWhole(data.aliveCells)} Cells currently alive`
    setTimeout( () => {
        window.requestAnimationFrame(() => (updateHTML()));
    })
}
