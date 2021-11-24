'use strict';

{
  const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!')
} else {
  console.log('Дождя нет!');
}
}

{
  let totalGrade;

  const mathGrade = +prompt('Введите кол-во баллов по математике:');
  const rusGrade = +prompt('Введите кол-во баллов по русскому языку:');
  const infGrade = +prompt('Введите кол-во баллов по информатике:');

  if (isNaN(mathGrade) || isNaN(rusGrade) || isNaN(infGrade)) {
    console.log('Нужно вводить числа');
  } else {
    totalGrade = mathGrade + rusGrade + infGrade;

    const result = totalGrade >= 265 ? 'Поздравляю, вы поступили на бюджет!' : 'Придется платить'
    console.log(result);
  }

}

{
  const money = +prompt("Какую сумму хотите снять?")

  if (money <= 0) {
    console.log('Сумма должна быть больше 0')
  } else {
    let result = (money % 100) === 0 ? `Вы можете снять свои деньги` : `Вы не можете снять свои деньги`
  console.log(result);
  }

}