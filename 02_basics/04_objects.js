const tinderUser = new Object() //Singleton object
//const tinderUser = {}   //Non singleton object

tinderUser.id = "123abc";
tinderUser.Name = "Sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = 
{
    email : "some@gmail.com",
    fullname : 
    {
        userfullname : 
        {
            firstName : "Hemant",
            lastName : "Kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const object1 = 
{
    1: "a",
    2: "b",
}

const object2 = 
{
    3: "a",
    4: "b"
}

const object3 = {object1, object2}

console.log(object3);

const object4 = Object.assign({}, object1, object2)

console.log(object4);

const object5 = {...object1,...object2}

console.log(object5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hk@gmail.com"
    }
]

console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


//==========================================DeStructuring===========================================

const course = 
{
    courseName : "JsInHindi",
    coursePrice: "999",
    courseInstructor: "Hemant"
}

const {courseInstructor : instructor} = course

//console.log(courseInstructor);
console.log(instructor);

 