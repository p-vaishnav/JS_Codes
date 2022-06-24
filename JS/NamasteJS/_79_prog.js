// how arrow function and normal function behaves inside object??

const square = {
    side: 5,
    area: function() {
        return this.side * this.side;
    },
    perimeter: () => {
        return 4*this.side;
    }
};

console.log(square.area()); // will give a output of 25
console.log(square.perimeter()); // will give a output of NaN as this is resolved lexically inside arrow function and is indepedent of caller of it 