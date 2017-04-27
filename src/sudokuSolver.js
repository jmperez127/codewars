function sudoku(puzzle) {


  //find a 0 in the mix;
  //get remaining numbers on the 3x3 grid
  //scan horizontally and get a list of possible numbers for that position
  //scan vertical and trim the list of previous possible numbers for this position.
  //if no clear one can be placed move to the next 0.
  //repeat but this time check where only one number is possible
  let possibleMatrix = []
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {

      if( puzzle[row][col] === 0){
        //get grid values
        let isABoundryCol = (col+1) % 3  === 0;
        let isFirstCol = (col) % 3  === 0;
        let isMiddleCol = !isABoundryCol && !isFirstCol;

      }
    }
  }

  var puzzle2 = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

  // console.log(puzzle[0][1])

  var solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];


}

export default sudoku;