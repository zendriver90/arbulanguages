// Tablica do przechowywania wylosowanych fiszek
const selectedFiszkiHistory = [];
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
// Łączy tylko fragmenty słowa przylegające do span.a/b/c/d/x
function wrapLogicalWords(storyElement) {
}

function readStoryFromFiszka(fiszkaElement) {
}
function readOnlyZlepkiABCD(fiszkaElement) {
}
const imgContainer = $('<div>').addClass('fiszka_img_container');
        fiszka.entries.forEach(entry => {


        });
            fiszkaContainer.append(imgContainer);
            
        const selectedLikes = [];
        console.log('hej10', selectedLikes);

// Funkcja do obsługi kliknięcia na przycisk "likeButton"
        function handleLikeButtonClick(index) {
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
        }, function () {
            // Ukrywamy kontener opcji "like" po zjechaniu z przycisku
            likeOptionsContainer.fadeOut('fast');
        });

// Funkcja do umieszczania ikony obok przycisku "story_button" w odpowiedniej fiszce
        function addLikeIconToStoryButton(index, like) {
        }

        function createLikeOption(like, text) {
        }

// Funkcja do zapisywania wybranego "like"
        function saveSelectedLike(selectedLike, text) {
        }

        // Funkcja do pobierania ikony dla wybranego "like"
        function getLikeIcon(like) {
        }

        const hashtagContainer = $('<a>').addClass('hashtag-container').attr('href', '#');
        fiszkaContainer.append(hashtagContainer);

// Funkcja showStory z zapisem wylosowanej fiszki
// Funkcja showStory z zapisem wylosowanej fiszki
function showStory(idFiszki) {
    console.log('Wywołano showStory:', idFiszki);

    const currentFiszka = fiszkaContainer;
    console.log('Aktualny kontener:', currentFiszka);

    // Ukrywamy wszystkie historie i obrazy w tej konkretnej fiszce
    currentFiszka.find('.fiszka_img').hide();

    const currentEntry = fiszka.entries[idFiszki];
    if (!currentEntry) {
        console.error("Nie znaleziono fiszki dla id:", idFiszki);
        return;
    }

    console.log("Wybrana fiszka:", currentEntry);

    let imgIndex = 0;

    if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
        imgIndex = Math.floor(Math.random() * fiszka.entries.length);
        console.log("Wylosowany indeks obrazka:", imgIndex);
    }

    const selectedImg = currentEntry.img;
    if (selectedImg) {
        currentFiszka.find('.fiszka_img').each(function() {
            if ($(this).attr('src') === selectedImg.src) {
                $(this).show();
            }
        });

        specificLesson2Ref = {
            src: selectedImg.src,
            alt: selectedImg.alt
        };

        console.log("Losowy obrazek:", specificLesson2Ref);

        // --- PUSH do historii wylosowanych fiszek ---
        selectedFiszkiHistory.push({
            idFiszki: idFiszki,
            img: selectedImg,
            story: currentEntry.story ? currentEntry.story.text : null,
            timestamp: new Date().toISOString()
        });
        console.log("Zapisana w historii fiszka:", selectedFiszkiHistory[selectedFiszkiHistory.length - 1]);
    } else {
        console.warn("Brak obrazka w fiszce:", currentEntry);
    }

    if (currentEntry.story) {
        const storyText = currentEntry.story.text;
        const storyElement = $('<div>')
            .addClass('fiszka_story story-' + imgIndex)
            .html(storyText);

        currentFiszka.find('.fiszka_story').remove();
        currentFiszka.append(storyElement);
        storyElement.show();
    }

    lastClickedIndex = idFiszki;
    return imgIndex;
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
// WRAPPER główny dla wszystkich zestawów przycisków
// WRAPPER główny dla wszystkich zestawów przycisków
let ttsWrapper = $('<div>').css({
    display: 'inline-flex',
    gap: '12px',       // odstęp między zestawami
    marginTop: '10px'
});

// ===== PIERWSZY ZESTAW: przycisk + napis =====
let firstItem = $('<div>').css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    border: '1px solid rgb(0, 0, 0)',
    padding: '4px 8px',
    borderRadius: '6px',
    marginBottom: '10px',  
    cursor: 'pointer',
    height: '36px',
    transition: 'background-color 0.2s'
});

// hover działający w jQuery
firstItem.on('mouseenter', function() {
    $(this).css('background-color', 'green');
}).on('mouseleave', function() {
    $(this).css('background-color', '');
});

