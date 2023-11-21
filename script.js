// Assignment code here

// Function to generate password
function generatePassword(){
  let pwdLen = prompt("How many characters would you like to your password to be? (8-128 characters)")
  if(pwdLen < 8 || pwdLen > 128){
    alert("Password length must be between 8 and 128 characters")
    return ""
  }

  
  let includelower = confirm("Would you like to include lowercase characters?")
  let includeupper = confirm("Would you like to include uppercase characters?")
  
  let includenumeric = confirm("Would you like to include numeric characters?")
  let includespecial = confirm("Would you like to include special characters?")
  

  if(!includelower && !includeupper && !includenumeric && !includespecial ){
    alert("You must select atleast one character type.")
    return ""
  }


  let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
  let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numericChars = "0123456789"
  let specialChars = "!@#$%^&*()_+"

  let allChars = ""
  if(includelower) allChars += lowerCaseChars
  if(includeupper) allChars += upperCaseChars
  if(includenumeric) allChars += numericChars
  if(includespecial) allChars += specialChars
  

  let passwrod = ""
  for(let i=0; i<pwdLen; i++){
    let randomIndex = Math.floor(Math.random() * allChars.length)
    passwrod += allChars[randomIndex]
  }

  return passwrod



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
