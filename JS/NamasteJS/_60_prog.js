// try this fuction
// sum(10)(20)(30)


function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(sum(10)(20)(30));

// currying in js
// evaluate('sum')(10)(20)
// evaluate('divide')(20)(10)


function evaluate(operation) {
    return (a) => {
        return (b) => {
            switch (operation) {
                case 'SUM':
                case 'sum':
                    return a + b;
                case 'DIV':
                case 'div':
                    return a / b;
                case 'MUL':
                case 'mul':
                    return a * b;
                case 'SUB':
                case 'sub':
                    return a - b;
            }
        }
    }
}
console.log('--------------------------');
console.log(evaluate('sum')(1)(1));
console.log(evaluate('SUM')(1)(1));
console.log(evaluate('div')(4)(2));
console.log(evaluate('DIV')(4)(2));
console.log(evaluate('mul')(2)(1));
console.log(evaluate('MUL')(2)(1));
console.log(evaluate('sub')(6)(4));
console.log(evaluate('SUB')(6)(4));