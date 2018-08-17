let a = parseFloat(prompt('Enter side a'));
let b = parseFloat(prompt('Enter side b'));
let angA = parseFloat(prompt('Enter angle A'));
const angle = 180;
let radians = angA * Math.PI / angle;
let sin = Math.sin(radians);
let cos = Math.cos(radians);
let c = parseFloat(Math.sqrt(a * a + b * b - 2 * a * b * cos).toFixed(2));
let square = Math.round(1 / 2 * a * b * sin);
let perimeter = a + b + c;
if (c <= 0) {
    console.log('invalid data');
} else if(isNaN(c)){
    console.log('invalid data');
} else {
    console.log(
        `c length: ${c}
Triangle square: ${square}
Triangle perimeter: ${perimeter}`);
}

