'use strict';
const getForm = document.querySelector('.js-get-form');
const getTable = document.querySelector('.js-get-table');
const getIdForm = document.querySelector('.js-get-id');
const getIdResult = document.querySelector('.js-get-result');
const getInput = document.querySelector('.get-input');
const postForm = document.querySelector('.js-post-id');
const nameInput = document.querySelector('.name-input');
const ageInput = document.querySelector('.age-input');
const delForm = document.querySelector('.js-del-id');
const delInput = document.querySelector('.del-input');
const putForm = document.querySelector('.js-put-id');
const newNameInput = document.querySelector('.new-name-input');
const newAgeInput = document.querySelector('.new-age-input');
const idInput = document.querySelector('.id-input');

const apiUrl = 'https://test-users-api.herokuapp.com/users/';

/*======================method GET all users=====================================*/
const getAllUsers = () => {
	return fetch(apiUrl, {
		method: 'GET',
	})
	.then(response => {
		if (response.ok) return response.json();
		throw  new Error('Error', + response.statusText);
	})
	.then(data => data.data)
	.catch(error => console.log(error))
};

const createUsers = items => 
	items.reduce(
		(markup, item) => 
		markup +
		`<tr>
			<td class="td">${item.id}</td>
			<td class="th">${item.name}</td>
			<td class="th">${item.age}</td>
		</tr>`,
		'');

const updetResult = objectUsers => {
	const marcup = createUsers(objectUsers);
	getTable.innerHTML += marcup;
};

const outText = e => {
	e.preventDefault();
	getAllUsers().then(updetResult);
};

getForm.addEventListener('submit', outText);
/*==================end method GET all users===================*/

/*==================method GET id user=========================*/
const getUserById = id => {
	return fetch(`${apiUrl}${id}`, {
		method: 'GET',
	})
	.then(response => {
		if (response.ok) return response.json();
		throw new Error('Error', + response.statusText);
	})
	.then(users => users.data)
	.catch(error => console.log(error))
};

const outId = item => {
	const userId = JSON.stringify(item);
	getIdResult.innerHTML += `<p>${userId}</p>`;
}

const handleSubmit = e => {
	e.preventDefault();
	getUserById(getInput.value).then(outId);
	e.target.reset();
}

getIdForm.addEventListener('submit', handleSubmit);
/*================end method GET id user=========================*/

/*================method POST====================================*/
const addUsers = (name, age) => {
	return fetch(apiUrl, {
		method: 'POST',
		body: JSON.stringify({
			name: nameInput.value,
			age: ageInput.value
		}),
		headers: {
			'Content-type' : 'application/json; charset=UTF-8',
		},
	})
	.then(response => {
		if (response.ok) return response.json();
		throw new Error('Error', + response.statusText);
	})
	.then(users => users)
	.catch(error => console.log(error))
};

const updateTableUsers = item => {
	// console.log(item);
	const newRowTable = `
	<tr>
		<td class="td">${item.data._id}</td>
		<td class="th">${item.data.name}</td>
		<td class="th">${item.data.age}</td>
	</tr>
	`;
	getTable.innerHTML += newRowTable;
	alert(`Користувач ${item.data.name} add`)
}

const handleAddSubmit = e => {
	e.preventDefault();
	addUsers().then(updateTableUsers);
	e.target.reset();
}

postForm.addEventListener('submit', handleAddSubmit);
/*=======================end method POST===================*/

/*=======================method DELETE======================*/
const removeUser = id => {
	return fetch(`${apiUrl}${id}`, {
		method: 'DELETE'
	})
	.then(response => {
		if (response.ok) return response.json();
		throw new Error('Error', + response.statusText);
	})
	.then(() => console.log('succes'))
	.catch(error => console.log(error))
};
const deleteRowTable = item => {
	alert('succes');
};

const handleDeleteSubmit = e => {
	e.preventDefault();
	removeUser(delInput.value).then(deleteRowTable);
	e.target.reset();
};

delForm.addEventListener('submit', handleDeleteSubmit);
/*=======================end method DELETE======================*/

/*=======================method PUT=============================*/
const updateUser = id => {
	return fetch(`${apiUrl}${id}`, {
		method: 'PUT',
		body: JSON.stringify({ 
			name: newNameInput.value,
			age: newAgeInput.value
		}),
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}
	})
	.then(response => {
		if (response.ok) return response.json();
		throw new Error('Error' + response.statusText);
	})
	.then(data => data)
	.catch(error => console.log(error))
};

const alertUser = data => {
	const user = data.data;
	const outUser = JSON.stringify(user);
	console.log(user);
	alert(`Дані користувача ${user.name} змінено ${outUser}`);
}

const handleUpdateSubmite = e => {
	e.preventDefault();
	updateUser(idInput.value).then(alertUser);
	e.target.reset();
};

putForm.addEventListener('submit', handleUpdateSubmite);
/*=======================end method PUT=========================*/


