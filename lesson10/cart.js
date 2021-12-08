'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  add(itemName, itemPrice, itemsCount = 1) {
    this.items.push({itemName, itemPrice, itemsCount});
    this.increaeCount(itemsCount);
  },
  increaeCount(number) {
    this.count += number;
  },
  calculateItemPrice() {
    let sum = 0;
    this.items.forEach( item => {
      sum += item.itemPrice * item.itemsCount;
    } );
    return sum;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

let goods = +prompt('Сколько товаров хотите добавить в корзину? ')

while (goods > 0) {
  let itemName = prompt('Название товара'),
      itemPrice = +prompt('Цена товара'),
      itemcount = +prompt('Количество товара');
  goods--;

  cart.add(itemName, itemPrice, itemcount);
}

cart.print();