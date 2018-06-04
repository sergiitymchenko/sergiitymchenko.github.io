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

function Cashier(name, products) {
	this.name = name;
	this.products = products;
	this.totalPrice = 0;
	this.customerMoney = 0;
	this.changeAmount = 0;

	this.countTotalPrice = function (order) {
		for (let key in order) {
			const hasKey = order.hasOwnProperty(key);
			if (hasKey) {
				this.totalPrice += order[key];
			}
		}
		return this.totalPrice;
	};

	this.getCustomerMoney = function (userInput, numberInput) {
		while(userInput !== null) {
			userInput = prompt(`Вам потрібно заплатити: ${this.totalPrice}`);
			numberInput = Number(userInput);
			if (numberInput >= this.totalPrice) {
				numberInput = this.customerMoney;
				return this.customerMoney;
			}
		}
		return null;
	};

	this.countChange = function () {
		
	};

	this.reset = function () {
		this.totalPrice = 0;
		this.customerMoney = 0;
		this.changeAmount = 0;
	};

	this.serve = function (order) {
		this.getCustomerMoney();
		this.countTotalPrice();

	};
};
const poly = new Cashier('Poly', products);

const order = {
	chicken: 50,
	pork: 80,
	cheese: 60,
	tea: 20,
	candy: 25	
};

poly.serve(order);