// import axios from 'axios';

const URL_BASE = 'http://localhost:8080';

export function getQuestions () {
  axios.get('http://localhost:8080/api/question')
  .then(response => {
   const questions = response.data;
return questions
 })
  .catch(error => console.error(error));
 };
