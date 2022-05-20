import { Question } from "./Question.js";
import { data, random } from './data.js';

const  dataUser = []

export const questions = data.map(question => new Question(question.id, question.difficultyLevel, 
  question.question, question.category, question.rightResponse, question.responses))

  let questionData;
  let choices;
  const numAsks = 0;
  // export function getInfo(){
    const wrapper = document.querySelector('.wrapper'),
          form = wrapper.querySelectorAll('.form'),
          inputs = document.querySelectorAll('input'),
          buttonSubmit = document.querySelector('button[type=button]')

    function getDataForm(e){
      e.preventDefault();
      const formData = new FormData(form[0]);

      questionData = {
        id: random(1, 1000),
        difficultyLevel: 1,
        question: formData.get('ask'),
        category: formData.get('category'),
        rightResponse: formData.get('rightAnswer'),
        responses: [formData.get('choice1'), formData.get('choice2'), formData.get('choice3'), formData.get('choice4') ]
      }
      dataUser.push(questionData)
      numAsks++;
      inputs.forEach(input => input.value = '')
    }

    document.addEventListener('DOMContentLoaded', () => {
      buttonSubmit?.addEventListener('click', getDataForm, false)
    }, false)
// }
// let choices = [];
//     let ele2 = document.getElementsByName("choice");
//     let bbee = false;
    // console.log('ele', ele2[0])
    // for(let i=0; i<5; i++){
      // let ele = document.getElementById(`choice${i}`);
      // console.log('ele',)
      // ele2[0].addEventListener("keydown", (e) => {
        // console.log('entra en add', e.key)
        // choice += e.key;
        // console.log('chooo', choice)
      // });
      // choices.push(choice)
      // questionsA.push(choices)
      // const ele3 = document.getElementById("ask");
      // ele3.addEventListener("click", () => {
      //   console.log("ueeeeeeeee",choices)
      //   console.log("ueeeeeeeee2",questionsA)
      // })
