$(document).on('mouseenter', '.image-container3b', function () {

    const $block = $(this);

    console.log('[mouseenter] ENTER image-container3b');

    // 🔥 znajdź aktualnie highlighted słowo
    let $target = $block.find('.highlighted').first();

    console.log('[mouseenter] highlighted found?', $target.length > 0);

    // fallback jeśli brak highlighted
    if (!$target.length) {
        console.warn('[mouseenter] NO highlighted -> fallback to data-word-index=0');
        $target = $block.find('[data-word-index="0"]').first();
    }

    if (!$target.length) {
        console.error('[mouseenter] ❌ NO TARGET WORD FOUND');
        return;
    }

    console.log('[mouseenter] target word:', $target.text());

    // usuń poprzednie animacje globalnie
    $('.word-animation').remove();

    // dodaj animację
    $target.css({
        position: 'relative',
        display: 'inline-block'
    });

    console.log('[mouseenter] adding animation to word index =',
        $target.attr('data-word-index')
    );

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
const $line = $(this).find('.sentence-line').first();

    const indexDiv = $line.find('.sentence-inner').data('indexdiv');

    if (wordIndexCache[indexDiv] === undefined)
        wordIndexCache[indexDiv] = 0;


    tablica20aa.push(wordIndexCache[indexDiv]);

    console.log('hej120aa', wordIndexCache[indexDiv]);

    // 🔥 znajdź nowe słowo po inkrementacji
    const $nextWord = $line.find(`[data-word-index="${wordIndexCache[indexDiv]}"]`).first();

    if ($nextWord.length) {

        // usuń tylko animacje w tym bloku
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
    }
    // 5. 🔊 DŹWIĘK PIERWSZEGO SŁOWA
const currentWordIndex = wordIndexCache[indexDiv];

const y = 1 + (indexDiv - 1) * 3;

const blockWords = fiszki10.filter(
    f => f.id?.[1] === y
);

const fiszkaAudio = blockWords[currentWordIndex];

console.log('[audio] currentWordIndex =', currentWordIndex);
console.log('[audio] y =', y);
console.log('[audio] fiszkaAudio =', fiszkaAudio);

if (fiszkaAudio?.word?.[0]) {

    console.log('[audio] playing:', fiszkaAudio.word[0]);

    const audio = new Audio(fiszkaAudio.word[0]);

    audio.currentTime = 0;

    audio.play().catch(err => {
        console.warn('[audio] blocked or failed:', err);
    });
}

    syncHighlightForIndexDiv(indexDiv);
    console.log('[mouseenter] ✅ animation restored');
});



console.log("calendar.js działa");

// Sprawdzenie danych
if (!window.fiszki10_part1) {
  throw new Error("BRAK fiszki10_part1 – sprawdź fiszki10_part1");
}

const calendarEl = document.getElementById("calendar");

// --- Konfiguracja miesięcy kwiecień 2025 → grudzień 2025 ---
const monthsPL = [
  "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
  "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
];

const startYear = 2025;
const startMonth = 3; // kwiecień
const endMonth = 11;  // grudzień

// --- Zliczamy wpisy na dni ---
const dayCounts = {};
fiszki10_part1.forEach(item => {
  const raw = item.data[0]; // np. "15 kwiecień"
  dayCounts[raw] = (dayCounts[raw] || 0) + 1; // pełna data jako klucz
});

// --- Tworzenie miesięcy ---
const monthsToAdd = [];

for (let m = startMonth; m <= endMonth; m++) {
  const monthDiv = document.createElement("div");
  monthDiv.className = "month";
  monthDiv.innerHTML = `<h3>${monthsPL[m]} ${startYear}</h3>`;

  // --- Tworzenie dni w tygodniach ---
  const daysInMonth = new Date(startYear, m + 1, 0).getDate(); // liczba dni w miesiącu
  const firstDayWeekday = new Date(startYear, m, 1).getDay(); // 0 = niedziela

  const weeks = [];
  let dayNum = 1;
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      if ((w === 0 && d < firstDayWeekday) || dayNum > daysInMonth) {
        week.push(null);
      } else {
        week.push(dayNum++);
      }
    }
    weeks.push(week);
  }

  // --- Render dni ---
  weeks.forEach(weekDays => {
    const week = document.createElement("div");
    week.className = "week";

    weekDays.forEach(day => {
      const dayEl = document.createElement("div");
      dayEl.className = "day";

      if (!day) {
        dayEl.classList.add("empty");
      } else {
        const dateKey = `${day} ${monthsPL[m]}`;
        dayEl.textContent = day;
        if (dayCounts[dateKey]) {
          dayEl.style.cursor = "pointer";

          const count = document.createElement("div");
          count.className = "day-count";
          count.textContent = dayCounts[dateKey];
          dayEl.appendChild(count);

          // Kliknięcie na dzień
          dayEl.addEventListener("click", () => {
            showEntriesForDay(day, monthsPL[m]);
          });
        }
      }

      week.appendChild(dayEl);
    });

    monthDiv.appendChild(week);
  });

  monthsToAdd.push(monthDiv);
}

// --- Dodanie miesięcy do kalendarza w kolejności, aby grudzień 2025 był po prawej ---
monthsToAdd.forEach(monthDiv => {
  calendarEl.appendChild(monthDiv);
});

// --- Przewinięcie do prawej strony (najnowszy miesiąc) ---
const calendarScroll = document.getElementById("calendar-scroll");
calendarScroll.scrollLeft = calendarScroll.scrollWidth;

// --- Funkcja wyświetlania wpisów ---
function showEntriesForDay(dayNum, monthName) {
  const container = document.getElementById("day-content");
  container.innerHTML = ""; // czyścimy poprzednie wpisy

  const entries = fiszki10_part1.filter(item => {
    const raw = item.data[0]; // np. "15 kwiecień"
    const d = parseInt(raw, 10);
    const m = raw.split(" ")[1];
    return d === dayNum && m === monthName;
  });

  if (entries.length === 0) {
    container.textContent = "Brak wpisów dla danego dnia";
    return;
  }

  entries.forEach(item => {
    const post = document.createElement("div");
    post.className = "post";
    post.style.display = "block";

    const shortText = `📌 ${item.data[0]}`;
    const fullText = item.textPL?.[0] || "(brak tekstu)";

    post.innerHTML = `
      <p><strong>Paweł Babik napisał:</strong></p>
      <div class="tags">
        <button class="tag">#zmysły</button>
        <button class="tag">#mindset</button>
      </div>
      <div class="short-text">${shortText}</div>
      <div class="full-text" style="display: none; margin-top: 10px;">${fullText}</div>
      <button class="toggle-btn" style="margin: 10px 0px; display: inline-block;">Zobacz wpis</button>
    `;

    container.appendChild(post);

    const btn = post.querySelector(".toggle-btn");
    const fullTextEl = post.querySelector(".full-text");
    btn.addEventListener("click", () => {
      if (fullTextEl.style.display === "none") {
        fullTextEl.style.display = "block";
        btn.textContent = "Ukryj wpis";
      } else {
        fullTextEl.style.display = "none";
        btn.textContent = "Zobacz wpis";
      }
    });
  });
}

$sentence10.find('.word-span, .word-span2')
    .off('click')
    .on('click', function () {
        

        let clickedIndex = $(this).data('index');

        window.mojeidGlobal.push({
            indexDiv: indexDiv,
            currentWordIndex: clickedIndex
        });

        // opcjonalnie nadpisz ostatni stan dla indexDiv
        window.mojeidGlobal[indexDiv] = {
            indexDiv: indexDiv,
            currentWordIndex: clickedIndex
        };

        isNextClick2 = true;

        currentHighlightIndex = clickedIndex;

        tablica20aa.push(clickedIndex);


if (!isNextClick) {
    currentFiszkaIndex = tablica20aa[tablica20aa.length - 2];
    console.log('wtedy występuje', isNextClick, isNextClick2, currentFiszkaIndex, clickedIndex);
}
        console.log('hej222b', clickedIndex, matchingFiszki1, indexDiv, tablica20aa[tablica20aa.length - 2], tablica20aa[tablica20aa.length - 1], currentWordIndex);

setTimeout(function() {
    wybierzRodzaj2b('all', currentFiszkaIndex, matchingFiszki1, indexDiv);
}, 500);

        updateHighlight(
            indexDiv,
            $sentence10,
            clickedIndex,
            firstWord,
            secondWord,
            thirdWord,
            forthWord,
            fifthWord,
            sixthWord
        );

        requestAnimationFrame(() => {
            handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
        });

        console.log('hej100b', tablica20aa[tablica20aa.length - 1]);
    });
    
    
    chcę wywołać moje animation w pierwszym słowie zdania kiedy najadę myszą na kontener - wtedy animacja (animation) ma się pojawić nad słowem i odtwarzać ma się dźwięk z word z tablicy. gdy przesunę na kolejne słowo ma się odtawarzać animacja nad słowem i kolejny dźwięk
