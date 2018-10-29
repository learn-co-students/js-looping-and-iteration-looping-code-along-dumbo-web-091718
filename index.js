// Code your solutions in this file


function printBadges(employee){
  // const arr = [];
  // console.log("hey");
  for (let i = 0; i < employee.length; i++){
    console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
    // arr.push(employee)
  }
  return employee;
}


function tailsNeverFails() {
  let number = 1;
  let count = 0;
  while (number >= 0.5) {
    // debugger;
    number = Math.random()
    // console.log(number);
    if (number >= 0.5) {
      console.log(count++);
    }
  }
  return `You got ${count} tails in a row!`;
}
