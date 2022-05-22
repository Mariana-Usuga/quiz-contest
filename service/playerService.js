import { Player } from '../models/Player.js';

export function postPlayer (name) {
    console.log('name', name)
    axios.post(`https://quizcontest22.herokuapp.com/api/player`, name)
    .then(response => {
    //   console.log('entra')
     const newPlayer = response.data;
    //  console.log('reee', newPlayer)
     const playerObj = new Player(newPlayer._id, newPlayer.name, newPlayer.score);
    // console.log('obj', playerObj)
     return playerObj;
   })
    .catch(error => console.error(error));
   };

//    export { postPlayer }
