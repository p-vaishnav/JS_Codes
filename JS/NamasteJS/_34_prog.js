// achieve two level of inheritance via setPrototypeOf Method

const basicAmmenities = {
    getSecurity: function() {
        return 'Z+';
    },
    getStay: function() {
        return 'In JW-Marriot Group';
    }
};

function createTeam(isIPLTeam = false) {
    const team = Object.create(basicAmmenities);
    team.isIPLTeam = isIPLTeam;
    return team;
}

const iplTeam = {
    getName: function() {
        return this.name;
    },
    getCaptain: function() {
        return this.captain;
    },
    getState: function() {
        return this.state;
    }
}

Object.setPrototypeOf(iplTeam, basicAmmenities);

function createIPLTeam(name, captain, state) {
    const team = createTeam(true);
    Object.setPrototypeOf(team, iplTeam);
    team.name = name;
    team.captain = captain;
    team.state = state;
    return team;
}

const csk = createIPLTeam('CSK', 'DHONI', 'TN');
console.log(csk.getName());
console.log(csk.getCaptain());
console.log(csk.getState());
console.log(csk.getSecurity());
console.log(csk.getStay());