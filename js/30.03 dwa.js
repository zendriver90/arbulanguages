function addToTrainingList(idFiszki) {
    // dodaj do local storage do treningu
    addFiszkaToLesson(idFiszki);
}
function activateFiszka(idFiszki, znam) {
    let id = idFiszki;
    let parametr = '';
    if (Array.isArray(idFiszki)) {
        id = idFiszki[0];
        parametr = idFiszki[1] || '';
    }
    const className = `fiszka-${id}\\,${parametr}`;
    const selector = `.${className}`;
    console.log(selector);
    if (znam) {
        // Zapisz klasę 'active' lub zmień z 'active2' na 'active'
        if ($(selector).hasClass('active2')) {
            $(selector).removeClass('active2').addClass('active');
            updateLearnedClass(className, 'active');
        } else {
            $(selector).addClass('active');
            saveLearnedClass(className, 'active');
        }
        setAsLearned(id);
        console.log(`Set fiszka with ID ${id} as learned.`);
    } else {
        // Zapisz klasę 'active2' lub usuń 'active'
        $(selector).removeClass('active').addClass('active2');
        saveLearnedClass(className, 'active2');
        addToTrainingList(id);
        console.log(`Clicked - fiszka with ID ${id} added to training list.`);
    }
}
// Funkcja do zapisywania klasy w Local Storage
function saveLearnedClass(className, classToAdd) {
    let learnedClasses = getLearned2();
    const existingEntryIndex = learnedClasses.findIndex(entry => entry.className === className);
    if (existingEntryIndex !== -1) {
        // Jeśli już istnieje, zaktualizuj klasę
        learnedClasses[existingEntryIndex].classToAdd = classToAdd;
    } else {
        // W przeciwnym razie dodaj nowy wpis
        learnedClasses.push({className, classToAdd});
    }
    localStorage.setItem('ColorClass', JSON.stringify(learnedClasses));
    console.log('ColorClass', learnedClasses);
}
// Funkcja do aktualizacji klasy 'active' w Local  Storage
function updateLearnedClass(className, classToUpdate) {
    let learnedClasses = getLearned2();
    const existingEntryIndex = learnedClasses.findIndex(entry => entry.className === className);
    if (existingEntryIndex !== -1) {
        // Jeśli już istnieje, zaktualizuj klasę
        learnedClasses[existingEntryIndex].classToAdd = classToUpdate;
        localStorage.setItem('ColorClass', JSON.stringify(learnedClasses));
        console.log('ColorClass', learnedClasses);
    }
}
// Funkcja do odzyskiwania klas z Local Storage
function getLearned2() {
    const storedColorClass = localStorage.getItem('ColorClass');
    return storedColorClass ? JSON.parse(storedColorClass) : [];
}
// Wywołanie klas po odświeżeniu strony
$(document).ready(function () {
    const learnedClasses = getLearned2();
    learnedClasses.forEach(function (entry) {
        $(`.${entry.className}`).addClass(entry.classToAdd);
    });
});
function generateFiszkaBlock(fiszka, lessonId2) {
    var currentStoryButtonName = ''; // Zmienna lokalna
    console.log(`Generating fiszka block for ID: [${fiszka.id.join(', ')}]`);
    // Tworzenie kontenera fiszki
    $(document).ready(function () {
        function initAudio(fiszkaId) {
            var audioId = 'music' + fiszkaId;
            var pButtonId = 'pButton' + fiszkaId;
            var music = document.getElementById(audioId);
            var pButton = document.getElementById(pButtonId);
            console.log('Initialized audio element with ID:', audioId);
            console.log('Initialized play/pause button with ID:', pButtonId);
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
                console.log('Audio playback status:', music.paused ? 'Paused' : 'Playing');
            }
            // Gets audio file duration
            music.addEventListener("canplaythrough", function () {
                var duration = music.duration;
                console.log('Audio duration:', duration);
            }, false);
            // Dodajemy event listener do przycisku play/pause
            pButton.addEventListener('click', playb);
            console.log('Audio initialization completed.');
        }
// TWORZENIE KONTENERA FISZKI
        const fiszkaContainer = $('<div>').addClass('fiszka fiszka-' + fiszka.id);
        // Pobierz istniejące wartości z localStorage (jeśli istnieją)
        const savedMarginTop = localStorage.getItem('marginTop');
        const savedMarginBottom = localStorage.getItem('marginBottom');
        console.log('Saved values from localStorage:', savedMarginTop, savedMarginBottom);
        // Ustaw domyślne wartości lub skorzystaj z zapisanych wartości z localStorage
        let marginTop = savedMarginTop !== null ? JSON.parse(savedMarginTop) : {};
        let marginBottom = savedMarginBottom !== null ? JSON.parse(savedMarginBottom) : {};
        console.log('Calculated values:', marginTop, marginBottom);
        // Utwórz lub pobierz unikalne wartości marginesów dla danej fiszki
        const fiszkaId = fiszka.id.join('-');
        // Ustaw margines na zero dla pierwszej fiszki
        marginTop[fiszkaId] = marginTop[fiszkaId] !== undefined ? marginTop[fiszkaId] : fiszkaId === '1' ? 0 : Math.floor(Math.random() * 160);
        marginBottom[fiszkaId] = marginBottom[fiszkaId] !== undefined ? marginBottom[fiszkaId] : fiszkaId === '1' ? 0 : Math.floor(Math.random() * 80);
        // Zapisz wartości marginesów do localStorage
        localStorage.setItem('marginTop', JSON.stringify(marginTop));
        localStorage.setItem('marginBottom', JSON.stringify(marginBottom));
        console.log('Values after saving to localStorage:', marginTop, marginBottom);
        // Ustaw marginesy w elemencie fiszkaContainer
        fiszkaContainer.css({
            'margin-top': `${fiszka.id[0] % 2 === 0 ? -marginTop[fiszkaId] + 170 : -marginTop[fiszkaId] + 40}px`,
            'margin-bottom': `${fiszka.id[0] % 2 !== 0 ? marginBottom[fiszkaId] + 70 : -marginBottom[fiszkaId] + 50}px`
        });
        // DODANIE OBRAZKA
        const imgContainer = $('<div>').addClass('fiszka_img_container');
        if (Array.isArray(fiszka.img) && fiszka.img.length > 0) {
            fiszka.img.forEach((imgSrc, index) => {
                const imgElement = $('<img class="fiszka_img">').attr('src', imgSrc);
                imgContainer.append(imgElement);
                if (index > 0) {
                    imgElement.hide();
                }
            });
        } else if (typeof fiszka.img === 'string') {
            // Jeśli jest tylko jedno zdjęcie, dodajemy je do imgContainer dla każdej fiszki
            const imgElement = $('<img class="fiszka_img">').attr('src', fiszka.img);
            imgContainer.append(imgElement);
        }
        fiszkaContainer.append(imgContainer); //DODANIE OBRAZKA
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
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            if (storyButton.length === 0) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }
            // Tworzymy kontener dla ikony i dodajemy ikonę
            const iconContainer = $('<div>').addClass('likeIconContainer');
            const likeIcon = getLikeIcon(like);
            iconContainer.append(likeIcon);
            // Usuwamy wcześniej dodaną ikonę, jeśli istnieje
            storyButton.find('.likeIconContainer').remove();
            // Dodajemy kontener z ikoną do przycisku "story_button"
            storyButton.append(iconContainer);
        }
