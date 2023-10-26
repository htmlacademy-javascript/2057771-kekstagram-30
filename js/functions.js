// Функция для проверки длины строки:

function checkLength(inputString, maxLength) {
  return (inputString.length <= maxLength);
}

let stringToCheck = 'hello';
let maxLength = 5;

let result = checkLength(stringToCheck, maxLength);

if (result) {
  console.log('Working!');
} else {
  console.log('Fail!');
}

// Функция для проверки, является ли строка палиндромом:

function checkPalindrome(text) {
  text = text.replaceAll(" ", "").toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return text === reversedText;
}

console.log(checkPalindrome("А роза упала на лапу Азора")); // true
console.log(checkPalindrome("Лёша на полке клопа нашёл ")); // true
console.log(checkPalindrome("Привет, мир!")); // false
