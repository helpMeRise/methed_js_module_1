'use strict';

{
  const quantity = +prompt('Количество элементов массива'),
        n = +prompt('Первое число для формирования диапазона'),
        m = +prompt('Второе число для формирования диапазона'),
        str = prompt('even или odd');

  const massiveGenerator = (number, n, m, str) => {
    const min = Math.ceil(n),
          max = Math.floor(m);

    function* generator(number) {
      for ( let i = 0; i < number; i++ ) {
        yield Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  
    let [...newArray] = generator(number);

    if ( str === 'even' ) {
      newArray = newArray.filter( item => !(item % 2));
    } else if ( str === 'odd' ) {
      newArray = newArray.filter( item => !!(item % 2));
    }

    newArray.sort(function(a, b){
      return a - b;
    });

    return newArray;
  }

  console.log(massiveGenerator(quantity, n, m, str));
}