// --- Bezpieczne domyślne ustawienia currentTriplet ---
            if (!Array.isArray(currentTriplet) || currentTriplet.length === 0) {
                if (trojkiGlobal.length > 0) {
                    currentTriplet = trojkiGlobal[0].slice();
                    currentPos = 0;
                } else {
                    currentTriplet = miniaturka.map((_, i) => i);
                    currentPos = 0;
                }
            }

            if (currentPos < 0 || currentPos >= currentTriplet.length)
                currentPos = 0;

            const currentDataName = currentTriplet[currentPos];

            const fiszka = sentences[currentPos] || {};
            // --- Wybór nazwy czasu dla aktualnego zdania ---
let currentCzasName = '';
if (currentPos === 0) currentCzasName = srcWord1q;
else if (currentPos === 1) currentCzasName = srcWord2q;
else if (currentPos === 2) currentCzasName = srcWord3q;
            console.log('hej140', fiszka);
// --- Duża miniaturka / wideo ---
            const $mediaContainer = $('<div>').addClass('media-container').css({
                position: 'relative', // konieczne, by absolutny tekst był w kontekście tego kontenera
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto'
            });

            let $media;

const previewImgSrc = miniaturka[currentPos];

// --- Bezpieczne pobranie videoSrc ---
let videoSrc = null;
if (Array.isArray(srcWords2b[currentPos])) {
    videoSrc = srcWords2b[currentPos][0];
} else if (typeof srcWords2b[currentPos] === 'string') {
    videoSrc = srcWords2b[currentPos];
}

// --- WIDEO lub MINIATURA ---
if (videoVisible && videoSrc) {

    $media = $('<video>')
        .attr({
            src: videoSrc,
            controls: true,
            autoplay: true,
            muted: true,        // 🔥 wymagane dla autoplay
            playsinline: true,
            preload: 'auto'
        })
        .css({
            width: '100%',
            borderRadius: '15px',
            display: 'block'
        })
        .on('loadeddata', () => console.log('VIDEO READY'))
        .on('play', () => console.log('VIDEO PLAYING'))
        .on('ended', () => {
            videoVisible = false;
            renderLesson();
        });

} else {

    $media = $('<img>')
        .addClass('preview-img')
        .css({
            width: '100%',
            borderRadius: '15px',
            cursor: 'pointer',
            display: 'block'
        });

    setImgSrcForce($media, previewImgSrc);

    $media.off('click.preview').on('click.preview', () => {
        videoVisible = true;
        renderLesson();
    });
}

$mediaContainer.append($media);

// --- Overlay z nazwami filmów ---
const $textContainer2 = $('<div>').css({
    position: 'absolute',
    top: '20px',
    left: '0',
    right: '0',
    bottom: '0',
    overflowY: 'auto',
    padding: '10px',
    color: 'white',
    fontSize: '12px',
    textAlign: 'center',
    borderRadius: '10px',
    pointerEvents: 'none'
});

if (videoVisible) {
    $textContainer2.hide();
} else {
    $textContainer2.show();
}

const currentVideos = Array.isArray(srcWords2[currentPos])
    ? [srcWords2[currentPos][0]]  // URL do wideo
    : (srcWords2[currentPos] ? [srcWords2[currentPos]] : []);

currentVideos.forEach(src => {
    const fileName = Array.isArray(srcWords2[currentPos]) ? srcWords2[currentPos][1] : src.split('/').pop();
    const $videoName = $('<p>').text(fileName).css({ fontWeight: 'bold', margin: '4px 0' });
    $textContainer2.append($videoName);
});
if (!videoVisible) {
    const $czasName = $('<p>').text(currentCzasName || '').css({ fontWeight: 'bold', margin: '4px 0' });
    $textContainer2.append($czasName);
    $textContainer2.show();
} else {
    $textContainer2.hide();
}
            $mediaContainer.append($textContainer2);
const sentenceMap = currentTriplet.map(id => {
    return sentences[id]?.id?.[1] ?? id;
});

if (
    sentenceMap.length >= 3 &&
    sentenceMap[0] === 2 &&
    sentenceMap[1] === 3 &&
    sentenceMap[2] === 3
) {
    sentenceMap[0] = 1;
    sentenceMap[1] = 2;
}

console.log("hej20v", sentenceMap);
window.sentenceMapCache ??= {};
window.sentenceMapCache[indexDiv] = sentenceMap;
console.log('hej20', sentenceMap);
const xMap = currentTriplet.map(id => {
    return sentences[id]?.id?.[0] ?? id;   // X (np. lesson / group / set)
});
console.log('hej20b', xMap);
// --- Pasek miniatur ze strzałkami ---
            const $thumbContainer = $('<div>').addClass('thumb-row');
            currentTriplet.forEach((dataName, pos) => {
                const $item = $('<div>').addClass('thumb-item');
                if (pos === currentPos)
                    $item.addClass('activeItem');


                    const $czasLabel = $('<div>')
        .addClass('thumb-czas')
        .text(srcWordsq[pos] || '');

const $imgWrapper = $('<div>')
    .addClass('thumb-img-wrapper');

const $img = $('<img>')
    .addClass('thumb-img')
    .attr('data-pos', pos);

setImgSrcForce($img, miniaturka[pos]);


const $highlightWord = $('<div>')
    .addClass('thumb-highlight-word')
    .text('');
    
$imgWrapper.append($img, $highlightWord);
const matchingIndexes = [];
const text = lessonTranslations[pos] || '';

const words = text.trim().split(' ');

const secondValues = matchingIndexes2.map(item => Number(item[1]));
const secondValuesSet = new Set(secondValues);

const sharedBase = xMap[pos] ?? 0;

const descKey = `${indexDiv}_${pos}`;
const wiKey = `${indexDiv}_${pos}`;

let savedIndex = window.savedWiCache?.[descKey];


const highlightedText = words.map(function(word, index) {

    const currentX = sharedBase + index;
const shouldHighlight =
    index === savedIndex;


    if (shouldHighlight) {
        return `
            <span 
                class="highlighted"
                data-word-index="${index}"
                data-sentence-id2="${currentX}">
                ${word}
            </span>
        `;
    }

    return `
        <span 
            data-word-index="${index}"
            data-sentence-id2="${currentX}">
            ${word}
        </span>
    `;

}).join(' ');



const $desc = $('<div>')
    .addClass('thumb-desc')
    .html(`
        <span class="sentence-inner"
              data-pos="${pos}"
              data-line="1"
              data-indexDiv="${indexDiv}">
            ${highlightedText}
        </span>
    `);


descCache[descKey] = $desc;

setTimeout(function(){

    const savedWi = window.savedWiCache?.[wiKey];

    if (savedWi !== undefined) {

        $desc.find('.highlighted')
            .removeClass('highlighted');

        $desc.find(`[data-word-index="${savedWi}"]`)
            .addClass('highlighted');

        console.log('SYNC savedWi po renderze', {
            wiKey,
            savedWi
        });
    }

},600);


setTimeout(function () {

    const $activeWord = $desc.find('span.highlighted').first();

    const word = $activeWord.text().trim();

    console.log("AKTUALNE SŁOWO THUMB:", {
        indexDiv,
        word,
        sentenceId: $activeWord.data('sentence-id2')
    });

    $highlightWord.text(word);

}, 0);

                const linkForThumb = linkMap[dataName] || `demo1angielski.html?category=${selectedCategory}&data=${dataName}`;
                const $link = $('<a>').attr({href: linkForThumb, target: '_blank'}).addClass('thumb-link').text('Otwórz pojedyńczą lekcję');
$item.append(
    $czasLabel,
    $imgWrapper,
    $desc,
    $link
);
                console.log('CAŁY ITEM:', $item.html());
                $thumbContainer.append($item);
            });
            let globalWordIndex = 0; // wszystkie trzy zdania przesuwają się razem

            const $thumbWrapper = $('<div>').addClass('thumb-wrapper');

// LEWA STRZAŁKA
// --- Strzałki ---
const $leftArrow = $('<button>')
    .addClass('thumb-arrow left-arrow')
    .html('←')
    .on('click', () => {
        if (currentTriplet.length === 0) return;

        // zmiana globalnego indeksu
        currentPosGlobal = (currentPosGlobal - 1 + currentTriplet.length) % currentTriplet.length;

        // zsynchronizowanie z aktualną pozycją
        currentPos = currentPosGlobal;
        videoVisible = false;

        renderLesson();
    });

const $rightArrow = $('<button>')
    .addClass('thumb-arrow right-arrow')
    .html('→')
    .on('click', () => {
        if (currentTriplet.length === 0) return;

        currentPosGlobal = (currentPosGlobal + 1) % currentTriplet.length;

        currentPos = currentPosGlobal;
        videoVisible = false;

        renderLesson();
    });

            $thumbWrapper.append($leftArrow, $thumbContainer, $rightArrow);
            $mediaContainer.append($thumbWrapper);
// --- Teksty / zdania ---
            const $textContainer = $('<div>').addClass('text-block');
            // --- Nazwa czasu nad zdaniem ---
const $czasNameP = $('<p>').text(currentCzasName || '')
    .css({
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '8px 0',
        color: '#ffffff' // lub inny kolor pasujący do tła
    });
$textContainer.append($czasNameP);
            let currentSentenceHtml = "";
            // --- Inicjalizacja cache dla indexDiv ---
if (indexDiv < 36) {

    // dodaj napis tylko jeśli jeszcze go nie ma
    if (!$container.find('.dynamic-div').length) {
const $dynamicDiv = $('<div>')
    .addClass('dynamic-div')
    .text('Lekcja dostępna - otwórz link poniżej')
    .css({
        display: 'block'
    });

$container.append($dynamicDiv);

        $container.append($dynamicDiv);
    }
}

console.log('hej105vv', matchingIndexes);
const result0 = addBackgroundToText1b(
    matchingFiszki1,
    matchingIndexes,
    0,
    lesson1PartLength,
    matchingIndexes2,
    rodzaj,
    matchingIndexes3,
    matchingLessons5b,
    lesson1FirstPartLength
);

const result1 = addBackgroundToText2b(
    matchingFiszki2,
    matchingIndexes,
    1,
    lesson2PartLength,
    matchingIndexes2,
    rodzaj,
    matchingIndexes3,
    matchingLessons5b,
    lesson2FirstPartLength
);

const result2 = addBackgroundToText3b(
    matchingFiszki3,
    matchingIndexes,
    2,
    lesson3PartLength,
    matchingIndexes2,
    rodzaj,
    matchingIndexes3,
    matchingLessons5b,
    lesson3FirstPartLength
);


// ===============================
// 2. WYCIĄGNIĘCIE ID
// ===============================

const id0 = result0?.id ?? null;
const id1 = result1?.id2 ?? null;
const id2 = result2?.id3 ?? null;
console.log('hej200', id0, id1);
const tripletIds = [id0, id1, id2];
// ===============================================
// INIT savedWiCache dla thumb-desc TRYB rodzaj
// dokładnie ta sama logika co updateHighlightAll()
// ===============================================
if (window.highlightMode === 'rodzaj') {

    window.savedWiCache = window.savedWiCache || {};

    const secondValuesSet = new Set(
        matchingIndexes2.map(item => Number(item[1]))
    );


    currentTriplet.forEach((id, pos) => {

        const key = `${indexDiv}_${pos}`;

        if (window.savedWiCache[key] === undefined) {

            const sharedBase = xMap[pos] ?? 0;

            let savedWi = 0;

            const text = lessonTranslations[pos] || '';
            const words = text.trim().split(/\s+/);


            words.forEach((word, wi) => {

                const currentX = sharedBase + wi;

                if (secondValuesSet.has(Number(currentX))) {
                    savedWi = wi;
                }

            });


            window.savedWiCache[key] = savedWi;

        }


        console.log('INIT savedWiCache RODZAJ', {
            key,
            savedWi: window.savedWiCache[key],
            pos,
            xMap: xMap[pos]
        });

    });
}
// --- Sprawdzenie cache ---
            if (!sentenceCache[indexDiv][currentPos]) {
if (currentPos === 0 && typeof addBackgroundToText1b === 'function') {
                        const {sentence10, sentence11, sentence10b, sentence11b, sentence10c, sentence11c, id} = addBackgroundToText1b(matchingFiszki1, matchingIndexes, currentPos, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b, lesson1FirstPartLength);

                        // zapis globalny, by highlightFirstWord miało dostęp
                        globalSentence10 = sentence10;
                        globalSentence11 = sentence11;
                        globalSentence10b = sentence10b;
                        globalSentence11b = sentence11b;
                        globalSentence10c = sentence10c;
                        globalSentence11c = sentence11c;

                        currentSentenceHtml =
                                (sentence10 || "") + // tylko sentence10 na małe litery
                                (sentence11 || "") +
                                "<br>" +
                                (sentence10b || "").toUpperCase() +
                                (sentence11b || "").toUpperCase() +
                                "<br>" +
                                "wymowa:" +
                                (sentence10c || "").toUpperCase() +
                                (sentence11c || "").toUpperCase();
                    } else if (currentPos === 1 && typeof addBackgroundToText2b === 'function') {
                        const {sentence20, sentence22, sentence20b, sentence22b, sentence20c, sentence22c, id2} = addBackgroundToText2b(matchingFiszki2, matchingIndexes, currentPos, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b, lesson2FirstPartLength);

                        // zapis globalny, by highlightFirstWord miało dostęp
                        globalSentence20 = sentence20;
                        globalSentence22 = sentence22;
                        globalSentence20b = sentence20b;
                        globalSentence22b = sentence22b;
                        globalSentence20c = sentence20c;
                        globalSentence22c = sentence22c;

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
                        const {sentence30, sentence33, sentence30b, sentence33b, sentence30c, sentence33c, id3} = addBackgroundToText3b(matchingFiszki3, matchingIndexes, currentPos, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b, lesson3FirstPartLength);

                        globalSentence30 = sentence30;
                        globalSentence33 = sentence33;
                        globalSentence30b = sentence30b;
                        globalSentence33b = sentence33b;
                        globalSentence30c = sentence30c;
                        globalSentence33c = sentence33c;

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
                
                sentenceCache[indexDiv][currentPos] = currentSentenceHtml;
            }
            console.log("currentPos =", currentPos, "currentDataName =", currentDataName);
// --- Dodanie strzałek do zdania --- 
            const arrowsHtml = `
    <button class="prev-buttonvv sentence-prev">&lt;</button>

    <div class="sentence-lines">
        <span class="sentence-inner sentence-inner-1">${sentenceCache[indexDiv][0] || ""}</span>
        <span class="sentence-inner sentence-inner-2">${sentenceCache[indexDiv][1] || ""}</span>
        <span class="sentence-inner sentence-inner-3">${sentenceCache[indexDiv][2] || ""}</span>
    </div>

    <button class="next-buttonv sentence-next">&gt;</button>
`;
function highlightThumbDesc(indexDiv) {

    const current = wordIndexCache[indexDiv] || 0;

    $('.thumb-desc .sentence-inner').filter(function () {
        return String($(this).attr('data-indexdiv')) === String(indexDiv);
    }).each(function () {

        const $this = $(this);

        // zabezpieczenie przed ponownym opakowaniem spanów
        const text = $this.text().trim();

        const words = text.split(/\s+/);

        let html = '';

        words.forEach(function(word, i) {

            if (i === current) {
                html += '<span class="green-word">' + word + '</span> ';
            } else {
                html += word + ' ';
            }

        });

        $this.html(html.trim());

    });
}
console.log(
    'thumb-desc | indexDiv:',
    indexDiv,
    '| HTML:',
    $('.thumb-desc .sentence-inner[data-indexdiv="' + indexDiv + '"]').html()
);
if (wordIndexCache[indexDiv] === undefined) {
    wordIndexCache[indexDiv] = 0;
}

highlightThumbDesc(indexDiv);
function syncHighlightForIndexDiv(indexDiv, $block, scroll = false) {

    const currentIndex = wordIndexCache[indexDiv] ?? 0;

    const $spans = $block.find('.sentence-inner span[data-word-index]');

    $spans.removeClass('highlighted');

    const $target = $spans.filter(`[data-word-index="${currentIndex}"]`);

    $target.addClass('highlighted');

    if (scroll && $target.length) {
        $target[0].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });
    }
}
            $(document).on("click", ".next-buttonv, .prev-button", function () {
                const indexDiv = $(this).closest('.sentence-line')
                        .find('.sentence-inner')
                        .data('indexdiv');

                if (wordIndexCache[indexDiv] === undefined) {
                    wordIndexCache[indexDiv] = 0;
                }

                // ...
            });
            // =====================================
// FUNKCJA: POBIERZ TYLKO PRAWDZIWE SŁOWO
// =====================================

