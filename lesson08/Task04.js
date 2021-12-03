'use strict';

{
  const firstNumber = +prompt('Первое число'),
        secondNumber = +prompt('Второе число');

  const leapYear = (a, b) => {
    let startYear,
        endYear;

    if ( a > b ) {
      startYear = b;
      endYear = a;
    } else {
      startYear = a;
      endYear = b; 
    }

    function* generator(start, end) {
      for ( let i = start; i <= end; i++ ) {
        yield i;
      }
    }
  
    let [...newArray] = generator(startYear, endYear);

    newArray = newArray.filter( item => (!(item % 400) || !!(item % 100)) && !(item % 4));

    newArray.sort(function(start, end){
      return start - end;
    });

    return newArray;
  }

  console.log(leapYear(firstNumber, secondNumber));
}