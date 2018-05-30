'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const userInput = prompt(`Введіть логін`);

const checkInLoginExists = function () {

	for (let item of logins) {
		if ( userInput === item ) {
			alert(`Такий логін вже використовується`);
			return;
		}
	}
	return false;
};

const checkLoginValidity = function () {
	const min = 4;
	const max = 16;
	const inputLength = userInput.length;

	if (inputLength >= min && inputLength <= max ) {
		return true;
	} else {
		alert(`Логін повинен бути від ${min} до ${max}`);
	}
	return false;
};

const addLogin = function () {

	if (userInput === null) {
		return;
	}
	const loginValidity = checkLoginValidity();
	const loginExists = checkInLoginExists();

	if ( loginExists !== false ) {
		return;
	}
	if ( loginValidity === false ) {
		return;
	}
	
	logins.push(userInput);
	alert(`Логін успішно добавлено`);
	
	console.log(logins);

};

addLogin();