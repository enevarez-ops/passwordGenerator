var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specChar = ["#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "~"];





function generatePassword() {

  var passwordLength = prompt("How many characters would you like between 8 and 128?"); //store variables
  console.log(passwordLength);

  var lowerChoice = confirm("Do you want a Lower Case character?");
  
  var upperChoice = confirm("do you want an Upper Case character?");
  
  var specChoice = confirm("Do you want a  Special character?");
  
 /// passwordLength > 8  && passwordLength < 128 needs to be true



 var password = []

 // do they want lowercase? if true pull a random letter from the lowerCase array
 //
 //
 // after all these characters are added, is it as long as they want it tbe? 
 // keep adding more letters (loop)

 // you're gonna want to look into how to turn an array into a string
 return password
}






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
