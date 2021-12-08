

'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(itemName, itemPrice, itemsCount = 1) {
    this.items.push({itemName, itemPrice, itemsCount});
    this.increaeCount(itemsCount);
    this.totalPrice = 0;
    this.calculateItemPrice();
  },
  increaeCount(number) {
    this.count += number
  },
  calculateItemPrice() {
    this.items.forEach( item => {
      this.totalPrice += item.itemPrice * item.itemsCount;
    } );
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