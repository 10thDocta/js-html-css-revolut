$(document).ready(function () {

    $("nav li a ").on({

        mouseenter: function () {
            $(this).addClass("active");
        },

        mouseleave: function () {
            $(this).removeClass("active");
        }

    });
    // fine selettore

    // quando il mouse va sopra il tag a, allora mostra il menu a tendina
    $(".nav_menu__item > a").on({

        mouseenter: function () {
            $(this).next().css("display", "block");
        }
    });

    // quando il mouse esce dal tag li.nav_menu__item, allora nascondi il menu a tendina
    $(".nav_menu__item").on({

        mouseleave: function () {
            $(this).children(".dropdown").css("display", "none");
        }
    });



})