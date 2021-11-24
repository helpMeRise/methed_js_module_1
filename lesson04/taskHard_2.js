'use strict';

{
  const money = +prompt('Ваш доход');
  let tax;

  if (money < 15000) {
    tax = money * 0.13;
  } else if (money < 50000) {
    tax = ((money - 15000) * 0.2) + 15000 * 0.13;
  } else {
    tax = ((money - 50000) * 0.3) + ((money - 15000) * 0.2) + 15000 * 0.13;
  }

  console.log(tax);
}