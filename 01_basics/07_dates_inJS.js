// Dates

let myDate = new Date();

console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 0, 23); //Month starts with 0 in JS so January = 0, February = 1
console.log(myCreatedDate.toDateString());

let newDate = new Date("2024-01-14");  //Here month starts with 1 only
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //Value in seconds

let anotherDate = new Date();

console.log(anotherDate);
console.log(anotherDate.getMonth());
console.log(anotherDate.getDate());
console.log(anotherDate.getDay());
console.log(anotherDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long"
})