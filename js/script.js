// Все внутренние ссылки теперь прокручиваются плавно, будто скользят по льду!
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        // Начинается плавное скольжение! 🛷
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});