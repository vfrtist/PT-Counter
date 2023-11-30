const counter = document.querySelector('.container')
const endSet = document.querySelector('.end')
const completeExercise = document.querySelector('.complete')
const set = document.querySelector('.set').firstElementChild
const fireworks = document.querySelectorAll('.firework')
const textline = counter.querySelector('h2')
const header = document.querySelector('header')
const affirmations = ['Great Job!', 'Keep It Up!', 'Good Work!', 'Almost There!', 'Incredible!', 'Get It!', 'Nice!', 'Oh Yeah!', 'Right On!', 'Amazing!', 'Stupendous!']

function selectAffirmation() {
    return affirmations[Math.floor(Math.random() * affirmations.length)];
}

counter.addEventListener('click', () => {
    counter.firstElementChild.innerText++
    counter.firstElementChild.animate(bounce, { duration: 150, iterations: 1, })
    if (counter.firstElementChild.innerText === '1') {
        textline.classList.add('hidden');
    }
})

endSet.addEventListener('click', () => {
    set.innerText++;
    setTo0();
    set.parentElement.animate(blink, { duration: 200, iterations: 1, });
})

completeExercise.addEventListener('click', () => {
    set.innerText = '0';
    setTo0();
    header.firstElementChild.innerText = selectAffirmation()
    header.classList.add('out');
})

header.addEventListener('transitionend', () => {
    if (header.classList.contains('out')) {
        header.classList.remove('out');
    }
    if (header.classList.contains('pause')) { header.classList.remove('pause') };
})

function setTo0() {
    counter.firstElementChild.innerText = '0';
    textline.classList.remove('hidden');
}

const bounce = [
    { transform: 'translateY(2px)' },
    { transform: 'translateY(0px)' },
]

const blink = [
    { transform: 'scaleX(1)' },
    { transform: 'scaleX(0)' },
    { transform: 'scaleX(1)' },
]

const dropdown = [
    { top: '-70px' },
    { top: '0px' },
    { top: '-70px' },
]