
var charNum = document.getElementById("charNum");
var numberChecked = document.getElementById("numbers");
var symbolChecked = document.getElementById("symbols");
var lowerCaseChecked = document.getElementById("lowercase");
var upperCaseChecked = document.getElementById("uppercase");
var submit = document.getElementById("generate");
var yourPw = document.getElementById("password");



var numbers = '0123456789';
var symbols = '`~!@#$%^&*=-_<>?/+=';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


submit.addEventListener("click", function (e) {

  if (!numberChecked.checked && !symbolChecked.checked && !lowerCaseChecked.checked && !upperCaseChecked.checked) {
    
    alert("Please select checkbox to begin!")
  }

  // numeric values
  if (numberChecked.checked) {
    yourPw.value = password(charNum.value, numbers);
  }

  //  symbols characters
  if (symbolChecked.checked) {
    yourPw.value = password(charNum.value, symbols);
  }

  //  lowercase characters
  if (lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, lowercase);
  }

  //  uppercase characters
  if (upperCaseChecked.checked) {
    yourPw.value = password(charNum.value, uppercase);
  }

  // if number and symbol have been checked
  if (numberChecked.checked && symbolChecked.checked) {
    yourPw.value = password(charNum.value, numbers + symbols);
  }

  // if number and uppercase have been checked
  if (numberChecked.checked && upperCaseChecked.checked) {
    yourPw.value = password(charNum.value, numbers + uppercase);
  }

  // if number and lowercase have been checked
  if (numberChecked.checked && lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, numbers + lowercase);
  }

  // if symbol and uppercase have been checked
  if (symbolChecked.checked && upperCaseChecked.checked) {
    yourPw.value = password(charNum.value, symbols + uppercase);
  }

  // if symbol and lowercase have been checked
  if (symbolChecked.checked && lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, symbols + lowercase);
  }

  // if uppercase and lowercase have been checked
  if (upperCaseChecked.checked && lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, uppercase + lowercase);
  }

  // if symbols with uppercase and lowercase have been checked
  if (symbolChecked.checked && upperCaseChecked.checked && lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, symbols + uppercase + lowercase);
  }

  // if number with uppercase and lowercase have been checked
  if (numberChecked.checked && upperCaseChecked.checked && lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, numbers + uppercase + lowercase);
  }


  // if number with symbols and uppercase have been checked
  if (numberChecked.checked && symbolChecked.checked && upperCaseChecked.checked) {
    yourPw.value = password(charNum.value, numbers + symbols + uppercase);
  }

  // if number with symbols and lowercase have been checked
  if (numberChecked.checked && symbolChecked.checked && lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, numbers + symbols + lowercase);
  }

  // if number with symbols uppercase and lowercase have been checked
  if (numberChecked.checked && symbolChecked.checked && upperCaseChecked.checked && lowerCaseChecked.checked) {
    yourPw.value = password(charNum.value, numbers + symbols + uppercase + lowercase);
  }

});


function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
  customAlert();
}
