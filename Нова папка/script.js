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





