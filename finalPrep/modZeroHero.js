// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings

var heroName = "Taco Cat"
var specialAbility = "Making tacos appear out of thin air"

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello, my name is " + heroName;
var catchphrase = "Watch me " + ${specialAbility} + " right before your eyes!";

// Declare two variables - power AND energy - set to integers
var power = 2
var energy = 50

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans

var isHuman = false;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Donut Dog", "Cuddly Kid", "Mega Man"];
var sidekicks = ["Nacho Mouse", "Pizza Pig", "Bob"];

// Print the first sidekick to your console

console.log(sidekicks[0]);

// Print the last archEnemy to the console

console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array

archEnemies.push("Wonder Woman")
                 
// Print the archEnemies array to console to ensure you added a new archEnemy

console.log(archEnemies);

// Remove the first sidekick from the sidekicks array

sidekicks.shift(0);

// Print the sidekicks array to console to ensure you added a new sidekick

console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day 
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

var dangerLevel = 80;
var saveTheDay = "I have saved the day";
var badExcuse = "Too scary for me!";

function accessSituation(dangerLevel, saveTheDay, badExcuse) 

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel >= 50) {
    console.log(badExcuse);
  } else if (50 > dangerLevel > 10) {
    console.log(SaveTheDay);
  } else {
   console.log("Meh. Hard Pass");
  }

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!'
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."


// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)

var scaryMonster = {
  name: "Beanzilla",
  smell: "Beans",
  weight: 550,
  citiesDestroyed: ["Denver", "Boston", "New York"],
  luckNumbers: [7, 17, 21],
  address: {number: 222, street: "River Road", state: "Ohio", zip: 43402}
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name 
//   - superpower
//   - age 
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50 
  
class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
  },
  static archNemesis = "The Syntax Error";
  static powerLevel = 100;
  static energyLevel = 50;
 }
  
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

sayName() {
  console.log(this.name);
}

static maximizeEnergy() {
energyLevel = 1000; 
}

static gainPower(number) {
this.number = number;
console.log(this.number + powerLevel);
} 

// - Create 2 instances of your SuperHero class

var hero1 = new SuperHero("Wonder Woman", "Super Strength", 31);
var hero2 = new SuperHero("Invisible Man", "Invisibility", 25);

// Reflection
// What parts were most difficult about this exerise?
I found that the last part on the class methods was the most difficult.  Taking what we did in the pre work exercises to another level and
and getting stuck on the static values and method creation.
// What parts felt most comfortable to you?
I felt most comfortable delaring variables, adding and removing from arrays, and with if/else if/else statements. 

// What skills do you need to continue to practice before starting Mod 1?
I need to continue to practice different class & object/instances and methods.  I think going line by line and understanding the
why behind each line of code will help me process what is happening. 
