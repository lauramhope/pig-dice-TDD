import { Game, Player } from './../src/pigdice.js';

describe ('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(0);

  });

  test ('should add player to the game', () => {
    const newPlayer = { name: "Jessica"};
    game.addPlayer(newPlayer);
    expect(game.gamePlayers).toEqual({1: newPlayer});
  });

  test ('should correctly create an id for each player', () => {
    const playerId = new Game(0); 
    expect(playerId.maxId).toEqual(0);
  });
  
});



// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
//   test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });
//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isoscTriangle = new Triangle(5,5,7)
//     expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
//   });
//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });
// });