function getCleanWordText($element) {

    const $clone = $element.clone();

    // Usuń animację
    $clone.find('.word-animation').remove();

    // Usuń wszystkie przyciski i elementy tłumacza
    $clone.find(
        '.translate-memory-button, ' +
        '.active-word-translate-memory-button, ' +
        '#active-word-translate-memory, ' +
        '.active-word-translate-button, ' +
        '.word-translate-button, ' +
        '[data-ignore-word="true"], ' +
        'button'
    ).remove();

    // Pobierz tekst
    let cleanText = $clone
        .text()
        .replace(
            /tłumacz\s+w\s+zapisanej\s+pamięci/gi,
            ''
        )
        .replace(
            /w\s+zapisanej\s+pamięci/gi,
            ''
        )
        .replace(/\s+/g, ' ')
        .trim();

    console.log(
        '[getCleanWordText] CZYSTE SŁOWO:',
        cleanText
    );

    return cleanText;
}
$(document).on("click", ".next-buttonvv", function () {
    // =====================================
    // ❌ ZAMKNIJ SZCZEGÓŁY POPRZEDNIEGO SŁOWA
    // =====================================

    $('#active-word-details').remove();

    $('.active-word-details').remove();

    $('[id="active-word-details"]').remove();
    const $line = $(this).closest(".sentence-line");

    const $sentence = $line.find(".sentence-inner");

    const indexDiv = Number($sentence.data("indexdiv"));
    const pos = Number($sentence.data("pos"));

    const descKey = `${indexDiv}_${pos}`;

    // inicjalizacja licznika dla konkretnego zdania
    if (wordIndexCache[descKey] === undefined)
        wordIndexCache[descKey] = 0;

// następne słowo
const wiKey = `${indexDiv}_${pos}`;

window.savedWiCache = window.savedWiCache || {};

if (window.highlightMode === 'rodzaj') {

    window.savedWiCache[wiKey] =
        (window.savedWiCache[wiKey] ?? 0);

    wordIndexCache[descKey] = window.savedWiCache[wiKey];

    window.thumbHighlightCache[descKey] =
        window.savedWiCache[wiKey];

} else {

    wordIndexCache[descKey]++;

    window.thumbHighlightCache[descKey] =
        wordIndexCache[descKey] - 1;

}


const currentWordIndex = indexDiv === 1
    ? (window.highlightMode === 'rodzaj'
        ? (wordIndexCache[descKey] ?? 0)
        : (wordIndexCache[descKey] ?? 0) - 1)
    : (wordIndexCache[descKey] ?? 0);

    tablica20aa.push(currentWordIndex);

    console.log("descKey5:", pos);
    console.log("currentWordIndex55:", currentWordIndex);

    // =====================================
    // ANIMACJA
    // =====================================

// =====================================
// 🧹 TŁUMACZ — NIE MOŻE BYĆ CZĘŚCIĄ SŁOWA
// =====================================



// =====================================
// NASTĘPNE SŁOWO
// =====================================

const $nextWord = $line.find(
    `[data-word-index="${currentWordIndex}"]`
).first();
if ($nextWord.length) {



    const $wordClone =
        $nextWord.clone(true, false);

    // =====================================
    // 🧹 USUŃ WSZYSTKIE ELEMENTY TŁUMACZA
    // =====================================

    $wordClone.find(
        '.translate-memory-button, ' +
        '.active-word-translate-memory-button, ' +
        '#active-word-translate-memory, ' +
        '.active-word-translate-button, ' +
        '.word-translate-button, ' +
        '[data-ignore-word="true"]'
    ).remove();


    // =====================================
    // 🧹 USUŃ TEŻ TEKST TŁUMACZA
    // JEŚLI JAKOŚ ZOSTAŁ W TEKŚCIE
    // =====================================

    wordText =
        $wordClone
            .text()
            .replace(
                /tłumacz\s+w\s+zapisanej\s+pamięci/gi,
                ''
            )
            .trim();


    console.log(
        '[next-buttonvv] CZYSTE wordText =',
        wordText
    );
            $nextWord.css({
            position: "relative",
            display: "inline-block"
        });

        $nextWord.append(`
            <div class="word-animation">
                <span class="a1"></span>
                <span class="a2"></span>
                <span class="a3"></span>
                <span class="a4"></span>
                <span class="a5"></span>
                <span class="a6"></span>
                <span class="a7"></span>
                <span class="a8"></span>
                <span class="a9"></span>
                <span class="a10"></span>
            </div>
        `);
}

    // =====================================
    // AUDIO
    // =====================================

const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
const y = sentenceMap[pos];

const blockWords = fiszki10
    .filter(f => f.id?.[1] === y)
    .sort((a, b) => a.id[0] - b.id[0]);

    const fiszkaAudio = blockWords[currentWordIndex];

    console.log("[audio]5 indexDiv =", indexDiv);
    console.log("[audio] pos =", pos);
    console.log("[audio] y =", y);
    console.log("[audio] currentWordIndex =", currentWordIndex);
    console.log("[audio] fiszkaAudio =", fiszkaAudio);

    if (fiszkaAudio?.word?.[0]) {

        const audio = new Audio(fiszkaAudio.word[0]);

        audio.currentTime = 0;

        audio.play().catch(err => {
            console.warn(err);
        });
                // =====================================
        // DODAJ SŁÓWKO DO GLOBALNEGO PASKA
// =====================================
// DODAWANIE SŁOWA DO GLOBALNEJ LISTY
// =====================================

// upewnij się, że pasek istnieje
if (!$("#active-word-bar").length) {
    $("body").prepend(`
        <div id="active-word-bar"></div>
    `);
}


// =====================================
// POBIERZ CZYSTE SŁOWO
// =====================================

let wordText = "";

if ($nextWord.length) {

    wordText = getCleanWordText($nextWord);

}


// =====================================
// FALLBACK Z FISZKI
// =====================================

if (!wordText && fiszkaAudio?.word?.[1]) {

    wordText = fiszkaAudio.word[1];

}

if (!wordText && fiszkaAudio?.word?.[1]) {

    wordText = fiszkaAudio.word[1];
}



// =====================================
// ZAWSZE TWÓRZ TAG
// =====================================

{

    const lessonId =
        $nextWord
            .closest('.image-container3b')
            .attr('data-id') || '';



    console.log(
        'hej100 lessonId =',
        lessonId
    );

    console.log(
        'hej100 target =',
        $nextWord
    );


    const tagKey =
        `${indexDiv}_${pos}_${currentWordIndex}`;

// =====================================
// TŁUMACZ W ZAPISANEJ PAMIĘCI
// PRZYPIĘTY DO GWIAZDKI
// =====================================

const $star = $target.children('.word-play-star').first();

if (
    $star.length &&
    !$star.children('.translate-memory-button').length
) {

const $translateMemory =
    $('<button>')
        .attr({
            type: 'button',
            'data-ignore-word': 'true'
        })
        .addClass('translate-memory-button')
        .text('tłumacz w zapisanej pamięci');


// WAŻNE:
// ten tekst nigdy nie może być liczony jako słowo
$translateMemory.attr(
    'data-ignore-word',
    'true'
);


    $translateMemory.on(
        'click',
        function (e) {

            e.stopPropagation();

            console.log(
                '[translate-memory] słowo:',
                wordText
            );

            console.log(
                '[translate-memory] indexDiv:',
                indexDiv
            );

            console.log(
                '[translate-memory] pos:',
                pos
            );

            console.log(
                '[translate-memory] wordIndex:',
                wordIndex
            );
        }
    );


    $star.append(
        $translateMemory
    );
}
    // =====================================
    // SPRAWDŹ CZY TAG JUŻ ISTNIEJE
    // =====================================

    let $existingTag =
        $('#active-word-bar')
            .find(
                `.active-word-tag[data-tag-key="${tagKey}"]`
            )
            .first();


    // =====================================
    // SŁOWO JUŻ BYŁO ODTWARZANE
    // =====================================

    if ($existingTag.length) {

        let playCount =
            Number(
                $existingTag.attr('data-play-count')
            ) || 1;


        // zwiększ liczbę odtworzeń
        playCount++;


        // zapisz nową liczbę
        $existingTag
            .attr(
                'data-play-count',
                playCount
            );


        // =====================================
        // DODAJ JEDEN ZIELONY PROSTOKĄT
        // =====================================

        $existingTag
            .find('.word-play-count')
            .append(
                $('<span>')
                    .addClass('word-play-segment')
            );


        console.log(
            '[word-tag] ponowne odtworzenie:',
            wordText,
            'ilość:',
            playCount,
            'lekcja:',
            lessonId
        );

    }


    // =====================================
    // NOWE SŁOWO
    // =====================================

    else {

        const $tag = $('<button>')
            .addClass('active-word-tag')
            .attr({

                'data-tag-key':
                    tagKey,

                'data-indexdiv':
                    indexDiv,

                'data-pos':
                    pos,

                'data-word-index':
                    currentWordIndex - 1,

                'data-play-count':
                    1,

                'data-lesson-id':
                    lessonId
            });

// =====================================
// PODSTAWOWE SŁOWO
// =====================================

const $wordText = $('<span>')
    .addClass('word-tag-translation')
    .text(wordText);

$tag.append($wordText);
// =====================================
// FISZKA DLA AKTYWNEGO SŁOWA
// =====================================

// fiszkaAudio została już wcześniej
// wybrana z właściwego bloku i właściwego indeksu

const fiszkaForTag =
    fiszkaAudio;


// =====================================
// 🧠 ZAPIS PEŁNEJ FISZKI W TAGU
// =====================================

$tag.data(
    'fiszkaData',
    fiszkaForTag
);


// =====================================
// DEBUG
// =====================================

console.log(
    '[word-tag] 🎯 FISZKA DLA TAGU:',
    {
        indexDiv,
        pos,
        currentWordIndex,
        fiszkaForTag
    }
);


// =====================================
// POBIERZ DESC
// =====================================

// =====================================
// DESC DLA TŁUMACZA
// =====================================

const descValue =
    fiszkaForTag?.desc ??
    '';

$tag.data('desc', descValue);
// =====================================
// ZAPISZ DESC W TAGU
// =====================================

$tag.data(
    'desc',
    descValue
);


// =====================================
// PRZYCISK TŁUMACZ
// =====================================

const $translateButton =
    $('<button>')
        .attr({
            type: 'button'
        })
        .addClass(
            'active-word-translate-button'
        )
        .text(
            'TŁUMACZ'
        );


// =====================================
// PO KLIKNIĘCIU TŁUMACZ POKAŻ DESC
// =====================================

$translateButton.on(
    'click',
    function (e) {

        e.preventDefault();
        e.stopPropagation();

        const $currentTag =
            $(this)
                .closest(
                    '.active-word-tag'
                );


        const currentDesc =
            $currentTag.data('desc') ?? '';


        console.log(
            '[TŁUMACZ][next-buttonvv]',
            {
                currentDesc,
                fiszkaForTag
            }
        );


        // =====================================
        // ZMIEŃ TEKST W TAGU NA DESC
        // =====================================

        $currentTag
            .find(
                '.word-tag-translation'
            )
            .first()
            .text(
                currentDesc
            );

    }
);


$tag.append(
    $translateButton
);
// =====================================



        // =====================================
        // PROSTOKĄTY ODTWORZEŃ
        // =====================================

        const $playCount =
            $('<span>')
                .addClass('word-play-count');


        // pierwsze odtworzenie
        $playCount.append(
            $('<span>')
                .addClass('word-play-segment')
        );


        $tag.append($playCount);


        // =====================================
        // LEKCJA
        // =====================================

        $tag.append(
            $('<span>')
                .addClass('word-lesson')
                .text(` - lekcja ${lessonId}`)
        );


        // =====================================
        // DODAJ DO GLOBALNEGO PASKA
        // =====================================

// =====================================
// 🧠 RODZINA SŁÓW ZDANIA
// =====================================

const familyKey = `${indexDiv}_${pos}`;

const wordIndex = currentWordIndex - 1;

console.log(
    '[WORD-FAMILY]',
    'familyKey =', familyKey,
    'wordIndex =', wordIndex,
    'wordText =', wordText
);


// =====================================
// SZUKAMY RODZINY W CAŁYM PASKU
// =====================================

let $family = $('#active-word-bar')
    .children('.active-word-family')
    .filter(function () {

        return String(
            $(this).attr('data-family-key')
        ) === String(familyKey);

    })
    .first();


// =====================================
// NOWA RODZINA
// =====================================

if (!$family.length) {

    console.log(
        '[WORD-FAMILY] NOWA RODZINA:',
        familyKey
    );


    $family = $('<div>')
        .addClass('active-word-family')
        .attr(
            'data-family-key',
            familyKey
        );


    // -------------------------------------
    // PIONOWE SŁOWA W RODZINIE
    // -------------------------------------

    $family.css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        gap: '3px',
        whiteSpace: 'normal',
        width: 'max-content'
    });


    // -------------------------------------
    // PIERWSZE SŁOWO
    // -------------------------------------

    $family.append($tag);


    // -------------------------------------
    // CAŁA RODZINA DO PASKA
    // -------------------------------------
    //
    // prepend zachowuje Twoją obecną
    // kolejność rodzin
    //

    $('#active-word-bar')
        .prepend($family);


    console.log(
        '[WORD-FAMILY] DODANO NOWĄ RODZINĘ DO BAR'
    );

}


// =====================================
// ISTNIEJĄCA RODZINA
// =====================================

else {

    console.log(
        '[WORD-FAMILY] ISTNIEJĄCA RODZINA:',
        familyKey,
        '→ DODAJĘ SŁOWO PIONOWO:',
        wordText
    );


    // -------------------------------------
    // KOLEJNE SŁOWO POD POPRZEDNIM
    // -------------------------------------

    $family.append($tag);


    console.log(
        '[WORD-FAMILY] DODANO POD SPODEM:',
        wordText
    );
}


// =====================================
// INFORMACJE TAGU
// =====================================

$tag.attr({
    'data-family-key': familyKey,
    'data-word-index': wordIndex
});


        // =====================================
        // AKTUALIZUJ PODŚWIETLENIE
        // =====================================

        updateActiveWordHighlight();


        // =====================================
        // WYDRUKUJ AKTYWNE SŁOWO
        // =====================================

        printActiveWord($tag);

afterWordTagAdded();
        console.log(
            '[word-tag] added:',
            wordText,
            'lekcja:',
            lessonId,
            'index:',
            currentWordIndex - 1
        );

    }
    }
    }
    // =====================================
    // PODŚWIETLENIE
    // =====================================

    syncHighlightForIndexDiv(indexDiv, pos);

});
// =====================================
// TŁUMACZ — POKAŻ / UKRYJ DESC
// =====================================

$(document)
    .off(
        'click.activeWordTranslate',
        '.active-word-translate-button'
    )
    .on(
        'click.activeWordTranslate',
        '.active-word-translate-button',
        function (e) {

            e.preventDefault();
            e.stopPropagation();

            const $button = $(this);
            const $tag = $button.closest('.active-word-tag');

            console.log(
                '[TŁUMACZ] klik:',
                $tag
            );

            // =====================================
            // JEŚLI TŁUMACZENIE JUŻ ISTNIEJE
            // =====================================

            const $translation =
                $tag.children('.word-tag-translation');

            if ($translation.length) {

                $translation.remove();

                $button.text('TŁUMACZ');

                console.log(
                    '[TŁUMACZ] zamknięto'
                );

                return;
            }

            // =====================================
            // POBIERZ DESC
            // =====================================

            const desc =
                $tag.data('desc');

            console.log(
                '[TŁUMACZ] desc:',
                desc
            );

            if (
                desc === undefined ||
                desc === null ||
                desc === ''
            ) {
                console.warn(
                    '[TŁUMACZ] brak desc'
                );

                return;
            }

            // =====================================
            // UTWÓRZ KONTENER TŁUMACZENIA
            // =====================================

            const $translationBox =
                $('<span>')
                    .addClass('word-tag-translation');

            // =====================================
            // DESC JAKO TABLICA
            // =====================================

            if (Array.isArray(desc)) {

                desc.forEach(function (version) {

                    $('<div>')
                        .addClass('word-tag-translation-version')
                        .html(version)
                        .appendTo($translationBox);

                });

            }

            // =====================================
            // DESC JAKO STRING
            // =====================================

            else {

                $translationBox.html(desc);

            }

            // =====================================
            // DODAJ DO TAGU
            // =====================================

            $tag.append($translationBox);

            $button.text('UKRYJ');

            console.log(
                '[TŁUMACZ] otwarto:',
                desc
            );
        }
    );
            $(document).on("click", ".prev-buttonv, .prev-button", function () {
                const indexDiv = $(this).closest('.sentence-line')
                        .find('.sentence-inner')
                        .data('indexdiv');

                if (wordIndexCache[indexDiv] === undefined) {
                    wordIndexCache[indexDiv] = 0;
                }

                // ...
            });
            $(document).on("click", ".prev-buttonvv", function () {

    const $line = $(this).closest(".sentence-line");

    const $sentence = $line.find(".sentence-inner");

    const indexDiv = Number($sentence.data("indexdiv"));
    const pos = Number($sentence.data("pos"));

    const descKey = `${indexDiv}_${pos}`;

    // inicjalizacja licznika dla konkretnego zdania
    if (wordIndexCache[descKey] === undefined)
        wordIndexCache[descKey] = 0;

// następne słowo
const wiKey = `${indexDiv}_${pos}`;

window.savedWiCache = window.savedWiCache || {};

if (window.highlightMode === 'rodzaj') {

    window.savedWiCache[wiKey] =
        (window.savedWiCache[wiKey] ?? 0);

    wordIndexCache[descKey] = window.savedWiCache[wiKey];

    window.thumbHighlightCache[descKey] =
        window.savedWiCache[wiKey];

} else {

    wordIndexCache[descKey]--;

    window.thumbHighlightCache[descKey] =
        wordIndexCache[descKey] - 1;

}


const currentWordIndex = indexDiv === 1
    ? (window.highlightMode === 'rodzaj'
        ? (wordIndexCache[descKey] ?? 0)
        : (wordIndexCache[descKey] ?? 0) + 1)
    : (wordIndexCache[descKey] ?? 0);

    tablica20aa.push(currentWordIndex);
console.log('hej350', indexDiv, pos, wordIndexCache[descKey], currentWordIndex);
    console.log("descKey5:", pos);
    console.log("currentWordIndex:", currentWordIndex);

    // =====================================
    // ANIMACJA
    // =====================================

    const $nextWord = $line.find(
        `[data-word-index="${currentWordIndex}"]`
    ).first();

    if ($nextWord.length) {

        $line.find(".word-animation").remove();

        $nextWord.css({
            position: "relative",
            display: "inline-block"
        });

        $nextWord.append(`
            <div class="word-animation">
                <span class="a1"></span>
                <span class="a2"></span>
                <span class="a3"></span>
                <span class="a4"></span>
                <span class="a5"></span>
                <span class="a6"></span>
                <span class="a7"></span>
                <span class="a8"></span>
                <span class="a9"></span>
                <span class="a10"></span>
            </div>
        `);
    }

    // =====================================
    // AUDIO
    // =====================================

const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
const y = sentenceMap[pos];

const blockWords = fiszki10
    .filter(f => f.id?.[1] === y)
    .sort((a, b) => a.id[0] - b.id[0]);

    const fiszkaAudio = blockWords[currentWordIndex];

    console.log("[audio]5 indexDiv =", indexDiv);
    console.log("[audio] pos =", pos);
    console.log("[audio] y =", y);
    console.log("[audio] currentWordIndex =", currentWordIndex);
    console.log("[audio] fiszkaAudio =", fiszkaAudio);

    if (fiszkaAudio?.word?.[0]) {

        const audio = new Audio(fiszkaAudio.word[0]);

        audio.currentTime = 0;

        audio.play().catch(err => {
            console.warn(err);
        });
                // DODAJ SŁÓWKO DO GLOBALNEGO PASKA
// =====================================
// DODAJ SŁÓWKO DO GLOBALNEGO PASKA
// =====================================

// upewnij się, że pasek istnieje
if (!$("#active-word-bar").length) {
    $("body").prepend(`
        <div id="active-word-bar"></div>
    `);
}


// =====================================
// POBIERZ CZYSTE SŁOWO
// =====================================

let wordText = "";

if ($nextWord.length) {

    wordText = $nextWord
        .clone()
        .children()
        .remove()
        .end()
        .text()
        .trim();

}


// fallback z fiszki

if (!wordText) {

    wordText =
        fiszkaAudio.word?.[1] ||
        "";

}


if (wordText) {

    // =====================================
    // UNIKALNY KLUCZ SŁOWA
    // =====================================

    const lessonId =
        $nextWord
            .closest('.image-container3b')
            .attr('data-id') || "";


    console.log(
        'hej100 lessonId =',
        lessonId
    );


    console.log(
        'hej100 target =',
        $nextWord
    );


    const tagKey =
        `${indexDiv}_${pos}_${currentWordIndex}`;


    // =====================================
    // SPRAWDŹ CZY TAG JUŻ ISTNIEJE
    // =====================================

    let $existingTag =
        $("#active-word-bar")
            .find(
                `.active-word-tag[data-tag-key="${tagKey}"]`
            )
            .first();


    // =====================================
    // SŁOWO JUŻ BYŁO ODTWARZANE
    // =====================================

    if ($existingTag.length) {

        let playCount =
            Number(
                $existingTag.attr("data-play-count")
            ) || 1;


        // zwiększ ilość odtworzeń
        playCount++;


        // zapisz nową ilość
        $existingTag.attr(
            "data-play-count",
            playCount
        );


        // =====================================
        // DODAJ JEDEN ZIELONY PROSTOKĄT
        // =====================================

        $existingTag
            .find(".word-play-count")
            .append(
                $("<span>")
                    .addClass("word-play-segment")
            );


        console.log(
            '[word-tag] ponowne odtworzenie:',
            wordText,
            'ilość:',
            playCount,
            'lekcja:',
            lessonId
        );

    }


    // =====================================
    // NOWE SŁOWO
    // =====================================

    else {

        const $tag = $("<button>")
            .addClass("active-word-tag")
            .attr({

                "data-tag-key":
                    tagKey,

                "data-indexdiv":
                    indexDiv,

                "data-pos":
                    pos,

                "data-word-index":
                    currentWordIndex - 1,

                "data-play-count":
                    1,

                "data-lesson-id":
                    lessonId
            });


        // =====================================
        // TEKST SŁOWA
        // =====================================

        $tag.append(
            $("<span>")
                .addClass("word-tag-text")
                .text(wordText)
        );


        // =====================================
        // PASEK ODTWORZEŃ
        // =====================================

        const $playCount = $("<span>")
            .addClass("word-play-count");


        // pierwsze odtworzenie = pierwszy prostokąt
        $playCount.append(
            $("<span>")
                .addClass("word-play-segment")
        );


        $tag.append($playCount);


        // =====================================
        // LEKCJA
        // =====================================

        $tag.append(
            $("<span>")
                .addClass("word-lesson")
                .text(` - lekcja ${lessonId}`)
        );


        // =====================================
        // DODAJ DO GLOBALNEGO PASKA
        // =====================================

// =====================================
// 🧠 RODZINA SŁÓW
// =====================================

const familyKey = `${indexDiv}_${pos}`;
const wordIndex = currentWordIndex - 1;

console.log(
    '[WORD FAMILY] ============================',
    '\n familyKey:', familyKey,
    '\n wordIndex:', wordIndex,
    '\n wordText:', wordText
);


// =====================================
// OZNACZ TAG
// =====================================

$tag.attr({
    "data-family-key": familyKey,
    "data-word-index": wordIndex
});


// =====================================
// SZUKAMY RODZINY W CAŁYM PASKU
// NIE TYLKO W children()
// =====================================

let $family = $("#active-word-bar")
    .find(".active-word-family")
    .filter(function () {

        return String(
            $(this).attr("data-family-key")
        ) === String(familyKey);

    })
    .first();


console.log(
    '[WORD FAMILY] znaleziono rodzinę:',
    $family.length
);


// =====================================
// JEŚLI RODZINA NIE ISTNIEJE
// =====================================

if (!$family.length) {

    console.log(
        '[WORD FAMILY] TWORZĘ NOWĄ:',
        familyKey
    );


    // -------------------------------------
    // KONTENER JEDNEJ RODZINY
    // -------------------------------------

    $family = $("<div>")
        .addClass("active-word-family")
        .attr(
            "data-family-key",
            familyKey
        );


    // -------------------------------------
    // WAŻNE:
    // RODZINA = PION
    // -------------------------------------

    $family.css({
        "display": "flex",
        "flex-direction": "column",
        "align-items": "flex-start",
        "justify-content": "flex-start",
        "flex-wrap": "nowrap",
        "gap": "3px",
        "white-space": "normal",
        "width": "max-content",
        "height": "auto",
        "position": "relative"
    });


    // -------------------------------------
    // TAG NIE MOŻE UCIEC W POZIOMIE
    // -------------------------------------

    $tag.css({
        "display": "block",
        "position": "relative",
        "left": "auto",
        "top": "auto",
        "float": "none",
        "margin": "0"
    });


    // -------------------------------------
    // PIERWSZE SŁOWO
    // -------------------------------------

    $family.append($tag);


    // -------------------------------------
    // CAŁA RODZINA DO GLOBALNEGO PASKA
    // -------------------------------------

    $("#active-word-bar").append($family);


    console.log(
        '[WORD FAMILY] NOWA RODZINA DODANA DO BAR:',
        familyKey
    );

}


// =====================================
// RODZINA JUŻ ISTNIEJE
// =====================================

else {

    console.log(
        '[WORD FAMILY] ISTNIEJE → DODAJĘ POD SPODEM:',
        familyKey,
        wordText
    );


    // -------------------------------------
    // WYMUSZAMY PION
    // -------------------------------------

    $family.css({
        "display": "flex",
        "flex-direction": "column",
        "align-items": "flex-start",
        "flex-wrap": "nowrap"
    });


    // -------------------------------------
    // KOLEJNE SŁOWO
    // -------------------------------------

    $tag.css({
        "display": "block",
        "position": "relative",
        "left": "auto",
        "top": "auto",
        "float": "none",
        "margin": "0"
    });


    // -------------------------------------
    // DODAJEMY DO TEJ SAMEJ RODZINY
    // -------------------------------------

    $family.append($tag);


    console.log(
        '[WORD FAMILY] DODANO PIONOWO:',
        wordText,
        '→',
        familyKey
    );
}

    }

}
    }

    // =====================================
    // PODŚWIETLENIE
    // =====================================

    syncHighlightForIndexDiv(indexDiv, pos);

});
// --- Pobranie bieżącego zdania na podstawie currentPos ---
            const currentSentence = sentenceCache[indexDiv][currentPos];
            console.log('hej160', currentSentence);
