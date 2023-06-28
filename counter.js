const counter = document.querySelector('.container')
const endSet = document.querySelector('.end')
const completeExercise = document.querySelector('.complete')
const set = document.querySelector('.set').firstElementChild

counter.addEventListener('click', () => {
    counter.firstElementChild.innerText++
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

const blink = [
    { transform: 'scaleX(1)', color: 'black' },
    { transform: 'scaleX(0)', color: '#f7fbff;' },
    { transform: 'scaleX(1)', color: 'black' },
]
