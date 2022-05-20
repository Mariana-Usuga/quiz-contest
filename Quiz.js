import { random } from "./data.js";

export class Quiz {
  questionIndex = 0;
  score = 0;
  nextQuestion = true;
  level = 1;
  question = ""

  constructor(questions){
    this.questions= questions
  }

  getQuestionIndex(){
    return this.questions[this.questionIndex]
  }

  getQuestionCategory(){
    let arrayCategories = []
    if(!this.nextQuestion){
      return
    }
    for(let i=0; i<this.questions.length; i++){
      if(this.level === this.questions[i].difficultyLevel){
        arrayCategories = [...arrayCategories, this.questions[i]]
      }
    }
    const nose = arrayCategories[random(0,1)]
    console.log(nose)
    this.question = arrayCategories[random(0,1)]
  }

  getQuestion(){
    return this.question;
  }

  guess(answer){
    if(this.getQuestion().correctAnswer(answer)){
      this.score += 5;
      this.level++;
    }else{
      this.nextQuestion= false;
    }
    this.questionIndex++;
  }

  hasEnded(){
    return this.level === 6
  }

}