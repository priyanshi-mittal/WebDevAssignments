let rand = Math.floor(Math.random()*1000);

let ifld = document.querySelector('#number-input');
let res = document.querySelector('#result');

document.querySelector('#num-submit').addEventListener('click', () => {
    if (ifld.value === "")
        res.innerText = "No Number entered";
    else if (Number(ifld.value) < 0)
        res.innerText = "Value is greater than 0";
    else if (Number(ifld.value) > 1000)
        res.innerText = "Value is lesser than 1000";
    else if (Number(ifld.value) < rand)
        res.innerText = "higher!!";
    else if (Number(ifld.value) > rand)
        res.innerText = "Lower!!";
    else
        res.innerHTML = "Yay! you won <br> Number was " + rand;
});


