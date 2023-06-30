const counter = document.querySelector('.container')
const endSet = document.querySelector('.end')
const completeExercise = document.querySelector('.complete')
const set = document.querySelector('.set').firstElementChild

counter.addEventListener('click', () => {
    counter.firstElementChild.innerText++
    counter.firstElementChild.animate(bounce, { duration: 150, iterations: 1, })
    if (counter.firstElementChild.innerText === '1') {
        counter.lastElementChild.classList.add('hidden');
    }
})

endSet.addEventListener('click', () => {
    set.innerText++;
    setTo0()
})

completeExercise.addEventListener('click', () => {
    set.innerText = '0';
    setTo0()
})

function setTo0() {
    counter.firstElementChild.innerText = '0';
    counter.lastElementChild.classList.remove('hidden');
    set.parentElement.animate(blink, { duration: 200, iterations: 1, })
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
