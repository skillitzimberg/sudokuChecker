export function Sudoku() {
  // this.rows = [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ];
  // this.columns = [
  //   [this.rows[0][0]], [this.rows[1][0]], [this.rows[2][0]], [this.rows[0][1]], [this.rows[1][1]], [this.rows[2][1]], [this.rows[0][2]], [this.rows[1][2]], [this.rows[2][2]]
  // ];
}

Sudoku.prototype.checkRows = function(game) {
  var result;
  game.forEach(function(row) {
    if ((row.filter(x => (x >0 && x<10)).length === row.length) && (new Set(row).size === row.length)) {
       result = true;
    } else {
      result = false;
    }
  })
  return result;
};

// Sudoku.prototype.checkColumns = function(game) {
//   var columns = [
//     [game[0][0]], [game[1][0]], [game[2][0]],
//     [game[0][1]], [game[1][1]], [game[2][1]],
//     [game[0][2]], [game[1][2]], [game[2][2]]
//   ];
//   var result;
//   columns.forEach(function(column) {
//     if ((column.filter(x => (x >0 && x<10)).length === column.length) && (new Set(column).size === column.length)) {
//        result = true;
//     } else {
//       result = false;
//     }
//   })
//   return result;
// };
