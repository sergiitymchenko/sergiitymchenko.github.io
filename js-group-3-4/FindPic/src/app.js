// import 'normalize.css';
import './css/style.css';
import gridItemTpl from './templates/grid-item.hbs';
import { fetchImages } from './services/api';
import * as storage from './services/storag';

const grid = document.querySelector('.grid');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const logo = document.querySelector('.logo');
const backdrop = document.querySelector('.backdrop');
const imgModal = document.querySelector('.img-modal');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const btnSelect = document.querySelector('.btn-select');
const btnClose = document.querySelector('.btn-close');
const showSelected = document.querySelector('.text');
const imgLogo = document.querySelector('.img-logo');


form.addEventListener('submit', handleFormSubmit);
grid.addEventListener('click', handleChangeImage);
btnLeft.addEventListener('click', handleLeftImage);
btnLeft.addEventListener('keydown', handleLeftImage);
btnRight.addEventListener('click', handleRightImage);
btnRight.addEventListener('keydown', handleRightImage);
btnSelect.addEventListener('click', handleSelectImage);
btnClose.addEventListener('click', handleCloseImage);
showSelected.addEventListener('click', handleShowSelectedImages);
imgLogo.addEventListener('click', handleReload);
backdrop.addEventListener('click', handleBackdropClick);
backdrop.addEventListener('keydown', handleBackdropClickEsc);

const persistedPhotos = storage.getGrid();
const fetchedPhotos = persistedPhotos ? persistedPhotos : [];

const addFotos = storage.getSelected();
const addImagesSelected = addFotos ? addFotos : [];

function createGridItems(items) {
	return items.reduce( (marcup, item) => marcup + gridItemTpl(item), '');
};

function updateGrid(hits) {
	console.log(hits);
	const marcup = createGridItems(hits);
	grid.insertAdjacentHTML('beforeend', marcup);

	logo.classList.add('logo-margin');

	fetchedPhotos.push(...hits);
	storage.setGrid(fetchedPhotos);
};

function handleFormSubmit(e) {
	e.preventDefault();
	fetchImages(input.value, 10).then(updateGrid);
	e.target.reset();
};

function handleChangeImage({target}) {
	const change = target.src;
	backdrop.classList.add('open-backdrop');
	if (target.nodeName !== 'IMG') return;
	imgModal.setAttribute('src', change);
	const el  = target.parentNode;
	el.classList.add('active');
};

function handleLeftImage() {
	const activeElement = document.querySelector('.active');
	const leftElement = activeElement.previousElementSibling.firstElementChild.src;

	if (activeElement.previousElementSibling || e.keyCode === 39) {
		activeElement.classList.remove('active');
		activeElement.previousElementSibling.classList.add('active');
		imgModal.setAttribute('src', leftElement);
	}

};

function handleRightImage() {
	const activeElement = document.querySelector('.active');
	const rightElement = activeElement.nextElementSibling.firstElementChild.src;

	if (activeElement.nextElementSibling || e.keyCode === 37) {
		activeElement.classList.remove('active');
		activeElement.nextElementSibling.classList.add('active');
		imgModal.setAttribute('src', rightElement);
	}
};

function handleSelectImage() {
	const attributeImg = imgModal.getAttribute('src');
	addImagesSelected.push(attributeImg);
	storage.setSelected(addImagesSelected);
};

function handleBackdropClick(e) {
	if (this !== e.target) return;
	handleCloseImage();
};

function handleBackdropClickEsc(e) {
	if (e.keyCode === 27) {
		handleCloseImage();
	}	
};

function handleCloseImage() {
	backdrop.classList.remove('open-backdrop');
};

function handleShowSelectedImages() {
	form.classList.add('clos');
	storage.getSelected();
	updateSelectImage(addImagesSelected);
};

function updateSelectImage() {
	const marcup =  addImagesSelected.map(elem => 
		`<div class="grid-items">
			<img src="${elem}" alt="photo" class="grid-item">
		</div>`,'').join('');
	grid.innerHTML = marcup;
};

function handleReload() {
	location.reload();	
};

onload = () => {
	if (fetchedPhotos !== []) {
		fetchedPhotos.map(elem => {
			grid.insertAdjacentHTML(
				'beforeend',
				gridItemTpl(elem));
		logo.classList.add('logo-margin');
			
		});
	}
};

