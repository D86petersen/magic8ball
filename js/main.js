//global variables
// selecting button and assigning it to a variable
let shakeButton = document.querySelector('#btn')
//assigning variables and retrieving elements from html
const questionText = document.getElementById('questiontext');
const askAgain = document.getElementById('askagain');
let answersInput = document.getElementById('form1');
const question = document.getElementById('question');
const userInput = document.getElementById('userinput');
// setting question display to default of none
question.style.display = 'none';
// assigning a variable to an array of images
let answers = [
  '/img/magic8ball_1.png',
  '/img/magic8ball_2.png',
  '/img/magic8ball_3.png',
  '/img/magic8ball_4.png',
  '/img/magic8ball_5.png',
  '/img/magic8ball_6.png',
  '/img/magic8ball_7.png',
  '/img/magic8ball_8.png',
  '/img/magic8ball_9.png',
  '/img/magic8ball_10.png',
  '/img/magic8ball_11.png',
  '/img/magic8ball_12.png',
  '/img/magic8ball_13.png',
  '/img/magic8ball_14.png',
  '/img/magic8ball_15.png',
  '/img/magic8ball_16.png',
  '/img/magic8ball_17.png',
  '/img/magic8ball_18.png',
  '/img/magic8ball_19.png',
  '/img/magic8ball_20.png',
];

// created a function to get a random number 
function ask() {
  let number = Math.floor(Math.random() * 19);
  // set time delay and match the image to the random number
  setTimeout(() => {
    document.getElementById('eightball').src = answers[number];
  }, 1000);
}
// created a function to shake the ball when clicked
function anime() {
  document.querySelector('#eightball').classList.add("animate");
  // removes shaking animation after 2 seconds
  setTimeout(() => {
    document.querySelector('#eightball').classList.remove("animate");
  }, 2000);
}

/* created event listener to listen for button click and display an error message if the user does not enter a question
if the user entered a question, the function ask() is called as well as the anime() function to shake the ball */
document.querySelector('#btn').addEventListener('click', () => {
  questionText.innerText = '"' + userInput.value + '"';
  if(!userInput.value.length) {
    alert('Please enter a question');
    return
  }else {
    ask();
    anime();
  }
  
 
  // user question input removed on button click and replaced with user question
  answersInput.style.display = "none";
  question.style.display = "block";
})
// created an event listener for ask again button to reset the page and display the form again 
document.querySelector('#askagain').addEventListener('click', () => {
  answersInput.style.display = "block";
  question.style.display = "none";
  // set focus to user input in order to reset the field value on page reset
  document.getElementById("userinput").focus()
  // resets the 8 ball image to the default image
  document.getElementById("eightball").src="/img/magic8ball_start.png";
});