let list = [];

document.querySelectorAll('.box').forEach((box) => {box.addEventListener('click', () => {
    let val = document.querySelector('#num').value;
    if (val !== "" && Number(val) <= 9 && Number(val) >= 1 && !list.includes(val)) {
        box.innerText = val;
        list.push(val);
    }
    document.querySelector('#num').value = "";
    if (list.length >= 9)
        document.querySelectorAll('.box').forEach((box) => {box.style.backgroundColor = 'lightgreen'});
})});