

var countAndSay = function(n) {
    var indexList = n.toString().split('').reduce(function(group, num) {
        group[num] = (group[num]||0) + 1;
        return group;
    },{});

    return indexList;
}

var n = 55331111;
console.log(n);
console.log(countAndSay(n));