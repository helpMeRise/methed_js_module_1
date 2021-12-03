'use strict';

{
  const quantity = +prompt('Количество элементов массива'),
        n = +prompt('Первое число для формирования диапазона'),
        m = +prompt('Второе число для формирования диапазона')

  const massiveGenerator = (number, n, m) => {
    const min = Math.ceil(n),
          max = Math.floor(m);

    function* generator(number) {
      for ( let i = 0; i < number; i++ ) {
        yield Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  
    let [...newArray] = generator(number);

    newArray.sort(function(a, b){
      return a - b;
    });

    return newArray;
  }

  console.log(massiveGenerator(quantity, n, m));
}