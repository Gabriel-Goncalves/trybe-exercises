let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}

console.log(`O menor valor é o: ${menor}`);