// --- Rozbijamy zdanie na linie po <br> ---
            const lines = currentSentence.split('<br>');

// --- Tworzenie bloków zdań z strzałkami ---
            const processedLines = lines.map((line, lineIndex) => {
                if (!line.trim())
                    return "";

                // Każda linia może mieć swój własny indexDiv i currentPos, jeśli potrzebne
                const leftBtn = `<button class="prev-buttonvv prev-button${lineIndex + 1}" data-pos="${currentPos}">&lt;</button>`;
                const rightBtn = `<button class="next-buttonvv next-button${lineIndex + 1}" data-pos="${currentPos}">&gt;</button>`;

                // Każde sentence-inner ma teraz treść bieżącej linii i poprawnie przypisane data-pos
                return `
        <div class="sentence-line">
            ${leftBtn}
            <span class="sentence-inner" data-pos="${currentPos}" data-line="${lineIndex}" data-indexDiv="${indexDiv}">${line}</span>
            ${rightBtn}
        </div>
    `;
            });
// --- Funkcja do renderowania zdań dla danego indexDiv i currentPos ---
            function renderSentenceBlock(indexDiv, currentPos) {
                const currentSentence = sentenceCache[indexDiv][currentPos];
                if (!currentSentence)
                    return;

                const lines = currentSentence.split('<br>');

                const $sentenceBlock = $('<div>').addClass('sentence-block');

                lines.forEach((line, lineIndex) => {
                    if (!line.trim())
                        return;

                    const $lineDiv = $(`
            <div class="sentence-line">
                <button class="prev-buttonv" data-pos="${currentPos}" data-indexDiv="${indexDiv}">&lt;</button>
                <span class="sentence-inner" data-pos="${currentPos}" data-line="${lineIndex}" data-indexDiv="${indexDiv}">${line}</span>
                <button class="next-buttonv" data-pos="${currentPos}" data-indexDiv="${indexDiv}">&gt;</button>
            </div>
        `);
                    $sentenceBlock.append($lineDiv);
                });

                $('#your-container').html($sentenceBlock); // <- wstawiamy do swojego kontenera
            }

// --- Kliknięcie w zdanie otwiera je ---
            $(document).on('click', '.sentence-inner', function () {
                const indexDiv = parseInt($(this).attr('data-indexDiv'));
                const currentPos = parseInt($(this).attr('data-pos'));

                // Renderujemy dokładnie to zdanie
                renderSentenceBlock(indexDiv, currentPos);
            });

// --- Obsługa strzałek ---



const $sentenceDiv = $('<div>')
    .addClass('sentence-block')
    .attr('data-pos', currentPos)
    .html(processedLines.join(""));

            $textContainer.append($sentenceDiv);
            function highlightFirstWordsInSentenceBlock($sentenceBlock) {

                $sentenceBlock.find('.sentence-inner').each(function () {

                    const $inner = $(this);

                    let text = $inner.html().trim();

                    // rozbijamy na słowa (bez HTML)
                    let words = text.split(/\s+/);
                    if (words.length === 0)
                        return;

                    // podmieniamy pierwsze słowo
                    words[0] = `<span class="highlighted" data-word-index="0">${words[0]}</span>`;

                    // składamy całą linię
                    const rebuilt = words.join(" ");

                    $inner.html(rebuilt);
                });
            }
window.mojeidGlobal = window.mojeidGlobal || [];
window.mojeidGlobal1b = window.mojeidGlobal1b || [];
window.sharedBaseState = window.sharedBaseState || {};
currentId = tripletIds[currentPos] ?? '';
$container.attr('data-id', currentId);
function attachArrowNavigation($sentenceBlock, indexDiv, sentenceMap) {

    console.log('attachArrowNavigation start', { indexDiv, hasBlock: !!$sentenceBlock.length });

    if (!$sentenceBlock || $sentenceBlock.length === 0) {
        console.warn('Brak $sentenceBlock dla indexDiv:', indexDiv);
        return;
    }

    const savedId = Number($container.attr('data-id'));
// ======================================================
// 🔥 ZNAJDŹ KONTENER PO data-id
// ======================================================

const $lessonContainer = $('.image-container3b')
    .filter(function () {
        return Number($(this).attr('data-id')) === savedId;
    })
    .first();


console.log('ZNALEZIONY LESSON CONTAINER:', {
    savedId: savedId,
    found: $lessonContainer.length
});


if (!$lessonContainer.length) {
    console.warn('Brak image-container3b dla data-id:', savedId);
    return;
}


// ======================================================
// 🔥 ZNAJDŹ SENTENCE-BLOCK W TEJ LEKCJI
// ======================================================

const sentencePos = Number($sentenceBlock.attr('data-pos'));

const $mySentenceBlock = $lessonContainer
    .find('.sentence-block')
    .filter(function () {
        return Number($(this).attr('data-pos')) === sentencePos;
    })
    .first();


console.log('MOJ SENTENCE BLOCK:', {
    savedId,
    sentencePos,
    found: $mySentenceBlock.length
});
    // ======================================================
    // 🔥 ODCZYT STANU (RESTORE)
    // ======================================================
    let currentWordIndex = 0;

    const prefix = `${savedId}-${indexDiv}-`;

    for (const key in window.sharedBaseState) {
        if (key.startsWith(prefix)) {
            currentWordIndex = Math.max(
                currentWordIndex,
                window.sharedBaseState[key]
            );
        }
    }


    const updateHighlightAll = () => {

        console.log('UPDATE CALL | MODE =', window.highlightMode);

        // ======================================================
        // TRYB ROZBUDOWANY
        // ======================================================
        if (window.highlightMode === 'rodzaj') {

            console.log('TRYB 2 (rodzaj)');

            $sentenceBlock.find('.sentence-line').each(function (lineIndex) {

                const $line = $(this);

                const $inner = $line.find('.sentence-inner')
                    .attr('data-sentence-map', JSON.stringify(sentenceMap));

                const raw = $inner.text().trim();
                if (!raw) return;

                const tokens = raw.split(/\s+/);

                let pronunciationLabel = '';
                let pronunciationFirstWord = '';

                const pos = Number($inner.data('pos'));
                const sharedBase = xMap[pos];

                if (tokens.length > 0) {
                    const first = tokens[0];

                    if (first.toLowerCase().startsWith('wymowa:')) {
                        pronunciationLabel = 'wymowa:';
                        pronunciationFirstWord = first.slice('wymowa:'.length);
                        tokens.shift();
                    }
                }

                const id = indexDiv + "-" + lineIndex + "-" + currentWordIndex;

                const secondValues = matchingIndexes2.map(item => Number(item[1]));
                const secondValuesSet = new Set(secondValues);

const wiKey = `${indexDiv}_${currentPos}`;

window.savedWiCache = window.savedWiCache || {};

// pierwsze uruchomienie - zapamiętaj pierwsze podświetlenie
if (window.savedWiCache[wiKey] === undefined) {

    const firstHighlighted = tokens.findIndex((word, wi) => {
        return secondValuesSet.has(sharedBase + wi);
    });

    window.savedWiCache[wiKey] = firstHighlighted >= 0
        ? firstHighlighted
        : 0;
}

const savedWi = window.savedWiCache[wiKey];

const wordsHtml = tokens.map((word, wi) => {

    const currentX = sharedBase + wi;

    const shouldHighlight = wi === savedWi;

    if (shouldHighlight) {

        console.log(
            "SAVE MOJE WI:",
            wiKey,
            "wi:",
            wi,
            "word:",
            word
        );

        // ======================================================
        // diff calc (Twoja logika)
        // ======================================================
        const calculateDiffPerHighlighted = ($scope) => {

            const $all = $scope.find('[data-sentence-id2]');
            const $first = $all.first();

            if (!$first.length) return [];

            const firstId = Number($first.attr('data-sentence-id2'));

            const results = [];

            $scope.find('.highlighted[data-sentence-id2]').each(function () {

                const $el = $(this);

                const currentId = Number($el.attr('data-sentence-id2'));

                results.push({
                    el: $el,
                    id: currentId,
                    diff: currentId - firstId
                });

            });

            return results;
        };

        const diffs = calculateDiffPerHighlighted($sentenceBlock);

        window.mojeidGlobal.push({
            indexDiv,
            currentPos,
            diffs
        });

        return `<span class="highlighted"
            data-word-index="${wi}"
            data-sentence-id2="${currentX}"
            data-mojeid="${id}"
            style="cursor:pointer;"
        >${word}</span>`;
    }

    return `<span
        data-word-index="${wi}"
        data-sentence-id2="${currentX}"
        style="cursor:pointer;"
    >${word}</span>`;

}).join(" ");

                const pronunciationHtml = pronunciationLabel
                    ? `<span class="pronunciation-label">${pronunciationLabel}</span>${pronunciationFirstWord ? ' ' + pronunciationFirstWord : ''} `
                    : '';

                $inner.html(pronunciationHtml + wordsHtml);
            });

        } else {

            console.log('TRYB 1 (normal)');

            $sentenceBlock.find('.sentence-line').each(function (lineIndex) {

                const $inner = $(this).find('.sentence-inner');
                const raw = $inner.text().trim();
                if (!raw) return;

                const tokens = raw.split(/\s+/);

                let pronunciationLabel = '';
                let pronunciationFirstWord = '';

                if (tokens.length > 0) {
                    const first = tokens[0];

                    if (first.toLowerCase().startsWith('wymowa:')) {
                        pronunciationLabel = 'wymowa:';
                        pronunciationFirstWord = first.slice('wymowa:'.length);
                        tokens.shift();
                    }
                }

                const id = indexDiv + "-" + lineIndex + "-" + currentWordIndex;

                const wordsHtml = tokens.map((word, wi) => {

                    const isActive = wi === currentWordIndex;

                    return `<span
                        class="${isActive ? 'highlighted' : ''}"
                        data-word-index="${wi}"
                        data-mojeid="${id}"
                        style="cursor:pointer;"
                    >${word}</span>`;
                }).join(" ");

                const pronunciationHtml = pronunciationLabel
                    ? `<span class="pronunciation-label">${pronunciationLabel}</span>${pronunciationFirstWord ? ' ' + pronunciationFirstWord : ''} `
                    : '';

                $inner.html(pronunciationHtml + wordsHtml);
            });
        }


        // ======================================================
        // 🔥 ZAPIS STANU (PER savedId + indexDiv + sharedBase)
        // ======================================================
        const prefix = `${savedId}-${indexDiv}-`;

        $sentenceBlock.find('.sentence-line').each(function () {

            const $line = $(this);
            const $inner = $line.find('.sentence-inner');

            const raw = $inner.text().trim();
            if (!raw) return;

            const tokens = raw.split(/\s+/);
            const pos = Number($inner.data('pos'));
            const sharedBase = xMap[pos];

            const key = `${savedId}-${indexDiv}-${sharedBase}`;

            window.sharedBaseState[key] = currentWordIndex;
        });

window.mojeidGlobal[indexDiv] = {
    indexDiv: indexDiv,
    currentWordIndex: currentWordIndex
};
window.mojeidGlobal = window.mojeidGlobal || [];

if (!Array.isArray(window.mojeidGlobal)) {
    window.mojeidGlobal = [];
}

window.mojeidGlobal.push({
    indexDiv: indexDiv,
    currentWordIndex: currentWordIndex
});
window.mojeidGlobal1b[indexDiv] = {
    indexDiv: indexDiv,
    currentWordIndex: currentWordIndex
};
window.mojeidGlobal1b = window.mojeidGlobal1b || [];

if (!Array.isArray(window.mojeidGlobal1b)) {
    window.mojeidGlobal1b = [];
}

window.mojeidGlobal1b.push({
    indexDiv: indexDiv,
    currentWordIndex: currentWordIndex
});
        // ======================================================
        // dodatkowe debugi
        // ======================================================
        window.mojeidGlobalc = currentWordIndex;
        window.mojeidGlobal2 = indexDiv;
        window.mojeidGlobal3 = currentPos;

if (window.systemStarted) {
    sendHighlightToFiszki(
        indexDiv,
        currentWordIndex,
        currentPosCache[indexDiv]
    );
}
   };


    // ======================================================
    // NEXT
$sentenceBlock.find('.next-buttonvv')
.off('click.attachNav')
.on('click.attachNav', function () {

if (window.highlightMode === 'rodzaj') {

    const wiKey = `${indexDiv}_${currentPos}`;

    window.savedWiCache = window.savedWiCache || {};

    window.savedWiCache[wiKey] =
        (window.savedWiCache[wiKey] ?? 0) + 1;

    currentWordIndex = window.savedWiCache[wiKey];

} else {

    currentWordIndex++;

}

const descKey = indexDiv + "_" + currentPos;

// zapis głównej pamięci
wordIndexCache[descKey] = currentWordIndex;

// zapis dla thumb-desc
window.thumbHighlightCache = window.thumbHighlightCache || {};
window.thumbHighlightCache[descKey] = currentWordIndex;

console.log("NEXT SAVE thumb:", {
    descKey,
    currentWordIndex
});

    console.log("NEXT:", {
        indexDiv,
        currentWordIndex
    });

    updateHighlightAll();

    syncHighlightForIndexDiv(
        descKey,
        descCache[descKey]
    );
});


    // ======================================================
    // PREV
    // ======================================================
    $sentenceBlock.find('.prev-buttonvv')
    .off('click.attachNav')
    .on('click.attachNav', function () {

        if (window.highlightMode === 'rodzaj') {

            const wiKey = `${indexDiv}_${currentPos}`;

            window.savedWiCache = window.savedWiCache || {};

            // zabezpieczenie przed zejściem poniżej 0
            window.savedWiCache[wiKey] = Math.max(
                0,
                (window.savedWiCache[wiKey] ?? currentWordIndex) - 1
            );

            currentWordIndex = window.savedWiCache[wiKey];

        } else {

            if (currentWordIndex > 0) {
                currentWordIndex--;
            }

        }

        const descKey = indexDiv + "_" + currentPos;

        // zapis głównej pamięci
        wordIndexCache[descKey] = currentWordIndex;

        // zapis dla thumb-desc
        window.thumbHighlightCache = window.thumbHighlightCache || {};
        window.thumbHighlightCache[descKey] = currentWordIndex;

        console.log("PREV SAVE thumb:", {
            descKey,
            currentWordIndex
        });

        console.log("Kliknięto słowo:", currentWordIndex);

        // przesuwamy podświetlenie
        syncHighlightForIndexDiv(
            descKey,
            descCache[descKey]
        );

        updateHighlightAll();
    });


    // ======================================================
    // CLICK WORD
    // ======================================================
    $sentenceBlock
        .off('click.attachNav', '.sentence-inner span')
        .on('click.attachNav', '.sentence-inner span', function (e) {

            e.stopImmediatePropagation();

            const wi = Number($(this).data('word-index'));

            if (!isNaN(wi)) {
                currentWordIndex = wi;
                updateHighlightAll();
            }
const descKey = indexDiv + "_" + currentPos;

// zapis głównej pamięci
wordIndexCache[descKey] = currentWordIndex;

// zapis dla thumb-desc
window.thumbHighlightCache = window.thumbHighlightCache || {};
window.thumbHighlightCache[descKey] = currentWordIndex;

console.log("NEXT SAVE thumb:", {
    descKey,
    currentWordIndex
});

console.log("Kliknięto słowo:", currentWordIndex);

// przesuwamy podświetlenie
syncHighlightForIndexDiv(
    descKey,
    descCache[descKey]
);

// <<< DODAJ TO >>>
restoreWordAnimation(indexDiv, currentPos, currentWordIndex);
        });


    updateHighlightAll();
}
function restoreWordAnimation(indexDiv, pos, currentWordIndex) {
    currentWordIndex = currentWordIndex + 1;
    const $line = $(`.sentence-inner[data-indexdiv="${indexDiv}"][data-pos="${pos}"]`)
        .closest('.sentence-line');

    if (!$line.length) return;

    const descKey = `${indexDiv}_${pos}`;

    let $target = $line.find(
        `[data-word-index="${currentWordIndex - 1}"]`
    ).first();

    if (!$target.length) {

        wordIndexCache[descKey] = 0;

        $target = $line.find('[data-word-index="0"]').first();
    }

    if (!$target.length) return;

    $('.word-animation').remove();

    $target.css({
        position: 'relative',
        display: 'inline-block'
    });

    $target.append(`
        <div class="word-animation">
            <span class="a1"></span>
            <span class="a2"></span>
            <span class="a3"></span>
            <span class="a4"></span>
            <span class="a5"></span>
            <span class="a6"></span>
            <span class="a7"></span>
            <span class="a8"></span>
            <span class="a9"></span>
            <span class="a10"></span>
        </div>
    `);

    tablica20aa.push(currentWordIndex);

    const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
    const y = sentenceMap[pos];

    const blockWords = fiszki10
        .filter(f => f.id?.[1] === y)
        .sort((a, b) => a.id[0] - b.id[0]);

    const audioIndex = currentWordIndex === 0
        ? 0
        : currentWordIndex - 1;

    const fiszkaAudio = blockWords[audioIndex];

    if (fiszkaAudio?.word?.[0]) {

        const audio = new Audio(fiszkaAudio.word[0]);

        audio.currentTime = 0;

        audio.play().catch(err => {
            console.warn('[audio] blocked or failed:', err);
        });
    }

    syncHighlightForIndexDiv(indexDiv, pos);
}
function sendHighlightToFiszki(indexDiv, currentWordIndex, currentPosCacheValue) {

    console.log('sendHighlightToFiszki', {
        indexDiv,
        currentWordIndex,
        currentPosCacheValue
    });

    switch (currentPosCacheValue) {

        case 0:
            highlightFirstWord(
                indexDiv,
                currentPosCacheValue,
                currentWordIndex
            );
            break;

        case 1:
            highlightFirstWord2(
                indexDiv,
                currentPosCacheValue,
                currentWordIndex
            );
            break;

        case 2:
            highlightFirstWord3(
                indexDiv,
                currentPosCacheValue,
                currentWordIndex
            );
            break;

        default:
            console.warn('Nieznany currentPosCache:', currentPosCacheValue);
    }
}
            highlightFirstWordsInSentenceBlock($sentenceDiv);
            attachArrowNavigation($sentenceDiv, indexDiv);

            // --- Linki do lekcji ---
            const singleLink = `demo1angielski.html?category=${selectedCategory}&data=${tripletIds[currentPos]}`;
            const tripletLink = `demo1angielski.html?category=${selectedCategory}&data=${tripletIds}`;

            const $singleLinkA = $('<a>')
                    .attr({href: singleLink})
                    .addClass('text-link')
                    .text('➡ Otwórz lekcję z wybranym zdaniem');

            const $tripletLinkA = $('<a>')
                    .attr({href: tripletLink})
                    .addClass('text-link')
                    .text('➡ Otwórz całą lekcję (3 zdania)');

            $textContainer.append($singleLinkA, $tripletLinkA);
            function printActiveWord($tag) {

    const $text = $tag.find('.word-tag-text');

    if (!$text.length) return;

    const fullText = $text.text();

    $text.text('');

    let i = 0;

    const interval = setInterval(function () {

        $text.text(fullText.substring(0, i + 1));

        i++;

        if (i >= fullText.length) {
            clearInterval(interval);
        }

    }, 45);
}
function updateActiveWordHighlight() {

    const $tags =
        $('#active-word-bar')
            .find('.active-word-tag');


    // =====================================
    // USUŃ STARE KLASY
    // =====================================

    $tags.removeClass(
        'word-fresh word-previous'
    );


    // =====================================
    // NAJNOWSZE SŁOWO — PIERWSZE Z LEWEJ
    // =====================================

    const $firstTag =
        $tags.eq(0);

    $firstTag.addClass(
        'word-fresh'
    );


    // =====================================
    // PRZEDOSTATNIE SŁOWO
    // =====================================

    $tags.eq(1).addClass(
        'word-previous'
    );


    // =====================================
    // ZAWSZE POKAŻ PANEL PIERWSZEGO SŁOWA
    // =====================================

    if ($firstTag.length) {

        openActiveWordDetails(
            $firstTag
        );
    }
}

