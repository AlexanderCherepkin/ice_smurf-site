$('.menu-button').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu-button__active');
$('.menu').toggleClass('menu--active');

});