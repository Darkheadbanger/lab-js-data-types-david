/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let concatenateWords = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s1} ${s4}`;
console.log("Here is the concantenate words : ", concatenateWords);

// Print out the concatenated string

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const concatenateWords1 =
  part1 +
  part1[part1.length - 1].toUpperCase() +
  part2 +
  part2[part2.length - 1].toUpperCase();
console.log(
  "This is concantenated words with each last letter capitalize : ",
  concatenateWords1
);

// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const percentageTip = 15 / 100;
const totalTip = billTotal * percentageTip;
console.log(
  "The total tip of the bil total of " +
    billTotal +
    " euros is " +
    totalTip +
    " euros"
);

// Print out the tipAmount

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(`The random number between 1 and  10 is ${randomNumber}`);
// Print the generated random number

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(`The output of the expression of ${expression1} is false`);

const expression2 = a || b;
console.log(`The output of the expression of ${expression2} is true`);

const expression3 = !a && b;
console.log(`The output of the expression of ${expression3} is false`);

const expression4 = !(a && b);
console.log(`The output of the expression of ${expression4} is true`);

const expression5 = !a || !b;
console.log(`The output of the expression of ${expression5} is true`);

const expression6 = !(a || b);
console.log(`The output of the expression of ${expression6} is false`);

const expression7 = a && a;
console.log(`The output of the expression of ${expression7} is true`);
