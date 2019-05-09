// Insertion Sort is a sorting algorithm which works in O(n^2)

var InsertionSort = function(array){
    // create a loop which will iterate i-1 times, where i is the length of the array
    // note that we start at i = 1 as we assume that the first element (at index 0) is in the right place
    for(i = 1 ; i < array.length ; i++){
        // create new variable which will decrease everytime we swap an element in the array
        j = i;
        while(array[j] < array[j-1] && j > 0){
            // swap their values
            buffer = array[j-1]
            array[j-1] = array[j];
            array[j] = buffer;
            // decrement j by one
            j -= 1;
        }
    }
    // return the sorted array
    return array;
}

// note that a sorted array with decreasing elements is the upper bound of running time where Time Complexity is O(n^2)
console.log(InsertionSort([5,4,3,2,1]));