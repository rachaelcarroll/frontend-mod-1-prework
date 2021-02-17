// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear 
//Declare a function called buildABear which consists of 5 parameters
function buildABear(name, age, fur, clothes, specialPower) {
//Within the function, the variable greeting is assigned a string value with the parameter name interpolated into the string.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
//The variable demographics is declared and assigned an array containing name and age
  var demographics = [name, age]
//The variable powerSaying is declared and is assigned a string value concatenated with the specialPower parameter
  var powerSaying = "Did you know that I can " + specialPower + " ?"
//The variable builtBear is declared and assigned to an object with 6 keys
  var builtBear = {
//The basicInfo key is paired with the demographics variable
    basicInfo: demographics,
//The clothes key is paired with the clothes parameter
    clothes: clothes,
//The exterior key is paired with the fur parameter
    exterior: fur,
//The cost key is paired with a float integer 
    cost: 49.99,
//The sayings key is paired with an array which consists of two variables and a string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
//The isCuddly key is paired with the boolean value of true
    isCuddly: true,
  }
//The function returns the value of the variable builtBear
  return builtBear
}

//The buildABear function is called and the arguments are passed into the function
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
//The buildABear function is called and the arguments are passed into the function
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')


//FizzBuzz
//Declare a function called fizzBuzz with consists of 3 parameters
function fizzBuzz(num1, num2, range) {
//Within the function, a for loop is initiated which will begin at 0 and increment by 1 until it reaches the value of the parameter called range 
  for (var i = 0; i <= range; i++) {
//Within the for loop is an if statement which is evaluating if the remainder of the variable i divided by num1 is strictly equal to 0 and if the remainder of the variable i divided by num2 is strictly equal to 0
    if (i % num1 === 0 && i % num2 === 0) {
//If the above if statement is true, then the console will log the string 'fizzbuzz'
      console.log('fizzbuzz')
//If the if statement is false, this else if statement will evaluate if the remainder of i divided by num1 is strictly equal to 0 
    } else if (i % num1 === 0) {
//If the above if statement is true, then the console will log the string 'fizz'
      console.log('fizz')
//If the previous else if statement is false, then this else if statement will run. It evaluates if the remainder of i divided by num2 is strictly equal to 0
    } else if (i % num2 === 0) {
//If the above if statement is true, then the console will log the string 'buzz'  
      console.log('buzz')
//If all of the previous statements are false, then the else statement will run.
    } else {
//console will log the value of i
      console.log(i)
    }
  }
}
//the function fizzBuzz is called and passed a set of arguments
fizzBuzz(3, 5, 100)
//this function has not been identified and will not run (fizzbuzz != fizzBuzz)
fizzbuzz(5, 8, 400)
