'use strict';

{
  const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];

  const getAveragePriceGoods = (arr) => {
    let totalPrice = 0,
        averagePrice = 0,
        countOfGoods = 0;

    for ( const [quantity, price] of arr ) {
      totalPrice += quantity * price;
      countOfGoods += quantity;
    }

    averagePrice = totalPrice / countOfGoods;

    return averagePrice;
  }

  console.log(getAveragePriceGoods(allСashbox));
}