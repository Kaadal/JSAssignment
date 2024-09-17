
walkThreeSteps()
turnAround();
walkThreeSteps()
turnLeft()
stepForward()
turnAround()
stepForward()


function stepForward() {
 console.log ('Move Forward. ');
}

 function turnRight() {
 console.log ('Turn right. ');
}

  function turnLeft() {
  turnRight()
  turnRight()
  turnRight()
   }

   function turnAround() {


     turnRight()
     turnRight()
   }
   function walkThreeSteps() {
  stepForward()
     stepForward()
     stepForward()
   }

function square (numbertoSquare){
  return numbertoSquare * numbertoSquare;
}

let squaredNumber = square(15);
console.log(squaredNumber)

console.log(square(15))
