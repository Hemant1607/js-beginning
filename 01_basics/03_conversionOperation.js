let score = 45

console.log(typeof(score)) // both will return number type
console.log(typeof score)

score = "33"

console.log(typeof(score))  // string type

let valueInNumber = Number(score)

console.log(typeof valueInNumber) // number type

score = "33abc"

valueInNumber = Number(score)

console.log(typeof valueInNumber) // number type
console.log(valueInNumber) //NaN - not a number

score = null

valueInNumber = Number(score)

console.log(typeof valueInNumber) // number
console.log(valueInNumber) // gives value 0

score = undefined
valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn) // boolean
console.log(booleanIsLoggedIn) // true

// 1 => true
// 0 => false
// "" => false
// "hemant" => true

let someNumber = 45

let stringNumber = String(someNumber)

console.log(stringNumber) // 45 - value
console.log(typeof stringNumber) // string


// ************************* Operations ******************************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " Hemant"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2") 


console.log(true)
console.log(+true)
//console.log(true+) //error value
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter)