function createLikeOption(like, text) {
    const likeOption = $('<div>').addClass('likeOption').attr('data-like', like).text(text);
    // Dodajemy efekt zmiany koloru na lekko ciemniejszy szary po najechaniu myszką na pojedynczą opcję "like"
    likeOption.hover(
        function () {
            likeOption.css('background-color', '#dcdcdc'); // Lekko ciemniejszy szary kolor tła dla opcji "like"
        },
        function () {
            likeOption.css('background-color', ''); // Usuwamy styl, aby wrócić do domyślnego tła opcji "like"
        }
    );
    let likeCounter = 0; // Dodajemy licznik polubień dla każdej opcji "like"
    const counterDiv = $('<div>').addClass('likeCounterDiv'); // Nowy div na licznik
    // Dodajemy ikonę do licznika
    const likeIcon = getLikeIcon(like);
    const iconContainer = $('<span>').addClass('likeIconContainer').append(likeIcon);
    counterDiv.append(iconContainer);
    const likeCounterSpan = $('<span>').addClass('likeCounter').text(` ${likeCounter} `);
    counterDiv.append(likeCounterSpan); // Licznik jest dodany po ikonie
    imgContainer.append(counterDiv); // Dodajemy licznik na zewnątrz kontenera przycisków
    likeOption.click(function (event) {
        event.preventDefault(); // Zapobiegamy domyślnej akcji przycisku
        // Inkrementujemy licznik polubień za każdym razem, gdy opcja "like" zostanie wybrana
        likeCounter++;
        likeCounterSpan.text(` ${likeCounter} `);
        const selectedLike = $(this).data('like');
        const selectedIcon = getLikeIcon(selectedLike);
        likeText.text(text);
        likeButton.removeClass('liked');
        addLikeIconToStoryButton(lastClickedIndex, selectedLike); // Dodaj ikonę do story_button na podstawie wybranej opcji "like"
        // Sprawdź, czy index już istnieje w tablicy
        const existingIndex = selectedLikes.findIndex(item => item.index === lastClickedIndex);
        if (existingIndex !== -1) {
            // Jeśli index istnieje, zaktualizuj wartość
            selectedLikes[existingIndex].like = selectedLike;
        } else {
            // Jeśli index nie istnieje, dodaj nowy wpis
            selectedLikes.push({index: lastClickedIndex, like: text}); // Dodaj tylko nazwę "like"
        }
        likeOptionsContainer.fadeOut('fast');
        saveSelectedLike(selectedLike, text); // Przekazujemy nazwę "like" i tekst do funkcji saveSelectedLike
    });
    return likeOption;
}
// Funkcja do zapisywania wybranego "like"
        function saveSelectedLike(selectedLike, text) {
            // Tutaj możesz zapisać wybrany "like" w odpowiednim kontekście, np. wysłać go na serwer, zapisać w lokalnym magazynie itp.
            console.log('Wybrany like:', text);
            console.log('Tekst:', text);
            // Jeśli chcesz użyć go w innych miejscach, możesz przekazać go jako argument do innych funkcji lub zmiennych.
        }
        // Funkcja do pobierania ikony dla wybranego "like"
        function getLikeIcon(like) {
            let icon;
            switch (like) {
                case 'thumbsUp':
                    icon = $('<span class="likeIcon">👍</span>');
                    break;
                case 'heart':
                    icon = $('<span class="likeIcon">❤️</span>');
                    break;
                case 'star':
                    icon = $('<span class="likeIcon">⭐</span>');
                    break;
                default:
                    icon = $('<span class="likeIcon">👍</span>');
            }
            return icon;
        }
        const hashtagContainer = $('<a>').addClass('hashtag-container').attr('href', '#');
        fiszkaContainer.append(hashtagContainer);
        function showStory(index) {
            // Uzyskajmy odniesienie do konkretnej fiszki, na którą kliknęliśmy
            const currentFiszka = fiszkaContainer;
            // Ukrywamy wszystkie historie w tej konkretnej fiszce
            currentFiszka.find('.fiszka_story').hide();
            // MNEMOTECHNIKA
            if (fiszka.story && fiszka.story.length > 0) {
                currentFiszka.find('.story-' + index).show();
            }
            // Ukrywamy wszystkie obrazy
            currentFiszka.find('.fiszka_img').hide();
            // WYBRANY OBRAZ
            if (fiszka.img && fiszka.img.length > 0) {
                imgIndex = Math.min(index, fiszka.img.length - 1); // Przypisz imgIndex
                currentFiszka.find('.fiszka_img').eq(imgIndex).show();
                specificLesson2Ref = fiszka.img[imgIndex];
                // Wyświetl console log z indeksem obrazka
                console.log("Index obrazka:", imgIndex);
                lastClickedIndex = index;
                // Wybierz odpowiedni "likeButton" dla danego indeksu
                selectLikeButton(index);
            }
            // HASHTAG
            const selectedCategoryIndex = index * 2;
            const value = fiszka.category1[selectedCategoryIndex];
            const hashtag = fiszka.category1[selectedCategoryIndex + 1];
            hashtagContainer.empty(); // Wyczyść poprzednie hashtagi
            hashtagContainer.text(`${value} #${hashtag}`);
            console.log('Calculated imgIndex:', imgIndex);
            return imgIndex; // Zwracamy indeks obrazka
        }
        function selectLikeButton(index) {
            console.log("Wybór likeButton dla indeksu:", index);
            const storyButton = $('.story_button').eq(index);
            if (!storyButton.length) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }
            const likeButton = storyButton.find('.like');
            likeText.find('span').remove();
            likeText.text('Śmieszna historia');
            // Sprawdź, czy index jest zawarty w tablicy selectedLikes
            const selectedLike = selectedLikes.find(item => item.index === index);
            if (selectedLike) {
                // Jeśli index istnieje w tablicy, ustaw ikonę przycisku na wartość z tablicy
                console.log("Wybrano like dla indeksu:", index, "- Like:", selectedLike.like);
                const selectedIcon = getLikeIcon(selectedLike.like); // Przekazujemy tylko nazwę ikony
                console.log('hej5', selectedIcon);
                likeText.html(selectedLike.like); // Ustawiamy ikonę
            } else {
                // Jeśli index nie istnieje, ustaw domyślny tekst
                console.log("Brak wyboru like dla indeksu:", index, "- Ustawianie domyślnego tekstu");
                likeButton.text('Śmieszna historia');
            }
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
        const source = $('<source>').attr('src', fiszka.srcWord);
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
        // DODANIE  MNEMOTECHNIKI
        if (Array.isArray(fiszka.story) && fiszka.story.length > 0) {
            fiszka.story.forEach((story, index) => {
                const storyContainer = $('<div>').addClass('fiszka_story story-' + index).html(story).hide();
                fiszkaContainer.append(storyContainer);
            });
        }
        console.log('Przed utworzeniem wordDiv');
