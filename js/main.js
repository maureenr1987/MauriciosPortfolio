//Scroll animation
$(".content-link").click(function () {
    $('html, body').animate({scrollTop: $('#contact').offset().top - 100}, 'slow');
});

//Hide navbar 1.5 sec after click navbar button
$("a").click(function () {
    setTimeout(function hidebar() {document.getElementById("navbar").style.top = "-110px";} , 1500)
});

//Hide navbar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-180px";
    }
    prevScrollpos = currentScrollPos;
}