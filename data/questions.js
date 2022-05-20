import { Question } from "../models/Question.js";
import { data, random } from './data.js';
import { Form } from "../models/Form.js";

const  dataUser = []
// const objcts = []

const questions = data.map(question => new Question(question.id, question.difficultyLevel, 
  question.question, question.category, question.rightResponse, question.responses));

/*-----------------------------------------------GET DATA USER-------------------------------------*/
  // function getAsk(){
    let amountAsks = 0;
    const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('.form'),
    inputs = document.querySelectorAll('input'),
    buttonSubmit = document.querySelector('button[type=button]');
    
    const f = new Form(form, inputs, buttonSubmit)
    document.addEventListener('DOMContentLoaded', () => {
      buttonSubmit?.addEventListener('click', () => {
        f.getData()
        console.log('ob', f.questionData)
        const q = new Question(f.questionData.id, f.questionData.difficultyLevel, f.questionData.question,
           f.questionData.category, f.questionData.rightResponse, f.questionData.responses)
        dataUser.push(q)
        amountAsks++;

        const numberQuestion =  `
        <h2>You have entered: ${amountAsks} asks, total: ${25}</h2>`
        const ele = document.getElementById('numberQueEntered');
        ele.innerHTML = numberQuestion;

      }, false)
    }, false)


  export { questions, dataUser, amountAsks}

