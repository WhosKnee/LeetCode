// In Binary Search we attempt to find an item in a sorted array
// we will input an array and return the index at which the desired item is at

var BinarySearch = function(array, value){
    // create pointers to the 0th and last index
    left = 0;
    right = array.length;

    // while right > left we will search for the item
    while(right > left){
        // get the middle index, dependent on the left and right pointers
        middle = (left + right)/2;
        // check the middle index
        if(array[middle] == value){
            return middle;
        }
        // else check where the value would be relative to the middle element and tighten
        // the appropriate bound
        else if(array[middle] < value){
            // update the left pointer since we know that the value will be to the right of the middle index
            left = middle + 1;
        }
        else if(array[middle] > value){
            // update the right pointer since we know that the value will be to the left of the middle index
            right = middle -1;
        }
    }
    // if the item was not found return -1
    return -1;
}
// expected output on the console is 1
console.log(BinarySearch([1,2,3,4,5,6], 2));