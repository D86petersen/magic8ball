let shakeButton = document.querySelector('#btn')


shakeButton.addEventListener('click', function ask(){
    let answers = [
        'As I see it, yes.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don’t count on it.',
        'It is certain.',
        'It is decidedly so.',
        'Most likely.',
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Outlook good.',
        'Reply hazy, try again.',
        'Signs point to yes.',
        'Very doubtful.',
        'Without a doubt.',
        'Yes.',
        'Yes – definitely.',
        'You may rely on it.'
    ];
    //getting random number and matching it to an answer then outputting into an html element
    let number = Math.floor(Math.random() * 20);
    document.getElementById('answers').innerHTML = answers[number];
    let answer = document.querySelector('#answers')
answer.style.display = 'block';
setTimeout(() => {
  answersInput.style.display = "none";
}, 5000);
})

function anime() {
  // Searches for Button and Click Event
  document.querySelector('#btn').addEventListener('click', () => {
      document.querySelector('#eightball').classList.add("animate");
      setTimeout(() => {
          document.querySelector('#eightball').classList.remove("animate");
        }, 2000);
  })
  let answer = document.querySelector('#answers')
  answer.style.display = 'block';
  setTimeout(() => {
    answer.style.display = "none";
  }, 3000);
  let answersInput = document.getElementById('div3');
  answersInput.style.display = "none";
  setTimeout(() => {
    answersInput.style.display = "block";
  }, 3000);
  
} 





   
