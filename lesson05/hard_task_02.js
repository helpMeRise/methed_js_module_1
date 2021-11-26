'use strict';

{
  const minOfNumbers = (...arg) => {
    const minNumber = Math.min(...arg);
    return minNumber;
  }
  
  console.log(minOfNumbers(10, -1, 0, 3, 123, 432));
}