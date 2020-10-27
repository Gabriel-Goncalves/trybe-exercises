let n = 17;
let resultado = 'é primo';

if(n == 2){
    console.log(`${n} é primo`)
} else{
    for (let count = 2; count < n; count++) {
        if(n%count == 0){
            resultado = "não é primo";
            count = n;
        }
    }
    console.log(`${n} ${resultado}`);
}

