'use strict';
var assert = require('assert');
/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue) {
    return doSubSearch(array, 0, array.length-1, targetValue);
};

var doSubSearch = function(array, p, r, targetValue) {
    //base: when p > r, then stop recursive call and return -1
    if (p > r) {
        return -1;
    }

    var q = Math.floor((p+r)/2);
    console.log({p:p,q:q,r:r,current:array[q]});

    if (array[q] === targetValue) {
        return q;
    }
    //right hand group
    else if (array[q] < targetValue) {
        return doSubSearch(array, q+1, r, targetValue);
    }
    //left hand group
    else {
        return doSubSearch(array, p, q-1, targetValue);
    }
}

var primes =   [2,  3,  5,  7, 11, 
                13, 17, 19, 23, 29, 
                31, 37, 41, 43, 47, 
                53, 59, 61, 67, 71, 
                73, 79, 83, 89, 97];

var result = doSearch(primes, 19);
console.log("Found prime at index " + result);
assert.equal(doSearch(primes, 5), 2);
assert.equal(doSearch(primes, 73), 20);
assert.equal(doSearch(primes, 41), 12);
assert.equal(doSearch(primes, 123), -1);
assert.equal(doSearch(primes, 0), -1);