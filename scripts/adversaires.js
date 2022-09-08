$(document).ready(function() {

    // card-text content hiding
    $('.card-content-1').hide()
    $('.card-content-2').hide()
    $('.card-content-3').hide()
    $('.card-content-4').hide()
    $('.card-content-5').hide()
    $('.card-content-6').hide()
    $('.card-content-7').hide()
    $('.card-content-8').hide()
    $('.card-content-9').hide()
    $('.card-content-10').hide()
    $('.card-content-11').hide()

    $('.card-image-1').on({
        mouseenter: function() {
            $('.card-content-1').fadeTo(3000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title1').animate({ left: '50px' }, 3000)
            $('.triangle1').fadeOut(3000)

        },
        mouseleave: function() {
            $('.card-content-1').fadeOut(1000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title1').animate({ left: '0px' }, 3000)
            $('.triangle1').show(3000)

        }
    })

    $('.card-image-2').on({
        mouseenter: function() {
            $('.card-content-2').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title2').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-2').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title2').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-3').on({
        mouseenter: function() {
            $('.card-content-3').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title3').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-3').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title3').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-4').on({
        mouseenter: function() {
            $('.card-content-4').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title4').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-4').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title4').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-5').on({
        mouseenter: function() {
            $('.card-content-5').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title5').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-5').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title5').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-6').on({
        mouseenter: function() {
            $('.card-content-6').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title6').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-6').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title6').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-7').on({
        mouseenter: function() {
            $('.card-content-7').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title7').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-7').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title7').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-8').on({
        mouseenter: function() {
            $('.card-content-8').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title8').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-8').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title8').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-9').on({
        mouseenter: function() {
            $('.card-content-9').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title9').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)

        },
        mouseleave: function() {
            $('.card-content-9').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title9').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)

        }
    })

    $('.card-image-10').on({
        mouseenter: function() {
            $('.card-content-10').fadeTo(5000, 1)
            $('.card-title').css('background-color', '#114b9298')
            $('.class-title10').animate({ left: '50px' }, 4000)
            $('.triangle').hide(4000)
        },
        mouseleave: function() {
            $('.card-content-10').hide(2000)
            $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
            $('.class-title10').animate({ left: '0px' }, 4000)
            $('.triangle').show(2000)
        }
    })

    $('.card-image-11').on({
            mouseenter: function() {
                $('.card-content-11').fadeTo(5000, 1)
                $('.card-title').css('background-color', '#114b9298')
                $('.class-title11').animate({ left: '50px' }, 4000)
                $('.triangle').hide(4000)
            },
            mouseleave: function() {
                $('.card-content-11').hide(2000)
                $('.card-title').css('background-color', 'rgba(0, 0, 0, 0.7)')
                $('.class-title11').animate({ left: '0px' }, 4000)
                $('.triangle').show(2000)
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