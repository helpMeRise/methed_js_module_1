'use strict';

{
  const text = prompt('Введите строку');

  const reverseString = text => {
    let newText = '';

    for ( let i = text.length - 1; i >= 0; i-- ) {
      newText += text[i];
    }

    return newText;
  }

  console.log(reverseString(text));
}