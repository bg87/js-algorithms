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

function factorial(int) {
    if(int <= 1) {
        return int;
    }
    return int * factorial(int - 1);
}

console.log(factorial(5));