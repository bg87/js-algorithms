// base case. When the function will stop calling itself. (if statement)
// function call.

function loopNTimes(n) {
    console.log(n);
    if(n <= 1) {
        return "done";
    }
    loopNTimes(n - 1);
}

// console.log(loopNTimes(10));

function factorial(n) {
    if(n <= 1) return 1;
    return n * factorial(n - 1);
}

// console.log(factorial(5));

function exponent(base, expo) {
    if(expo === 0) {
        return 1;
    }
    return base * exponent(base, expo - 1);
}

// console.log(exponent(2, 3));

function countRecursive(start, end) {
    function recurse(start) {
        console.log(start);
        if(start < end){
            recurse(start + 1);
        }
    }
    recurse(start);
}

// console.log(countRecursive(5, 10));


function multiplier(arr, num) {
    var newArr = [];
    function multiply() {
        if(arr.length > 0) {
            newArr.push(arr.shift() * num);
            multiply();
        }
    }
    multiply();
    return newArr;
}

// console.log(multiplier([1,2,3], 2));

function moarMultiplier(arr, num) {
    if(arr.length === 0) {
        return arr;
    }
    var last = arr.pop()
    moarMultiplier(arr, num);
    arr.push(last * num);
    return arr;
}

console.log(moarMultiplier([1,2,3], 2));

function reverse(arr) {
   var reversedArr = [];
   function addItems() {
       if(arr.length > 0){
          reversedArr.push(arr.pop()); 
          addItems;
       }
   }
   addItems();
   return reversedArr;
}

// console.log(reverse([1,2,3]));

function fibonacci(n) {
    if(n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(20));

