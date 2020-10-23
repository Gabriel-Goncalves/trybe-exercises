let a = 20;
let b = 20;
let c = 20;

let ac = a / c;
let ab = a / b;

if (ac > 1 && ab > 1){
    console.log("O maior é o número a: " + a);
} else if (ac == 1 && ab == 1){
    console.log("Os 3 números são iguais");
} else if(ac < ab){
    console.log("O maior é o número c: " + c);
} else if( ac == ab){
    console.log("b e c são os maiores com valor: " + c);
} else {
    console.log("O maior é o número b: " + b);
}
