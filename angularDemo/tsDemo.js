'use strict';
function getSum(x, y, z) {
    return x + y + z;
}
;
var args = [1, 2, 3];
var sum = getSum.apply(void 0, args);
console.log(sum);
console.log("this \nis \n\tfrom no where");