$(document).on('mouseenter', '.image-container3b', function () {

    const $block = $(this);

    console.log(
        '[mouseenter] ENTER image-container3b'
    );


    // =====================================
    // LINIA
    // =====================================

    const $line =
        $block
            .find('.sentence-line')
            .first();


    const indexDiv =
        Number(
            $line
                .find('.sentence-inner')
                .data('indexdiv')
        );


    const pos =
        Number(
            $line
                .find('.sentence-inner')
                .data('pos')
        );


    const wiKey =
        `${indexDiv}_${pos}`;

    const descKey =
        `${indexDiv}_${pos}`;

// =====================================
// AKTYWNA RODZINA Z LESSON-INDICATOR
// =====================================

window.activeLessonFamily =
    window.activeLessonFamily || {};

const activeFamilyKey =
    window.activeLessonFamily[indexDiv]
    ?? `${indexDiv}_${pos}`;


console.log(
    '[MOUSEENTER] AKTYWNA RODZINA',
    {
        indexDiv,
        pos,
        activeFamilyKey
    }
);
    // =====================================
    // CACHE
    // =====================================

    window.savedWiCache =
        window.savedWiCache || {};

    window.wordIndexCache =
        window.wordIndexCache || {};

    window.activeStoryVersionCache =
        window.activeStoryVersionCache || {};


    // =====================================
    // CURRENT WORD INDEX
    // =====================================

    let currentWordIndex;


    if (
        window.highlightMode === 'rodzaj'
    ) {

        const savedWi =
            window.savedWiCache[wiKey];


        currentWordIndex =
            savedWi !== undefined
                ? savedWi + 1
                : 0;


        console.log(
            '[mouseenter][rodzaj]',
            {
                wiKey,
                savedWi,
                currentWordIndex
            }
        );

    } else {

        if (
            window.wordIndexCache[descKey]
            === undefined
        ) {

            window.wordIndexCache[descKey] = 0;
        }


        currentWordIndex =
            indexDiv === 1
                ? (
                    window.wordIndexCache[
                        descKey
                    ] ?? 0
                )
                : (
                    window.wordIndexCache[
                        descKey
                    ] ?? 0
                ) + 1;


        console.log(
            '[mouseenter][normal]',
            {
                descKey,
                currentWordIndex
            }
        );
    }


    console.log(
        '[mouseenter] currentWordIndex =',
        currentWordIndex
    );


    // =====================================
    // ZNAJDŹ ZAPAMIĘTANE SŁOWO
    // =====================================

    let $target =
        $line
            .find(
                `[data-word-index="${currentWordIndex - 1}"]`
            )
            .first();


    // =====================================
    // FALLBACK
    // =====================================

    if (!$target.length) {

        console.warn(
            '[mouseenter] fallback -> word 0'
        );


        window.wordIndexCache[
            descKey
        ] = 0;


        $target =
            $line
                .find(
                    '[data-word-index="0"]'
                )
                .first();
    }


    if (!$target.length) {

        console.error(
            '[mouseenter] ❌ NO TARGET WORD FOUND'
        );

        return;
    }


    console.log(
        '[mouseenter] target word:',
        $target.text(),
        'index:',
        $target.attr(
            'data-word-index'
        )
    );


    // =====================================
    // TEKST SŁOWA
    // =====================================

    const wordText =
        $target
            .clone()
            .children()
            .remove()
            .end()
            .text()
            .trim();


    if (!wordText) {
        return;
    }
    // =====================================
    // LESSON ID
    // =====================================

    const lessonId =
        $target
            .closest(
                '.image-container3b'
            )
            .attr('data-id') || '';


    console.log(
        'hej100 lessonId =',
        lessonId
    );


    // =====================================
    // TAG KEY
    // =====================================

    const wordIndex =
        currentWordIndex - 1;


const familyParts =
    String(activeFamilyKey).split('_');

const familyPos =
    Number(
        familyParts[1]
    );


const tagKey =
    `${indexDiv}_${familyPos}_${wordIndex}`;


console.log(
    '[MOUSEENTER] TAG KEY',
    {
        tagKey,
        activeFamilyKey,
        familyPos,
        wordIndex
    }
);


    // =====================================
    // ZAMKNIJ POPRZEDNIE FISZKI
    // =====================================

    $('#active-word-bar')
        .find('.active-word-tag')
        .each(function () {

            const $oldTag =
                $(this);


            const oldTagKey =
                $oldTag.attr(
                    'data-tag-key'
                );


            // =====================================
            // AKTUALNE SŁOWO
            // =====================================

            if (
                oldTagKey === tagKey
            ) {

                return;
            }


            const $oldDetails =
                $oldTag
                    .find(
                        '.active-word-details'
                    )
                    .first();


            const $oldToggle =
                $oldTag
                    .find(
                        '.active-word-details-toggle'
                    )
                    .first();


            if (
                $oldDetails.length
            ) {

                $oldDetails
                    .stop(true, true)
                    .slideUp(150);
            }


            if (
                $oldToggle.length
            ) {

                $oldToggle.text('▼');
            }


            $oldTag
                .removeClass(
                    'word-tag-active'
                );
        });


    // =====================================
    // ISTNIEJĄCY TAG
    // =====================================

    let $existingTag =
        $('#active-word-bar')
            .find(
                `.active-word-tag[data-tag-key="${tagKey}"]`
            )
            .first();


    // =====================================
    // AKTYWUJ ISTNIEJĄCY TAG
    // =====================================

    if (
        $existingTag.length
    ) {

        setActiveWordTag(
            $existingTag
        );


        console.log(
            '[word-tag] ponownie aktywny:',
            $existingTag
                .find('.word-tag-text')
                .text(),
            'tagKey:',
            tagKey
        );
    }


    // =====================================
    // SENTENCE MAP
    // =====================================

    const sentenceMap =
        window.sentenceMapCache?.[
            indexDiv
        ] ?? [];


    const y =
        sentenceMap[pos];


    console.log(
        '[mouseenter] sentenceMap:',
        sentenceMap,
        'y:',
        y
    );


    // =====================================
    // FISZKI Z BLOKU
    // =====================================

    const blockWords =
        fiszki10
            .filter(
                f =>
                    Number(f.id?.[1]) ===
                    Number(y)
            )
            .sort(
                (a, b) =>
                    Number(a.id[0]) -
                    Number(b.id[0])
            );


    // =====================================
    // AUDIO INDEX
    // =====================================

    const audioIndex =
        currentWordIndex === 0
            ? 0
            : currentWordIndex - 1;


    // =====================================
    // AKTUALNA FISZKA
    // =====================================

    const fiszkaAudio =
        blockWords[audioIndex];


    console.log(
        'currentWordIndex =',
        currentWordIndex
    );

    console.log(
        'currentWordIndex - 1 =',
        currentWordIndex - 1
    );

    console.log(
        'fiszkaAudio =',
        fiszkaAudio
    );


    // =====================================
    // NOWY TAG
    // =====================================

    if (
        !$existingTag.length
    ) {

        const $tag =
            $('<button>')
                .addClass(
                    'active-word-tag'
                )
                .attr({

                    'data-tag-key':
                        tagKey,

                    'data-indexdiv':
                        indexDiv,

                    'data-pos':
                        pos,

                    'data-word-index':
                        wordIndex,

                    'data-play-count':
                        1,

                    'data-lesson-id':
                        lessonId
                });


        // =====================================
        // TEKST SŁOWA
        // =====================================

        $tag.append(
            $('<span>')
                .addClass(
                    'word-tag-text'
                )
                .text(
                    wordText
                )
        );
const fiszkaForTag =
    fiszkaAudio;


// =====================================
// 🧠 ZAPIS PEŁNEJ FISZKI W TAGU
// =====================================

$tag.data(
    'fiszkaData',
    fiszkaForTag
);
const descValue =
    fiszkaForTag?.desc ??
    '';

$tag.data('desc', descValue);

// =====================================
// WYŚWIETL DESC
// =====================================

// =====================================
// STRZAŁKA + TŁUMACZ
// =====================================

const $translateButton =
    $('<button>')
        .attr({
            type: 'button'
        })
        .addClass('active-word-translate-button')
        .text('TŁUMACZ');



$tag.append($translateButton);
        // =====================================
        // PASKI ODTWORZEŃ
        // =====================================

        const $playCount =
            $('<span>')
                .addClass(
                    'word-play-count'
                );


        $playCount.append(
            $('<span>')
                .addClass(
                    'word-play-segment'
                )
        );


        $tag.append(
            $playCount
        );


        // =====================================
        // STRZAŁKA
        // =====================================

        $tag.append(
            $('<span>')
                .addClass(
                    'active-word-details-toggle'
                )
                .html('▼')
        );


        // =====================================
        // PANEL
        // =====================================

        const $details =
            $('<div>')
                .addClass(
                    'active-word-details'
                )
                .css(
                    'display',
                    'block'
                );


        // =====================================
        // LEKCJA
        // =====================================

        $details.append(`
            <div class="active-word-details-lesson">
                Lekcja ${lessonId}
            </div>
        `);


        // =====================================
        // STORY KEY
        // =====================================

        const storyKey =
            Array.isArray(
                fiszkaAudio?.id
            )
                ? fiszkaAudio.id.join('_')
                : tagKey;


        // =====================================
        // USTAL STORY COUNT
        // =====================================

        let storyCount = 0;


        if (
            Array.isArray(
                fiszkaAudio?.story
            )
        ) {

            storyCount =
                fiszkaAudio.story.length;

        } else if (
            fiszkaAudio?.story
        ) {

            storyCount = 1;
        }


        // =====================================
        // WYBRANA WERSJA
        // =====================================

        let selectedStoryIndex =
            window
                .activeStoryVersionCache[
                    storyKey
                ];


        if (
            selectedStoryIndex === undefined
        ) {

            selectedStoryIndex = 0;
        }


        selectedStoryIndex =
            Number(
                selectedStoryIndex
            );


        // =====================================
        // ZABEZPIECZENIE INDEKSU
        // =====================================

        if (
            storyCount > 0 &&
            selectedStoryIndex >= storyCount
        ) {

            selectedStoryIndex =
                0;
        }


        // =====================================
        // CATEGORY1
        // =====================================

        if (
            Array.isArray(
                fiszkaAudio?.category1
            )
        ) {

            const $versions =
                $('<div>')
                    .addClass(
                        'active-word-story-versions'
                    );


            for (
                let i = 0;
                i <
                fiszkaAudio.category1.length;
                i += 2
            ) {

                const value =
                    fiszkaAudio.category1[i];

                const hashtag =
                    fiszkaAudio.category1[i + 1];


                if (
                    value === undefined &&
                    hashtag === undefined
                ) {

                    continue;
                }


                const storyIndex =
                    i / 2;


                const displayText =
                    `${value || ''} #${hashtag || ''}`;


                // =====================================
                // BUTTON CATEGORY1
                // =====================================

                const $version =
                    $('<button>')
                        .attr({
                            type: 'button',

                            'data-story-index':
                                storyIndex
                        })
                        .addClass(
                            'active-word-story-version'
                        )
                        .text(
                            displayText
                        );


                // =====================================
                // ACTIVE
                // =====================================

                if (
                    storyIndex ===
                    selectedStoryIndex
                ) {

                    $version.addClass(
                        'active'
                    );
                }


                // =====================================
                // KLIKNIĘCIE CATEGORY1
                // =====================================

                $version.on(
                    'click.activeStoryVersion',
                    function (e) {

                        e.stopPropagation();


                        const newStoryIndex =
                            Number(
                                $(this)
                                    .attr(
                                        'data-story-index'
                                    )
                            );


                        console.log(
                            '[category1] zmiana:',
                            {
                                storyKey,
                                newStoryIndex,
                                fiszkaAudio
                            }
                        );


                        // =====================================
                        // ACTIVE
                        // =====================================

                        $versions
                            .find(
                                '.active-word-story-version'
                            )
                            .removeClass(
                                'active'
                            );


                        $(this)
                            .addClass(
                                'active'
                            );


                        // =====================================
                        // CACHE
                        // =====================================

                        window
                            .activeStoryVersionCache[
                                storyKey
                            ] =
                            newStoryIndex;


                        // =====================================
                        // STORY
                        // =====================================

                        let newStory;


                        if (
                            Array.isArray(
                                fiszkaAudio.story
                            )
                        ) {

                            newStory =
                                fiszkaAudio.story[
                                    newStoryIndex
                                ];

                        } else {

                            newStory =
                                fiszkaAudio.story;
                        }


                        // =====================================
                        // IMAGE
                        // =====================================

                        let newImage;


                        if (
                            Array.isArray(
                                fiszkaAudio.img
                            )
                        ) {

                            newImage =
                                fiszkaAudio.img[
                                    newStoryIndex
                                ];

                        } else {

                            newImage =
                                fiszkaAudio.img;
                        }


                        // =====================================
                        // ZMIEŃ OBRAZ
                        // =====================================

                        const $image =
                            $details
                                .find(
                                    '.active-word-details-image'
                                );


                        if (
                            newImage
                        ) {

                            if (
                                $image.length
                            ) {

                                $image.attr(
                                    'src',
                                    newImage
                                );

                            } else {

                                $versions.after(`
                                    <img
                                        src="${newImage}"
                                        alt="Fiszka"
                                        class="active-word-details-image"
                                    >
                                `);
                            }

                        } else {

                            $image.remove();
                        }


                        // =====================================
                        // ZMIEŃ STORY
                        // =====================================

                        $details
                            .find(
                                '.active-word-details-text'
                            )
                            .html(
                                newStory || ''
                            );
                    }
                );


                // =====================================
                // DODAJ CATEGORY1
                // =====================================

                $versions.append(
                    $version
                );
            }


            // =====================================
            // WSTAW CATEGORY1
            // =====================================

            $details.append(
                $versions
            );
        }


        // =====================================
        // POCZĄTKOWY OBRAZ
        // =====================================

        let imageUrl;


        if (
            Array.isArray(
                fiszkaAudio?.img
            )
        ) {

            imageUrl =
                fiszkaAudio.img[
                    selectedStoryIndex
                ];

        } else {

            imageUrl =
                fiszkaAudio?.img;
        }


        if (
            imageUrl
        ) {

            $details.append(`
                <img
                    src="${imageUrl}"
                    alt="Fiszka"
                    class="active-word-details-image"
                >
            `);
        }


        // =====================================
        // POCZĄTKOWY STORY
        // =====================================

        let storyText;


        if (
            Array.isArray(
                fiszkaAudio?.story
            )
        ) {

            storyText =
                fiszkaAudio.story[
                    selectedStoryIndex
                ];

        } else {

            storyText =
                fiszkaAudio?.story;
        }


        // =====================================
        // STORY
        // =====================================

        $details.append(`
            <div class="active-word-details-text">
                ${storyText || ''}
            </div>
        `);


        // =====================================
        // PANEL DO TAGA
        // =====================================

        $tag.append(
            $details
        );


        // =====================================
        // DODAJ TAG
        // =====================================

// =====================================
// 🧠 RODZINA SŁÓW
// =====================================

// Rodzina = jedno konkretne zdanie
const familyKey =
    `${indexDiv}_${pos}`;


// Aktualny indeks słowa
const familyWordIndex =
    wordIndex;


console.log(
    '[MOUSEENTER][WORD FAMILY]',
    {
        familyKey,
        familyWordIndex,
        wordText
    }
);


// =====================================
// OZNACZ TAG
// =====================================

$tag.attr({

    'data-family-key':
        familyKey,

    'data-word-index':
        familyWordIndex

});


// =====================================
// SZUKAJ ISTNIEJĄCEJ RODZINY
// =====================================

let $family =
    $('#active-word-bar')
        .find(
            '.active-word-family'
        )
        .filter(function () {

            return String(
                $(this).attr(
                    'data-family-key'
                )
            ) === String(
                familyKey
            );

        })
        .first();


// =====================================
// NOWA RODZINA
// =====================================

if (
    !$family.length
) {

    console.log(
        '[MOUSEENTER][WORD FAMILY] NOWA RODZINA:',
        familyKey
    );


    // =====================================
    // UTWÓRZ KONTENER RODZINY
    // =====================================

    $family =
        $('<div>')
            .addClass(
                'active-word-family'
            )
            .attr(
                'data-family-key',
                familyKey
            );


    // =====================================
    // UKŁAD RODZINY
    // =====================================

    $family.css({

        display:
            'flex',

        flexDirection:
            'column',

        alignItems:
            'flex-start',

        justifyContent:
            'flex-start',

        flexWrap:
            'nowrap',

        gap:
            '3px',

        whiteSpace:
            'normal',

        width:
            'max-content',

        height:
            'auto',

        position:
            'relative'

    });


    // =====================================
    // TAG
    // =====================================

    $tag.css({

        display:
            'block',

        position:
            'relative',

        left:
            'auto',

        top:
            'auto',

        float:
            'none',

        margin:
            '0'

    });


    // =====================================
    // PIERWSZE SŁOWO
    // =====================================

    $family.append(
        $tag
    );


    // =====================================
    // DODAJ RODZINĘ DO PASKA
    // =====================================

    $('#active-word-bar')
        .prepend(
            $family
        );


    console.log(
        '[MOUSEENTER][WORD FAMILY] DODANO NOWĄ RODZINĘ:',
        familyKey
    );

}


// =====================================
// ISTNIEJĄCA RODZINA
// =====================================

else {

    console.log(
        '[MOUSEENTER][WORD FAMILY] ISTNIEJĄCA RODZINA:',
        familyKey,
        'DODAJĘ:',
        wordText
    );


    // =====================================
    // UPEWNIJ SIĘ ŻE UKŁAD JEST PIONOWY
    // =====================================

    $family.css({

        display:
            'flex',

        flexDirection:
            'column',

        alignItems:
            'flex-start',

        flexWrap:
            'nowrap'

    });


    // =====================================
    // TAG
    // =====================================

    $tag.css({

        display:
            'block',

        position:
            'relative',

        left:
            'auto',

        top:
            'auto',

        float:
            'none',

        margin:
            '0'

    });


    // =====================================
    // DODAJ DO ISTNIEJĄCEJ RODZINY
    // =====================================

    $family.append(
        $tag
    );


    console.log(
        '[MOUSEENTER][WORD FAMILY] DODANO DO RODZINY:',
        wordText,
        familyKey
    );

}


        updateActiveWordHighlight();

        printActiveWord(
            $tag
        );
afterWordTagAdded();

        console.log(
            '[word-tag] added:',
            wordText,
            'lekcja:',
            indexDiv,
            'index:',
            wordIndex
        );


        // aktualizuj referencję
        $existingTag =
            $tag;
    }


    // =====================================
    // ISTNIEJĄCY TAG
    // =====================================

    else {

        // =====================================
        // AKTUALIZUJ PANEL NA MOUSEENTER
        // =====================================

        if (
            fiszkaAudio
        ) {

            const $details =
                $existingTag
                    .find(
                        '.active-word-details'
                    )
                    .first();


            if (
                $details.length
            ) {

                $details
                    .show();
            }
        }


        // =====================================
        // PLAY COUNT
        // =====================================

        let playCount =
            Number(
                $existingTag.attr(
                    'data-play-count'
                )
            ) || 1;


        playCount++;


// =====================================
// TŁUMACZ W ZAPISANEJ PAMIĘCI
// PRZYPIĘTY DO GWIAZDKI
// =====================================


// =====================================
// TŁUMACZ W ZAPISANEJ PAMIĘCI
// WAŻNE: POZA sentence-inner
// =====================================

// usuń poprzedni przycisk
$('#translate-memory-floating').remove();


const $translateMemory = $('<button>')
    .attr({
        id: 'translate-memory-floating',
        type: 'button',
        'data-ignore-word': 'true'
    })
    .addClass('translate-memory-button')
    .text('tłumacz w zapisanej pamięci')
    .css({
        position: 'absolute',
        zIndex: 999999
    });


// =====================================
// DODAJ DO BODY
// NIGDY DO sentence-inner
// =====================================

$('body').append($translateMemory);


// =====================================
// POZYCJA PRZY GWIAZDCE
// =====================================

const starOffset = $star.offset();

if (starOffset) {

    $translateMemory.css({

        left:
            starOffset.left +
            $star.outerWidth() +
            5,

        top:
            starOffset.top

    });

}


// =====================================
// KLIK
// =====================================

$translateMemory.on('click', function (e) {

    e.preventDefault();
    e.stopPropagation();

    console.log(
        '[translate-memory] klik'
    );

});


        // =====================================
        // ZAPISZ PLAY COUNT
        // =====================================

        $existingTag
            .attr(
                'data-play-count',
                playCount
            );


        // =====================================
        // DODAJ PASEK
        // =====================================

        $existingTag
            .find(
                '.word-play-count'
            )
            .append(
                $('<span>')
                    .addClass(
                        'word-play-segment'
                    )
            );


        console.log(
            '[word-tag] ponowne odtworzenie:',
            wordText,
            'ilość:',
            playCount,
            'lekcja:',
            indexDiv
        );
    }


    // =====================================
    // USUŃ POPRZEDNIĄ ANIMACJĘ
    // =====================================

    $('.word-animation')
        .remove();


    // =====================================
    // USTAW SŁOWO
    // =====================================

    $target.css({
        position: 'relative',
        display: 'inline-block'
    });


    // =====================================
    // GWIAZDKA
    // =====================================

    if (
        !$target.children(
            '.word-play-star'
        ).length
    ) {

        const $star =
            $('<span>')
                .addClass(
                    'word-play-star'
                );


        $star.append(
            $('<span>')
                .addClass(
                    'word-play-star-symbol'
                )
                .text('★')
        );


        const $starCount =
            $('<span>')
                .addClass(
                    'word-play-star-count'
                );


        $starCount.append(
            $('<span>')
                .addClass(
                    'word-play-segment'
                )
        );


        $star.append(
            $starCount
        );


        $target.append(
            $star
        );
    }
    
   // =====================================
// TŁUMACZ W ZAPISANEJ PAMIĘCI
// NIE DODAWAJ DO SENTENCE-INNER
// =====================================

const $star =
    $target
        .children('.word-play-star')
        .first();


if ($star.length) {

    // usuń ewentualny stary przycisk
    $('#active-word-translate-memory')
        .remove();


    const $translateMemory =
        $('<button>')
            .attr({
                type: 'button',
                id: 'active-word-translate-memory',
                'data-ignore-word': 'true'
            })
            .addClass(
                'translate-memory-button'
            )
            .text(
                'tłumacz w zapisanej pamięci'
            );


    // =====================================
    // POŁOŻENIE — ABSOLUTE
    // =====================================

    $translateMemory.css({
        position: 'absolute',
        left: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 9999
    });


    // =====================================
    // KLIK
    // =====================================

    $translateMemory.on(
        'click',
        function (e) {

            e.preventDefault();
            e.stopPropagation();

            console.log(
                '[translate-memory] KLIK!'
            );

            console.log(
                '[translate-memory] słowo:',
                wordText
            );

            console.log(
                '[translate-memory] indexDiv:',
                indexDiv
            );

            console.log(
                '[translate-memory] pos:',
                pos
            );

            console.log(
                '[translate-memory] wordIndex:',
                wordIndex
            );


            $('.word-tag-text')
                .each(function () {

                    $(this).text('moje');

                });


            console.log(
                '[translate-memory] word-tag-text ZAKTUALIZOWANE'
            );
        }
    );


    // =====================================
    // DODAJ DO BODY
    // NIE DO SENTENCE-INNER
    // =====================================

    $('body').append(
        $translateMemory
    );


    // =====================================
    // POZYCJA PRZY GWIAZDCE
    // =====================================

    const starOffset =
        $star.offset();


    const starWidth =
        $star.outerWidth();


    const starHeight =
        $star.outerHeight();


    $translateMemory.css({
        left:
            starOffset.left +
            starWidth +
            5,

        top:
            starOffset.top +
            (starHeight / 2)
    });
}

    // =====================================
    // ANIMACJA
    // =====================================

    $target.append(`
        <div class="word-animation">
            <span class="a1"></span>
            <span class="a2"></span>
            <span class="a3"></span>
            <span class="a4"></span>
            <span class="a5"></span>
            <span class="a6"></span>
            <span class="a7"></span>
            <span class="a8"></span>
            <span class="a9"></span>
            <span class="a10"></span>
        </div>
    `);


    // =====================================
    // TABLICA
    // =====================================

    tablica20aa.push(
        currentWordIndex
    );


    console.log(
        'hej120aa',
        currentWordIndex
    );


    // =====================================
    // AUDIO
    // =====================================

    if (
        fiszkaAudio?.word?.[0]
    ) {

        console.log(
            '[audio] playing:',
            fiszkaAudio.word[0]
        );


        const audio =
            new Audio(
                fiszkaAudio.word[0]
            );


        audio.currentTime = 0;


        audio.play()
            .catch(
                err => {

                    console.warn(
                        '[audio] blocked or failed:',
                        err
                    );
                }
            );
    }


    // =====================================
    // SYNCHRONIZACJA PODŚWIETLENIA
    // =====================================

    syncHighlightForIndexDiv(
        indexDiv,
        pos
    );


    console.log(
        '[mouseenter] ✅ animation restored'
    );
});
// ======================================================
// ======================================================
// 🧠 SYSTEM TRANSZ SŁÓW
// ======================================================
// ======================================================


