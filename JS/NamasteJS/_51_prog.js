// arrow and regular function, problem when passing object methods to callback

class Hero {
    constructor(hero) {
        this.hero = hero;
    }

    // normal function
    logName() {
            console.log(`And our hero is ${this.hero}`);
    }

    alogName = () => {
        console.log(`And our hero is ${this.hero}`);
    }
}

const batman = new Hero('Batman');

// it will pass a functiona when the function will be called it will be called w.r.t to gec i.e why undefined
setTimeout(batman.logName, 1000);

// a workaround to above problem is
setTimeout(batman.logName.bind(batman), 2000);

setTimeout(batman.alogName, 3000);