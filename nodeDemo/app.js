var countAndSay = function(n) {
	//split into array.
	//loop each item, store current value 
	//and push into stack
	//if current item same as peak, continue push
	//otherwise, pop whole stack out with length value

	var input = (''+n).split('');
	var output = [];
	var temp = [];

	//
	for (var val of input) {
		//when value same as temp peak, or temp is empty
		if (temp.length === 0 || val === temp[0]) { 
			temp.push(val); //put current value into stack
		}
		else {  //when curent value not the same as peak
			//1. got length of temp, and insert into output
			output.push(temp.length.toString());
			//2. insert temp peak value into output
			output.push(temp[0]);
			//3. pop out all values from temp
			temp = [];
			//4. insert current value to temp
			temp.push(val);	
		}
	}

	//don't forget the remains in the temp
	if (temp.length > 0) {
		output.push(temp.length.toString());
		output.push(temp[0]);
		temp = [];
	}

	return output.join('');
};

var n = 'abbccddn';
console.log(n);
console.log(countAndSay(n));