

// Quiz question

// const speed = 81;

// switch (true) {
//     case speed >= 80:
//         console.log("Issue fine");
//         break;
//     case speed >= 75:
//         console.log("Issue warning");
//         break;
//     default:
//         console.log("Take no action");
// }

// Example 1 

// const pressGrindBeans = () => {
//     console.log("Griding beans for 20 seconds");
// }

// pressGrindBeans();

// Example 2

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();

// Example 3

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);

// Example 4 

// let accnum = 5095408;
// let amount = 600;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(amount, accnum);

// Example 5 

// const addUp =(num1, num2) => {
//     return num1 + num2;
// }

// // addUp(9,3);
// console.log(addUp(9,5));

// Example 6

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths (celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "f");

// Activity 1

console.log("ACTIVITY 1")

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(100));

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(100));

// Activity 2

console.log("ACTIVITY 2")

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
    console.log(`You have ordered ${orderCount} pizzas`)
}

takeOrder("mushroom", "peppers");
takeOrder("olives", "mushroom");
takeOrder("peppers", "olives");
takeOrder("chillies", "mushroom");


// Activity 3

console.log("ACTIVITY 3")

let pin = 1234;
let balance = 1000

const cashMachine =(pinNumber, amount) => {

if ((pin === pinNumber) && (amount <= balance)) {
    const newBlance = balance - amount;
    console.log(`Correct Pin! Here is ${amount}. Your new balance is ${newBlance}.`);
} else if ((pin === pinNumber) && (amount > balance)) {
    console.log(`You do not have enough money in your account. Your current balance is ${balance}`);
} else if (pin != pinNumber){
    console.log("WRONG PIN");
} else {
    console.log ("ERROR");
    }
}

cashMachine(1234, 30);
