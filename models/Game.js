import { random } from "../data/data.js";
// import { Player } from "./Player.js";

export class Game {
  questionIndex = 0;
  // nextQuestion = true;
  level = 1;
  question = {};

  constructor(questions){
    this.questions= questions
  }

  getQuestionIndex(){
    return this.questions[this.questionIndex]
  }

  searchQuestion(){
    let arrayCategories = []
    // if(!this.nextQuestion){
    //   return
    // }
    for(let i=0; i<this.questions.length; i++){
      if(this.level === this.questions[i].level){
        arrayCategories = [...arrayCategories, this.questions[i]]
      }
    }
    // const nose = arrayCategories[random(0,1)]
    // console.log("en game. getQuestionIndex",nose)
    this.question = arrayCategories[random(0,1)]
    console.log('quess', this.question)
    return this.question;
  }

  getQuestion(){
    return this.question;
  }

  nextQuestion(){
    // guess(){}
    // if(this.getQuestion().correctAnswer(answer)){
      // this.score += 5;
      // this.level++;
    // }else{
      // this.nextQuestion= false;
    // }
    this.questionIndex++;
  }

  hasEnded(){
    return this.level === 6
  }

}