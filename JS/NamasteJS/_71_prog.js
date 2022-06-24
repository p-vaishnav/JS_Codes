const fun = (function(a) {
    delete a;
    return a;
})(5);
console.log(fun);