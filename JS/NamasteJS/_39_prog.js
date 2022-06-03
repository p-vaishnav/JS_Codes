// function expression, function statement or function declaration
// first class function

// function statement aka function declaration

function _print1() {
    console.log('success');
}
_print1();

// function expression
var _print2 = function() {
    console.log('patience');
}
_print2();

// main difference between function expression and function statement
// is function statement are hoisted i.e can be called before declaration


//---anonymous functions
// functions having no name are anonymous function

//---Named function expression
var _print3 = function _print4() {
    console.log('Excellence');
}
_print3();
// _print4(); // refernced error reason because _print4 is not defined in the global scope
