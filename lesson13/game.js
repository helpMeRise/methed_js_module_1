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

    if (lang === 'EN' && 'ENG') {
      return botFigure = FIGURES_ENG[botFigureNumber];
    } else {
      return botFigure = FIGURES_RUS[botFigureNumber];
    }
  };

  const game = (language) => {
    if (language === 'ENG' && language === 'EN') {
      let playerChoice = prompt('rock, scissors, paper?');

      if (playerChoice === null) {
        const playerCancel = confirm('Do you realy want to exit?');
        if (playerCancel) {
          return;
        } else {
          game(language);
        }

        if (playerChoice[0] === 'r') {
          playerChoice = 'rock';
        } else if (playerChoice[0] === 'p') {
          playerChoice = 'paper';
        } else if (playerChoice[0] === 's') {
          playerChoice = 'scissors';
        } else {
          playerChoice = prompt('rock, scissors, paper?');
        }

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
          result = 'Player wins';
          botWins++;
        }

        alert(`Computer figure: ${botFigure}
              Player figure: ${playerChoice}
              Result: ${result}
              Computer scores: ${botWins}
              Player scores: ${playerWins}`);
        const oneMore = confirm('Wanna play again? ');
        if (oneMore) {
          game(language);
        } else {
          return;
        }
      }
    } else {
      console.log('Значит русский');
      console.log(language);
    }
  };

  window.RPS = game;
})();


