//singleton
//Object.create

//object literals

const mySym = Symbol("key1");

//Symbol is improtant in objects, it is declared and accessed differently than other properties.

const Jsuser = {
    name: "Hemant",
    "full name": "Hemant Kumar",
    [mySym]: "mykey1",
    age: 26,
    location: "Bengaluru",
    email: "Hemant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
};

console.log(Jsuser.email);
console.log(Jsuser["email"]);

//console.log(Jsuser.full name);  //If we have such key we cannot use it with dot operator.
console.log(Jsuser["full name"]);

console.log(Jsuser[mySym]);
console.log(typeof Jsuser[mySym]);

Jsuser.email = "hemant@microsoft.com"
//Object.freeze(Jsuser);
Jsuser.email = "hemant@chatgpt.com"

console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}


Jsuser.greeting();
Jsuser.greeting2();

