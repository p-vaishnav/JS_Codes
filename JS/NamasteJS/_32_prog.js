

function createIplTeam(name, captain, state) {
    // const this = {}; internally this happens when function is called with new
    this.name = name;
    this.captain = captain;
    this.state = state;
    // return this
}

createIplTeam.prototype.getCaptain =  function() {
    return this.captain;
}

createIplTeam.prototype.getName =  function() {
    return this.name;
}

createIplTeam.prototype.getState =  function() {
    return this.state;
}

const csk = new createIplTeam('csk', 'dhoni', 'TN');

console.log(csk.getCaptain());
console.log(csk.getName());
console.log(csk.getState());