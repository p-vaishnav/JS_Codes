// regular and arrow function w.r.t to this keyword
function IPLTeam(name, captain) {
    this.name = name;
    this.captain = captain;
}

const rcb = new IPLTeam('rcb', 'Faf')
console.log(rcb);


const Car = (name, brand) => {
    this.name = name;
    this.brand = brand;
}

// TypeError: Car is not a constructor
// I need to check it deeply why it is failing
const creta = new Car('Creta', 'Hyundai');
console.log(creta);