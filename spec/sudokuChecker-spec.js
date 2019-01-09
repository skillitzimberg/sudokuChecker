import { Sudoku } from './../src/sudokuChecker';

describe('Sudoku', function() {
  var goodGame;
  var badGame;
  // it('should test that sudokuChecker returns rows property', function() {
  //   var newGame = new Sudoku();
  //   expect(newGame.rows).toEqual([ [1, 2, 3], [1, 2, 3], [1, 2, 3] ])
  // });

  goodGame = [
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 2, 5, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, 1, 2, 9, 5],
    [3, 8, 7, 1, 2, 4, 6, 5, 9],
    [5, 9, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, 3, 7],
    [8, 7, 3, 5, 1, 2, 9, 6, 4]
  ]

  badGame = [
    [1, 5, 2, 4, 8, 9, 3, 7, 6],
    [7, 3, 9, 9, 5, 6, 8, 4, 1],
    [4, 6, 8, 3, 7, 1, 2, 9, 5],
    [3, 'g', 7, 1, 9, 4, 6, 5, 9],
    [5, 9, 1, 7, 6, 3, 4, 2, 8],
    [2, 4, 6, 8, 9, 5, 7, 1, 3],
    [9, 1, 4, 6, 3, 7, 5, 8, 2],
    [6, 2, 5, 9, 4, 8, 1, 3, 7],
    [8, 7, 3, 5, 1, 2, 9, 6, 4]
  ]

  it('should test that no numbers repeat in a row', function() {
    var newGame = new Sudoku();
    expect(newGame.checkRows(badGame)).toEqual(true);
  });
  //
  // it('should test that no numbers repeat in a column', function() {
  //   var newGame = new Sudoku();
  //   expect(newGame.checkColumns(badGame)).toEqual(true);
  // });
});
