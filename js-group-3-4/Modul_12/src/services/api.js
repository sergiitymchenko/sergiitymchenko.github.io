// import axios from 'axios';

const API_KEY = '5b8e43105ece6fba951fde2b9ba4ab490dfde8c487f55';

// export const fetchCard = (input) => {
// 	const url = `http://api.linkpreview.net/?key=${API_KEY}&q=${input}`;

// 	return axios
// 		.get(url)
// 		.then(res => res.data)
// 		.catch(error => console.log('axios err: ', error))
// };


const fetchCard= (input) => {

	const url = `http://api.linkpreview.net/?key=${API_KEY}&q=${input}`;

	return fetch(url)
	.then(response => {
		if (response.ok) return response.json();
		throw new Error('error: ' + response.statusText);
	})
	.then(data => data.hits)
	.catch(error => console.log(error))
};