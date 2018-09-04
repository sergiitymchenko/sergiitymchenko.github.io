export const setUrl = value => {
	localStorage.setItem('name-address', JSON.stringify(value));
};

export const getUrl = () => {
	const data = localStorage.getItem('name-address');

	return data ? JSON.parse(data) : null;
};

export const removeUrl = () => {
	localStorage.removeItem('name-address');
};