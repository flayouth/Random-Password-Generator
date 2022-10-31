var generateBtn = document.querySelector("#generate");
function generatePassword() {

   
    var lowerEl = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperEL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var symbolsEl = ["!", "@", "#", "$", "%", "^", "&", "*", "+",];
    var numbersEl = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

   
    var userInput = [];

    var charLength = window.prompt("How long would you like your password? Choose a length from 8 - 128 characters long!")
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      window.alert("The required password must be between 8 and 128 characters in length. Please input a validated response and try again!");
      return generatePassword();
    }

    var confirmUppers = window.confirm("Do you want to include uppercase letters?");
    var confirmLowers = window.confirm("Do you want to include lowercase letters?");
    var confirmsymbolsEl = window.confirm("Do you want to include symbols?");
    var confirmnumbersEl = window.confirm("Do you want to include numbers?");
    

    if (confirmUppers) {
      userInput = userInput.concat(upperEL);
    }
    if (confirmLowers) {
      userInput = userInput.concat(lowerEl);
    }
    if (confirmnumbersEl) {
      userInput = userInput.concat(numbersEl);
    }
    if (confirmsymbolsEl) {
      userInput = userInput.concat(symbolsEl);
    }

    console.log(userInput);

    var passNew = "";
    for (var i = 0; i < charLength; i++) {
          var randomizeChar = Math.floor(Math.random() * userInput.length);
          passNew = passNew + userInput[randomizeChar];
    }
    
    return passNew;
}
  

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
