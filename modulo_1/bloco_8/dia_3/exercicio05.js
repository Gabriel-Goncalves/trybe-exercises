
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const contaA = (str) =>  {
    const qtdA = str.split('').reduce((accumulator, currentValue) => {
        if(currentValue === 'a' || currentValue === 'A'){
            return accumulator + 1;
        }
        return accumulator;
    }, 0)
    return qtdA;
}


function containsA() {
  const qtdA = names.reduce((previousValue, currentValue) => {
      const a = contaA(currentValue);
      return previousValue + a;
  }, 0)
  return qtdA;
}

assert.deepStrictEqual(containsA(), 20);