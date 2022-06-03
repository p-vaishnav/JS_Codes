function fun4(a, b, ext) { // themeing
    if (ext) {
        console.log(a, b); // html append css state formatting
    } else {
        console.log("In else block");
    }
}
function fun3(a, b, ext) {
    fun4(a, b, ext);
}

function fun2(a, b, ext) {
    fun3(a, b, ext);
}

function fun1(a, b, ext) {
    // grid state formatting
    fun2(a, b, ext);
}

// tumhara use case
fun1(10, 20, true);

// different use case
fun1(10, 20);

