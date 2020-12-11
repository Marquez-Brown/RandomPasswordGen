// Assignment Code
var generateBtn = document.querySelector("#generate");
// var uppercase, lowercase, special, numeric, length, possibleChars;
//make variables that are strings containing every letter possiblity
var numbers = "1234567890"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*(){}[]+<>/,."
var length = ""
var possibleChars = ""
var generatedPassword = ""
// var password = generatedPassword
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var addUppercase = confirm("Do you want Uppercase Letters?");
  var addLowercase = confirm("Do you want lowercase letters?");
  var addNumeric = confirm("Do you want Random Numbers?");
  var addSpecial = confirm("Do you want Special Characters?");
  length = prompt("Choose between 8 and 128 Characters");

  if (length < 8 || length > 128) {
    return alert("password MUST be between 8 and 128 characters")

  }
  if (addNumeric) {
    possibleChars =  possibleChars + numbers
  
  }
  if (addUppercase) {
    possibleChars = possibleChars + uppercase
  }
  if (addLowercase) {
    possibleChars = possibleChars + lowercase
  }
  if (addSpecial) {
    possibleChars = possibleChars + special
  }
  
  for (i = 0; i < length; i++) {
    generatedPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)]
    
  }
  
  return generatedPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//make if statements for the rest of the possibilities



//run writePassword to fill out text box
