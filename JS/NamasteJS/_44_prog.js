// rewriting _42_prog.js with promise handlers

const src = './testing_scripts/script.js';
function loadScript(src) { 
    return new Promise(function(resolve, reject) {
        const script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve('Script has loaded');
        script.onerror = () => reject(new Error('There was an error in loading the script'));
        document.head.append(script);
    });
}

const script = loadScript(src);
script.then(
    (value) => {
        console.log(value);
    },
    (err) => {
        console.log(err);
    }
);
// some thing starange
script.then(
    (value) => {
        console.log(value);
    },
    (err) => {
        console.log(err);
    }
)

