'use strict';

{
  const maxOfNumbers = (...arg) => {
    const maxNumber = Math.max(...arg);
    return maxNumber;
  }
  
  console.log(maxOfNumbers(10, -1, 0, 3, 123, 432));
}