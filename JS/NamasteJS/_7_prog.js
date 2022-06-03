// What is function declaration and what is function expression?

work();

// function declaration ; they are hoisted and can be accessed before initialization
function work() {
    console.log('Success');
}

// below one won't work
// goalOfLife();
// function Expression
var goalOfLife = function() {
    console.log('Karma Yoga');
}

goalOfLife();