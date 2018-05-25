'use strict';

let userInput;
const number = [];
let total = 0;

while ( userInput !== null) {
	userInput = prompt('Введіть число');

	if (userInput === null) {
		break;
	} else if ( !parseInt(userInput) ) {
		alert('Ви ввели не число');
	} else {
		number.push(userInput);
	}
}
for ( let item of number ) {
	total += Number(item);
}
alert( `Загальна сумма всіх введених чисел ${total}` );

