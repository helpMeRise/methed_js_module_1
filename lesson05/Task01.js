'use strict';

{
  const price = +prompt('Введите цену')

  const convert = price => {
    let dollarPrice = price * 1.2;
    let rublesPrice = price * 73;
  
    return `Цена в долларах ${dollarPrice}, цена в рублях ${rublesPrice}`
  }
  
  console.log(convert(price));
}