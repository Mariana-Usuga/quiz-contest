import { Game } from "./models/Game.js";
import { getQuestions, getUserQuestions } from "./data/questions.js";
import { UI } from './models/UI.js';
import { Player } from './models/Player.js'

// const game = new Game(questions);

function renderFormUser(ui){
  ui.showPlayOrConfigure();
  // console.log('ftgvyhbjnkm',ui.getData());
}

function renderPage (playerObj, game, ui){
  // console.log('game', game)
  if(game.hasEnded()){
    ui.showScore(playerObj.score)
    // ui.showScore(game.score)//opcion valida
  }else{
    // const question = game.getQuestion()
    // console.log(game.getQuestion())
    game.searchQuestion();
    ui.showQuestion(game.getQuestion().question)
// console.log('choi', game.getQuestion().choices )
    ui.showAnswers(game.getQuestion().choices, (answer) => {
      playerObj.guess(answer, game.getQuestion())
      // game.guess(answer)
      // game.nextQuestion()
      // console.log('next', !playerObj.nextQuestion)
      // if(!playerObj.nextQuestion){
      //   ui.showGameOver(playerObj.getScore())
      // }
    renderPage(playerObj, game, ui)
  })

  // ui.showProgress(game.questionIndex + 1, game.questions.length)
  // ui.showQuestionsEntered(amountAsks, 25);
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

  const element = document.getElementById('jugar')
  const ele3 = document.getElementById("quiz");
  const form = document.querySelector('.wrapper');

  element.addEventListener('click', () => {
    ele3.style.visibility = "visible"
    form.style.visibility = "hidden"
    const questions = getUserQuestions();
    const game = new Game(questions);
    renderPage(playerObj, game, ui)
  })
}

main()
