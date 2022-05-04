$(document).ready(function() {
    // compte à rebours
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
    // ****************************************************************************************************
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

    send.addEventListener('submit', function(e) {
        e.preventDefault()

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                popUpBox.style.display = 'block';
                save.innerText = 'Veuillez renseigner tous les champs !!';
                danger.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>'
                return false

            } else {
                popUpBox.style.display = 'block';
                save.innerHTML = 'Votre formulaire a été bien enregistré<br><br><br>😍 🥰 😘';
                closeBtn.style.marginTop = '25px';
                danger.innerHTML = '';
            }
        }

    })
    closeBtn.addEventListener('click', () => {
        popUpBox.style.display = 'none';
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = ''
        }
    })


});