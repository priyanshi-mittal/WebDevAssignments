let count = 0;

$("#on-click-inc").click(function () {
    $("#count")[0].innerText = ++count;
});

$("#on-click-dec").click(function () {
    $(".item h2")[0].innerText = --count;
});

let shape = $("#shape");
shape.mouseover(() => {
    shape[0].classList.remove('square');
    shape[0].classList.add('circle');
})

shape.mouseout(() => {
    shape[0].classList.remove('circle');
    shape[0].classList.add('square');
})

$("#input").keypress(() => {
    $("#keypress")[0].style.visibility = 'visible';
    setTimeout(() => {
        $("#keypress")[0].style.visibility = 'hidden';
    }, 850);
})
