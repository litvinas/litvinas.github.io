$('#up, #down').on('click', function(e){
    e.preventDefault();
    var target= $(this).get(0).id == 'up' ? $('#down') : $('#up');
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
});