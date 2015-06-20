var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    /* loop from index 0 to len(array) - 1:
        minIndex = indexOfMinimum(array, index) //min of subarray
        swap array[index] with array[minIndex]
        
    */
    for (var i = 0; i < array.length; i++)
    {
        var minIndex = indexOfMinimum(array, i);
        swap(array, i, minIndex);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array2 = [23,89,11,4,22];
selectionSort(array2);
Program.assertEqual(array2, [4,11,22,23,89]);
