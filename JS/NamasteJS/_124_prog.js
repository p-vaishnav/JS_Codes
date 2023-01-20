// notes about template literals or template strings

// internally we have a function in place which will take it as an input
// template strings have a schema of this fashion
// taggedFunction` String Text ${expression} String Text`
// default function provided only does the interpolation required
console.log(`Success`);

console.log(`\`` === "`"); // true
console.log(`\${1}` === "${1}"); // true

// custom tagged template

function myTag(strings, personExp, ageExp) {
    const _str1 = strings[0];
    const _str2 = strings[1];
    const _str3 = strings[2];

    const _ageExp = ageExp > 100 ? 'centurian' : 'youngster';

    return `${_str1}${personExp}${_str2}${_ageExp}${_str3}`;
}

console.log(myTag`That Person ${'Vaishnav'} is ${22}.`);