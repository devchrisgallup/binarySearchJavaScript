var numbers = [1,2,3,4,5,6,7,8,9,10];
// binary search with recursion 
function binarySearch(numbers, low, high, x) {
    // if we have exhausted our indexs for the array exit
    // this means we did not find the search value in the array
    if (low > high) {
        console.log('You number ' + x + ' was not in the array');
        return -1; 
    }
    // calculate middle of index using Math.floor 
    // to return an integer
    var mid = Math.floor(low + (high - low) / 2);

    if (x == numbers[mid]) {
        // exit if we found number in middle of the array
        console.log('You number ' + x + ' was in the array'); 
        return mid;
    } else if (x < numbers[mid]) {
        // search for x in index between low and mid - 1
        return binarySearch(numbers, low, mid - 1, x);
    } else {
        // serch for x in index mid + 1 and high
        return binarySearch(numbers, mid + 1, high, x);
    }
}
binarySearch(numbers, 0, numbers.length, 8);