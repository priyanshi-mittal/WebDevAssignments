$(".dbl").dblclick(function(){
    $(this).hide();
});

$(".ms-over").mouseover(function () {
    $(this)[0].style.color = 'green';
})

$(".ms-over").mouseout(function () {
    $(this)[0].style.color = 'black';
})

