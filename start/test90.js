const sentenceCache = {}; // klucz: currentPos, wartość: HTML zdań
let globalSentence10 = "", globalSentence11 = "", globalSentence10b = "", globalSentence11b = "", globalSentence10c = "", globalSentence11c = "";
console.log('index88:', globalSentence20);
let mojeidGlobal;
let systemStarted = false; // flaga do kontroli kliknięcia "startsystem"
function renderLesson(matchingFiszki1, matchingFiszki2) {

    $container.empty();
    $('.image-container3b .sentence').css('display', 'none');

const $buttonb = $('<img>').attr({
    src: 'https://www.arbulang.com/img/startsystem.png',
    class: 'overlay-button'
});
// jeśli index jest parzysty → dodaj klasę left-side
if (indexDiv % 2 === 0) {
    // parzyste → lewa strona
    $buttonb.addClass('left-side-button');
} else {
    // nieparzyste → prawa strona
    $buttonb.addClass('right-side-button');
}
$buttonb.appendTo($container);
// ObsĹuga klikniÄcia przycisku overlay
                            $buttonb.on('click', function () {
systemStarted = true; // ustawiamy flagę, że system wystartował
    $('.run-button3').css({
        'margin-top': '65px'
    });
console.log('hej140', systemStarted);
if (currentPos === 0) {
    highlightFirstWord(indexDiv, mojeidGlobal);
        setTimeout(() => {
            showFiszkiForLesson6(ostatniElement2, ostatniElement3);
        }, 0);
    }
    if (currentPos === 1) {
        highlightFirstWord2(indexDiv);
        setTimeout(() => {
            showFiszkiForLesson6b(ostatniElement2, ostatniElement3);
        }, 0);
    }

                                console.log('hej44f', currentPos);
                            });


function highlightFirstWord(indexDiv, mojeidGlobal) {
        // Znajdź pierwszą linię w aktualnie wygenerowanym bloku
    const $container = $(`.image-container3b[data-lesson="${indexDiv}"]`);
    // Obliczamy id pierwszego zdania w tej lekcji
    const firstSentenceId = (indexDiv - 1) * 3 + 1;

    // Pobieramy fiszkę, która jest pierwszym zdaniem w lekcji
    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === firstSentenceId);
    $(`.image-container3b`).css('z-index', 100); 
    $container.css('z-index', 102); 

    console.log('Zawartość kontenera:', matchingFiszki1);
console.log('hej120', mojeidGlobal);
if (matchingFiszki1.length > 0) {
        const $sentence10 = $container.find('.sentence-block').first();
        const $sentence10b = $container.find('.sentence-block').first();
        const $sentence10c = $container.find('.sentence-block').first();

        if ($sentence10.length > 0 && $sentence10b.length > 0 && $sentence10c.length > 0) {
            console.log('funkcja odpala się', $sentence10);
let sentenceText = globalSentence10 + " " + globalSentence11;
let sentenceText2 = globalSentence10b + " " + globalSentence11b;
let sentenceText3 = globalSentence10c + " " + globalSentence11c;
            let tempDiv = document.createElement('div');
            let tempDiv2 = document.createElement('div');
                        let tempDiv3 = document.createElement('div');
            tempDiv.innerHTML = sentenceText;
            tempDiv2.innerHTML = sentenceText2;
                        tempDiv3.innerHTML = sentenceText3;
            let words = tempDiv.innerText.trim().split(/\s+/);
            let words2 = tempDiv2.innerText.trim().split(/\s+/);
                        let words3 = tempDiv3.innerText.trim().split(/\s+/);
            console.log('tutaj dociera kod', words);

if (words.length > 0 && words2.length > 0 && words3.length > 0) {
    console.log('tutaj dociera kod2', words3);

    // --- Konwersja wszystkich słów na DUŻE LITERY ---
    let [firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord] = words.map(w => (w || ''));
    let [firstWord2, secondWord2, thirdWord2, forthWord2, fifthWord2, sixthWord2] = words2.map(w => (w || '').toUpperCase());
    let [firstWord3, secondWord3, thirdWord3, forthWord3, fifthWord3, sixthWord3] = words3.map(w => (w || '').toUpperCase());
// --- Teksty / zdania ---
    const $textContainer = $('<div>').addClass('text-block');
    let currentSentenceHtml = "";
    
console.log("currentPos =", currentPos, "currentDataName =", currentDataName);
// --- Sprawdzenie cache ---
if (!sentenceCache[currentPos]) {
    let currentSentenceHtml = "";
    try {
        // Tutaj dodaj definicje matchingFiszki
        const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === currentDataName);
        const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === currentTriplet[1]);
        const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === currentTriplet[2]);
if (currentPos === 0 && typeof addBackgroundToText1b === 'function') {
    const { sentence10, sentence11, sentence10b, sentence11b, sentence10c, sentence11c } = addBackgroundToText1b(
        matchingFiszki1,
        matchingIndexes,
        currentPos,
        0,
        matchingIndexes2,
        rodzaj,
        matchingIndexes3,
        matchingLessons5b
    );

    // zapis globalny, by highlightFirstWord miało dostęp
    globalSentence10 = sentence10;
itp.

    currentSentenceHtml =
        (sentence10 || "") +
        (sentence11 || "") +
        "<br>" +
        (sentence10b || "").toUpperCase() +
        (sentence11b || "").toUpperCase() +
        "<br>" +
        "wymowa:" +
                        (sentence10c || "").toUpperCase() +
        (sentence11c || "").toUpperCase();
} else if (currentPos === 1 && typeof addBackgroundToText2b === 'function') {
                const { sentence20, sentence22, sentence20b, sentence22b, sentence20c, sentence22c } = addBackgroundToText2b(matchingFiszki2, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

    // zapis globalny, by highlightFirstWord miało dostęp
    globalSentence20 = sentence20;
itp.

currentSentenceHtml =
    (sentence20 || "") + // tylko sentence10 na małe litery
    (sentence22 || "") +
    "<br>" +
    (sentence20b || "").toUpperCase() +
    (sentence22b || "").toUpperCase() +
        "<br>" +
        "wymowa:" +
                        (sentence20c || "").toUpperCase() +
        (sentence22c || "").toUpperCase();
            } else if (currentPos === 2 && typeof addBackgroundToText3b === 'function') {
                const { sentence30, sentence33, sentence30b, sentence33b, sentence30c, sentence33c } = addBackgroundToText3b(matchingFiszki3, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

    globalSentence30 = sentence30;
itp.

currentSentenceHtml =
    (sentence30 || "") + // tylko sentence10 na małe litery
    (sentence33 || "") +
    "<br>" +
    (sentence30b || "").toUpperCase() +
    (sentence33b || "").toUpperCase() +
        "<br>" +
        "wymowa:" +
                        (sentence30c || "").toUpperCase() +
        (sentence33c || "").toUpperCase();
            } else {
                if (fiszka && (fiszka.sentence1 || fiszka.sentence2)) {
                    currentSentenceHtml = (Array.isArray(fiszka.sentence1) ? fiszka.sentence1.join(' ') + ' ' : '') +
                                          (Array.isArray(fiszka.sentence2) ? fiszka.sentence2.join(' ') : '');
                }
            }
        } catch (e) {
            console.error('Błąd podczas generowania zdań:', e);
        }
        sentenceCache[currentPos] = currentSentenceHtml;
    }

// --- Dodanie strzałek do zdania --- 
const arrowsHtml = `
    <button class="prev-button sentence-prev">&lt;</button>
    <span class="sentence-inner">${sentenceCache[currentPos]}</span>
    <button class="next-buttonv sentence-next">&gt;</button>
`;

// --- Rozbijamy zdanie na linie po <br> ---
const lines = sentenceCache[currentPos].split('<br>');

// --- Dodajemy strzałki do każdej linii ---
const processedLines = lines.map((line, index) => {
    // Pusta linia? pomijamy
    if (!line.trim()) return "";

    // Klasy jak w Twoim przykładzie
    const leftBtn  = `<button class="prev-button prev-button${index + 1}">&lt;</button>`;
    const rightBtn = `<button class="next-buttonv next-button${index + 1}">&gt;</button>`;

    // Każda linia dostaje własne strzałki
    return `
        <div class="sentence-line">
            ${leftBtn}
            <span class="sentence-inner">${line}</span>
            ${rightBtn}
        </div>
    `;
});

// --- Składamy wszystko z powrotem ---
const $sentenceDiv = $('<div>')
    .addClass('sentence-block')
    .html(processedLines.join(""));

$textContainer.append($sentenceDiv);
function highlightFirstWordsInSentenceBlock($sentenceBlock) {

    $sentenceBlock.find('.sentence-line').each(function () {

        const $line = $(this);
        const $inner = $line.find('.sentence-inner');

        let text = $inner.html().trim();

        // rozbijamy na słowa (bez HTML)
        let words = text.split(/\s+/);
        if (words.length === 0) return;

        // podmieniamy pierwsze słowo
        words[0] = `<span class="highlighted" data-word-index="0">${words[0]}</span>`;

        // składamy całą linię
        const rebuilt = words.join(" ");

        $inner.html(rebuilt);
    });
}

console.log('hej130', systemStarted);
function attachArrowNavigation($sentenceBlock, indexDiv) {
    console.log('attachArrowNavigation start', { indexDiv, hasBlock: !!$sentenceBlock.length });

    if (!$sentenceBlock || $sentenceBlock.length === 0) {
        console.warn('Brak $sentenceBlock dla indexDiv:', indexDiv);
        return;
    }

    $sentenceBlock.find('.sentence-line').each(function (lineIndex) {
        const $line = $(this);
        const $inner = $line.find('.sentence-inner');
        let currentIndex = 0;

        const updateHighlight = () => {

            let raw = $inner.text().trim();
            let words = raw ? raw.split(/\s+/) : [];

            if (words.length === 0) return;

            // 🔥 TU POWSTAJE mojeidGlobal
            const mojeid = indexDiv + "-" + lineIndex + "-" + currentIndex;

            // 🔥 ZAPISUJEMY DO GLOBALNEJ ZMIENNEJ
            window.mojeidGlobal = mojeid;

            let html = words.map((word, wi) => {
                const id = indexDiv + "-" + lineIndex + "-" + wi;

                if (wi === currentIndex) {
                    return `<span class="highlighted" data-word-index="${wi}" data-mojeid="${id}">${word}</span>`;
                }
                return `<span data-word-index="${wi}" data-mojeid="${id}">${word}</span>`;
            }).join(" ");

            $inner.html(html);

            if (window.systemStarted) {
                sendHighlightToFiszki(indexDiv, window.mojeidGlobal);
            }
        };

        // NEXT →
        $line.find('.next-buttonv').off('click.attachNav').on('click.attachNav', function () {
            const wordsCount = $inner.text().trim().split(/\s+/).length;

            if (currentIndex < wordsCount - 1) {
                currentIndex++;
                updateHighlight();
            }
        });

        // PREV ←
        $line.find('.prev-button').off('click.attachNav').on('click.attachNav', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateHighlight();
            }
        });

        // CLICK NA SŁOWO
        $inner.off('click.attachNav', 'span')
            .on('click.attachNav', 'span', function () {
                const wi = Number($(this).data('word-index'));
                if (!isNaN(wi)) {
                    currentIndex = wi;
                    updateHighlight();
                }
            });

        updateHighlight();
    });
}

function sendHighlightToFiszki(indexDiv, mojeidGlobal) {
    console.log("SEND → mojeidGlobal:", mojeidGlobal);
    highlightFirstWord(indexDiv, mojeidGlobal);
}

// --- Automatyczne podświetlenie pierwszego słowa
highlightFirstWordsInSentenceBlock($sentenceDiv);

// --- Aktywacja strzałek
attachArrowNavigation($sentenceDiv, indexDiv, mojeidGlobal);/*