// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

//Prompt with Criteria for the password
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// When a user answsers a prompt - each input type should be validated and at least one character type should be selected and will be added to charSet
let charSet = "";

//Prompt to choose the length of the password that is at least 8 characters and no more than 124 characters

// const lengthAnswer = range(8,124);
let lengthAnswer;
function verifyNumber() {
  lengthAnswer = Number(prompt("How many characters long would you like your password to be? Type a number between 8 and 128", "8"));
  console.log(lengthAnswer);
    if(lengthAnswer >= 8 && lengthAnswer <= 128) {
    console.log(lengthAnswer);
    } else {
      alert("Type a number between 8 and 128");
      verifyNumber();
    }
    
}

verifyNumber();




//Confirm window to choose confirm whether or not to include lowercases
function generateLowerCase() {
if (confirm("Would you like your password to include lowercase letters? Click ok to continue with lowercase letters or cancel to continue without lowercase letters")) {
  charSet += lowerCase;
  console.log(charSet);
}};

generateLowerCase();

//Confirm window to choose confirm whether or not to include uppercase
function generateUpperCase() {
if (confirm("Would you like your password to include uppercase letters? Click ok to continue with uppercase letters or cancel to continue without uppercase letters")) {
  charSet += upperCase;
  console.log(charSet);
}};

generateUpperCase();

//Confirm window to choose confirm whether or not to include numbers
function generateNumbers() {
if (confirm("Would you like your password to include numbers? Click ok to continue with numbers or cancel to continue without numbers")) {
  charSet += numbers;
  console.log(charSet);
}};

generateNumbers();


//Confirm window to choose confirm whether or not to include special characters
function generateSymbols() {
if (confirm("Would you like your password to include special characters? Click ok to add special characters and generate password or cancel to generate password without special characters")) {
  charSet += symbols;
  console.log(charSet);
}};

generateSymbols();



let finalPassword = "";


//When prompts are answered, generate a password that matches the criteria
for(let i = 0; i < lengthAnswer; i++) {
  finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
};

//Generated password displayed in an alert or written to the page

console.log(finalPassword);
return finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// THEN my input should be validated and at least one character type should be selected WHEN all prompts are answered


