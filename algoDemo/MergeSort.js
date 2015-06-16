var assert = require('assert');
// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
var merge = function(array, p, q, r) {
    // This code has been purposefully obfuscated,
    //  as you'll write it yourself in next challenge.
    var a=[],b=[],c=p,d,e;for(d=0;c<=q;d++,c++){a[d]=array[c];}for(e=0;c<=r;e++,c++){b[e]=array[c];}c=p;for(e=d=0;d<a.length&&e<b.length;){if(a[d]<b[e]){array[c]=a[d];d++;} else {array[c]=b[e]; e++;}c++; }for(;d<a.length;){array[c]=a[d];d++;c++;}for(;e<b.length;){array[c]=b[e];e++;c++;}
};


// Takes in an array and recursively merge sorts it
var mergeSort = function(array, p, r) {
    if (r > p){
    	//divide
        var q = Math.floor((p+r)/2);   
        mergeSort(array, p, q);    //[0..3] -> [0..1][2..3] -> [0..0][1..1]/[2..2][3..3]
        mergeSort(array, q+1, r);  //[4..7] -> [4..5][6..7]  -> [4..4][5..5]/[6..6][7..7]
        //combine
        merge(array, p, q, r);


        /*
        	1. p:0,q:0,r:1
        		mergeSort(array, 0, 0);
        		mergeSort(array, 1, 1);
        		merge(array, 0, 0, 1);
        	2. p:2,q:2,r:3
        		mergeSort(array, 2, 2);
        		mergeSort(array, 3, 3);
        		merge(array, 2, 2, 3);
        	3. merge(array, 0, 1, 3);
        	4. p:4,q:4,r:5
        		mergeSort(array, 4, 4);
        		mergeSort(array, 5, 5);
        		merge(array, 4, 4, 5);
        	5. p:6,q:6,r:7
        		mergeSort(array, 6, 6);
        		mergeSort(array, 7, 7);
        		merge(array, 6, 6, 7);
        	4. merge(array, 4, 5, 7);
        	6. merge(array, 0, 3, 7)

        */
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
assert.deepEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

var array = [14, 7, 0, 12, 9, 11, 18, 6, -2];
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
assert.deepEqual(array, [-2, 0, 6, 7, 9, 11, 12, 14, 18]);

var array = [14];
mergeSort(array, 0, array.length-1);
console.log("Array after sorting: " + array);
assert.deepEqual(array, [14]);
