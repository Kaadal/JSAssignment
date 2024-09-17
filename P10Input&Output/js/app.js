function multiplyBySelf(numberToMultiply) {    // Multiplication
 return numberToMultiply * numberToMultiply;
}
console.log(multiplyBySelf(4));

// Adding
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(add(5, 20));

   // Dividing
  function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
             }
   console.log(divide(20, 5));

  // Average a number by adding them and dividing by the amount of numbers eg 2+6/2=4
  function average(firstNumber, secondNumber) {
    return (firstNumber + secondNumber) / 2;
  }
  console.log(average(2, 6))

 // Function and return string
 function string(firstWord, secondWord) {
    return ('Welcome ' + firstWord + ' ' + secondWord);

 }
console.log(string('Ben', 'Ting'))

 // Return a random number

 function getRandomInt() {
   return Math.floor(Math.random() * 6);
 }
 console.log(getRandomInt());

  function convertNumberToLetters(number) {
    if (number === 0) {
      return 'A';
    }
    else if (number === 1) {
      return 'B';
    }
    else if (number === 2) {
      return 'C';
    }
  }
  console.log(convertNumberToLetters(0));
  console.log(convertNumberToLetters(1));
  console.log(convertNumberToLetters(2));
  //  console.log(convertNumberToLetters(3));