// Utworzenie reszty elementów zgodnie z istniejącym kodem
        const wordDiv2 = $('<div>').attr('id', 'word2');
        const audio2 = $('<audio>').attr({
            id: 'music2' + fiszka.id,
            preload: 'true'
        });
        const source2 = $('<source>').attr('src', fiszka.srcWord);
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
        // Zdefiniuj zmienną początkową na poziomie wyższym
        let initialSpecificLesson2Ref;
        let specificLesson2Ref;
        let lastClickedIndex = null;
        let lastApprovedIndex = null; // Zmienna do przechowywania ostatnio zatwierdzonego indeksu
        let approvedIndexes = []; // Tablica przechowująca zatwierdzone indeksy
        let approvedColors = [];
// DODANIE PRZYCISKÓW
        if (Array.isArray(fiszka.category1)) {
            const storyButtonContainer = $('<div>'); // Kontener na przyciski
            const randomIndex = Math.floor(Math.random() * fiszka.category1.length / 2);
            let lastClickedButton; // Zmienna do przechowywania ostatnio klikniętego przycisku w danej fiszce
            fiszka.category1.slice(0, 5).forEach((category1, index) => {
                const valueIndex = index * 2; // Indeks wartości w tablicy, zaczynając od 0
                const hashtagIndex = valueIndex + 1; // Indeks hashtagu w tablicy
                const value = fiszka.category1[valueIndex];
                const hashtag = fiszka.category1[hashtagIndex];
                const displayText = `${value} #${hashtag}`;
                const storyButton = $('<button>')
                        .text(displayText)
                        .addClass('story_button')
                        .click(function () {
                            showStory(index);
                            lastClickedIndex = index;
                            // Usuwamy zieloną klasę tylko z poprzedniego przycisku w danej fiszce
                            if (lastClickedButton) {
                                lastClickedButton.removeClass('green-button');
                            }
                            // Usuwamy klasę imgIndex z poprzedniego przycisku w danej fiszce
                            $('.story_button').removeClass((index, className) => (className.match(/imgIndex-\d+/g) || []).join(' '));
                            // Dodajemy klasę imgIndexNull do przycisków, które nie zostały jeszcze zatwierdzone
                            $('.fiszka').addClass('imgIndexNull').removeClass('imgIndex-0 imgIndex-1 imgIndex-2 imgIndex-3 imgIndex-4 ');
                            // Dodajemy zieloną klasę tylko dla aktualnie klikniętego przycisku w danej fiszce
                            $(this).addClass('green-button');
                            $('.story_button').removeClass('active-button');
                            $(this).addClass('active-button');
                            $('.story_button').each(function (index) {
                                if ($(this).hasClass('orange-button')) {
                                    $(this).removeClass('green-button');
                                    $(this).addClass('orange-button');
                                }
                            });
                            // Jeśli przycisk został wcześniej zatwierdzony, przywróć jego zatwierdzoną klasę
                            if (approvedIndexes.includes(lastClickedIndex)) {
                                fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
                            }
                            // Zapisujemy ostatnio kliknięty przycisk w danej fiszce
                            lastClickedButton = $(this);
                            handleLikeButtonClick();
                        });
                if (index === randomIndex) {
                    // Przypisanie specificLesson2Ref dla przycisku o losowym indeksie
                    newImgIndex = Math.min(index, fiszka.img.length - 1); // Aktualizacja zmiennej globalnej imgIndex
                    specificLesson2Ref = fiszka.img[newImgIndex];
                    initialSpecificLesson2Ref = specificLesson2Ref;
                    console.log('hej7', newImgIndex);
                    storyButton.addClass('green-button');
                    lastClickedButton = storyButton;
                    lastApprovedIndex = index; // Ustaw ostatnio zatwierdzony indeks na indeks losowego przycisku
                }
                // Dodaj typ "like" dla tej fiszki do tablicy
                storyButtonContainer.append(storyButton);
            });
            fiszkaContainer.append(storyButtonContainer);
            // WYWOŁANIE TABLICY
            showStory(randomIndex);
            console.log(randomIndex);
            // Użycie specificLesson2Ref po załadowaniu strony
            console.log("Początkowy specificLesson2Ref:", initialSpecificLesson2Ref);
        }
        $('.fiszka_button_trening').click(function () {
            // Dodaj klasę pomarańczową tylko dla przycisku zatwierdzonego
            $('.story_button').each(function (index) {
                if ($(this).hasClass('green-button')) {
                    $(this).removeClass('green-button');
                    $(this).addClass('orange-button');
                }
            });
        });
