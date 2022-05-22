import { random } from "../data/data.js";
import { questionsUser } from "../data/questions.js";

export class Game {
  questionIndex = 0;
  level = 1;
  question = {};

  constructor(questions){
    this.questions= questions
  }

  getQuestionIndex(){
    this.questionIndex++;
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
    console.log('quess', this.question)
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
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }

  hasEnded(){
    return this.question.length === this.questionIndex
  }

}