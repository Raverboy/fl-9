let m = parseFloat(prompt('Enter amount of money'));
let p = parseFloat(prompt('Enter your discount'));
let price = 0;
let save = (m * p / 100).toFixed(2);
if (m <= 0) {
    console.log('invalid data');
} else if(isNaN(m)){
    console.log('invalid data');      
} else if (p <= 0) {
    console.log('invalid data');
} else if (p >= 100) {
    console.log('invalid data');
} else {
    price = (m - save).toFixed(2);
    console.log(
        `price without discount: ${m}
discount: ${p} % 
price: ${price} 
save: ${save}`);
}