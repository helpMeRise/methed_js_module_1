'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = lang => {
    const botFigureNumber = getRandomIntInclusive(1, 3);
    let botFigure;

    if (lang === 'EN' || lang === 'ENG') {
      return botFigure = FIGURES_ENG[botFigureNumber - 1];
    } else {
      return botFigure = FIGURES_RUS[botFigureNumber - 1];
    }
  };

  const game = (language) => {
    if (language === 'ENG' || language === 'EN') {
      let playerChoice = prompt('rock, scissors, paper?');
      if (playerChoice === null) {
        const playerCancel = confirm('Do you realy want to exit?');
        if (playerCancel) {
          return;
        } else {
          game(language);
        }
      } else if (playerChoice[0] === 'r') {
        playerChoice = 'rock';
      } else if (playerChoice[0] === 'p') {
        playerChoice = 'paper';
      } else if (playerChoice[0] === 's') {
        playerChoice = 'scissors';
      } else {
        game(language);
      }

      const gameResult = () => {
        const botFigure = getFigure(language);
        let playerWins = 0;
        let botWins = 0;
        let result = '';

        if (botFigure === playerChoice) {
          result = 'Drow';
        } else if ((botFigure === 'rock' && playerChoice === 'paper') ||
          (botFigure === 'scissors' && playerChoice === 'rock') ||
          (botFigure === 'paper' && playerChoice === 'scissors')) {
          result = 'Player wins';
          playerWins++;
        } else {
          result = 'Computer wins';
          botWins++;
        }

        alert(`Computer figure: ${botFigure}
              Player figure: ${playerChoice}
              Result: ${result}`);
        const oneMore = confirm('Wanna play again? ');
        if (oneMore) {
          game(language);
        } else {
          alert(`
          Computer scores: ${botWins}
          Player scores: ${playerWins}`);
          return;
        }
      };
      gameResult();
    } else {
      let playerChoice = prompt('камень, ножницы, бумага?');
      if (playerChoice === null) {
        const playerCancel = confirm('Действительно хотите выйти??');
        if (playerCancel) {
          return;
        } else {
          game(language);
        }
      } else if (playerChoice[0] === 'к') {
        playerChoice = 'камень';
      } else if (playerChoice[0] === 'б') {
        playerChoice = 'бумага';
      } else if (playerChoice[0] === 'н') {
        playerChoice = 'ножницы';
      } else {
        game(language);
      }

      const gameResult = () => {
        const botFigure = getFigure(language);
        let playerWins = 0;
        let botWins = 0;
        let result = '';
        if (botFigure === playerChoice) {
          result = 'Ничья';
        } else if ((botFigure === 'камень' && playerChoice === 'бумага') ||
          (botFigure === 'ножницы' && playerChoice === 'камень') ||
          (botFigure === 'бумага' && playerChoice === 'ножницы')) {
          result = 'Игрок победил';
          playerWins++;
        } else {
          result = 'Компьютер победил';
          botWins++;
        }

        alert(`Выбор компьютера: ${botFigure}
              Выбор игрока: ${playerChoice}
              Результат: ${result}`);
        const oneMore = confirm('Хотите сыграть еще? ');
        if (oneMore) {
          game(language);
        } else {
          alert(`
          Очки компьютера: ${botWins}
          Очки игрока: ${playerWins}`);
          return;
        }
      };
      gameResult();
    }
  };
  window.RPS = game;
})();


