'use strict';
var assert = require('assert');

var swap = function(array, p, r) {
    var temp = array[p];
    array[p] = array[r];
    array[r] = temp;
};

var getLowestIndex = function(array, p) {
    /*
        start from p, pick the lowest value with its index
    */
    var lowestIndex = p;
    for (var i = p+1; i < array.length; i++) {
        if (array[i] < array[lowestIndex]) {
            lowestIndex = i;
        }
    }
    return lowestIndex;
};

var selectionSort = function(array) {
    for (var i = 0; i < array.length; i++) {
        var index = getLowestIndex(array, i, array.length);
        swap(array, i, index);
    }
};

var array = [64,25,12,22,11];
selectionSort(array);
console.log(array);
assert.deepEqual(array,[11,12,22,25,64]);

var array = [];
selectionSort(array);
assert.deepEqual(array,[]);

var array = [22];
selectionSort(array);
assert.deepEqual(array,[22]);

var array = [-22,33];
selectionSort(array);
assert.deepEqual(array,[-22,33]);