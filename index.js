// Code your solutions in this file
//for ([initialization]; [condition]; [iteration]) {[loop body]}
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

// Wrapp Gifts
 const gifts = ['teddy bear', 'drone', 'doll'];

 function wrappGifts(gifts){
   for(let i = 0; i < gifts.length; i++){
     console.log(`Wrapped ${gifts[i]} and added a bow!`);
   };
   return gifts
 }
 wrappGifts(gifts)

//Prints Badges & Welcomes with employee position
function printBadges(badges){
 for(let i = 0; i < badges.length; i++ ){
   console.log(`Welcome ${badges[i]}! You are employee #${i+1}.`);
 };
 return badges
}
printBadges(['Ada', 'Brendan', 'Ali']);

// invokes Math.random() to simulate coin flips



function tailsNeverFails() {

  let flip = 'tails';
  let wins = 0;
  while (flip === 'tails') {
    if (Math.random() >= 0.5) {
      wins++;
    } else {
      flip = 'heads'
      return `You got ${wins} tails in a row!`;
    }
  }
}
