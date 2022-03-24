// selecting button and assigning it to a variable
let shakeButton = document.querySelector('#btn')

// created addEventListener and function with an array of images
shakeButton.addEventListener('click', function ask(){
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
    //getting random number and matching it to an answer/pic then outputting into an html element
    let number = Math.floor(Math.random() * 19);
    // setting a delay in picture change
    setTimeout(() => {
    document.getElementById('eightball').src = answers[number];
    }, 1000); 
  
})
// created a function to make magic 8ball shake
function anime() {
  // Searches for Button and Click Event and shakes 8ball
  document.querySelector('#btn').addEventListener('click', () => {
      document.querySelector('#eightball').classList.add("animate");
      // sets removes shaking animation after 2 seconds
      setTimeout(() => {
          document.querySelector('#eightball').classList.remove("animate");
        }, 2000);
  })
  // user question input removed on button click for 3 seconds then replaced 
  let answersInput = document.getElementById('div3');
  answersInput.style.display = "none";
  setTimeout(() => {
    answersInput.style.display = "block";
  }, 3000);
  
} 





   