// ======================================================
// GLOBALNE DANE
// ======================================================

window.wordTransactions =
    window.wordTransactions || [];


// numer aktualnej transzy
window.currentTransactionNumber =
    window.currentTransactionNumber || 1;


// blokada podczas animacji
window.transactionProcessing =
    false;


// aktualnie otwarte okno
window.openTransactionId =
    null;


// ======================================================
// INICJALIZACJA
// ======================================================

function initWordTransactionSystem() {

    console.log(
        '[TRANSZA] INIT SYSTEMU'
    );


    // ----------------------------------------------
    // UPEWNIJ SIĘ ŻE ISTNIEJE PASEK
    // ----------------------------------------------

    if (!$('#active-word-bar').length) {

        console.warn(
            '[TRANSZA] BRAK #active-word-bar'
        );

        return;
    }


    // ----------------------------------------------
    // USTAWIENIA PASKA
    // ----------------------------------------------

    $('#active-word-bar').css({

        display: 'flex',

        flexDirection: 'row',

        flexWrap: 'nowrap',

        alignItems: 'flex-start',

        overflow: 'hidden',

        width: '100%'

    });


    // ----------------------------------------------
    // OBSERWATOR ROZMIARU
    // ----------------------------------------------

    observeTransactionOverflow();


}


// ======================================================
// OBSERWATOR
//
// SPRAWDZA:
// CZY KOLEJNY ELEMENT WYCHODZI POZA SZEROKOŚĆ
// ======================================================

let transactionResizeObserver = null;


function observeTransactionOverflow() {

    const bar =
        document.getElementById(
            'active-word-bar'
        );


    if (!bar) {

        return;

    }


    // ----------------------------------------------
    // ResizeObserver
    // ----------------------------------------------

    if (
        typeof ResizeObserver !== 'undefined'
    ) {

        transactionResizeObserver =
            new ResizeObserver(
                function () {

                    checkTransactionOverflow();

                }
            );


        transactionResizeObserver.observe(bar);

    }


}


// ======================================================
// GŁÓWNE SPRAWDZENIE
//
// CZY OSTATNI BUTTON NIE MIEŚCI SIĘ?
// ======================================================

function checkTransactionOverflow() {

    // ----------------------------------------------
    // JEŚLI TRWA ANIMACJA
    // ----------------------------------------------

    if (window.transactionProcessing) {

        return;

    }


    const $bar =
        $('#active-word-bar');


    if (!$bar.length) {

        return;

    }


    // ----------------------------------------------
    // WSZYSTKIE BUTTONY
    // ----------------------------------------------

    const $tags =
        $bar.find(
            '.active-word-tag'
        );


    if (!$tags.length) {

        return;

    }


    // ----------------------------------------------
    // SZEROKOŚĆ PASKA
    // ----------------------------------------------

    const barWidth =
        $bar.innerWidth();


    // ----------------------------------------------
    // POZYCJA PASKA
    // ----------------------------------------------

    const barLeft =
        $bar.offset().left;


    // ----------------------------------------------
    // PRAWA GRANICA
    // ----------------------------------------------

    const barRight =
        barLeft + barWidth;


    // ----------------------------------------------
    // OSTATNI BUTTON
    // ----------------------------------------------

    const $lastTag =
        $tags.last();


    const tagOffset =
        $lastTag.offset();


    if (!tagOffset) {

        return;

    }


    const tagRight =
        tagOffset.left +
        $lastTag.outerWidth(true);


    console.log(
        '[TRANSZA][CHECK]',
        {

            barWidth,
            barLeft,
            barRight,

            tagRight,

            totalTags:
                $tags.length

        }
    );


    // ==================================================
    // 🚨 OSTATNI BUTTON NIE MIEŚCI SIĘ
    // ==================================================

    if (

        tagRight >
        barRight + 1

    ) {

        console.log(
            '[TRANSZA] 🚨 PASEK PEŁNY'
        );


        startTransactionSave();

    }

}


// ======================================================
// SPRAWDZENIE PRZED DODANIEM NOWEGO BUTTONA
//
// TA FUNKCJA JEST WAŻNA
// ======================================================

function wouldNewTagOverflow($newTag) {

    const $bar =
        $('#active-word-bar');


    if (!$bar.length) {

        return false;

    }


    // ----------------------------------------------
    // SZEROKOŚĆ DOSTĘPNA
    // ----------------------------------------------

    const availableWidth =
        $bar.innerWidth();


    // ----------------------------------------------
    // SZEROKOŚĆ WSZYSTKICH AKTUALNYCH RODZIN
    // ----------------------------------------------

    let usedWidth = 0;


    $bar.children().each(function () {

        usedWidth +=
            $(this).outerWidth(true);

    });


    // ----------------------------------------------
    // NOWY ELEMENT
    // ----------------------------------------------

    const newWidth =
        $newTag.outerWidth(true);


    console.log(
        '[TRANSZA][PREDICT]',
        {

            availableWidth,

            usedWidth,

            newWidth,

            result:
                usedWidth + newWidth >
                availableWidth

        }
    );


    return (

        usedWidth +
        newWidth

    ) > availableWidth;

}


// ======================================================
// ======================================================
// 🚀 START ZAPISU TRANSZY
// ======================================================
// ======================================================

async function startTransactionSave() {

    // ----------------------------------------------
    // BLOKADA
    // ----------------------------------------------

    if (
        window.transactionProcessing
    ) {

        return;

    }


    window.transactionProcessing =
        true;


    console.log(
        '[TRANSZA] ================================='
    );

    console.log(
        '[TRANSZA] START ZAPISU'
    );


    const $bar =
        $('#active-word-bar');


    // ----------------------------------------------
    // BUTTONY
    // ----------------------------------------------

    const $tags =
        $bar.find(
            '.active-word-tag'
        );


    if (!$tags.length) {

        window.transactionProcessing =
            false;

        return;

    }


    // ==================================================
    // KROK 1
    //
    // USUWAMY OSTATNI BUTTON,
    // JEŚLI TO ON SPOWODOWAŁ PRZEPEŁNIENIE
    // ==================================================

    const overflowTag =
        getOverflowTag();


    // ----------------------------------------------
    // ZAPAMIĘTUJEMY GO
    // ----------------------------------------------

    let overflowTagData =
        null;


    if (overflowTag) {

        overflowTagData =
            extractTagData(
                overflowTag
            );


        console.log(
            '[TRANSZA] BUTTON DLA NASTĘPNEJ TRANSZY:',
            overflowTagData
        );


        // usuwamy z aktualnej transzy
        overflowTag.remove();

    }


    // ==================================================
    // POBIERAMY BUTTONY AKTUALNEJ TRANSZY
    // ==================================================

    const $transactionTags =
        $bar.find(
            '.active-word-tag'
        );


    if (!$transactionTags.length) {

        window.transactionProcessing =
            false;

        return;

    }


    // ==================================================
    // KROK 2
    //
    // WSZYSTKIE MRUGAJĄ 3 RAZY
    // ==================================================

    await blinkAllTagsThreeTimes(
        $transactionTags
    );


    // ==================================================
    // KROK 3
    //
    // KOLEJNO OD LEWEJ DO PRAWEJ
    // ==================================================

    await blinkTagsLeftToRight(
        $transactionTags
    );


    // ==================================================
    // KROK 4
    //
    // ZAPISUJEMY TRANSZĘ
    // ==================================================

    saveCurrentTransaction(
        $transactionTags
    );


    // ==================================================
    // KROK 5
    //
    // CZYŚCIMY PASEK
    // ==================================================

    $bar.empty();


    // ==================================================
    // KROK 6
    //
    // PRZYWRACAMY BUTTON,
    // KTÓRY SIĘ NIE ZMIEŚCIŁ
    //
    // ON JEST PIERWSZYM ELEMENTEM
    // NOWEJ TRANSZY
    // ==================================================

    if (overflowTagData) {

        restoreTagFromData(
            overflowTagData
        );

    }


    // ==================================================
    // KONIEC
    // ==================================================

    window.transactionProcessing =
        false;


    console.log(
        '[TRANSZA] KONIEC ZAPISU'
    );

    console.log(
        '[TRANSZA] ================================='
    );

}


// ======================================================
// ZNAJDŹ BUTTON KTÓRY WYSZEDŁ POZA PASEK
// ======================================================

function getOverflowTag() {

    const $bar =
        $('#active-word-bar');


    const barRight =
        $bar.offset().left +
        $bar.innerWidth();


    let $overflow =
        null;


    $bar
        .find('.active-word-tag')
        .each(function () {

            const $tag =
                $(this);


            const right =
                $tag.offset().left +
                $tag.outerWidth(true);


            if (

                right >
                barRight + 1

            ) {

                $overflow =
                    $tag;

                return false;

            }

        });


    return $overflow;

}


// ======================================================
// MRUGANIE WSZYSTKICH
//
// 3 RAZY
// ======================================================

function blinkAllTagsThreeTimes($tags) {

    return new Promise(
        function (resolve) {


            console.log(
                '[TRANSZA] WSZYSTKIE MRUGAJĄ 3 RAZY'
            );


            $tags.addClass(
                'transza-blink-all'
            );


            setTimeout(
                function () {

                    $tags.removeClass(
                        'transza-blink-all'
                    );


                    resolve();

                },

                // 3 pełne mrugnięcia
                2200

            );

        }
    );

}


// ======================================================
// MRUGANIE
//
// OD LEWEJ DO PRAWEJ
// ======================================================

async function blinkTagsLeftToRight($tags) {


    console.log(
        '[TRANSZA] MRUGANIE LEWO → PRAWO'
    );


    // ----------------------------------------------
    // SORTUJEMY WG PRAWDZIWEJ POZYCJI NA EKRANIE
    // ----------------------------------------------

    const sortedTags =
        $tags.toArray()
            .sort(
                function (a, b) {

                    const aLeft =
                        $(a).offset().left;


                    const bLeft =
                        $(b).offset().left;


                    return (
                        aLeft - bLeft
                    );

                }
            );


    // ----------------------------------------------
    // PO KOLEI
    // ----------------------------------------------

    for (

        let i = 0;

        i < sortedTags.length;

        i++

    ) {


        const $tag =
            $(sortedTags[i]);


        await blinkSingleTag(
            $tag
        );

    }

}


// ======================================================
// MRUGNIJ JEDEN BUTTON
// ======================================================

function blinkSingleTag($tag) {

    return new Promise(
        function (resolve) {


            $tag.addClass(
                'transza-blink-single'
            );


            setTimeout(
                function () {

                    $tag.removeClass(
                        'transza-blink-single'
                    );


                    resolve();

                },

                500

            );

        }
    );

}


// ======================================================
// ======================================================
// 💾 ZAPIS TRANSZY
// ======================================================
// ======================================================

function saveCurrentTransaction($tags) {


    // ----------------------------------------------
    // NUMER
    // ----------------------------------------------

    const transactionNumber =
        window.currentTransactionNumber;


    // ----------------------------------------------
    // NAZWA
    // ----------------------------------------------

    const transactionName =
        getTransactionName(
            transactionNumber
        );


    // ----------------------------------------------
    // SŁOWA
    // ----------------------------------------------

    const words = [];


    $tags.each(
        function () {

            const $tag =
                $(this);


            const data =
                extractTagData(
                    $tag
                );


            words.push(
                data
            );

        }
    );


    // ----------------------------------------------
    // OBIEKT TRANSZY
    // ----------------------------------------------

    const transaction =
        {

            id:
                'transaction_' +
                Date.now(),

            number:
                transactionNumber,

            name:
                transactionName,

            createdAt:
                new Date()
                    .toISOString(),

            words:
                words

        };


    // ----------------------------------------------
    // ZAPIS
    // ----------------------------------------------

    window.wordTransactions.push(
        transaction
    );


    console.log(
        '[TRANSZA] 💾 ZAPISANO:',
        transaction
    );


    // ----------------------------------------------
    // ZAKŁADKA
    // ----------------------------------------------

    createTransactionTab(
        transaction
    );


    // ----------------------------------------------
    // NASTĘPNY NUMER
    // ----------------------------------------------

    window.currentTransactionNumber++;


}


// ======================================================
// NAZWY TRANSZ
// ======================================================

function getTransactionName(number) {


    const names =
        [

            '',

            'PIERWSZA',

            'DRUGA',

            'TRZECIA',

            'CZWARTA',

            'PIĄTA',

            'SZÓSTA',

            'SIÓDMA',

            'ÓSMA',

            'DZIEWIĄTA',

            'DZIESIĄTA'

        ];


    if (names[number]) {

        return (

            names[number] +
            ' TRANSZA SŁÓW'

        );

    }


    return (

        number +
        '. TRANSZA SŁÓW'

    );

}


// ======================================================
// POBIERZ DANE BUTTONA
// ======================================================

function extractTagData($tag) {


    // ----------------------------------------------
    // TEKST
    // ----------------------------------------------

    const wordText =

        $tag
            .find(
                '.word-tag-text, .word-tag-translation'
            )
            .first()
            .text()
            .trim();


    // ----------------------------------------------
    // DANE
    // ----------------------------------------------

    const tagData =
        {

            wordText:
                wordText,


            tagKey:
                $tag.attr(
                    'data-tag-key'
                ),


            indexDiv:
                Number(
                    $tag.attr(
                        'data-indexdiv'
                    )
                ),


            pos:
                Number(
                    $tag.attr(
                        'data-pos'
                    )
                ),


            wordIndex:
                Number(
                    $tag.attr(
                        'data-word-index'
                    )
                ),


            lessonId:
                $tag.attr(
                    'data-lesson-id'
                ),


            playCount:
                Number(
                    $tag.attr(
                        'data-play-count'
                    )
                ) || 1,


            desc:
                $tag.data(
                    'desc'
                ) ?? '',


            // ------------------------------------------
            // 🔥 PEŁNA FISZKA
            // ------------------------------------------

            fiszka:
                $tag.data(
                    'fiszkaData'
                ) ?? null

        };


    return tagData;

}


// ======================================================
// PRZYWRÓĆ BUTTON
//
// BUTTON KTÓRY NIE ZMIEŚCIŁ SIĘ
// ======================================================

function restoreTagFromData(data) {


    const $bar =
        $('#active-word-bar');


    // ----------------------------------------------
    // RODZINA
    // ----------------------------------------------

    const familyKey =
        `${data.indexDiv}_${data.pos}`;


    let $family =
        $bar
            .find(
                `.active-word-family[data-family-key="${familyKey}"]`
            )
            .first();


    // ----------------------------------------------
    // NOWA RODZINA
    // ----------------------------------------------

    if (!$family.length) {

        $family =
            $('<div>')
                .addClass(
                    'active-word-family'
                )
                .attr(
                    'data-family-key',
                    familyKey
                )
                .css({

                    display: 'flex',

                    flexDirection: 'column',

                    alignItems: 'flex-start',

                    gap: '3px',

                    width: 'max-content'

                });


        $bar.append(
            $family
        );

    }


    // ----------------------------------------------
    // TAG
    // ----------------------------------------------

    const $tag =
        $('<button>')
            .addClass(
                'active-word-tag'
            )
            .attr({

                'data-tag-key':
                    data.tagKey,


                'data-indexdiv':
                    data.indexDiv,


                'data-pos':
                    data.pos,


                'data-word-index':
                    data.wordIndex,


                'data-play-count':
                    data.playCount,


                'data-lesson-id':
                    data.lessonId,


                'data-family-key':
                    familyKey

            });


    // tekst
    $tag.append(

        $('<span>')
            .addClass(
                'word-tag-text'
            )
            .text(
                data.wordText
            )

    );


    // licznik
    const $playCount =
        $('<span>')
            .addClass(
                'word-play-count'
            );


    for (

        let i = 0;

        i < data.playCount;

        i++

    ) {

        $playCount.append(

            $('<span>')
                .addClass(
                    'word-play-segment'
                )

        );

    }


    $tag.append(
        $playCount
    );


    // lekcja
    $tag.append(

        $('<span>')
            .addClass(
                'word-lesson'
            )
            .text(
                ` - lekcja ${data.lessonId}`
            )

    );


    // DESC
    $tag.data(
        'desc',
        data.desc
    );


    // FISZKA
    $tag.data(
        'fiszkaData',
        data.fiszka
    );


    // dodaj
    $family.append(
        $tag
    );


    console.log(
        '[TRANSZA] PRZYWRÓCONO BUTTON:',
        data.wordText
    );

}


// ======================================================
// ======================================================
// 🏷️ TWORZENIE ZAKŁADKI
// ======================================================
// ======================================================

function createTransactionTab(transaction) {


    const $tabs =
        $('#word-transactions-tabs');


    if (!$tabs.length) {

        console.warn(
            '[TRANSZA] BRAK #word-transactions-tabs'
        );

        return;

    }


    const $tab =
        $('<button>')

            .addClass(
                'word-transaction-tab'
            )

            .attr(
                'data-transaction-id',
                transaction.id
            )

            .text(
                transaction.name
            );


    $tabs.append(
        $tab
    );


    console.log(
        '[TRANSZA] UTWORZONO ZAKŁADKĘ:',
        transaction.name
    );

}


// ======================================================
// ======================================================
// 🖱️ KLIK W ZAKŁADKĘ
// ======================================================
// ======================================================

$(document).on(

    'click',

    '.word-transaction-tab',

    function () {


        const transactionId =
            $(this).attr(
                'data-transaction-id'
            );


        openTransactionWindow(
            transactionId
        );

    }

);


