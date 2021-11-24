'use strict';

{
  const money = +prompt('Ваш доход');
  let tax;

  if (money < 15000) {
    tax = money * 0.13;
  } else if (money < 50000) {
    tax = money * 0.2;
  } else {
    tax = money * 0.3;
  }

  console.log(tax);
}