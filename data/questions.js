import { Question } from "../models/Question.js";
import { Form } from "../models/Form.js";

const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const minQuestions = 25
const questionsUser = []
let questions = []
let amountQuestions = 0;

function getQuestions () {
  axios.get(`${URL_BASE}/api/question`)
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
     const quesLocal = new Question(questionslocal[i].id, questionslocal[i].level, questionslocal[i].question,
    questionslocal[i].category, questionslocal[i].answer, questionslocal[i].choices)
    questionsUser.push(quesLocal)
  }
  amountQuestions = questionslocal.length;
}

function elementsInLocal(){
  const btnPlay = document.getElementById('divPlay'),
  game = document.getElementById('quiz'),
  divPlay = document.getElementById('divPlay'),
  form = document.querySelector('.wrapper'),
  formDataUser = document.querySelectorAll('.formDataUser');
  const playQuestionsUser = document.getElementById('playWithDataUser');

  const btn = `<button type="button" id="playWithDataUser">Jugar con tus preguntas</button>`
  
  if(questionsUser.length === 25){
    btnPlay.innerHTML = btn;
    divPlay.addEventListener('click', () => {
      game.style.visibility = "visible";
      form.style.visibility = "hidden";
      game.style.position = "absolute";
      game.style.top = "0";
      playQuestionsUser.style.visibility = "hidden"
      formDataUser[0].style.visibility = "hidden" 
    })
  }
}
/*-----------------------------------------------GET DATA USER-------------------------------------*/
elementsInLocal();
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
      amountQuestions++;

      localStorage.setItem('questions', JSON.stringify(questionsUser))
      elementsInLocal()
      
      const numberQuestion = `<h2>Has ingresado: ${amountQuestions} preguntas, son minino: ${minQuestions}</h2>`
      const numberQuestionEntered = document.getElementById('numberQueEntered');
      numberQuestionEntered.innerHTML = numberQuestion;

      }, false)
    }, false)
  // }

  export { getQuestions, questionsUser }

