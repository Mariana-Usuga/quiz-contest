import { Player } from '../models/Player.js';

export function postPlayer (name) {
    console.log('name', name)
    axios.post(`https://quizcontest22.herokuapp.com/api/player`, name)
    .then(response => {
     const newPlayer = response.data;
     const playerObj = new Player(newPlayer._id, newPlayer.name, newPlayer.score);
     return playerObj;
   })
    .catch(error => console.error(error));
   };

