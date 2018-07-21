'use strict';
// const galleryItems = [
// 	{ preview: 'img/dog.jpeg', fullview: 'img/dog-full.jpeg', alt: "alt text 1" },
// 	{ preview: 'img/car.jpeg', fullview: 'img/car-full.jpeg', alt: "alt text 2" },
// 	{ preview: 'img/city.jpeg', fullview: 'img/city-full.jpeg', alt: "alt text 3" },
// 	{ preview: 'img/london.jpeg', fullview: 'img/london-full.jpeg', alt: "alt text 4" },
// 	{ preview: 'img/mountains.jpeg', fullview: 'img/mountains-full.jpeg', alt: "alt text 5" },
// 	{ preview: 'img/ship.jpeg', fullview: 'img/ship-full.jpeg', alt: "alt text 6" },
// 	];


const preview = document.querySelector('.preview');
const img = document.querySelector('img');

preview.addEventListener('click', changeImg);


function changeImg({target}) {

	const change = target.getAttribute('data-fullview');
	if (target.nodeName !== 'IMG') return;
	img.setAttribute('src', change);

	const li = target.parentNode;
	li.classList.add('push');
};
