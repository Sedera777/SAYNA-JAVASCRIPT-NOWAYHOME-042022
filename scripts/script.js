$(document).ready(function() {

    // Audio content
    let heart = document.getElementById('heart');
    heart.addEventListener('click', myFav);

    function myFav() {
        if (heart.innerHTML == '<i class="fa-regular fa-heart"></i>') {
            heart.innerHTML = '<i class="fa-solid fa-heart">'
        } else { heart.innerHTML = '<i class="fa-regular fa-heart"></i>' }

    }

    const playButton = document.querySelector('#play');
    const prevButton = document.querySelector('#prev');
    const nextButton = document.querySelector('#next');
    const status = document.querySelector('.status');
    const title = document.querySelector('.title');
    const audio = document.querySelector('#audio');
    const progress = document.querySelector('.progress');
    const progressContainer = document.querySelector('.progress-container');
    const songs = ['What\'s up danger'];
    let songIndex = 0;
    loadSong(songs[songIndex])

    function loadSong(song) {
        title.innerText = song
        audio.src = `./assets/audio/${song}.mp3`
    }

    function playSong() {
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>'
        status.innerHTML = ''
        audio.pause()
    }

    function pauseSong() {
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
        status.innerHTML = 'Now Playing'
        audio.play()
    }

    playButton.addEventListener('click', () => {
        const nowPlaying = playButton.innerHTML == '<i class="fa-solid fa-play"></i>';
        if (nowPlaying) {
            pauseSong()
        } else {
            playSong()

        }
    })
    prevButton.addEventListener('click', prevSong)
    nextButton.addEventListener('click', nextSong)

    function prevSong() {
        songIndex--
        if (songIndex < 0) {
            songIndex = songs.length - 1
        }
        loadSong(songs[songIndex])
        playSong()
    }

    function nextSong() {
        songIndex++
        if (songIndex > songs.length - 1) {
            songIndex = 0
        }
        loadSong(songs[songIndex])
        playSong()
    }
    audio.addEventListener('timeupdate', updateProgress)

    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
    progressContainer.addEventListener('click', setProgress)

    function setProgress(e) {
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = audio.duration
        audio.currentTime = (clickX / width) * duration

    }
    // ****************************************************************************************************
    // Hover on buttons
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
    // ****************************************************************************************************
    // Logo MARVEL qui apparaît en foundu à partir de la gauche

    $('.marvel').animate({ left: '45%', opacity: '1' }, 3000);

    // ****************************************************************************************************

    // scroll qui suit la page
    (function() {
        let scrollY = function() {
            let supportPageOffset = window.pageXOffset !== undefined;
            let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
            return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
        }
        let spider = document.querySelector('.spider');
        let rect = spider.getBoundingClientRect()
        let top = rect.top + scrollY();
        let hasScrollClass = spider.classList.contains('fixed');
        let constraint = document.querySelector(spider.getAttribute('data-constraint'));
        console.log(constraint)
        window.addEventListener('scroll', function() {


            if (scrollY() > top && !hasScrollClass) {
                spider.classList.add('fixed')
            } else if (scrollY() < top && hasScrollClass) {
                spider.classList.remove('fixed')
            }
        })

    })()

    // ****************************************************************************************************
    $('.card-img-top').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
    // card-text content hiding
    $('.card-text').hide()
    $('.card-text').nextUntil('.button1').hide()
    $('.card1').on({
        mouseenter: function() {
            $('.card-text1').fadeTo(1500, 1)
        },
        mouseleave: function() {
            $('.card-text1').fadeOut(1000)
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
    const popUpBox = document.getElementById('popUpBox');
    const closeBtn = document.querySelector('.close');
    var save = document.getElementById('save');
    var danger = document.getElementById('danger');
    const send = document.getElementById('send');
    var inputs = document.getElementsByClassName('become-spiderman');
    $('#popUpBox').hide();

    send.addEventListener('submit', function(e) {
        e.preventDefault()
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                $('#popUpBox').fadeIn(1000);
                save.innerText = 'Veuillez renseigner tous les champs s\'il vous plaît!!';
                danger.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
                return false

            } else {
                $('#popUpBox').fadeIn(1000);
                save.innerHTML = 'Votre formulaire a été bien enregistré<br><br><br>😍 🥰 😘';
                closeBtn.style.marginTop = '25px';
                danger.innerHTML = '';
            }
        }
    })

    closeBtn.addEventListener('click', () => {
        $('#popUpBox').fadeOut(1000);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ''
        }
    })


});