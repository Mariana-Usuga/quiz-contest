// import { getInfo } from "./questions.js";

export class UI {
  constructor(){}

  showInputs(){
    const btn = document.getElementById("configure");
    const btnPlay = document.getElementById("play");
    const form = document.getElementById("form");
    const qui = document.getElementById("quiz");
    btn.addEventListener('click', () => {
      if(form.style.display === "block"){
        form.style.display = "none"
      }else{
        form.style.display = "block"
        // getInfo();
      }
    })
    btnPlay.addEventListener('click', () => {
      if(qui.style.display === "block"){
        qui.style.display = "none"
      }else{
        qui.style.display = "block"
      }
    })
  }

  showQuestion(text){
    const questionTitle = document.getElementById('question');
    console.log('te', text  )
    questionTitle.innerHTML = text;
  }

  showAnswers(choices, callback){
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = ""

    console.log('choi', choices)

    for(let i=0; i <choices.length; i ++){
      const btn = document.createElement('button')
      btn.innerHTML = choices[i];
      btn.className = "button"
      btn.addEventListener('click', () => callback(choices[i]))
      choicesContainer.append(btn)
    }
  }

  showScore(score){
    const quizEnd = `
    <h1>Result</h1>
    <h2>Your score is: ${score}</h2>
    `
    const element = document.getElementById('quiz')

    element.innerHTML = quizEnd
  }

  showProgress(currentIndex, total){
    const element = document.getElementById("progress");
    element.innerHTML = `Points ${currentIndex}`
  }

  showGameOver(score){
    const quizEnd = `
    <h1>Game Over</h1>
    <h2>Your score is: ${score}</h2>
    `
    const element = document.getElementById('quiz')

    element.innerHTML = quizEnd
  }

  getForm(){
    const wrapper = document.querySelector('.wrapper'),
          form = wrapper.querySelectorAll('.form'),
          inputs = document.querySelectorAll('input'),
          buttonSubmit = document.querySelector('button[type=button]');
    return { form, inputs, buttonSubmit }
  }
}