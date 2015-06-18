'use strict';
var assert = require('assert');
/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
    var p = 0;
    var r = array.length - 1;
    var q;
    while (p <= r) {
        q = Math.floor((r+p)/2);
        //if guessed value equals target, then break the loop and return value index
        if (array[q] === targetValue) {
            return q;
        } 
        
        //if guessed value is lower than target, 
        //start look up value one higer than guessed index between subarray last value
        //otherwise, start look up array subarray beginning  between guessed index, 
        else {
            array[q] < targetValue? p = q+1 : r = q-1;
        }
        //console.log({p:p,q:q,r:r,current:array[q]});
    }
    return -1;
};

var primes =   [2,  3,  5,  7, 11, 
                13, 17, 19, 23, 29, 
                31, 37, 41, 43, 47, 
                53, 59, 61, 67, 71, 
                73, 79, 83, 89, 97];
//var primes = [2,3,5,7,11];

var result = doSearch(primes, 19);
console.log("Found prime at index " + result);
assert.equal(doSearch(primes, 73), 20);
assert.equal(doSearch(primes, 123), -1);
assert.equal(doSearch(primes, 0), -1);