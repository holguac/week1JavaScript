
// // Example 1

// if ( 1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// // Example 2

// let place = "Manchester";
// let weather ="Sunny";

// if (place == "Liverpool" && weather == "Sunny") {
//     console.log("Cheack again");
// }
// else if (place == "Liverpool" && weather == "Windy") {
//     console.log("OF COURSE");
// }
// else {
//     console.log("What? It isn't raining?");
// }

// // Example 3

// let day = "Monday";

// if (day == "Saturday" || day == "Sunday"){
//     console.log("It's the weekend!");
// }
// else {
//     console.log("When is it the weekend?");
// }

// //Example 4

// let car ="Peugeot";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French Boy!");
//         break;

// }

// Activity 1

console.log("ACTIVITY 1")

let age = 18

if (age < 17) {
    console.log("yes, I can serve you");
} 
else {
    console.log("You aren't old enough");
}

// Activity 1 Stretch 

console.log("ACTIVITY 1 STRETCH")

let age1 = 18
let country ="USA"

if (age1 < 17 && country === "UK") {
    console.log("yes, I can serve you");
}
else {
    console.log("You aren't old enough");
}

// Activity 2

console.log("ACTIVITY 2")

let pizzaTopping ="ham";

switch(pizzaTopping){
    case "mushroom":
    case "feta":
    case "olives":
        console.log("This is an important topping for my pizza!");
        break;
    case "pineapple":
        console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
        break;
    default:
        console.log(`${pizzaTopping} should not be on my pizza!`);
}

// Activity 3

console.log("ACTIVITY 3")

let password ="12345678";

const len = password.length; 

if (len < 8){
    console.log("Password is too short");
}

else { (len > 8)
    console.log(`Your new password is ${password}`);
}
// Activity 4 

console.log("ACTIVITY 4")

let num = 1;

if (num % 5 === 0 || num % 3 === 0){
    console.log("Number is divisible by 5 or 3");
}

else {
    console.log("Number is not divisible by 5 or 3");
}

// Activity 5

console.log("ACTIVITY 5")

let num2 = 33

if (num2 % 3 === 0 && num2 % 5 === 0){
    console.log("FIZZ BUZZ");
}

else if (num2 % 3 === 0){
        console.log("FIZZ");
}

else if (num2 % 5 === 0){
    console.log("BUZZ");
}

else  
    console.log(`${num2} is not divisible by 3 or 5`);

// Activity 6

console.log("ACTIVITY 6")

let  num3 = 2002;
let numString = num.toString();
let reverseNumString = numString.split('').reverse().join('');

if (num== reverseNumString){
    console.log(`Yes, ${num3} is a palindrome`)
} else {
    console.log(`${num} is not a palindrome`)
}

// Activity 7

console.log("ACTIVITY 7")

let time = 11
let placeOfWork = "work"
let townOfHome = "home"

if (time == 8){
    console.log(`I am walking to ${placeOfWork}`);
} else if (time == 7){
    console.log(`I am at ${townOfHome}`);
} else if (time == 9){
    console.log(`I am at ${placeOfWork}`)
} else {
    console.log(`If it is between 9 and 10, I am at ${placeOfWork}. Otherwise I am at ${townOfHome}`)
}

// Activity 8

console.log("ACTIVITY 8")

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowel = ["a", "e", "i", "o", "u"];
let highestIndex = 0;

for (let i = 0; i < vowel.length; i++){
let index = str.lastIndexOf(vowel[i]);

if (index >= highestIndex){

    highestIndex = index;
    
    lastVowel = vowel[i];
}
}

console.log(`The last vowel is ${lastVowel}`);

console.log(`It is character number ${highestIndex}`)

// Activity 9 

console.log("ACTIVITY 9")

let word = "holly";

if (word.charAt(0) == word.charAt(word.length-1)){
    console.log("TRUE")
} else {
    console.log("FALSE")
}

// Activity 10

console.log ("ACTIVITY 10")

let num4 = 5;
let num5 = 999;
let sum = num4 +num5;

if (sum % 2 == 0){
    console.log(`The  total is  ${sum} and it is even`)
} else {
    console.log(`${num4 * num5}`)
}