// ======================================================
// ======================================================
// 🪟 OTWIERANIE OKNA TRANSZY
// ======================================================
// ======================================================

function openTransactionWindow(transactionId) {


    const transaction =
        window.wordTransactions.find(
            function (item) {

                return (

                    item.id ===
                    transactionId

                );

            }
        );


    if (!transaction) {

        console.warn(
            '[TRANSZA] NIE ZNALEZIONO:',
            transactionId
        );

        return;

    }


    console.log(
        '[TRANSZA] 🪟 OTWIERAM:',
        transaction
    );


    window.openTransactionId =
        transactionId;


    // ==================================================
    // AKTYWNA ZAKŁADKA
    // ==================================================

    $('.word-transaction-tab')
        .removeClass(
            'active'
        );


    $(
        `.word-transaction-tab[data-transaction-id="${transactionId}"]`
    )
        .addClass(
            'active'
        );


    // ==================================================
    // ZAPISZ CO BYŁO OTWARTE
    // ==================================================

    saveMainViewState();


    // ==================================================
    // UKRYJ GŁÓWNY WIDOK
    // ==================================================

    hideMainLessonView();


    // ==================================================
    // OKNO
    // ==================================================

    const $window =
        $('#word-transaction-window');


    $window.empty();


    $window.addClass(
        'open'
    );


    // ==================================================
    // HEADER
    // ==================================================

    const $header =
        $('<div>')
            .addClass(
                'word-transaction-header'
            );


    const $title =
        $('<div>')
            .addClass(
                'word-transaction-title'
            )
            .text(
                transaction.name
            );


    const $close =
        $('<button>')
            .addClass(
                'word-transaction-close'
            )
            .text(
                'ZAMKNIJ'
            );


    $header.append(

        $title,

        $close

    );


    $window.append(
        $header
    );


    // ==================================================
    // KONTENER FISZEK
    // ==================================================

    const $cards =
        $('<div>')
            .addClass(
                'word-transaction-cards'
            );


    // ==================================================
    // TWORZENIE FISZEK
    // ==================================================

    transaction.words.forEach(

        function (wordData) {


            const $card =
                createSavedWordCard(
                    wordData
                );


            $cards.append(
                $card
            );

        }

    );


    $window.append(
        $cards
    );


    // ==================================================
    // PRZEWIŃ DO OKNA
    // ==================================================

    $window[0]
        .scrollIntoView({

            behavior:
                'smooth',

            block:
                'start'

        });

}


// ======================================================
// ======================================================
// 🃏 TWORZENIE POJEDYNCZEJ FISZKI
// ======================================================
// ======================================================

function createSavedWordCard(wordData) {


    const $card =
        $('<div>')
            .addClass(
                'saved-word-card'
            );


    // ==================================================
    // SŁOWO
    // ==================================================

    const $word =
        $('<div>')
            .addClass(
                'saved-word-card-word'
            )
            .text(

                wordData.wordText ||
                'Brak słowa'

            );


    $card.append(
        $word
    );


    // ==================================================
    // FISZKA
    // ==================================================

    const fiszka =
        wordData.fiszka;


    // ==================================================
    // OBRAZEK
    // ==================================================

    if (fiszka) {


        const imageSrc =
            getImageFromFiszka(
                fiszka
            );


        if (imageSrc) {

            const $img =
                $('<img>')
                    .attr(
                        'src',
                        imageSrc
                    );


            $card.append(
                $img
            );

        }

    }


    // ==================================================
    // DESC
    // ==================================================

    let desc =
        wordData.desc;


    if (

        !desc &&
        fiszka

    ) {

        desc =
            fiszka.desc ??
            '';

    }


    if (desc) {


        const $desc =
            $('<div>')
                .addClass(
                    'saved-word-card-desc'
                );


        // tablica
        if (

            Array.isArray(desc)

        ) {

            desc.forEach(

                function (item) {

                    $('<div>')
                        .html(item)
                        .appendTo(
                            $desc
                        );

                }

            );

        }


        // string
        else {

            $desc.html(
                desc
            );

        }


        $card.append(
            $desc
        );

    }


    // ==================================================
    // INFORMACJE
    // ==================================================

    $card.append(

        $('<div>')
            .css({

                marginTop:
                    '10px',

                fontSize:
                    '12px',

                opacity:
                    '0.7'

            })

            .text(

                `Lekcja: ${wordData.lessonId}`

            )

    );


    return $card;

}


// ======================================================
// SPRÓBUJ POBRAĆ OBRAZEK Z FISZKI
//
// DOSTOSOWANE DO RÓŻNYCH STRUKTUR
// ======================================================

function getImageFromFiszka(fiszka) {


    if (!fiszka) {

        return null;

    }


    // img jako string
    if (

        typeof fiszka.img ===
        'string'

    ) {

        return fiszka.img;

    }


    // img jako tablica
    if (

        Array.isArray(
            fiszka.img
        )

    ) {

        return (
            fiszka.img[0] ||
            null
        );

    }


    // image
    if (

        typeof fiszka.image ===
        'string'

    ) {

        return fiszka.image;

    }


    // obraz
    if (

        typeof fiszka.obraz ===
        'string'

    ) {

        return fiszka.obraz;

    }


    return null;

}


// ======================================================
// ======================================================
// ❌ ZAMYKANIE OKNA
// ======================================================
// ======================================================

$(document).on(

    'click',

    '.word-transaction-close',

    function () {


        closeTransactionWindow();

    }

);


// ======================================================
// ZAMKNIJ OKNO
// ======================================================

function closeTransactionWindow() {


    const $window =
        $('#word-transaction-window');


    // ----------------------------------------------
    // UKRYJ
    // ----------------------------------------------

    $window
        .removeClass(
            'open'
        )
        .empty();


    // ----------------------------------------------
    // ZAKŁADKI
    // ----------------------------------------------

    $('.word-transaction-tab')
        .removeClass(
            'active'
        );


    // ----------------------------------------------
    // PRZYWRÓĆ LEKCJĘ
    // ----------------------------------------------

    restoreMainLessonView();


    window.openTransactionId =
        null;


    console.log(
        '[TRANSZA] ZAMKNIĘTO OKNO'
    );

}


// ======================================================
// ======================================================
// 💾 ZAPIS STANU GŁÓWNEGO WIDOKU
// ======================================================
// ======================================================

function saveMainViewState() {


    // ----------------------------------------------
    // IMAGE-CONTAINERY
    // ----------------------------------------------

    window.transactionMainViewState =
        window.transactionMainViewState ||
        {};


    window.transactionMainViewState
        .imageContainers =
            $('.image-container3b');


    console.log(
        '[TRANSZA] ZAPISANO STAN GŁÓWNEGO WIDOKU'
    );

}


// ======================================================
// ======================================================
// UKRYWANIE IMAGE-CONTAINER
// ======================================================
// ======================================================

function hideMainLessonView() {


    console.log(
        '[TRANSZA] UKRYWAM GŁÓWNY WIDOK'
    );


    // ==================================================
    // IMAGE-CONTAINER3B
    // ==================================================

    $('.image-container3b')
        .addClass(
            'transaction-hidden'
        )
        .hide();


    // ==================================================
    // INNE MOŻLIWE CONTAINERY
    //
    // JEŚLI U CIEBIE LEKCJA JEST W INNYM
    // KONTENERZE, DODAJ JE TUTAJ
    // ==================================================

    $('.grid-container')
        .children()
        .not(
            '#word-transaction-window'
        )
        .addClass(
            'transaction-hidden-grid'
        );


}


// ======================================================
// ======================================================
// PRZYWRÓĆ GŁÓWNY WIDOK
// ======================================================
// ======================================================

function restoreMainLessonView() {


    console.log(
        '[TRANSZA] PRZYWRACAM GŁÓWNY WIDOK'
    );


    $('.image-container3b')
        .removeClass(
            'transaction-hidden'
        )
        .show();


    $('.transaction-hidden-grid')
        .removeClass(
            'transaction-hidden-grid'
        );

}


// ======================================================
// ======================================================
// 🔥 NAJWAŻNIEJSZA FUNKCJA
//
// WYWOŁUJ PO KAŻDYM DODANIU BUTTONA
// ======================================================
// ======================================================

function afterWordTagAdded() {


    // ----------------------------------------------
    // NIE RÓB NIC
    // JEŚLI TRANSZA SIĘ WŁAŚNIE ZAPISUJE
    // ----------------------------------------------

    if (

        window.transactionProcessing

    ) {

        return;

    }


    // ----------------------------------------------
    // MAŁE OPÓŹNIENIE
    //
    // PRZEGLĄDARKA MUSI NAJPIERW
    // POLICZYĆ POZYCJĘ BUTTONA
    // ----------------------------------------------

    requestAnimationFrame(

        function () {


            setTimeout(

                function () {


                    checkTransactionOverflow();


                },

                20

            );

        }

    );

}


// ======================================================
// START SYSTEMU
// ======================================================

$(document).ready(

    function () {


        initWordTransactionSystem();


    }

);
// =====================================
// TŁUMACZ — PRZYCISK W TAGU
// ORAZ PRZYCISK Z OKIENKA
// =====================================

$(document)
    .off(
        'click.savedMemoryTranslator',
        '.saved-memory-translator'
    )
    .on(
        'click.savedMemoryTranslator',
        '.saved-memory-translator',
        function (e) {

            e.preventDefault();
            e.stopPropagation();

            const $translator = $(this);

            // =====================================
            // ZNAJDŹ POWIĄZANY ACTIVE-WORD-TAG
            // =====================================

            const $tag =
                $translator
                    .closest('.saved-memory-word')
                    .find('.active-word-tag')
                    .first();

            if (!$tag.length) {
                console.log(
                    '[saved-memory-translator] brak active-word-tag'
                );
                return;
            }

            // =====================================
            // ZAMKNIJ INNE ROZWINIĘTE TAGI
            // =====================================

            $('.active-word-details')
                .not($tag.find('.active-word-details'))
                .stop(true, true)
                .slideUp(150);

            $('.active-word-details-toggle')
                .not($tag.find('.active-word-details-toggle'))
                .text('▼');

            // =====================================
            // ROZWIŃ WERSJĘ TEGO SŁOWA
            // =====================================

            const $details =
                $tag.find('.active-word-details').first();

            const $toggle =
                $tag.find('.active-word-details-toggle').first();

            if (!$details.length) {
                return;
            }

            if ($details.is(':visible')) {

                $details
                    .stop(true, true)
                    .slideUp(150);

                $toggle.text('▼');

            } else {

                $details
                    .stop(true, true)
                    .slideDown(150);

                $toggle.text('▲');
            }
        }
    );
// =====================================
// CACHE WYBRANEJ WERSJI STORY
// =====================================

// =====================================
// CACHE WYBRANEJ WERSJI STORY
// =====================================

window.activeStoryVersionCache =
    window.activeStoryVersionCache || {};


// =====================================
// OBSŁUGA ROZWIJANIA SZCZEGÓŁÓW FISZKI
// =====================================
$(document)
    .off(
        'click.activeWordTranslate',
        '.active-word-translate-button'
    )
    .on(
        'click.activeWordTranslate',
        '.active-word-translate-button',
        function (e) {

            e.preventDefault();
            e.stopPropagation();

            const $button = $(this);
            const $tag = $button.closest('.active-word-tag');

            console.log(
                '[TŁUMACZ] klik:',
                $tag
            );

            // =====================================
            // SPRAWDŹ CZY TŁUMACZENIE JUŻ ISTNIEJE
            // =====================================

            const $translation =
                $tag.children('.word-tag-translation').first();


            // =====================================
            // JEŚLI TŁUMACZENIE JUŻ JEST
            // =====================================

            if ($translation.length) {

                // zapamiętany oryginalny tekst
                const originalWord =
                    $tag.attr('data-original-word') || '';


                $translation.remove();


                // przywróć word-tag-text
                const $wordText =
                    $('<span>')
                        .addClass('word-tag-text')
                        .text(originalWord);


                // NA POCZĄTKU TAGA
                $tag.prepend($wordText);


                $button.text('TŁUMACZ');


                console.log(
                    '[TŁUMACZ] przywrócono:',
                    originalWord
                );


                return;
            }


            // =====================================
            // POBIERZ WORD-TAG-TEXT
            // =====================================

            const $wordText =
                $tag.children('.word-tag-text').first();


            if (!$wordText.length) {

                console.warn(
                    '[TŁUMACZ] brak .word-tag-text'
                );

                return;
            }


            const originalWord =
                $wordText.text().trim();


            // zapisz oryginalne słowo
            $tag.attr(
                'data-original-word',
                originalWord
            );


            // =====================================
            // POBIERZ DESC
            // =====================================

            const desc =
                $tag.data('desc');


            console.log(
                '[TŁUMACZ] desc:',
                desc
            );


            if (
                desc === undefined ||
                desc === null ||
                desc === ''
            ) {

                console.warn(
                    '[TŁUMACZ] brak desc'
                );

                return;
            }


            // =====================================
            // UTWÓRZ WORD-TAG-TRANSLATION
            // =====================================

            const $translationBox =
                $('<span>')
                    .addClass(
                        'word-tag-translation'
                    );


            // =====================================
            // DESC — TABLICA
            // =====================================

            if (Array.isArray(desc)) {

                desc.forEach(function (version) {

                    $('<div>')
                        .addClass(
                            'word-tag-translation-version'
                        )
                        .html(version)
                        .appendTo(
                            $translationBox
                        );

                });

            }


            // =====================================
            // DESC — STRING
            // =====================================

            else {

                $translationBox.html(desc);

            }


            // =====================================
            // USUŃ WORD-TAG-TEXT
            // =====================================

            $wordText.remove();


            // =====================================
            // WSTAW TŁUMACZENIE NA POCZĄTEK
            // =====================================

            $tag.prepend(
                $translationBox
            );


            // =====================================
            // ZMIEŃ BUTTON
            // =====================================

            $button.text('UKRYJ');


            console.log(
                '[TŁUMACZ] pokazano tłumaczenie:',
                desc
            );
        }
    );
$(document)
    .off(
        'click.activeWordDetails',
        '.active-word-details-toggle'
    )
    .on(
        'click.activeWordDetails',
        '.active-word-details-toggle',
        function (e) {

            e.stopPropagation();

            const $toggle = $(this);
            const $tag =
                $toggle.closest('.active-word-tag');

            const $details =
                $tag.find('.active-word-details').first();


            // =====================================
            // JEŚLI TEN SAM JEST OTWARTY — ZAMKNIJ
            // =====================================

            if ($details.is(':visible')) {

                $details
                    .stop(true, true)
                    .slideUp(150);

                $toggle.text('▼');

                return;
            }


            // =====================================
            // ZAMKNIJ POPRZEDNIO ROZWINIĘTY KONTENER
            // =====================================

            $('.active-word-details:visible')
                .not($details)
                .each(function () {

                    $(this)
                        .stop(true, true)
                        .slideUp(150);

                    $(this)
                        .closest('.active-word-tag')
                        .find(
                            '.active-word-details-toggle'
                        )
                        .text('▼');
                });


            // =====================================
            // DANE Z ACTIVE TAG
            // =====================================

            const indexDiv =
                Number(
                    $tag.attr('data-indexdiv')
                );

            const pos =
                Number(
                    $tag.attr('data-pos')
                );

            const wordIndex =
                Number(
                    $tag.attr('data-word-index')
                );

            const lessonId =
                $tag.attr('data-lesson-id') || '';


            console.log(
                '[fiszka-details]',
                {
                    indexDiv,
                    pos,
                    wordIndex,
                    lessonId
                }
            );


            // =====================================
            // ODCZYTAJ SENTENCEMAP
            // =====================================

            const sentenceMap =
                window.sentenceMapCache?.[indexDiv] || [];

            const y =
                sentenceMap[pos];


            console.log(
                'DEBUG:',
                {
                    indexDiv,
                    pos,
                    sentenceMap,
                    y,
                    wordIndex,
                    firstFiszkaId:
                        fiszki10[0]?.id
                }
            );


            // =====================================
            // ZNAJDŹ FISZKI Z TEGO BLOKU
            // =====================================

            const blockWords =
                fiszki10
                    .filter(
                        f =>
                            Number(f.id?.[1]) ===
                            Number(y)
                    )
                    .sort(
                        (a, b) =>
                            Number(a.id[0]) -
                            Number(b.id[0])
                    );


            if (!blockWords.length) {

                console.warn(
                    '[fiszka-details] ❌ brak fiszek',
                    {
                        y,
                        indexDiv,
                        pos
                    }
                );

                $details.html(
                    '<div class="active-word-details-text">Brak fiszki</div>'
                );

                $details.slideDown(150);

                $toggle.text('▲');

                return;
            }


            // =====================================
            // WYBIERZ KONKRETNĄ FISZKĘ
            // =====================================

            const fiszkaIndex =
                Number(y) === 1
                    ? wordIndex + 1
                    : wordIndex;


            const fiszka =
                blockWords[fiszkaIndex];


            console.log(
                '[fiszka-details] WYBRANA FISZKA:',
                {
                    y,
                    wordIndex,
                    fiszkaIndex,
                    fiszkaId: fiszka?.id
                }
            );


            if (!fiszka) {

                console.warn(
                    '[fiszka-details] ❌ nie znaleziono fiszki',
                    {
                        y,
                        wordIndex,
                        fiszkaIndex,
                        blockWords
                    }
                );

                $details.html(
                    '<div class="active-word-details-text">Brak fiszki</div>'
                );

                $details.slideDown(150);

                $toggle.text('▲');

                return;
            }


            console.log(
                '[fiszka-details] 🎯 wybrana fiszka:',
                {
                    wordIndex,
                    id: fiszka.id,
                    key: fiszka.key
                }
            );


            // =====================================
            // USTAL LICZBĘ STORY
            // =====================================

            let storyCount = 0;


            if (Array.isArray(fiszka.story)) {

                storyCount =
                    fiszka.story.length;

            } else if (fiszka.story) {

                storyCount = 1;
            }


            // =====================================
            // BRAK STORY
            // =====================================

            if (!storyCount) {

                console.warn(
                    '[fiszka-details] ❌ brak story w fiszce'
                );

                $details.html(
                    '<div class="active-word-details-text">Brak historyjki</div>'
                );

                $details.slideDown(150);

                $toggle.text('▲');

                return;
            }


            // =====================================
            // UNIKALNY KLUCZ FISZKI
            // =====================================

            let storyKey;


            if (fiszka.key !== undefined) {

                storyKey =
                    String(fiszka.key);

            } else if (Array.isArray(fiszka.id)) {

                storyKey =
                    fiszka.id.join('_');

            } else {

                storyKey =
                    String(
                        fiszka.id ||
                        fiszkaIndex
                    );
            }


            // =====================================
            // ODCZYTAJ ZAPAMIĘTANĄ WERSJĘ
            // =====================================

            let storyIndex =
                window.activeStoryVersionCache[
                    storyKey
                ];


            // =====================================
            // JEŚLI BRAK — LOSUJ RAZ
            // =====================================

            if (
                storyIndex === undefined ||
                storyIndex < 0 ||
                storyIndex >= storyCount
            ) {

                storyIndex =
                    Math.floor(
                        Math.random() *
                        storyCount
                    );

                window.activeStoryVersionCache[
                    storyKey
                ] = storyIndex;

            }


            // =====================================
            // CATEGORY1
            // =====================================

            let categoryVersions = [];


            if (
                Array.isArray(
                    fiszka.category1
                )
            ) {

                for (
                    let i = 0;
                    i < fiszka.category1.length;
                    i += 2
                ) {

                    const value =
                        fiszka.category1[i];

                    const hashtag =
                        fiszka.category1[i + 1];


                    if (
                        value !== undefined ||
                        hashtag !== undefined
                    ) {

                        categoryVersions.push(
                            `${value || ''} #${hashtag || ''}`
                        );
                    }
                }
            }


            // =====================================
            // LICZBA DOSTĘPNYCH WERSJI
            // =====================================

            const versionCount =
                Math.min(
                    storyCount,
                    categoryVersions.length ||
                    storyCount
                );


            // =====================================
            // ZABEZPIECZENIE STORY INDEX
            // =====================================

            if (
                storyIndex >= versionCount
            ) {

                storyIndex = 0;

                window.activeStoryVersionCache[
                    storyKey
                ] = storyIndex;
            }


            // =====================================
            // FUNKCJA RYSUJĄCA STORY
            // =====================================

            function renderStoryVersion(
                selectedIndex
            ) {

                selectedIndex =
                    Number(selectedIndex);


                // =====================================
                // ZABEZPIECZENIE
                // =====================================

                if (
                    isNaN(selectedIndex) ||
                    selectedIndex < 0 ||
                    selectedIndex >= versionCount
                ) {

                    selectedIndex = 0;
                }


                // =====================================
                // ZAPISZ WYBRANĄ WERSJĘ
                // =====================================

                window.activeStoryVersionCache[
                    storyKey
                ] = selectedIndex;


                // =====================================
                // STORY
                // =====================================

                const storyText =
                    Array.isArray(fiszka.story)
                        ? fiszka.story[selectedIndex]
                        : fiszka.story;


                // =====================================
                // IMAGE
                // =====================================

                const imageUrl =
                    Array.isArray(fiszka.img)
                        ? (
                            fiszka.img[selectedIndex]
                            || ''
                        )
                        : (
                            fiszka.img || ''
                        );


                // =====================================
                // HTML
                // =====================================

                let html = '';


                // =====================================
                // LEKCJA
                // =====================================

                html += `
                    <div class="active-word-details-lesson">
                        Lekcja ${lessonId}
                    </div>
                `;


                // =====================================
                // PRZYCISKI CATEGORY1
                // =====================================

                if (versionCount > 1) {

                    html += `
                        <div class="active-word-story-versions">
                    `;


                    for (
                        let i = 0;
                        i < versionCount;
                        i++
                    ) {

                        const buttonText =
                            categoryVersions[i]
                            || `Wersja ${i + 1}`;


                        html += `
                            <button
                                type="button"
                                class="
                                    active-word-story-version
                                    ${
                                        i === selectedIndex
                                            ? 'active'
                                            : ''
                                    }
                                "
                                data-story-index="${i}"
                            >
                                ${buttonText}
                            </button>
                        `;
                    }


                    html += `
                        </div>
                    `;
                }


                // =====================================
                // OBRAZEK
                // =====================================

                if (imageUrl) {

                    html += `
                        <img
                            src="${imageUrl}"
                            alt="Fiszka"
                            class="active-word-details-image"
                        >
                    `;
                }


                // =====================================
                // STORY
                // =====================================

                html += `
                    <div class="active-word-details-text">
                        ${storyText || ''}
                    </div>
                `;


                // =====================================
                // WSTAW PANEL
                // =====================================

                $details.html(html);


                // =====================================
                // KLIKANIE CATEGORY1
                // =====================================

                $details
                    .find(
                        '.active-word-story-version'
                    )
                    .off(
                        'click.activeStoryVersion'
                    )
                    .on(
                        'click.activeStoryVersion',
                        function (e) {

                            e.stopPropagation();


                            const newIndex =
                                Number(
                                    $(this).attr(
                                        'data-story-index'
                                    )
                                );


                            console.log(
                                '[fiszka-details] 🔄 ZMIANA CATEGORY1:',
                                {
                                    storyKey,
                                    oldIndex:
                                        selectedIndex,
                                    newIndex,
                                    category:
                                        categoryVersions[
                                            newIndex
                                        ]
                                }
                            );


                            // =====================================
                            // ZMIEŃ STORY + IMG
                            // =====================================

                            renderStoryVersion(
                                newIndex
                            );
                        }
                    );
            }


            // =====================================
            // PIERWSZE WYŚWIETLENIE
            // =====================================

            renderStoryVersion(
                storyIndex
            );


            // =====================================
            // POKAŻ PANEL
            // =====================================

            $details
                .stop(true, true)
                .slideDown(150);

            $toggle.text('▲');
        }
    );
    
