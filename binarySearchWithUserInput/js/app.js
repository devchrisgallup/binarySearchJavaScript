var output = document.getElementById('output'); 
var count = 0; 
var numbers = [];
for (var i = 0; i < 100000; i++) {
    numbers.push(i);
} 

// get value of input text field to use as the search value
function getData() {
    var x = document.getElementById('inputNumber').value;
    if (x === '') {
        output.innerHTML = 'Please Enter a number to use to search our array.'; 
        return -1; 
    }
    // convent string to integer
    x = parseInt(x);
    var low = 0; 
    binarySearch(numbers, low, numbers.length - 1, x);
    document.getElementById('inputNumber').value = '';
}

// binary search with recursion 
function binarySearch(numbers, low, high, x) {
    // keep track of how many time the function has been called
    count++; 
    // if we have exhausted our indexs for the array exit
    // means that we did not find the search value in the array
    if (low > high) {
        output.innerHTML = 'You number ' + x + ' was not in the array of ' + numbers.length + ' <br>' + count + ' function calls';
        count = 0;  
        return -1; 
    }
    // calculate middle of index using Math.floor 
    // to return an integer
    var mid = Math.floor(low + (high - low) / 2);

    if (x == numbers[mid]) {
        // exit if we found number in middle of the array
        output.innerHTML = 'You number ' + x + ' was in the array of ' + numbers.length + ' <br>' + count + ' function calls'; 
        count = 0;
        return mid;
    } else if (x < numbers[mid]) {
        // search for x in index between low and mid - 1
        return binarySearch(numbers, low, mid - 1, x);
    } else {
        // serch for x in index mid + 1 and high
        return binarySearch(numbers, mid + 1, high, x);
    }
}

// Event listener for a button with an ID of btn
document.getElementById('btn').addEventListener('click', getData, false); 
