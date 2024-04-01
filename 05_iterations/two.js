// for of loops

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

//Maps

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('FR', "France");

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for (const key in myObject) {
    console.log(key, ':-', myObject[key]);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


//Cannot iterate like this for Map
// for (const key in map) {
//     console.log(key);
// }


//Map

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => num + 10)

console.log(newNums);