// =====================================
// USTAW AKTYWNE SŁOWO
// + ZAMKNIJ POPRZEDNI PANEL
// + OTWÓRZ NOWY PANEL
// =====================================

function setActiveWordTag($tag) {

    const $allTags =
        $('#active-word-bar')
            .find('.active-word-tag');


    // =====================================
    // ZAMKNIJ WORD-PREVIOUS
    // =====================================

    const $previousTags =
        $allTags.filter('.word-previous');

    $previousTags.each(function () {

        const $previousTag = $(this);

        const $details =
            $previousTag
                .find('.active-word-details')
                .first();

        const $toggle =
            $previousTag
                .find('.active-word-details-toggle')
                .first();


        // zamknij fiszkę
        if ($details.length) {

            $details
                .stop(true, true)
                .slideUp(150);
        }


        // ustaw strzałkę zamknięcia
        if ($toggle.length) {
            $toggle.text('▼');
        }


        // usuń aktywne podświetlenie
        $previousTag.removeClass('word-tag-active');
    });


    // =====================================
    // ZAMKNIJ POZOSTAŁE SŁOWA
    // =====================================

    $allTags.each(function () {

        const $oldTag = $(this);

        // pomiń aktualny
        if (
            $tag &&
            $tag.length &&
            $oldTag.is($tag)
        ) {
            return;
        }


        // word-previous zostało już obsłużone
        if ($oldTag.hasClass('word-previous')) {
            return;
        }


        const $oldDetails =
            $oldTag
                .find('.active-word-details')
                .first();

        const $oldToggle =
            $oldTag
                .find('.active-word-details-toggle')
                .first();


        if ($oldDetails.length) {

            $oldDetails
                .stop(true, true)
                .slideUp(150);
        }


        if ($oldToggle.length) {
            $oldToggle.text('▼');
        }


        $oldTag.removeClass('word-tag-active');
    });


    // =====================================
    // USTAW NOWE AKTYWNE SŁOWO
    // =====================================

    if ($tag && $tag.length) {

        $tag.addClass('word-tag-active');


        // =====================================
        // OTWÓRZ NOWĄ FISZKĘ
        // =====================================

        const $details =
            $tag
                .find('.active-word-details')
                .first();

        const $toggle =
            $tag
                .find('.active-word-details-toggle')
                .first();


        if ($details.length) {

            $details
                .stop(true, true)
                .slideDown(150);
        }


        if ($toggle.length) {
            $toggle.text('▲');
        }
    }
}

// =====================================
// AUTOMATYCZNIE POKAŻ FISZKĘ AKTYWNEGO SŁOWA
// =====================================

function openActiveWordDetails($tag) {

    if (!$tag || !$tag.length) {
        return;
    }

    const $details =
        $tag.find('.active-word-details').first();

    const $toggle =
        $tag.find('.active-word-details-toggle').first();

    if (!$details.length || !$toggle.length) {
        return;
    }


    // już otwarte
    if ($details.is(':visible')) {
        return;
    }


    // =====================================
    // JEŚLI FISZKA ZOSTAŁA JUŻ WYBRANA
    // POKAŻ JĄ PONOWNIE
    // =====================================

    const savedHtml =
        $tag.data('fiszka-details-html');

    if (savedHtml) {

        $details
            .html(savedHtml)
            .stop(true, true)
            .slideDown(150);

        $toggle.text('▲');

        return;
    }


    // =====================================
    // DANE Z ACTIVE TAG
    // =====================================

    const indexDiv =
        Number(
            $tag.attr('data-indexdiv')
        );

    const pos =
        Number(
            $tag.attr('data-pos')
        );

    const wordIndex =
        Number(
            $tag.attr('data-word-index')
        );

    const lessonId =
        $tag.attr('data-lesson-id') || '';


    // =====================================
    // SENTENCE MAP
    // =====================================
const sentenceMap =
    window.sentenceMapCache?.[indexDiv] || [];

const y =
    sentenceMap[pos];


console.log('DEBUG:', {
    indexDiv,
    pos,
    sentenceMap,
    y,
    wordIndex,
    firstFiszkaId: fiszki10[0]?.id
});


// =====================================
// ZNAJDŹ FISZKI Z TEGO BLOKU
// =====================================

const blockWords =
    fiszki10
        .filter(
            f =>
                Number(f.id?.[1]) === Number(y)
        )
        .sort(
            (a, b) =>
                Number(a.id[0]) -
                Number(b.id[0])
        );


if (!blockWords.length) {

    console.warn(
        '[fiszka-details] ❌ brak fiszek',
        {
            y,
            indexDiv,
            pos
        }
    );

    $details.html(
        '<div class="active-word-details-text">Brak fiszki</div>'
    );

    $details.slideDown(150);

    $toggle.text('▲');

    return;
}


// =====================================
// WYBIERZ KONKRETNĄ FISZKĘ
// =====================================

// Dla pierwszego bloku y = 1:
// przesuwamy o 1.
//
// Dla pozostałych:
// normalny wordIndex.

const fiszkaIndex =
    Number(y) === 1
        ? wordIndex + 1
        : wordIndex;

const fiszka =
    blockWords[fiszkaIndex];


console.log('[fiszka-details] WYBRANA FISZKA:', {
    y,
    wordIndex,
    fiszkaIndex,
    fiszkaId: fiszka?.id
});


if (!fiszka) {

    console.warn(
        '[fiszka-details] ❌ nie znaleziono fiszki',
        {
            y,
            wordIndex,
            fiszkaIndex,
            blockWords
        }
    );

    $details.html(
        '<div class="active-word-details-text">Brak fiszki</div>'
    );

    $details.slideDown(150);

    $toggle.text('▲');

    return;
}


// =====================================
// WYBIERZ STORY
// =====================================

let story;
let storyCount;

if (Array.isArray(fiszka.story)) {

    // =====================================
    // STORY JEST ARRAY
    // =====================================

    storyCount = fiszka.story.length;

    if (storyCount > 0) {

        const randomIndex =
            Math.floor(
                Math.random() * storyCount
            );

        story =
            fiszka.story[randomIndex];
    }

} else {

    // =====================================
    // STORY NIE JEST ARRAY
    // =====================================

    story = fiszka.story;

    storyCount = story ? 1 : 0;
}


// =====================================
// BRAK STORY
// =====================================

if (!storyCount || !story) {

    console.warn(
        '[fiszka-details] ❌ brak story w fiszce'
    );

    $details.html(
        '<div class="active-word-details-text">Brak historyjki</div>'
    );

    $details.slideDown(150);

    $toggle.text('▲');

    return;
}


// =====================================
// DEBUG
// =====================================

console.log('[fiszka-details] STORY:', {
    story,
    storyCount,
    isArray: Array.isArray(fiszka.story)
});


// =====================================
// WYŚWIETL CAŁĄ HISTORYJKĘ
// =====================================

$details.html(
    `<div class="active-word-details-text">${story}</div>`
);

$details.slideDown(150);

$toggle.text('▲');


    const randomStoryIndex =
        Math.floor(
            Math.random() * storyCount
        );


    // =====================================
    // STORY + IMG Z TEJ SAMEJ WERSJI
    // =====================================

    const storyText =
        fiszka.story[randomStoryIndex];

    const imageUrl =
        Array.isArray(fiszka.img)
            ? fiszka.img[randomStoryIndex]
            : '';


    // =====================================
    // HTML
    // =====================================

    let html = '';

    html += `
        <div class="active-word-details-lesson">
            Lekcja ${lessonId}
        </div>
    `;


    if (imageUrl) {

        html += `
            <img
                src="${imageUrl}"
                alt="Fiszka"
            >
        `;
    }


    html += `
        <div class="active-word-details-text">
            ${storyText}
        </div>
    `;


    // =====================================
    // ZAPAMIĘTAJ PANEL
    // =====================================

    $tag.data(
        'fiszka-details-html',
        html
    );


    // =====================================
    // POKAŻ
    // =====================================

    $details
        .html(html)
        .stop(true, true)
        .slideDown(150);

    $toggle.text('▲');


    console.log(
        '[fiszka-details] ✅ automatycznie pokazano',
        {
            indexDiv,
            pos,
            wordIndex,
            randomStoryIndex
        }
    );
}
// =====================================
// OPUSZCZENIE IMAGE-CONTAINER3B
// =====================================

$(document).on(
    'mouseleave.activeWordContainer',
    '.image-container3b',
    function () {

        $('#active-word-bar')
            .find('.active-word-tag')
            .removeClass('word-tag-active');

    }
);
function playCurrentWord($block) {

    console.log('[playCurrentWord] START');

    const $line = $block.find('.sentence-line').first();

    const indexDiv = Number(
        $line.find('.sentence-inner').data('indexdiv')
    );

    const pos = currentPosCache[indexDiv] ?? currentPos ?? 0;

    const descKey = `${indexDiv}_${pos}`;


    // pamięć słowa
    if (wordIndexCache[descKey] === undefined) {
        wordIndexCache[descKey] = 0;
    }


const currentWordIndex = indexDiv === 1
    ? (wordIndexCache[descKey] ?? 0)
    : (wordIndexCache[descKey] ?? 0) + 1;


    console.log(
        '[playCurrentWord] indexDiv =',
        indexDiv,
        'pos =',
        pos,
        'word =',
        currentWordIndex
    );


    // znajdź zapamiętane słowo
    let $target = $line.find(
        `[data-word-index="${currentWordIndex - 1}"]`
    ).first();


    // zabezpieczenie
    if (!$target.length) {

        console.warn(
            '[playCurrentWord] brak słowa, ustawiam 0'
        );

        wordIndexCache[descKey] = 0;

        $target = $line.find(
            '[data-word-index="0"]'
        ).first();
    }


    if (!$target.length) {
        console.error(
            '[playCurrentWord] ❌ NO WORD'
        );
        return;
    }


    console.log(
        '[playCurrentWord] target:',
        $target.text(),
        'index:',
        $target.attr('data-word-index')
    );


    // usuń stare animacje
    $('.word-animation').remove();


    // animacja
    $target.css({
        position: 'relative',
        display: 'inline-block'
    });


    $target.append(`
        <div class="word-animation">
            <span class="a1"></span>
            <span class="a2"></span>
            <span class="a3"></span>
            <span class="a4"></span>
            <span class="a5"></span>
            <span class="a6"></span>
            <span class="a7"></span>
            <span class="a8"></span>
            <span class="a9"></span>
            <span class="a10"></span>
        </div>
    `);



    tablica20aa.push(currentWordIndex);


    // ==========================
    // AUDIO
    // ==========================
const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
const y = sentenceMap[pos];

const blockWords = fiszki10
    .filter(f => f.id?.[1] === y)
    .sort((a, b) => a.id[0] - b.id[0]);


const audioIndex = currentWordIndex === 0
    ? 0
    : currentWordIndex - 1;

const fiszkaAudio = blockWords[audioIndex];


    console.log('[audio] y=', y);
    console.log('[audio] word=', fiszkaAudio);


    if (fiszkaAudio?.word?.[0]) {


        const audio = new Audio(
            fiszkaAudio.word[0]
        );


        audio.currentTime = 0;


        audio.play()
        .catch(err => {
            console.warn(
                '[audio] error',
                err
            );
        });
    }



    // synchronizacja podświetlenia
    syncHighlightForIndexDiv(
        indexDiv,
        pos
    );


    console.log(
        '[playCurrentWord] ✅ restored word',
        currentWordIndex
    );
}
console.log("tripletIds =", tripletIds);


// ===============================
// 3. BUDOWA NAV
// ===============================

const $nav = $('<div>').addClass('nav-buttons');


// ←
const $left = $('<button>')
    .text('←')
    .on('click', () => {
currentPos = (currentPos - 1 + tripletIds.length) % tripletIds.length;
currentPosCache[indexDiv] = currentPos;
renderLesson();
    });

$nav.append($left);


// 🔢 PRZYCISKI
tripletIds.forEach((id, i) => {

    const $btn = $('<button>')
        .addClass('lesson-indicator')
        .toggleClass('active', i === currentPos)

        // 🔥 TU JEST TWOJE ID
        .text(id ?? i)

        .attr('data-id', id ?? '')

.on('click', () => {

    // ==========================================
    // AKTUALNY LESSON-INDICATOR
    // ==========================================

    currentPos = i;

    currentPosCache[indexDiv] = i;


    const lessonId =
        tripletIds[currentPos];


    console.log(
        '======================================'
    );

    console.log(
        '[LESSON-INDICATOR] CLICK'
    );

    console.log({
        indexDiv: indexDiv,
        lessonId: lessonId,
        currentPos: currentPos
    });


    // ==========================================
    // DESC KEY
    // ==========================================
    // UWAGA:
    // tutaj zachowujemy Twoją dotychczasową
    // numerację 1 / 2 / 3
    // ==========================================

    const pos =
        currentPos + 1;


    const descKey =
        `${indexDiv}_${pos}`;


    window.descKeyCache =
        window.descKeyCache || {};

    window.descKeyCache[indexDiv] =
        descKey;


    // ==========================================
    // CACHE
    // ==========================================

    window.thumbHighlightCache =
        window.thumbHighlightCache || {};


    if (wordIndexCache[descKey] === undefined) {

        wordIndexCache[descKey] =
            window.thumbHighlightCache[descKey] ?? 0;

    }


    // ==========================================
    // NOWA RODZINA / NOWY PION
    // ==========================================
    //
    // KAŻDY lesson-indicator ma własny pion
    //
    // np.
    // indexDiv=1, lessonId=1
    // indexDiv=1, lessonId=2
    // indexDiv=1, lessonId=3
    //
    // ==========================================

    const familyKey =
        `${indexDiv}_${lessonId}`;


    window.activeLessonFamily =
        window.activeLessonFamily || {};

    window.activeLessonFamily[indexDiv] =
        familyKey;


    console.log(
        '[LESSON-INDICATOR] NOWY PION',
        {
            familyKey: familyKey,
            lessonId: lessonId
        }
    );


    // ==========================================
    // RENDER
    // ==========================================

    renderLesson();


    // ==========================================
    // PO RENDERZE
    // ==========================================

    setTimeout(() => {

        console.log(
            '[LESSON-INDICATOR] PO RENDER'
        );


        // ======================================
        // SZUKAMY AKTUALNEGO BLOCKA
        // ======================================

        const $block =
            $('.image-container3b')
                .filter(function () {

                    return Number(
                        $(this).attr('data-id')
                    ) === Number(lessonId);

                })
                .first();


        console.log(
            '[LESSON-INDICATOR] BLOCK',
            {
                lessonId: lessonId,
                found: $block.length
            }
        );


        if (!$block.length) {

            console.log(
                '[LESSON-INDICATOR] BRAK BLOCKA'
            );

            return;
        }


        // ======================================
        // BIERZEMY ZAWSZE ANGIELSKĄ LINIĘ
        // ======================================
        //
        // NIE używamy tutaj currentPos
        // NIE używamy pos
        //
        // pierwsza .sentence-line = angielski
        // ======================================

        const $englishLine =
            $block
                .find('.sentence-line')
                .first();


        console.log(
            '[LESSON-INDICATOR] ENGLISH LINE',
            {
                found: $englishLine.length,
                dataPos:
                    $englishLine.attr('data-pos')
            }
        );


        if (!$englishLine.length) {

            console.log(
                '[LESSON-INDICATOR] BRAK ENGLISH LINE'
            );

            return;
        }


        // ======================================
        // PIERWSZE ANGIELSKIE SŁOWO
        // ======================================

        const $firstWord =
            $englishLine
                .find('[data-word-index="0"]')
                .first();


        console.log(
            '[LESSON-INDICATOR] FIRST ENGLISH WORD',
            {
                found: $firstWord.length,
                text: $firstWord.text()
            }
        );


        if (!$firstWord.length) {

            console.log(
                '[LESSON-INDICATOR] BRAK FIRST ENGLISH WORD'
            );

            return;
        }


        const wordText =
            $.trim(
                $firstWord.text()
            );


        if (!wordText) {

            console.log(
                '[LESSON-INDICATOR] WORD EMPTY'
            );

            return;
        }


        // ======================================
        // SZUKAMY ISTNIEJĄCEGO TAGU



        // ======================================
// NOWA RODZINA = NOWY PION
// ======================================
//
// 1_0 = pierwsze zdanie
// 1_1 = drugie zdanie
// 1_2 = trzecie zdanie
//
// 2_0 = pierwszy pion kolejnego indexDiv
// 2_1 = drugi pion itd.
// ======================================

const familyKey =
    `${indexDiv}_${currentPos}`;


// zapamiętaj aktualną rodzinę
window.activeLessonFamily =
    window.activeLessonFamily || {};

window.activeLessonFamily[indexDiv] =
    familyKey;


console.log(
    '[LESSON-INDICATOR] NOWA RODZINA',
    {
        familyKey,
        indexDiv,
        currentPos,
        lessonId,
        wordText
    }
);


// ======================================
// SPRAWDŹ CZY PIERWSZE SŁOWO JUŻ ISTNIEJE
// ======================================

const $existing =
    $('.active-word-tag')
        .filter(function () {

            return (
                String(
                    $(this).attr('data-family-key')
                ) === String(familyKey)

                &&

                Number(
                    $(this).attr('data-word-index')
                ) === -1
            );

        })
        .first();


if ($existing.length) {

    console.log(
        '[LESSON-INDICATOR] PIERWSZY TAG JUŻ ISTNIEJE',
        {
            familyKey,
            text: $existing.find('.word-tag-text').text()
        }
    );

    playCurrentWord($block);

    return;
}


// ======================================
// TWORZYMY ACTIVE-WORD-TAG
// ======================================

const $tag =
    $('<button>')
        .addClass('active-word-tag')
        .attr({

            'data-tag-key':
                `${indexDiv}_${currentPos}_-1`,

            'data-indexdiv':
                indexDiv,

            'data-pos':
                currentPos,

            'data-word-index':
                -1,

            'data-play-count':
                1,

            'data-lesson-id':
                lessonId,

            'data-family-key':
                familyKey
        })
        .css({
            display: 'block',
            position: 'relative',
            left: 'auto',
            top: 'auto',
            float: 'none',
            margin: '0px'
        });


// ======================================
// FISZKA DLA TEGO SŁOWA
// ======================================

const indicatorWords =
    fiszki10
        .filter(function (f) {

            return (
                f.id &&
                Number(f.id[1]) === Number(lessonId)
            );

        })
        .sort(function (a, b) {

            return (
                Number(a.id[0]) -
                Number(b.id[0])
            );

        });


const fiszkaForTag =
    indicatorWords[0] || null;


console.log(
    '[LESSON-INDICATOR] FISZKA DLA TAGU',
    fiszkaForTag
);


// ======================================
// ZAPISZ CAŁĄ FISZKĘ
// ======================================

$tag.data(
    'fiszkaData',
    fiszkaForTag
);


// ======================================
// DESC
// ======================================

const descValue =
    fiszkaForTag?.desc ?? '';


$tag.data(
    'desc',
    descValue
);


// ======================================
// TEKST SŁOWA
// ======================================
//
// WAŻNE:
// używamy word-tag-translation,
// bo tego używa Twój działający
// mechanizm TŁUMACZ z next-buttonvv.
// ======================================

const $wordText =
    $('<span>')
        .addClass('word-tag-translation')
        .text(wordText);


$tag.append(
    $wordText
);


// ======================================
// TŁUMACZ
// ======================================

const $translateButton =
    $('<button>')
        .attr({
            type: 'button'
        })
        .addClass(
            'active-word-translate-button'
        )
        .text('TŁUMACZ');


// ======================================
// OBSŁUGA TŁUMACZA
// ======================================

$translateButton.on(
    'click',
    function (e) {

        e.preventDefault();
        e.stopPropagation();


        const $currentTag =
            $(this)
                .closest(
                    '.active-word-tag'
                );


        const currentDesc =
            $currentTag.data('desc') ?? '';


        console.log(
            '[TŁUMACZ][lesson-indicator]',
            {
                familyKey:
                    $currentTag.attr(
                        'data-family-key'
                    ),

                lessonId:
                    $currentTag.attr(
                        'data-lesson-id'
                    ),

                currentDesc:
                    currentDesc
            }
        );


        $currentTag
            .find(
                '.word-tag-translation'
            )
            .first()
            .text(
                currentDesc
            );

    }
);


$tag.append(
    $translateButton
);


// ======================================
// LICZNIK ODTWORZEŃ
// ======================================

const $playCount =
    $('<span>')
        .addClass('word-play-count');


$playCount.append(

    $('<span>')
        .addClass('word-play-segment')

);


$tag.append(
    $playCount
);


// ======================================
// LEKCJA
// ======================================

$tag.append(

    $('<span>')
        .addClass('word-lesson')
        .text(
            ` - lekcja ${lessonId}`
        )

);


// ======================================
// STRZAŁKA SZCZEGÓŁÓW
// ======================================

const $detailsToggle =
    $('<span>')
        .addClass(
            'active-word-details-toggle'
        )
        .text('▼');


$tag.append(
    $detailsToggle
);


// ======================================
// ACTIVE-WORD-DETAILS
// ======================================

const $details =
    $('<div>')
        .addClass(
            'active-word-details'
        )
        .css(
            'display',
            'none'
        );


// ======================================
// LEKCJA W SZCZEGÓŁACH
// ======================================

$details.append(

    $('<div>')
        .addClass(
            'active-word-details-lesson'
        )
        .text(
            `Lekcja ${lessonId}`
        )

);


// ======================================
// DESC W SZCZEGÓŁACH
// ======================================

$details.append(

    $('<div>')
        .addClass(
            'active-word-details-text'
        )
        .text(
            descValue
        )

);


// ======================================
// OBRAZEK
// ======================================

const imgValue =
    fiszkaForTag?.img;


if (imgValue) {

    const imgSrc =
        Array.isArray(imgValue)
            ? imgValue[0]
            : imgValue;


    if (imgSrc) {

        $details.append(

            $('<img>')
                .attr({
                    src: imgSrc,
                    alt: 'Fiszka'
                })
                .addClass(
                    'active-word-details-image'
                )

        );

    }

}


// ======================================
// DODAJ DETAILS DO TAGU
// ======================================

$tag.append(
    $details
);


// ======================================
// DODAJ DO ACTIVE-WORD-BAR
// ======================================

const $bar =
    $('#active-word-bar');


if (!$bar.length) {

    console.log(
        '[LESSON-INDICATOR] BRAK #active-word-bar'
    );

    return;
}


// ======================================
// RODZINA
// ======================================
//
// UWAGA:
// na tym etapie zostawiamy familyKey.
// W KROKU 2 zmienimy next-buttonvv,
// żeby korzystał dokładnie z tej wartości.
// ======================================

$bar.prepend(
    $tag
);


console.log(
    '[LESSON-INDICATOR] NOWY ACTIVE-WORD-TAG',
    {
        tagKey:
            `${indexDiv}_${currentPos}_-1`,

        familyKey:
            familyKey,

        wordText:
            wordText,

        desc:
            descValue,

        indexDiv:
            indexDiv,

        currentPos:
            currentPos,

        lessonId:
            lessonId
    }
);


// ======================================
// URUCHOM PIERWSZE SŁOWO
// ======================================

playCurrentWord($block);


    }, 100);

});

    $nav.append($btn);
});


