const score = 400

const balance = new Number(100);

console.log(score); // typeof number
console.log(balance); //typeof Object


console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.38545;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//========================================================  Maths  =================================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));

console.log(Math.sqrt(49));

console.log(Math.min(4,2,5,7,6));

console.log(Math.random());

console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Math.Random() always gives values between 0 and 1, now if we want value to be 0 to 10 
//will multiply it with 10 and now if we don't want 0 then we'll add 1

//If we want number between min and max then will have to multiply random number with max - man + 1
//And when we'll take floor of this value and add min to it will get number b/w min and max.