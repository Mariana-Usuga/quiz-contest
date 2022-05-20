import { random } from "../data/data.js";

export class Form {
  numberQuestion = 0;
  questionData = {};
  
    constructor(form, inputs, buttonSubmit){
      this.form= form;
      this.inputs= inputs;
      this.buttonSubmit= buttonSubmit
    }

    getData() {
      let question;
      const formData = new FormData(this.form[0]);

      question = {
        id: random(1, 1000),
        difficultyLevel: 1,
        question: formData.get('ask'),
        category: formData.get('category'),
        rightResponse: formData.get('rightAnswer'),
        responses: [formData.get('choice1'), formData.get('choice2'), formData.get('choice3'), formData.get('choice4')]
      }
      this.questionData = question
      this.numberQuestion++;
      this.inputs.forEach(input => input.value = '')
    }

    
}  

