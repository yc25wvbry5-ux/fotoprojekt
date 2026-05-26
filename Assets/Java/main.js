$(document).ready(function() {
    $('.menu-icon').click(function(e) {
        e.preventDefault();
        $('header').toggleClass('active');
    });
});