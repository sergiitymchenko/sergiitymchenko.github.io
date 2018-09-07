// import axios from 'axios';

const API_KEY = '10028125-456573698e9fa0a4b5246cd84';

export const fetchImages = (query, count) => {

	const url = `https://pixabay.com/api/?image_type=photo&q=${query}&per_page=${count}&key=${API_KEY}`;

	return fetch(url)
	.then(response => {
		if (response.ok) return response.json();
		throw new Error('error: ' + response.statusText);
	})
	.then(data => data.hits)
	.catch(error => console.log(error))
};

// export const fetchImages = ({query, count}) => {
// 	const url = `https://pixabay.com/api/?image_type=photo&q=${query}&per_page=${count}&key=${API_KEY}`;

// 	return axios
// 	.get(url)
// 	.then(data => data.hits)
// 	.catch(error => console.log('axios error: ', + error))
// };


