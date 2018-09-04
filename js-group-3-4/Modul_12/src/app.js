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

	handleView();

	fetchUrlAddress.push(form.value);
	storage.setUrl(fetchUrlAddress);

	form.value = '';
};

function deleteBtn({target}) {
	if (target.nodeName !== 'BUTTON') return;
	target.parentNode.remove();
};

onload = () => {
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