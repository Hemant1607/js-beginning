const marvel_heroes = ["Thor", "Iron Man", "Spider Man"]
const dc_heroes = ["SuperMan", "Flash", "Batman"]

//marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);

let all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

//spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Hemant"));

console.log(Array.from("Hemant"));

console.log(Array.from({name : "Hemant"})); // Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));