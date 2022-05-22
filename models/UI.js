import { questionsUser } from '../data/questions.js'

export class UI {
  showForm = false;
  constructor(){}

  showPlayOrConfigure(){
    const btn = document.getElementById("configure"),
    form = document.querySelector('.wrapper'),
    game = document.getElementById("quiz"),
    btnPlay = document.getElementById('btnPlay'),
    notice = document.getElementById("containerplay");

    btn.addEventListener('click', () => {
      btnPlay.style.display = "none";
      form.style.visibility = "visible";
    })

    btnPlay.addEventListener('click', () => {
      btn.style.display = "none";
      game.style.visibility = "visible";
      notice.style.visibility = "visible"
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
    <h1>Ganaste!!</h1>
    <h2>Tu puntaje es: ${score}</h2>
    `
    const element = document.getElementById('quiz')
    element.innerHTML = quizEnd
  }

  showProgress(currentIndex, total){
    const element = document.getElementById("progress");
    element.innerHTML = `Has respondido ${currentIndex - 1} preguntas, te faltan ${total}`
  }

  showGameOver(score){
    const quizEnd = `
    <h1>Game Over</h1>
    <h2>Tu puntaje fue: ${score}</h2>
    `
    const element = document.getElementById('quiz')
    element.innerHTML = quizEnd
  }

  showQuestionsEntered(current, total){
    const numberQuestion =  `
    <h2>Has ingresado: ${current} preguntas, total: ${total}</h2>
    `
    const ele = document.getElementById('numberQueEntered');
    const buttonSubmit = document.querySelector('button[type=button]');

    buttonSubmit?.addEventListener('click', () => {
    ele.innerHTML = numberQuestion;
    }, false)
  }

  showCoins(current){
    const coins =  `
    <h2>Cantidad de monedas: ${current}</h2>
    `
    const ele = document.getElementById('coins');
    ele.innerHTML = coins;
  }

  // showBtnPlay(){
  //   const btnPlay = document.getElementById('play');
  //   const btn =  `
  //   <button type="button" id="play">Jugar!!</button>
  //   `
  //   if(questionsUser.length === 2){
  //     btnPlay.innerHTML = btn;
  //   }
  // }

 }