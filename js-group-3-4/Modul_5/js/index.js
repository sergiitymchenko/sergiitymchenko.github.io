'use strict';

/*Масив користувачів*/
const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

/*обєкт постів*/
const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ],
};
const getId = () => "-" + Math.random().toString(36).substr(2, 9);
const user = { id: getId(), name: 'Mango' };


function SocialBook ( users = [], posts = {} ) {
	this.users = users;
	this.posts = posts;

	this.getAllUsers = () => this.users;

	this.getUserByLogin = login => this.users.find( user => user.login === login );

	this.isUserActive = userId => this.users.find( user => user.id === userId ).isActive;

	this.getActiveUsers = () => this.users.filter( user => user.isActive );

	this.updateUserById = (userId, obj) => this.users.map( user => user.id === userId ? obj : user );

	this.addUser = user => {
		user.id = getId();
		user.isActive = false;
		return this.users.push(user);
	};

	this.removeUserById = userId => this.users.filter( user => user.id !== userId );

	this.getUsersCount = () => this.users.length;

	this.getUserPosts = userId => this.posts[userId];

	// this.addPost = (userId, post) => ;

	// this.removePost = (userId, postId) =>;

	// this.getAllLike = (userId) => ;

	// this.addPostLike = (userId, postId) =>;

	// this.getPostsCount = (userId) => ;
};
const social = new SocialBook(initialUsers, initialPosts);
console.log(
	'Повертає масив всіх користувачів: ', social.getAllUsers()
	);
console.log(
	'Шукає та повертає обєкт користувача з співпадаючим логіном:', social.getUserByLogin("mangozedog@mail.com")
	);
console.log(
	'Шукає користувача по id та повертає поле isActive:', social.isUserActive("-e51cpd4di")
	);
console.log(
	'Повертає масив тих користувачів значеня поля isActive true:', social.getActiveUsers()
	);
console.log(
	'Обновляє обєкт користувача з id рівним userId:', social.updateUserById()
	);
console.log(
	'Приймає обєкт  user з полями email та isActive і добавляє користувача в users:', social.addUser({
		login: "tymchenko@gmail.com",
		pasword: "123qweqwe"
	}));
console.log(
	'Видаляє користувача з users по полю id:', social.removeUserById("-s19a6hqce")
	);

console.log(
	'Повертає загальну кількість користувачів:', social.getUsersCount("-e51cpd4di")
	);
console.log(
	social.getUserPosts("-s19a6hqce")
	);








