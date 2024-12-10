document.addEventListener('DOMContentLoaded', (event) => {
    const heroNameInput = document.getElementById('heroNameInput');
    // const heroNameText = document.querySelectorAll('.heroNameText')
    const heroNameText = document.getElementById('heroNameText');

    heroNameInput.addEventListener('input', () => {
        const heroName = heroNameInput.value;
        heroNameText.textContent = heroName;
        // console.log('Texto do input', heroName);
        /* heroNameText.forEach(element => {
            heroNameText.textContent = heroName;
            console.log('Texto do input', heroName);
        }); */
    });    
});

let heroXpClass = document.getElementById('heroXpClass');

document.addEventListener('DOMContentLoaded', (event) => {
    const heroXp = document.getElementById('rangeInput');
    const rangeValue = document.getElementById('rangeValue');

    heroXp.addEventListener('input', () => {
        let xpValor = heroXp.value;
        rangeValue.textContent = xpValor;

        //Não Consigo usar o Switch - case para fazer isso
        /* switch (xpValor) {
        case 20/2:
            heroXpClass.textContent = 'Ferro';
            break;
        case xpValor >= 1000 && xpValor < 2000:
            heroXpClass.textContent = 'Mago';
            break;
        } */

        if (xpValor <= 1000) {
            heroXpClass.textContent = 'Ferro';
        } else if(1001 <= xpValor && xpValor <= 2000) {
            heroXpClass.textContent = 'Bronze';
        } else if(2001 <= xpValor && xpValor <= 3000) {
            heroXpClass.textContent = 'Prata';
        } else if(3001 <= xpValor && xpValor <= 5000) {
            heroXpClass.textContent = 'Ouro';
        } else if(5001 <= xpValor && xpValor <= 7000) {
            heroXpClass.textContent = 'Diamante';
        } else if(7001 <= xpValor && xpValor <= 8000) {
            heroXpClass.textContent = 'Platina';
        } else if(8001 <= xpValor && xpValor <= 9000) {
            heroXpClass.textContent = 'Ascendente';
        } else if(9001 <= xpValor && xpValor <= 10000) {
            heroXpClass.textContent = 'Imortal';
        } else if(xpValor >= 10001) {
            heroXpClass.textContent = 'Radiante';
        }
    });
});

