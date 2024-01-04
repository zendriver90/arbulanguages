var musicB = document.getElementById('musicB'); // id for audio element
var pButtonB = document.getElementById('pButtonB'); // play button
 
// Play and Pause
function playB() {
    // start music
    if (musicB.paused) {
        musicB.play();
        // remove play, add pause
        pButtonB.classList.remove("playB");
        pButtonB.classList.add("pauseB");
    } else { // pause music
        musicB.pause();
        // remove pause, add play
        pButtonB.classList.remove("pauseB");
        pButtonB.classList.add("playB");
    }
}

function handleMusicEndB() {
    setTimeout(function() {
        pButtonB.classList.remove("pauseB");
        pButtonB.classList.add("playB");
        $('#story').removeClass('hej3');
        $('#story').addClass('hidden');
    }, 100);
}
 
// Przypisanie funkcji do zdarzenia 'ended' dla elementu 'music2'
musicB.addEventListener("ended", handleMusicEndB);

var musicB2 = document.getElementById('musicB2'); // id for audio element
var pButtonB2 = document.getElementById('pButtonB2'); // play button
 
// Play and Pause
function playB2() {
    // start music
    if (musicB2.paused) {
        musicB2.play();
        // remove play, add pause
        pButtonB2.classList.remove("playB2");
        pButtonB2.classList.add("pauseB2");
    } else { // pause music
        musicB2.pause();
        // remove pause, add play
        pButtonB2.classList.remove("pauseB2");
        pButtonB2.classList.add("playB2");
    }
}

function handleMusicEndB2() {
    setTimeout(function() {
        pButtonB2.classList.remove("pauseB2");
        pButtonB2.classList.add("playB2");
        $('#story').removeClass('hej3');
        $('#story').addClass('hidden');
        $("#audioplayerB2").removeClass('off');
        $("#audioplayerB2").addClass('add');
    }, 100);
}
 
// Przypisanie funkcji do zdarzenia 'ended' dla elementu 'music2'
musicB2.addEventListener("ended", handleMusicEndB2);

var musicB3 = document.getElementById('musicB3'); // id for audio element
var pButtonB3 = document.getElementById('pButtonB3'); // play button
 
// Play and Pause
function playB3() {
    // start music
    if (musicB3.paused) {
        musicB3.play();
        // remove play, add pause
        pButtonB3.classList.remove("playB3");
        pButtonB3.classList.add("pauseB3");
    } else { // pause music
        musicB3.pause();
        // remove pause, add play
        pButtonB3.classList.remove("pauseB3");
        pButtonB3.classList.add("playB3");
    }
}

function handleMusicEndB3() {
    setTimeout(function() {
        pButtonB3.classList.remove("pauseB3");
        pButtonB3.classList.add("playB3");
        $('#story').removeClass('hej3');
        $('#story').addClass('hidden');
    }, 100);
}
 
// Przypisanie funkcji do zdarzenia 'ended' dla elementu 'music2'
musicB3.addEventListener("ended", handleMusicEndB3);