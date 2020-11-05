window.onload = function () {
  if (localStorage.length === 0) {
    chamaFuncoes();
  } else {
    setaValores();
    chamaFuncoes();
  }

  function trocaCor(corP) {
    let cor = document.querySelector("#corFundo").value;
    document.body.style.backgroundColor = cor;
    localStorage.setItem("backGround", cor);
  }

  function trocaCorTexto() {
    let cor = document.querySelector("#corTexto").value;
    let textos = document.querySelector("#texto");
    let paragrafos = textos.children;
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.color = cor;
    }
    localStorage.setItem("corTexto", cor);
  }

  function trocaTamanhoFonte() {
    let tamanho = document.querySelector("#tamanhoFonte").value;
    let textos = document.querySelector("#texto");
    let paragrafos = textos.children;
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.fontSize = `${tamanho}px`;
    }
    localStorage.setItem("tamanhoFonte", tamanho);
  }

  function TrocaEspacamento() {
    let tamanho = document.querySelector("#espacamento").value;
    let textos = document.querySelector("#texto");
    let paragrafos = textos.children;
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.lineHeight = `${tamanho}px`;
    }
    localStorage.setItem("espacamento", tamanho);
  }

  function trocaFonte() {
    let fonte = document.querySelector("#fonte").value;
    let textos = document.querySelector("#texto");
    let paragrafos = textos.children;
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.fontFamily = `${fonte}`;
    }
    localStorage.setItem("fonte", fonte);
  }

  function resetar() {
    localStorage.clear();
    window.location.reload();
  }

  function chamaFuncoes() {
    let botaoTrocaCor = document.querySelector("#alteraCorFundo");
    let botaoTrocaCorTexto = document.querySelector("#alteraCorTexto");
    let botaoTrocaTamanhoFonte = document.querySelector("#alteraTamanhoFonte");
    let botaoTrocaEspacamento = document.querySelector("#alteraEspacamento");
    let botaoTrocaFonte = document.querySelector("#alteraFonte");
    let botaoReseta = document.querySelector("#resetar");

    botaoTrocaCor.addEventListener("click", trocaCor);
    botaoTrocaCorTexto.addEventListener("click", trocaCorTexto);
    botaoTrocaTamanhoFonte.addEventListener("click", trocaTamanhoFonte);
    botaoTrocaEspacamento.addEventListener("click", TrocaEspacamento);
    botaoTrocaFonte.addEventListener("click", trocaFonte);
    botaoReseta.addEventListener("click", resetar);
  }

  function setaValores() {
    let textos = document.querySelector("#texto");
    let paragrafos = textos.children;

    // seta cor de fundo
    document.body.style.backgroundColor = localStorage.getItem("backGround");

    // seta cor da letra
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.color = localStorage.getItem("corTexto");
    }

    // seta tamanho fonte
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.fontSize = `${localStorage.getItem(
        "tamanhoFonte"
      )}px`;
    }

    // seta espaçamento
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.lineHeight = `${localStorage.getItem(
        "espacamento"
      )}px`;
    }

    // seta fonte
    for (let index = 0; index < paragrafos.length; index++) {
      paragrafos[index].style.fontFamily = `${localStorage.fonte}`;
    }
  }
};
