import { Game } from "./models/Game.js";
import { getQuestions, getUserQuestions } from "./data/questions.js";
import { UI } from './models/UI.js';
import { Player } from './models/Player.js';
import { random } from './data/data.js'

function renderPage (game, ui){
  if(game.hasEnded()){
    ui.showScore(game.score)//opcion valida
  }else{
    game.getQuestionCategory()
    ui.showQuestion(game.getQuestion().question)
    ui.showAnswers(game.getQuestion().choices, (answer) => {
      game.guess(answer)
      if(!game.nextQuestion){
        ui.showGameOver(game.score)
      }
    renderPage(game, ui)
  })
  ui.showProgress(game.questionIndex + 1, game.questions.length)
  // ui.showQuestionsEntered(amountAsks, 25);
  }
}

function main () { 
  const formDataUser = document.querySelectorAll('.formDataUser'),
  inputs = document.querySelectorAll('input'),
  buttonSubmit = document.getElementById('btnDataUser');

  const formData = new FormData(formDataUser[0]);
  
  const player = new Player(random(1, 1000), formData.get('name'));

  document.addEventListener('DOMContentLoaded', () => {
    buttonSubmit?.addEventListener('click', () => {
      console.log('entra en subbbbbb')
      gameStart();
      const ele = document.getElementById('configure');
      ele.style.visibility = "visible";
      const ele2 = document.getElementById('play');
      ele2.style.visibility = "visible";
    }, false)
  }, false)






function gameStart(){
  const ui = new UI()
  ui.showInputs();
  const ele2 = document.getElementById("play")
  ele2.addEventListener('click', async () => {
    const questions = await getQuestions();
      console.log('reees in appp', questions)
        const game = new Game(questions);
      renderPage(game, ui)
  }) 

  const element = document.getElementById('jugar')
  const ele3 = document.getElementById("quiz");
  const form = document.querySelector('.wrapper');

  element.addEventListener('click', () => {
    ele3.style.visibility = "visible"
    form.style.visibility = "hidden"
    const questions = getUserQuestions();
    const game = new Game(questions);
    renderPage(game, ui)
  })
}
}

main()
