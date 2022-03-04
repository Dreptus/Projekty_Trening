const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
    'Krokodyl nie potrafi wystawić języka.',
    'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
    'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
    'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
    'Goryle śpią nawet czternaście godzin dziennie.',
    'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
    'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
    'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]

const today = new Date();
const date = today.toLocaleString("en", {
    weekday: "long"
})
// const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ":" + today.getMinutes();
const dateTime = date + ' - ' + time;
console.log(dateTime);

currentDay.textContent = dateTime;

const showRandom = () => {
    const random = Math.floor(Math.random() * facts.length)
    // console.log(random)
    funFact.textContent = facts[random]
}

showRandom();

