export const setGrid = value => {
	localStorage.setItem( 'image-finder', JSON.stringify(value));
};

export const getGrid = () => {
	const data = localStorage.getItem('image-finder');

	return data ? JSON.parse(data) : null;
};

export const setSelected = value => {
	localStorage.setItem('image-selected', JSON.stringify(value));
};

export const getSelected = () => {
	const data = localStorage.getItem('image-selected');

	return data ? JSON.parse(data) : null;
};