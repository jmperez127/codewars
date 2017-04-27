
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
function getPossibleNumbers(puzzle, cell, missingGridNumbers){
  let possible = [];
  missingGridNumbers.filter((n)=>{
    if(puzzle[cell.row].indexOf(n) === -1)
      possible.push(n)
    // for(var col = 0; col < 9; col++){
    //   if(col > 0)
    //     puzzle[cell.row][col]
    // }


  })
  return possible

}

function sudoku(puzzle) {


  //find a 0 in the mix;
  //get remaining numbers on the 3x3 grid
  //scan horizontally and get a list of possible numbers for that position
  //scan vertical and trim the list of previous possible numbers for this position.
  //if no clear one can be placed move to the next 0.
  //repeat but this time check where only one number is possible
  let possibleMatrix = [];
  let filledGridValues = []
  for (let row = 0; row < 9; row++) {
    let isABoundryRow = (row + 1) % 3 === 0;
    let isFirstRow = (row) % 3 === 0;
    let isMiddleRow = !isABoundryRow && !isFirstRow;

    for (let col = 0; col < 9; col++) {
      let isABoundryCol = (col + 1) % 3 === 0;
      let isFirstCol = (col) % 3 === 0;
      let isMiddleCol = !isABoundryCol && !isFirstCol;

      if (puzzle[row][col] === 0) {
        //get grid values

        if (isABoundryCol && isFirstRow) {
          let filledGridValues = [
            puzzle[row][col - 2], puzzle[row][col - 1],
            puzzle[row + 1][col - 2], puzzle[row + 1][col - 1], puzzle[row + 1][col],
            puzzle[row + 2][col - 2], puzzle[row + 2][col - 1], puzzle[row + 2][col],
          ].filter((e) => e > 0);
        }
        let missingGridNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((n) => filledGridValues.indexOf(n) === -1);
        // console.log(getPossibleNumbers(puzzle, {row, col}, missingGridNumbers), "row:",row, "col:",col);
      }

    }
  }

  function getGridValues(puzzle){
    let grid = [];
    for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      if((j) % 3 === 0)
        try{
      grid[j] = [
        [puzzle[i][j], puzzle[i][j+1], puzzle[i][j+2]],
        [puzzle[i+1][j], puzzle[i+1][j+1], puzzle[i+1][j+2]],
        [puzzle[i+2][j], puzzle[i+2][j+1], puzzle[i+2][j+2]]
      ]
        }catch(e){

        }
    }
    }

    // grid[0] = [
    //   puzzle[0][0], puzzle[0][1], puzzle[0][2],
    //   puzzle[1][0], puzzle[1][1], puzzle[1][2],
    //   puzzle[2][0], puzzle[1][1], puzzle[2][2]
    // ]
    return grid;
  }
  console.log(getGridValues(puzzle));

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