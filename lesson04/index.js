'use strict';

// {
//   const itemName = 'Булка';
//   const itemQuantity = 10;
//   const itemCategoty = 'Еда';
//   const itemPrise = 50;

//   console.log('itemName: ', itemName);
//   console.log(itemPrise * itemQuantity);
// }

// {
//   const itemName = 'Тортик';
//   const itemQuantity = 3;
//   const itemCategoty = 'Еда';
//   const itemPrise = 250;

//   console.log('itemName: ', itemName);
//   console.log(itemPrise * itemQuantity);
// }

{
  const itemName = prompt('Наименование товара');
  const itemQuantity = prompt('Количество товара');
  const itemCategoty = prompt('Категория товара');
  const itemPrice = prompt('Цена товара');

  if (isNaN(itemQuantity) || isNaN(itemPrice)) {
    console.log('Вы ввели некорректные данные')
  } else {
    
    console.log(`На складе ${itemQuantity} единицы товара "${itemName}" на сумму ${itemQuantity * itemPrice} деревянных`)
  }
}