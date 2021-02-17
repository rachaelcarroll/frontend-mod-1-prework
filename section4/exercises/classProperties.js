/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.

node section4/exercises/classProperties.js

*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog

class Dog {}

var schnauzer = new Dog();
var poodle = new Dog();

console.log(schnauzer);
console.log(poodle);

// Prompt 2: Snack

class Snack {}

var doritos = new Snack();
var cheezits = new Snack();

console.log(doritos);
console.log(cheezits);

// Prompt 3: Shirt

class Shirt {}
var shortSleeve = new Shirt();
var tankTop = new Shirt();

console.log(shortSleeve);
console.log(tankTop);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Dog {
  constructor() {
    this.age = 5;
    this.hairType = "Wirey";
    this.weight = "20 lbs";
  }
}
var schnauzer = new Dog();
console.log(schnauzer);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.taste = "salty";
    this.amount = 20;
    this.calories = 200;
  }
}

var doritos = new Snack ();
console.log(doritos);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = "XL"
    this.design = "Striped"
    this.brand = "Gap"
  }
}
var tankTop = new Shirt();
console.log(tankTop); 

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the constructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class Dog {
  constructor(age, hairType, weight) {
    this.age = age;
    this.hair = hairType;
    this.weight = weight;
  }
}

var schnauzer = new Dog(5, "Wirey", "20 lbs");
console.log(schnauzer);
var poodle = new Dog(2, "Curly", "50 lbs");
console.log(poodle);

// Prompt 2: Snack

class Snack {
  constructor(taste, amount, calories) {
    this.taste = taste;
    this.amt = amount;
    this.cals = calories;
  }
}

var cheezits = new Snack("salty", 20, 200);
console.log(cheezits);
var oreos = new Snack("sweet", 3, 150);
console.log(oreos);


// Prompt 3: Shirt

class Shirt {
  constructor(size, design, brand) {
    this.size = size;
    this.design = design;
    this.brand = brand;
  }
}

var tankTop = new Shirt("XL", "Striped", "Gap");
console.log(tankTop);
var shortSleeve = new Shirt("M", "Hawaiian", "Target");
console.log(shortSleeve);
