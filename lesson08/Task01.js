'use strict';

{
  const quantity = +prompt('Количество элементов массива')

  const massiveGenerator = number => {
    function* generator(number) {
      for ( let i = 0; i < number; i++ ) {
        yield Math.ceil(Math.random() * 100);
      }
    }
  
    let [...newArray] = generator(number);
    return newArray;
  }

  console.log(massiveGenerator(quantity));
}