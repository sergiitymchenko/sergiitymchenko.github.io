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

	this.removeUserById = userId => {
		const remove = this.users.filter( user => user.id !== userId );
		this.users = remove;
		return remove;
	};

	this.getUsersCount = () => this.users.length;

	this.getUserPosts = userId => this.posts[userId];

	this.addPost = (userId, post) => {
		this.posts[userId].push(post);
		return this.posts[userId];
	};

	this.removePost = (userId, postId) => {
		const remove = this.posts[userId].filter( user => user.id !== postId );
		this.posts[userId] = remove;
		return remove;
	};

	this.getAllLike = userId => this.posts[userId].reduce( (acc, val) => acc + val.likes,0 );

	this.addPostLike = (userId, postId) => {
		const post = this.posts[userId].map(post => post.id === postId ? {...post,likes:post.likes+1} : post);
		this.posts[userId] = [...post];
		return this.posts[userId].find(post => post.id === postId).likes;
	};

	this.getPostsCount = userId => this.posts[userId].length;
};

const nextPost = {
	id: getId(),
	text: 'post#3',
	likes: 12
};

const social = new SocialBook(initialUsers, initialPosts);

console.log(
	'Повертає масив всіх користувачів: ',
	 social.getAllUsers()
	);
console.log(
	'Шукає та повертає обєкт користувача з співпадаючим логіном:',
	 social.getUserByLogin("mangozedog@mail.com")
	);
console.log(
	'Шукає користувача по id та повертає поле isActive:',
	 social.isUserActive("-e51cpd4di")
	);
console.log(
	'Повертає масив тих користувачів значеня поля isActive true:',
	 social.getActiveUsers()
	);
console.log(
	'Обновляє обєкт користувача з id рівним userId:',
	 social.updateUserById()
	);
console.log(
	'Приймає обєкт  user з полями email та isActive і добавляє користувача в users:',
	 social.addUser({
		login: "tymchenko@gmail.com",
		pasword: "123qweqwe"
	}));
console.log(
	'Видаляє користувача з users по полю id:',
	 social.removeUserById("-s19a6hqce")
	);

console.log(
	'Повертає загальну кількість користувачів:',
	 social.getUsersCount("-e51cpd4di")
	);
console.log(
	'Повертає масив постів користувача:',
	 social.getUserPosts("-s19a6hqce")
	);
console.log(
	'Добавляє post в поле posts обєкта socialbook по ключу userId:',
	 social.addPost("-qkpzenjxe", nextPost)
	);
console.log(
	'Видаляє post з id рівним postId з поля posts обєкта socialbook по ключу userId:',
	 social.removePost("-e51cpd4di", "-9y6nkmlj4")
	);
console.log(
	'Повертає суму всіх полів likes:',
	 social.getAllLike("-s19a6hqce")
	);
console.log(
	'Збільшує значення поля likes на 1 в поста з id рівним postId, для користувача з id рівним userId:',
	 social.addPostLike("-qkpzenjxe","-5tu69g5rf")
	);
console.log(
	'Збільшує значення поля likes на 1 в поста з id рівним postId, для користувача з id рівним userId:',
	 social.addPostLike("-qkpzenjxe","-5tu69g5rf")
	);
console.log(
	'Повертає загальну кількість постів користувача:',
	 social.getPostsCount("-e51cpd4di", "-9y6nkmlj4")
	);