// →
const $right = $('<button>')
    .text('→')
    .on('click', () => {
currentPos = (currentPos + 1) % tripletIds.length;
currentPosCache[indexDiv] = currentPos;
renderLesson();
    });

$nav.append($right);


// ===============================
// 4. WRZUCENIE DO DOM
// ===============================

$('.nav-container').empty().append($nav);

            $container.append($mediaContainer, $textContainer, $nav);
        }
        
        
        
        
            NEXT BUTTONVV
            $(document).on("click", ".next-buttonvv", function () {
    // =====================================
    // ❌ ZAMKNIJ SZCZEGÓŁY POPRZEDNIEGO SŁOWA
    // =====================================

    $('#active-word-details').remove();

    $('.active-word-details').remove();

    $('[id="active-word-details"]').remove();
    const $line = $(this).closest(".sentence-line");

    const $sentence = $line.find(".sentence-inner");

    const indexDiv = Number($sentence.data("indexdiv"));
    const pos = Number($sentence.data("pos"));

    const descKey = `${indexDiv}_${pos}`;

    // inicjalizacja licznika dla konkretnego zdania
    if (wordIndexCache[descKey] === undefined)
        wordIndexCache[descKey] = 0;

// następne słowo
const wiKey = `${indexDiv}_${pos}`;

window.savedWiCache = window.savedWiCache || {};

if (window.highlightMode === 'rodzaj') {

    window.savedWiCache[wiKey] =
        (window.savedWiCache[wiKey] ?? 0);

    wordIndexCache[descKey] = window.savedWiCache[wiKey];

    window.thumbHighlightCache[descKey] =
        window.savedWiCache[wiKey];

} else {

    wordIndexCache[descKey]++;

    window.thumbHighlightCache[descKey] =
        wordIndexCache[descKey] - 1;

}


const currentWordIndex = indexDiv === 1
    ? (window.highlightMode === 'rodzaj'
        ? (wordIndexCache[descKey] ?? 0)
        : (wordIndexCache[descKey] ?? 0) - 1)
    : (wordIndexCache[descKey] ?? 0);

    tablica20aa.push(currentWordIndex);

    console.log("descKey5:", pos);
    console.log("currentWordIndex55:", currentWordIndex);

    // =====================================
    // ANIMACJA
    // =====================================

// =====================================
// 🧹 TŁUMACZ — NIE MOŻE BYĆ CZĘŚCIĄ SŁOWA
// =====================================



// =====================================
// NASTĘPNE SŁOWO
// =====================================

const $nextWord = $line.find(
    `[data-word-index="${currentWordIndex}"]`
).first();
if ($nextWord.length) {



    const $wordClone =
        $nextWord.clone(true, false);

    // =====================================
    // 🧹 USUŃ WSZYSTKIE ELEMENTY TŁUMACZA
    // =====================================

    $wordClone.find(
        '.translate-memory-button, ' +
        '.active-word-translate-memory-button, ' +
        '#active-word-translate-memory, ' +
        '.active-word-translate-button, ' +
        '.word-translate-button, ' +
        '[data-ignore-word="true"]'
    ).remove();


    // =====================================
    // 🧹 USUŃ TEŻ TEKST TŁUMACZA
    // JEŚLI JAKOŚ ZOSTAŁ W TEKŚCIE
    // =====================================

    wordText =
        $wordClone
            .text()
            .replace(
                /tłumacz\s+w\s+zapisanej\s+pamięci/gi,
                ''
            )
            .trim();


    console.log(
        '[next-buttonvv] CZYSTE wordText =',
        wordText
    );
            $nextWord.css({
            position: "relative",
            display: "inline-block"
        });

        $nextWord.append(`
            <div class="word-animation">
                <span class="a1"></span>
                <span class="a2"></span>
                <span class="a3"></span>
                <span class="a4"></span>
                <span class="a5"></span>
                <span class="a6"></span>
                <span class="a7"></span>
                <span class="a8"></span>
                <span class="a9"></span>
                <span class="a10"></span>
            </div>
        `);
}

    // =====================================
    // AUDIO
    // =====================================

const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
const y = sentenceMap[pos];

const blockWords = fiszki10
    .filter(f => f.id?.[1] === y)
    .sort((a, b) => a.id[0] - b.id[0]);

    const fiszkaAudio = blockWords[currentWordIndex];

    console.log("[audio]5 indexDiv =", indexDiv);
    console.log("[audio] pos =", pos);
    console.log("[audio] y =", y);
    console.log("[audio] currentWordIndex =", currentWordIndex);
    console.log("[audio] fiszkaAudio =", fiszkaAudio);

    if (fiszkaAudio?.word?.[0]) {

        const audio = new Audio(fiszkaAudio.word[0]);

        audio.currentTime = 0;

        audio.play().catch(err => {
            console.warn(err);
        });
                // =====================================
        // DODAJ SŁÓWKO DO GLOBALNEGO PASKA
// =====================================
// DODAWANIE SŁOWA DO GLOBALNEJ LISTY
// =====================================

// upewnij się, że pasek istnieje
if (!$("#active-word-bar").length) {
    $("body").prepend(`
        <div id="active-word-bar"></div>
    `);
}


// =====================================
// POBIERZ CZYSTE SŁOWO
// =====================================

let wordText = "";

if ($nextWord.length) {

    wordText = getCleanWordText($nextWord);

}


// =====================================
// FALLBACK Z FISZKI
// =====================================

if (!wordText && fiszkaAudio?.word?.[1]) {

    wordText = fiszkaAudio.word[1];

}

if (!wordText && fiszkaAudio?.word?.[1]) {

    wordText = fiszkaAudio.word[1];
}



// =====================================
// ZAWSZE TWÓRZ TAG
// =====================================

{

    const lessonId =
        $nextWord
            .closest('.image-container3b')
            .attr('data-id') || '';



    console.log(
        'hej100 lessonId =',
        lessonId
    );

    console.log(
        'hej100 target =',
        $nextWord
    );


    const tagKey =
        `${indexDiv}_${pos}_${currentWordIndex}`;

// =====================================
// TŁUMACZ W ZAPISANEJ PAMIĘCI
// PRZYPIĘTY DO GWIAZDKI
// =====================================

const $star = $target.children('.word-play-star').first();

if (
    $star.length &&
    !$star.children('.translate-memory-button').length
) {

const $translateMemory =
    $('<button>')
        .attr({
            type: 'button',
            'data-ignore-word': 'true'
        })
        .addClass('translate-memory-button')
        .text('tłumacz w zapisanej pamięci');


// WAŻNE:
// ten tekst nigdy nie może być liczony jako słowo
$translateMemory.attr(
    'data-ignore-word',
    'true'
);


    $translateMemory.on(
        'click',
        function (e) {

            e.stopPropagation();

            console.log(
                '[translate-memory] słowo:',
                wordText
            );

            console.log(
                '[translate-memory] indexDiv:',
                indexDiv
            );

            console.log(
                '[translate-memory] pos:',
                pos
            );

            console.log(
                '[translate-memory] wordIndex:',
                wordIndex
            );
        }
    );


    $star.append(
        $translateMemory
    );
}
    // =====================================
    // SPRAWDŹ CZY TAG JUŻ ISTNIEJE
    // =====================================

    let $existingTag =
        $('#active-word-bar')
            .find(
                `.active-word-tag[data-tag-key="${tagKey}"]`
            )
            .first();


    // =====================================
    // SŁOWO JUŻ BYŁO ODTWARZANE
    // =====================================

    if ($existingTag.length) {

        let playCount =
            Number(
                $existingTag.attr('data-play-count')
            ) || 1;


        // zwiększ liczbę odtworzeń
        playCount++;


        // zapisz nową liczbę
        $existingTag
            .attr(
                'data-play-count',
                playCount
            );


        // =====================================
        // DODAJ JEDEN ZIELONY PROSTOKĄT
        // =====================================

        $existingTag
            .find('.word-play-count')
            .append(
                $('<span>')
                    .addClass('word-play-segment')
            );


        console.log(
            '[word-tag] ponowne odtworzenie:',
            wordText,
            'ilość:',
            playCount,
            'lekcja:',
            lessonId
        );

    }


    // =====================================
    // NOWE SŁOWO
    // =====================================

    else {

        const $tag = $('<button>')
            .addClass('active-word-tag')
            .attr({

                'data-tag-key':
                    tagKey,

                'data-indexdiv':
                    indexDiv,

                'data-pos':
                    pos,

                'data-word-index':
                    currentWordIndex - 1,

                'data-play-count':
                    1,

                'data-lesson-id':
                    lessonId
            });

// =====================================
// PODSTAWOWE SŁOWO
// =====================================

const $wordText = $('<span>')
    .addClass('word-tag-translation')
    .text(wordText);

$tag.append($wordText);
// =====================================
// FISZKA DLA AKTYWNEGO SŁOWA
// =====================================

// fiszkaAudio została już wcześniej
// wybrana z właściwego bloku i właściwego indeksu

const fiszkaForTag =
    fiszkaAudio;


// =====================================
// 🧠 ZAPIS PEŁNEJ FISZKI W TAGU
// =====================================

$tag.data(
    'fiszkaData',
    fiszkaForTag
);


// =====================================
// DEBUG
// =====================================

console.log(
    '[word-tag] 🎯 FISZKA DLA TAGU:',
    {
        indexDiv,
        pos,
        currentWordIndex,
        fiszkaForTag
    }
);


// =====================================
// POBIERZ DESC
// =====================================

// =====================================
// DESC DLA TŁUMACZA
// =====================================

const descValue =
    fiszkaForTag?.desc ??
    '';

$tag.data('desc', descValue);
// =====================================
// ZAPISZ DESC W TAGU
// =====================================

$tag.data(
    'desc',
    descValue
);


// =====================================
// PRZYCISK TŁUMACZ
// =====================================

const $translateButton =
    $('<button>')
        .attr({
            type: 'button'
        })
        .addClass(
            'active-word-translate-button'
        )
        .text(
            'TŁUMACZ'
        );


// =====================================
// PO KLIKNIĘCIU TŁUMACZ POKAŻ DESC
// =====================================

$translateButton.on(
    'click',
    function (e) {

        e.preventDefault();
        e.stopPropagation();

        const $currentTag =
            $(this)
                .closest(
                    '.active-word-tag'
                );


        const currentDesc =
            $currentTag.data('desc') ?? '';


        console.log(
            '[TŁUMACZ][next-buttonvv]',
            {
                currentDesc,
                fiszkaForTag
            }
        );


        // =====================================
        // ZMIEŃ TEKST W TAGU NA DESC
        // =====================================

        $currentTag
            .find(
                '.word-tag-translation'
            )
            .first()
            .text(
                currentDesc
            );

    }
);


$tag.append(
    $translateButton
);
// =====================================



        // =====================================
        // PROSTOKĄTY ODTWORZEŃ
        // =====================================

        const $playCount =
            $('<span>')
                .addClass('word-play-count');


        // pierwsze odtworzenie
        $playCount.append(
            $('<span>')
                .addClass('word-play-segment')
        );


        $tag.append($playCount);


        // =====================================
        // LEKCJA
        // =====================================

$tag.append(
    $('<span>')
        .addClass('word-lesson')
        .text(` - lekcja ${lessonId}`)
);


// =====================================
// ACTIVE WORD DETAILS — STRZAŁKA
// =====================================

const $detailsToggle =
    $('<span>')
        .addClass(
            'active-word-details-toggle'
        )
        .text('▼');

$tag.append(
    $detailsToggle
);


// =====================================
// ACTIVE WORD DETAILS — PANEL
// =====================================

const $details =
    $('<div>')
        .addClass(
            'active-word-details'
        )
        .css({
            display: 'none'
        });

$tag.append(
    $details
);


        // =====================================
        // DODAJ DO GLOBALNEGO PASKA
        // =====================================

// =====================================
// 🧠 RODZINA SŁÓW ZDANIA
// =====================================

const familyKey = `${indexDiv}_${pos}`;

const wordIndex = currentWordIndex - 1;

console.log(
    '[WORD-FAMILY]',
    'familyKey =', familyKey,
    'wordIndex =', wordIndex,
    'wordText =', wordText
);


// =====================================
// SZUKAMY RODZINY W CAŁYM PASKU
// =====================================

let $family = $('#active-word-bar')
    .children('.active-word-family')
    .filter(function () {

        return String(
            $(this).attr('data-family-key')
        ) === String(familyKey);

    })
    .first();


// =====================================
// NOWA RODZINA
// =====================================

if (!$family.length) {

    console.log(
        '[WORD-FAMILY] NOWA RODZINA:',
        familyKey
    );


    $family = $('<div>')
        .addClass('active-word-family')
        .attr(
            'data-family-key',
            familyKey
        );


    // -------------------------------------
    // PIONOWE SŁOWA W RODZINIE
    // -------------------------------------

    $family.css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        gap: '3px',
        whiteSpace: 'normal',
        width: 'max-content'
    });


    // -------------------------------------
    // PIERWSZE SŁOWO
    // -------------------------------------

    $family.append($tag);


    // -------------------------------------
    // CAŁA RODZINA DO PASKA
    // -------------------------------------
    //
    // prepend zachowuje Twoją obecną
    // kolejność rodzin
    //

    $('#active-word-bar')
        .prepend($family);


    console.log(
        '[WORD-FAMILY] DODANO NOWĄ RODZINĘ DO BAR'
    );

}


// =====================================
// ISTNIEJĄCA RODZINA
// =====================================

else {

    console.log(
        '[WORD-FAMILY] ISTNIEJĄCA RODZINA:',
        familyKey,
        '→ DODAJĘ SŁOWO PIONOWO:',
        wordText
    );


    // -------------------------------------
    // KOLEJNE SŁOWO POD POPRZEDNIM
    // -------------------------------------

    $family.append($tag);


    console.log(
        '[WORD-FAMILY] DODANO POD SPODEM:',
        wordText
    );
}


// =====================================
// INFORMACJE TAGU
// =====================================

$tag.attr({
    'data-family-key': familyKey,
    'data-word-index': wordIndex
});


        // =====================================
        // AKTUALIZUJ PODŚWIETLENIE
        // =====================================

        updateActiveWordHighlight();


        // =====================================
        // WYDRUKUJ AKTYWNE SŁOWO
        // =====================================

        printActiveWord($tag);

afterWordTagAdded();
        console.log(
            '[word-tag] added:',
            wordText,
            'lekcja:',
            lessonId,
            'index:',
            currentWordIndex - 1
        );

    }
    }
    }
    // =====================================
    // PODŚWIETLENIE
    // =====================================

    syncHighlightForIndexDiv(indexDiv, pos);

});
// =====================================
// TŁUMACZ — POKAŻ / UKRYJ DESC
// =====================================

$(document)
    .off(
        'click.activeWordTranslate',
        '.active-word-translate-button'
    )
    .on(
        'click.activeWordTranslate',
        '.active-word-translate-button',
        function (e) {

            e.preventDefault();
            e.stopPropagation();

            const $button = $(this);
            const $tag = $button.closest('.active-word-tag');

            console.log(
                '[TŁUMACZ] klik:',
                $tag
            );

            // =====================================
            // JEŚLI TŁUMACZENIE JUŻ ISTNIEJE
            // =====================================

            const $translation =
                $tag.children('.word-tag-translation');

            if ($translation.length) {

                $translation.remove();

                $button.text('TŁUMACZ');

                console.log(
                    '[TŁUMACZ] zamknięto'
                );

                return;
            }

            // =====================================
            // POBIERZ DESC
            // =====================================

            const desc =
                $tag.data('desc');

            console.log(
                '[TŁUMACZ] desc:',
                desc
            );

            if (
                desc === undefined ||
                desc === null ||
                desc === ''
            ) {
                console.warn(
                    '[TŁUMACZ] brak desc'
                );

                return;
            }

            // =====================================
            // UTWÓRZ KONTENER TŁUMACZENIA
            // =====================================

            const $translationBox =
                $('<span>')
                    .addClass('word-tag-translation');

            // =====================================
            // DESC JAKO TABLICA
            // =====================================

            if (Array.isArray(desc)) {

                desc.forEach(function (version) {

                    $('<div>')
                        .addClass('word-tag-translation-version')
                        .html(version)
                        .appendTo($translationBox);

                });

            }

            // =====================================
            // DESC JAKO STRING
            // =====================================

            else {

                $translationBox.html(desc);

            }

            // =====================================
            // DODAJ DO TAGU
            // =====================================

            $tag.append($translationBox);

            $button.text('UKRYJ');

            console.log(
                '[TŁUMACZ] otwarto:',
                desc
            );
        }
    );
    
    