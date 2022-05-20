import { Quiz } from "./Quiz.js";
import { questions } from "./questions.js";
import { UI } from './UI.js'

//console.log('ques', questions)

function renderPage (quiz, ui){
  console.log('fina', quiz.hasEnded())
  if(quiz.hasEnded()){
    ui.showScore(quiz.score)
  }else{
    quiz.getQuestionCategory()
    ui.showQuestion(quiz.getQuestion().question)
    ui.showAnswers(quiz.getQuestion().responses, (answer) => {
      quiz.guess(answer)
      if(!quiz.nextQuestion){
        ui.showGameOver(quiz.score)
      }
    renderPage(quiz, ui)
  })
  ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
  }
}

function main () {
  const quiz = new Quiz(questions);
  const ui = new UI()
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