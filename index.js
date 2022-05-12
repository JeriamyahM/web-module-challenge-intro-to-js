/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age (not auto tested)

Do the following:   
   1. Create a variable called votingAge and assign it a number value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/


let votingAge = 13
if (votingAge >=18){
  console.log('You may vote.')
}
  else if(votingAge < 18){
  console.log('You are not old enough to vote.')
}



/*
Task 1b - Values (not auto tested)

Do the following:   
   1. Declare two variables and assign them values (good names for these might be firstThing and secondThing)
   2. Use a conditional to check the value of the 1st variable versus the value assigned to the 2nd variable
   3. Change the value of the 1st variable if the conditional in step 2 is true
   4. Console log the value of the 1st variable

   HINT: no function required
*/

let thing1 = 5
let thing2 = 2
if (thing1 < thing2){
  let thing1 =3
  console.log('Because the value of thing1 is less than thing2, it\'s new value is ' + thing1)
}
else if(thing1 >= thing2){
  console.log('The value of thing1 is greater, so it will remain the same value.')
}




/*
Task 1c - Convert Strings to Numbers (not auto tested)

Do the following:   
   1. Declare a variable with the string type value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

//my first solution, but wouldnt work if the value is changed. Maybe this always works if I use const?
let nummber = '1999'
if(nummber === '1999'){
  let number = 1999
  console.log(nummber)
}

// Converts number to string (x.tostring())
let x = '4'
x.toString();
(4).toString();

//converts string to number (parseInt())
let y = '6'
console.log(parseInt(y));



/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

//comes back undefined
/*note 2: Had to switch some things around but figured it out. Using return still seems 
to lead to less typing so will be using return for math moving forward. At least basic math */

let c = 2
let d = 3

function multiply(c, d){
  console.log(c * d);
}
console.log(multiply(5, 2));

// return function should be used for math it seems. I confused 
function multi(c, d){
  return c * d;
}
console.log(multi(c, d));




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

// not sure why the dogyears isnt functioning, going to try my own
/*
let years = 2

function dogYears(){
  return 'The dog is ' + years * 7 + ' years old.'
}
console.log(dogYears());
*/

//Mines is working and is basically the same exact funtion, not sure why the template above wasnt working
let Age = 3

function dogAge(){
  return 'The dog is ' + Age * 7 + ' years old.'
}
console.log(dogAge());



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds, followed by an age value in years
2. 🌟 NOTE: if the dog is a puppy, the age will be a decimal (rounded to two places). For example: 3 months = .25 (3 divided by 12)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996

//Deleted code here as it was distracting */

let DogAge = 1
let PuppyAge = NaN
let DogWeight = 15

function hungryDog(){
  if (PuppyAge >= 2 && PuppyAge <= 4){
    return 'Your puppy should consume ' + .10 * DogWeight + ' lbs of food.'
  }
  else if(PuppyAge >= 5 && PuppyAge <= 7){
    return 'Your puppy should consume ' + .05 * DogWeight + ' lbs of food.'
  }
  else if(PuppyAge >= 8 && PuppyAge <= 12){
    return 'Your puppy should consume ' + .04 * DogWeight + ' lbs of food.'
  }
  else if(DogAge >= 1 && DogWeight <= 5){
    return 'Your dog should consume ' + .05 * DogWeight + ' lbs of food.'
  }
  else if(DogAge >= 1 && DogWeight >= 6 && DogWeight <= 10){
    return 'Your dog should consume ' + .04 * DogWeight + ' lbs of food.'
  }
  else if(DogAge >= 1 && DogWeight >= 11 && DogWeight <= 15){
    return 'Your dog should consume ' + .03 * DogWeight + ' lbs of food.'
  }
  else if(DogAge >= 1 && DogWeight > 15){
    return 'Your dog should consume ' + .02 * DogWeight + ' lbs of food.'
  }
  else{
    console.log('Input error, please try again.')
  }
}

   console.log(hungryDog());

