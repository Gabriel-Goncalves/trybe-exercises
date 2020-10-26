let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let auxiliar;

for (let i = 0; i < numbers.length; i++) {
  for (let j = i; j < numbers.length; j++) {
    if (numbers[j] > numbers[i]) {
      auxiliar = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = auxiliar;
    }
  }
}

console.log(numbers);
