//There are mainly two types of data types in javascript primitive and non primitive

//Primitive data types (Call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const temperature = null
let userEmail; //undefined
let userMail = undefined //Both ways of declaring undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 32254242464624624624624642626442646264246426264n;  //To store number as bigInt write n at the last.


//Reference type (Non primitive)

// Arrays, Objects, Functions

const heroes = ["IronMan", "Captain America", "Thor"];

let myObj = 
{
    name: "Hemant",
    age: 25,
}

const myFunction = function()
{
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof temperature); //Type of null is object
console.log(typeof id); // symbol data type


//Type of function is function only but it is called object function
//Typeof all non primitive data type is function only.

