let count = 0;

document.querySelector('#on-click-inc').addEventListener('click', () => {
    document.querySelector('.item h2').innerText = ++count;
});

document.querySelector('#on-click-dec').addEventListener('click', () => {
    document.querySelector('.item h2').innerText = --count;
});

document.querySelector('#shape').addEventListener('mouseover', () => {
    document.querySelector('#shape').classList.remove('square');
    document.querySelector('#shape').classList.add('circle');
})

document.querySelector('#shape').addEventListener('mouseout', () => {
    document.querySelector('#shape').classList.remove('circle');
    document.querySelector('#shape').classList.add('square');
})

document.querySelector('#input').addEventListener('keypress', () => {
    document.querySelector('#keypress').style.visibility = 'visible';
    setTimeout(() => {
        document.querySelector('#keypress').style.visibility = 'hidden';
    }, 850);
})
