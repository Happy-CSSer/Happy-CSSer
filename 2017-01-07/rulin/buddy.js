let container = document.getElementById('pokemon-container'),
    toggleBtn = document.querySelectorAll('.btn-toggle');

for (let i = 0; i < toggleBtn.length; i++) {
    console.log(toggleBtn[i]);
    toggleBtn[i].addEventListener('click', () => {
        container.classList.toggle('confirm-mode');
    });
}
