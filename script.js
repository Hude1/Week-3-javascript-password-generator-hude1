// Assignment code here

// Function to generate password
function generatePassword(){
  let pwdLen = prompt("How many characters would you like to your password to be? (8-128 characters)")
  if(pwdLen < 8 || pwdLen > 128){
    alert("Password length must be between 8 and 128 characters")
  }

  return ""
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
