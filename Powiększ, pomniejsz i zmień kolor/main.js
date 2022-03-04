const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');

// 1. Plus ma powiekszać tekst nasłuchiwanie click`a na plusa
// 2. Minus ma pomniejszać tekst nadać nasłuchiwanie click`a na minusa
// 3. Nadć nasłuchiwanie na przycisk wuboru przypadkowego koloru
// '#'+Math.floor(Math.random()*16777215).toString(16)
let fontSize = 36;
const increase = () => {
    fontSize += 5;
    p.style.fontSize = fontSize + 'px';
}

const decrease = () => {
    if (fontSize <= 10) return;
    fontSize -= 5;
    p.style.fontSize = fontSize + 'px';
}

const colorChange = () => {
    const r = Math.floor(Math.random() * 16777215).toString(16)
    p.style.color = '#'+r

    // const rOne = Math.floor(Math.random() * 255)
    // const gOne = Math.floor(Math.random() * 255)
    // const bOne = Math.floor(Math.random() * 255)
    // p.style.color = `rgb(${rOne}, ${gOne}, ${bOne})`
}


sizeUp.addEventListener('click', increase);
sizeDown.addEventListener('click', decrease);
colorBtn.addEventListener('click', colorChange);

