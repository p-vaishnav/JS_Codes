class Timer {
    constructor(time) {
        this._time = time;
    }

    get time() {
        return this._time;
    }

    set time(time) {
        this._time = time;
    }

    incremet() {
        this.time++;
    }

    decrement() {
        this.time--;
    }
}

const t = new Timer(10);
console.log(t._time);
t.incremet();
console.log(t._time);
t.decrement();
console.log(t._time);
