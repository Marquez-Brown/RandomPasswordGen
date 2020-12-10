// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase, lowercase, special, numeric, length, possibleChars;
//make variables that are strings containing every letter possiblity
var numbers = "1234567890"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialchar = "!@#$%^&*(){}[]+<>/,."

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// var array = [1,2,3,4,5,6]

// for(i=(array.length-1);i>0;i--){
//   array[i]
// }


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// Browser character set
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// document.getElementById.onclick("#generate").questions();



// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
function generatePassword() {
  uppercase = confirm("Do you want Uppercase Letters?");
  lowercase = confirm("Do you want lowercase letters?");
  numeric = confirm("Do you want Random Numbers?");
  special = confirm("Do you want Special Characters?");
  length = +prompt("Choose between 8 and 128 Characters");

  if (length < 8 && length > 128) {
    return alert("password MUST be between 8 and 129 characters")
  }
  if (numeric) {
    possibleChars = possibleChars + numbers
  }
  //make if statements for the rest of the possibilities
  var generatedPassword = "";
  for (i = 0; i < length; i++) {
    generatedPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)]
  }
  return generatedPassword;

}
// WHEN prompted for the length of the password
// WHEN prompted for the length of the password
// WHEN prompted for the length of the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters


// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }
// function getRandomSpecChar() {
//   const symbols = '!@#$%^&*(){}[]+<>/,.';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(getRandomSpecChar());


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page