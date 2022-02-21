
// console.log("Hello");

// console.log("HAPPY VALI DAY <3");

// console.log("happy vali day <3".toUpperCase());

// console.log(Math.random());

// console.log(Math.random()*10);

// console.log(Math.floor(Math.random()*10));

// console.log(Math.round(Math.random()*10));

// console.log("      |       |      ")
// console.log("      |       |      ")
// console.log("      |       |      ")
// console.log("- - - - - - - - - - -")
// console.log("      |       |      ")
// console.log("      |       |      ")
// console.log("      |       |      ")
// console.log("- - - - - - - - - - -")
// console.log("      |       |      ")
// console.log("      |       |      ")
// console.log("      |       |      ")

// for (i = 0; i < 3; i++){

//     console.log('      |       |      ');

//     for(k = 3; k <= 1; k++){

//         console.log('- - - - - - - - - - -');

        
    
//     }

// }

// console.log('- - - - - - - - - - -')

// console.log('- - - - - - - - - - -')

// for (let i = 0; i < 3; i++) {
//     console.log('      |       |      ');
// }

// let grid = ['     |      |', '__']
// for (let i = 0; i < 3; i++){
//     console.log(grid[0]);
//     console.log(grid[1]);
// }


// #1 Using Arrays

// Declaring our Array 

console.log("ACTIVITY 1")
console.log("USING ARRAYS")

const vertical = [
    "    |    |    ",
    "    |    |    " ,
    "    |    |    " ,
    "--------------" ,
    "    |    |    ",
    "    |    |    " ,
    "    |    |    " ,
    "--------------" ,
    "    |    |    ",
    "    |    |    " ,
    "    |    |    " 
  ]

  for (let i = 0; i < vertical.length; i++){
    console.log(vertical[i])
  };

// Activity 2

console.log("ACTIVITY 2")
console.log("USING NESTED FOR LOOPS")
  

for (let i = 0; i<3; i++){
    
  for(let j = 0; j<3; j++){

    console.log("    |    |    ")
  }

  if (i !== 2){
    console.log("--------------")
  }
}
  
// Math.floor() retuns an integer less than or equal to the specifed number 

console.log("Using Math.floor")
console.log(Math.floor(Math.random()*10));