//I realized halfway through that this way may not be optimal. The version above is adjusted to what I believe is correct. 
/* function hungryDog(){
  if (PuppyAge >= 2 && PuppyAge <= 4 && DogWeight <= 5){
    return 'Your puppy should consume ' + .10 * DogWeight + ' lbs of food.'
  }
  else if(PuppyAge >= 5 && PuppyAge <= 7 && DogWeight <= 10 && DogWeight >= 6){
    return 'Your puppy should consume ' + .05 * PuppyWeight + ' lbs of food.'
  }
  else if(PuppyAge >= 8 && PuppyAge <= 12 && DogWeight <= 10 && DogWeight >= 6){
    return 'Your puppy should consume ' + .05 * PuppyWeight + ' lbs of food.'
  }
}

console.log(hungryDog()); 
*/


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Do the following:
1. Create a new variable that randomly generates the computer's choice, this must not be done inside the function
2. Use Math.random to determine the computer's choice (Math.random gives a random number between 0 and 1)
3. Make a conditional that changes the variable to "rock", "paper", or "scissors" based on it's random number

Use the game function below to do the following:
1. Receive 2 parameters: a string with the user's choice of "rock", "paper", or "scissors" 
   and the computer's choice of "rock", "paper", or "scissors".
   Note: make sure the strings are all lower case or it will not pass the test
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match these strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
*/

let user = 'scissors'
let computer = ['rock', 'paper', 'scissors']

function game(user, computer){
if(user === 'rock' && computer === 'rock'){
  return 'it\'s a tie'
  }
else if(user === 'paper' && computer === 'paper'){
  return 'it\'s a tie'
 }
else if(user === 'scissors' && computer === 'scissors'){
  return 'it\'s a tie'
 }
else if(user === 'rock' && computer === 'paper'){
  return 'you lose!'
 }
else if(user === 'paper' && computer === 'scissors'){
  return 'you lose!'
 }
 else if(user === 'scissors' && computer === 'rock'){
  return 'you lose!'
 }
 else if(computer === 'scissors' && user === 'rock'){
  return 'you win!'
 }
 else if(computer === 'paper' && user === 'scissors'){
  return 'you win!'
 }
 else if(computer === 'rock' && user === 'paper'){
  return 'you win!'
 }
 else {
   return 'There seems to be an issue. Please refresh page or try again later.'
 }
}

console.log(game(user, computer[Math.floor(Math.random() * computer.length)]));

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

let km = 0.62137
let Mile = 2

function miles(){
   return Mile + "Km is converted to " + Mile * 0.62137 + ' miles.'
}

console.log(miles());


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet30.48
*/

let feet = 3
let cm = 30.48

function centimeters(){
   return feet + "ft is converted to " + feet * 30.48 + 'cm.'
}

console.log(centimeters());



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number
2. The annoying song function should return the following string exactly one time:

    "{number you gave as an argument} bottles of soda on the wall, {number you gave as an argument} bottles of soda, take one down pass it around {number you gave as an argument minus 1} bottles of soda on the wall"

3. Outside of the function, Make a loop that invokes annoying song with a number that decreases until it gets to 1 bottle left. 
4. Each time the annoyingSong is run from this loop, it should console.log the string that was returned. 
*/

for(let soda = 99; soda < 100; soda--){
for(let soda2 = 100; soda2 < 100; soda2--) {

function annoyingSong(){
 return soda2 + ' bottles of soda on the wall, ' + soda2 + ' bottles of soda, take one down pass it around, ' + soda + ' bottles of soda on the wall'
}
}
}

console.log(annoyingSong());

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/

let num1 = 58

function grade(num1){
if(num1 >= 90 && num1 <= 100 ){
return 'you got an A'
}
else if(num1 >= 80  && num1 <= 89){
return 'you got a B'
}
else if(num1 >= 70 && num1 <= 79){ 
return 'you got a C'
}
else if(num1 >= 60  && num1 <= 69){
return 'you got a D'
} 
else if(num1 <= 59){
return 'you got an F'
}
else{
  return 'Input invalid, please try again.'
}
}

console.log(grade(num1));

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/



//not finished, need help, confused

/*
const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'Y', 'y']
let word = 'Abcdef'
let word2 = 'Banky'
let outcome = vowels.includes(word)

console.log(outcome,Math.floor(vowels.length));

if(outcome === true){
  return word * 5 + 'fcdyfytf'
}

const vowelcount = (vowels, word) =>{
  let counter = 0
  vowels.flat(Infinity).forEach(word2 =>{
    if (x === word) counter++
  })
  return counter
}
*/


















/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}
