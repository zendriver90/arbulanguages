function initMouseenter() {
$(document).on('mouseenter', '.image-container3b', function () {

    const $block = $(this);


    // =====================================
    // TEN KONTENER ZOSTAŁ JUŻ NAJECHANY
    // =====================================

    $block.attr(
        'data-mouseenter-used',
        'true'
    );


    console.log(
        '[mouseenter] kontener oznaczony jako użyty:',
        $block.attr('data-id')
    );

    // =====================================================
    // CZY MOUSEENTER ZOSTAŁ WYWOŁANY PRZEZ START?
    // =====================================================

    const isStartAction =
        window.startWordRequest === $block[0];

    if (isStartAction) {

        // wyczyść żądanie od razu
        window.startWordRequest = null;

        console.log(
            '[mouseenter] START → wymuszam pierwsze słowo'
        );
    }

    // =====================================================
    // MOUSEENTER:
    // TYLKO 3 PIERWSZE ACTIVE-WORD-TAG
    //
    // START MOŻE DZIAŁAĆ ZAWSZE
    // =====================================================

    if (!isStartAction) {

        const mouseenterTagCount =
            $('#active-word-bar')
                .find('.active-word-tag')
                .length;

        if (mouseenterTagCount >= 3) {

            console.log(
                '[mouseenter] LIMIT 3 TAGÓW — pomijam tworzenie:',
                mouseenterTagCount
            );

            return;
        }
    }

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


// =====================================================
// START = ZAWSZE PIERWSZE SŁOWO
// =====================================================

if (isStartAction) {

    currentWordIndex = 1;

    console.log(
        '[START] currentWordIndex = 1 → pierwsze słowo'
    );


// =====================================================
// NORMALNY MOUSEENTER
// =====================================================

} else if (
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

// =====================================
// AKTUALIZUJ LICZNIK 0/6
// =====================================

updateRememberedWordsCounter();
// =====================================
// START — AKTYWUJ PO 3 ACTIVE-WORD-TAG
// =====================================

const activeWordTagCount =
    $('#active-word-bar')
        .find('.active-word-tag')
        .length;


console.log(
    '[START] aktualna liczba active-word-tag:',
    activeWordTagCount
);


// =====================================
// DOKŁADNIE PO TRZECIM TAGU
// =====================================

if (
    activeWordTagCount === 3 &&
    !window.startButtonsEnabled
) {

    console.log(
        '[START] 🎯 TRZECI ACTIVE-WORD-TAG UTWORZONY'
    );


    // odblokuj możliwość tworzenia START
    window.startButtonsEnabled = true;


    console.log(
        '[START] START ZOSTAŁ ODBLOKOWANY'
    );


    // dopiero teraz dodaj START
    addStartButtonsAfterThreeTags();
}
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


            // =====================================
            // OCZYŚĆ SŁOWO
            // =====================================

            const cleanWord =
                String(wordText || '')
                    .trim()
                    .toLowerCase()
                    .replace(/[.,!?;:()[\]"']/g, '');


            console.log(
                '[translate-memory] cleanWord:',
                cleanWord
            );


            // =====================================
            // ZNAJDŹ FISZKĘ W fiszki10
            // =====================================

            const fiszka =
                fiszki10.find(
                    function (item) {

                        if (!item) {
                            return false;
                        }


                        // -----------------------------
                        // SZUKANIE PO key
                        // -----------------------------

                        if (
                            item.key &&
                            String(item.key)
                                .trim()
                                .toLowerCase() === cleanWord
                        ) {

                            return true;

                        }


                        // -----------------------------
                        // SZUKANIE PO sentence1
                        // -----------------------------

                        if (
                            Array.isArray(item.sentence1) &&
                            item.sentence1.some(
                                function (word) {

                                    return String(word)
                                        .trim()
                                        .toLowerCase() === cleanWord;

                                }
                            )
                        ) {

                            return true;

                        }


                        // -----------------------------
                        // SZUKANIE PO sentence
                        // -----------------------------

                        if (
                            Array.isArray(item.sentence) &&
                            item.sentence.some(
                                function (word) {

                                    return String(word)
                                        .trim()
                                        .toLowerCase() === cleanWord;

                                }
                            )
                        ) {

                            return true;

                        }


                        return false;

                    }
                );


            // =====================================
            // NIE ZNALEZIONO FISZKI
            // =====================================

            if (!fiszka) {

                console.warn(
                    '[translate-memory] NIE ZNALEZIONO FISZKI DLA:',
                    cleanWord
                );

                return;
            }


            console.log(
                '[translate-memory] ZNALEZIONO FISZKĘ:',
                fiszka
            );


            // =====================================
            // POBIERZ DESC
            // =====================================

            const desc =
                fiszka.desc;


            if (!desc) {

                console.warn(
                    '[translate-memory] FISZKA NIE MA DESC:',
                    fiszka
                );

                return;
            }


            console.log(
                '[translate-memory] DESC:',
                desc
            );


            // =====================================
            // ZNAJDŹ WŁAŚCIWY ACTIVE-WORD-TAG
            // =====================================

            let $tag =
                $star.closest(
                    '.active-word-tag'
                );


            // =====================================
            // FALLBACK
            // =====================================

            if (!$tag.length) {

                $tag =
                    $('.active-word-tag')
                        .last();

            }


            if (!$tag.length) {

                console.warn(
                    '[translate-memory] BRAK active-word-tag'
                );

                return;
            }


            console.log(
                '[translate-memory] ACTIVE-WORD-TAG:',
                $tag
            );


            // =====================================
            // ZNAJDŹ ACTIVE-WORD-DETAILS
            // =====================================

            let $details =
                $tag
                    .find(
                        '.active-word-details'
                    )
                    .first();


            // =====================================
            // JEŻELI NIE MA — UTWÓRZ
            // =====================================

            if (!$details.length) {

                $details =
                    $('<div>')
                        .addClass(
                            'active-word-details'
                        );

                $tag.append(
                    $details
                );

            }


            // =====================================
            // WSTAW DESC
            // =====================================

            $details.html(
                desc
            );


            // =====================================
            // ZAPISZ DESC W PAMIĘCI TAGA
            // =====================================

            $tag.data(
                'memory-desc',
                desc
            );


            // =====================================
            // POKAŻ DESC
            // =====================================

            $details
                .stop(true, true)
                .slideDown(200);


            // =====================================
            // USTAW STAN OTWARCIA
            // =====================================

            $tag.addClass(
                'active-word-details-open'
            );


            // =====================================
            // AKTYWUJ PRZYCISK SZCZEGÓŁÓW
            // =====================================

            const $detailsToggle =
                $tag
                    .find(
                        '.active-word-details-toggle'
                    )
                    .first();


            if ($detailsToggle.length) {

                $detailsToggle
                    .addClass('active')
                    .attr(
                        'aria-expanded',
                        'true'
                    );

            }


            console.log(
                '[translate-memory] DESC AKTYWOWANY'
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
}