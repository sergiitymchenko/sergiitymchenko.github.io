import './style.css';
import gridItem from './templates/grid-item.hbs';
import * as storage from './services/storag.js';
import {fetchCard} from './services/api';


const form = document.querySelector('input');
const btnAddUrl = document.querySelector('.button');
const gridCard = document.querySelector('.grid-card');

const persistedUrlAddress = storage.getUrl();
const fetchUrlAddress = persistedUrlAddress ? persistedUrlAddress : [];

btnAddUrl.addEventListener('click', handleClick);
gridCard.addEventListener('click', deleteBtn);


function handleView() {
	fetchCard(form.value)
	.then(data => {
		gridCard.insertAdjacentHTML(
			'afterbegin',
			gridItem({
				name: data.title,
				link: data.url,
				img: data.image,
				text: data.description
			})
			)
	});
}


function handleClick(e) {
	e.preventDefault();

	if (form.value === '') {
		alert('Будь ласка введіть url-адресу');
		return;
	}

	const regexInput = /^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})?\/([a-z]{1,10})?\/?/gi;

	if (!regexInput.test(form.value)) {
		alert('Введено не правильний url-address, потрібно ввести https//:exemple.com або https//:www.exemple.com');
		return;
	}

	if (!fetchUrlAddress.includes(form.value)) {
		fetchUrlAddress.push(form.value);
		storage.setUrl(fetchUrlAddress);
	} else {
		alert('Такий url-address вже записано');
		return;
	}

	handleView();

	form.value = '';
};

function deleteBtn({target}) {
	if (target.nodeName !== 'BUTTON') return;
	target.parentNode.remove();
	// const elemSrc = target.parentNode.firstElementChild.firstElementChild.href;
	// const index = fetchUrlAddress.indexOf(elemSrc);
	// if (index !== -1) {
	// 	fetchUrlAddress.splice(index, 1);
	// }
	// return fetchUrlAddress;
};

onload = () => {
	alert('Кількість запитів обмежена');
	if (fetchUrlAddress !== []) {
		fetchUrlAddress.map(elem => {
			fetchCard(elem).then(data => {
				gridCard.insertAdjacentHTML(
					'afterbegin',
					gridItem({name: data.title, link: data.url, img: data.image, text: data.description})
					)
			}) 
		});
	}
}