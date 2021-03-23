$('.popup-open__about').click(function() {
    $('.popup-fade__about').fadeIn();
    return false;
});	

$('.popup-close').click(function() {
    $(this).parents('.popup-fade__about').fadeOut();
    return false;
});		

$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade__about').fadeOut();
    }
});
// 
$('.popup-open__about-compani').click(function() {
    $('.popup-fade__about-compani').fadeIn();
    return false;
});	

$('.popup-close').click(function() {
    $(this).parents('.popup-fade__about-compani').fadeOut();
    return false;
});		

$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade__about-compani').fadeOut();
    }
});
