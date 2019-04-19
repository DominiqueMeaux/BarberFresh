// Navigation bar color change
let nav = document.getElementById('navigation');
let liens = document.getElementsByClassName('liensNav');
let icon = document.getElementById('icon');

//Quand on reduit la taille de l'ecran ne change pas la couleur
//du header
// onload pour commencer et onresize pour dynamique
window.onresize = colorHeader;
window.onload = colorHeader;

function colorHeader() {
    let myWidth = window.innerWidth;

    window.onscroll = function () {
        if (myWidth > 768) {
            if (document.documentElement.scrollTop > 980) {
                nav.style.background = "#373737";
                liens[0].style.color = "white";
                liens[1].style.color = "white";
                liens[2].style.color = "white";
                liens[3].style.color = "white";
            } else {
                nav.style.background = "#F0EAd6";
                liens[0].style.color = "#373737";
                liens[1].style.color = "#373737";
                liens[2].style.color = "#373737";
                liens[3].style.color = "#373737";
            }
            // second else pour mettre la nav en clair et bloqué l'anim du dessus
        } else {
            nav.style.background = "#F0EAd6";
            liens[0].style.color = "#373737";
            liens[1].style.color = "#373737";
            liens[2].style.color = "#373737";
            liens[3].style.color = "#373737";
        }
    }

};

function toggleNav() {
    if (nav.className === "") {
        nav.className += "responsive";
    } else {
        nav.className = "";
    }
}

//JQuery

$('html').click(function () {
    if (nav.className += "responsive") {
        nav.className = "";
    }
})

$('#icon').click(function (e) {
    e.stopPropagation();
});

/* Smooth Scroll */

$('#arrow').click(function () {
    $('html,body').animate({
        scrollTop: $('#section-about').offset().top - 50
    },
        'slow')
})

$('.liensNav:nth-child(1)').click(function () {
    $('html,body').animate({
        scrollTop: $('#accueil').offset().top
    },
        'slow')
})
$('.liensNav:nth-child(2)').click(function () {
    $('html,body').animate({
        scrollTop: $('#section-about').offset().top - 50
    },
        'slow')
})

$('.liensNav:nth-child(3)').click(function () {
    $('html,body').animate({
        scrollTop: $('#tarifs').offset().top - 70
    },
        'slow')
})

$('.liensNav:nth-child(4)').click(function () {
    $('html,body').animate({
        scrollTop: $('#contact').offset().top - 50
    },
        'slow')
})