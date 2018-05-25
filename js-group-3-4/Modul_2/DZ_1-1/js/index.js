'use strict';


const passwords = ['qwerty', '111qwe', '123123', 'qweqwe'];
let userInput;
let attempt = 3;

while (userInput !== null && attempt !== 0) {
	userInput = prompt('Введіть пароль');
	attempt -= 1;

	const hasLogin = passwords.includes(userInput);

	if (userInput === null) {
		break;
	} else if (hasLogin) {
		alert(`Ти знаєш пароль вітаю`);
		break;
	} else if (attempt === 0) {
		alert(`У Вас залишилося ${attempt} спроб, акаунт заблоковано`);
	} else {
		alert(`Невірний пароль у Вас залишилося ${attempt}`);
	}
}
