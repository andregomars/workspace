var countAndSay = function(n) {
	//n is divided by 10, and every level of 10 has the number of the current level
    //solution: using string[]
    //iterate start from 1 to n-1, stores visted value, if current value equals visited value, increase num, else print visited value
    
    //split values into array
    //loop and store visited value,
    //if encountered before, num++,
    //otherwise, output visited value
    if (!n || !Number.isInteger(n) || n < 0) return null; //return null if n is exceptional

    if (n < 10) return('1'+n);  //a single number

    var array = (n+'').split('');
    var visitedVal = array[0];
    var num = 1;
    var output = new Array();
    for(var i = 1; i < array.length; i++) {
    	var val = array[i];
    	if (visitedVal === val) {
    		num++;
    	}
    	else {
    		output.push(num.toString());
    		output.push(visitedVal);
    		num = 1;
    		visitedVal = val;
    	}

		if (i === array.length-1) {
			output.push(num.toString());
			output.push(visitedVal);
		}  	
    }
    
    return output.join('');
    //alter: using int only
};

var n = 55331111;
console.log(n);
console.log(countAndSay(n));