// kliknięcie całego zestawu
firstItem.on('click', function() {
    console.log("CLICK - TTS Play (cały zestaw)");
    readOnlyZlepkiABCD(fiszkaContainer[0]);
});

// Ikona
let ttsImg = $('<img>')
    .attr('src', 'https://www.arbulang.com/img/play.png')
    .attr('alt', 'Czytaj')
    .addClass('tts-icon')
    .css({
        width: '24px',
        height: '24px'
    });

// Label
let ttsLabel = $('<span>')
    .text('Połącz zlepki')
    .css({
        fontSize: '14px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
    });

// składamy pierwszy zestaw
firstItem.append(ttsImg, ttsLabel);

// ===== DRUGI ZESTAW: przycisk + napis =====
let secondItem = $('<div>').css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    border: '1px solid rgb(0, 0, 0)',
    padding: '4px 8px',
    borderRadius: '6px',
    marginBottom: '10px',  
    cursor: 'pointer',
    height: '36px',
    transition: 'background-color 0.2s'
});

// hover dla drugiego zestawu
secondItem.on('mouseenter', function() {
    $(this).css('background-color', 'green');
}).on('mouseleave', function() {
    $(this).css('background-color', '');
});

// kliknięcie całego zestawu
secondItem.on('click', function() {
    console.log("CLICK - Odczytaj historyjkę (cały zestaw)");
    readStoryFromFiszka(fiszkaContainer[0]);
});

// Ikona
let storyImg = $('<img>')
    .attr('src', 'https://www.arbulang.com/img/play.png')
    .attr('alt', 'Odczytaj historyjkę')
    .addClass('tts-icon')
    .css({
        width: '24px',
        height: '24px'
    });

// Label
let storyLabel = $('<span>')
    .text('Odczytaj historyjkę')
    .css({
        fontSize: '14px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
    });

// składamy drugi zestaw
secondItem.append(storyImg, storyLabel);

// dodajemy oba zestawy do głównego wrappera
ttsWrapper.append(firstItem, secondItem);

