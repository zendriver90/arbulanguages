var music = document.getElementById('music'); // id for audio element
var duration; // Duration of audio clip
var pButton = document.getElementById('pButton'); // play button

var playhead = document.getElementById('playhead'); // playhead

var timeline = document.getElementById('timeline'); // timeline
// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// timeupdate event listener
music.addEventListener("timeupdate", timeUpdate, false);

//Makes timeline clickable
timeline.addEventListener("click", function (event) {
	moveplayhead(event);
	music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(e) {
	return (e.pageX - timeline.offsetLeft) / timelineWidth;
}

// Makes playhead draggable 
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that mouse is moved on mouseUp only when the playhead is released 
var onplayhead = false;
// mouseDown EventListener
function mouseDown() {
	onplayhead = true;
	window.addEventListener('mousemove', moveplayhead, true);
	music.removeEventListener('timeupdate', timeUpdate, false);
}
// mouseUp EventListener
// getting input from all mouse clicks
function mouseUp(e) {
	if (onplayhead == true) {
		moveplayhead(e);
		window.removeEventListener('mousemove', moveplayhead, true);
		// change current time
		music.currentTime = duration * clickPercent(e);
		music.addEventListener('timeupdate', timeUpdate, false);
	}
	onplayhead = false;
}
// mousemove EventListener
// Moves playhead as user drags
function moveplayhead(e) {
	var newMargLeft = e.pageX - timeline.offsetLeft;
	if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
		playhead.style.marginLeft = newMargLeft + "px";
	}
	if (newMargLeft < 0) {
		playhead.style.marginLeft = "0px";
	}
	if (newMargLeft > timelineWidth) {
		playhead.style.marginLeft = timelineWidth + "px";
	}
}

// timeUpdate 
// Synchronizes playhead position with current point in audio 
function timeUpdate() {
	var playPercent = timelineWidth * (music.currentTime / duration);
	playhead.style.marginLeft = playPercent + "px";
	if (music.currentTime == duration) {
		pButton.className = "";
		pButton.className = "play";
	}
}

//Play and Pause
function playA() {
	// start music
	if (music.paused) {
		music.play();
		// remove play, add pause
		pButton.className = "";
		pButton.className = "pause";
	} else { // pause music
		music.pause();
		// remove pause, add play
		pButton.className = "";
		pButton.className = "play";
	}
}

// Gets audio file duration
music.addEventListener("canplaythrough", function () {
	duration = music.duration;  
}, false);
 
function handleMusicEnd2() {
    setTimeout(function() {
        pButton.classList.remove("pause");
        pButton.classList.add("play");
        $('#story').removeClass('hej3');
        $('#story').addClass('hidden');
        $("#audioplayer").removeClass('on');
        $("#audioplayer").addClass('add');
    }, 100);
}
 
// Przypisanie funkcji do zdarzenia 'ended' dla elementu 'music2'
music.addEventListener("ended", handleMusicEnd2);

var musicA2 = document.getElementById('musicA2'); // id for the new audio element
var duration2; // Duration of the new audio clip
var pButtonA2 = document.getElementById('pButtonA2'); // play button for the new audio

var playheadA2 = document.getElementById('playheadA2'); // playhead for the new audio

var timelineA2 = document.getElementById('timelineA2'); // timeline for the new audio
// timeline width adjusted for playhead
var timelineWidthA2 = timelineA2.offsetWidth - playheadA2.offsetWidth;

// timeupdate event listener for the new audio
musicA2.addEventListener("timeupdate", timeUpdateA2, false);

// Makes timeline clickable for the new audio
timelineA2.addEventListener("click", function (event) {
    moveplayheadA2(event);
    musicA2.currentTime = duration2 * clickPercentA2(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth for the new audio
function clickPercentA2(e) {
    return (e.pageX - timelineA2.offsetLeft) / timelineWidthA2;
}

// Makes playhead draggable for the new audio
playheadA2.addEventListener('mousedown', mouseDownA2, false);
window.addEventListener('mouseup', mouseUpA2, false);

// Boolean value so that mouse is moved on mouseUp only when the playhead is released for the new audio
var onplayheadA2 = false;
// mouseDown EventListener for the new audio
function mouseDownA2() {
    onplayheadA2 = true;
    window.addEventListener('mousemove', moveplayheadA2, true);
    musicA2.removeEventListener('timeupdate', timeUpdateA2, false);
}
// mouseUp EventListener for the new audio
// getting input from all mouse clicks
function mouseUpA2(e) {
    if (onplayheadA2 == true) {
        moveplayheadA2(e);
        window.removeEventListener('mousemove', moveplayheadA2, true);
        // change current time for the new audio
        musicA2.currentTime = duration2 * clickPercentA2(e);
        musicA2.addEventListener('timeupdate', timeUpdateA2, false);
    }
    onplayheadA2 = false;
}
// mousemove EventListener for the new audio
// Moves playhead as user drags for the new audio
function moveplayheadA2(e) {
    var newMargLeft = e.pageX - timelineA2.offsetLeft;
    if (newMargLeft >= 0 && newMargLeft <= timelineWidthA2) {
        playheadA2.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playheadA2.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidthA2) {
        playheadA2.style.marginLeft = timelineWidthA2 + "px";
    }
}

// timeUpdate for the new audio
// Synchronizes playhead position with current point in audio for the new audio
function timeUpdateA2() {
    var playPercent = timelineWidthA2 * (musicA2.currentTime / duration2);
    playheadA2.style.marginLeft = playPercent + "px";
    if (musicA2.currentTime == duration2) {
        pButtonA2.className = "";
        pButtonA2.className = "play";
    }
}

// Play and Pause for the new audio
function playA2() {
    // start music for the new audio
    if (musicA2.paused) {
        musicA2.play();
        // remove play, add pause for the new audio
        pButtonA2.classList.remove("playA2");
        pButtonA2.classList.add("pauseA2");
    } else { // pause music for the new audio
        musicA2.pause();
        // remove pause, add play for the new audio
        pButtonA2.classList.remove("pauseA2");
        pButtonA2.classList.add("playA2");
    }
}

// Gets audio file duration for the new audio
musicA2.addEventListener("canplaythrough", function () {
    duration2 = musicA2.duration;  
}, false);

function handleMusicEndA2() {
    setTimeout(function() {
        pButtonA2.classList.remove("pauseA2");
        pButtonA2.classList.add("playA2");
        $('#story').removeClass('hej3');
        $('#story').addClass('hidden');
        $("#audioplayer").removeClass('on');
        $("#audioplayer").addClass('add');
    }, 100);
}
 
// Przypisanie funkcji do zdarzenia 'ended' dla elementu 'music2'
musicA2.addEventListener("ended", handleMusicEndA2);

var musicA3 = document.getElementById('musicA3'); // id for the new audio element
var duration3; // Duration of the new audio clip
var pButtonA3 = document.getElementById('pButtonA3'); // play button for the new audio

var playheadA3 = document.getElementById('playheadA3'); // playhead for the new audio

var timelineA3 = document.getElementById('timelineA3'); // timeline for the new audio
// timeline width adjusted for playhead
var timelineWidthA3 = timelineA3.offsetWidth - playheadA3.offsetWidth;

// timeupdate event listener for the new audio
musicA3.addEventListener("timeupdate", timeUpdateA3, false);

// Makes timeline clickable for the new audio
timelineA3.addEventListener("click", function (event) {
    moveplayheadA3(event);
    musicA3.currentTime = duration3 * clickPercentA3(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth for the new audio
function clickPercentA3(e) {
    return (e.pageX - timelineA3.offsetLeft) / timelineWidthA3;
}

// Makes playhead draggable for the new audio
playheadA3.addEventListener('mousedown', mouseDownA3, false);
window.addEventListener('mouseup', mouseUpA3, false);

// Boolean value so that mouse is moved on mouseUp only when the playhead is released for the new audio
var onplayheadA3 = false;
// mouseDown EventListener for the new audio
function mouseDownA3() {
    onplayheadA3 = true;
    window.addEventListener('mousemove', moveplayheadA3, true);
    musicA3.removeEventListener('timeupdate', timeUpdateA3, false);
}
// mouseUp EventListener for the new audio
// getting input from all mouse clicks
function mouseUpA3(e) {
    if (onplayheadA3 == true) {
        moveplayheadA3(e);
        window.removeEventListener('mousemove', moveplayheadA3, true);
        // change current time for the new audio
        musicA3.currentTime = duration3 * clickPercentA3(e);
        musicA3.addEventListener('timeupdate', timeUpdateA3, false);
    }
    onplayheadA3 = false;
}
// mousemove EventListener for the new audio
// Moves playhead as user drags for the new audio
function moveplayheadA3(e) {
    var newMargLeft = e.pageX - timelineA3.offsetLeft;
    if (newMargLeft >= 0 && newMargLeft <= timelineWidthC) {
        playheadA3.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playheadA3.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidthA3) {
        playheadA3.style.marginLeft = timelineWidthA3 + "px";
    }
}

// timeUpdate for the new audio
// Synchronizes playhead position with current point in audio for the new audio
function timeUpdateA3() {
    var playPercent = timelineWidthA3 * (musicA3.currentTime / duration3);
    playheadA3.style.marginLeft = playPercent + "px";
    if (musicA3.currentTime == duration3) {
        pButtonA3.className = "";
        pButtonA3.className = "play";
    }
}

// Play and Pause for the new audio
function playA3() {
    // start music for the new audio
    if (musicA3.paused) {
        musicA3.play();
        // remove play, add pause for the new audio
        pButtonA3.classList.remove("playA3");
        pButtonA3.classList.add("pauseA3");
    } else { // pause music for the new audio
        musicA3.pause();
        // remove pause, add play for the new audio
        pButtonA3.classList.remove("pauseA3");
        pButtonA3.classList.add("playA3");
    }
}

// Gets audio file duration for the new audio
musicA3.addEventListener("canplaythrough", function () {
    duration3 = musicA3.duration;  
}, false);

function handleMusicEndA3() {
    setTimeout(function() {
        pButtonA3.classList.remove("pauseA3");
        pButtonA3.classList.add("playA3");
        $('#story').removeClass('hej3');
        $('#story').addClass('hidden');
    }, 100);
}
 
// Przypisanie funkcji do zdarzenia 'ended' dla elementu 'music2'
musicA3.addEventListener("ended", handleMusicEndA3);