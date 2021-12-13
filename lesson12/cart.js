'use strict';

const cart = {
  items: [],
  discount: 0,
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
    let total = 0;
    this.items.forEach(item => {
      sum += item.itemPrice * item.itemsCount;
      total = sum - (sum * (this.discount / 100));
    });
    return total;
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
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount += 15;
    } else if (promocode === 'NEWYEAR') {
      this.discount += 21;
    }
  },
};

const add = cart.add.bind(cart);
const print = cart.print.bind(cart);

let goods = +prompt('Сколько товаров хотите добавить в корзину? ');
cart.setDiscount = prompt('Введите промокод');
while (goods > 0) {
  const itemName = prompt('Название товара');
  const itemPrice = +prompt('Цена товара');
  const itemcount = +prompt('Количество товара');
  goods--;

  add(itemName, itemPrice, itemcount);
}

print();
