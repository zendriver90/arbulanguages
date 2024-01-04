var music2 = document.getElementById('music2'); // id for audio element
var pButton2 = document.getElementById('pButton2'); // play button

// Play and Pause
function playb() {
    // start music
    if (music.paused) {
        music.play();
        // remove play, add pause
        pButton2.classList.remove("play");
        pButton2.classList.add("pause");
    } else { // pause music
        music.pause();
        // remove pause, add play
        pButton2.classList.remove("pause");
        pButton2.classList.add("play");
    }
}

// Gets audio file duration
music2.addEventListener("canplaythrough", function () {
    duration = music2.duration;
}, false);