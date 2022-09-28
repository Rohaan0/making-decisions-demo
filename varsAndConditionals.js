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

if (johnSnowHealth + 50 >= 100) {
    johnSnowHealth = 100
} else {
    johnSnowHealth += 50
}

console.log('John Snow health after the health kit is ' + johnSnowHealth)

let coinLandsHeads = true;

if (coinLandsHeads === true){
    console.log("The fight continues")
} else {
    console.log("John is allowed to run away")
}

//jamie attacks john 5 times
for (let i = 0; i < 5; i++) {
    johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
    console.log('john\'s health is now' + johnSnowHealth)
}

// write logic in the for loop if jon's health gets 0 or less, in which case, you will print that John is dead
// and you will stop further loop iterations (see the "break" JS keyword for leaving a loop early)

// Post-lab assignment 2:
//write the for loop (including the logic you wrote for the first assignment) as while loop.
// it should behave exactly the same