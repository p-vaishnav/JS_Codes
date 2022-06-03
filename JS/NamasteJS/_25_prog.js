// call?

// value of this is equivalent to the caller of the function

// new is used over a function
// js creates internally a this = {}
// assigns value over it; and return this

// The caller allows us to use function/method declared in object and to be used over an another one
const DEFAULT_FONT_SIZE = 16;


// div.__proto__ refers to Obejct.prototype
const div = {
    value: '3rem',
    calculateActual: function() {
        return parseInt(this.value.split('r')[0])*DEFAULT_FONT_SIZE;
    },
    getInnerHtml: function(inner) {
        return `This is inner Html: ${inner}`;
    }
};

const p = {
    value: '5rem',
}

console.log(div.calculateActual.call(p));
console.log(div.getInnerHtml.call(p, 'Success'));

// much safer way, what if div.__proto__ points to null
console.log(Object.hasOwnProperty.call(div, 'value'));

try {
    div.__proto__ = null;
    console.log(div.hasOwnProperty('value'));
} catch(e) {
    console.log('In error block');
    div.__proto__ = Object;
}