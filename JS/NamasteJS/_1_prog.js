// hositing
console.log(a);
var a = 100;
console.log(a);

// hoisting works differently in functions
console.log(hFun);
function hFun() {
    console.log("Excellence!!");
}

// hoisting don't work here
console.log(hFun2);
var hFun2 = function() {
    console.log("Patience");
}

console.log(hFun3);
var hFun3 = () => {
    console.log("Not Focus on result");
}