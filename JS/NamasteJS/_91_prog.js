console.log('--For loop using var--');
for(var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

console.log('--For loop using let--');
for(let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j);
    }, 100);
}

