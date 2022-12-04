document.querySelector('#signup').addEventListener('submit', (e) => {
    e.preventDefault();
    if(document.querySelector('#s-pass').value !== document.querySelector('#s-c-pass').value)
        document.querySelector('#e1').style.visibility = 'revert';
    else
        document.querySelector('#e1').style.visibility = 'hidden';
});

document.querySelector('#c-pass').addEventListener('submit', (e) => {
    e.preventDefault();
    if(document.querySelector('#c-pass-1').value !== document.querySelector('#c-pass-2').value)
        document.querySelector('#e2').style.visibility = 'revert';
    else
        document.querySelector('#e2').style.visibility = 'hidden';
});
// Master@123
