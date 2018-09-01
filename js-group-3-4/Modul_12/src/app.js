import './style.css';
import gridItem from './templates/grid-item.hbs';
import * as storage from './services/storag.js';

const form = document.querySelectorAll('input');
const btnAddUrl = document.querySelector('.button');
const gridCard = document.querySelector('.grid-card');
const arrAddress = [];

btnAddUrl.addEventListener('click', handleClick);
gridCard.addEventListener('click', deleteBtn);

function handleClick(e) {
	e.preventDefault();
	if (form[0].value === '' || form[1].value === '') {
		alert('Заповніть будь ласка поля');
		return;
	}
	arrAddress.push(form[1].value);
	// const item = arrAddress.every();
	// console.log(item);


	
	gridCard.insertAdjacentHTML(
		'afterbegin',
		gridItem({name: form[0].value, link: form[1].value })
		);

	form[0].value = '';
	form[1].value = '';

};

function deleteBtn({target}) {
	if (target.nodeName !== 'BUTTON') return;
	target.parentNode.remove();
}