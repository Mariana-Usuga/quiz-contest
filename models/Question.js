
export class Question {

  constructor(id, level, question, category, answer, choices){
    this.id= id; 
    this.level= level;
    this.question= question;
    this.category= category;
    this.answer= answer;
    this.choices= choices
  }
  
  correctAnswer(choice){
    return choice === this.answer;
  }

  
}
