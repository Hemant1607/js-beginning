const name = "Hemant"
const repoCount = 50

//console.log(name + repoCount);

//String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('Hemant-Kumar');
console.log(typeof name);  // Type of string
console.log(typeof(gameName));  //Type of object

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);

console.log(newString);

const anotherString = gameName.slice(-11, 4);
console.log(anotherString);

//.Trim() - To remove extra spaces
//Replace() -> 

const url = "https://hemant.com/hemant%20kumar"
console.log(url.replace('%20', '-'));

//.split() splits a string on the basis of char given and returns array of string

