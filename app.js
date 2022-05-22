import { Game } from "./models/Game.js";
import { getQuestions, /*getUserQuestions*/ questionsUser } from "./data/questions.js";
import { UI } from './models/UI.js';
import { Player } from './models/Player.js'

function renderFormUser(ui){
  ui.showPlayOrConfigure();
}

function renderPage (playerObj, game, ui){
  if(game.hasEnded()){
    return ui.showScore(playerObj.score)
  }else{
    if(questionsUser.length != 0){
      console.log('aquii','bla', game.getQuestionIndex().choices)
      ui.showQuestion(game.getQuestionIndex().question)
      ui.showAnswers(game.getQuestionIndex().choices, (answer) => {
        // playerObj.guess(answer)
        game.guess(answer)
        console.log('pregutas user',questionsUser)
        // if(!playerObj.nextQuestion){
        //   ui.showGameOver(playerObj.getScore)        
        // }
      renderPage(playerObj, game, ui)
    })
    }else{
      game.searchQuestion();
      // console.log('aqquu', game.getQuestion().question, game.getQuestion().choices)
      ui.showQuestion(game.getQuestion().question)
      ui.showAnswers(game.getQuestion().choices, (answer) => {
        playerObj.guess(answer, game.getQuestion())
        game.nextLevel()
        if(!playerObj.nextQuestion){
          ui.showGameOver(playerObj.getScore)        
        }
      renderPage(playerObj, game, ui)
    })
    }
  ui.showProgress(game.questionIndex + 1, 5);
  ui.showCoins(playerObj.getScore)
  }
}

function loaded(){
  if(JSON.parse(localStorage.getItem("questions"))){
    const form = document.querySelector('.wrapper');
    form.style.visibility = "visible";
  }
}

function main () {
  const ui = new UI()
  let playerObj = "";
  renderFormUser(ui)

  const formDataUser = document.querySelectorAll('.formDataUser'),
  buttonSubmitUser = document.getElementById('btnDataUser');

  document.addEventListener('DOMContentLoaded', () => {
  buttonSubmitUser?.addEventListener('click', () => {
    const formData = new FormData(formDataUser[0]);

    if(formData.get('name') === ""){
      const aler = document.getElementById('alert')
      const quizEnd = `
      <h1>Enter name!!!</h1>
      `
      aler.innerHTML = quizEnd;
    }else{
      playerObj = new Player(1, formData.get('name'), 0);

      localStorage.setItem("player", JSON.stringify(playerObj))

      const ele = document.getElementById('configure');
      ele.style.visibility = "visible";
      const ele2 = document.getElementById('play');
      ele2.style.visibility = "visible";
      formDataUser[0].style.display ="none";
    }
  }, false)
}, false)

  const ele2 = document.getElementById("play")
  ele2.addEventListener('click', () => {
    const loadedQuestions = getQuestions();
        const game = new Game(loadedQuestions);
        renderPage(playerObj, game, ui)
  }) 

  const element = document.getElementById('divPlay')

  element.addEventListener('click', () => {
    const game = new Game(questionsUser);
    console.log('clicl play', questionsUser)
    renderPage(playerObj, game, ui)
  })

  const eleme = document.getElementById('nose')

  eleme.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicl play', questionsUser)
  })
}

main()
