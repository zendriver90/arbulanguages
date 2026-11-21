/**
 * next-prev-buttons-handler.js
 *
 * FIX off-by-one:
 *   thumbHighlightCache = wordIndexCache  (było: -1)
 *   currentWordIndex = wordIndexCache[descKey]  (bez +1 dla indexDiv===1)
 *   data-word-index na tagu = currentWordIndex (było: -1)
 *
 * Reszta logiki bez zmian względem Twojej wersji.
 */

(function (window, $) {
    'use strict';

    if (typeof $ === 'undefined') {
        console.error('[next-prev] jQuery required');
        return;
    }

    function getCleanWordText($element) {
        const $clone = $element.clone();
        $clone.find('.word-animation').remove();
        $clone.find(
            '.translate-memory-button, ' +
            '.active-word-translate-memory-button, ' +
            '#active-word-translate-memory, ' +
            '.active-word-translate-button, ' +
            '.word-translate-button, ' +
            '[data-ignore-word="true"], ' +
            'button'
        ).remove();

        let cleanText = $clone
            .text()
            .replace(/tłumacz\s+w\s+zapisanej\s+pamięci/gi, '')
            .replace(/w\s+zapisanej\s+pamięci/gi, '')
            .replace(/\s+/g, ' ')
            .trim();

        console.log('[getCleanWordText] CZYSTE SŁOWO:', cleanText);
        return cleanText;
    }
    window.getCleanWordText = getCleanWordText;

    function ensureWordIndexCache() {
        window.wordIndexCache = window.wordIndexCache || {};
        return window.wordIndexCache;
    }
    function ensureTablica() {
        window.tablica20aa = window.tablica20aa || [];
        return window.tablica20aa;
    }
    function getFiszki() {
        return (typeof window.fiszki10 !== 'undefined' && window.fiszki10)
            ? window.fiszki10
            : (typeof fiszki10 !== 'undefined' ? fiszki10 : []);
    }

    function triggerDesc2Blink(fiszkaAudio, $wordEl, opts) {
        if (typeof window.showAllDesc2InWymowaLine !== 'function' &&
            typeof window.showDesc2InWymowaLine !== 'function') {
            return;
        }
        opts = opts || {};
        const options = Object.assign({
            partDuration: 550,
            gap: 100
        }, opts);

        let $lessonBlock = null;
        if ($wordEl && $wordEl.length) {
            $lessonBlock = $wordEl.closest('.image-container3b');
        }
        if (!$lessonBlock || !$lessonBlock.length) {
            $lessonBlock = $('.image-container3b').first();
        }
        if (!$lessonBlock.length) return;

        const list = Array.isArray(opts.fiszkiList) && opts.fiszkiList.length
            ? opts.fiszkiList
            : (fiszkaAudio ? [fiszkaAudio] : []);
        const activeIndex = opts.activeIndex != null ? opts.activeIndex : 0;

        if (typeof window.showAllDesc2InWymowaLine === 'function') {
            window.showAllDesc2InWymowaLine($lessonBlock, list, activeIndex, options);
        } else {
            window.showDesc2InWymowaLine($lessonBlock, fiszkaAudio, Object.assign(options, {
                fiszkiList: list,
                activeIndex: activeIndex
            }));
        }
    }

    $(document).on('click', '.next-buttonv, .prev-button', function () {
        const wordIndexCache = ensureWordIndexCache();
        const indexDiv = $(this).closest('.sentence-line')
            .find('.sentence-inner')
            .data('indexdiv');
        if (wordIndexCache[indexDiv] === undefined) {
            wordIndexCache[indexDiv] = 0;
        }
    });

    $(document).on('click', '.prev-buttonv, .prev-button', function () {
        const wordIndexCache = ensureWordIndexCache();
        const indexDiv = $(this).closest('.sentence-line')
            .find('.sentence-inner')
            .data('indexdiv');
        if (wordIndexCache[indexDiv] === undefined) {
            wordIndexCache[indexDiv] = 0;
        }
    });

    // --------------------------------------------------
    // NEXT .next-buttonvv
    // --------------------------------------------------
    // capture = true → ten handler leci PRZED attachNav w main/miniatury
    // stopImmediatePropagation → attachNav NIE zrobi drugiego ++
    document.addEventListener('click', function (e) {
        const btn = e.target && e.target.closest && e.target.closest('.next-buttonvv');
        if (!btn) return;

        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const $line = $(btn).closest('.sentence-line');
        const $sentence = $line.find('.sentence-inner');
        const indexDiv = Number($sentence.data('indexdiv'));
        const pos = Number($sentence.data('pos'));
        const descKey = indexDiv + '_' + pos;

        $('#active-word-bar')
            .find('.active-word-details')
            .stop(true, true)
            .slideUp(150);
        $('#active-word-bar')
            .find('.active-word-details-toggle')
            .text('▼');

        const wordIndexCache = ensureWordIndexCache();
        window.savedWiCache = window.savedWiCache || {};
        window.thumbHighlightCache = window.thumbHighlightCache || {};

        // start: 0 = stoimy na 1. słowie; next → 1 = 2. słowo
        if (wordIndexCache[descKey] === undefined) {
            wordIndexCache[descKey] = 0;
        }

        const wiKey = indexDiv + '_' + pos;
        let currentWordIndex;

        if (window.highlightMode === 'rodzaj') {
            window.savedWiCache[wiKey] = (window.savedWiCache[wiKey] ?? 0);
            currentWordIndex = window.savedWiCache[wiKey];
        } else {
            currentWordIndex = Number(wordIndexCache[descKey]) + 1;
            const maxIdx = $line.find('[data-word-index]').length - 1;
            if (maxIdx >= 0 && currentWordIndex > maxIdx) {
                currentWordIndex = 0;
            }
        }

        wordIndexCache[descKey] = currentWordIndex;
        window.thumbHighlightCache[descKey] = currentWordIndex;
        wordIndexCache[indexDiv] = currentWordIndex;
        window.thumbHighlightCache[indexDiv] = currentWordIndex;

        ensureTablica().push(currentWordIndex);

        console.log('descKey5:', pos);
        console.log('currentWordIndex55:', currentWordIndex);

        const $nextWord = $line.find(
            `[data-word-index="${currentWordIndex}"]`
        ).first();

        const $target = $nextWord;

        let wordText = '';

        if ($nextWord.length) {
            const $wordClone = $nextWord.clone(true, false);
            $wordClone.find(
                '.translate-memory-button, ' +
                '.active-word-translate-memory-button, ' +
                '#active-word-translate-memory, ' +
                '.active-word-translate-button, ' +
                '.word-translate-button, ' +
                '[data-ignore-word="true"]'
            ).remove();

            wordText = $wordClone
                .text()
                .replace(/tłumacz\s+w\s+zapisanej\s+pamięci/gi, '')
                .trim();

            console.log('[next-buttonvv] CZYSTE wordText =', wordText);

            $nextWord.css({
                position: 'relative',
                display: 'inline-block'
            });

            $line.find('.word-animation').remove();
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

            // highlight NA TYM SAMYM słowie co animacja/audio
            // (syncHighlightForIndexDiv w main używa złego klucza indexDiv bez pos)
            $line.find('[data-word-index]').removeClass('highlighted');
            $nextWord.addClass('highlighted');
        }

        const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
        const y = sentenceMap[pos];
        const fiszki = getFiszki();

        const blockWords = fiszki
            .filter(f => Number(f.id?.[1]) === Number(y))
            .sort((a, b) => Number(a.id[0]) - Number(b.id[0]));

        const fiszkaAudio = blockWords[currentWordIndex];

        console.log('[audio] indexDiv =', indexDiv);
        console.log('[audio] pos =', pos);
        console.log('[audio] y =', y);
        console.log('[audio] currentWordIndex =', currentWordIndex);
        console.log('[audio] fiszkaAudio =', fiszkaAudio);

        let automatAudioReported = false;

        function notifyAutomatAudioFinished() {
            if (automatAudioReported) return;
            automatAudioReported = true;

            $(document).trigger('automat-audio-finished', [{
                line: $line[0],
                indexDiv: indexDiv,
                pos: pos,
                wordIndex: currentWordIndex
            }]);
        }

        if (fiszkaAudio?.word?.[0]) {
            const audio = new Audio(fiszkaAudio.word[0]);

            audio.currentTime = 0;

            audio.addEventListener(
                'ended',
                notifyAutomatAudioFinished,
                { once: true }
            );

            audio.addEventListener(
                'error',
                function () {
                    console.warn('[AUTOMAT] Błąd odtwarzania audio.');
                    notifyAutomatAudioFinished();
                },
                { once: true }
            );

            window._lastWordAudio = audio;

            audio.play().catch(function (err) {
                console.warn('[audio] Nie udało się odtworzyć:', err);
                notifyAutomatAudioFinished();
            });

        } else {
            window._lastWordAudio = null;
            console.warn(
                '[AUTOMAT] Brak audio dla słowa:',
                currentWordIndex
            );

            setTimeout(notifyAutomatAudioFinished, 300);
        }


        if (!$('#active-word-bar').length) {
            $('body').prepend('<div id="active-word-bar"></div>');
        }

        if ($nextWord.length) {
            wordText = getCleanWordText($nextWord);
        }
        if (!wordText && fiszkaAudio?.word?.[1]) {
            wordText = fiszkaAudio.word[1];
        }

        const lessonId = $nextWord.length
            ? ($nextWord.closest('.image-container3b').attr('data-id') || '')
            : '';

        const tagKey = `${indexDiv}_${pos}_${currentWordIndex}`;
        const wordIndex = currentWordIndex;

        const $star = $nextWord.length
            ? $nextWord.children('.word-play-star').first()
            : $();

        if ($star.length && !$star.children('.translate-memory-button').length) {
            const $translateMemory = $('<button>')
                .attr({
                    type: 'button',
                    'data-ignore-word': 'true',
                    'aria-label': 'tłumacz w zapisanej pamięci'
                })
                .addClass('translate-memory-button');

            $translateMemory.on('click', function (e) {
                e.stopPropagation();
                console.log('[translate-memory] słowo:', wordText);
                console.log('[translate-memory] indexDiv:', indexDiv);
                console.log('[translate-memory] pos:', pos);
                console.log('[translate-memory] wordIndex:', wordIndex);
            });

            $star.append($translateMemory);
        }

        let $existingTag = $('#active-word-bar')
            .find('.active-word-tag[data-tag-key="' + tagKey + '"]')
            .first();

        if ($existingTag.length) {
            let playCount = Number($existingTag.attr('data-play-count')) || 1;
            playCount++;

            const $starCount = $target
                .children('.word-play-star')
                .find('.word-play-star-count');

            if ($starCount.length) {
                $starCount.empty();
                for (let i = 0; i < playCount; i++) {
                    $starCount.append($('<span>').addClass('word-play-segment'));
                }
            }

            $existingTag.attr('data-play-count', playCount);
            $existingTag
                .find('.word-play-count')
                .append($('<span>').addClass('word-play-segment'));

            console.log(
                '[word-tag] ponowne odtworzenie:',
                wordText, 'ilość:', playCount, 'lekcja:', indexDiv
            );
        } else {
            const $tag = $('<button>')
                .addClass('active-word-tag')
                .attr({
                    'data-tag-key': tagKey,
                    'data-indexdiv': indexDiv,
                    'data-pos': pos,
                    // FIX: było currentWordIndex - 1
                    'data-word-index': currentWordIndex,
                    'data-play-count': 1,
                    'data-lesson-id': lessonId
                });

            const $wordTextEl = $('<span>')
                .addClass('word-tag-translation')
                .text(wordText);
            $tag.append($wordTextEl);

            const fiszkaForTag = fiszkaAudio;
            $tag.data('fiszkaData', fiszkaForTag);
            const descValue = fiszkaForTag?.desc ?? '';
            $tag.data('desc', descValue);

            console.log('[word-tag] 🎯 FISZKA DLA TAGU:', {
                indexDiv, pos, currentWordIndex, fiszkaForTag
            });

            const $translateButton = $('<button>')
                .attr({ type: 'button' })
                .addClass('active-word-translate-button')
                .text('TŁUMACZ');

            $translateButton.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const $currentTag = $(this).closest('.active-word-tag');
                const currentDesc = $currentTag.data('desc') ?? '';
                console.log('[TŁUMACZ][next-buttonvv]', { currentDesc, fiszkaForTag });
                $currentTag
                    .find('.word-tag-translation')
                    .first()
                    .text(currentDesc);
            });
            $tag.append($translateButton);

            const $playCount = $('<span>').addClass('word-play-count');
            $playCount.append($('<span>').addClass('word-play-segment'));
            $tag.append($playCount);

            $tag.append(
                $('<span>').addClass('word-lesson').text(' - lekcja ' + lessonId)
            );

            const $detailsToggle = $('<span>')
                .addClass('active-word-details-toggle')
                .text('▼');
            $tag.append($detailsToggle);

            const $details = $('<div>')
                .addClass('active-word-details')
                .css({ display: 'none' });

            $details.append(`
                <div class="active-word-details-lesson">
                    Lekcja ${lessonId}
                </div>
            `);

            const storyKey = Array.isArray(fiszkaAudio?.id)
                ? fiszkaAudio.id.join('_')
                : tagKey;

            let storyCount = 0;
            if (Array.isArray(fiszkaAudio?.story)) {
                storyCount = fiszkaAudio.story.length;
            } else if (fiszkaAudio?.story) {
                storyCount = 1;
            }

            window.activeStoryVersionCache = window.activeStoryVersionCache || {};
            let selectedStoryIndex = window.activeStoryVersionCache[storyKey];
            if (selectedStoryIndex === undefined) selectedStoryIndex = 0;
            selectedStoryIndex = Number(selectedStoryIndex);
            if (storyCount > 0 && selectedStoryIndex >= storyCount) {
                selectedStoryIndex = 0;
            }

            if (Array.isArray(fiszkaAudio?.category1)) {
                const $versions = $('<div>').addClass('active-word-story-versions');
                for (let i = 0; i < fiszkaAudio.category1.length; i += 2) {
                    const value = fiszkaAudio.category1[i];
                    const hashtag = fiszkaAudio.category1[i + 1];
                    if (value === undefined && hashtag === undefined) continue;
                    const storyIndex = i / 2;
                    const $version = $('<button>')
                        .attr({ type: 'button', 'data-story-index': storyIndex })
                        .addClass('active-word-story-version')
                        .text((value || '') + ' #' + (hashtag || ''));
                    if (storyIndex === selectedStoryIndex) {
                        $version.addClass('active');
                    }
                    $version.on('click.activeStoryVersion', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        const newStoryIndex = Number($(this).attr('data-story-index'));
                        $versions.find('.active-word-story-version').removeClass('active');
                        $(this).addClass('active');
                        window.activeStoryVersionCache[storyKey] = newStoryIndex;

                        let newStory = Array.isArray(fiszkaAudio.story)
                            ? fiszkaAudio.story[newStoryIndex]
                            : fiszkaAudio.story;
                        let newImage = Array.isArray(fiszkaAudio.img)
                            ? fiszkaAudio.img[newStoryIndex]
                            : fiszkaAudio.img;

                        const $image = $details.find('.active-word-details-image');
                        if (newImage) {
                            if ($image.length) {
                                $image.attr('src', newImage);
                            } else {
                                $versions.after(
                                    '<img src="' + newImage + '" alt="Fiszka" class="active-word-details-image">'
                                );
                            }
                        } else {
                            $image.remove();
                        }
                        $details.find('.active-word-details-text').html(newStory || '');
                    });
                    $versions.append($version);
                }
                $details.append($versions);
            }

            let imageUrl = Array.isArray(fiszkaAudio?.img)
                ? fiszkaAudio.img[selectedStoryIndex]
                : fiszkaAudio?.img;
            if (imageUrl) {
                $details.append(
                    '<img src="' + imageUrl + '" alt="Fiszka" class="active-word-details-image">'
                );
            }

            let storyText = Array.isArray(fiszkaAudio?.story)
                ? fiszkaAudio.story[selectedStoryIndex]
                : fiszkaAudio?.story;
            $details.append(
                '<div class="active-word-details-text">' + (storyText || '') + '</div>'
            );

            $tag.append($details);

            const familyKey = `${indexDiv}_${pos}`;
            console.log(
                '[WORD-FAMILY]',
                'familyKey =', familyKey,
                'wordIndex =', wordIndex,
                'wordText =', wordText
            );

            let $family = $('#active-word-bar')
                .children('.active-word-family')
                .filter(function () {
                    return String($(this).attr('data-family-key')) === String(familyKey);
                })
                .first();

            if (!$family.length) {
                console.log('[WORD-FAMILY] NOWA RODZINA:', familyKey);
                $family = $('<div>')
                    .addClass('active-word-family')
                    .attr('data-family-key', familyKey)
                    .css({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        flexWrap: 'nowrap',
                        gap: '3px',
                        whiteSpace: 'normal',
                        width: 'max-content'
                    });
                $family.append($tag);
                $('#active-word-bar').prepend($family);
                console.log('[WORD-FAMILY] DODANO NOWĄ RODZINĘ DO BAR');
            } else {
                console.log(
                    '[WORD-FAMILY] ISTNIEJĄCA RODZINA:',
                    familyKey, '→ DODAJĘ SŁOWO PIONOWO:', wordText
                );
                $family.append($tag);
            }

            $tag.attr({
                'data-family-key': familyKey,
                'data-word-index': wordIndex
            });

            if (typeof window.updateActiveWordHighlight === 'function') {
                window.updateActiveWordHighlight();
            }
            if (typeof window.printActiveWord === 'function') {
                window.printActiveWord($tag);
            }
            if (typeof window.afterWordTagAdded === 'function') {
                window.afterWordTagAdded();
            }

            console.log(
                '[word-tag] added:',
                wordText, 'lekcja:', lessonId, 'index:', currentWordIndex
            );

            $existingTag = $tag;
        }

        (function () {
            let $lessonBlock = $nextWord && $nextWord.length
                ? $nextWord.closest('.image-container3b')
                : $('.image-container3b').first();
            if (!$lessonBlock.length) return;

            const list = blockWords || (fiszkaAudio ? [fiszkaAudio] : []);
            const audioEl = window._lastWordAudio || null;

            if (typeof window.blinkDesc2WithAudio === 'function') {
                window.blinkDesc2WithAudio(
                    $lessonBlock,
                    list,
                    currentWordIndex,
                    audioEl,
                    { partDuration: 500, gap: 80 }
                );
            } else {
                triggerDesc2Blink(fiszkaAudio, $nextWord, {
                    partDuration: 500,
                    gap: 80,
                    fiszkiList: list,
                    activeIndex: currentWordIndex
                });
            }
        })();

        // legacy cache pod stary sync (klucz bez pos)
        wordIndexCache[indexDiv] = currentWordIndex;
        window.thumbHighlightCache[descKey] = currentWordIndex;
        window.thumbHighlightCache[indexDiv] = currentWordIndex;

        // highlight już ustawiony wyżej na $nextWord — tu tylko thumb/legacy
        if (typeof window.syncHighlightForIndexDiv === 'function') {
            // przekazujemy $line, nie pos (stara sygnatura: indexDiv, $block)
            try { window.syncHighlightForIndexDiv(indexDiv, $line); } catch (e) {}
        } else if (typeof syncHighlightForIndexDiv === 'function') {
            try { syncHighlightForIndexDiv(indexDiv, $line); } catch (e) {}
        }

        // na końcu: wymuś zieleń = to samo słowo co audio/animacja
        $line.find('[data-word-index]').removeClass('highlighted');
        const $final = $line.find('[data-word-index="' + currentWordIndex + '"]').first();
        if ($final.length) $final.addClass('highlighted');
    }, true); // capture = true

    // --------------------------------------------------
    // PREV .prev-buttonvv
    // --------------------------------------------------
    document.addEventListener('click', function (e) {
        const btn = e.target && e.target.closest && e.target.closest('.prev-buttonvv');
        if (!btn) return;

        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const $line = $(btn).closest('.sentence-line');
        const $sentence = $line.find('.sentence-inner');
        const indexDiv = Number($sentence.data('indexdiv'));
        const pos = Number($sentence.data('pos'));
        const descKey = indexDiv + '_' + pos;

        const wordIndexCache = ensureWordIndexCache();
        window.savedWiCache = window.savedWiCache || {};
        window.thumbHighlightCache = window.thumbHighlightCache || {};

        if (wordIndexCache[descKey] === undefined) {
            wordIndexCache[descKey] = 0;
        }

        const wiKey = indexDiv + '_' + pos;
        let currentWordIndex;

        if (window.highlightMode === 'rodzaj') {
            window.savedWiCache[wiKey] = (window.savedWiCache[wiKey] ?? 0);
            currentWordIndex = window.savedWiCache[wiKey];
        } else {
            currentWordIndex = Number(wordIndexCache[descKey]) - 1;
            if (currentWordIndex < 0) currentWordIndex = 0;
        }

        wordIndexCache[descKey] = currentWordIndex;
        window.thumbHighlightCache[descKey] = currentWordIndex;
        wordIndexCache[indexDiv] = currentWordIndex;
        window.thumbHighlightCache[indexDiv] = currentWordIndex;

        ensureTablica().push(currentWordIndex);

        console.log('hej350', indexDiv, pos, wordIndexCache[descKey], currentWordIndex);
        console.log('descKey5:', pos);
        console.log('currentWordIndex:', currentWordIndex);

        const $nextWord = $line.find(
            `[data-word-index="${currentWordIndex}"]`
        ).first();
        const $target = $nextWord;

        if ($nextWord.length) {
            $line.find('.word-animation').remove();
            $nextWord.css({
                position: 'relative',
                display: 'inline-block'
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

            $line.find('[data-word-index]').removeClass('highlighted');
            $nextWord.addClass('highlighted');
        }

        const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
        const y = sentenceMap[pos];
        const fiszki = getFiszki();
        const blockWords = fiszki
            .filter(f => Number(f.id?.[1]) === Number(y))
            .sort((a, b) => Number(a.id[0]) - Number(b.id[0]));

        const fiszkaAudio = blockWords[currentWordIndex];

        console.log('[audio]5 indexDiv =', indexDiv);
        console.log('[audio] pos =', pos);
        console.log('[audio] y =', y);
        console.log('[audio] currentWordIndex =', currentWordIndex);
        console.log('[audio] fiszkaAudio =', fiszkaAudio);

        if (fiszkaAudio?.word?.[0]) {
            const audio = new Audio(fiszkaAudio.word[0]);
            audio.currentTime = 0;
            audio.play().catch(err => console.warn(err));
        }

        triggerDesc2Blink(fiszkaAudio, $nextWord, {
            partDuration: 500,
            gap: 80,
            fiszkiList: blockWords,
            activeIndex: currentWordIndex
        });

        wordIndexCache[indexDiv] = currentWordIndex;
        window.thumbHighlightCache[descKey] = currentWordIndex;
        window.thumbHighlightCache[indexDiv] = currentWordIndex;

        $line.find('[data-word-index]').removeClass('highlighted');
        const $finalPrev = $line.find('[data-word-index="' + currentWordIndex + '"]').first();
        if ($finalPrev.length) $finalPrev.addClass('highlighted');

        if (typeof window.syncHighlightForIndexDiv === 'function') {
            try { window.syncHighlightForIndexDiv(indexDiv, $line); } catch (e) {}
        }
    }, true); // capture = true

    /* =====================================================
       AUTOMAT
       ===================================================== */

    window.automatRunning = false;
    window.automatRunId = 0;
    window.automatCurrentAudio = null;

    $(document).on('automate-word', function (e, block) {

        if (!block) {
            console.warn('[AUTOMAT] Nie przekazano kontenera.');
            return;
        }

        if (window.automatCurrentAudio) {
            window.automatCurrentAudio.pause();
            window.automatCurrentAudio = null;
        }
        if (typeof window.stopDesc2Blink === 'function') {
            window.stopDesc2Blink();
        }

        window.automatRunId++;
        const runId = window.automatRunId;
        window.automatRunning = true;

        const $block = $(block);

        const $line = $block.find('.sentence-line').filter(function () {
            return Number(
                $(this).find('.sentence-inner').first().data('pos')
            ) === 0;
        }).first();

        if (!$line.length) {
            window.automatRunning = false;
            console.warn('[AUTOMAT] Nie znaleziono angielskiej linii.');
            return;
        }

        const $inner = $line.find('.sentence-inner').first();
        const indexDiv = Number($inner.data('indexdiv'));
        const pos = Number($inner.data('pos'));
        const descKey = `${indexDiv}_${pos}`;

        const $words = $inner.find('[data-word-index]');
        const wordCount = $words.length;

        if (!wordCount) {
            window.automatRunning = false;
            console.warn('[AUTOMAT] Brak słów z data-word-index.');
            return;
        }

        const highlightedValue = $inner
            .find('[data-word-index].highlighted')
            .first()
            .attr('data-word-index');

        let currentIndex = highlightedValue !== undefined
            ? Number(highlightedValue)
            : 0;

        if (
            !Number.isInteger(currentIndex) ||
            currentIndex < 0 ||
            currentIndex >= wordCount
        ) {
            currentIndex = 0;
        }

        const sentenceMap = window.sentenceMapCache?.[indexDiv] ?? [];
        const y = sentenceMap[pos];
        const fiszki = getFiszki();

        const blockWords = fiszki
            .filter(f => Number(f.id?.[1]) === Number(y))
            .sort((a, b) => Number(a.id[0]) - Number(b.id[0]));

        console.log('[AUTOMAT] Start:', {
            indexDiv,
            pos,
            y,
            pierwszePodswietloneSlowo: currentIndex,
            liczbaSlow: wordCount
        });

        function stopAutomat(reason) {
            if (runId !== window.automatRunId) return;

            window.automatRunning = false;

            if (window.automatCurrentAudio) {
                window.automatCurrentAudio.pause();
                window.automatCurrentAudio = null;
            }

            console.log('[AUTOMAT] Zatrzymano:', reason);
        }

        function playWordAt(index) {

            if (runId !== window.automatRunId || !window.automatRunning) {
                return;
            }

            if (index >= wordCount) {
                stopAutomat('Koniec zdania');
                return;
            }

            const $target = $words.filter(function () {
                return Number($(this).attr('data-word-index')) === index;
            }).first();

            const fiszkaAudio = blockWords[index];

            console.log('[AUTOMAT] Odtwarzam:', {
                index,
                tekst: $target.text().trim(),
                fiszka: fiszkaAudio
            });

            if (!$target.length) {
                stopAutomat('Nie znaleziono słowa o indeksie ' + index);
                return;
            }

            if (!fiszkaAudio?.word?.[0]) {
                console.warn('[AUTOMAT] Brak pliku audio dla indeksu:', index);

                setTimeout(function () {
                    playWordAt(index + 1);
                }, 900);

                return;
            }

            $inner.find('[data-word-index]').removeClass('highlighted');
            $target.addClass('highlighted');

            window.wordIndexCache = window.wordIndexCache || {};
            window.thumbHighlightCache = window.thumbHighlightCache || {};

            window.wordIndexCache[descKey] = index;
            window.thumbHighlightCache[descKey] = index;

            if (window.highlightMode === 'rodzaj') {
                window.savedWiCache = window.savedWiCache || {};
                window.savedWiCache[descKey] = index;
            }

            $line.find('.word-animation').remove();

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

            const $lessonBlock = $target.closest('.image-container3b');
            const host = $lessonBlock.length ? $lessonBlock : $block;

            const audio = new Audio(fiszkaAudio.word[0]);
            window.automatCurrentAudio = audio;

            if (typeof window.blinkDesc2WithAudio === 'function' && blockWords.length) {
                window.blinkDesc2WithAudio(host, blockWords, index, audio, {
                    partDuration: 500,
                    gap: 80
                });
            } else if (typeof window.showAllDesc2InWymowaLine === 'function' && blockWords.length) {
                window.showAllDesc2InWymowaLine(host, blockWords, index, {
                    partDuration: 500,
                    gap: 80
                });
            }

            audio.addEventListener('ended', function () {
                if (runId !== window.automatRunId || !window.automatRunning) {
                    return;
                }

                console.log('[AUTOMAT] Koniec słowa:', index);

                setTimeout(function () {
                    playWordAt(index + 1);
                }, 900);
            }, { once: true });

            audio.addEventListener('error', function () {
                if (runId !== window.automatRunId || !window.automatRunning) {
                    return;
                }

                console.warn('[AUTOMAT] Błąd pliku audio:', fiszkaAudio.word[0]);

                setTimeout(function () {
                    playWordAt(index + 1);
                }, 900);
            }, { once: true });

            audio.currentTime = 0;

            audio.play().catch(function (err) {
                if (runId !== window.automatRunId) return;

                console.warn('[AUTOMAT] Nie udało się odtworzyć audio:', err);
                stopAutomat('Błąd uruchamiania audio');
            });
        }

        playWordAt(currentIndex);
    });

    console.log('[next-prev-buttons-handler] OK — fix off-by-one (thumb = wordIndex)');

})(window, window.jQuery);
