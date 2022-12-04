document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    dofunction();
    evenodd();

    document.querySelector('.acc').style.visibility = 'revert';
});

const values = (val) => {
    let res = "";
    for (let v of val)
        res += v + " ";
    return res;
}

function dofunction() {
    let string = document.querySelector('#vowel').value;
    let vows = new Set();
    let cons = new Set();
    let word;
    const VOWELS = "aeiouAEIOU";

    for (let c of string) {
        if (VOWELS.includes(c))
            vows.add(c);
        else
            cons.add(c);
    }

    word = string.split(' ');
    document.querySelector('#vowel-res').innerHTML = "Vowels are : " + values(vows);
    document.querySelector('#conso-res').innerHTML = "Consonents are : " + values(cons);
    document.querySelector('#word-count').innerHTML = "Word count : " + word.length;

}

function evenodd() {
    document.querySelector('#eo-res').innerHTML =
        Number(document.querySelector('#even-odd').value) % 2 === 0 ? "Even" : "Odd";
}
