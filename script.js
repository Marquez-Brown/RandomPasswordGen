// Assignment Code
console.log("hello, world")
var generateBtn = document.querySelector("#generate");
// var uppercase, lowercase, special, numeric, length, possibleChars;
//make variables that are strings containing every letter possiblity
var numbers = "1234567890"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*(){}[]+<>/,."
var length = "8-128"
var possibleChars = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  uppercase = confirm("Do you want Uppercase Letters?");
  lowercase = confirm("Do you want lowercase letters?");
  numeric = confirm("Do you want Random Numbers?");
  special = confirm("Do you want Special Characters?");
  length = +prompt("Choose between 8 and 128 Characters");

  if (length < 8 && length > 128) {
    return alert("password MUST be between 8 and 128 characters")

  }
  if (numeric) {
    possibleChars = possibleChars + numbers
  }
  if (uppercase) {
    possibleChars = possibleChars + uppercase
  }
  if (lowercase) {
    possibleChars = possibleChars + lowercase
  }
  if (special) {
    possibleChars = possibleChars + special
  }
}
//make if statements for the rest of the possibilities

var generatedPassword = "";
for (i = 0; i < length; i++) {
  generatedPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)]
  
}
//run writePassword to fill out text box
writePassword()