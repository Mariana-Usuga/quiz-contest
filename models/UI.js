// import { getInfo } from "./questions.js";
import { postPlayer } from "../service/playerService.js";
import { Player } from "./Player.js";
import { questionsUser } from '../data/questions.js'

export class UI {
  showForm = false;
  constructor(){}

  showPlayOrConfigure(){
    const btn = document.getElementById("configure");
    const form = document.querySelector('.wrapper');
    const game = document.getElementById("quiz");
    const btnPlay = document.getElementById("play");

    btn.addEventListener('click', () => {
      btnPlay.style.display = "none";
      form.style.visibility = "visible";
    })

    btnPlay.addEventListener('click', () => {
      btn.style.display = "none";
      game.style.visibility = "visible";
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
    element.innerHTML = `Has respondi ${currentIndex - 1} preguntas, te faltan ${total}`
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

  showCoins(current){
    const coins =  `
    <h2>Cantidad de monedas: ${current}</h2>
    `
    const ele = document.getElementById('coins');
    ele.innerHTML = coins;
  }

  showBtnPlay(){
    const btnPlay = document.getElementById('play');
    const btn =  `
    <button type="button" id="play">Jugar!!</button>
    `
    if(questionsUser.length === 2){
      btnPlay.innerHTML = btn;
    }
  }

 }