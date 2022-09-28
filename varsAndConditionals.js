/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let johnSnowAttack = 25
let jamieLannisterAttack = 35

if (johnSnowAttack > jamieLannisterAttack) {
    console.log("John Snow has better attack than Jamie Lannister")
}else if(jamieLannisterAttack > johnSnowAttack){
    console.log("Jamie lanister has a better attack than John Snow")
} else {
    console.log("Jamie Lannister has the same attack as Jon Snow") 
}

let johnSnowHealth = 100
let johnSnowDefense = 0

if (johnSnowHealth <= jamieLannisterAttack){
    console.log("John Snow has been slain.")
} else {
    johnSnowHealth = johnSnowHealth - jamieLannisterAttack
    // johnSnowHealth -= jamieLannisterAttack
    console.log(`John Snow's Health is down to ${johnSnowHealth} `)

}

//John picks up a shield, add to his defense
johnSnowDefense += 25

if (johnSnowHealth <= jamieLannisterAttack - johnSnowDefense){
    console.log("John Snow has been slain")
} else {
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
    console.log(`John Snow's Health is down to ${johnSnowHealth}`)
}