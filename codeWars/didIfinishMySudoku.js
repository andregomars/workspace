var assert = require('assert');

/*
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

}
*/

function doneOrNot(board){
	var regions = []
	for (var i = 0; i < 9; i++) {
		var row = [], col = [], region = [];
		for (var j = 0; j < 9; j++) {
			row.push(board[i][j]);
			col.push(board[j][i]);
			region.push(board[Math.floor(j/3)+Math.floor(i/3)*3][j%3+(i%3)*3]);
		};
		regions.push(row.sort().join(''));
		regions.push(col.sort().join(''));
		regions.push(region.sort().join(''));
	};
	return regions.reduce((a,b)=>b==='123456789'?true&a:false&a,true) ? "Finished!" : "Try again!";
}

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
	//0,1,2 -- 0   floor(i/3)*3
	//3,4,5 -- 3	
	//6,7,8 -- 6

   	/*
	--i=0  m,n   m:floor(j/3)+floor(i/3)*3  n:j%3+(i%3)*3
	j = 0: 0,0
	j = 1: 0,1
	j = 2: 0,2
	j = 3: 1,0
	j = 4: 1,1
	j = 5: 1,2
	j = 6: 2,0
	j = 7: 2,1
	j = 8: 2,2

	--i=1  m,n	m:floor(j/3)+floor(i/3)*3  n:j%3+(i%3)*3
	j = 0: 0,3
	j = 1: 0,4
	j = 2: 0,5
	j = 3: 1,3
	j = 4: 1,4
	j = 5: 1,5
	j = 6: 2,3
	j = 7: 2,4
	j = 8: 2,5

	--i=3  m,n	m:floor(j/3)+floor(i/3)*3	n:j%3+(i%3)*3
	j = 0: 3,0
	j = 1: 3,1
	j = 2: 3,2
	j = 3: 4,0
	j = 4: 4,1
	j = 5: 4,2
	j = 6: 5,0
	j = 7: 5,1
	j = 8: 5,2
	*/


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