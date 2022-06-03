// closure is a function bundled with its lexical environment
function y() {
    var a = 'success';
    function x() {
        console.log(a);
    }
    x();
}
y();


function t() {
    var b = 'patience';
    return function m() {
        console.log(b);
    }
}

t()();

function makeAdder(x) {
    return (y) => {
        return () => {
            return x + y;
        }
    }
}

// a function bundled with its lexical environment is called closure
let add5 = makeAdder(5);
let add10 = add5(5);

add10();

function printName() {
    console.log(this.name + ' ' +this.last);
}

const person = {name: 'vaishnav', last: 'pureddiwar'};

printName.call(person);

// memory leak
function temp() {
    const _arr = new Array(100000000);
    _arr.fill(new Object({}));
    const button = document.getElementById('btn');

    button.onclick = () => {
        console.log(_arr);
    };
}

// temp();



