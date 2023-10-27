// Функция для проверки длины строки:

function checkLength(inputString, maxLength) {
  return (inputString.length <= maxLength);
}

const stringToCheck = 'hello';
const maxLength = 5;

const result = checkLength(stringToCheck, maxLength);

if (result) {
  console.log('Working!');
} else {
  console.log('Fail!');
}

// Функция для проверки, является ли строка палиндромом:

function checkPalindrome(text) {
  text = text.replaceAll(' ', '').toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return text === reversedText;
}

console.log(checkPalindrome('А роза упала на лапу Азора')); // true
console.log(checkPalindrome('Лёша на полке клопа нашёл')); // true
console.log(checkPalindrome('Привет, мир!')); // false
