// Assignment Code
var generateBtn = document.querySelector("#generate");
//var for generating random password
var numbers = "1234567890"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*(){}[]+<>/,."
var length = ""
var possibleChars = ""
var generatedPassword = ""
// function writePassword adds the password to the text box
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Creates randomize password
function generatePassword() {
  var addUppercase = confirm("Do you want Uppercase Letters?");
  var addLowercase = confirm("Do you want lowercase letters?");
  var addNumeric = confirm("Do you want Random Numbers?");
  var addSpecial = confirm("Do you want Special Characters?");
  length = prompt("Choose between 8 and 128 Characters");
  //if password isnt within parameters it will send alert
  if (length < 8 || length > 128) {
    return alert("password MUST be between 8 and 128 characters")

  }//adds numbers
  if (addNumeric) {
    possibleChars = possibleChars + numbers

  }//adds uppercase chars
  if (addUppercase) {
    possibleChars = possibleChars + uppercase
  }//adds lowercase chars
  if (addLowercase) {
    possibleChars = possibleChars + lowercase
  }//adds special chars
  if (addSpecial) {
    possibleChars = possibleChars + special
  }
//for look to create random password
  for (i = 0; i < length; i++) {
    generatedPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)]

  }
//sends password to var generatedPassword
  return generatedPassword
}
// tells function writePassword to write the password in textfield
generateBtn.addEventListener("click", writePassword);

