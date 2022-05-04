$(document).ready(function() {

    $('.card-image').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
    // card-text content hiding
    $('.card-content-1').hide()
    $('.card-image-1').on({
        mouseenter: function() {
            $('.card-content-1').fadeTo(7000, 1)
            $('.card-title').css({
                'background-color': '#114b9298'
            })
            $('.triangle').hide(2000)

        },
        mouseleave: function() {
            $('.card-content-1').hide()
            $('.card-title').css({
                'background-color': 'rgba(0, 0, 0, 0.7)'
            })
            $('.triangle').show()

        }
    })
    $('.card2').on({
        mouseenter: function() {
            $('.card-text2').fadeTo(1500, 1)
        },
        mouseleave: function() {
            $('.card-text2').fadeOut(1000)
        }
    })
    $('.card3').on({
            mouseenter: function() {
                $('.card-text3').fadeTo(1500, 1)
                $('.card-text3').nextUntil('.button1').fadeTo(1500, 1)
            },
            mouseleave: function() {
                $('.card-text3').fadeOut(1000)
                $('.card-text3').nextUntil('.button1').fadeOut(1000)
            }
        })
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
        // ****************************************************************************************************




});