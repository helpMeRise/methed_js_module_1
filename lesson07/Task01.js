'use strict';

{
  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  const filter = (arrAll, arrFailed) => {

    const passedStudens = arrAll.filter( student => !arrFailed.includes(student)); 
    
    return passedStudens;
  
  }

  console.log(filter(allStudents, failedStudents));
}