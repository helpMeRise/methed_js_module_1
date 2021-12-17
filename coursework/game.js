'use strict';

(() => {
  // const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = lang => {
    const botFigureNumber = getRandomIntInclusive(1, 3);
    let botFigure;
    return botFigure = FIGURES_RUS[botFigureNumber - 1];
  };

  const game = () => {
    let playerChoice = prompt('камень, ножницы, бумага?');
    if (playerChoice === null) {
      return alert('Первым будет ходить бот');
    } else if (playerChoice[0] === 'к') {
      playerChoice = 'камень';
    } else if (playerChoice[0] === 'б') {
      playerChoice = 'бумага';
    } else if (playerChoice[0] === 'н') {
      playerChoice = 'ножницы';
    } else {
      return game();
    }

    const gameResult = () => {
      const botFigure = getFigure();
      let rpsWinner;
      if (botFigure === playerChoice) {
        alert(`Ничья`);
        game();
      } else if ((botFigure === 'камень' && playerChoice === 'бумага') ||
        (botFigure === 'ножницы' && playerChoice === 'камень') ||
        (botFigure === 'бумага' && playerChoice === 'ножницы')) {
        alert('Игрок победил');
        return rpsWinner = 'player';
      } else {
        alert('Компьютер победил');
        return rpsWinner = 'bot';
      }
    };
    return gameResult();
  };
  window.RPS = game;
})();

(() => {
  let playerBalls = 5;
  let botBalls = 5;

  // функция получения рандомного числа от min до max
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // функция генерации ответа бота(1 или 2)
  const botAnswer = () => {
    const botAnswer = getRandomIntInclusive(1, 2);
    return botAnswer;
  };

  // функция для определения четности числа
  const evenOrOdd = (number) => {
    if (!(number % 2)) {
      return 'even';
    } else {
      return 'odd';
    }
  };

  // основная функция игры. На вход получаем параметр победителя в предыдущей
  // игре, для определения очередности ходов
  const turn = (rpsWinner) => {
    // функция запроса на новую игру
    const newGame = () => {
      const again = confirm('Сыграем еще разок? ');
      if (again) {
        playerBalls = 5;
        botBalls = 5;
        turn(window.RPS());
      } else {
        return;
      }
    };

    if (rpsWinner === 'player') {
      alert('Ход игрока');
      const playerBet = prompt('Сколько шариков загадываете? ');
      // определеляем четность числа загаданного игроком
      const playerChoice = evenOrOdd(playerBet);
      // определеляем четность числа загаданного ботом
      const botChoice = evenOrOdd(botAnswer());
      // сравниваем выбор игрока и бота. Если они равны, то отнимает у игрока
      // кол-во шаров которое он загадал и прибавляем боту, а если нет то
      // наоборот. При нажатии на отмену игра заканчивается
      if (playerBet === null) {
        return alert('Пока пока');
      } else if (isNaN(playerBet)) {
        alert('Вы ввели не число');
        return turn('player');
      } else if (playerChoice === botChoice) {
        playerBalls -= +playerBet;
        botBalls += +playerBet;
        alert(`Бот выбрал ${botChoice}
                bot: ${botBalls}
                player: ${playerBalls}`);
      } else {
        playerBalls += +playerBet;
        botBalls -= +playerBet;
        alert(`Бот выбрал ${botChoice}
                bot: ${botBalls}
                player: ${playerBalls}`);
      }
      // если в результате у кого-то становится ноль или меньше,
      // то игра заканчивается
      if (botBalls <= 0) {
        return alert('Игра окончена. Бот проиграл все шарики');
      } else if (playerBalls <= 0) {
        return alert('Игра окончена. Игрок проиграл все шарики');
      } else {
        return turn('bot');
      }
    // повторяем весь код игры, для хода бота
    } else {
      alert('Ход бота');
      const botBet = getRandomIntInclusive(1, botBalls);
      const botChoice = evenOrOdd(botBet);
      const playerAnswer = prompt('Введите even или odd(Четное/нечетное)');
      if (playerAnswer === null) {
        return alert('Пока пока');
      } else if (playerAnswer === botChoice) {
        playerBalls += botBet;
        botBalls -= botBet;
        alert(`Бот загадал ${botBet}
                bot: ${botBalls}
                player: ${playerBalls}`);
      } else {
        playerBalls -= botBet;
        botBalls += botBet;
        alert(`Бот загадал ${botBet}
                bot: ${botBalls}
                player: ${playerBalls}`);
      }
      if (botBalls <= 0) {
        alert('Игра окончена. Бот проиграл все шарики');
        return newGame();
      } else if (playerBalls <= 0) {
        alert('Игра окончена. Игрок проиграл все шарики');
        return newGame();
      } else {
        return turn('player');
      }
    }
  };

  window.MARBLES = turn;
})();


