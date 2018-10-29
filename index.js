// Code your solutions in this file
function printBadges(employees) {
    for(i=0; i < employees.length; i++){
        console.log(`Welcome ${employees[i]}! You are employee #${i+1}.`)
    }
    return employees 
}

function tailsNeverFails(){
    counter = 0
    while(Math.random() >= .5){
        counter++
    }
    return `You got ${counter} tails in a row!`
}