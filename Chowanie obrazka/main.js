const btn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item1');

// 1. nasłuchiwanie na przycisk na click'a
// 2. dodawanie klasy .hide
// 3. obracanie strzałki

const showImg = () => {
    img.classList.toggle('hide');
    (img.classList.contains('hide')) ? arrowIcon.style.transform = 'rotate(180deg)':
        arrowIcon.style.transform = 'rotate(0)';
}
btn.addEventListener('click', showImg);