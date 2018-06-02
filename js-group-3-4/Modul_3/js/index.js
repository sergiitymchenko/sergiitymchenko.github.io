'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const userInput = prompt(`Введіть логін`);

const checkInLoginExists = function (userInput) {

	for (let item of logins) {
		if ( userInput === item ) {
			alert(`Такий логін вже використовується`);
			return true;
		}
	}
	return false;
};

const checkLoginValidity = function (userInput) {
	const min = 4;
	const max = 16;
	const inputLength = userInput.length;

	if (inputLength >= min && inputLength <= max ) {
		return true;
	}
	alert(`Логін повинен бути від ${min} до ${max}`);
	return false;
};


const addLogin = function (userInput) {

	if (userInput === null) {
		return;
	}
	const loginValidity = checkLoginValidity(userInput);
	const loginExists = checkInLoginExists(userInput);

	if ( loginExists || !loginValidity ) {
		return;
	}
	
	logins.push(userInput);
	alert(`Логін успішно добавлено`);
	
	console.log(logins);
};

addLogin(userInput);