$(function() {
    window.sr = new scrollReveal();
    $(window).stellar();
});

$(window).resize(function() {
    $.stellar('refresh');
});