// dodajemy do kontenera fiszki
fiszkaContainer.append(ttsWrapper);
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


        console.log('Po utworzeniu wordDiv');
    let initialSpecificLesson2Ref;
    let specificLesson2Ref;
    let lastClickedIndex = null;
    let lastApprovedIndex = null;
    let approvedIndexes = [];
    let approvedColors = [];

    let index10 = [];

    if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
        console.log("Znaleziono fiszki, liczba wpisów:", fiszka.entries.length);

        const storyButtonContainer = $('<div>');
        let lastClickedButton;

        // Wybór indeksów na podstawie kategorii
        let selectedIndexes = [];

        if (category === "sport") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("sport"))
                .slice(0, 7)
                .map(obj => obj.index);
        } else if (category === "natura") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("natura"))
                .slice(0, 7)
                .map(obj => obj.index);
        } else if (category === "nauka") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("nauka"))
                .slice(0, 7)
                .map(obj => obj.index);
        } else if (category === 'czarny humor' || category === 'czarnyhumor') {
    selectedIndexes = fiszka.entries
        .map((entry, index) => ({ entry, index }))
        .filter(({ entry }) => 
            entry.category.includes('czarnyhumor') || 
            entry.category.includes('czarny humor')
        )
        .slice(0, 7)
        .map(obj => obj.index);
        } else if (category === "zwiazki") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("zwiazki"))
                .slice(0, 7)
                .map(obj => obj.index);
} else if (category === "all") {
            // Losowo wybieramy do 3 unikalnych indeksów
            const allIndexes = [...Array(fiszka.entries.length).keys()];
            selectedIndexes = allIndexes
                .sort(() => 0.5 - Math.random()) // losowe przetasowanie
                .slice(0, 7);
        } else {
            // Losowo wybieramy do 3 unikalnych indeksów
            const allIndexes = [...Array(fiszka.entries.length).keys()];
            selectedIndexes = allIndexes
                .sort(() => 0.5 - Math.random()) // losowe przetasowanie
                .slice(0, 7);
        }

        const randomButtonIndex = selectedIndexes[0] || 0;
        index10.push(randomButtonIndex);

        fiszka.entries.forEach((entry, index) => {
            const displayText = entry.category.join(", ");
            const isIncluded = selectedIndexes.includes(index);

            const storyButton = $('<button>')
                .text(displayText)
                .addClass('story_button');

            if (isIncluded) {
                storyButton.click(function () { /// jeśli zmienię obrazek kliknięciem!!!!
                    console.log("Kliknięto przycisk dla fiszki nr:", index);

                    const idFiszki = entry.id || index;

                    showStory(index, idFiszki);
                    lastClickedIndex = index;

                    if (lastClickedButton) {
                        lastClickedButton.removeClass('green-button');
                    }

                    $('.story_button').removeClass((index, className) => (className.match(/imgIndex-\d+/g) || []).join(' '));
                    $('.fiszka').addClass('imgIndexNull').removeClass('imgIndex-0 imgIndex-1 imgIndex-2 imgIndex-3 imgIndex-4 ');

                    $(this).addClass('green-button');
                    $('.story_button').removeClass('active-button');
                    $(this).addClass('active-button');

                    $('.story_button').each(function () {
                        if ($(this).hasClass('orange-button')) {
                            $(this).removeClass('green-button').addClass('orange-button');
                        }
                    });

                    if (approvedIndexes.includes(lastClickedIndex)) {
                        fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
                    }

                    lastClickedButton = $(this);
                    handleLikeButtonClick();
                });

                // Domyślnie pierwszy z zaznaczonych ma zielony kolor
                if (index === randomButtonIndex) {
                    specificLesson2Ref = entry.img[index];
                    console.log('Zaktualizowano specificLesson2Ref:', specificLesson2Ref);
                    storyButton.addClass('green-button');
                    lastClickedButton = storyButton;
                    lastApprovedIndex = index;
                }
            }

            storyButtonContainer.append(storyButton);
        });

        fiszkaContainer.append(storyButtonContainer);

        const idFiszki = fiszka.entries[randomButtonIndex].id || randomButtonIndex;
        showStory(index10, idFiszki);
        console.log(`Wywołano showStory dla przycisku: ${randomButtonIndex} z id.fiszki: ${idFiszki}`);
} else if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
            // Jeśli fiszka.category1 nie jest tablicą
            newImgIndex = 0; // Przypisanie domyślnego indeksu dla pojedynczego obrazka
            specificLesson2Ref = fiszka.img; // Przypisanie pojedynczej wartości do specificLesson2Ref
            initialSpecificLesson2Ref = specificLesson2Ref;
            console.log('Hej7', specificLesson2Ref);

            // Stwórz pojedynczy przycisk dla pojedynczej wartości category1
            const displayText = `${fiszka.category1} #${fiszka.category1}`;
            const storyButton = $('<button>')
                    .text(displayText)
                    .addClass('story_button2 green-button') // Od razu przypisz zieloną klasę
                    .click(function () {
                        showStory(0); // Przekazujemy 0 jako indeks, ponieważ jest to pojedyncza wartość
                        lastClickedIndex = 0;

                        // Zapisujemy ostatnio kliknięty przycisk
                        lastClickedButton = $(this);
                        handleLikeButtonClick();
                    });

            fiszkaContainer.append(storyButton);
            lastClickedButton = storyButton;
            lastApprovedIndex = 0; // Ustaw ostatnio zatwierdzony indeks na 0

            // WYWOŁANIE POJEDYNCZEJ HISTORII
            showStory(0);
            console.log("Pojedyncza wartość dla category1, specificLesson2Ref:", specificLesson2Ref);
        }


let selectedFiszka = null; // Przechowuje wybraną fiszkę

$('.fiszka_button_trening').click(function () {
  const fiszka = $(this).data('fiszka'); // Pobierz dane fiszki z elementu
  selectedFiszka = fiszka; // Zapisz wybraną fiszkę
  scheduleNotification(); // Uruchom pierwsze powiadomienie od razu
});

// Funkcja do wyświetlania powiadomienia
function showNotification(fiszka) {
  const title = `Przypomnienie: Fiszka ${fiszka.id}`;
  const body = `
    <img src="${fiszka.img}" alt="Obrazek fiszki">
    <p>${fiszka.translate}</p>
    <p>${fiszka.opis}</p>
  `;

  const notification = new Notification(title, {
    body: body,
    icon: 'https://www.arbulang.com/img/fiszki1/1a.jpg', // Opcjonalnie, jeśli masz ikonę
  });

  notification.onclose = function () {
    clearInterval(intervalId); // Zatrzymaj interwał po zamknięciu powiadomienia
  };
}

// Funkcja do wyświetlania powiadomienia co minutę
function scheduleNotification() {
  if (selectedFiszka) {
    showNotification(selectedFiszka);
  }
}

