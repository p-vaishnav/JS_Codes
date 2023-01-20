// different syntax while using an extends keyword
// a complex class inheritance logic can also be written

function f(job) {
    switch(job) {
        case 'fire-fighter':
            return class {
                job() {
                    return 'To Protect People';
                }
            };
        
        case 'software-engineer':
            return class {
                job() {
                    return 'To Write Code';
                }
            };
    }
}

const ff = new class FF extends f('fire-fighter') {};
const se = new class FF extends f('software-engineer') {};

console.log(ff.job());
console.log(se.job());