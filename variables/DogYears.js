//convert your age from “human years” to “dog years”
const myAge = 29; // my age, Must be greater than or equal to 2.
const myName = "Chanyoung Joung".toLowerCase(); //my name

//The first two years of a dog’s life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;
//Each year following equates to 4 dog years.
let laterYears = myAge - 2;
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
