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
let wordArray = ["apple", "amend", "orange", "asymetric"];
let strngFunction = (words: string[]): string[] => {
  let newWords: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === "a") {
      newWords.push(words[i]);
    }
  }
  return newWords;
};
console.log(strngFunction(wordArray));

// Create a script that logs the second to last element of an array named fruits.
let fruits: string[] = ["apple", "strawberry", "banana", "orange"];
console.log(fruits[fruits.length - 2]);

// Develop a function that takes an array of numbers and returns a new array with each number squared.
let arrayNumbers = [1, 2, 3, 4, 5, 6];

let squareArray = (numArray: number[]): number[] => {
  let newArray = [];
  for (let num of numArray) {
    newArray.push(num ** 2);
  }
  return newArray;
};

console.log(squareArray(arrayNumbers));

// Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
let testArray = ["apple", "orange", "banana", 1, 2, 3];
let reverseArray = (numArray: any[]): any[] => {
  let newArray = [];
  for (let num of numArray) {
    newArray.unshift(num);
  }
  return newArray;
};
console.log(reverseArray(testArray));

// Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
let score = [10, 5, 20, 20, 4, 5, 2, 25, 1];

let scoreCounter = (numArray: number[]) => {
  let minNum = Math.min(...numArray);
  let maxNum = Math.max(...numArray);

  let minCount = 0;
  let maxCount = 0;

  for (let num of numArray) {
    if (num > maxNum) {
      maxCount++;
    }

    if (num < minNum) {
      minCount++;
    }
  }
  console.log(`Minimum counter is ${minCount}`);
  console.log(`Maximum counter is ${maxCount}`);
};
scoreCounter(score);

// Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN
let mixArray = [0, "my name", "", true, false, 0, null, undefined, NaN];

let falseRemover = (arrayAny: any[]): any[] => {
  let filteredArray = arrayAny.filter((value) => value);
  arrayAny.splice(0, arrayAny.length, ...filteredArray);
  return arrayAny;
};
console.log(falseRemover(mixArray));

// Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let concatenatedArray = [...array1, ...array2];

console.log(concatenatedArray);

// Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
let sumArray = [2, 5, 7, 1, 6, 9, 8, 5, 3];

let sumOfElements = (numArray: number[], condition?: string) => {
  let filterCondition = (num: number) => {
    if (condition === "even" || condition === "Even") {
      return num % 2 === 0;
    } else if (condition === "odd" || condition === "Odd") {
      return num % 2 !== 0;
    }
  };
  let newArray = numArray.filter(filterCondition);
  console.log(newArray);
  let sum = 0;
  for (let num of newArray) {
    sum = sum + num;
  }
  return sum;
};
console.log(sumOfElements(sumArray, "odd"));

// Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1
let checkArray = [4, 5, 8, 74, 545, "danyal", 52, 13, 8];

let elemCheck = (checkArray: any[], element: any) => {
  for (let i = 0; i < checkArray.length; i++) {
    if (checkArray[i] == element) {
      return i;
    }
  }
  return -1;
};
console.log(elemCheck(checkArray, "danyal"));

// Write a function to find and return the smallest number in an array of integers.

let intArray = [1, -1, 3, -58, -78, 45, 0, 70, 150];

let smallNum = (intArray: number[]) => {
  let smlArray = intArray[0];
  for (let i = 0; i < intArray.length; i++) {
    if (intArray[i] < smlArray) {
      smlArray = intArray[i];
    }
  }
  console.log(smlArray);
};

smallNum(intArray);

// Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
let pArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 5];
let arrayProduct = (pArray: number[]) => {
  let product = 1;
  for (let num of pArray) {
    product *= num;
  }
  return product;
};

console.log(arrayProduct(pArray));

// Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
let stringArray = [
  "Pakistan",
  "China",
  "Bangladesh",
  "Afghanistan",
  "Iran",
  "how",
];
let filterByLength = (stringArray: string[], numN: number) => {
  let callbackCondition = (value: string) => {
    return value.length > numN;
  };
  let nArray = stringArray.filter(callbackCondition);
  return nArray;
};
console.log(filterByLength(stringArray, 7));

// Create a function findDuplicates that finds and logs all duplicates in an array.
let dupArray = [1, 2, 1, 3, 2, 5, 5, 8, 2, 3];
let findDuplicates = (dupArray: any[]) => {
  let newDupArray: any[] = [];
  for (let i = 0; i < dupArray.length; i++) {
    for (let j = i + 1; j < dupArray.length; j++) {
      if (dupArray[i] === dupArray[j] && !newDupArray.includes(dupArray[i])) {
        newDupArray.push(dupArray[i]);
        break;
      }
    }
  }
  return newDupArray;
};
console.log(findDuplicates(dupArray));

// Write a function incrementAll that takes an array of integers and increments each element by one.
let integerArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let incrementAll = (integerArray: number[]) => {
  let newIntArray = [];
  for (let num of integerArray) {
    newIntArray.push(num + 1);
  }
  return newIntArray;
};
console.log(incrementAll(integerArray));

// Create a function isSorted that checks if an array is sorted in ascending order.

let isSorted = (sortArray: any[]) => {
  for (let i = 0; i < sortArray.length - 1; i++) {
    if (sortArray[i] > sortArray[i + 1]) {
      return false;
    }
  }
};

// Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
let strArray: string[] = [
  "pakistan",
  "china",
  "nepal",
  "iran",
  "peru",
  "cuba",
  "canada",
];
let stringSort = (strArray: string[]) => {
  return `${strArray.slice(0, -2).join(", ")}, ${strArray
    .slice(-2)
    .join(" and ")}`;
};
console.log(stringSort(strArray));

// Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
let fahrenheitTemp: number[] = [32, 45, 85, 99, 120, 100];

let fahToCel = (fahrenheitTemp: number[]) => {
  let saveTemp = [];
  for (let num of fahrenheitTemp) {
    let convert = Math.floor((num - 32) * 0.56);
    saveTemp.push(convert);
  }
  return saveTemp;
};

console.log(fahToCel(fahrenheitTemp));

// Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
let mmaArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let minMaxAverage = (mmaArray: number[]) => {
  let sum = mmaArray[0];
  let min = mmaArray[0];
  let max = mmaArray[0];
  for (let i = 1; i < mmaArray.length; i++) {
    sum += mmaArray[i];

    if (min > mmaArray[i]) {
      min = mmaArray[i];
    }
    if (max < mmaArray[i]) {
      max = mmaArray[i];
    }
  }

  let avg = sum / mmaArray.length;

  let finalObj = {
    minimum: min,
    maxmimum: max,
    Average: avg,
  };

  return finalObj;
};
console.log(minMaxAverage(mmaArray));

// Create a function swapElements that swaps two specified indices in an array.
let indexArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let swapElements = (indexArray: any[], x: number, y: number): any[] => {
  let tempX = indexArray[x];
  indexArray[x] = indexArray[y];
  indexArray[y] = tempX;

  return indexArray;
};

console.log(swapElements(indexArray, 0, 4));


