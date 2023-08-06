const cityLinks = document.querySelectorAll('.city a');
const cardsContainer = document.querySelector('.cards-container');

cityLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const cardName = link.dataset.card;
        const activeCard = document.querySelector(`.${cardName}`);
        cardsContainer.classList.add('active');
        cardsContainer.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none';
        });
        activeCard.style.display = 'block';
    });
});

function updateClock(city) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById(`time-${city}`).innerText = timeString;
}

setInterval(() => updateClock('ruse'), 1000);
setInterval(() => updateClock('sofia'), 1000);
setInterval(() => updateClock('burgas'), 1000);





