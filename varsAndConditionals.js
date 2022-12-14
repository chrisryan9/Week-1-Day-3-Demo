/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Anakin Obiwan.
*/ 

let ObiwanAttack = 25
let AnakinAttack = 35

if(ObiwanAttack > AnakinAttack){
    console.log('Obiwan is stronger')
}else if(AnakinAttack > ObiwanAttack){
    console.log('Anakin has the power!')
}else{
    console.log('The force is with them both')
}

let ObiwanHealth = 100
let ObiwanDefense = 0

ObiwanDefense += 25

if(ObiwanHealth <= (AnakinAttack - ObiwanDefense)){
    console.log("Obi-wan has been slain. At least we don't have to deal with Rey.")
}else{
    ObiwanHealth -= (AnakinAttack - ObiwanDefense)
    console.log(`Obi-wans health is ${ObiwanHealth}.`)
}

if(ObiwanHealth + 50 >= 100){
    ObiwanHealth = 100
    console.log('Thanks to bacta, Obi is at full health.')
}else{
    console.log(`Thanks to bacta, Obi has ${ObiwanHealth} health.`)
    ObiwanHealth += 50
}

let coinLandsHeads = true

if(coinLandsHeads === true){
    console.log('The fight continues!')
}else{
    console.log('Obi-wan is allowed to retreat')
}

for(let i = 0; i < 5; i++){
    ObiwanHealth -= (AnakinAttack - ObiwanDefense)
    console.log(`Obi-wans health is ${ObiwanHealth}`)
}

while(ObiwanHealth > 0){
    ObiwanHealth -= (AnakinAttack - ObiwanDefense)
    console.log(`Obi-wans health is ${ObiwanHealth}`)

    if(ObiwanHealth <= 0)
    console.log("Obi-wan has been slain. At least we don't have to deal with Rey.")
}

console.log('This was a good fight. Kinda..')