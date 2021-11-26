'use strict';

{
  const str = prompt('Введите текст');

  const reverseString = str => {
    const newSring = [...str].reverse().join('');
    return newSring;
  }

  console.log(reverseString(str));
}