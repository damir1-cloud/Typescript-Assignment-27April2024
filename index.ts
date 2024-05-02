// Write a script to log "Hello, World!" to the console.
console.log("Hello, World!");

// Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temprature: number = 45;
if (temprature < 45) {
  console.log("It's cold!");
}

// Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apples: number = 10;
let giveAway: number = 3;
console.log(apples - giveAway);

// Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let firstName: string = "Danyal";
let lastName: string = "Amir";
let fullName: String = `${firstName} ${lastName}`;
console.log(fullName);

// Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let num1: number = 5;
let num2: number = 3;
num1 > num2 ? console.log("yes") : console.log("No");

// Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
let calculateArea = (radius: number) => {
  let area = Math.PI * radius ** 2;
  console.log(Math.round(area));
};
calculateArea(5);

// Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  console.log(i);
}

// Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let tempratures: number[] = [10, 20, 70, 40, 80];
let maxTem = tempratures[0];

for (let i = 0; i < tempratures.length; i++) {
  if (tempratures[i] > maxTem) {
    maxTem = tempratures[i];
  }
}
console.log(maxTem);

// Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
let age: number = 45;
age > 18 ? console.log("Adult") : console.log("Minor");

// Write a function that takes an array of numbers and returns the count of positive numbers in the array.

let positiveCounter = (positive: number[]): number => {
  let count = 0;

  for (let i = 0; i < positive.length; i++) {
    if (positive[i] > 0) {
      count++;
    }
  }
  return count;
};

console.log(positiveCounter([1, -54, 5, 7, 4]));


// Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
let wordArray = ["apple","amend","orange","asymetric"]
let strngFunction = (words:string[]):string[] =>{
let newWords:string[] = [];
    for(let i=0; i<words.length; i++){

        if(words[i][0]==="a"){
            newWords.push(words[i]);
        }

    }
    return newWords;

}
console.log(strngFunction(wordArray));



// Create a script that logs the second to last element of an array named fruits.
let fruits: string[] = ["apple", "strawberry", "banana", "orange"];
console.log(fruits[fruits.length - 2]);


// Develop a function that takes an array of numbers and returns a new array with each number squared.
let arrayNumbers = [1,2,3,4,5,6];

let squareArray = (numArray:number[]):number[] =>{
    let newArray = [];
    for(let num of numArray){
        newArray.push(num**2);
    }
    return newArray;
}

console.log(squareArray(arrayNumbers));


// Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
let testArray = ["apple", "orange", "banana", 1,2,3]
let reverseArray = (numArray:any[]):any[] => {
    let newArray = [];
    for(let num of numArray){
      newArray.unshift(num);
    }
    return newArray;
}
console.log(reverseArray(testArray));

// Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
let score = [10, 5, 20, 20, 4, 5, 2, 25, 1];

/*let scoreCounter = (numarray:number[]) => {
    for(){

    }

}*/

