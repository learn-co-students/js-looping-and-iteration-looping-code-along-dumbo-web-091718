// Code your solutions in this file
function printBadges(array_of_names){
    for (let i = 0; i < array_of_names.length; i++){
    console.log(`Welcome ${array_of_names[i]}! You are employee #${i + 1}.`)
    }
    return array_of_names
}

function tailsNeverFails(){
    counter = 0
    while (Math.random() >= 0.5){
        counter += 1
    }
    return `You got ${counter} tails in a row!`
}
