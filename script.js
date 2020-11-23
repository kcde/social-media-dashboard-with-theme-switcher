const body = document.querySelector('body');
const switchBtn = document.querySelector('.switch');

switchBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
});
