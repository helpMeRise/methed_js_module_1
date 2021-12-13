'use strict';

{
  const botNumber = Math.round(Math.random() * 100);
  let playerNumber = prompt('Угадай число');

  const game = (number) => {
    console.log(botNumber);
    console.log(number);
    if (+number !== botNumber) {
      if (isNaN(number)) {
        alert('Вы ввели не число!');
        playerNumber = prompt('Угадай число');
        return game(playerNumber);
      }
      if (number > botNumber) {
        alert('Меньше');
      } else if (number < botNumber) {
        alert('Больше!');
      }
      playerNumber = prompt('Угадай число');
      return game(playerNumber);
    } else {
      return alert('Правильно');
    }
  };

  game(playerNumber);
}
