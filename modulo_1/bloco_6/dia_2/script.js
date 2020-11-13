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

function checkData(event) {
    event.preventDefault();
    let dateField = document.querySelector('#datepicker');
    console.log(dateField.value)
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
    var picker = new Pikaday({ field: document.getElementById('datepicker') });
    let btnSubmit = document.querySelector('#btn-submit');
    let btnClear = document.querySelector('#btn-clear');

    //btnSubmit.addEventListener('click', checkData);
    btnClear.addEventListener('click', clearFields)


    new window.JustValidate('.form-1');

};
