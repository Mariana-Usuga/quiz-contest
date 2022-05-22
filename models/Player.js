
export class Player {
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
    }else{
      this.nextQuestion= false;
    }
  }

  get getScore(){
    return this.score;
  }
  
}
