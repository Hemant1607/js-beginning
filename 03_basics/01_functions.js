function sayMyName()
{
    console.log("Hemant");
}

sayMyName();

function addTwoNumbers(number1, number2)
{
   console.log(number1 + number2);
}

addTwoNumbers();

addTwoNumbers(3,4);

addTwoNumbers(3, "a");

function addTowNumberWithReturn(number1, number2)
{
    let result = number1 + number2
    return result
}

const result = addTowNumberWithReturn(5,6);

console.log("Result:", result);

function loginUserMessage(userName){
    return `${userName} just logged in`;
}

console.log(loginUserMessage("Hemant"));


function calculateCartPrice(...num1)
{
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000, "Test"));

const user = 
{
    userName : "Hemant",
    age : "25"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and age in ${anyobject.age}`);
}

handleObject(user);

handleObject({userName : "Sam", age: "20"});


const myNewArray = [200, 500, 100, 600]

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));