// Code your solutions in this file


function printBadges(arr) {
  for (let i = 0; i < arr.length; i++) {
    let printVar = i + 1;
    console.log('Welcome ' + arr[i] + '! You are employee #'+ printVar +'.');
  }
  return arr;
};


function tailsNeverFails() {
  var coin;
  let tailsCounter = 0;
  while (coin === "Tails" || coin === undefined) {
    let num = Math.random();
    if (num >= .5) {
      tailsCounter += 1;
      coin = "Tails"
    } else if (num < .5) {
      return 'You got '+tailsCounter+' tails in a row!';
    }
  }

}