// DODANIE PRZYCISKU TRENING
        fiszkaContainer.append($('<button>').text('TRENING').addClass('fiszka_button fiszka_button_trening').click(function () {
            activateFiszka(fiszka.id, false);
            console.log("Trening clicked on fiszka nr " + fiszka.id);
            console.log("lessonId2:", lessonId2);
            console.log("nr fiszki", lessons2[lessonId2]);
            console.log("nazwa", fiszka.key);
            // Wyswietlenie danej wartości img dla danej fiszka.id
            const specificLesson2 = specificLesson2Ref || initialSpecificLesson2Ref;
            console.log("img dla fiszki o id", fiszka.id, ":", specificLesson2);
            specificLesson2Ref = fiszka.img;
            // Znajdź indeks dla danej fiszki w tablicy lessons2[lessonId2]
            const index = lessons2[lessonId2].findIndex(item => item.id.join(', ') === fiszka.id.join(', '));
            if (index !== -1) {
                console.log("Nr fiszki:", index);
            } else {
                console.log("Fiszka nie została znaleziona w tablicy.");
            }
            console.log('Przed aktywujObrazek');
            // Używamy lastClickedIndex zamiast index
            imgIndex = showStory(lastClickedIndex); // Wywołanie funkcji showStory i zapisanie zwróconego indeksu obrazka
            aktywujObrazek(lessonId2, specificLesson2, 'obrazek-container2b', true, fiszka, imgIndex); // Przekazanie imgIndex do funkcji aktywujObrazek
            console.log('hej2', imgIndex);
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
        // WYWOŁANIE HASHTAGU
        function updateButtonName(buttonName, fiszkaContainer) {
            // Usuń poprzednią nazwę, jeśli istnieje
            fiszkaContainer.find('.fiszka_button_name').remove();
            // Ustaw nazwę w prawym dolnym rogu fiszki
            const fiszkaButtonNameContainer = $('<div>').addClass('fiszka_button_name').text(buttonName);
            fiszkaContainer.append(fiszkaButtonNameContainer);
        }
        // Dodanie kontenera fiszki do body
        $('.grid-container').append(fiszkaContainer);
        console.log(`Generated fiszka block for ID: [${fiszka.id.join(', ')}]`);
        initAudio(fiszka.id);
    });
}
function getRandomId(max, range, usedIds) {
    const start = (range - 1) * max + 1;
    const end = range * max;
    // Filtruj dostępne identyfikatory, usuwając już użyte
    const availableIds = Array.from({length: end - start + 1}, (_, index) => start + index)
            .filter(id => !usedIds.includes(id));
    if (availableIds.length === 0) {
        // W przypadku, gdy wszystkie identyfikatory zostały już użyte, zwracamy null lub możemy obsłużyć to w inny sposób
        return null;
    }
    // Losuj identyfikator z dostępnych
    const randomIndex = Math.floor(Math.random() * availableIds.length);
    const randomId = availableIds[randomIndex];
    // Dodaj użyty identyfikator do listy
    usedIds.push(randomId);
    return randomId;
}
// Funkcja do zapisywania danych do localStorage
function saveToLocalStorage(data) {
    localStorage.setItem('wylosowaneLekcje', JSON.stringify(data));
}
// Funkcja do wczytywania danych z localStorage
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('wylosowaneLekcje');
    return storedData ? JSON.parse(storedData) : null;
}
const maxRandom = 3;
let lessons2;
// Sprawdź, czy istnieją zapisane dane w localStorage
const storedLessons = loadFromLocalStorage();
if (storedLessons) {
    // Jeśli dane są zapisane, wczytaj je
    lessons2 = storedLessons;
    console.log('Wczytane dane z localStorage:', lessons2);
    // Opóźnij wywołanie funkcji do wyświetlania fiszek
    setTimeout(showFiszki2, 0);
} else {
    // Jeśli nie ma zapisanych danych, losuj i zapisz
    lessons2 = {
        1: [],
        2: [],
        3: []
    };
    // Funkcja do losowania i zapisywania danych
    function losowanie(szablon) {
        // Lista użytych identyfikatorów
        let usedIds = [];
        // Przypisanie przypadkowych id[1] dla każdej lekcji
        for (const lessonId2 in lessons2) {
            const randomId1 = getRandomId(maxRandom, szablon, usedIds);
            if (randomId1 === null) {
                console.log('Wszystkie dostępne identyfikatory zostały już użyte.');
                return;
            }
            console.log(`Lekcja ${lessonId2}: Losowe ID[1]: ${randomId1}`);
            lessons2[lessonId2] = fiszki.filter(f => f.id[1] === randomId1);
            console.log(`Lekcja ${lessonId2} przefiltrowane dane:`, lessons2[lessonId2]);
        }
        // Zapisz wylosowane dane do  localStorage
        saveToLocalStorage(lessons2);
        // Opóźnij wywołanie funkcji do wyświetlania fiszek
        setTimeout(showFiszki2, 0);
    }
    // Posortowanie fiszek w danej lekcji względem id[1] i id[0]
    for (const lessonId2 in lessons2) {
        lessons2[lessonId2].sort((a, b) => {
            if (a.id[1] !== b.id[1]) {
                return a.id[1] - b.id[1];
            }
            return a.id[0] - b.id[0];
        });
        console.log(`Sorted data for Lesson ${lessonId2}:`, lessons2[lessonId2]);
    }
    // Wywołaj funkcję losowania
    losowanie(/* dodaj tutaj odpowiednią wartość dla szablonu */);
}
// Funkcja do wyświetlania fiszek w danej lekcji
function showFiszki2() {
    for (const lessonId2 in lessons2) {
        console.log(`Lesson ${lessonId2}:`);
        if (lessons2[lessonId2].length === 0) {
            console.log("No data for this lesson and the randomly generated identifier.");
        } else {
            lessons2[lessonId2].forEach(fiszka => {
                console.log(`Processing fiszka with ID: [${fiszka.id.join(', ')}]`);
                generateFiszkaBlock(fiszka, lessonId2);
                console.log(`Generated fiszka with ID: [${fiszka.id.join(', ')}]`);
            });
            console.log('lessons2 z wylosowanymi identyfikatorami dla pierwszej tablicy:', lessons2[1][0]);
        }
    }
}
function getRandomFiszki(fiszkiArray, n) {
    const shuffledFiszki = fiszkiArray.sort(() => Math.random() - 0.5);
    return shuffledFiszki.slice(0, n);
}
function showFiszki() {
    const selectedFiszki = getRandomFiszki(fiszki, 18);
    // Wygeneruj bloki kodu dla wybranych fiszek
    selectedFiszki.forEach(fiszka => {
        console.log(fiszka);
        generateFiszkaBlock(fiszka);
    });
}
// Dodajemy styl dla zielonego przycisku
$('<style>.green-button { background-color: green; color: white; }</style>').appendTo('head');
// Dodajemy styl dla aktywnego przycisku
$('<style>.active-button { border: 2px solid red; }</style>').appendTo('head');
window.fiszki = fiszki;