import { data } from  '../data/data.js';

export class Player {
    score = 0;

  constructor(id, name, score){
    this.id= id; 
    this.name= name;
  }
  
  get getScore(){
    return this.score;
  }
  
}
