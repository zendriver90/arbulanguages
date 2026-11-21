/**
 * desc2-blink-helper.js
 *
 * Linia "wymowa":
 *  - wszystkie desc2 widoczne od razu, oddzielone " + "
 *  - kolory kolejnych SŁÓWEK (desc2-item):
 *      1 zielony, 2 pomarańczowy, 3 czerwony, 4 różowy, 5 fioletowy, 6 żółty
 *  - aktywny fragment <u><b>…</b></u> ma BIAŁĄ RAMKĘ
 *  - pierwsze słówko jest zaznaczone ramką OD RAZU po wyrenderowaniu linii
 *  - w obrębie jednego słówka kolejne <u><b> zaznaczają się po kolei (biała ramka)
 *  - dopiero po ostatnim fragmencie słówka automat przechodzi do następnego
 *
 * API:
 *   showAllDesc2InWymowaLine($block, fiszkiList, activeIndex, options?)
 *   setActiveDesc2Index($block, activeIndex, options?)
 *   startDesc2AutoSequence($block, fiszkiList, startIndex, options?)
 *   stopDesc2Blink()
 *   refreshDesc2ForBlock(...)
 */
(function (window, $) {
    'use strict';

    if (typeof $ === 'undefined') {
        console.error('[desc2-blink] jQuery is required');
        return;
    }

    // 1 zielony, 2 pomarańczowy, 3 czerwony, 4 różowy, 5 fioletowy, 6 żółty
    var WORD_COLORS = [
        { bg: '#2ecc71', border: '#27ae60', name: 'zielony' },       // 1
        { bg: '#e67e22', border: '#d35400', name: 'pomarańczowy' }, // 2
        { bg: '#e74c3c', border: '#c0392b', name: 'czerwony' },      // 3
        { bg: '#ff69b4', border: '#e84393', name: 'różowy' },        // 4
        { bg: '#9b59b6', border: '#8e44ad', name: 'fioletowy' },      // 5
        { bg: '#f1c40f', border: '#f39c12', name: 'żółty' }          // 6
    ];

    if (!$('#desc2-blink-style').length) {
        $('<style id="desc2-blink-style">').text(`
            .desc2-wymowa-slot {
                display: inline;
                font-size: inherit;
                line-height: inherit;
                color: inherit;
                vertical-align: baseline;
            }
            .desc2-item {
                display: inline;
                padding: 2px 4px;
                border-radius: 4px;
                margin: 0 4px;
                -webkit-box-decoration-break: clone;
                box-decoration-break: clone;
            }
            .desc2-sep {
                display: inline;
                margin: 0 8px;
                color: white;
                font-weight: 1000;
                user-select: none;
            }
            .desc2-part {
                display: inline;
                /* padding = miejsce na ramkę wokół liter; margin = przerwa między częściami */
                padding: 0 2px;
                margin: 0 4px;
                -webkit-box-decoration-break: clone;
                box-decoration-break: clone;
                border-radius: 3px;
                text-decoration: underline;
                text-decoration-thickness: 2px;
                text-underline-offset: 3px;
                transition: background-color 0.12s ease, color 0.12s ease,
                            box-shadow 0.12s ease, outline 0.12s ease;
                outline: 2px solid transparent;
                outline-offset: 1px;
            }
            /* aktywne słówko — WSZYSTKIE jego części mają białą ramkę od początku */
            .desc2-item.desc2-word-active .desc2-part {
                outline: 2px solid #ffffff;
                outline-offset: 1px;
            }
            /* bieżący fragment — wypełnienie + pogrubienie (ramka zostaje) */
            .desc2-part.desc2-active {
                color: #fff !important;
                font-weight: 700;
                outline: 2px solid #ffffff !important;
                outline-offset: 1px;
                box-shadow: 0 0 0 2px rgba(255,255,255,0.35);
            }
            .desc2-part.desc2-blink {
                animation: desc2PulseWhite 0.4s ease-in-out 1;
            }
            @keyframes desc2PulseWhite {
                0%, 100% {
                    outline-color: #ffffff;
                    box-shadow: 0 0 0 2px rgba(255,255,255,0.35);
                }
                50% {
                    outline-color: #ffffff;
                    box-shadow: 0 0 8px 2px rgba(255,255,255,0.85);
                }
            }
            /* słówko bez <u><b> — ramka na całym słówku */
            .desc2-item.desc2-item-framed {
                outline: 2px solid #ffffff;
                outline-offset: 1px;
            }

            /* kolory tła słówka (cały desc2-item) — indeks 0..5 */
            .desc2-item.desc2-color-0 { background-color: rgba(46, 204, 113, 0.25); }
            .desc2-item.desc2-color-1 { background-color: rgba(230, 126, 34, 0.25); }
            .desc2-item.desc2-color-2 { background-color: rgba(231, 76, 60, 0.25); }
            .desc2-item.desc2-color-3 { background-color: rgba(255, 105, 180, 0.25); }
            .desc2-item.desc2-color-4 { background-color: rgba(155, 89, 182, 0.25); }
            .desc2-item.desc2-color-5 { background-color: rgba(241, 196, 15, 0.25); }

            /* aktywne słówko — mocniejsze tło koloru */
            .desc2-item.desc2-word-active.desc2-color-0 { background-color: #2ecc71; color: #fff; }
            .desc2-item.desc2-word-active.desc2-color-1 { background-color: #e67e22; color: #fff; }
            .desc2-item.desc2-word-active.desc2-color-2 { background-color: #e74c3c; color: #fff; }
            .desc2-item.desc2-word-active.desc2-color-3 { background-color: #ff69b4; color: #fff; }
            .desc2-item.desc2-word-active.desc2-color-4 { background-color: #9b59b6; color: #fff; }
            .desc2-item.desc2-word-active.desc2-color-5 { background-color: #f1c40f; color: #222; }

            /* aktywny fragment dziedziczy kolor słówka jako tło */
            .desc2-item.desc2-color-0 .desc2-part.desc2-active { background-color: #2ecc71 !important; }
            .desc2-item.desc2-color-1 .desc2-part.desc2-active { background-color: #e67e22 !important; }
            .desc2-item.desc2-color-2 .desc2-part.desc2-active { background-color: #e74c3c !important; }
            .desc2-item.desc2-color-3 .desc2-part.desc2-active { background-color: #ff69b4 !important; }
            .desc2-item.desc2-color-4 .desc2-part.desc2-active { background-color: #9b59b6 !important; }
            .desc2-item.desc2-color-5 .desc2-part.desc2-active { background-color: #f1c40f !important; color: #222 !important; }

            .sentence-line.desc2-host { min-height: 1.4em; }
            .pronunciation-label { margin-right: 4px; opacity: 0.85; }
        `).appendTo('head');
    }

    var activeTimerIds = [];
    var activeRunId = 0;
    var sequenceRunId = 0;
    window._desc2LineState = window._desc2LineState || {};

    function clearTimers() {
        activeTimerIds.forEach(function (id) {
            clearTimeout(id);
        });
        activeTimerIds = [];
    }

    function stopDesc2Blink() {
        activeRunId++;
        sequenceRunId++;
        clearTimers();
        $('.desc2-part').removeClass('desc2-active desc2-blink');
        $('.desc2-item').removeClass('desc2-word-active desc2-item-framed');
    }

    function colorIndexForWord(i) {
        return ((i % WORD_COLORS.length) + WORD_COLORS.length) % WORD_COLORS.length;
    }

    function prepareDesc2Html(raw) {
        if (!raw || typeof raw !== 'string') {
            return { html: '', count: 0 };
        }

        var idx = 0;
        var re = /<\s*u\s*>\s*<\s*b\s*>([\s\S]*?)<\s*\/\s*[ub]\s*>\s*<\s*\/\s*[ub]\s*>|<\s*b\s*>\s*<\s*u\s*>([\s\S]*?)<\s*\/\s*[ub]\s*>\s*<\s*\/\s*[ub]\s*>|<\s*u\s*>([\s\S]*?)<\s*\/\s*u\s*>|<\s*b\s*>([\s\S]*?)<\s*\/\s*b\s*>/gi;

        var html = raw.replace(re, function (match, g1, g2, g3, g4) {
            var content = [g1, g2, g3, g4].find(function (x) {
                return x !== undefined && x !== null;
            });
            var span =
                '<span class="desc2-part" data-desc2-idx="' + idx + '">' +
                content +
                '</span>';
            idx++;
            return span;
        });

        return { html: html, count: idx };
    }

    function findWymowaLine($root) {
        var $block = $root.closest('.image-container3b').length
            ? $root.closest('.image-container3b')
            : $root;

        var $line = $block.find('.sentence-line').filter(function () {
            var t = $(this).text().replace(/\s+/g, ' ').trim().toLowerCase();
            return t.indexOf('wymowa') === 0 || t.indexOf('wymowa:') === 0;
        }).first();
        if ($line.length) return $line;

        $line = $block.find('.sentence-line').has('.word-span3').first();
        if ($line.length) return $line;

        $line = $block.find('.sentence-line.desc2-host, .sentence-line.desc2-replaced').first();
        if ($line.length) return $line;

        $line = $block.find('.sentence-line').filter(function () {
            var t = $(this).find('.sentence-inner, .pronunciation-label').text()
                .replace(/\s+/g, ' ').trim().toLowerCase();
            return t.indexOf('wymowa') === 0 || t.indexOf('wymowa:') >= 0;
        }).first();
        if ($line.length) return $line;

        var $all = $block.find('.sentence-line');
        if ($all.length >= 3) return $all.eq(2);
        if ($all.length >= 1) return $all.last();

        var $text = $block.find('.text-block, .text-container, .sentence-block').first();
        if (!$text.length) $text = $block;

        $line = $('<div class="sentence-line desc2-host desc2-created">');
        $text.append($line);
        return $line;
    }

    function buildAllDesc2Html(items) {
        var parts = [];
        items.forEach(function (item, i) {
            if (i > 0) {
                parts.push('<span class="desc2-sep">+</span>');
            }
            var cIdx = colorIndexForWord(i);
            var body = item.html || item.raw || '';
            parts.push(
                '<span class="desc2-item desc2-color-' + cIdx + '" data-desc2-item="' + i + '">' +
                body +
                '</span>'
            );
        });
        return parts.join('');
    }

    /**
     * Od razu zaznacza aktywne słówko (domyślnie pierwsze) białą ramką,
     * jeszcze zanim ruszy sekwencja/mruganie.
     */
    function markInitialActive($slot, wordIndex) {
        $slot.find('.desc2-part').removeClass('desc2-active desc2-blink');
        $slot.find('.desc2-item').removeClass('desc2-word-active desc2-item-framed');

        var $item = $slot.find('.desc2-item[data-desc2-item="' + wordIndex + '"]');
        if (!$item.length) return;

        $item.addClass('desc2-word-active');

        var $first = $item.find('.desc2-part').first();
        if ($first.length) {
            $first.addClass('desc2-active');
        } else {
            // słówko bez <u><b> — ramka na całym słówku
            $item.addClass('desc2-item-framed');
        }
    }

    /**
     * Podświetla kolejno fragmenty <u><b> w JEDNYM słówku (biała ramka).
     * Zwraca Promise — resolve po ostatnim fragmencie.
     */
    function blinkPartsInWord($slot, wordIndex, options) {
        options = options || {};
        var partDuration = options.partDuration != null ? options.partDuration : 550;
        var gap = options.gap != null ? options.gap : 100;
        var totalMs = options.totalMs;

        return new Promise(function (resolve) {
            var runId = activeRunId;

            $slot.find('.desc2-part').removeClass('desc2-active desc2-blink');
            $slot.find('.desc2-item').removeClass('desc2-word-active desc2-item-framed');

            var $active = $slot.find('.desc2-item[data-desc2-item="' + wordIndex + '"]');
            if (!$active.length) {
                resolve();
                return;
            }

            $active.addClass('desc2-word-active');

            var $parts = $active.find('.desc2-part');
            var count = $parts.length;

            // brak <u><b> — ramka na całym słówku chwilę i idź dalej
            if (!count) {
                $active.addClass('desc2-item-framed');
                var t0 = setTimeout(function () {
                    if (runId !== activeRunId) return;
                    $active.removeClass('desc2-word-active desc2-item-framed');
                    resolve();
                }, partDuration);
                activeTimerIds.push(t0);
                return;
            }

            if (totalMs && totalMs > 0 && count > 0) {
                partDuration = Math.max(220, Math.floor(totalMs / count) - gap);
            }

            function activate(i) {
                if (runId !== activeRunId) return;
                $parts.removeClass('desc2-active desc2-blink');
                var $p = $parts.eq(i);
                if ($p.length) {
                    $p.addClass('desc2-active desc2-blink');
                }
            }

            var delay = 0;
            for (var i = 0; i < count; i++) {
                (function (localI, localDelay) {
                    if (localDelay === 0) {
                        // pierwszy fragment — natychmiast, bez setTimeout (bez przerwy bez ramki)
                        activate(localI);
                    } else {
                        var t = setTimeout(function () {
                            if (runId !== activeRunId) return;
                            activate(localI);
                        }, localDelay);
                        activeTimerIds.push(t);
                    }
                })(i, delay);
                delay += partDuration + gap;
            }

            // po ostatnim fragmencie — zostaw białą ramkę chwilę, potem resolve
            var endT = setTimeout(function () {
                if (runId !== activeRunId) return;
                $parts.removeClass('desc2-blink');
                if (count > 0) {
                    $parts.eq(count - 1).addClass('desc2-active');
                }
                // krótka pauza przed następnym słówkiem
                var pause = setTimeout(function () {
                    if (runId !== activeRunId) return;
                    resolve();
                }, options.wordPause != null ? options.wordPause : 280);
                activeTimerIds.push(pause);
            }, delay);
            activeTimerIds.push(endT);

            console.log('[desc2-blink] word', wordIndex, 'parts', count, 'color', WORD_COLORS[colorIndexForWord(wordIndex)].name);
        });
    }

    /**
     * AUTOMAT: przechodzi słówko po słówku.
     * W każdym słówku kolejno zaznacza <u><b> białą ramką.
     * Dopiero po wszystkich fragmentach → następne słówko (kolejny kolor).
     */
    function runAutoSequence($slot, startIndex, options) {
        options = options || {};
        var mySeq = ++sequenceRunId;
        activeRunId++; // anuluj poprzednie mruganie części
        clearTimers();

        var $items = $slot.find('.desc2-item');
        var total = $items.length;
        if (!total) return Promise.resolve();

        var idx = startIndex == null || isNaN(startIndex) ? 0 : Number(startIndex);
        idx = Math.max(0, Math.min(idx, total - 1));

        function step(i) {
            if (mySeq !== sequenceRunId) return Promise.resolve();
            if (i >= total) {
                // opcjonalnie zapętlenie
                if (options.loop) {
                    return step(0);
                }
                console.log('[desc2-blink] sekwencja zakończona');
                return Promise.resolve();
            }
            return blinkPartsInWord($slot, i, options).then(function () {
                if (mySeq !== sequenceRunId) return;
                return step(i + 1);
            });
        }

        return step(idx);
    }

    function showAllDesc2InWymowaLine(blockOrLine, fiszkiList, activeIndex, options) {
        options = options || {};

        var $root = $(blockOrLine);
        if (!$root.length) return;

        var $line = $root.hasClass('sentence-line')
            ? $root
            : findWymowaLine($root);

        if (!$line.length) {
            console.warn('[desc2-blink] nie znaleziono linii wymowa');
            return;
        }

        $line.addClass('desc2-host desc2-replaced');

        var $block = $root.closest('.image-container3b').length
            ? $root.closest('.image-container3b')
            : $root;
        var stateKey =
            String($block.attr('data-lesson') || $block.attr('data-id') || '') +
            '_' +
            String($line.attr('data-pos') || '0');

        var items = [];
        if (Array.isArray(fiszkiList) && fiszkiList.length) {
            items = fiszkiList.map(function (f) {
                var raw = (f && (f.desc2 || f.desc_2)) || '';
                var prepared = prepareDesc2Html(raw);
                return {
                    raw: raw,
                    html: prepared.html || raw,
                    count: prepared.count
                };
            });
            window._desc2LineState[stateKey] = items;
        } else if (window._desc2LineState[stateKey]) {
            items = window._desc2LineState[stateKey];
        }

        if (!items.length) {
            console.warn('[desc2-blink] brak desc2 (stateKey=' + stateKey + ')');
            return;
        }

        if (activeIndex == null || isNaN(activeIndex)) activeIndex = 0;
        activeIndex = Math.max(0, Math.min(activeIndex, items.length - 1));

        var $prevBtn = $line.find(
            '.prev-buttonv, .prev-button, .prev-button3, .prev-buttonvv, .sentence-prev'
        ).first().detach();
        var $nextBtn = $line.find(
            '.next-buttonv, .next-button, .next-button3, .next-buttonvv, .sentence-next'
        ).first().detach();

        $line.empty();
        if ($prevBtn.length) $line.append($prevBtn);

        $line.append($('<span class="pronunciation-label">').text('wymowa: '));

        var $slot = $('<span class="desc2-wymowa-slot">');
        $slot.html(buildAllDesc2Html(items));
        $line.append($slot);

        if ($nextBtn.length) $line.append($nextBtn);

        // >>> pierwsze (aktywne) słówko od razu z ramką
        markInitialActive($slot, activeIndex);

        // tryb: auto sekwencja wszystkich słówek ALBO tylko jedno aktywne
        if (options.autoSequence !== false) {
            // domyślnie: automat — kolejne słówka po kolei
            runAutoSequence($slot, activeIndex, options);
        } else {
            // tylko bieżące słówko (fragmenty po kolei)
            blinkPartsInWord($slot, activeIndex, options);
        }
    }

    function setActiveDesc2Index(blockOrLine, activeIndex, options) {
        options = options || {};
        // przy ręcznej zmianie indeksu — bez auto-sekwencji dalej, tylko to słówko
        options = Object.assign({}, options, { autoSequence: false });

        var $root = $(blockOrLine);
        var $block = $root.closest('.image-container3b').length
            ? $root.closest('.image-container3b')
            : $root;
        var $line = $root.hasClass('sentence-line')
            ? $root
            : findWymowaLine($root);

        if (!$line.length) return;

        var $slot = $line.find('.desc2-wymowa-slot');

        if (!$slot.length) {
            showAllDesc2InWymowaLine($block, null, activeIndex, options);
            return;
        }

        stopDesc2Blink();
        markInitialActive($slot, activeIndex);
        blinkPartsInWord($slot, activeIndex, options);
    }

    /**
     * Uruchom pełną sekwencję od startIndex (automat).
     */
    function startDesc2AutoSequence(blockOrLine, fiszkiList, startIndex, options) {
        options = Object.assign({}, options || {}, { autoSequence: true });
        showAllDesc2InWymowaLine(blockOrLine, fiszkiList, startIndex || 0, options);
    }

    function blinkDesc2WithAudio(blockOrLine, fiszkiList, activeIndex, audioEl, options) {
        options = options || {};

        function run(totalMs) {
            var opts = Object.assign({}, options, {
                totalMs: totalMs > 0 ? totalMs : options.totalMs,
                autoSequence: false // przy audio — zwykle jedno słówko
            });
            showAllDesc2InWymowaLine(blockOrLine, fiszkiList, activeIndex, opts);
        }

        if (audioEl && typeof audioEl === 'object') {
            if (audioEl.duration && isFinite(audioEl.duration) && audioEl.duration > 0) {
                run(audioEl.duration * 1000);
                return;
            }
            var onMeta = function () {
                audioEl.removeEventListener('loadedmetadata', onMeta);
                var ms = (audioEl.duration && isFinite(audioEl.duration))
                    ? audioEl.duration * 1000
                    : 0;
                run(ms);
            };
            audioEl.addEventListener('loadedmetadata', onMeta);
            setTimeout(function () {
                audioEl.removeEventListener('loadedmetadata', onMeta);
                if (!audioEl.duration || !isFinite(audioEl.duration)) {
                    run(0);
                }
            }, 400);
            return;
        }

        run(0);
    }

    function showDesc2InWymowaLine(blockOrLine, fiszka, options) {
        options = options || {};
        var activeIndex = options.activeIndex != null ? options.activeIndex : 0;
        var list = Array.isArray(options.fiszkiList) && options.fiszkiList.length
            ? options.fiszkiList
            : (fiszka ? [fiszka] : []);
        showAllDesc2InWymowaLine(blockOrLine, list, activeIndex, options);
    }

    function startDesc2Blink(fiszka, host, options) {
        showDesc2InWymowaLine(host, fiszka, options);
    }

    function blinkDesc2ForTag($tag, fiszka, options) {
        var indexDiv = Number($tag.attr('data-indexdiv'));
        var $block = $('.image-container3b').filter(function () {
            return Number($(this).attr('data-lesson')) === indexDiv ||
                Number($(this).attr('data-id')) === Number($tag.attr('data-lesson-id'));
        }).first();
        if (!$block.length) $block = $('.image-container3b').first();
        if (!$block.length) return;

        var activeIndex = options && options.activeIndex != null
            ? options.activeIndex
            : Number($tag.attr('data-word-index')) || 0;

        showDesc2InWymowaLine($block, fiszka, Object.assign({}, options, {
            activeIndex: activeIndex
        }));
    }

    function blinkDesc2NearPronunciation($wordOrLine, fiszka, options) {
        showDesc2InWymowaLine($wordOrLine, fiszka, options);
    }

    function refreshDesc2ForBlock($blockOrAny, fiszkiList, activeIndex, options) {
        try {
            var $root = $($blockOrAny);
            if (!$root.length) return;
            var $block = $root.closest('.image-container3b').length
                ? $root.closest('.image-container3b')
                : $root;
            showAllDesc2InWymowaLine($block, fiszkiList, activeIndex, options || {});
        } catch (err) {
            console.warn('[desc2] refreshDesc2ForBlock', err);
        }
    }

    // ------------------------------------------------------------------
    // AUTO integracja z matrix (bez edycji dużego pliku)
    // ------------------------------------------------------------------
    function resolveFiszkiListForBlock($block) {
        var idAttr = $block.attr('data-id');
        var pools = [];
        if (Array.isArray(window.matchingFiszki1)) pools.push(window.matchingFiszki1);
        if (Array.isArray(window.matchingFiszki2)) pools.push(window.matchingFiszki2);
        if (Array.isArray(window.matchingFiszki3)) pools.push(window.matchingFiszki3);
        if (Array.isArray(window.fiszki10)) pools.push(window.fiszki10);
        if (Array.isArray(window.fiszki)) pools.push(window.fiszki);

        for (var p = 0; p < pools.length; p++) {
            var list = pools[p];
            if (!list || !list.length) continue;
            if (idAttr != null && idAttr !== '') {
                var byId = list.filter(function (f) {
                    return f && f.id && String(f.id[1]) === String(idAttr);
                });
                if (byId.length) return byId;
            }
        }
        for (var q = 0; q < pools.length; q++) {
            var list2 = pools[q];
            if (!list2 || !list2.length) continue;
            var withDesc2 = list2.filter(function (f) {
                return f && (f.desc2 || f.desc_2);
            });
            if (withDesc2.length) return withDesc2;
        }
        return null;
    }

    function readActiveWordIndex($block) {
        var $hi = $block.find(
            '.word-span.highlighted, .word-span3.highlighted, .highlighted[data-word-index], [data-word-index].highlighted'
        ).first();
        if ($hi.length) {
            var di = $hi.data('index');
            var dwi = $hi.data('word-index');
            if (di != null && !isNaN(Number(di))) return Number(di);
            if (dwi != null && !isNaN(Number(dwi))) return Number(dwi);
        }
        var lesson = $block.attr('data-lesson');
        if (window.stateByIndexDiv && window.stateByIndexDiv[lesson] &&
            window.stateByIndexDiv[lesson].currentFiszkaIndex != null) {
            return Number(window.stateByIndexDiv[lesson].currentFiszkaIndex) || 0;
        }
        return 0;
    }

    function autoApplyDesc2ToBlock($block) {
        if (!$block || !$block.length) return;
        var $wymowa = findWymowaLine($block);
        if (!$wymowa.length) return;

        var $existingSlot = $block.find('.desc2-wymowa-slot');
        if ($existingSlot.length && $wymowa.hasClass('desc2-replaced')) {
            // już jest — nie restartuj całej sekwencji przy każdym mutacji
            return;
        }

        var list = resolveFiszkiListForBlock($block);
        if (!list || !list.length) return;

        var idx = readActiveWordIndex($block);
        // autoSequence: true → kolejne słówka po kolei z kolorami
        showAllDesc2InWymowaLine($block, list, idx, { autoSequence: true });
    }

    function scanAllBlocks() {
        $('.image-container3b').each(function () {
            autoApplyDesc2ToBlock($(this));
        });
    }

    var scanTimer = null;
    function scheduleScan() {
        if (scanTimer) clearTimeout(scanTimer);
        scanTimer = setTimeout(scanAllBlocks, 100);
    }

    var observer = new MutationObserver(function () {
        scheduleScan();
    });

    function startObserver() {
        if (!document.body) return;
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
        scheduleScan();
    }

    if (document.readyState === 'loading') {
        $(startObserver);
    } else {
        startObserver();
    }

    // ręczna zmiana słowa → tylko to słówko (fragmenty + biała ramka), bez restartu całej sekwencji
    $(document)
        .off('click.desc2Sync')
        .on(
            'click.desc2Sync',
            '.next-buttonv, .next-buttonvv, .prev-buttonv, .prev-buttonvv, .word-span, .word-span2, .word-span3, [data-word-index], .sentence-next, .sentence-prev',
            function () {
                var $block = $(this).closest('.image-container3b');
                if (!$block.length) return;
                setTimeout(function () {
                    var idx = readActiveWordIndex($block);
                    var $slot = $block.find('.desc2-wymowa-slot');
                    if ($slot.length) {
                        setActiveDesc2Index($block, idx, {});
                    } else {
                        autoApplyDesc2ToBlock($block);
                    }
                }, 40);
            }
        );

    window.showAllDesc2InWymowaLine = showAllDesc2InWymowaLine;
    window.setActiveDesc2Index = setActiveDesc2Index;
    window.startDesc2AutoSequence = startDesc2AutoSequence;
    window.blinkDesc2WithAudio = blinkDesc2WithAudio;
    window.showDesc2InWymowaLine = showDesc2InWymowaLine;
    window.startDesc2Blink = startDesc2Blink;
    window.stopDesc2Blink = stopDesc2Blink;
    window.blinkDesc2ForTag = blinkDesc2ForTag;
    window.blinkDesc2NearPronunciation = blinkDesc2NearPronunciation;
    window.prepareDesc2Html = prepareDesc2Html;
    window.findWymowaLine = findWymowaLine;
    window.refreshDesc2ForBlock = refreshDesc2ForBlock;
    window.autoApplyDesc2ToBlock = autoApplyDesc2ToBlock;
    window.scanAllDesc2Blocks = scanAllBlocks;
    window.DESC2_WORD_COLORS = WORD_COLORS;

    console.log('[desc2-blink-helper] kolory słówek: zielony→pomarańczowy→czerwony→różowy→fioletowy→żółty; fragmenty z białą ramką; automat do następnego słówka');

})(window, window.jQuery);
