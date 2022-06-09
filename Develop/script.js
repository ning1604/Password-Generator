// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Please enter length of desired password (8-128 characters)");
  var lowercaseChoice = prompt("Would you like to inlclude lowercase characters? (y/n)");
  var uppercaseChoice = prompt("Would you like to inlclude uppercase characters? (y/n)");
  var numericChoice = prompt("Would you like to inlclude numeric characters? (y/n)");
  var specialChoice = prompt("Would you like to inlclude special characters? (y/n)");

  var password = generatePassword(passwordLength, lowercaseChoice, uppercaseChoice, numericChoice, specialChoice);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Function for generating password
function generatePassword(passwordLength, lowercaseChoice, uppercaseChoice, numericChoice, specialChoice) {
  var charCodes = [];
  if (lowercaseChoice.toLowerCase() == "y") {
    charCodes = charCodes.concat(lowercaseCharacters);
  }
  if (uppercaseChoice.toLowerCase() == "y") {
    charCodes = charCodes.concat(uppercaseCharacters);
  }
  if (numericChoice.toLowerCase() == "y") {
    charCodes = charCodes.concat(numericCharacters);
  }
  if (specialChoice.toLowerCase() == "y") {
    charCodes = charCodes.concat(specialCharacters);
  }
  var passwordCharacters = []
  for (let i = 0; i < parseInt(passwordLength); i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function for generating arrays for the different character types
var arrayLowToHigh = function (low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
// Generating arrays for the different character types
var lowercaseCharacters = arrayLowToHigh(97, 122);
var uppercaseCharacters = arrayLowToHigh(65, 90);
var numericCharacters = arrayLowToHigh(48, 57);
var specialCharacters = arrayLowToHigh(32, 47)
  .concat(arrayLowToHigh(58, 64))
  .concat(arrayLowToHigh(91, 96))
  .concat(arrayLowToHigh(123, 126));
