var assert = require('assert');

function doneOrNot(board){
  var valid = '1,2,3,4,5,6,7,8,9';
  //loop each line to compare against valid
  var lineCheck = board.map((a)=> a.slice().sort().toString() === valid ? true : false).reduce((a,b)=>a&b);
  //pivot columns to rows, then loop each row to compare against valid
  var columnCheck = pivot(board).map((a)=> a.slice().sort().toString() === valid ? true : false).reduce((a,b)=>a&b);
  //divide board into 9 regions and convert each into a single line
  var regionCheck = devideRegions(board).map((row)=>row.reduce((a,b)=>a.concat(b)).sort().toString() === valid ? true : false).reduce((a,b)=>a&b);
  return lineCheck && columnCheck && regionCheck ? "Finished!" : "Try again!";
}

function pivot(board) {
	var pivotBoard = [];
	//allocate pivotBoard 2D array
	while(pivotBoard.push([]) < board.length);
	board.map((r,ri)=>r.map((c,ci)=>pivotBoard[ci][ri]=c));
	debugger;
	return pivotBoard;
}

function devideRegions(board) {
	var boardChunks = board.map((a)=>{
		var chunks=[];
		for(var i=0;i<9;i+=3) chunks.push(a.slice(i,i+3));
		return chunks;
	});

	var regions = [];
	for (var k=0;k<9;k+=3) {
		for(var i=k;i<k+3;i++) {
			var row=[];
			for(var j=0;j<3;j++){
				row.push(boardChunks[j+k][i-k]);
			};
			regions.push(row);
		};
	}
	debugger;
	return regions;
	/*
	00,01,02  03,04,05 
	10,11,12  13,14,15
	20,21,22  23,24,25

	30,31,32
	40,41,42
	50,51,52
	
	60,61,62
	70,71,72
	80,81,82
	
	*/

	/*
	00,01,02 10,11,12 20,21,22  
	03,04,05 13,14,15 23,24,25
	30,31,32 40,41,42 50,51,52
	*/
}

var board = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
             [6, 7, 2, 1, 9, 5, 3, 4, 8],
             [1, 9, 8, 3, 4, 2, 5, 6, 7],
             [8, 5, 9, 7, 6, 1, 4, 2, 3],
             [4, 2, 6, 8, 5, 3, 7, 9, 1],
             [7, 1, 3, 9, 2, 4, 8, 5, 6],
             [9, 6, 1, 5, 3, 7, 2, 8, 4],
             [2, 8, 7, 4, 1, 9, 6, 3, 5],
             [3, 4, 5, 2, 8, 6, 1, 7, 9]];


assert.equal(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
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