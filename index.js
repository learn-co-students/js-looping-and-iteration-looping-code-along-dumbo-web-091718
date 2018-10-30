// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`)
  }
  return names;
}

function tailsNeverFails() {
  let flip = Math.random();
  let counter = 0;

  while (flip >= 0.5) {
    counter++
    flip = Math.random()
  }
  return `You got ${counter} tails in a row!`
}
