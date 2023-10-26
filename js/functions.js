/* Функция для проверки длины строки:
- принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине
- возвращает false, если строка длиннее
checkLength */
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
