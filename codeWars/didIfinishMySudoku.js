var assert = require('assert');

function doneOrNot(board){
  var valid = '1,2,3,4,5,6,7,8,9';
  //loop each line to compare against valid
  var lineCheck = board.map((a)=> a.sort().toString() === valid ? true : false).reduce((a,b)=>a&b);
  //pivot columns to rows, then loop each row to compare against valid
  var columnCheck = pivot(board).map((a)=> a.sort().toString() === valid ? true : false).reduce((a,b)=>a&b);
  //divide board into 9 regions and convert each into a single line
  return lineCheck & columnCheck ? "Finished!" : "Try again!";
}

function pivot(board) {
	var pivotBoard = [];
	//allocate pivotBoard 2D array
	while(pivotBoard.push([]) < board.length);
	return board.map((r,ri)=>r.map((c,ci)=>pivotBoard[ci][ri]=c));
}

function devideRegions(board, ri, ci) {

	/*
	00,01,02
	10,11,12
	20,21,22

	03,04,05
	13,14,15
	23,24,25
	*/
}

assert.equal(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");

sert.equal(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!");
                                
assert.equal(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 0, 3, 4, 9],
                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!");