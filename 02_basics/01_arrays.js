//Array

const array = [0,1,2,3,4,5, true, "Hemant"]

const myHeroes = ["Iron Man", "Thor", "Hulk"];

const myArr = new Array(1,2,3,4);

console.log(array[1]);

myArr.push(6);

console.log(myArr);

myArr.push(7);

console.log(myArr);

myArr.pop();

console.log(myArr);

myArr.unshift(0);

console.log(myArr);

myArr.shift();

console.log(myArr);

console.log(myArr.includes(8));

console.log(myArr.indexOf(11));

console.log(myArr.indexOf(4));

const newArr = myArr.join(",");

console.log(newArr);

//slice and splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);

const myn2 = myArr.splice(1, 3);

console.log(myn2);
console.log("B ", myArr);

//The main difference between slice and splice is that slice only takes part of original array and
//doesn't disturb the original array also slice doesn't include the last index
//Splice includes the last index but it also takes the part from original array thus changing the original
//array also.