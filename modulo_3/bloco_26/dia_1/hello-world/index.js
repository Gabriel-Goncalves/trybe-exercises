// console.log('Hello, world!');

const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
console.log('');
console.log(`Hello, ${name}! You are ${age} years old!`);