// import { getInfo } from "./questions.js";
import { postPlayer } from "../service/playerService.js";
import { Player } from "./Player.js";

export class UI {
  showForm = false;
  constructor(){}

  // getData(){
    // let showForm = false;
  //   const formDataUser = document.querySelectorAll('.formDataUser'),
  //   buttonSubmitUser = document.getElementById('btnDataUser');

  //   document.addEventListener('DOMContentLoaded', () => {
  //   buttonSubmitUser?.addEventListener('click', () => {
  //     const formData = new FormData(formDataUser[0]);

  //     if(formData.get('name') === ""){
  //       console.log('entra iffffffff')
  //       const aler = document.getElementById('alert')
  //       const quizEnd = `
  //       <h1>Enter name!!!</h1>
  //       `
  //       aler.innerHTML = quizEnd;
  //     }else{
  //       postPlayer({name:formData.get('name')});
  //       const ele = document.getElementById('configure');
  //       ele.style.visibility = "visible";
  //       const ele2 = document.getElementById('play');
  //       ele2.style.visibility = "visible";
  //       formDataUser[0].style.display ="none";
  //       // showForm = true;
  //       // return playerObj;
  //     }
  //   }, false)
  // }, false)
  // return showForm;
// }

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

 }