'use strict';
var assert = require('assert');

var swap = function(array, p, r) {
    var temp = array[r];
    array[p] = array[r];
    array[r] = temp;
};

function insertLastOne(array, r, value){
    for (var j = r-1; j >= 0 && array[j] > value; j--) {
        array[j+1] = array[j];
    }
    array[j+1] = value;
};

var insertionSort = function(array) {
    for (var i = 1; i < array.length; i++) {
        insertLastOne(array, i, array[i]);
    };
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log(array);
assert.deepEqual(array,[7, 9, 11, 22, 42, 88, 99]);

var array = [];
insertionSort(array);
assert.deepEqual(array,[]);

var array = [22];
insertionSort(array);
assert.deepEqual(array,[22]);

var array = [-22,33];
insertionSort(array);
assert.deepEqual(array,[-22,33]);