// Ustawienie interwału co 60 sekund (1 minuta)
const intervalId = setInterval(scheduleNotification, 60000);


        console.log('hej555ax', lessons2b[2]);
// DODANIE PRZYCISKU TRENING
        fiszkaContainer.append($('<button>').text('TRENING').addClass('fiszka_button fiszka_button_trening').click(function () {
            
        }));

        fiszkaContainer.append($('<button>').text('ZNAM').addClass('fiszka_button fiszka_button_znam').click(function () {
            console.log("Znam clicked on fiszka nr " + fiszka.id);
            activateFiszka(fiszka.id, true);
        }));
// Dodajemy fiszkę do DOM
$('.grid-containerb').append(fiszkaContainer);

// Ładujemy WSZYSTKIE obrazki
const imagePromises = fiszka.entries.map((entry, i) =>
    loadImage(entry.img.src)
        .then(img => {
            selectedFiszkiHistory.push({
                img: entry.img,
                word: fiszka.sentence[i] || null
            });
        })
        .catch(err => console.error('Błąd wczytania obrazka:', err))
);

        Promise.all(imagePromises).then(() => {
            generateOrUpdateMatrix(fiszki10, lessonId2, selectedFiszkiHistoryByLesson[lessonId2], fiszkaContainer);
        });
        console.log(`Generated fiszka block for ID: [${fiszka.id.join(', ')}]`);
        initAudio(fiszka.id);
        restoreLearnedClasses();
    });
}


function generateSentenceMatrixForSingleSentence(fiszkiArray, sentenceId, containerSelector) {

    const fiszki = fiszkiArray.filter(f => f.id[1] === sentenceId);
    if (!fiszki.length) return;

    let topWords = [];
    let bottomWords = [];
    let images = [];
    let desc = [];

    fiszki.forEach(f => {
        if (Array.isArray(f.sentence1)) topWords.push(...f.sentence1);
        if (Array.isArray(f.sentence2)) bottomWords.push(...f.sentence2);
        if (Array.isArray(f.entries)) images.push(...f.entries);
        if (f.desc) desc.push(f.desc);
    });

    if (!topWords.length && !bottomWords.length) return;

    const ORIG_W = 768;
    const ORIG_H = 512;
    const GAP = 6;

    const $container = $('<div>').addClass('fiszka-matrix-container').css({
        width: '100%',
        margin: '12px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        boxSizing: 'border-box',
        overflow: 'hidden'
    });

    $(containerSelector).append($container);

    let containerWidth = $container.width();
    if (!containerWidth) {
        containerWidth = $(containerSelector).width() || $(window).width();
    }

    const maxWordsCount = Math.max(topWords.length, bottomWords.length);
    const totalGap = (maxWordsCount - 1) * GAP;
    const scale = Math.min(1, (containerWidth - totalGap) / (ORIG_W * maxWordsCount));

    const cellWidth = ORIG_W * scale;
    const cellHeight = ORIG_H * scale;
    const fontSize = 24 * scale;
function createRow(words, bgColor, startImageIndex) {
    const $row = $('<div>').css({
        display: 'flex',
        justifyContent: 'center',
        gap: GAP + 'px',
        width: '100%',
        boxSizing: 'border-box'
    });

    words.forEach((word, i) => {
        const entry = images[startImageIndex + i];
        const entry2 = desc[startImageIndex + i];

        const $cell = $('<div>').css({
            width: cellWidth + 'px',
            height: cellHeight + 'px',
            border: '2px solid #000',
            borderRadius: '4px',
            background: bgColor,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '4px'
        });

        // ===== OBRAZEK =====
        if (entry && entry.img && entry.img.src) {
            $('<img>')
                .attr('src', entry.img.src)
                .attr('alt', entry.img.alt || '')
                .css({
                    maxWidth: '100%',
                    maxHeight: '60%',
                    objectFit: 'contain'
                })
                .appendTo($cell);
        }

        // ===== TEKST (word) =====
        $('<div>')
            .html(word) // używamy html(), bo czasem masz span w słowie
            .css({
                marginTop: '4px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                textAlign: 'center'
            })
            .appendTo($cell);

if (entry2) {
    $('<div>')
        .html(entry2) // entry2 to Twój opis
        .css({
            marginTop: '4px',
            fontSize: '12px',
            textAlign: 'center',
            color: '#333',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        })
        .appendTo($cell);
}

        $row.append($cell);
    });

    return $row;
}

    const $topRow = createRow(topWords, '#e8f3ff', 0);
    const $bottomRow = createRow(bottomWords, '#ffecec', topWords.length);

    $container.append($topRow, $bottomRow);
}


