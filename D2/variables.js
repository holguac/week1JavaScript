
// Starter Task 1

// console.log("All Around the World".charAt(7).toUpperCase());

// // variables 

// let i = 10;

// i += i + 00;

// console.log(i);

// Drink Task (adding a variable to a string)

// let name = "Holly";

// let age = "99";

// let favDrink = "Coffee";

// console.log("Hello, my name is " +name + ". My favourite drink is " + favDrink + " and I am " +age);

// Using template literals to make code dryer 

// console.log(`Hello, my name is ${name}. My favourite drink is ${favDrink} and I am ${age}.`)

// updating variables

// age = "100";

// favDrink = "peppermint tea"; 

// console.log(`Hello, my name is ${name}. My favourite drink is ${favDrink} and I am ${age}.`)

// Activity 1

console.log("ACTIVITY 1")

let name = "Holly";
let age = "100";
let faveColour = "green";

console.log(`Hello I am ${name}. I am ${age} years old. My favourite colour is ${faveColour}.`)

age = "88";

faveColour = "sage";

console.log(`Hello I am ${name}. I am ${age} years old. My favourite colour is ${faveColour}.`);

// Activity 2

console.log("ACTIVITY 2")

let breakfast ="croissant";
let lunch ="Halloumi and avocado sandwitch";
let dinner ="mushroom and ricotta pizza";

console.log(`Today I had ${breakfast} for breakfast. ${lunch} for lunch. I am going to have ${dinner} for dinner.`)

breakfast ="peanut and banana on toast";
lunch ="Broccoli and spinach soup";
dinner ="Pesto pasta and roast veg";

console.log(`Tomorrow I will have ${breakfast} for breakfast. ${lunch} for lunch. ${dinner} for dinner.`)

// Activity 3

console.log("ACTIVITY 3")


const birthDate = new Date("2022,09,07");
const todaysDate = new Date("2022,02,16");

let diffInTime = birthDate.getTime() - todaysDate.getTime()
let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

console.log(`The difference between ${todaysDate} and ${birthDate} is ${diffInDays} days.`);
console.log(`Your birthday is in ${diffInDays} days.`)

// Activity 4

console.log("ACTIVITY 4")

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let j = "|";
let k = "-----------";

console.log (`${space0}${j}${space0}${j}`);
console.log (`${space1}${j}${space2}${j}${space3}`);
console.log (`${space0}${j}${space0}${j}`);
console.log(`${k}`);
console.log (`${space0}${j}${space0}${j}`);
console.log (`${space4}${j}${space5}${j}${space6}`);
console.log (`${space0}${j}${space0}${j}`);
console.log(`${k}`);
console.log (`${space0}${j}${space0}${j}`);
console.log (`${space7}${j}${space8}${j}${space9}`);
console.log (`${space0}${j}${space0}${j}`);
