function isSolved(board) {
	/*
	divide into 3+3+2 groups of triples
	*/
	var pivotBoard = [];
	while(pivotBoard.push([]) < board.length);
	board.map((r,ri)=>r.map((c,ci)=>pivotBoard[ci][ri]=c));

	var slashBoard = [];
	slashBoard.push(board[0][2]);
	slashBoard.push(board[1][1]);
	slashBoard.push(board[2][0]);

	var backslashBoard = [];
	backslashBoard.push(board[0][0]);
	backslashBoard.push(board[1][1]);
	backslashBoard.push(board[2][2]);

	board = board.concat(pivotBoard);
	board.push(slashBoard);
	board.push(backslashBoard);

	var draw = true;
	for (var i = 0; i < board.length; i++) {
		if (board[i][0] === 1 && board[i][1] === 1 && board[i][2] === 1)
			return 1;
		else if (board[i][0] === 2 && board[i][1] === 2 && board[i][2] === 2)
			return 2;
		else if (board[i][0] === 0 || board[i][1] === 0 || board[i][2] === 0)
			draw = false;
	};

	return draw?0:-1;

}

/*
Assume that the board comes in the form of a 3x3 array, 
where the value is 0 if a spot is empty, 1 if it is an X, or 2 if it is an O, like so:

We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won, 
or 0 if it's a cat's game (i.e. a draw).
*/

module.exports = isSolved;

console.log(isSolved([[0,0,1],
					  [0,1,2],
					  [2,1,0]]));
console.log(isSolved([[1,2,1],
					  [2,1,2],
					  [2,1,1]]));
console.log(isSolved([[2,0,1],
					  [0,1,2],
					  [1,2,0]]));
console.log(isSolved([[2,0,1],
					  [0,2,0],
					  [1,1,2]]));