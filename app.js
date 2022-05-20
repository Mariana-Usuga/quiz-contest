import { Game } from "./models/Game.js";
import { questions, dataUser, amountAsks } from "./data/questions.js";
import { UI } from './models/UI.js'


function renderPage (game, ui){
  if(game.hasEnded()){
    ui.showScore(game.score)
  }else{
    game.getQuestionCategory()
    ui.showQuestion(game.getQuestion().question)
    ui.showAnswers(game.getQuestion().responses, (answer) => {
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
  const ui = new UI()
  ui.showInputs();
  
  const ele2 = document.getElementById("play")
  ele2.addEventListener('click', () => {
    const game = new Game(questions);
      renderPage(game, ui)
  }) 

  const element = document.getElementById('jugar')
  const ele3 = document.getElementById("quiz");
  const form = document.querySelector('.wrapper');

  element.addEventListener('click', () => {
    ele3.style.visibility = "visible"
    form.style.visibility = "hidden"
    const game = new Game(dataUser);
    renderPage(game, ui)
  })
}

main()
