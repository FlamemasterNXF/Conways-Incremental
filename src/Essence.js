let essenceGain = 0
function increaseEssence(i){
    data.essence += i
}
function calculateEssenceGain(){
    essenceGain = (data.aliveCells/10/10)+1
}