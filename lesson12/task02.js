'use strict';

const arr = [];

const arrSum = arr => {
  const newNumber = Math.round(Math.random() * 10);
  arr.push(newNumber);
  const sum = arr.reduce((sum, item) => sum + item, 0);
  if (sum < 50) {
    return arrSum(arr);
  } else {
    return arr;
  }
};

console.log(arrSum(arr));
