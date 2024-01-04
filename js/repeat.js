var clickCount1 = 0;
var	clickCount2 = 0;
var clickCount1b = 0;
var clickCount2b = 0;	
	function changeText1() {
    var textToShow1 = document.getElementById("trening");
	    var textToShow2 = document.getElementById("storyplay");
	    clickCount1++;
// Liczba dostępnych tekstów dla Treningu

    if (clickCount1 === 0 && zmienTekstGotowa) {
        textToShow1.textContent = "Trening nr 1";
        changeText2();
    } else if (clickCount1 === 1 && zmienTekstGotowa) {
		textToShow1.classList.add("enlarged");
        textToShow1.textContent = 'IS';
		textToShow2.textContent = "...";
        playb();
        changeText2();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    } else if (clickCount1 === 2 && zmienTekstGotowa) {
		textToShow1.classList.add("enlarged2");
        textToShow1.textContent = "IS POWTÓRZ(2)";
		textToShow2.textContent = "HISTORIA DLA IS";
        playb();
        changeText2();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    } else if (clickCount1 === 3 && zmienTekstGotowa) {
        textToShow1.textContent = "IS\n POWTÓRZ(3)";
        playb();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    } else if (clickCount1 === 4 && zmienTekstGotowa) {
        textToShow1.textContent = "IS\n POWTÓRZ(4)";
        playb();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    }
}

function changeText2() {
    var textToShow2 = document.getElementById("storyplay");
// Liczba dostępnych tekstów dla Storyplay
    clickCount2++;
    if (clickCount2 === 1 && zmienTekstGotowa) {
        textToShow2.textContent = "HISTORIA(2) DLA IS";
        play();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    } else if (clickCount2 === 2 && zmienTekstGotowa) {
        textToShow2.textContent = "HISTORIA(3) DLA IS";
        play();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    }
}

	function changeText1b() {
    var textToShow1b = document.getElementById("trening");
	    var textToShow2b = document.getElementById("storyplay");
	    clickCount1b++;
// Liczba dostępnych tekstów dla Treningu

    if (clickCount1b === 0 && zmienTekstGotowab) {
        textToShow1b.textContent = "Trening nr 1";
        changeText2b();
    } else if (clickCount1b === 1 && zmienTekstGotowab) {
		textToShow1b.classList.add("enlarged");
        textToShow1b.textContent = "OBEDIENT";
		textToShow2b.textContent = "...";
        playb();
        changeText2b();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    } else if (clickCount1b === 2 && zmienTekstGotowab) {
		textToShow1b.classList.add("enlarged2");
        textToShow1b.textContent = "OBEDIENT POWTÓRZ(2)";
		textToShow2b.textContent = "HISTORIA DLA OBEDIENT";
        playb();
        changeText2b();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    } else if (clickCount1b === 3 && zmienTekstGotowab) {
		textToShow1b.classList.add("enlarged2");
        textToShow1b.textContent = "OBEDIENT POWTÓRZ(3)";
        playb();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
		changeText2b();
    } else if (clickCount1b === 4 && zmienTekstGotowab) {
		textToShow1b.classList.add("enlarged2");
        textToShow1b.textContent = "OBEDIENT POWTÓRZ(4)";
        playb();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
		changeText2b();
    }
}

function changeText2b() {
    var textToShow2b = document.getElementById("storyplay");
// Liczba dostępnych tekstów dla Storyplay
    clickCount2b++;
    if (clickCount2b === 1 && zmienTekstGotowab) {
        textToShow2b.textContent = "POWTÓRZ SŁOWO nr 3(2)";
        play();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    } else if (clickCount2b === 2 && zmienTekstGotowab) {
        textToShow2b.textContent = "POWTÓRZ HISTORIE nr 3(3)";
        play();
        $('#story').removeClass('hidden');
        $('#story').addClass('hej3');
    }
}