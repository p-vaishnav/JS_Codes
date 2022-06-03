/*const calc = {
    total: 0,
    add:  function(a) {
        this.total = this.total + a;
        return this;
    },
    multiply: function(a) {
        this.total = this.total * a;
        return this;
    },
    sub: function(a) {
        this.total = this.total - a;
        return this;
    }
 };*/

 // checking with arrow function
 const calc = {
    total: 0,
    add:  (a, context) => {
        context.total = context.total + a;
        return context;
    },
    multiply: (a, context) => {
        context.total = context.total * a;
        return context;
    },
    sub: (a, context) => {
        context.total = context.total - a;
        return context;
    }
 };
const result = calc.add(10, calc).multiply(3, calc).sub(10, calc);
console.log(result.total);