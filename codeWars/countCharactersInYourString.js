var assert = require('assert');

/*
function count (str) {  
  var list = [];
  for (var i = 0; i < str.length; i++) {
  	var index = exists(list, str[i]);
  	if (index < 0) list.push([str[i],1]);
  	else list[index][1]++;
  };
  
  return array2obj(list);
}

function exists (list, letter) {
	for (var i = 0; i < list.length; i++) {
		if(list[i][0] === letter) return i;
	};
	return -1;
};

function array2obj (array) {
	var obj = {};
	for (var i = 0; i < array.length; i++) {
		obj[array[i][0]] = array[i][1];
	};
	return obj;
};
*/

// function count (string) {  
//   var list = {};
//   string.split('').forEach((s) => list[s] ? list[s]++ : list[s] = 1 );
//   return list;
// }

function count (string) {
  return string.split('').reduce(function(list,char){
    list[char] = (list[char]||0) + 1;
    return list;
  },{});
}

assert.deepEqual(count('aba'),{'a':2,'b':1});
assert.deepEqual(count('aaa'),{'a':3});
assert.deepEqual(count('a'),{'a':1});
assert.deepEqual(count(''),{});
