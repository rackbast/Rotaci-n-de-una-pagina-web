
const container = document.querySelector('.container');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('material-symbols-outlined')) {
        container.classList.toggle('show');
    }
});
