import { Game } from "./models/Game.js";
import { questions } from "./data/questions.js";
import { UI } from './models/UI.js'

//console.log('ques', questions)

function renderPage (game, ui){
  console.log('fina', game.hasEnded())
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
  }
}

function main () {
  const game = new Game(questions);
  const ui = new UI()
  // ui.getForm()
  // ui.showInputs()
  // renderPage(quiz, ui)
  // const quiz2 = new Quiz(questions);
  // quiz2.getQuestion();

}

main()

/*(res) => {
  if(quiz.getQuestionIndex().rightResponse === res){
    console.log("corre!!")
    quiz.guess(res)
    
    console.log('qui', quiz)
  }else{
    console.log("incoo!!")
  }
}*/