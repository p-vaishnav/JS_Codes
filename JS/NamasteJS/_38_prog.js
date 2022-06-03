// what will be output of below code

function output1() {
    for(var i = 1;  i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}


function output2() {
    // below code worked as Block scope is generated if let is used but in case of var it is complete closure of function
    for(let i = 1;  i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}

function output3() {
    for(var i = 1;  i <= 5; i++) {
        setTimeout((i) => {
            console.log(i);
        }, i*1000);
    }
}


function output4() {
    // below code worked as Block scope is generated if let is used but in case of var it is complete closure of function
    var a = 'success';
    for(let i = 1;  i <= 5; i++) {
        setTimeout(() => {
            // js preverse lexical environment for a and i
            console.log(i, a);
        }, i*1000);
    }
}

function output5() {
    for(var i = 1;  i <= 5; i++) {
        function _closure(i) {
            setTimeout(() => {
               // js preverse lexical environment for a and i
               console.log(i);
            }, i*1000);
        };
        _closure(i);
    }
}

function output6() {
    // below code worked as Block scope is generated if let is used but in case of var it is complete closure of function
    var a = 'success';
    for(let i = 1;  i <= 5; i++) {
        setTimeout(() => {
            // js preverse lexical environment  i only
            console.log(i);
        }, i*1000);
    }
}
