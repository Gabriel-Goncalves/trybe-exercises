let peca = "peão"

switch(peca.toLowerCase()) {
    case "torre":
        console.log("Torre -> vertical e horizontal");
        break;
    case "bispo":
        console.log("Bispo -> diagonal");
        break;
    case "cavalo":
        console.log("Cavalo -> L duas casa a frente uma para o lado");
        break;
    case "rainha":
        console.log("Rainha -> Vertical, Horizontal e Diagonal");
        break;
    case "rei":
        console.log("Rei -> Uma posição em qualquer direção");
        break;
    case "peão":
        console.log("Peão -> Sempre em frente, 2 casas se for primeiro movimento 2 caso contrário");
        break;
    default:
        console.log("Peça inválida!");
        break;
}