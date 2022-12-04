let d = document;
let cel = d.querySelector('#cel');
let fhr = d.querySelector('#fhr');
let err = d.querySelector('.error-1')

d.querySelector('#to-fhr').addEventListener('click', () => {
    if(cel.value === "")
        err.style.visibility = 'visible';
    else {
        err.style.visibility = 'hidden';
        fhr.value = parseFloat(cel.value) * 1.8 + 32;
    }
});

d.querySelector('#to-cls').addEventListener('click', () => {
    if(fhr.value === "")
        err.style.visibility = 'revert';
    else {
        err.style.visibility = 'hidden';
        cel.value = ((parseFloat(fhr.value) - 32) * 5 / 9).toFixed(3);
    }
});

let ft = d.querySelector('#ft');
err = d.querySelector('.error-2')
let ich = d.querySelector('#ich');

d.querySelector('#to-ich').addEventListener('click', () => {
    if (ft.value === "") {
        err.style.visibility = 'visible';
    }
    else {
        err.style.visibility = 'hidden';
        ich.value = parseFloat(ft.value)*12;
    }
})

err = d.querySelector('.error-3');
let inp = d.querySelector('#input-text');
let out = d.querySelector('#output-text');

let f = d.querySelector('#from');
let t = d.querySelector('#to');

d.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (inp.value === "" || f.value === "" || t.value === "") {
        err.style.visibility = 'visible';
    }
    else {
        err.style.visibility = 'hidden';
        let inpstr = inp.value;
        let arr = inpstr.split(' ');

        for (let i = 0; i < arr.length; i ++)
            arr[i] = arr[i] === f.value ? t.value : arr[i];

        out.innerText = arr.join(' ');
    }
});

