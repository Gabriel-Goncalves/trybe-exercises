let n = 5;
let estrelas;
let alturaPiramide = Math.ceil(n/2);
let qtdNaLinha = 0;
let estrelasPorLinha = 0;

if (n <= 0) {
  console.log("Valor de n inválido");
} else if(n%2 == 0) {
    estrelasPorLinha = 2;
    for (let linha = 0; linha < alturaPiramide; linha++) {
        estrelas = '';
        qtdEspacos = (n - estrelasPorLinha) / 2;
        for (let espacos = 0; espacos < qtdEspacos; espacos++) {
            estrelas += ' ';            
        }
        for (let asteriscos = 0; asteriscos < estrelasPorLinha; asteriscos++) {
            estrelas += '*'
        }
        estrelasPorLinha+=2;
        console.log(estrelas);
    }
} else{
    estrelasPorLinha = 1;
    for (let linha = 0; linha < alturaPiramide; linha++) {
        estrelas = '';
        qtdEspacos = (n - estrelasPorLinha) / 2;
        for (let espacos = 0; espacos < qtdEspacos; espacos++) {
            estrelas += ' ';            
        }
        for (let asteriscos = 0; asteriscos < estrelasPorLinha; asteriscos++) {
            estrelas += '*'
        }
        estrelasPorLinha+=2;
        console.log(estrelas);
    }
}
