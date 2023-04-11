export function Game(){
  this.gamePlayers = {}
  this.currentId = 1;
  this.maxId = 0;
}

Game.prototype.addPlayer = function(player){
  player.id = this.assignId();
  this.gamePlayers[player.id] = player;
};

Game.prototype.assignId = function(){
  this.maxId += 1;
  return this.maxId;
};

// Game.prototype.findPlayer = function() {
//   let currentPlayer;
//   Object.keys(this.gamePlayers).forEach(function(key) {
//     if(this.currentId.toString() === key){
//       currentPlayer = this.gamePlayers[key];
//     }
//   });
//   return currentPlayer;
// };

// Game.prototype.updateCurrentId = function(){
//   if(this.currentId >= this.maxId){
//     this.currentId = 1;
//   } else {
//     this.currentId += 1;
//   }
// };

export function Player(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;  
  this.roundScore = 0;
  this.roll = 0;
}

Player.prototype.playerTurn = function() {
  this.rollDice();
  this.roundScore += this.roll;
};

Player.prototype.rollDice = function() {
  this.roll = Math.ceil(Math.random()*6); 
};

// Player.prototype.checkWin = function(){
//   if(this.roundScore + this.totalScore >= 100){
//     return true;
//   } else { 
//  return false; 
// };

// Player.prototype.holdDice = function(){
//   this.totalScore += this.roundScore;
//   this.roundScore = 0;
//   this.roll = 0;
// };







// export default function Triangle(side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// }

// Triangle.prototype.checkType = function() {
//   if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//     return "not a triangle";
//   } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//     return "scalene triangle";
//   } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//     return "equilateral triangle";
//   } else {
//     return "isosceles triangle";
//   }
// };