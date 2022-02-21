
// // Lecture Acvivity 

// // let coffeeOrder = [
// //     "Holly - Latte",
// //     "Dan - Cortado",
// //     "Dani - No Peanuts"
// // ];

// // coffeeOrder[2] = "Lauren - Tea";

// // coffeeOrder.push("Louis - espresso");

// // console.log(coffeeOrder);

// // // Count how many items are in list 
// // console.log(coffeeOrder.length);

// // // remove last item on list 
// // coffeeOrder.pop();

// // console.log(coffeeOrder);

// // Lecture Tasks

// let faveSongs = [
//     "Toxic - Britney", 
//     "Holiday - Confidence Man",
//     "Causing a Commotion - Madonna"
// ];

// console.log(faveSongs);

// // .push adds strings onto the end of a list

// console.log("ADD 2 ITEMS ONTO LIST")

// faveSongs.push("Her Hippo - Dry Cleaning", "Hung Up - Madonna")

// console.log(faveSongs);

// // .pop removes the last item

// console.log("REMOVE LAST ITEM FROM LIST")

// faveSongs.pop();

// console.log(faveSongs);

// // .splice adds a string into a list in a specific place

// console.log("ADD ITEM IN SPECIFIC PLACE")

// faveSongs.splice(0, 0, "Oblivion - Grimes");

// console.log(faveSongs);

// // recall a items from a list using an array

// let faveDrinks = ["Coffee", "Latte", "Apple Juice"];

// console.log(faveDrinks[0]);
// console.log(faveDrinks[1]);
// console.log(faveDrinks[2]);

// // for loop, i = 0, loop will start at 0, i = 1 starts at 1

// for(let i = 1; i < faveDrinks.length; i++){
//     console.log(faveDrinks[i]);
// }

// // Using for loops with an if statement 

// let multiplesTwo = [];

// for(let i = 0; i <= 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// // While loops
// ++ is an increment operator which adds 1 until a the stated condition is met, which in this case is 18

// let age = 15;

// while (age < 18){
//     console.log("You are a child.");
//     age++;
// }

// console.log("You are an adult!");

// // Using a while loop to find a defined string

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];

// }

// console.log(currentCard);

// Activity 1

console.log("ACTIVITY 1")

let faveFilms = ["Mean Girls", "A Nightmare on Elm Street", "The Lobster", "The Fly"];

console.log(faveFilms);

faveFilms.push("When Harry Met Sally", "Halloween");

console.log(faveFilms);

for(let i = 0; i < faveFilms.length; i++){
    console.log(faveFilms[i]);
}

// Activity 2

console.log("ACTIVITY 2")

let randomNumbers = [];

for (let i = 0; i < 6; i++) {
    randomNumbers.push(Math.floor(Math.random() *50) + 1);
}

console.log(randomNumbers);

// Activity 3

console.log("ACTIVITY 3")

for (let j = 9; j >=0; j--) {
    console.log(j)
}

// Acvitiy 4

console.log("ACTIVITY 4")

let isItGhostbusters = ["Carrie", "Cruel Intentions", "Crash", "Ghostbusters"]

for (let k = 0; k ,isItGhostbusters.length; k++){
    if (isItGhostbusters[2] === "Ghostbusters"){
        console.log("Yay, it is Ghostbusters")
        break
    } else {
        console.log("Boo, we want Ghostbusters")
        break
    }
}

// Activity 5

console.log("ACTIVITY 5")

for(i = 0; i < 6; i++){
    let num = (Math.floor(Math.random() * 30) +7); 
    if (num % 7 == 0)
         console.log(`${num} is divisble by 7`);
    else
         console.log(`${num} is not divisible by 7`); 
    }

// Activity 6

console.log("ACTIVITY 6")

let declanFollowers = ["Holly", "Jenny", "Dani", "Matt"];

let harrietFollowers = ["Dan", "Holly", "Lauren", "Matt"];

const mutualFollowers = declanFollowers.filter(element => harrietFollowers.includes(element));

console.log(`Declan and Harriet's mutual friends are ${mutualFollowers}`);

// Actvity 7

console.log("ACTIVITY 7")

// A do while loop will check if a condition has been met after executing a statement. In this example Green is executed once, after that statement the while loop will check if x > 5 and Green will be returned the remaining amount of times. 

let x = 7;

do {
    console.log("Green");
    x --;

} while(x > 5); 

