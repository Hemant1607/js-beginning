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