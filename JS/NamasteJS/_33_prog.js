// classes are functions under the hood


class IPLTeam {

    constructor(name, captain, state) {
        // super();
        this.name = name;
        this.captain = captain;
        this.state = state;
    }// constructor

    getName() {
        return this.name
    }

    getCaptain() {
        return this.captain;
    }

    getState() {
        return this.state;
    }
}

const csk = new IPLTeam('csk', 'dhoni', 'TN');

console.log(csk.getName());
console.log(csk.getCaptain());
console.log(csk.getState());