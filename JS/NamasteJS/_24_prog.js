// bind?

// it binds one object's function to another object

// div.__proto__ refers to Obejct.prototype
const DEFAULT_FONT_SIZE = 16;

let fun1;
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

fun1 = div.calculateActual.bind(p);
console.log(fun1());
fun1 = div.getInnerHtml.bind(p);
console.log(fun1('success'));


// much safer way, what if div.__proto__ points to null
fun1 = Object.hasOwnProperty.bind(div);
console.log(fun1());

try {
    div.__proto__ = null;
    console.log(div.hasOwnProperty('value'));
} catch(e) {
    console.log('In error block');
    div.__proto__ = Object;
}