'use strict';
const products = {
	bread: 10,
	milk: 15,
	apples: 20,
	chicken: 50,
	pork: 80,
	cheese: 60,
	tea: 20,
	candy: 25
};

const order = {
	chicken: 5,
	pork: 8,
	cheese: 6,
	tea: 2,
	candy: 2	
};

function Cashier(name, products) {
	this.name = name;
	this.products = products;
	this.totalPrice = 0;
	this.customerMoney = 0;
	this.changeAmount = 0;

	this.countTotalPrice = function(order) {
		const productsList = Object.keys(this.products);
		const ordersList = Object.keys(order);
		for (const product of ordersList) {
			if (!productsList.includes(product)) {
				alert(`Товара с именем ${product} нет`);
				return null;
			} else {
				this.totalPrice += order[product] * products[product];
			}
		}
	};	

	this.getCustomerMoney = function () {
		while(true) {
			this.customerMoney = prompt(`Сумма покупок ${this.totalPrice}`);

			if (this.customerMoney === null) {
				return null;
			}

			if (this.customerMoney === '') {
				alert(`Ви нічого не ввели`);
			}

			if ( Number.isNaN(Number(this.customerMoney)) ) {
				alert(`Ви ввели не число`);
			}

			if (Number(this.customerMoney) < this.totalPrice) {
				alert(`Ви ввели меньшу сумму`);
			}

			if (Number(this.customerMoney) >= this.totalPrice) {
				this.customerMoney = Number(this.customerMoney);
				return;
			}

			if (Number(this.customerMoney) === this.totalPrice) {
				return;
			}
		};
};

	this.countChange = function () {
		this.changeAmount = Number(this.customerMoney) - this.totalPrice;
	};

	this.reset = function () {
		this.totalPrice = 0;
		this.customerMoney = 0;
		this.changeAmount = 0;
	};

	this.serve = function (order) {
		this.countTotalPrice(order);
		this.getCustomerMoney();

		if (this.customerMoney === null ) {
			alert(`Щось пішло не так, приходьте ще`);
			return;
		}

		this.countChange();
		alert(`Дякуємо за покупку, приходьте ще. Ваша решта ${this.changeAmount}`);
		this.reset();
	};
};

const poly = new Cashier('Poly', products);

poly.serve(order);
