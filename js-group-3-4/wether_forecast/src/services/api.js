import axios from 'axios';

const API_KEY = 'a9953e14ccff4a59a25170523180509';

export const fetchForecast = (input) => {
	const url = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${input}&days=7&lang=uk`;

	return axios
		.get(url)
		.then(res => res.data)
		.catch(error => console.log(error))
};



// export const fetchForecast = (input) => {
// 	const url = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${input}&days=7&lang=uk`;

// 	return fetch(url)
// 	.then(response => {
// 		if (response.ok) return response.json();
// 		throw new Error('error: '+ response.statusText);
// 	})
// 	.then(data => data)
// 	.catch(error => console.log(error))
// }