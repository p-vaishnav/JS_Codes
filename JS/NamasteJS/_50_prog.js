// arguments object, in regular and arrow function

function IPLTeam(name, captain, state) {
    console.log(arguments);
}
IPLTeam('rcb', 'faf', 'Karnataka');

function myRegularFunction(a, b) {
    const arrowFunction = (c, d) => {
        console.log(arguments);
    }
    arrowFunction('c', 'd');
}
myRegularFunction('a', 'b');