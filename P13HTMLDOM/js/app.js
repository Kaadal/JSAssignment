// Change the text of 'text0' element
const textField0 = document.getElementById('text0');
textField0.innerHTML = 'Lets start!';

// Change the header5 text and color
const headerText5 = document.getElementById('header5');
headerText5.innerHTML = 'Monke';
headerText5.style.color = 'green';

// Style the button
const button0 = document.getElementById('button0');
button0.style.color = 'blue';
button0.style.backgroundColor = 'red';
button0.style.borderColor = 'black';
button0.style.cursor = 'pointer';
button0.style.borderBottomColor = 'white';
button0.style.fontFamily = 'Comic Sans MS';

// Select the score text and button
let scoreText = document.getElementById('text');
let button = document.getElementById('button0');

// Initialize the score
let score = 0;

// Add an event listener to the button to increase the score
button.addEventListener('click', function() {
  score++;
  scoreText.innerHTML = 'Score: ' + score;
});
