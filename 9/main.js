let num1 = document.querySelector('#number-input-1')
let num2 = document.querySelector('#number-input-2')

let err = document.querySelector('#error');
let add = document.querySelector('#add');
let sub = document.querySelector('#sub');
let mul = document.querySelector('#mul');
let div = document.querySelector('#div');
let and = document.querySelector('#and');
let or = document.querySelector('#or');
let xor = document.querySelector('#xor');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (num1.value === "" || num2.value === "") {
        err.style.visibility = 'revert';
        add.innerText = sub.innerText = mul.innerText = div.innerText = and.innerText = or.innerText = xor.innerText = "";
    }
    else {
        err.style.visibility = 'hidden';
        let v1 = Number(num1.value), v2 = Number(num2.value);
        add.innerText = "Addition : " + (v1 + v2);
        sub.innerText = "Subtraction : " + (v1 - v2);
        mul.innerText = "Multiplication : " + (v1 * v2);
        div.innerText = "Division : " + (v1/v2).toFixed(3);
        and.innerText = "AND : " + (v1&v2);
        or.innerText = "OR : " + (v1|v2);
        xor.innerText = "XOR : " + (v1^v2);
    }
})