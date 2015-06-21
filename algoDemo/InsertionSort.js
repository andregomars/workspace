'use strict';
var assert = require('assert');

var swap = function(array, p, r) {
    var temp = array[r];
    array[p] = array[r];
    array[r] = temp;
};

var insertSortedArray = function(array, p, r){
    var temp = array[r];
    for (var i = r-1; i >= p; i--) {
        if(array[i] < array[r]) {
            array[i+1] = temp;
            return;
        } else {
            array[i+1] = array[i];
        }
    };
};

var insertionSort = function(array) {
    for (var i = 1; i < array.length; i++) {
        insertSortedArray(array, 0, i);
    };
};

var array = [64,25,12,22,11];
insertionSort(array);
console.log(array);
assert.deepEqual(array,[11,12,22,25,64]);

var array = [];
insertionSort(array);
assert.deepEqual(array,[]);

var array = [22];
insertionSort(array);
assert.deepEqual(array,[22]);

var array = [-22,33];
insertionSort(array);
assert.deepEqual(array,[-22,33]);