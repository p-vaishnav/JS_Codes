// constructor

function User() {
    this.name = "Vaishnav";
}
console.log(new User().name);

// hackish way mainly use in libraries

function Express(version) {
    if (!new.target) {
        return new Express(version);
    }
    this.version = version;
}

console.log(new Express("v5.12"));
console.log(new Express("v4.9.2"));
console.log(Express("v7.9.2"));

// no parenthisis is also allowed but works that way

function Success() {
    this.work = 'Hard Work';
}
const process = new Success;
console.log(process);