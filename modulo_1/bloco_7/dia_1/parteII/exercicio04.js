let habilites = `html css x javascript Shell linux`

const function1 = word => habilites.split('x').join(word);
console.log(function1('github'));


const function2 = word => {
    let habilitesInArray = habilites.split(' ');
    habilitesInArray.push(word);
    habilitesInArray.sort();
    return habilitesInArray.join(' ');
}

console.log(function2(function1('github')));