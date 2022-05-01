$(document).ready(function() {
    var countDownDate = new Date("May 4, 2022 08:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        $("#timer").text(
            days + " days   " + hours + " h " + minutes + " m " + seconds + " s"
        );

        if (distance < 0) {
            clearInterval(x);
            $("#timer").text("EXPIRED");
        }
    }, 1000);


    $(".button2").on({
        mouseenter: function() {
            $(this).css({
                "background-color": "#ffffff",
                "box-shadow": "0 5px 17px 0px  #ffffff",
                "color": "#b11313"
            });

        },
        mouseleave: function() {
            $(this).css({
                "background-color": "transparent",
                "box-shadow": "0 0 0 0",
                "color": "#ffffff"
            });
        },
    });
    $(".button1").on({
        mouseenter: function() {
            $(this).css({
                "background-color": "transparent",
                "color": "#ffffff"
            });
        },
        mouseleave: function() {
            $(this).css({
                "background-color": "#ffffff",
                "border": "2px solid",
                "color": "#b11313"
            });
        },
    });
    $('.card-text').hide()
    $('.card-text').nextUntil('.button1').hide()
    $('.card1').on({
        mouseenter: function() {
            $('.card-text1').fadeTo(1500, 1)
        },
        mouseleave: function() {
            $('.card-text1').hide(2000)
        }
    })
    $('.card2').on({
        mouseenter: function() {
            $('.card-text2').fadeTo(1500, 1)
        },
        mouseleave: function() {
            $('.card-text2').hide(2000)
        }
    })
    $('.card3').on({
        mouseenter: function() {
            $('.card-text3').fadeTo(1500, 1)
            $('.card-text3').nextUntil('.button1').fadeTo(1500, 1)
        },
        mouseleave: function() {
            $('.card-text3').hide(2000)
            $('.card-text3').nextUntil('.button1').hide(2000)
        }
    })

});