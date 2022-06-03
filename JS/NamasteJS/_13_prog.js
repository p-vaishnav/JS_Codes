// what is a rest parameter?

// rest parameter helps to accepts indefinite number of arguments in a function

function sumOfArray(...nums) {
    let sum = 0;
    for(let i of nums) {
        sum += i;
    }
    return sum;
}

console.log(sumOfArray(1, 2, 3, 4, 5, 6, 7, 8, 9))

/*const fun2 = (...nums, a, b) => {
    // error SyntaxError: A rest parameter must be last in the list
}*/