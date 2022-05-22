import { Question } from "../models/Question.js";
// import { data, random } from './data.js';
import { Form } from "../models/Form.js";
// import { getQuestions } from "../service/questionService.js";

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const minQuestions = 25
let questions = []

function getQuestions () {
  axios.get(`https://quizcontest22.herokuapp.com/api/question`)
  .then(response => {
   const questionsRes = response.data;
  //  console.log('reee', questionsRes)
   questions = questionsRes.map(question => new Question(question._id, question.level, 
  question.question, question.category, question.answer, question.choices));
 })
  .catch(error => console.error(error));
  return questions;
 };

//  getQuestions()


/*-----------------------------------------------GET DATA USER-------------------------------------*/
  function getUserQuestions(){
    let amountAsks = 0;
    const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('.form'),
    inputs = document.querySelectorAll('input'),
    buttonSubmit = document.querySelector('button[type=button]');
    
    const f = new Form(form, inputs, buttonSubmit)
    document.addEventListener('DOMContentLoaded', () => {
      buttonSubmit?.addEventListener('click', () => {
        f.getData()
        // console.log('ob', f.questionData)
        const q = new Question(f.questionData.id, f.questionData.level, f.questionData.question,
           f.questionData.category, f.questionData.answer, f.questionData.choices)
        questions.push(q)
        amountAsks++;

        const numberQuestion =  `
        <h2>You have entered: ${amountAsks} asks, son minino: ${minQuestions}</h2>`
        const ele = document.getElementById('numberQueEntered');
        ele.innerHTML = numberQuestion;

      }, false)
    }, false)
  }

  export { getQuestions, getUserQuestions }