let tablica12ab2 = [];
let tablica12ad2 = [];
let tablica12abc2 = [];
const kliknieciaHistoria = []; // [przedostatnie, ostatnie]
const tablica11b = [];
let tablica13a = [];
let tablica12b = [];
let tablica12bu = [];
let tablica15a = [];
const fiszkaobject = {
    data: [] // Inicjalizacja tablicy wewnątrz obiektu
};
let tablica24 = [];
        let tablica20aa = [];
window.seenFiszki = new Set();
window.wordCounterTotal = 0;
function showCombinedSentenceForLesson22b(
    selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
    buttonindex, index55, index77, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes,
    startIndex, newIndex, indexDiv,
    lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
    lesson1Sentences, lesson2Sentences, lesson3Sentences,
    lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
    lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
    cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
    lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching,
    containerEl // 🔥 DODAJ TO
) {
    const $target = $(containerEl);

    $target.empty();
    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
// 🔥 DOPIERO TU

    console.log('hej444', newIndex);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';
    if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {

        const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                const srcWord1q = pobierzSrcWordDlaLekcji1v(lessonIdToShow1, fiszki);
        const srcWord1a = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
        const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                const srcWord1c = pobierzSrcWordDlaLekcji3b(lessonIdToShow1, fiszki);
        const srcWord1d = pobierzSrcWordDlaLekcji4(lessonIdToShow1, fiszki);
        const srcWord1f = pobierzSrcWordDlaLekcji5(lessonIdToShow1, fiszki);
        const srcWord1v = pobierzSrcWordDlaLekcji6(lessonIdToShow1, fiszki);
        const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                        const srcWord2q = pobierzSrcWordDlaLekcji1v(lessonIdToShow2, fiszki);
        const srcWord2a = pobierzSrcWordDlaLekcji2(lessonIdToShow2, fiszki);
        const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                        const srcWord2c = pobierzSrcWordDlaLekcji3b(lessonIdToShow2, fiszki);
        const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki);
        const srcWord2f = pobierzSrcWordDlaLekcji5(lessonIdToShow2, fiszki);
        const srcWord2v = pobierzSrcWordDlaLekcji6(lessonIdToShow2, fiszki);
        const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                                const srcWord3q = pobierzSrcWordDlaLekcji1v(lessonIdToShow3, fiszki);
        const srcWord3a = pobierzSrcWordDlaLekcji2(lessonIdToShow3, fiszki);
        const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                        const srcWord3c = pobierzSrcWordDlaLekcji3b(lessonIdToShow3, fiszki);
        const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki);
        const srcWord3f = pobierzSrcWordDlaLekcji5(lessonIdToShow3, fiszki);
        const srcWord3v = pobierzSrcWordDlaLekcji6(lessonIdToShow3, fiszki);
        const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
        function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.srcWord[0] : null;
        }
                function pobierzSrcWordDlaLekcji1v(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.category3[0] : null;
        }
        function pobierzSrcWordDlaLekcji2(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.srcWordimage : null;
        }
        function pobierzSrcWordDlaLekcji3(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
        }
                function pobierzSrcWordDlaLekcji3b(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.srcWord[0] : null; // Zwracamy srcWord[1] zamiast srcWord
        }
        function pobierzSrcWordDlaLekcji4(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.opis : null;
        }
        function pobierzSrcWordDlaLekcji5(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.translate : null;
        }
        function pobierzSrcWordDlaLekcji6(lessonId, fiszki) {
            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
            return matchingFiszka ? matchingFiszka.translateb3 : null;
        }
        console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);

        let sentence10 = "", sentence11 = "", sentence10b = "", sentence11b = "", sentence10c = "", sentence11c = "";
        function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {

            function isFiszkaActive2(className) {
                const learned = getLearned2();
                console.log('[📦 ZAWARTOŚĆ ColorClass]', learned);

                const entry = learned.find(e => e.className === className);
                console.log('[🔍 SZUKAM]', className, '->', entry);

                return entry && entry.classToAdd === "active2";
            }
            console.log('hej155', matchingFiszki1);
            for (let i = 0; i < matchingFiszki1.length; i++) {
                const fiszka = matchingFiszki1[i];
                if (!fiszka.sentence1)
                    continue;

                for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                    let sentencePart = fiszka.sentence1[ki];
                    const classNameToCheck = `fiszka-${fiszka.id}`;
                    console.log('[🟢 SPRAWDZAM FISZKĘ]', classNameToCheck);

                    const isActive = isFiszkaActive2(classNameToCheck);
                    console.log('[🟢 Czy aktywna (active2)?]', isActive);

                    if (isActive) {
                        const spanGreen = document.createElement('span');
                        spanGreen.textContent = sentencePart;
                        spanGreen.classList.add('orange');
                        sentencePart = spanGreen.outerHTML;

                        console.log('[✅ PODŚWIETLONO NA ZIELONO]', sentencePart);
                    }
                    const indexToCheck = i + lesson1PartLength + 1;

                    if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                        sentencePart = `<span class="yellow">${sentencePart}</span>`;
                    }

                    if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                        sentencePart = `<span class="yellow">${sentencePart}</span>`;
                    }

                    sentence10 += sentencePart + " ";
                }
            }

            for (let i = 0; i < matchingFiszki1.length; i++) {
                const fiszka = matchingFiszki1[i];
                if (!fiszka.sentence2)
                    continue;

                for (let ki = 0; ki < fiszka.sentence2.length; ki++) {
                    let sentencePart2 = fiszka.sentence2[ki];
                    const indexToCheck = i + lesson1PartLength + 1;

                    if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                        sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
                    }

                    if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                        sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
                    }

                    sentence11 += sentencePart2 + " ";
                }
            }

return {sentence10, sentence11, sentence10b, sentence11b, sentence10c, sentence11c};
        }

        let sentence20 = "", sentence22 = "", sentence20b = "", sentence22b = "", sentence20c = "", sentence22c = "";
        function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
            return {sentence20, sentence22, sentence20b, sentence22b, sentence20c, sentence22c};

        }
        let sentence30 = "", sentence33 = "", sentence30b = "", sentence33b = "", sentence30c = "", sentence33c = "";
        function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
            return {sentence30, sentence33, sentence30b, sentence33b, sentence30c, sentence33c};
        }


    // 🔥 WAŻNE: używamy istniejącego kontenera jeśli jest
    const $container = containerEl
        ? $(containerEl)
        : $('<div></div>').addClass('image-container3b');

    $container.attr('data-lesson', indexDiv);
    $container.css('position', 'relative');

    // ❌ NIE ROBIMY append tutaj jeśli container istnieje
    if (!containerEl) {
        $('.grid-container').append($container);
    }

// --- TABLICE ---
        const srcWords = [srcWord1, srcWord2, srcWord3];        // linki do wideo odpowiadają pozycji 0..2
                const srcWordsq = [srcWord1q, srcWord2q, srcWord3q];        // linki do wideo odpowiadają pozycji 0..2
        const srcWordsb = [srcWord1v, srcWord2v, srcWord3v];
        const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];
                const srcWords2b = [srcWord1c, srcWord2c, srcWord3c];
        const miniaturka = [srcWord1a, srcWord2a, srcWord3a];   // preview obrazy odpowiadają pozycji 0..2
        const thumbDescriptions = [srcWord1f, srcWord2f, srcWord3f];
        const sentences = [matchingFiszki1[0], matchingFiszki2[0], matchingFiszki3[0]];

// ---------- GLOBAL STATE ----------
        let videoVisible = false;

