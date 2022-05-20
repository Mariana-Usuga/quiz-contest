// import { getInfo } from "./questions.js";

export class UI {
  showForm = false;
  constructor(){}

  showInputs(){
    console.log('entra show from  ')
    const btn = document.getElementById("configure");
    const form = document.querySelector('.wrapper');
    const game = document.getElementById("quiz");
    btn.addEventListener('click', () => {
      if(form.style.visibility === "visible"){
        form.style.visibility = "hidden"
      }else{
        form.style.visibility = "visible"
        game.style.visibility = "hidden"
      }
    })

    const btnPlay = document.getElementById("play");
    btnPlay.addEventListener('click', () => {
      if(game.style.visibility === "visible"){
        game.style.visibility = "hidden"
      }else{
        game.style.visibility = "visible"
        form.style.visibility = "hidden"
      }
    })
  }

  showQuestion(text){
    const questionTitle = document.getElementById('question');
    questionTitle.innerHTML = text;
  }

  showAnswers(choices, callback){
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = ""

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

  showQuestionsEntered(current, total){
    console.log('entraa', current)
    const numberQuestion =  `
    <h2>You have entered: ${current} asks, total: ${total}</h2>
    `
    const ele = document.getElementById('numberQueEntered');
    const buttonSubmit = document.querySelector('button[type=button]');

    buttonSubmit?.addEventListener('click', () => {
      ele.innerHTML = numberQuestion;
    }, false)
  }

 }