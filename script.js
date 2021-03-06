var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specChar = ["#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "~"];

function randomizer(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {

  var password = "";

  var possiblePassword = [];

  var guaranteedPassword = [];

  var passwordLength = parseInt(prompt("How many characters would you like between 8 and 128?")); //store variables
  
    if (isNaN(passwordLength) === true){
      alert("That is not a number sir/ma'am try again!!")
      return 
    };

    if(passwordLength < 8) {
      alert("Password is not long enough keep trying!")
      return 
    };

    if(passwordLength > 128){
      alert("I can not count that high, pick a lower number.")
      return
    };

    var lowerChoice = confirm("Do you want a Lower Case character?");
  
    var upperChoice = confirm("Do you want an Upper Case character?");
    
    var specChoice = confirm("Do you want a Special character?");
  
    var numChoice = confirm("Do you want a Number character?");
    
    if (lowerChoice === false && 
      upperChoice === false &&
      specChoice === false &&
      numChoice === false){
        alert("YOU HAVE TO PICK AT LEAST ONE!!")
      };
      if(lowerChoice) {
        possiblePassword = possiblePassword.concat(lowerCase)
        guaranteedPassword.push(randomizer(lowerCase))
      };
    
      if(upperChoice) {
        possiblePassword = possiblePassword.concat(upperCase)
        guaranteedPassword.push(randomizer(upperCase))
      };
    
      if(specChoice) {
        possiblePassword = possiblePassword.concat(specChar)
        guaranteedPassword.push(randomizer(specChar))
      };
    
      if(numChoice) {
        possiblePassword = possiblePassword.concat(numChar)
        guaranteedPassword.push(randomizer(numChar))
      }; 
    
      for (var i = 0; i < passwordLength; i++){
        var possibleChar = randomizer(possiblePassword)
        password += possibleChar
      };
     
      for (var i = 0; i < guaranteedPassword.length; i++){
        password[i] = guaranteedPassword[i]
      };
      
     return password;
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
