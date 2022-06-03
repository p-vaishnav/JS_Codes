// repeating _19_prog.js


const iplTeam = {
    getCaptain: function() {
        return this.captain;
    },
    getName: function() {
        return this.name;
    },
    getState: function() {
        return this.state;
    }
}

function createIplTeam(captain, name, state) {
    const team = Object.create(iplTeam);
    team.captain = captain;
    team.name = name;
    team.state = state;
    return team;
}

const csk = createIplTeam('dhoni', 'csk', 'TN');
console.log(csk.getCaptain());
console.log(csk.getName());
console.log(csk.getState());