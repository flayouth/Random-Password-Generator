// Assignment code here

var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword(){
 var userInput = window.prompt("How long would you like your password?")

 var passwordLength = parseInt(userInput)

 if (isNaN(passwordLength)) {
  window.alert("Not a number!")
  return
}

  if (passwordLength < 8 || passwordLength > 128) {
  window.alert("character count too small or large")
  return
}

  var userWantsNumbers = window.confirm("Include Numbers In Password?")
  var userWantsSymbols = window.confirm("Include Symbols In Password?")
  var userWantsLowercase = window.confirm("Include Lowercase In Password?")
  var userWantsUppercase = window.confirm("Include Uppercase In Password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6" ,"7", "8"]
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var optionsCart = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
   }

  if(userWantsNumbers === true) {
    optionsCart.push(numberList)   
   }

  if(userWantsSymbols === true) {
    optionsCart.push(symbolList)
   }

  if(userWantsLowercase === true) {
    optionsCart.push(lowercaseList)
   }

  if(userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
   }

   if(optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
   }
  
  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar 
  }
  
  return generatedPassword
}
// #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
