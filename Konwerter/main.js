const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celsius

const changeDeg = () => {
    (one.textContent === '°C') ? (one.textContent = '°F', two.textContent = '°C',
        result.textContent = '') :
    (one.textContent = '°C', two.textContent = '°F', result.textContent = '')
}

const farToCel = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = ''
    // celsius = (converter.value - 32)/1.8;
    // result.textContent = celsius
}
const celToFar = () => {
    celsius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const conversion = () => {
    (converter.value !== '') ? ((one.textContent === '°C') ? farToCel() : celToFar()) :
    (result.textContent = 'Musisz podać wartość liczbową!')
}

// const reset = () => {
//     (converter.value !== '' || result.textContent !== '') ? (converter.value = '',
//         result.textContent = '') :
//     (converter.value = '', result.textContent = '')
// }
const reset = () => {
    converter.value = ''
    result.textContent = ''
}


changeBtn.addEventListener('click', changeDeg)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)