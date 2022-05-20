import { Question } from "../models/Question.js";
import { data, random } from './data.js';
import { Form } from "../models/Form.js";

const  dataUser = []

const questions = data.map(question => new Question(question.id, question.difficultyLevel, 
  question.question, question.category, question.rightResponse, question.responses))

  const wrapper = document.querySelector('.wrapper'),
          form = wrapper.querySelectorAll('.form'),
          inputs = document.querySelectorAll('input'),
          buttonSubmit = document.querySelector('button[type=button]');


  const f = new Form(form, inputs, buttonSubmit)

    document.addEventListener('DOMContentLoaded', () => {
    buttonSubmit?.addEventListener('click', () => {
      f.getData()
      dataUser.push(f.questionData)
    }, false)
    
  }, false)

  let questionsUser;
  if(dataUser.length === 25){
    questionsUser = dataUser.map(question => new Question(question.id, question.difficultyLevel, 
    question.question, question.category, question.rightResponse, question.responses ))
  }

  export {questions, questionsUser}

