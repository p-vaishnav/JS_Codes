// achieving asynchronity via functions

/*
function loadScript(src) {
    console.log('loadScript starts');
    const script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    console.log('loadScript Ends');
}

loadScript('./testing_scripts/script.js');
*/

// asynchronity has been achieved as after function execution script executes

// asynchronity via callback, execute something when script has loded

function loadScript(src, callback) {
    console.log('loadScript starts');
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback();
    document.head.append(script);
    console.log('loadScript Ends');
}

loadScript('./testing_scripts/script.js', () => {
    console.log('script has loaded');
});


