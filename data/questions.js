import { Question } from "../models/Question.js";
// import { data, random } from './data.js';
import { Form } from "../models/Form.js";
// import { getQuestions } from "../service/questionService.js";

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const minQuestions = 25
const questionsUser = []
let questions = []

function getQuestions () {
  axios.get(`https://quizcontest22.herokuapp.com/api/question`)
  .then(response => {
   const questionsRes = response.data;
   questions = questionsRes.map(question => new Question(question._id, question.level, 
  question.question, question.category, question.answer, question.choices));
 })
  .catch(error => console.error(error));
  return questions;
 };

const questionslocal = JSON.parse(localStorage.getItem("questions"))
 if(questionslocal){
  const form = document.querySelector('.wrapper');
  form.style.visibility = "visible";
  for(let i=0; i< questionslocal?.length; i++){
    questionsUser.push(questionslocal[i])
  }
  console.log('dat', questionslocal.length)
}

function elementsInLocal(){
  const btnPlay = document.getElementById('divPlay');
  const game = document.getElementById('quiz');
  const element = document.getElementById('divPlay');
  const form = document.querySelector('.wrapper');
  const btn =  `
        <button type="button">Jugar!!</button>
        `
        if(questionsUser.length > 1){
          console.log('ques', questionsUser)
          btnPlay.innerHTML = btn;
          element.addEventListener('click', () => {
            game.style.visibility = "visible";
            // form.style.visibility = "hidden";
            // game.style.position = "absolute";
            // game.style.top = "0";
          })
        }
}
//  getQuestions()
/*-----------------------------------------------GET DATA USER-------------------------------------*/
  // function getUserQuestions(){
    elementsInLocal();
    let amountAsks = 0;
    const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll('.form'),
    inputs = document.querySelectorAll('input'),
    selection = document.getElementById('category'),
    buttonSubmit = document.getElementById('submit');

    const f = new Form(form, inputs, buttonSubmit)
    document.addEventListener('DOMContentLoaded', () => {
      buttonSubmit?.addEventListener('click', () => {
        f.getData()
        const q = new Question(f.questionData.id, f.questionData.level, f.questionData.question,
        selection.value, f.questionData.answer, f.questionData.choices)
        questionsUser.push(q)
        amountAsks++;

        localStorage.setItem('questions', JSON.stringify(questionsUser))
        elementsInLocal()

        const numberQuestion =  `
        <h2>You have entered: ${amountAsks} asks, son minino: ${minQuestions}</h2>`
        const ele = document.getElementById('numberQueEntered');
        ele.innerHTML = numberQuestion;

      }, false)
    }, false)
  // }

  export { getQuestions, questionsUser }

