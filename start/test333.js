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
        // Dodanie kontenera fiszki do body
        $('.grid-containerb').append(fiszkaContainer);
        generateSentenceMatrixForSingleSentence(fiszki10, lessonId2, '.grid-containerb');
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