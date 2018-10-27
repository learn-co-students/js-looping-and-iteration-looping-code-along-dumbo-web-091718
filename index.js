// Code your solutions in this file
function printBadges(badges) {
  for (let i = 0; i < badges.length; i++) {
    console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
  }
  return badges;
}

function tailsNeverFails() {
  let count = 0;
  let flip = 'tails';
  while (flip === 'tails') {
    if (Math.random() >= 0.5) {
      count++;
    } else {
      flip = 'heads'
      return `You got ${count} tails in a row!`;
    }
  }
}
