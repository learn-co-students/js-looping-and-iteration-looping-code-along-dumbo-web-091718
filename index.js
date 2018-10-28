// Code your solutions in this file
function printBadges(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }
  return array;
}

function tailsNeverFails() {
  wins = 0
  while (Math.random() >= 0.5) {
    wins += 1;
  }
  return `You got ${wins} tails in a row!`;
}