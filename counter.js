const counter = document.querySelector('.container')
const endSet = document.querySelector('.end')
const completeExercise = document.querySelector('.complete')

counter.addEventListener('click', () => {
    counter.firstElementChild.innerText++
    if (counter.firstElementChild.innerText === '1') {
        counter.lastElementChild.classList.add('hidden');
    }
})

endSet.addEventListener('click', setTo0)
completeExercise.addEventListener('click', setTo0)

function setTo0() {
    counter.firstElementChild.innerText = '0';
    counter.lastElementChild.classList.remove('hidden');
}