import { Game } from "./models/Game.js";
import { getQuestions, questionsUser } from "./data/questions.js";
import { UI } from './models/UI.js';
import { Player } from './models/Player.js'
import { random } from "./data/randomNumber.js";

function renderFormUser(ui){
  ui.showPlayOrConfigure();
}

function renderPage (playerObj, game, ui){
  if(playerObj.score === 25){
    return ui.showScore(playerObj.score)
  }else{
    if(questionsUser.length != 0){
      ui.showQuestion(game.getQuestionIndex().question)
      ui.showAnswers(game.getQuestionIndex().choices, (answer) => {
        game.guess(answer)
        if(!playerObj.nextQuestion){
          ui.showGameOver(playerObj.getScore)        
        }
      renderPage(playerObj, game, ui)
    })
    }else{
      game.searchQuestion();
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

function main () {
  const ui = new UI()
  let playerObj = "";
  renderFormUser(ui)

  const formDataUser = document.querySelectorAll('.formDataUser'),
  buttonSubmitUser = document.getElementById('btnDataUser');

  document.addEventListener('DOMContentLoaded', () => {
  buttonSubmitUser.addEventListener('click', () => {
    const formData = new FormData(formDataUser[0]);

    if(formData.get('name') === ""){
      const aler = document.getElementById('alert')
      const quizEnd = `
      <h1>Enter name!!!</h1>
      `
      aler.innerHTML = quizEnd;
    }else{
      playerObj = new Player(random(1,300), formData.get('name'), 0);

      localStorage.setItem("player", JSON.stringify(playerObj))

      const btnConfigure = document.getElementById('configure');
      btnConfigure.style.visibility = "visible";
      const ele2 = document.getElementById('btnPlay');
      ele2.style.visibility = "visible";
      formDataUser[0].style.display ="none";
    }
  }, false)
}, false)

  const btnPlay = document.getElementById("btnPlay")
  btnPlay.addEventListener('click', () => {
    const loadedQuestions = getQuestions();
        const game = new Game(loadedQuestions);
        renderPage(playerObj, game, ui)
  }) 

  const divPlay = document.getElementById('divPlay')
  divPlay.addEventListener('click', () => {
    const game = new Game(questionsUser);
    renderPage(playerObj, game, ui)
  })
}

main()