// mapa data-name -> link (wypełniana w updateButtonColors)
        const linkMap = {};
// tablica data-name (np. [1,2,3,4,5,6...]) z DOM
        const tablica60 = [];
// trojki wygenerowane z tablica60 (np. [[1,2,3],[4,5,6],...])
        let trojkiGlobal = [];

// currentTriplet: rzeczywiste data-name aktualnej trójki (np. [5,6,7])
        let currentTriplet = [];
// currentPos: pozycja w currentTriplet (0..currentTriplet.length-1)
        let currentPos = 0;


// ---------- HELPER: wymuszenie zmiany src obrazka ----------
        function setImgSrcForce($img, src) {
            if (!$img || !$img.length)
                return;
            const current = $img.attr('src') || '';
            if (current === src) {
                $img.attr('src', '');
                requestAnimationFrame(() => requestAnimationFrame(() => $img.attr('src', src)));
            } else {
                $img.attr('src', src);
            }
        }

        let previousTrojkiJSON = '';
        function updateButtonColors() {
            tablica60.length = 0;
            for (let key in linkMap)
                delete linkMap[key];

            const color = (typeof colorMapping !== 'undefined' && colorMapping[selectedCategory])
                    ? colorMapping[selectedCategory]
                    : '#800080';

            document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
                const raw = block.getAttribute('data-name');
                const dataName = parseInt(raw, 10);
                if (!Number.isNaN(dataName))
                    tablica60.push(dataName);

                if (typeof startRange2 !== 'undefined' && typeof endRange2 !== 'undefined') {
                    const dataNameSafe = parseInt(block.getAttribute('data-name'), 10);
                    if (!Number.isNaN(dataNameSafe) && dataNameSafe >= startRange2 && dataNameSafe <= endRange2) {
                        const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');
                        if (button) {
                            button.style.backgroundColor = color;
                            button.style.color = 'white';
                        }
                    }
                }
            });

            const trojki = [];
            for (let i = 0; i < tablica60.length; i += 3) {
                trojki.push(tablica60.slice(i, i + 3));
            }

            if (typeof newIndex !== 'undefined' && typeof newIndex5 !== 'undefined' &&
                    typeof newIndex10 !== 'undefined' && typeof index50 !== 'undefined') {
                if (newIndex === 0 || newIndex5 === 0 || newIndex10 === 0) {
                    for (let i = 0; i < trojki.length; i++) {
                        trojki[i] = trojki[i].map(num => (num > index50 ? num - 3 : num));
                    }
                }
            }

            const currentTrojkiJSON = JSON.stringify(trojki);
            if (currentTrojkiJSON !== previousTrojkiJSON) {
                previousTrojkiJSON = currentTrojkiJSON;
                $('.hidden-link').remove();
                $('.run-button3').remove();

                trojkiGlobal = trojki.slice();

                trojki.forEach((trojka, i) => {
                    const lessonNumber = i + 1;

                    // 🔹 Link do całej lekcji (3 zdania)
                    const tripletLink = `demo1angielski.html?category=${selectedCategory}&data=${trojka.join(',')}`;

                    // 🔹 Dla każdego zdania z osobna:
                    trojka.forEach(indexDiv => {
                        // pojedynczy link do zdania
                        const singleLink = `demo1angielski.html?category=${selectedCategory}&data=${indexDiv}`;
                        linkMap[indexDiv] = singleLink; // teraz każde zdanie ma własny link

                        const $containerBlock = $(`.sentence-block[data-name="${indexDiv}"]`);
                        if ($containerBlock.length) {
                            // 🔸 przycisk pojedynczej lekcji
                            const $buttonSingle = $('<a></a>')
                                    .attr({
                                        href: singleLink,
                                        target: '_blank',
                                        rel: 'noopener noreferrer'
                                    })
                                    .css({
                                        position: 'absolute',
                                        top: '60px',
                                        right: '5px',
                                        'z-index': 2000,
                                        color: 'white',
                                        'background-color': '#007bff',
                                        border: 'none',
                                        'border-radius': '4px',
                                        padding: '5px 10px',
                                        'text-decoration': 'none',
                                        cursor: 'pointer'
                                    })
                                    .addClass('run-button3')
                                    .text('➡ Otwórz pojedynczą lekcję');

                            $containerBlock.append($buttonSingle);
                        }
                    });

                    // 🔸 Dodatkowo – przycisk do całej lekcji (3 zdania)
                    const firstIndex = trojka[0];
                    const $containerFirst = $(`.sentence-block[data-name="${firstIndex}"]`);
                    if ($containerFirst.length) {
                        const $buttonTriplet = $('<a></a>')
                                .attr({
                                    href: tripletLink,
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                })
                                .css({
                                    position: 'absolute',
                                    top: '95px',
                                    right: '5px',
                                    'z-index': 2000,
                                    color: 'white',
                                    'background-color': '#28a745',
                                    border: 'none',
                                    'border-radius': '4px',
                                    padding: '5px 10px',
                                    'text-decoration': 'none',
                                    cursor: 'pointer'
                                })
                                .addClass('run-button3')
                                .text('📘 Otwórz całą lekcję');

                        $containerFirst.append($buttonTriplet);
                    }
                });
            }
        }

// Delegacja zdarzeń dla run-button3 (otwieranie linku)
        $('body').off('click', '.run-button3').on('click', '.run-button3', function () {
            const indexDiv = $(this).attr('data-index2');
            const lessonLink = linkMap[indexDiv];
            if (lessonLink)
                window.open(lessonLink, '_blank');
        });

// ---------- FUNKCJE POMOCNICZE: Parsowanie parametru data z URL ----------
        function parseDataParamFromURL() {
            if (typeof window === 'undefined')
                return null;
            const dataParam = new URLSearchParams(window.location.search).get('data');
            if (!dataParam)
                return null;
            const parts = dataParam.split(',').map(s => parseInt(s, 10)).filter(n => !Number.isNaN(n));
            if (parts.length === 0)
                return null;
            return parts;
        }

// Jeśli mamy pojedynczy numer (np. ?data=5) i trojkiGlobal jest już zbudowane,
// znajdź trójkę, która zawiera ten numer i ustaw currentTriplet oraz currentPos.
        function chooseTripletFromSingleNumber(singleNumber) {
            for (let t = 0; t < trojkiGlobal.length; t++) {
                const tri = trojkiGlobal[t];
                const idx = tri.indexOf(singleNumber);
                if (idx !== -1) {
                    currentTriplet = tri.slice(); // przypisz
                    currentPos = idx;
                    return true;
                }
            }
            return false;
        }
        const sentenceCache = {}; // klucz: currentPos, wartość: HTML zdań
        if (!sentenceCache[indexDiv]) {
            sentenceCache[indexDiv] = {};
        }
        const currentPosCache = {}; // klucz: indexDiv, wartość: currentPos
        let globalSentence10 = "", globalSentence11 = "", globalSentence10b = "", globalSentence11b = "", globalSentence10c = "", globalSentence11c = "";
        let globalSentence20 = "", globalSentence22 = "", globalSentence20b = "", globalSentence22b = "", globalSentence20c = "", globalSentence22c = "";
        let globalSentence30 = "", globalSentence33 = "", globalSentence30b = "", globalSentence33b = "", globalSentence30c = "", globalSentence33c = "";
        console.log('index88:', sentenceCache);
        let mojeidGlobal;
// Globalne zmienne do śledzenia aktualnej lekcji i zdania
        let currentIndexDivGlobal = null;  // aktualna lekcja
        let currentPosGlobal = 0;          // aktualne zdanie w lekcji
        let systemStarted = false; // flaga do kontroli kliknięcia "startsystem"
let tablica55 = [];

// ===============================
// 🔥 GLOBAL STATE (KLUCZ FIXA)
// ===============================
window.stateByIndexDiv = window.stateByIndexDiv || {};

