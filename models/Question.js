import { data } from  '../data/data.js';

export class Question {

  constructor(id, difficultyLevel, question, category, rightResponse, responses){
    this.id= id; 
    this.difficultyLevel= difficultyLevel;
    this.question= question;
    this.category= category;
    this.rightResponse= rightResponse;
    this.responses= responses
  }
  
  correctAnswer(choice){
    return choice === this.rightResponse;
  }

  
}
