'use strict';

{
  const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

  const addPrefix = (arr, prefix) => {

    const namesWithPrefix = arr.map(name => `${prefix} ${name}`);

    return namesWithPrefix;

  }

  console.log(addPrefix(names, 'Mr.'))
}