
            let tablica12ab2 = [];
            let tablica12ad2 = [];
            let tablica12abc2 = [];
            const kliknieciaHistoria = []; // [przedostatnie, ostatnie]
        function showCombinedSentenceForLesson22b(
            selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
            buttonindex, index55, index77, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes,
            startIndex, newIndex, indexDiv,
            lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences,
            lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
            lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
            cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
            lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
        ) {

                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej444', newIndex);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';
                if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {

                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                                        const srcWord1a = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    const srcWord1d = pobierzSrcWordDlaLekcji4(lessonIdToShow1, fiszki);
                                        const srcWord1f = pobierzSrcWordDlaLekcji5(lessonIdToShow1, fiszki);
                                                                                const srcWord1v = pobierzSrcWordDlaLekcji6(lessonIdToShow1, fiszki);
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                    const srcWord2a = pobierzSrcWordDlaLekcji2(lessonIdToShow2, fiszki);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                    const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki);
                                        const srcWord2f = pobierzSrcWordDlaLekcji5(lessonIdToShow2, fiszki);
                                        const srcWord2v = pobierzSrcWordDlaLekcji6(lessonIdToShow2, fiszki);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                    const srcWord3a = pobierzSrcWordDlaLekcji2(lessonIdToShow3, fiszki);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                    const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki);
                                        const srcWord3f = pobierzSrcWordDlaLekcji5(lessonIdToShow3, fiszki);
                                        const srcWord3v = pobierzSrcWordDlaLekcji6(lessonIdToShow3, fiszki);
                    const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                    function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[0] : null;
                    }
                    function pobierzSrcWordDlaLekcji2(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                                        function pobierzSrcWordDlaLekcji3(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
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

let sentence10 = "", sentence11 = "", sentence10b = "", sentence11b = "";
function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {


    for (let i = 0; i < matchingFiszki1.length; i++) {
        const fiszka = matchingFiszki1[i];
        if (!fiszka.sentence1) continue;

        for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
            let sentencePart = fiszka.sentence1[ki];
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
        if (!fiszka.sentence2) continue;

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
    
        for (let i = 0; i < matchingFiszki1.length; i++) {
        const fiszka = matchingFiszki1[i];
        if (!fiszka.sentence1b) continue;

        for (let ki = 0; ki < fiszka.sentence1b.length; ki++) {
            let sentencePart = fiszka.sentence1b[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence10b += sentencePart + " ";
        }
    }

    for (let i = 0; i < matchingFiszki1.length; i++) {
        const fiszka = matchingFiszki1[i];
        if (!fiszka.sentence2b) continue;

        for (let ki = 0; ki < fiszka.sentence2b.length; ki++) {
            let sentencePart2 = fiszka.sentence2b[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence11b += sentencePart2 + " ";
        }
    }

return { sentence10, sentence11, sentence10b, sentence11b };
}

let sentence20 = "", sentence22 = "", sentence20b = "", sentence22b = "";
                    function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {


    for (let j = 0; j < matchingFiszki2.length; j++) {
        const fiszka = matchingFiszki2[j];
        if (!fiszka.sentence1) continue;

        for (let k = 0; k < fiszka.sentence1.length; k++) {
            let sentencePart = fiszka.sentence1[k];
            const indexToCheck = j + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence20 += sentencePart + " ";
        }
    }

    for (let i = 0; i < matchingFiszki2.length; i++) {
        const fiszka = matchingFiszki2[i];
        if (!fiszka.sentence2) continue;

        for (let ki = 0; ki < fiszka.sentence2.length; ki++) {
            let sentencePart2 = fiszka.sentence2[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence22 += sentencePart2 + " ";
        }
    }
    
            for (let i = 0; i < matchingFiszki2.length; i++) {
        const fiszka = matchingFiszki2[i];
        if (!fiszka.sentence1b) continue;

        for (let ki = 0; ki < fiszka.sentence1b.length; ki++) {
            let sentencePartb = fiszka.sentence1b[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence20b += sentencePartb + " ";
        }
    }

    for (let i = 0; i < matchingFiszki2.length; i++) {
        const fiszka = matchingFiszki2[i];
        if (!fiszka.sentence2b) continue;

        for (let ki = 0; ki < fiszka.sentence2b.length; ki++) {
            let sentencePart2b = fiszka.sentence2b[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence22b += sentencePart2b + " ";
        }
    }
    return { sentence20, sentence22, sentence20b, sentence22b };
}
let sentence30 = "", sentence33 = "", sentence30b = "", sentence33b = "";
                    function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {


    for (let j = 0; j < matchingFiszki3.length; j++) {
        const fiszka = matchingFiszki3[j];
        if (!fiszka.sentence1) continue;

        for (let k = 0; k < fiszka.sentence1.length; k++) {
            let sentencePart = fiszka.sentence1[k];
            const indexToCheck = j + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence30 += sentencePart + " ";
        }
    }

    for (let i = 0; i < matchingFiszki3.length; i++) {
        const fiszka = matchingFiszki3[i];
        if (!fiszka.sentence2) continue;

        for (let ki = 0; ki < fiszka.sentence2.length; ki++) {
            let sentencePart2 = fiszka.sentence2[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence33 += sentencePart2 + " ";
        }
    }
    
            for (let i = 0; i < matchingFiszki3.length; i++) {
        const fiszka = matchingFiszki3[i];
        if (!fiszka.sentence1b) continue;

        for (let ki = 0; ki < fiszka.sentence1b.length; ki++) {
            let sentencePartb = fiszka.sentence1b[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence30b += sentencePartb + " ";
        }
    }

    for (let i = 0; i < matchingFiszki3.length; i++) {
        const fiszka = matchingFiszki3[i];
        if (!fiszka.sentence2b) continue;

        for (let ki = 0; ki < fiszka.sentence2b.length; ki++) {
            let sentencePart3b = fiszka.sentence2b[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence33b += sentencePart3b + " ";
        }
    }
    return { sentence30, sentence33, sentence30b, sentence33b };
}


                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container3b'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    $('.grid-container').append($container);
                    
const observer = new MutationObserver(() => {
  // 🔹 Szukamy kontenerów powiązanych z indexDiv0b
  const container3b    = document.querySelector(`.image-container3b[data-lesson="${index77 + 1}"]`);
  const container3bCur = document.querySelector(`.image-container3b[data-lesson="${index77}"]`);
  // --- pierwszy warunek: indexDiv0b ---
  if (container3b && container3bCur) {
    container3bCur.parentNode.insertBefore(container3bCur, container3b);
    console.log(`✅ Wstawiono5 container3 (data-lesson=${index77}) przed container3b (data-lesson=${index77 + 1})`);

    console.log(`🗑️ Usunięto container3b o data-lesson=${index77}`);

    observer.disconnect();
    return;
  }
});

// obserwuj cały body i wszystkie poddrzewa
observer.observe(document.body, { childList: true, subtree: true });
// --- TABLICE ---
const srcWords = [srcWord1, srcWord2, srcWord3];        // linki do wideo odpowiadają pozycji 0..2
const srcWordsb = [srcWord1v, srcWord2v, srcWord3v];
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



// ---------- STYLE (dodawane raz) ----------
if ($('#lessonContainer-style').length === 0) {
  $('<style id="lessonContainer-style">').text(`
    .media-container { position: relative; width: 100%; margin-bottom: 10px; }
    .preview-img { width:100%; border-radius:15px; display:block; cursor:pointer; }
    .thumb-row { display:flex; justify-content:center; gap:10px; margin-top:-40px; position: relative; z-index: 2; }
    .thumb-item { display:flex; flex-direction:column; align-items:center; cursor:pointer; width:70px; transition: transform 0.2s ease, filter 0.2s ease; }
    .thumb-img { width:70px; height:auto; border:2px solid white; border-radius:10px; box-shadow:0 2px 6px rgba(0,0,0,0.3); filter: brightness(0.85); transition: all 0.18s ease; }
    .thumb-desc { font-size:0.75rem; color:#ccc; text-align:center; margin-top:3px; filter: brightness(0.85); transition: all 0.18s ease; }
    .thumb-item:hover .thumb-img, .thumb-item:hover .thumb-desc { transform: scale(1.05); filter: brightness(1); }
    .thumb-item.activeItem .thumb-img, .thumb-item.activeItem .thumb-desc { border:3px solid limegreen; transform: scale(1.07); filter: brightness(1); }
    .thumb-link { font-size:0.72rem; color:#66ccff; text-align:center; margin-top:4px; text-decoration:underline; display:block; }
    .text-block { font-size:13px; color:white; text-align:center; line-height:1.6; margin-top:8px; }
    .text-link { display:block; margin-top:8px; color:#00bfff; text-decoration:underline; font-size:0.9rem; }
    .nav-buttons { display:flex; justify-content:center; gap:20px; margin-top:10px; }
  `).appendTo('head');
}

// ---------- HELPER: wymuszenie zmiany src obrazka ----------
function setImgSrcForce($img, src) {
  if (!$img || !$img.length) return;
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
  for (let key in linkMap) delete linkMap[key];

  const color = (typeof colorMapping !== 'undefined' && colorMapping[selectedCategory])
    ? colorMapping[selectedCategory]
    : '#800080';

  document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
    const raw = block.getAttribute('data-name');
    const dataName = parseInt(raw, 10);
    if (!Number.isNaN(dataName)) tablica60.push(dataName);

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
  if (lessonLink) window.open(lessonLink, '_blank');
});

// ---------- FUNKCJE POMOCNICZE: Parsowanie parametru data z URL ----------
function parseDataParamFromURL() {
  if (typeof window === 'undefined') return null;
  const dataParam = new URLSearchParams(window.location.search).get('data');
  if (!dataParam) return null;
  const parts = dataParam.split(',').map(s => parseInt(s, 10)).filter(n => !Number.isNaN(n));
  if (parts.length === 0) return null;
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

function renderLesson() {
    $container.empty();

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

    if (currentPos < 0 || currentPos >= currentTriplet.length) currentPos = 0;

    const currentDataName = currentTriplet[currentPos];

    // --- Dopasowanie fiszek do trójki ---
    const id1 = currentTriplet[0];
    const id2 = currentTriplet[1];
    const id3 = currentTriplet[2];

    const matchingFiszki1 = fiszki.filter(f => f.id[1] === id1);
    const matchingFiszki2 = fiszki.filter(f => f.id[1] === id2);
    const matchingFiszki3 = fiszki.filter(f => f.id[1] === id3);

    const matchingIndexes = [];
    const matchingIndexes2 = [];
    const matchingIndexes3 = [];
    const matchingLessons5b = [];

    const fiszka = sentences[currentPos] || {};

    // --- Duża miniaturka / wideo ---
    const $mediaContainer = $('<div>').addClass('media-container');
    let $media;
    const previewImgSrc = miniaturka[currentPos];
    const videoSrc = srcWords[currentPos];

    if (videoVisible && videoSrc) {
        $media = $('<video>')
            .attr({ src: videoSrc, controls: true, autoplay: true })
            .css({ width: '100%', borderRadius: '15px', display: 'block' })
            .on('ended', () => { videoVisible = false; renderLesson(); });
    } else {
        $media = $('<img>').addClass('preview-img');
        setImgSrcForce($media, previewImgSrc);
        $media.off('click.preview').on('click.preview', () => { videoVisible = true; renderLesson(); });
    }
    $mediaContainer.append($media);

    // --- Pasek miniatur ---
    const $thumbContainer = $('<div>').addClass('thumb-row');
    currentTriplet.forEach((dataName, pos) => {
        const $item = $('<div>').addClass('thumb-item');
        if (pos === currentPos) $item.addClass('activeItem');

        const $img = $('<img>').addClass('thumb-img').attr('data-pos', pos);
        setImgSrcForce($img, miniaturka[pos]);
        $img.off('click.thumb').on('click.thumb', function () {
            const p = Number($(this).attr('data-pos'));
            if (!Number.isNaN(p)) { currentPos = p; videoVisible = false; renderLesson(); }
        });

        const $desc = $('<div>').addClass('thumb-desc').text(thumbDescriptions[pos] || '');

        const linkForThumb = linkMap[dataName] || `demo1angielski.html?category=${selectedCategory}&data=${dataName}`;
        const $link = $('<a>').attr({ href: linkForThumb, target: '_blank' }).addClass('thumb-link').text('Otwórz pojedyńczą lekcję');

        $item.append($img, $desc, $link);
        $thumbContainer.append($item);
    });
    $mediaContainer.append($thumbContainer);

    // --- Tekst / fiszka ---
    const $textContainer = $('<div>').addClass('text-block');
     // --- Sprawdzenie cache ---
    if (!sentenceCache[currentPos]) {
        let currentSentenceHtml = "";
        try {
if (currentPos === 0 && typeof addBackgroundToText1b === 'function') {
    const { sentence10, sentence11, sentence10b, sentence11b } =
        addBackgroundToText1b(matchingFiszki1, matchingIndexes, currentPos, 0,
                              matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

    currentSentenceHtml = `
        <div class="sentence-pair">
            <div class="sentence-main">
                ${sentence10 || ""}
                ${sentence11 || ""}
            </div>
            <div class="sentence-sub">
                ${(sentence10b || "").toUpperCase()}
                ${(sentence11b || "").toUpperCase()}
            </div>
        </div>
    `;
} else if (currentPos === 1 && typeof addBackgroundToText2b === 'function') {
    const { sentence20, sentence22, sentence20b, sentence22b } =
        addBackgroundToText2b(matchingFiszki2, matchingIndexes, currentPos, 0,
                              matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

    currentSentenceHtml = `
        <div class="sentence-pair">
            <div class="sentence-main">
                ${sentence20 || ""}
                ${sentence22 || ""}
            </div>
            <div class="sentence-sub">
                ${(sentence20b || "").toUpperCase()}
                ${(sentence22b || "").toUpperCase()}
            </div>
        </div>
    `;
} else if (currentPos === 2 && typeof addBackgroundToText3b === 'function') {
    const { sentence30, sentence33, sentence30b, sentence33b } =
        addBackgroundToText3b(matchingFiszki3, matchingIndexes, currentPos, 0,
                              matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

    currentSentenceHtml = `
        <div class="sentence-pair">
            <div class="sentence-main">
                ${sentence30 || ""}
                ${sentence33 || ""}
            </div>
            <div class="sentence-sub">
                ${(sentence30b || "").toUpperCase()}
                ${(sentence33b || "").toUpperCase()}
            </div>
        </div>
    `;
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

    const $sentenceDiv = $('<div>').addClass('sentence-block').html(sentenceCache[currentPos]);
    $textContainer.append($sentenceDiv);

    // --- Linki do lekcji ---
    const singleLink = `demo1angielski.html?category=${selectedCategory}&data=${currentDataName}`;
const tripletLink = `demo1angielski.html?category=${selectedCategory}&data=${currentTriplet.join(',')}`;

const $singleLinkA = $('<a>')
  .attr({ href: singleLink, target: '_blank', rel: 'noopener noreferrer' })
  .addClass('text-link')
  .text('➡ Otwórz lekcję z wybranym zdaniem');

const $tripletLinkA = $('<a>')
  .attr({ href: tripletLink, target: '_blank', rel: 'noopener noreferrer' })
  .addClass('text-link')
  .text('➡ Otwórz całą lekcję (3 zdania)');

$textContainer.append($singleLinkA, $tripletLinkA);

    // --- Nawigacja w obrębie trójki ---
    const $nav = $('<div>').addClass('nav-buttons');
    const $left = $('<button>').text('←').on('click', () => {
        currentPos = (currentPos - 1 + currentTriplet.length) % currentTriplet.length;
        videoVisible = false;
        renderLesson();
    });
    const $right = $('<button>').text('→').on('click', () => {
        currentPos = (currentPos + 1) % currentTriplet.length;
        videoVisible = false;
        renderLesson();
    });
    $nav.append($left, $right);

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

  // dodaj run icons (jeśli chcesz)
  setTimeout(addRunIconsForVisible, 50);
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
</div>

<div class="sentence-block" data-name="${id2}">
    ${sentence20}${sentence22}<br>
            ${sentence20b}${sentence22b}<br>
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
    'right': '-200px',       // Dopasuj pozycję według potrzeb
    'top': '5px',
    'font-size': '10px',
    'height': '30px',
    'width': '170px',
    'color': 'blue',
    'background-color': 'white',
    'z-index': '12',         // Wyższy niż inne elementy
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