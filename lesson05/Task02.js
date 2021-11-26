'use strict';

{
  const str = prompt('Введите текст');

  const stringModification = str => {
    let newSring = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
    return newSring;
  }

  console.log(stringModification(str));
}