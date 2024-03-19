const user = {
    userName : "Hemant",
    fees : 999,

    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();

user.userName = "Sam";

user.welcomeMessage();

console.log(this);


// function chai(){
//     let userName = "Hemant"
//     console.log(this);
// }

// chai();

// const chai = function(){
//     let userName = "Hemant"
//     console.log(this.userName);
// }

// chai();

const chai = () => {
        let userName = "Hemant"
        console.log(this.userName);
    }
    
chai();

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3 , 4));


//Implicit return

const addThree = (num1, num2, num3) => (num1+num2+num3)

console.log(addThree(3,5,7));

