// apply?
const DEFAULT_FONT_SIZE = 16;

// only difference between apply and call is that , 2nd argument of apply is an array
// if not giveen returns TypeError


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

console.log(div.calculateActual.apply(p));
console.log(div.getInnerHtml.apply(p, ['Success']));


// much safer way, what if div.__proto__ points to null
console.log(Object.hasOwnProperty.apply(div, ['value']));

try {
    div.__proto__ = null;
    console.log(div.hasOwnProperty('value'));
} catch(e) {
    console.log('In error block');
    div.__proto__ = Object;
}
