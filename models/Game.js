import { random } from "../data/randomNumber.js";

export class Game {
  questionIndex = 0;
  level = 1;
  nextQuestion = true;
  question = {};

  constructor(questions){
    this.questions= questions
  }

  getQuestionIndex(){
    return this.questions[this.questionIndex]
  }

  searchQuestion(){
    let arrayCategories = []

    for(let i=0; i<this.questions.length; i++){
      if(this.level === this.questions[i].level){
        arrayCategories = [...arrayCategories, this.questions[i]]
      }
    }
    
    this.question = arrayCategories[random(0,1)]
    this.question;
  }

  getQuestion(){
    return this.question;
  }

  nextLevel(){
    this.level++;
    this.questionIndex++;
  }

  guess(answer) {
    console.log('guess', this.getQuestionIndex());
    if (this.getQuestionIndex().correctAnswer(answer)) {
      console.log('entra guess')
      this.score++;
    }
    this.nextQuestion=false;
    this.questionIndex++;
  }
}