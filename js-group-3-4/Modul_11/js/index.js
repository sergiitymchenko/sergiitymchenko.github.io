'use strict';
const laptops = [
  {
  	size: 13,
  	color: 'white',
  	price: 28000,
  	release_date: 2015,
  	name: 'Macbook Air White 13"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 13,
  	color: 'gray',
  	price: 32000,
  	release_date: 2016,
  	name: 'Macbook Air Gray 13"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 13,
  	color: 'black',
  	price: 35000,
  	release_date: 2017,
  	name: 'Macbook Air Black 13"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 15,
  	color: 'white',
  	price: 45000,
  	release_date: 2015,
  	name: 'Macbook Air White 15"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 15,
  	color: 'gray',
  	price: 55000,
  	release_date: 2016,
  	name: 'Macbook Pro Gray 15"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 15,
  	color: 'black',
  	price: 45000,
  	release_date: 2017,
  	name: 'Macbook Pro Black 15"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 17,
  	color: 'white',
  	price: 65000,
  	release_date: 2015,
  	name: 'Macbook Air White 17"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 17,
  	color: 'gray',
  	price: 75000,
  	release_date: 2016,
  	name: 'Macbook Pro Gray 17"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
  	size: 17,
  	color: 'black',
  	price: 80000,
  	release_date: 2017,
  	name: 'Macbook Pro Black 17"',
  	img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
  	descr:
  	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const form = document.querySelector('.js-form');
const containerCards = document.querySelector('.container-cards');

const laptopsCard = document.querySelector('#laptops-card').innerHTML.trim();
const template = Handlebars.compile(laptopsCard);

let filter = { 
  size: [],
  color: [],
  release_date: [],
};

form.addEventListener('submit', handleForSubmit);
form.addEventListener('reset', handleForReset);

function newLaptopsArray(arr, value) {
  return arr.length === 0 || arr.includes(value);
}

function handleForSubmit(e) {
  e.preventDefault();

  const checkedInputAll = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));

  filter = checkedInputAll.reduce(
    (acc, checkbox) => {
      acc[checkbox.name].push(checkbox.value);
      return acc;
    },
    { 
      size: [],
      color: [],
      release_date: [],
    }
    );
  const filterLaptops = laptops.filter(laptop => {
    const filterSize = newLaptopsArray(filter.size, String(laptop.size));
    const filterColor = newLaptopsArray(filter.color, String(laptop.color));
    const filterRelease = newLaptopsArray(filter.release_date, String(laptop.release_date));
    return filterSize && filterColor && filterRelease; 
  });

  const markup = template({laptops: filterLaptops});

  // containerCards.insertAdjacentHTML('afterbegin', markup);
  containerCards.innerHTML = markup;

  form.reset();
}

function handleForReset() {
  clearFilter();
  form.reset();
}

function clearFilter() {
  filter.size = [],
  filter.color = [],
  filter.release_date = []
}

