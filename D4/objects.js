
// // Example 1

// // const person = {

// //     name : [
// //     "Holly"
// //     ]
// // }

// // console.log(person.name)

// // console.log(person["name"])

// // Group Activity 

// // let alarm ="";
// // let day = "Monday";

// // const alarmClock = {
// //     weekdayAlarm: "Gey up ay 7am",
// //     weekendAlarm: "No alarm needed"
// // };

// // if (day == "Saturday" || "Sunday"){
// //     alarm = weekdayAlarm
// // }
// // else ("");{
// //     alarm = weekdayAlarm
// // }

// // Example 2

// console.log("LECTURE EXAMPLE 2")

// // const person = {

// //     faveSongs : [
// //         "Like a Virgin",
// //         "Hung Up",
// //         "Isaac"
// //     ],

// //     name : [
// //     "Holly"
// //     ]
// // }

// // console.log(person.faveSongs)

// // Activity 1

console.log("ACTIVITY 1")

const person = {

    faveSongs : [
        "Like a Virgin",
        " Hung Up",
        " Burning Up"
    ],

    name : [
    "Holly"
    ],

sayHi() {
        return (`Hello my name is ${person.name} and my favourite songs are ${person.faveSongs}`);
    }
};

console.log(person.sayHi());


// // Activity 2 

console.log("ACTIVITY 2")

const pet = {
    name : "Hazel",
    animal : "Hedgehog",
    age : "7",
    colour : "Copper",

    eat() {
        return console.log(`${pet.name} the ${pet.animal} is eating`);
    },

    drink() {
        return console.log (`${pet.name} the ${pet.animal} is drinking`);
    }   
}

pet.eat();
pet.drink();

// // Activity 3

console.log("ACTIVITY 3")

const coffeeShop = {
    branch: 'Manchester',
  
    drinks: {
      capuccino: 3,
      latte: 3,
      espresso: 1.5,
      tea: 1,
    },
  
    food: {
      bagel: 2,
      toast: 1,
      croissant: 3,
    },
  
    drinksOrdered(...drinks) {
      let cost = 0;
      const drinksStr = drinks.join(' & ');
      drinks.forEach(drink => (cost += this.drinks[drink]));
      cost = cost.toString().split('.');
      cost = cost.join('.');
  
      return this.displayOrder(drinksStr, cost);
    },
  
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(' & ');
  
      food.forEach(item => (cost += this.food[item]));
  
      cost = cost.toString().split('.');
      cost = cost.join('.');
  
      return this.displayOrder(foodStr, cost);
    },
  
    displayOrder(order, cost) {
      return console.log(
        `Your ${order} will be with you shortly, the total is £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered('capuccino', 'latte');
  coffeeShop.foodOrdered('bagel', 'bagel');