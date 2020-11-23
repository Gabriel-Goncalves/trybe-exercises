let qtdClicks = 0;

const refreshButton = () => {
    const button = document.querySelector('#button');
    button.addEventListener('click', () => {
        qtdClicks += 1;
        const clicks = document.querySelector('#clicks');
        clicks.innerText = `Quantidade de clicks = ${qtdClicks}`;
    })
}

refreshButton();