// Tablica do przechowywania wylosowanych fiszek
const selectedFiszkiHistory = [];
console.log('hej222', selectedFiszkiHistory);
function generateSentenceMatrixForSingleSentence(
    fiszkiArray,
    sentenceId,
    containerSelector,
    selectedFiszkiHistory
) {
    const fiszki = fiszkiArray.filter(f => f.id[1] === sentenceId);
    if (!fiszki.length || !selectedFiszkiHistory.length) return;

    let topWords = [];
    let bottomWords = [];

    const $container = $('<div>')
        .addClass('fiszka-matrix-container')
        .css({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
        });

    $(containerSelector).append($container);

    // 🔹 Tablica obrazków z historii
    const imageEntries = selectedFiszkiHistory.map(f => f.img);

    // 🔹 Zbieramy słowa do dwóch wierszy
    fiszki.forEach(f => {
        if (Array.isArray(f.sentence1)) topWords.push(...f.sentence1);
        if (Array.isArray(f.sentence2)) bottomWords.push(...f.sentence2);
    });

    const GAP = 6;
    const ORIG_W = 768;
    const ORIG_H = 512;
    const containerWidth = $container.width() || $(window).width();
    const maxWordsCount = Math.max(topWords.length, bottomWords.length);
    const scale = Math.min(
        1,
        (containerWidth - (maxWordsCount - 1) * GAP) / (ORIG_W * maxWordsCount)
    );

    const cellWidth = ORIG_W * scale;
    const cellHeight = ORIG_H * scale;

    // 🔹 Funkcja tworząca wiersz
    function createRow(words, startImageIndex = 0) {
        const $row = $('<div>').css({ display: 'flex', gap: GAP + 'px' });

        words.forEach((word, i) => {
            const imgIndex = (startImageIndex + i) % imageEntries.length;
            const imgObj = imageEntries[imgIndex];

            const $cell = $('<div>').css({
                width: cellWidth,
                height: cellHeight,
                border: '2px solid #000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            });

            if (imgObj?.src) {
                $('<img>')
                    .attr('src', imgObj.src)
                    .css({ maxWidth: '100%', maxHeight: '60%' })
                    .appendTo($cell);
            }

            $('<div>').html(word).appendTo($cell);

            // 🔹 Kliknięcie zmienia obrazek w tej komórce
            let currentIndex = imgIndex;
            $cell.on('click', () => {
                currentIndex = (currentIndex + 1) % imageEntries.length;
                $cell.find('img').attr('src', imageEntries[currentIndex].src);
            });

            $row.append($cell);
        });

        return $row;
    }

    // 🔹 Obliczamy startowy indeks dla dolnego wiersza
    const topRowLength = topWords.length;
    const $topRow = createRow(topWords, 0);
    const $bottomRow = createRow(bottomWords, topRowLength);

    $container.append($topRow, $bottomRow);
}

const selectedFiszkiHistory = [];

// Funkcja do wczytania obrazka jako Promise
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

function generateOrUpdateMatrix(selectedFiszkiHistory, fiszkaContainer) {
    if (!selectedFiszkiHistory.length || !fiszkaContainer) return;

    // Tworzymy kontener matrycy tylko raz w fiszce
    let $matrixContainer = fiszkaContainer.find('.fiszka-matrix-container');
    if (!$matrixContainer.length) {
        $matrixContainer = $('<div>').addClass('fiszka-matrix-container').css({
            display: 'flex',
            flexDirection: 'row', // obrazki obok fiszki
            alignItems: 'flex-start',
            gap: '12px',
            marginTop: '10px'
        });
        fiszkaContainer.append($matrixContainer);
    }

    $matrixContainer.empty(); // Czyścimy poprzednie mini-obrazki

    const cellSize = 100; // wielkość obrazka mini-matrycy
    const GAP = 6;

    // Pozostałe 4 obrazki po prawej stronie
    selectedFiszkiHistory.slice(0, 5).forEach(entry => {
        const $cell = $('<div>').css({
            width: cellSize,
            height: cellSize,
            border: '2px solid #ccc',
            borderRadius: '6px',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
        });

        $('<img>').attr('src', entry.img.src).css({ maxWidth: '100%', maxHeight: '100%' }).appendTo($cell);
        $matrixContainer.append($cell);
    });
}