function getState(indexDiv) {
    if (!window.stateByIndexDiv[indexDiv]) {
        window.stateByIndexDiv[indexDiv] = {
            currentFiszkaIndex: 0,
            tablica20aa: [],
            currentHighlightIndex: 0
        };
    }
    return window.stateByIndexDiv[indexDiv];
}
        function renderLesson(matchingFiszki1, matchingFiszki2) {

    const state = getState(indexDiv);

    // 🔥 RESET tylko dla tej lekcji
    state.currentFiszkaIndex = 0;
    state.tablica20aa = [];
    state.currentHighlightIndex = 0;

    $container.empty();
    $('.image-container3b .sentence').css('display', 'none');

    const $buttonb = $('<img>').attr({
        src: 'https://www.arbulang.com/img/startsystem.png',
        class: 'overlay-button'
    });

    if (indexDiv % 2 === 0) {
        $buttonb.addClass('left-side-button');
    } else {
        $buttonb.addClass('right-side-button');
    }

    $buttonb.appendTo($container);

    // =========================
    // START BUTTON
    // =========================
    $buttonb.on('click', function () {
                console.log("STARTSYSTEM indexDiv=", indexDiv);
                console.log("STARTSYSTEM currentPosCache=", JSON.stringify(currentPosCache));
                console.log("STARTSYSTEM currentPos=", currentPosCache[indexDiv]);
                if (currentPosCache[indexDiv] === undefined) {
                    currentPosCache[indexDiv] = 0;
                }
                currentPosGlobal = currentPosCache[indexDiv]; // synchronizacja z globalnym currentPosGlobal
                currentIndexDivGlobal = indexDiv; // aktualizujemy globalną lekcję

                systemStarted = true;
                $('.run-button3').css({
                    'margin-top': '65px'
                });
                console.log('hej140', systemStarted);
                // Dodaj kopiÄ wartoĹci indexDiv do tablicy
                // PrzykĹad nowej wartoĹci indexDiv
                let nowaWartosc = indexDiv;

                // SprawdĹş, czy wartoĹÄ juĹź nie istnieje w tablicy (opcjonalnie)
                if (!tablica11b.includes(nowaWartosc)) {
                    tablica11b.push(nowaWartosc); // Dodaj nowÄ wartoĹÄ na koĹcu tablicy
                    console.log('Dodano wartoĹÄ:', nowaWartosc);
                    console.log('Dodano wartoĹÄ:', tablica11b);
                } else {
                    console.log('WartoĹÄ juĹź istnieje w tablicy:', nowaWartosc);
                }

                let ostatniElement2 = tablica11b[tablica11b.length - 2];

                let ostatniElement3 = tablica12b[tablica12b.length - 1];

                console.log('hej55h', tablica11b);
                console.log('hej55h+', ostatniElement2);
                $('video').each(function () {
                    const video = this;
                    if (!video.paused) {
                        video.pause(); // Wstrzymaj wideo
                        console.log('Wideo zatrzymane:', video);
                    }
                });
                console.log('index44bc', indexDiv);
                console.log('Button clicked');

                
                // SprawdĹş, czy kontener ma odpowiedni z-index i position
                $container.css({
                    'position': 'relative', // Ustawienie position na relative, aby z-index dziaĹaĹ
                    'z-index': '1000003'
                });
                window.mojeidGlobal2 = indexDiv;
                console.log('hej44f', window.mojeidGlobal);
                console.log('hej140vv', currentPos);
if (currentPosCache[indexDiv] === 0) {
        const state = getState(indexDiv);
        state.currentFiszkaIndex = 0;

        currentIndexDivGlobal = indexDiv;
        systemStarted = true;

const lastEntry = [...window.mojeidGlobal]
    .reverse()
    .find(x => x && x.indexDiv === indexDiv);

    const currentWordIndex = lastEntry ? lastEntry.currentWordIndex : 0;
console.log('hej220', currentWordIndex);
    highlightFirstWord(indexDiv, currentPosCache[indexDiv], currentWordIndex);

    setTimeout(() => {
        showFiszkiForLesson6(ostatniElement2, ostatniElement3);
    }, 0);
}
                console.log('hej140vvv', indexDiv, currentPosCache[indexDiv], window.mojeidGlobal);
                if (currentPos === 1) {
                    highlightFirstWord2(indexDiv, currentPosCache[indexDiv], window.mojeidGlobalb);
                    setTimeout(() => {
                        showFiszkiForLesson6b(ostatniElement2, ostatniElement3);
                    }, 0);
                }
                if (currentPos === 2) {
                    highlightFirstWord3(indexDiv, currentPosCache[indexDiv], window.mojeidGlobalc);
                    setTimeout(() => {
                        showFiszkiForLesson6c(ostatniElement2, ostatniElement3);
                    }, 0);
                }


            });


            
            function highlightFirstWord(indexDiv, currentPos, mojeidWordIndex) {
            }

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

            // --- Dopasowanie fiszek do trójki ---
            const id1 = currentTriplet[0];
            const id2 = currentTriplet[1];
            const id3 = currentTriplet[2];


            const matchingIndexes = [];
            const matchingIndexes2 = [];
            const matchingIndexes3 = [];
            const matchingLessons5b = [];

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

// --- Pasek miniatur ze strzałkami ---
            const $thumbContainer = $('<div>').addClass('thumb-row');
            currentTriplet.forEach((dataName, pos) => {
                const $item = $('<div>').addClass('thumb-item');
                if (pos === currentPos)
                    $item.addClass('activeItem');

                const $img = $('<img>').addClass('thumb-img').attr('data-pos', pos);
                setImgSrcForce($img, miniaturka[pos]);
                    const $czasLabel = $('<div>')
        .addClass('thumb-czas')
        .text(srcWordsq[pos] || '');
                $img.off('click.thumb').on('click.thumb', function () {
                    const p = Number($(this).attr('data-pos'));
                    if (!Number.isNaN(p)) {
                        currentPos = p;
                        videoVisible = false;
                        renderLesson();
                    }
                });

                const $desc = $('<div>').addClass('thumb-desc').text(thumbDescriptions[pos] || '');

                const linkForThumb = linkMap[dataName] || `demo1angielski.html?category=${selectedCategory}&data=${dataName}`;
                const $link = $('<a>').attr({href: linkForThumb, target: '_blank'}).addClass('thumb-link').text('Otwórz pojedyńczą lekcję');

                $item.append($czasLabel, $img, $desc, $link);
                $thumbContainer.append($item);
            });
            let globalWordIndex = 0; // wszystkie trzy zdania przesuwają się razem
            const wordIndexCache = {};
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

// --- Sprawdzenie cache ---
            if (!sentenceCache[indexDiv][currentPos]) {
                let currentSentenceHtml = "";
                try {
                    // Tutaj dodaj definicje matchingFiszki
                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === currentDataName);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === currentTriplet[1]);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === currentTriplet[2]);
                    if (currentPos === 0 && typeof addBackgroundToText1b === 'function') {
                        const {sentence10, sentence11, sentence10b, sentence11b, sentence10c, sentence11c} = addBackgroundToText1b(
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
                        globalSentence11 = sentence11;
                        globalSentence10b = sentence10b;
                        globalSentence11b = sentence11b;
                        globalSentence10c = sentence10c;
                        globalSentence11c = sentence11c;

                        currentSentenceHtml =
                                (sentence10 || "") +
                                (sentence11 || "") +
                                "<br>" +
                                (sentence10b || "").toUpperCase() +
                                (sentence11b || "").toUpperCase() +
                                "<br>" +
                                (sentence10c || "").toUpperCase() +
                                (sentence11c || "").toUpperCase();
                    } else if (currentPos === 1 && typeof addBackgroundToText2b === 'function') {
                        const {sentence20, sentence22, sentence20b, sentence22b, sentence20c, sentence22c} = addBackgroundToText2b(matchingFiszki2, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

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
                        const {sentence30, sentence33, sentence30b, sentence33b, sentence30c, sentence33c} = addBackgroundToText3b(matchingFiszki3, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

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
                } catch (e) {
                    console.error('Błąd podczas generowania zdań:', e);
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

function syncHighlightForIndexDiv(indexDiv, $block) {

    const currentIndex = wordIndexCache[indexDiv] ?? 0;

    const $spans = $block.find('.sentence-inner span[data-word-index]');

    // usuń stare podświetlenia
    $spans.removeClass('highlighted');

    // usuń stare animacje
    $block.find('.word-animation').remove();

    // znajdź aktualne słowo
    const $target = $spans.filter(`[data-word-index="${currentIndex}"]`);

    if (!$target.length) {
        return;
    }

    // podświetlenie
    $target.addClass('highlighted');

    // animacja
    const animationHtml = `
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
    `;

    $target.css('position', 'relative');
    $target.prepend(animationHtml);

    // przewinięcie do słowa
    $target[0].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });

    // dźwięk
    const soundUrl = $target.attr('data-sound');

    if (soundUrl) {

        // zatrzymaj poprzedni dźwięk
        if (window.currentWordAudio) {
            window.currentWordAudio.pause();
            window.currentWordAudio.currentTime = 0;
        }

        window.currentWordAudio = new Audio(soundUrl);

        window.currentWordAudio.play().catch(err => {
            console.log('Błąd odtwarzania:', err);
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
            $(document).on("click", ".next-buttonvv", function () {

                const indexDiv = $(this).closest('.sentence-line')
                        .find('.sentence-inner')
                        .data('indexdiv');

                if (wordIndexCache[indexDiv] === undefined)
                    wordIndexCache[indexDiv] = 0;

                wordIndexCache[indexDiv]++;
                                    tablica20aa.push(wordIndexCache[indexDiv]); // 2️⃣ zapis historii
console.log('hej120aa', wordIndexCache[indexDiv]);
                syncHighlightForIndexDiv(indexDiv);
            });
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

                const indexDiv = $(this).closest('.sentence-line')
                        .find('.sentence-inner')
                        .data('indexdiv');

                if (wordIndexCache[indexDiv] === undefined)
                    wordIndexCache[indexDiv] = 0;

                wordIndexCache[indexDiv]--;
                                    tablica20aa.push(wordIndexCache[indexDiv]); // 2️⃣ zapis historii
console.log('hej120aa', wordIndexCache[indexDiv]);
                syncHighlightForIndexDiv(indexDiv);
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
            window.mojeidGlobal = window.mojeidGlobal || {};
function attachArrowNavigation($sentenceBlock, indexDiv) {

    console.log('attachArrowNavigation start', { indexDiv, hasBlock: !!$sentenceBlock.length });

    if (!$sentenceBlock || $sentenceBlock.length === 0) {
        console.warn('Brak $sentenceBlock dla indexDiv:', indexDiv);
        return;
    }

    let currentWordIndex = 0;

    const updateHighlightAll = () => {

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
                    pronunciationFirstWord = first.slice('wymowa:'.length); // np. EWRYBODY
                    tokens.shift(); // usuń pierwszy token z listy słów do highlightu
                }
            }

            const id = indexDiv + "-" + lineIndex + "-" + currentWordIndex;

const wordsHtml = tokens.map((word, wi) => {

    const cursorStyle = `style="cursor:pointer;"`;

    if (wi === currentWordIndex) {
        return `<span class="highlighted"
                      data-word-index="${wi}"
                      data-mojeid="${id}"
                      ${cursorStyle}>${word}</span>`;
    }

    return `<span data-word-index="${wi}"
                  data-mojeid="${id}"
                  ${cursorStyle}>${word}</span>`;

}).join(" ");
            const pronunciationHtml = pronunciationLabel
                ? `<span class="pronunciation-label">${pronunciationLabel}</span>${pronunciationFirstWord ? ' ' + pronunciationFirstWord : ''} `
                : '';

            $inner.html(pronunciationHtml + wordsHtml);
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
console.log('hej110vv', window.mojeidGlobal);
        window.mojeidGlobalb = currentWordIndex;
        window.mojeidGlobalc = currentWordIndex;

        window.mojeidGlobal2 = indexDiv;
        window.mojeidGlobal3 = currentPos;

        if (window.systemStarted) {
            sendHighlightToFiszki(indexDiv, currentWordIndex);
        }
    };

    $sentenceBlock.find('.next-buttonvv')
        .off('click.attachNav')
        .on('click.attachNav', function (e) {
window.mojeidGlobal.push({
    indexDiv: indexDiv,
    currentWordIndex: currentWordIndex
});
console.log('hej110vv', window.mojeidGlobal)

            const raw = $sentenceBlock
                .find('.sentence-inner')
                .first()
                .text()
                .trim();

            const tokens = raw ? raw.split(/\s+/) : [];


            const wordsCount = tokens.length;

            if (currentWordIndex < wordsCount - 1) {
                currentWordIndex++;
                updateHighlightAll();

            }
            
        });

    $sentenceBlock.find('.prev-buttonvv')
        .off('click.attachNav')
        .on('click.attachNav', function (e) {


            const raw = $sentenceBlock
                .find('.sentence-inner')
                .first()
                .text()
                .trim();

            const tokens = raw ? raw.split(/\s+/) : [];


            const wordsCount = tokens.length;

            if (currentWordIndex < wordsCount - 1) {
                currentWordIndex--;
                updateHighlightAll();
            }
        });

    $sentenceBlock
        .off('click.attachNav', '.sentence-inner span')
        .on('click.attachNav', '.sentence-inner span', function (e) {

            e.stopImmediatePropagation();

            const wi = Number($(this).data('word-index'));
            if (!isNaN(wi)) {
                currentWordIndex = wi;
                                                tablica20aa.push(currentWordIndex); // 2️⃣ zapis historiitablica20aa.push
                console.log('hej12', tablica20aa[tablica20aa.length - 1]);
                updateHighlightAll();
            }
        });

    updateHighlightAll();
}
////// TUTAJ!!!!!!!!!
$(document).on('mouseenter', '.image-container3b', function () {

    const $block = $(this);

    console.log('[mouseenter] ENTER image-container3b');

    // 🔥 znajdź aktualnie highlighted słowo
    let $target = $block.find('.highlighted').first();

    console.log('[mouseenter] highlighted found?', $target.length > 0);

    // fallback jeśli brak highlighted
    if (!$target.length) {
        console.warn('[mouseenter] NO highlighted -> fallback to data-word-index=0');
        $target = $block.find('[data-word-index="0"]').first();
    }

    if (!$target.length) {
        console.error('[mouseenter] ❌ NO TARGET WORD FOUND');
        return;
    }

    console.log('[mouseenter] target word:', $target.text());

    // usuń poprzednie animacje globalnie
    $('.word-animation').remove();

    // dodaj animację
    $target.css({
        position: 'relative',
        display: 'inline-block'
    });

    console.log('[mouseenter] adding animation to word index =',
        $target.attr('data-word-index')
    );

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
    // 5. 🔊 DŹWIĘK PIERWSZEGO SŁOWA
    if (fiszka.word && fiszka.word[0]) {

        console.log('[audio] playing:', fiszka.word[0]);

        const audio = new Audio(fiszka.word[0]);

        audio.currentTime = 0;
        audio.play().catch(err => {
            console.warn('[audio] blocked or failed:', err);
        });
    }
    console.log('[mouseenter] ✅ animation restored');
});
            function sendHighlightToFiszki(indexDiv, mojeidGlobal) {
                highlightFirstWord(indexDiv, currentPosCache[indexDiv], mojeidGlobal);
            }
            highlightFirstWordsInSentenceBlock($sentenceDiv);
            attachArrowNavigation($sentenceDiv, indexDiv);

            // --- Linki do lekcji ---
            const singleLink = `demo1angielski.html?category=${selectedCategory}&data=${currentDataName}`;
            const tripletLink = `demo1angielski.html?category=${selectedCategory}&data=${currentTriplet.join(',')}`;

            const $singleLinkA = $('<a>')
                    .attr({href: singleLink})
                    .addClass('text-link')
                    .text('➡ Otwórz lekcję z wybranym zdaniem');

            const $tripletLinkA = $('<a>')
                    .attr({href: tripletLink})
                    .addClass('text-link')
                    .text('➡ Otwórz całą lekcję (3 zdania)');

            $textContainer.append($singleLinkA, $tripletLinkA);

const $nav = $('<div>').addClass('nav-buttons');

// ← strzałka
const $left = $('<button>').text('←').on('click', () => {
    currentPos = (currentPos - 1 + currentTriplet.length) % currentTriplet.length;
    videoVisible = false;
    renderLesson();
});

$nav.append($left);

// 🔢 przyciski lekcji (1 / 2 / 3 – zależne od indexDiv)
currentTriplet.forEach((lessonIndexDiv, i) => {
    const $btn = $('<button>')
        .addClass('lesson-indicator')
        .toggleClass('active', i === currentPos)
        .text(lessonIndexDiv) // ← tu masz cyfrę zależną od indexDiv
        .on('click', () => {
            currentPos = i;
            videoVisible = false;
            renderLesson();
        });

    $nav.append($btn);
});

// → strzałka
const $right = $('<button>').text('→').on('click', () => {
    currentPos = (currentPos + 1) % currentTriplet.length;
    videoVisible = false;
    renderLesson();
});

$nav.append($right);

            $container.append($mediaContainer, $textContainer, $nav);
        }

        $('body').off('click', '.run-icon').on('click', '.run-icon', function () {
            const indexDiv = $(this).attr('data-index2');
            const link = linkMap[indexDiv] || `demo1angielski.html?category=${selectedCategory}&data=${indexDiv}`;
            window.open(link, '_blank');
        });

// ---------- STARTUP: synchronizacja trojek, linkMap i ustawienia currentTriplet ----------
        function startup() {
            // najpierw wypełnij tablica60, trojkiGlobal i linkMap
            updateButtonColors();

            // spróbuj odczytać parametry z URL
            const parsed = parseDataParamFromURL();
            if (parsed && parsed.length > 0) {
                if (parsed.length === 1) {
                    // pojedynczy numer - spróbuj odnaleźć odpowiadającą trójkę
                    // jeśli trojkiGlobal jest pusty (np. updateButtonColors jeszcze nie wrócił) - poczekaj krótko
                    if (trojkiGlobal.length === 0) {
                        // odczekaj i spróbuj ponownie
                        setTimeout(() => {
                            if (!chooseTripletFromSingleNumber(parsed[0])) {
                                // fallback: ustaw pojedynczy numer jako trójkę z nim samym
                                currentTriplet = [parsed[0]];
                                currentPos = 0;
                            }
                            renderLesson();
                        }, 60);
                        return;
                    } else {
                        if (!chooseTripletFromSingleNumber(parsed[0])) {
                            currentTriplet = [parsed[0]];
                            currentPos = 0;
                        }
                    }
                } else {
                    // jeżeli mamy już listę (np. 5,6,7) -> ustaw currentTriplet bezpośrednio
                    currentTriplet = parsed.slice();
                    currentPos = 0;
                }
            } else {
                // brak parametru w URL -> użyj pierwszej trojki (jeśli jest), inaczej fallback
                if (trojkiGlobal.length > 0) {
                    currentTriplet = trojkiGlobal[0].slice();
                    currentPos = 0;
                } else {
                    // fallback: zwykła sekwencja 0..miniaturka.length-1
                    currentTriplet = miniaturka.map((_, i) => i);
                    currentPos = 0;
                }
            }

            // render initial
            renderLesson();
        }

// Uruchom startup po krótkim delay (daje czas updateButtonColors)
        setTimeout(startup, 0);



        if (selectedCategory === 'all') {
            var $sentenceDiv = $('<div></div>');
            $sentenceDiv.addClass('sentence');

            // Pobieramy nazwy (id[1]) do atrybutów
            const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
            const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
            const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';

            $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    ${sentence10}${sentence11}<br>
        ${sentence10b}${sentence11b}<br>
                ${sentence10c}${sentence11c}<br>
</div>

<div class="sentence-block" data-name="${id2}">
    ${sentence20}${sentence22}<br>
            ${sentence20b}${sentence22b}<br>
            ${sentence20c}${sentence22c}<br>
</div>

<div class="sentence-block" data-name="${id3}">
    ${sentence30}${sentence33}<br>
                ${sentence30b}${sentence33b}<br>
</div>
`);

            $sentenceDiv.css({
                'position': 'absolute',
                'margin-top': '-50px',
                'text-align': 'center',
                'z-index': '5'
            });
        }
        
        console.log('Tworzymy przycisk z indexDiv =', indexDiv);
        const $button = $('<button></button>')
                .addClass('run-button')
                .text('Uruchom-działa')
                .attr('data-index2', indexDiv)
                .on('click', function () {
                    const index5 = $(this).attr('data-index2');
                    const index55 = parseInt(index5, 10);
                    console.log('Kliknięto przycisk z data-index2 =', index5, ', index55 =', index55);
                    kliknieciaHistoria.push(index55);
                    const index77 = (kliknieciaHistoria.length > 1)
                            ? kliknieciaHistoria[kliknieciaHistoria.length - 2]
                            : undefined;
                    console.log('index77 =', index77);

                    setTimeout(() => {
                        przekazArgument0('all', tablica3[2], index55, index77, true, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100', '', '', '', false, true, false);
                    }, 100);
                });
// Stylowanie przycisku – widoczny od razu
        $button.css({
            'position': 'absolute',
            'right': '-200px', // Dopasuj pozycję według potrzeb
            'top': '5px',
            'font-size': '10px',
            'height': '30px',
            'width': '170px',
            'color': 'blue',
            'background-color': 'white',
            'z-index': '12', // Wyższy niż inne elementy
            'border': '1px solid #aaa',
            'cursor': 'pointer'
        });

// Dodanie przycisku do kontenera – OD RAZU po jego stworzeniu
        $container.append($button);

        // Dodanie diva z zdaniem do kontenera
        $container.append($sentenceDiv);
        tablica10a.push(srcWords);
        console.log('hej6', tablica10a);
        console.log('wykonuje się teraz');
    }
}























function renderLesson(matchingFiszki1, matchingFiszki2) {

    const state = getState(indexDiv);

    // 🔥 RESET tylko dla tej lekcji
    state.currentFiszkaIndex = 0;
    state.tablica20aa = [];
    state.currentHighlightIndex = 0;

    $container.empty();
    $('.image-container3b .sentence').css('display', 'none');

    const $buttonb = $('<img>').attr({
        src: 'https://www.arbulang.com/img/startsystem.png',
        class: 'overlay-button'
    });

    if (indexDiv % 2 === 0) {
        $buttonb.addClass('left-side-button');
    } else {
        $buttonb.addClass('right-side-button');
    }

    $buttonb.appendTo($container);

    // =========================
    // START BUTTON
    // =========================
    $buttonb.on('click', function () {
                console.log("STARTSYSTEM indexDiv=", indexDiv);
                console.log("STARTSYSTEM currentPosCache=", JSON.stringify(currentPosCache));
                console.log("STARTSYSTEM currentPos=", currentPosCache[indexDiv]);
                if (currentPosCache[indexDiv] === undefined) {
                    currentPosCache[indexDiv] = 0;
                }
                currentPosGlobal = currentPosCache[indexDiv]; // synchronizacja z globalnym currentPosGlobal
                currentIndexDivGlobal = indexDiv; // aktualizujemy globalną lekcję

                systemStarted = true;
                $('.run-button3').css({
                    'margin-top': '65px'
                });
                console.log('hej140', systemStarted);
                // Dodaj kopiÄ wartoĹci indexDiv do tablicy
                // PrzykĹad nowej wartoĹci indexDiv
                let nowaWartosc = indexDiv;

                // SprawdĹş, czy wartoĹÄ juĹź nie istnieje w tablicy (opcjonalnie)
                if (!tablica11b.includes(nowaWartosc)) {
                    tablica11b.push(nowaWartosc); // Dodaj nowÄ wartoĹÄ na koĹcu tablicy
                    console.log('Dodano wartoĹÄ:', nowaWartosc);
                    console.log('Dodano wartoĹÄ:', tablica11b);
                } else {
                    console.log('WartoĹÄ juĹź istnieje w tablicy:', nowaWartosc);
                }

                let ostatniElement2 = tablica11b[tablica11b.length - 2];

                let ostatniElement3 = tablica12b[tablica12b.length - 1];

                console.log('hej55h', tablica11b);
                console.log('hej55h+', ostatniElement2);
                $('video').each(function () {
                    const video = this;
                    if (!video.paused) {
                        video.pause(); // Wstrzymaj wideo
                        console.log('Wideo zatrzymane:', video);
                    }
                });
                console.log('index44bc', indexDiv);
                console.log('Button clicked');

                
                // SprawdĹş, czy kontener ma odpowiedni z-index i position
                $container.css({
                    'position': 'relative', // Ustawienie position na relative, aby z-index dziaĹaĹ
                    'z-index': '1000003'
                });
                window.mojeidGlobal2 = indexDiv;
                console.log('hej44f', window.mojeidGlobal);
                console.log('hej140vv', currentPos);
if (currentPosCache[indexDiv] === 0) {
        const state = getState(indexDiv);
        state.currentFiszkaIndex = 0;

        currentIndexDivGlobal = indexDiv;
        systemStarted = true;

const lastEntry = [...window.mojeidGlobal]
    .reverse()
    .find(x => x && x.indexDiv === indexDiv);

    const currentWordIndex = lastEntry ? lastEntry.currentWordIndex : 0;
console.log('hej220', currentWordIndex);
    highlightFirstWord(indexDiv, currentPosCache[indexDiv], currentWordIndex);

    setTimeout(() => {
        showFiszkiForLesson6(ostatniElement2, ostatniElement3);
    }, 0);
}
                console.log('hej140vvv', indexDiv, currentPosCache[indexDiv], window.mojeidGlobal);
                if (currentPos === 1) {
                    highlightFirstWord2(indexDiv, currentPosCache[indexDiv], window.mojeidGlobalb);
                    setTimeout(() => {
                        showFiszkiForLesson6b(ostatniElement2, ostatniElement3);
                    }, 0);
                }
                if (currentPos === 2) {
                    highlightFirstWord3(indexDiv, currentPosCache[indexDiv], window.mojeidGlobalc);
                    setTimeout(() => {
                        showFiszkiForLesson6c(ostatniElement2, ostatniElement3);
                    }, 0);
                }


            });


            
            function highlightFirstWord(indexDiv, currentPos, mojeidWordIndex) {
                }
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

            // --- Dopasowanie fiszek do trójki ---
            const id1 = currentTriplet[0];
            const id2 = currentTriplet[1];
            const id3 = currentTriplet[2];


            const matchingIndexes = [];
            const matchingIndexes2 = [];
            const matchingIndexes3 = [];
            const matchingLessons5b = [];

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

// --- Pasek miniatur ze strzałkami ---
            const $thumbContainer = $('<div>').addClass('thumb-row');
            currentTriplet.forEach((dataName, pos) => {
                const $item = $('<div>').addClass('thumb-item');
                if (pos === currentPos)
                    $item.addClass('activeItem');

                const $img = $('<img>').addClass('thumb-img').attr('data-pos', pos);
                setImgSrcForce($img, miniaturka[pos]);
                    const $czasLabel = $('<div>')
        .addClass('thumb-czas')
        .text(srcWordsq[pos] || '');
                $img.off('click.thumb').on('click.thumb', function () {
                    const p = Number($(this).attr('data-pos'));
                    if (!Number.isNaN(p)) {
                        currentPos = p;
                        videoVisible = false;
                        renderLesson();
                    }
                });

                const $desc = $('<div>').addClass('thumb-desc').text(thumbDescriptions[pos] || '');

                const linkForThumb = linkMap[dataName] || `demo1angielski.html?category=${selectedCategory}&data=${dataName}`;
                const $link = $('<a>').attr({href: linkForThumb, target: '_blank'}).addClass('thumb-link').text('Otwórz pojedyńczą lekcję');

                $item.append($czasLabel, $img, $desc, $link);
                $thumbContainer.append($item);
            });
            let globalWordIndex = 0; // wszystkie trzy zdania przesuwają się razem
            const wordIndexCache = {};
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

// --- Sprawdzenie cache ---
            if (!sentenceCache[indexDiv][currentPos]) {
                let currentSentenceHtml = "";
                try {
                    // Tutaj dodaj definicje matchingFiszki
                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === currentDataName);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === currentTriplet[1]);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === currentTriplet[2]);
                    if (currentPos === 0 && typeof addBackgroundToText1b === 'function') {
                        const {sentence10, sentence11, sentence10b, sentence11b, sentence10c, sentence11c} = addBackgroundToText1b(
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
                        globalSentence11 = sentence11;
                        globalSentence10b = sentence10b;
                        globalSentence11b = sentence11b;
                        globalSentence10c = sentence10c;
                        globalSentence11c = sentence11c;

                        currentSentenceHtml =
                                (sentence10 || "") +
                                (sentence11 || "") +
                                "<br>" +
                                (sentence10b || "").toUpperCase() +
                                (sentence11b || "").toUpperCase() +
                                "<br>" +
                                (sentence10c || "").toUpperCase() +
                                (sentence11c || "").toUpperCase();
                    } else if (currentPos === 1 && typeof addBackgroundToText2b === 'function') {
                        const {sentence20, sentence22, sentence20b, sentence22b, sentence20c, sentence22c} = addBackgroundToText2b(matchingFiszki2, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

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
                        const {sentence30, sentence33, sentence30b, sentence33b, sentence30c, sentence33c} = addBackgroundToText3b(matchingFiszki3, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

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
                } catch (e) {
                    console.error('Błąd podczas generowania zdań:', e);
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

function syncHighlightForIndexDiv(indexDiv, $block) {

    const currentIndex = wordIndexCache[indexDiv] ?? 0;

    const $spans = $block.find('.sentence-inner span[data-word-index]');

    $spans.removeClass('highlighted');

    const $target = $spans.filter(`[data-word-index="${currentIndex}"]`);

    $target.addClass('highlighted');

    // opcjonalnie: auto scroll do słowa (usuwa "lag feeling")
    if ($target.length) {
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

$(document).on("click", ".next-buttonvv", function () {

    const $line = $(this).closest('.sentence-line');

    const indexDiv = $line.find('.sentence-inner').data('indexdiv');

    if (wordIndexCache[indexDiv] === undefined)
        wordIndexCache[indexDiv] = 0;

    wordIndexCache[indexDiv]++;

    tablica20aa.push(wordIndexCache[indexDiv]);

    console.log('hej120aa', wordIndexCache[indexDiv]);

    // 🔥 znajdź nowe słowo po inkrementacji
    const $nextWord = $line.find(`[data-word-index="${wordIndexCache[indexDiv]}"]`).first();

    if ($nextWord.length) {

        // usuń tylko animacje w tym bloku
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
    }
    // 5. 🔊 DŹWIĘK PIERWSZEGO SŁOWA
    if (fiszka.word && fiszka.word[0]) { /// tutaj chcę podmieniać słowa

        console.log('[audio] playing:', fiszka.word[0]);

        const audio = new Audio(fiszka.word[0]);

        audio.currentTime = 0;
        audio.play().catch(err => {
            console.warn('[audio] blocked or failed:', err);
        });
    }
    syncHighlightForIndexDiv(indexDiv);
});
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

                const indexDiv = $(this).closest('.sentence-line')
                        .find('.sentence-inner')
                        .data('indexdiv');

                if (wordIndexCache[indexDiv] === undefined)
                    wordIndexCache[indexDiv] = 0;

                wordIndexCache[indexDiv]--;
                                    tablica20aa.push(wordIndexCache[indexDiv]); // 2️⃣ zapis historii
console.log('hej120aa', wordIndexCache[indexDiv]);
                syncHighlightForIndexDiv(indexDiv);
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
            window.mojeidGlobal = window.mojeidGlobal || {};
function attachArrowNavigation($sentenceBlock, indexDiv) {

    console.log('attachArrowNavigation start', { indexDiv, hasBlock: !!$sentenceBlock.length });

    if (!$sentenceBlock || $sentenceBlock.length === 0) {
        console.warn('Brak $sentenceBlock dla indexDiv:', indexDiv);
        return;
    }

    let currentWordIndex = 0;

    const updateHighlightAll = () => {

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
                    pronunciationFirstWord = first.slice('wymowa:'.length); // np. EWRYBODY
                    tokens.shift(); // usuń pierwszy token z listy słów do highlightu
                }
            }

            const id = indexDiv + "-" + lineIndex + "-" + currentWordIndex;

const wordsHtml = tokens.map((word, wi) => {

    const cursorStyle = `style="cursor:pointer;"`;

    if (wi === currentWordIndex) {
        return `<span class="highlighted"
                      data-word-index="${wi}"
                      data-mojeid="${id}"
                      ${cursorStyle}>${word}</span>`;
    }

    return `<span data-word-index="${wi}"
                  data-mojeid="${id}"
                  ${cursorStyle}>${word}</span>`;

}).join(" ");
            const pronunciationHtml = pronunciationLabel
                ? `<span class="pronunciation-label">${pronunciationLabel}</span>${pronunciationFirstWord ? ' ' + pronunciationFirstWord : ''} `
                : '';

            $inner.html(pronunciationHtml + wordsHtml);
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
console.log('hej110vv', window.mojeidGlobal);
        window.mojeidGlobalb = currentWordIndex;
        window.mojeidGlobalc = currentWordIndex;

        window.mojeidGlobal2 = indexDiv;
        window.mojeidGlobal3 = currentPos;

        if (window.systemStarted) {
            sendHighlightToFiszki(indexDiv, currentWordIndex);
        }
    };

    $sentenceBlock.find('.next-buttonvv')
        .off('click.attachNav')
        .on('click.attachNav', function (e) {
window.mojeidGlobal.push({
    indexDiv: indexDiv,
    currentWordIndex: currentWordIndex
});
console.log('hej110vv', window.mojeidGlobal)

            const raw = $sentenceBlock
                .find('.sentence-inner')
                .first()
                .text()
                .trim();

            const tokens = raw ? raw.split(/\s+/) : [];


            const wordsCount = tokens.length;

            if (currentWordIndex < wordsCount - 1) {
                currentWordIndex++;
                updateHighlightAll();

            }
            
        });

    $sentenceBlock.find('.prev-buttonvv')
        .off('click.attachNav')
        .on('click.attachNav', function (e) {


            const raw = $sentenceBlock
                .find('.sentence-inner')
                .first()
                .text()
                .trim();

            const tokens = raw ? raw.split(/\s+/) : [];


            const wordsCount = tokens.length;

            if (currentWordIndex < wordsCount - 1) {
                currentWordIndex--;
                updateHighlightAll();
            }
        });

    $sentenceBlock
        .off('click.attachNav', '.sentence-inner span')
        .on('click.attachNav', '.sentence-inner span', function (e) {

            e.stopImmediatePropagation();

            const wi = Number($(this).data('word-index'));
            if (!isNaN(wi)) {
                currentWordIndex = wi;
                                                tablica20aa.push(currentWordIndex); // 2️⃣ zapis historiitablica20aa.push
                console.log('hej12', tablica20aa[tablica20aa.length - 1]);
                updateHighlightAll();
            }
        });

    updateHighlightAll();
}
            $(document).on('mouseenter', '.image-container3b', function () {

    const $block = $(this);

    console.log('[mouseenter] ENTER image-container3b');

    // 🔥 znajdź aktualnie highlighted słowo
    let $target = $block.find('.highlighted').first();

    console.log('[mouseenter] highlighted found?', $target.length > 0);

    // fallback jeśli brak highlighted
    if (!$target.length) {
        console.warn('[mouseenter] NO highlighted -> fallback to data-word-index=0');
        $target = $block.find('[data-word-index="0"]').first();
    }

    if (!$target.length) {
        console.error('[mouseenter] ❌ NO TARGET WORD FOUND');
        return;
    }

    console.log('[mouseenter] target word:', $target.text());

    // usuń poprzednie animacje globalnie
    $('.word-animation').remove();

    // dodaj animację
    $target.css({
        position: 'relative',
        display: 'inline-block'
    });

    console.log('[mouseenter] adding animation to word index =',
        $target.attr('data-word-index')
    );

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
    // 5. 🔊 DŹWIĘK PIERWSZEGO SŁOWA
    if (fiszka.word && fiszka.word[0]) {

        console.log('[audio] playing:', fiszka.word[0]);

        const audio = new Audio(fiszka.word[0]);

        audio.currentTime = 0;
        audio.play().catch(err => {
            console.warn('[audio] blocked or failed:', err);
        });
    }
    console.log('[mouseenter] ✅ animation restored');
});
            function sendHighlightToFiszki(indexDiv, mojeidGlobal) {
                highlightFirstWord(indexDiv, currentPosCache[indexDiv], mojeidGlobal);
            }
            highlightFirstWordsInSentenceBlock($sentenceDiv);
            attachArrowNavigation($sentenceDiv, indexDiv);

            // --- Linki do lekcji ---
            const singleLink = `demo1angielski.html?category=${selectedCategory}&data=${currentDataName}`;
            const tripletLink = `demo1angielski.html?category=${selectedCategory}&data=${currentTriplet.join(',')}`;

            const $singleLinkA = $('<a>')
                    .attr({href: singleLink})
                    .addClass('text-link')
                    .text('➡ Otwórz lekcję z wybranym zdaniem');

            const $tripletLinkA = $('<a>')
                    .attr({href: tripletLink})
                    .addClass('text-link')
                    .text('➡ Otwórz całą lekcję (3 zdania)');

            $textContainer.append($singleLinkA, $tripletLinkA);

const $nav = $('<div>').addClass('nav-buttons');

// ← strzałka
const $left = $('<button>').text('←').on('click', () => {
    currentPos = (currentPos - 1 + currentTriplet.length) % currentTriplet.length;
    videoVisible = false;
    renderLesson();
});

$nav.append($left);

// 🔢 przyciski lekcji (1 / 2 / 3 – zależne od indexDiv)
currentTriplet.forEach((lessonIndexDiv, i) => {
    const $btn = $('<button>')
        .addClass('lesson-indicator')
        .toggleClass('active', i === currentPos)
        .text(lessonIndexDiv) // ← tu masz cyfrę zależną od indexDiv
        .on('click', () => {
            currentPos = i;
            videoVisible = false;
            renderLesson();
        });

    $nav.append($btn);
});

// → strzałka
const $right = $('<button>').text('→').on('click', () => {
    currentPos = (currentPos + 1) % currentTriplet.length;
    videoVisible = false;
    renderLesson();
});

$nav.append($right);

            $container.append($mediaContainer, $textContainer, $nav);
        }
        
        $('body').off('click', '.run-icon').on('click', '.run-icon', function () {
            const indexDiv = $(this).attr('data-index2');
            const link = linkMap[indexDiv] || `demo1angielski.html?category=${selectedCategory}&data=${indexDiv}`;
            window.open(link, '_blank');
        });

// ---------- STARTUP: synchronizacja trojek, linkMap i ustawienia currentTriplet ----------
        function startup() {
            // najpierw wypełnij tablica60, trojkiGlobal i linkMap
            updateButtonColors();

            // spróbuj odczytać parametry z URL
            const parsed = parseDataParamFromURL();
            if (parsed && parsed.length > 0) {
                if (parsed.length === 1) {
                    // pojedynczy numer - spróbuj odnaleźć odpowiadającą trójkę
                    // jeśli trojkiGlobal jest pusty (np. updateButtonColors jeszcze nie wrócił) - poczekaj krótko
                    if (trojkiGlobal.length === 0) {
                        // odczekaj i spróbuj ponownie
                        setTimeout(() => {
                            if (!chooseTripletFromSingleNumber(parsed[0])) {
                                // fallback: ustaw pojedynczy numer jako trójkę z nim samym
                                currentTriplet = [parsed[0]];
                                currentPos = 0;
                            }
                            renderLesson();
                        }, 60);
                        return;
                    } else {
                        if (!chooseTripletFromSingleNumber(parsed[0])) {
                            currentTriplet = [parsed[0]];
                            currentPos = 0;
                        }
                    }
                } else {
                    // jeżeli mamy już listę (np. 5,6,7) -> ustaw currentTriplet bezpośrednio
                    currentTriplet = parsed.slice();
                    currentPos = 0;
                }
            } else {
                // brak parametru w URL -> użyj pierwszej trojki (jeśli jest), inaczej fallback
                if (trojkiGlobal.length > 0) {
                    currentTriplet = trojkiGlobal[0].slice();
                    currentPos = 0;
                } else {
                    // fallback: zwykła sekwencja 0..miniaturka.length-1
                    currentTriplet = miniaturka.map((_, i) => i);
                    currentPos = 0;
                }
            }

            // render initial
            renderLesson(); ///tutaj jest wywoływane renderLesson
        }