function createOptionStates() {
  let states = [
    { ac: "Acre" },
    { al: "Alagoas" },
    { ap: "Amapá" },
    { am: "Amazonas" },
    { ba: "Bahia" },
    { ce: "Ceará" },
    { df: "Distrito Federal" },
    { es: "Espírito Santo" },
    { go: "Goías" },
    { ma: "Maranhão" },
    { mt: "Mato Grosso" },
    { ms: "Mato Grosso do Sul" },
    { mg: "Minas Gerais" },
    { pa: "Pará" },
    { pb: "Paraíba" },
    { pr: "Paraná" },
    { pe: "Pernambuco" },
    { pi: "Piauí" },
    { rj: "Rio de Janeiro" },
    { rn: "Rio Grande do Norte" },
    { rs: "Rio Grande do Sul" },
    { ro: "Rondônia" },
    { rr: "Roraíma" },
    { sc: "Santa Catarina" },
    { sp: "São Paulo" },
    { se: "Sergipe" },
    { to: "Tocantins" },
  ];

  let selectField = document.querySelector("#input-state");
  for (let index = 0; index < states.length; index++) {
    let option = document.createElement("option");
    option.value = Object.keys(states[index])[0];
    option.innerText = Object.values(states[index])[0];
    selectField.appendChild(option);
  }
}

function checkDay(day) {
    if(!isNaN(day)){
        if(parseInt(day) > 31 || day <= 0){
            alert("Dia não está no intervalo entre 1 e 31");
            return false
        }
    }else{
        alert("Dia não está no formato numérico");
        return false;
    }
}

function checkMonth(month){
    if(!isNaN(month)){
        if(parseInt(month) > 12 || month <= 0){
            alert("Mês não está no intervalo entre 1 e 12");
            return false
        }
    }else{
        alert("Mês não está no formato numérico");
        return false;
    }

}

function checkYear(year) {
    if(!isNaN(year)){
        if(year.length !== 4){
            alert("Ano deve estar no formato com 4 casas ex: 1998");
            return false
        } else if(parseInt(year < 0)){
            alert('Ano não pode ser negativo!');
            return 0;
        }
    }else{
        alert("Ano não está no formato numérico");
        return false;
    }
}

function checkData(event){
    event.preventDefault();
    let dateField = document.querySelector('#date-start');
    let date = dateField.value.split('/');
    if(date.length !== 3){
        alert("Formato da data inválido, formato esperado dd/mm/aaaa");
        return false;
    }

    checkDay(date[0]);
    checkMonth(date[1]);
    checkYear(date[2]);
}

function clearFields(event) {
    console.log('2');
    event.preventDefault();
    console.log('entrou')
    let inputFields = document.querySelectorAll('input');
    console.log(inputFields);
}

window.onload = function () {
    createOptionStates();
    let btnSubmit = document.querySelector('#btn-submit');
    let btnClear = document.querySelector('#btn-clear');

    btnSubmit.addEventListener('click', checkData);
    btnClear.addEventListener('click', clearFields)
};
