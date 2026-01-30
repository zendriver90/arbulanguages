function generateFiszkaBlock(fiszka, lessonId2, category) {

    var currentStoryButtonName = ''; // Zmienna lokalna
    console.log(`Generating fiszka block for ID100`, category);

    // Tworzenie kontenera fiszki

    $(document).ready(function () {

        function initAudio(fiszkaId) {
        }

// TWORZENIE KONTENERA FISZKI
        let fiszkaContainer = $('<div>').addClass('fiszka fiszka-' + fiszka.id);
console.log('Hej4442', fiszkaContainer);

const imgContainer = $('<div>').addClass('fiszka_img_container');
        fiszka.entries.forEach(entry => {
            // Tworzymy kontener dla zdjęć

            // Sprawdzamy, czy img to tablica (może być więcej niż jedno zdjęcie)
            if (Array.isArray(entry.img)) {
                entry.img.forEach((imgObj, index) => {
                    const imgElement = $('<img class="fiszka_img">')
                        .attr('src', imgObj.src)  // Dodanie URL obrazka
                        .attr('alt', imgObj.alt); // Dodanie ALT
                    imgContainer.append(imgElement);
                    if (index > 0) {
                        imgElement.hide(); // Ukrywanie dodatkowych zdjęć
                    }
                });
            } else if (typeof entry.img === 'object' && entry.img !== null) {
                // Jeśli img to pojedynczy obiekt
                const imgElement = $('<img class="fiszka_img">')
                    .attr('src', entry.img.src)
                    .attr('alt', entry.img.alt);
                imgContainer.append(imgElement);
            }

            // Tworzymy kontener dla historii
            const storyContainer = $('<div>').addClass('story').html(entry.story.text);

            // Dodajemy kontener obrazków i historii do kontenera fiszki
            const fiszkaContainer = $('<div>').addClass('fiszka');

        });
            fiszkaContainer.append(imgContainer);
        const selectedLikes = [];
        console.log('hej10', selectedLikes);

// Funkcja do obsługi kliknięcia na przycisk "likeButton"
        function handleLikeButtonClick(index) {
            const likeButton = $(this);
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            const selectedLike = likeButton.text();
            console.log('Zaktualizowano przycisk dla indeksu:', index);
            console.log('Aktualne wartości selectedLikes:', selectedLikes);
        }
        const likeButton = $('<a>').addClass('like').attr('href', '#');
        const likeText = $('<span>').text('Śmieszna historia');
        likeButton.append(likeText);
        fiszkaContainer.append(likeButton);

        // Tworzymy kontener opcji "like" i dodajemy opcje do kontenera
        const likeOptionsContainer = $('<div>').attr('id', 'likeOptionsContainer');
        const likeOption1 = createLikeOption('thumbsUp', '👍 Śmieszne');
        const likeOption2 = createLikeOption('heart', '❤️ Miłe');
        const likeOption3 = createLikeOption('star', '⭐ Pamiętliwe');
        likeOptionsContainer.append(likeOption1, likeOption2, likeOption3);

        // Dodajemy kontener opcji "like" do docelowego kontenera
        likeButton.append(likeOptionsContainer);

        // Ukrywamy kontener opcji "like"
        likeOptionsContainer.hide();

        // Obsługa zdarzenia hover na przycisku "like"
        likeButton.hover(function () {
            const buttonPosition = likeButton.offset();
            const buttonWidth = likeButton.outerWidth();

            // Pozycjonujemy kontener opcji "like" nad przyciskiem
            likeOptionsContainer.css({
                top: buttonPosition.top - likeOptionsContainer.outerHeight() - 10,
                left: buttonPosition.left + (buttonWidth / 2) - (likeOptionsContainer.outerWidth() / 2),
                backgroundColor: '#f0f0f0', // Dodajemy szary kolor tła
            }).fadeIn('fast');
        }, function () {
            // Ukrywamy kontener opcji "like" po zjechaniu z przycisku
            likeOptionsContainer.fadeOut('fast');
        });

// Funkcja do umieszczania ikony obok przycisku "story_button" w odpowiedniej fiszce
        function addLikeIconToStoryButton(index, like) {
        }

// Funkcja do zapisywania wybranego "like"
        function saveSelectedLike(selectedLike, text) {
        }

        // Funkcja do pobierania ikony dla wybranego "like"
        function getLikeIcon(like) {
        }

        const hashtagContainer = $('<a>').addClass('hashtag-container').attr('href', '#');
        fiszkaContainer.append(hashtagContainer);

// Funkcja showStory z obsługą id.fiszki
function showStory(idFiszki) {
}

        function selectLikeButton(index) {
        }
        // NIEZNACZĄCE WYJAŚNIENIE SŁOWA
        const sentenceDiv = $('<div>').attr('id', 'part');
        fiszka.sentence.forEach(word => {
            sentenceDiv.append($('<button>').text(word));
        });
        // Dodanie diva z przyciskami do kontenera fiszki
        fiszkaContainer.append(sentenceDiv);

        console.log('Przed utworzeniem wordDiv');
        const wordDiv = $('<div>').attr('id', 'word');
        const button = $('<button>').attr('id', 'storyone').html('<b>' + fiszka.desc + '</b>');
        const audio = $('<audio>').attr({
            id: 'music' + fiszka.id,
            preload: 'true'
        });
        const source = $('<source>').attr('src', fiszka.word);
        audio.append(source);
        const audioplayerDiv = $('<div>').attr('id', 'audioplayer' + fiszka.id).addClass('audioplayer'); // Dodano klasę 'audioplayer'
        const pButton = $('<button>').attr('id', 'pButton' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

        pButton.css({
            height: '60px',
            width: '60px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            float: 'left',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        });

        audioplayerDiv.append(pButton);
        wordDiv.append(button);
        wordDiv.append(audio);
        wordDiv.append(audioplayerDiv);
        fiszkaContainer.append(wordDiv);
        console.log('Po utworzeniu wordDiv');

// DODANIE MNEMOTECHNIKI
if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
            // Jeśli story jest tablicą, iterujemy przez wszystkie jej elementy
    fiszka.entries.forEach((story, index) => {
                const storyContainer = $('<div>').addClass('fiszka_story story-' + index).html(index);
                fiszkaContainer.append(storyContainer);
                console.log("Dodano story: ", index);  // Debugowanie
            });
        }
        console.log('Przed utworzeniem wordDiv');

// Utworzenie reszty elementów zgodnie z istniejącym kodem
        const wordDiv2 = $('<div>').attr('id', 'word2');
        const audio2 = $('<audio>').attr({
            id: 'music2' + fiszka.id,
            preload: 'true'
        });
        const source2 = $('<source>').attr('src', fiszka.word);
        audio2.append(source2);
        const audioplayerDiv2 = $('<div>').attr('id', 'audioplayer2' + fiszka.id).addClass('audioplayer2'); // Dodano klasę 'audioplayer'
        const pButton2 = $('<button>').attr('id', 'pButton2' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

// Utworzenie elementów za pomocą jQuery
        const timelineDiv = $('<div>').attr('id', 'timeline' + fiszka.id);
        const playheadDiv = $('<div>').attr('id', 'playhead' + fiszka.id);

// Dodanie playhead do timeline
        timelineDiv.append(playheadDiv);

// Dodanie elementów do odpowiednich kontenerów
        audioplayerDiv.append(pButton2);
        wordDiv2.append(audio2);
        wordDiv2.append(audioplayerDiv2);
        wordDiv2.append(timelineDiv); // Dodano timeline do wordDiv
        fiszkaContainer.append(wordDiv2);

        console.log('Po utworzeniu wordDiv');
    let initialSpecificLesson2Ref;
    let specificLesson2Ref;
    let lastClickedIndex = null;
    let lastApprovedIndex = null;
    let approvedIndexes = [];
    let approvedColors = [];

    let index10 = [];

    if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
} else if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
        }


let selectedFiszka = null; // Przechowuje wybraną fiszkę

$('.fiszka_button_trening').click(function () {
  const fiszka = $(this).data('fiszka'); // Pobierz dane fiszki z elementu
  selectedFiszka = fiszka; // Zapisz wybraną fiszkę
  scheduleNotification(); // Uruchom pierwsze powiadomienie od razu
});

// Funkcja do wyświetlania powiadomienia
function showNotification(fiszka) {
}

// Funkcja do wyświetlania powiadomienia co minutę
function scheduleNotification() {
}

// Ustawienie interwału co 60 sekund (1 minuta)
const intervalId = setInterval(scheduleNotification, 60000);


        console.log('hej555ax', lessons2b[2]);
// DODANIE PRZYCISKU TRENING
        fiszkaContainer.append($('<button>').text('TRENING').addClass('fiszka_button fiszka_button_trening').click(function () {

            activateFiszka(fiszka.id, false);

            let id = fiszka.id;
            let parametr = '';

            // Sprawdzenie, czy idFiszki jest tablicą
            if (Array.isArray(fiszka.id)) {
                id = fiszka.id[0];         // Pierwszy element tablicy jako id
                parametr = fiszka.id[1] || ''; // Drugi element tablicy jako parametr, jeśli istnieje
            }

            // Tworzenie selektora na podstawie id i parametru
            const className = `fiszka-${id}\\,${parametr}`;
            const selector = `.${className}`;
            console.log('hej201', parametr);
            let first = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[0]) {
                first = true;
                console.log('hej200', first);

            }
            let second = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[1]) {
                second = true;
                console.log('hej200', second);

            }
            let third = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[2]) {
                third = true;
                console.log('hej200', third);

            }

            console.log("Trening clicked on fiszka nr " + fiszka.id);
            console.log("lessonId2:", lessonId2);
            console.log("nazwa", lessons2b[2]);
            // Wyswietlenie danej wartości img dla danej fiszka.id
            const specificLesson2 = specificLesson2Ref || initialSpecificLesson2Ref;
            console.log("img dla fiszki o id", fiszka.id, ":", specificLesson2);
            specificLesson2Ref = fiszka.img;
            // Znajdź indeks dla danej fiszki w tablicy lessons2[lessonId2]
            console.log('story55', specificLesson2Ref);
            // Używamy lastClickedIndex zamiast index
            imgIndex = showStory(lastClickedIndex); // Wywołanie funkcji showStory i zapisanie zwróconego indeksu obrazka
            console.log('działa', specificLesson2Ref);
            aktywujObrazek(first, second, third, specificLesson2, 'obrazek-container2b', true, fiszka, imgIndex); // Przekazanie imgIndex do funkcji aktywujObrazek
            // Dodajemy zatwierdzony indeks do tablicy
            approvedIndexes.push(lastClickedIndex);
            console.log(approvedIndexes);

            // Dodanie zatwierdzonej klasy imgIndex do fiszkaContainer po kliknięciu przycisku "TRENING"
            fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
            
        }));

        fiszkaContainer.append($('<button>').text('ZNAM').addClass('fiszka_button fiszka_button_znam').click(function () {
            console.log("Znam clicked on fiszka nr " + fiszka.id);
            activateFiszka(fiszka.id, true);
        }));
// ================= AUDIO + FRAZY =================
if (fiszka.word2 || fiszka.word3 || fiszka.word4) {

    const phrasesButton = $('<button>')
        .addClass('phrases-button')
        .text('PHRASES')
        .css({
            height: '60px',
            marginLeft: '10px',
            padding: '0 12px',
            cursor: 'pointer'
        });

    const phrasesContainer = $('<div>')
        .addClass('phrases-container')
        .css({
            display: 'none',
            marginTop: '10px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        });

    async function createPhrase(wordArray, index) {
        if (!wordArray || wordArray.length < 2) return; // tablica musi mieć co najmniej 2 elementy

        const phraseText = wordArray[0];
        const phraseAudioSrc = wordArray[1];

        const audioId = `phrase-audio-${fiszka.id}-${index}`.replace(/,/g, '-');
        const buttonId = `phrase-btn-${fiszka.id}-${index}`.replace(/,/g, '-');

        const phraseRow = $('<div>').css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
        });

        const phraseLabel = $('<span>').html(phraseText).css({ fontWeight: 'bold' });

        const phraseAudio = $('<audio>')
            .attr({ id: audioId, preload: 'auto', controls: false });

        const phrasePlayButton = $('<button>')
            .attr('id', buttonId)
            .addClass('pButton play')
            .css({
                width: '40px',
                height: '40px',
                backgroundSize: '70%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                border: '1px solid'
            })
            .on('click', async function () {
                const audioEl = document.getElementById(audioId);
                if (!audioEl) return;

                // Pobranie pliku audio jako blob i przypisanie do audio.src
                if (!audioEl.src) {
                    try {
                        const res = await fetch(phraseAudioSrc);
                        const blob = await res.blob();
                        const blobUrl = URL.createObjectURL(blob);
                        audioEl.src = blobUrl;
                        await audioEl.load();
                    } catch (err) {
                        console.log('Audio fetch error:', err);
                        return;
                    }
                }

                audioEl.play().catch(err => console.log('Audio play error:', err));
                $(this).toggleClass('play pause');
            });

        phraseRow.prepend(phrasePlayButton);
        phraseRow.append(phraseLabel, phraseAudio);
        phrasesContainer.append(phraseRow);
    }

    // Tworzymy wszystkie frazy, jeśli istnieją
    createPhrase(fiszka.word2, 1);
    createPhrase(fiszka.word3, 2);
    createPhrase(fiszka.word4, 3);

    phrasesButton.on('click', function () {
        $(this).toggleClass('active');
        phrasesContainer.slideToggle(200);
    });

    audioplayerDiv.append(phrasesButton);
    fiszkaContainer.append(phrasesContainer);
}
        // WYWOŁANIE HASHTAGU
        function updateButtonName(buttonName, fiszkaContainer) {
        }
        // Dodanie kontenera fiszki do body
        $('.grid-containerb').append(fiszkaContainer);
        console.log(`Generated fiszka block for ID: [${fiszka.id.join(', ')}]`);
        initAudio(fiszka.id);
        restoreLearnedClasses();
    });
}