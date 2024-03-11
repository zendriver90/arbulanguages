function initAudio(fiszkaId) {
    var audioId = 'music' + fiszkaId;
    var pButtonId = 'pButton' + fiszkaId;

    var music = document.getElementById(audioId);
    var pButton = document.getElementById(pButtonId);
    
        // Play and Pause
    function playb() {
        // start music
        if (music.paused) {
            music.play();
            // remove play, add pause
            pButton.classList.remove("play");
            pButton.classList.add("pause");
        } else { // pause music
            music.pause();
            // remove pause, add play
            pButton.classList.remove("pause");
            pButton.classList.add("play");
        }
    }

    // Gets audio file duration
    music.addEventListener("canplaythrough", function () {
        var duration = music.duration;
        console.log('Audio duration:', duration);
    }, false);

    // Dodajemy event listener do przycisku play/pause
    pButton.addEventListener('click', playb);
}