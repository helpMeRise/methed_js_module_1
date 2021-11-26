'use strict';

{
  const price = +prompt('Общая сумма корзины');
  const itemQuantity = +prompt('Количество товаров');
  const promo = prompt('Промокод');

  const calculate = (price, itemQuantity, promo) => {
    let totalPrice = price;

    if (itemQuantity > 10) {
      totalPrice -= totalPrice * 0.03;
    }

    if (price > 30000) {
      totalPrice -= (price - 30000) * 0.15;
    }

    if (promo === 'METHED') {
      totalPrice -= price * 0.1;
    }

    if (promo === 'G3H21' && totalPrice > 2000) {
      totalPrice -= 500;
    }

    return totalPrice;
  }

  console.log(calculate(price, itemQuantity, promo));
}