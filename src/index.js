import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Game, Player } from './pigdice.js';

let game = new Game();

function displayGame(gameToDisplay, branch)  {
  let rolledOne = false;
  switch(branch){
    case(1): 
      if(gameToDisplay.maxId === 1){
        currentPlayer = gameToDisplay.gamePlayers[1];
      }
    break;
    case(2):
      Object.keys(gameToDisplay.gamePlayers).forEach(function(key) {
        if(gameToDisplay.currentId.toString() ===  key){
          currentPlayer = gameToDisplay.gamePlayers[key];
          currentPlayer.playerTurn();
        }
      });
      if(currentPlayer.roll === 1){
        rolledOne = true;
        currentPlayer.roundScore = 0;
        gameToDisplay.updateCurrentId();
        currentPlayer = gameToDisplay.gamePlayers[gameToDisplay.currentId];
      }
      currentPlayer.checkWin();
      break;
    case(3):
    Object.keys(gameToDisplay.gamePlayers).forEach(function(key) {
      if(gameToDisplay.currentId.toString() ===  key){
        currentPlayer = gameToDisplay.gamePlayers[key];
        currentPlayer.holdDice();
      }
    });
    gameToDisplay.updateCurrentId();
    currentPlayer = gameToDisplay.gamePlayers[gameToDisplay.currentId];
    break;
}
    changeInfoPlayer(currentPlayer,rolledOne);
}

function changeInfoPlayer(currentPlayer,rolledOne){
  if(rolledOne){
    document.querySelector("#rolled-one").innerText = "Sorry the previous player rolled a one and it is not their turn anymore!";
  } else{
    document.querySelector("#rolled-one").innerText = "";
  }
  document.querySelector("#player-name").innerText = currentPlayer.playerName;
  document.querySelector("#roll-amount").innerText = currentPlayer.roll;
  document.querySelector("#round-amount").innerText = currentPlayer.roundScore;
  document.querySelector("#total-score").innerText = currentPlayer.totalScore;  
}

function updateTotalPlayers(game){
  document.querySelector("#total-player").innerText ="";
  let totalPlayers = [];
  Object.keys(game.gamePlayers).forEach(function(key){
    totalPlayers.push(" " + game.gamePlayers[key].playerName)
  })
  document.querySelector("#total-player").append(totalPlayers);
}

function handleFormSubmission(event)  {
  event.preventDefault();
  const inputtedPlayerName = document.querySelector("input#name1").value;
  let newPlayer = new Player(inputtedPlayerName);
  game.addPlayer(newPlayer);
  // add newPlayer to game here if we make a Game() constructor
  displayGame(game,1); 
  updateTotalPlayers(game);
  document.querySelector("input#name1").value = null;
}

function handleRollButton(event)  {
  event.preventDefault();
  displayGame(game,2);
}

function handlePassButton(event)  {
  event.preventDefault();
  displayGame(game,3);
}
  
window.addEventListener("load", function(){
  document.querySelector("form#game-setup").addEventListener("submit", handleFormSubmission);
  document.querySelector("button#roll").addEventListener("click", handleRollButton);
  document.querySelector("button#hold").addEventListener("click", handlePassButton);
});





// function handleTriangleForm(event) {
//   event.preventDefault();
//   document.querySelector('#response').innerText = null;
//   const length2 = parseInt(document.querySelector('#length2').value);
//   const length1 = parseInt(document.querySelector('#length1').value);
//   const length3 = parseInt(document.querySelector('#length3').value);
//   const triangle = new Triangle(length1, length2, length3);
//   const response = triangle.checkType();
//   const pTag = document.createElement("p");
//   pTag.append(response);
//   document.querySelector('#response').append(pTag);
// }

// window.addEventListener("load", function() {
//   document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
// });
