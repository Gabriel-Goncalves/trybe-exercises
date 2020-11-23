const calculaFatorial = (num) => {
  if (num <= 0) {
    return 1;
  }
  return num * calculaFatorial(num - 1);
};

console.log(calculaFatorial(4));
