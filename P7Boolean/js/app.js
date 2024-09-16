/*
const birthYear = 2010;
const currentYear = 2024;
let ageOfPerson = currentYear - birthYear;

// Save to a let variable named isChild, when the age is from 0 to 10
// 10 or lower
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);
console.log(isChild)

let isTeenager = ageOfPerson >= 11 && ageOfPerson <= 17;
console.log(isTeenager);

let isAdult = ageOfPerson >= 18;
console.log(isAdult);

 */

let heightFromGround = 20
let playerTouchGround = heightFromGround === 0

let playerHasJetPack = true;

if (playerTouchGround) {
  //Runs when the playerTouchGround = true;
  console.log('player is on the ground!')
  console.log('Player can jump!')
}

else if (playerHasJetPack) {
  //Runs when playerHasJetPack
  console.log('Player can Jet Away');
}

else {
  //Runs when the playerTouchGround = false && playerHasJetpack = false;
  console.log('player is NOT on the ground!')
  console.log('Player CANNOT jump!')
}
