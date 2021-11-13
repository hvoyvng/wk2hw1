document.getElementById('generate').addEventListener('click', () => {

  const alpha2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const alpha = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "123456789"
  const symbols = "!@#$%^&*()_+"

  //prompts asking for infomation
  let length = parseInt(prompt("Enter the length of your desired password. (Min: 8 characters Max: 128 characters)"))
  console.log(length)
  if (length >= 8 || length <= 128) {
    confirmNum = confirm("Will this contain numbers?")
    confirmSpec = confirm("Will this contain special characters?")
    confirmUpper = confirm("Will this contain uppercase characters?")
    confirmLower = confirm("Will this contain lowercase characters?")
  }
  else {
    alert("Please enter in the correct value")
  }
  // Empty strings
  var choices = ""

  // If statements to check for info
  if (confirmNum) {
    choices += numbers
  }
  if (confirmLower) {
    choices += alpha
  }
  if (confirmUpper) {
    choices += alpha2
  }
  if (confirmSpec) {
    choices += symbols
  }
  // Empty strings
  var password = ""

  for (var i = 0; i < length; i++) {
    password += choices.charAt(Math.floor(Math.random() * choices.length));
  }

  console.log(password)
  
  document.getElementById("password").innerHTML = `
    ${password}
  `
  
})