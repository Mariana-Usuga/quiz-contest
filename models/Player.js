import { data } from  '../data/data.js';

export class Player {
    // score = 0;
    nextIndex = 0;
    nextQuestion = true;

  constructor(id, name, score){
    this.id= id;
    this.name= name;
    this.score= score
  }
  
  guess(answer, question){
    if(question.correctAnswer(answer)){
      this.score += 5;
      console.log('entra todo bien')
      // this.level++;
    }else{
      this.nextQuestion= false;
    }
    // questionIndex++;
  }

  get getScore(){
    return this.score;
  }
  
}
