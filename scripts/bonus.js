$(document).ready(function() {
    // compte à rebours
    var countDownDate = new Date("May 4, 2022 20:00:00").getTime();
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
            $("#timer").text("DELAI EXPIRE");
        }
    }, 1000);
    // ****************************************************************************************************

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
    // ****************************************************************************************************
    // social media hover
    $('.mediahover').on({
        mouseenter: function() {
            $(this).css('color', 'white')
        },
        mouseleave: function() {
            $(this).css('color', 'black')
        }
    })
})