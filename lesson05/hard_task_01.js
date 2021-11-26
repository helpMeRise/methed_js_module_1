'use strict';

{
  const firstNumber = prompt('Первое число');
  const secondNumber = prompt('Второе число');

  const greatestCommonDivisor = (firstNumber, secondNumber) => {
    if (!secondNumber) {      
      return firstNumber; 
    } else {
      return greatestCommonDivisor(secondNumber, firstNumber % secondNumber);  
    }
  }
  
  console.log(greatestCommonDivisor(firstNumber, secondNumber));
  
}