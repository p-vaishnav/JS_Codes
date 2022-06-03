// comparing functions and class in js

function RXJs(observable, observer) {
    // this = {}; this.__proto__ = RXJs.protoype
    this.observable = observable;
    this.observer = observer;
    // return this
}

RXJs.prototype.listenEvent = function(value) {
    value = this.observer(value);
    console.log(value);
}

const observer = new RXJs('numbers', (v) => v*2)
observer.listenEvent(1);
observer.listenEvent(2);
observer.listenEvent(3);
observer.listenEvent(4);
