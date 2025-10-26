
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

let sentence10 = "", sentence11 = "", sentence10b = "", sentence11b = "", sentence10c = "", sentence11c = "";
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
    
            for (let i = 0; i < matchingFiszki1.length; i++) {
        const fiszka = matchingFiszki1[i];
        if (!fiszka.sentence1c) continue;

        for (let ki = 0; ki < fiszka.sentence1c.length; ki++) {
            let sentencePart = fiszka.sentence1c[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence10c += sentencePart + " ";
        }
    }

    for (let i = 0; i < matchingFiszki1.length; i++) {
        const fiszka = matchingFiszki1[i];
        if (!fiszka.sentence2c) continue;

        for (let ki = 0; ki < fiszka.sentence2c.length; ki++) {
            let sentencePart2 = fiszka.sentence2c[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence11c += sentencePart2 + " ";
        }
    }

return { sentence10, sentence11, sentence10b, sentence11b, sentence10c, sentence11c };
}

let sentence20 = "", sentence22 = "", sentence20b = "", sentence22b = "", sentence20c = "", sentence22c = "";
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
                for (let i = 0; i < matchingFiszki2.length; i++) {
        const fiszka = matchingFiszki2[i];
        if (!fiszka.sentence1c) continue;

        for (let ki = 0; ki < fiszka.sentence1c.length; ki++) {
            let sentencePartb = fiszka.sentence1c[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence20c += sentencePartb + " ";
        }
    }

    for (let i = 0; i < matchingFiszki2.length; i++) {
        const fiszka = matchingFiszki2[i];
        if (!fiszka.sentence2c) continue;

        for (let ki = 0; ki < fiszka.sentence2c.length; ki++) {
            let sentencePart2b = fiszka.sentence2c[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence22c += sentencePart2b + " ";
        }
    }
    return { sentence20, sentence22, sentence20b, sentence22b, sentence20c, sentence22c };
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
    .media-container { position: relative; height: 310px; width: 100%; margin-bottom: 10px; }
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
let globalSentence10 = "", globalSentence11 = "", globalSentence10b = "", globalSentence11b = "", globalSentence10c = "", globalSentence11c = "";
let globalSentence20 = "", globalSentence22 = "", globalSentence20b = "", globalSentence22b = "", globalSentence20c = "", globalSentence22c = "";
function renderLesson(matchingFiszki1, matchingFiszki2) {

    $container.empty();
    $('.image-container3b .sentence').css('display', 'none');
    if (matchingFiszki1.length > 0) {
        console.log('Zawartość kontenera5:', matchingFiszki1);
    }
                                const $buttonb = $('<img>').attr({
                                'src': 'https://www.arbulang.com/img/startsystem.png', // WzglÄdna ĹcieĹźka do pliku PNG
                                'class': 'overlay-button' // Klasa dla stylĂłw CSS
                            });
                                                        $buttonb.appendTo($container);
// ObsĹuga klikniÄcia przycisku overlay
                            $buttonb.on('click', function () {

    $('.run-button3').css({
        'margin-top': '65px'
    });
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

                                console.log('hej55h', ostatniElement3);
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

                                // UtwĂłrz nowy przycisk "Szybka lekcja"
                                const $loadButton = $('<button>')
                                        .text('Szybka lekcja')
                                        .addClass('slide-button')
                                        .on('click', function () {
                                            // PÄtla po wszystkich elementach wideo i zatrzymywanie kaĹźdego z nich
                                            $('video').each(function () {
                                                const video = $(this).get(0); // Pobiera element wideo jako obiekt DOM
                                                if (video && !video.paused) {
                                                    video.pause();
                                                }
                                            });
                                        });
                                // Funkcja zatrzymujÄca wszystkie wideo w activeVideos

                                $loadButton.css({
                                    'position': 'absolute',
                                    'bottom': '10px',
                                    'right': '30px', // PoczÄtkowa pozycja przycisku na prawo od kontenera
                                    'width': '120px', // SzerokoĹÄ przycisku
                                    'height': '30px',
                                    'cursor': 'pointer',
                                    'border-radius': '8px',
                                    'background-color': 'green', // Kolor przycisku
                                    'color': 'white',
                                    'display': 'block', // Pokazuje przycisk od razu
                                    'z-index': '1000001', // Z-index wiÄkszy niĹź startsystem
                                    'text-align': 'left', // WyrĂłwnanie tekstu do lewej (jeĹli to potrzebne)
                                    'overflow': 'hidden' // Ukrywa nadmiar tekstu
                                }).appendTo($container); // Dodaj do kontenera

                                // Animacja: zwijanie przycisku "Szybka lekcja" w lewo
                                $loadButton.animate({
                                    width: '0px', // Zmniejszenie szerokoĹci do 0
                                    right: '10px'
                                }, {
                                    duration: 1500, // Czas trwania animacji
                                    complete: function () {
                                        $(this).remove(); // Opcjonalnie: usuĹ przycisk po zakoĹczeniu animacji
                                    }
                                });
                                // UtwĂłrz nowy przycisk "Szybka lekcja"
                                const $newButton = $('<button>').text('Wybierz sĹowo').addClass('slide-button');
                                $newButton.css({
                                    'position': 'absolute',
                                    'bottom': '35px',
                                    'right': '30px',
                                    'width': '120px',
                                    'height': '30px',
                                    'cursor': 'pointer',
                                    'border-radius': '8px',
                                    'background-color': 'blue',
                                    'color': 'white',
                                    'display': 'block',
                                    'z-index': '1000000' // Bardzo wysoki z-index, aby byĹ nad innymi elementami
                                });
                                $newButton.appendTo($container);

                                // Animacja: chowanie przycisku "Szybka lekcja" w lewo
                                $newButton.animate({
                                    right: '-110px'
                                }, 500, function () {
                                    console.log('Szybka lekcja button hidden');
                                });
                                // SprawdĹş, czy kontener ma odpowiedni z-index i position
                                $container.css({
                                    'position': 'relative', // Ustawienie position na relative, aby z-index dziaĹaĹ
                                    'z-index': '1000003'
                                });

    if (currentPos === 0) {
        highlightFirstWord(indexDiv);
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


function highlightFirstWord(indexDiv) {
    const $container = $(`.image-container3b[data-lesson="${indexDiv}"]`);
    $(`.image-container3b`).css('z-index', 100); 
    $container.css('z-index', 102); 

    console.log('Zawartość kontenera:', matchingFiszki1);

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
    let [firstWord3, secondWord3, thirdWord3, forthWord3, fifthWord3, sixthWord3] = words3.map(w => (w || ''));

    // --- Highlightowane wersje ---
    let highlightedSpan  = `<span class="highlighted">${firstWord}</span>`;
    let highlightedSpan2 = `<span class="highlighted" style="display:none;">${secondWord}</span>`;
    let highlightedSpan3 = `<span class="highlighted" style="display:none;">${thirdWord}</span>`;
    let highlightedSpan4 = `<span class="highlighted" style="display:none;">${forthWord}</span>`;
    let highlightedSpan5 = `<span class="highlighted" style="display:none;">${fifthWord}</span>`;
    let highlightedSpan6 = `<span class="highlighted" style="display:none;">${sixthWord}</span>`;

    let highlightedSpan2b = `<span class="highlighted">${firstWord2}</span>`;
    let highlightedSpan22 = `<span class="highlighted" style="display:none;">${secondWord2}</span>`;
    let highlightedSpan33 = `<span class="highlighted" style="display:none;">${thirdWord2}</span>`;
    let highlightedSpan44 = `<span class="highlighted" style="display:none;">${forthWord2}</span>`;
    let highlightedSpan55 = `<span class="highlighted" style="display:none;">${fifthWord2}</span>`;
    let highlightedSpan66 = `<span class="highlighted" style="display:none;">${sixthWord2}</span>`;

    let highlightedSpan3b = `<span class="highlighted">${firstWord3}</span>`;
    let highlightedSpan22b = `<span class="highlighted" style="display:none;">${secondWord3}</span>`;
    let highlightedSpan33b = `<span class="highlighted" style="display:none;">${thirdWord3}</span>`;
    let highlightedSpan44b = `<span class="highlighted" style="display:none;">${forthWord3}</span>`;
    let highlightedSpan55b = `<span class="highlighted" style="display:none;">${fifthWord3}</span>`;
    let highlightedSpan66b = `<span class="highlighted" style="display:none;">${sixthWord3}</span>`;

// --- LINIA 1 ---
let button1 = `<button class="prev-button prev-button1">&lt;</button>`;
let button2 = `<button class="next-button next-button1">&gt;</button>`;

// --- LINIA 2 ---
let button1b = `<button class="prev-button prev-button2">&lt;</button>`;
let button2b = `<button class="next-button next-button2">&gt;</button>`;

// --- LINIA 3 ---
let button1c = `<button class="prev-button prev-button3">&lt;</button>`;
let button2c = `<button class="next-button next-button3">&gt;</button>`;

// --- LINIA 1 ---
$sentence10.html(`
    ${button1} 
    <span class="word-span" style="cursor: pointer;">${highlightedSpan}</span> 
    <span class="word-span" style="cursor: pointer;">${secondWord}</span> 
    <span class="word-span" style="cursor: pointer;">${thirdWord}</span> 
    <span class="word-span" style="cursor: pointer;">${forthWord}</span> 
    <span class="word-span" style="cursor: pointer;">${fifthWord}</span> 
    <span class="word-span" style="cursor: pointer;">${sixthWord}</span>
    ${button2}
    <br>
`);

// --- LINIA 2 ---
$sentence10b.html(`
    ${button1b} 
    <span class="word-span2" style="cursor: pointer;">${highlightedSpan2b}</span> 
    <span class="word-span2" style="cursor: pointer;">${secondWord2}</span> 
    <span class="word-span2" style="cursor: pointer;">${thirdWord2}</span> 
    <span class="word-span2" style="cursor: pointer;">${forthWord2}</span> 
    <span class="word-span2" style="cursor: pointer;">${fifthWord2}</span> 
    <span class="word-span2" style="cursor: pointer;">${sixthWord2}</span>
    ${button2b}
    <br>
`);

// --- LINIA 3 ---
$sentence10c.html(`
    ${button1c} 
    <span class="word-span3" style="cursor: pointer;">${highlightedSpan3b}</span> 
    <span class="word-span3" style="cursor: pointer;">${secondWord3}</span> 
    <span class="word-span3" style="cursor: pointer;">${thirdWord3}</span> 
    <span class="word-span3" style="cursor: pointer;">${forthWord3}</span> 
    <span class="word-span3" style="cursor: pointer;">${fifthWord3}</span> 
    <span class="word-span3" style="cursor: pointer;">${sixthWord3}</span>
    ${button2c}
    <br>
`);

$("<style>")
  .prop("type", "text/css")
  .html(".word-span:hover { background-color: #2ecc71; }")
  .appendTo("head");
  $("<style>")
  .prop("type", "text/css")
  .html(".word-span2:hover { background-color: #2ecc71; }")
  .appendTo("head");
    $("<style>")
  .prop("type", "text/css")
  .html(".word-span3:hover { background-color: #2ecc71; }")
  .appendTo("head");
                            updateHighlight(
            indexDiv, $sentence10, 0, // startowe podświetlenie = pierwsze słowo
            firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord
        );    
                        let currentWordIndex = 0; // Indeks sĹowa, ktĂłre ma byÄ wyĹwietlane

// Funkcja obsĹugujÄca klikniÄcia na sĹowa, przyjmujÄca clickedIndex
function handleWordClick(clickedIndex, indexDiv, matchingFiszki1) {
    console.log("Przekazano clickedIndex:", clickedIndex);

    // PodĹwietlenie klikniÄtego sĹowa na staĹe
    $('.word-span').removeClass('highlighted');
    $('.word-span').eq(clickedIndex).addClass('highlighted'); // PodĹwietlenie wedĹug clickedIndex
        // PodĹwietlenie klikniÄtego sĹowa na staĹe
    $('.word-span2').removeClass('highlighted');
    $('.word-span2').eq(clickedIndex).addClass('highlighted'); // PodĹwietlenie wedĹug clickedIndex
        $('.word-span3').removeClass('highlighted');
    $('.word-span3').eq(clickedIndex).addClass('highlighted'); // PodĹwietlenie wedĹug clickedIndex

    // Zaktualizuj currentHighlightIndex na clickedIndex
    currentHighlightIndex = clickedIndex;
    console.log("Aktualny indeks podĹwietlenia:", currentHighlightIndex);

    // WywoĹaj funkcjÄ wyĹwietlania fiszek
    showFiszkiForLesson5(indexDiv, fiszki, clickedIndex, matchingFiszki1);

}
                        const $wordContainer = $('<div>').attr('id', 'wordDisplay').css({
                        }).appendTo($container);
                        let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55', ostatniElement2);
    // SprawdĹş, czy element 'wordDisplay' juĹź istnieje
// SprawdĹş, czy element 'wordDisplay' juĹź istnieje w odpowiednim kontenerze
if (ostatniElement2) {
    // ZnajdĹş kontener na podstawie data-lesson
    const $container = $(`.image-container3b[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // JeĹli 'wordDisplay' istnieje, wykonaj coĹ z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay:', $wordContainer);
        
        // Tutaj moĹźesz wykonaÄ akcje na $wordContainer, np. przesuniÄcie
        $wordContainer.css({
            'right': '0px', // PrzesuĹ w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
} else {
    console.log('Brak ostatniego elementu w tablica11b');
}

// ObsĹuga klikniÄcia na indexDiv
$('.indexDiv').on('click', function () {
    const indexDiv = $(this).data('lesson'); // Pobierz atrybut data-lesson dla klikniÄtego indexDiv
    handleIndexDivClick(indexDiv); // WywoĹaj funkcjÄ przesuwania 'wordDisplay'
});
                        const $currentWordDisplay = $('<span>').appendTo($wordContainer);
    function updateWordDisplay2(currentWordIndex) {
        let fiszka = matchingFiszki1[currentFiszkaIndex];
        console.log('hej11', fiszka);
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
// Deklaracja clickedIndex jako zmiennej globalnej
let clickedIndex;

// Dodanie zdarzenia click
$(document).on('click', '.word-span', function() {
    const clickedWord = $(this).text();
    console.log("KlikniÄto:", clickedWord);

    // Ustalanie clickedIndex dla klikniÄtego sĹowa
    clickedIndex = words.indexOf(clickedWord);
    console.log('hej341', clickedIndex);
    updateHighlight($sentence10, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    // WywoĹanie handleWordClick z clickedIndex
    handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
});
function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);

if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki1.length) {

        // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
        const fiszka = matchingFiszki1[currentFiszkaIndex];
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
        

    }
    return fiszkaBlock;
}

let currentHighlightIndex = 0; // Indeks podĹwietlenia

let displayWordsIndex = 0; // Indeks do wyĹwietlania sĹĂłw (moĹźna dostosowaÄ w zaleĹźnoĹci od wymagaĹ)


// ObsĹuga klikniÄcia na "next"
function handleNextClick(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // SprawdĹş, czy moĹźemy zwiÄkszyÄ indeks podĹwietlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex++;

        }
function handleNextClick2(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // SprawdĹş, czy moĹźemy zwiÄkszyÄ indeks podĹwietlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex--;

        }


function updateHighlight(indexDiv, $sentence10, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    const words = [firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord];
    const words2 = [firstWord2, secondWord2, thirdWord2, forthWord2, fifthWord2, sixthWord2];
    const words3 = [firstWord3, secondWord3, thirdWord3, forthWord3, fifthWord3, sixthWord3];

    // --- Główna linia słów
    const highlightedWords = words.map((word, i) => 
        `<span class="word-span${i === index ? ' highlighted' : ''}" data-index="${i}" style="cursor: pointer;">${word}</span>`
    );

    // --- Druga linia
    const highlightedWords2 = words2.map((word, i) => 
        `<span class="word-span2${i === index ? ' highlighted' : ''}" data-index="${i}" style="cursor: pointer;">${word}</span>`
    );

    // --- Trzecia linia
    const highlightedWords3 = words3.map((word, i) => 
        `<span class="word-span3${i === index ? ' highlighted' : ''}" data-index="${i}" style="cursor: pointer;">${word}</span>`
    );

    // --- HTML z przyciskami (z unikalnymi klasami!)
    $sentence10.html(`
        <div class="sentence-line">
            <button class="prev-button prev-button1">&lt;</button>
            ${highlightedWords.join(' ')}
            <button class="next-button next-button1">&gt;</button>
        </div>
        <div class="sentence-line">
            <button class="prev-button prev-button2">&lt;</button>
            ${highlightedWords2.join(' ')}
            <button class="next-button next-button2">&gt;</button>
        </div>
        <div class="sentence-line">
            <button class="prev-button prev-button3">&lt;</button>
            ${highlightedWords3.join(' ')}
            <button class="next-button next-button3">&gt;</button>
        </div>
    `);

    // --- Obsługa kliknięć w słowa
    $sentence10.find('.word-span, .word-span2, .word-span3')
        .off('click')
        .on('click', function () {
            const clickedIndex = $(this).data('index');
            handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
            currentHighlightIndex = clickedIndex;
            updateHighlight(indexDiv, $sentence10, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
        });

}
// --- Obsługa kliknięcia na przycisk NEXT (>)
$(document).on('click', '.next-button', function () {
    const $container = $(this).closest('.image-container3b');
    const indexDiv = $container.data('lesson');
    const $sentence10 = $container.find('.sentence-block').first();

    currentHighlightIndex++;
    if (currentHighlightIndex >= 6) currentHighlightIndex = 0; // zapętlenie

    updateHighlight(
        indexDiv,
        $sentence10,
        currentHighlightIndex,
        firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord
    );
});

// --- Obsługa kliknięcia na przycisk PREV (<)
$(document).off('click', '.prev-button').on('click', '.prev-button', function () {
    const $container = $(this).closest('.image-container3b');
    const indexDiv = $container.data('lesson');

    currentHighlightIndex--;
    if (currentHighlightIndex < 0) currentHighlightIndex = 5; // cofanie w pętli

    updateHighlight(
        indexDiv,
        $container.find('.sentence-block').first(),
        currentHighlightIndex,
        firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord
    );
});
       let currentFiszkaIndex = 0;
    function updateWordDisplay(currentWordIndex) {
        const fiszka = matchingFiszki1[currentFiszkaIndex];
        console.log('hej11d', fiszka);
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
                                                
                // Funkcja displayWords przyjmuje teraz currentWordIndex
                function displayWords(nowy, indexDiv) {

                                console.log('index66', indexDiv);
                    console.log('hej4433', currentWordIndex);
       currentFiszkaIndex = 0;

currentFiszkaIndex = nowy;

                        const $prevButton = $('<button>')
                            .text('<')
                            .attr('id', 'prev-button') 
                            .addClass('prev-button')
                            .css({
                            'position': 'absolute',
                            'left': '-20px',
                            'width': '30px',
                            'height': '30px',
                            'cursor': 'pointer',
                            'z-index': '1000001'
                        }).appendTo($wordContainer);

                        const $nextButton = $('<button>')
                            .text('>')
                            .attr('id', 'next-button') 
                            .addClass('next-button')
                            .css({
                                'position': 'absolute',
                                'right': '-20px',
                                'width': '30px',
                                'height': '30px',
                                'cursor': 'pointer',
                                'z-index': '1000001'
                            }).appendTo($wordContainer);

                        $prevButton.on('click', function() {
    console.log('Aktualny index fiszki:', currentFiszkaIndex);
    console.log('DostÄpne fiszki:', matchingFiszki1.length);

    if (currentFiszkaIndex <= matchingFiszki1.length - 1) {
        currentFiszkaIndex--; // ZwiÄksz indeks fiszki
        $(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego
                        let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55', ostatniElement2);
    // SprawdĹş, czy element 'wordDisplay' juĹź istnieje
// SprawdĹş, czy element 'wordDisplay' juĹź istnieje w odpowiednim kontenerze
if (ostatniElement2) {
    // ZnajdĹş kontener na podstawie data-lesson
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // JeĹli 'wordDisplay' istnieje, wykonaj coĹ z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay:', $wordContainer);
        
        // Tutaj moĹźesz wykonaÄ akcje na $wordContainer, np. przesuniÄcie
        $wordContainer.css({
            'right': '0px', // PrzesuĹ w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
} else {
    console.log('Brak ostatniego elementu w tablica11b');
}
                                                        tablica12b.push(currentFiszkaIndex);
                                                        console.log('hej68cx', fiszkaobject);
let indeks5; // Zainicjalizuj zmiennÄ przed warunkami
if (currentFiszkaIndex < 4) {
    indeks5 = tablica12b[tablica12b.length - 2];
} else if (currentFiszkaIndex === 4) {
    indeks5 = 5;
}
                                                        console.log('hej555', indeks5);
                                                        handleNextClick2(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                                                        wybierzRodzaj2b('all', indeks5, matchingFiszki1, indexDiv);
                                                        updateWordDisplay(currentWordIndex, indexDiv);
                                                        
console.log("indexDiv2", tablica12b);
        console.log('hej68c', currentFiszkaIndex);
    } else {
        console.log('Koniec fiszek!'); // Informacja o koĹcu fiszek
    }
                        });
                        if (currentFiszkaIndex === 0) {
                          tablica12b.push(0);  
                        }

                    console.log('hej26', tablica12b);
$nextButton.on('click', function () {
                                                    console.log('Aktualny index fiszki:', indexDiv);
                                                    console.log('DostÄpne fiszki:', matchingFiszki1);
                                                                                                            
                                                    console.log('hej303b', fiszkaobject);
                                                    if (currentFiszkaIndex <= matchingFiszki1.length - 1) {
                                                        currentFiszkaIndex++; // ZwiÄksz indeks fiszki
$(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego

                                    console.log('Dodano wartoĹÄ33:', tablica11b);
                                                                                                            // SprawdĹş, czy `indexDiv` juĹź istnieje w `fiszkaobject.data`
                                                    const existingIndex = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex !== -1) {
                                                        // JeĹli istnieje, zastÄp wartoĹÄ
                                                        fiszkaobject.data[existingIndex] = [indexDiv, currentFiszkaIndex];
                                                    } else {
                                                        // JeĹli nie istnieje, dodaj nowÄ tablicÄ
                                                        fiszkaobject.data.push([indexDiv, currentFiszkaIndex]);
                                                    }

                                                    // SprawdĹş, czy `indexDiv` juĹź istnieje w `fiszkaobject.data`
                                                    const existingIndex2 = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex2 !== -1) {
                                                        // JeĹli istnieje, zaktualizuj `currentFiszkaIndex`
                                                        fiszkaobject.data[existingIndex2][1] = currentFiszkaIndex;
                                                        console.log('hej303bb', currentFiszkaIndex);

                                                        console.log('hej303bbx', fiszkaobject.data[existingIndex2][1]);
                                                    } else {
                                                        // JeĹli nie istnieje, dodaj nowÄ tablicÄ
                                                        fiszkaobject.data.push([indexDiv, currentFiszkaIndex]);
                                                    }
                                                    tablica12b.push(currentFiszkaIndex);
                                setTimeout(() => {
                                                        wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki1, indexDiv);
                                }, 800);

                                                                                                                console.log('hej68cx', currentFiszkaIndex);
                                                        handleNextClick(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);

                                                        updateWordDisplay(currentWordIndex, indexDiv);
                                                        // WywoĹaj funkcjÄ, przekazujÄc zaktualizowany indeks
                                                        console.log("indexDiv2", tablica12b);
                                                    } else {
                                                        console.log('Koniec fiszek!'); // Informacja o koĹcu fiszek
                                                    }
                                                });


                                                                                            console.log('hej444b', currentFiszkaIndex);
                                                                                            setTimeout(() => {

                                                                                        if (currentFiszkaIndex === 0) {
console.log("indexDiv2x", currentFiszkaIndex);
                                                                                            let indeks55x; // Zainicjalizuj zmiennÄ przed warunkami
if (currentFiszkaIndex === 0 || currentFiszkaIndex > 0) {
    indeks55x = currentFiszkaIndex;

                                                    wybierzRodzaj2c('all', indeks55x, matchingFiszki1, indexDiv);
                                                                            updateWordDisplay(currentWordIndex);
                                                                            }
                                                }
                                                                                }, 300);
                                                    updateWordDisplay(currentWordIndex);
                                                // ObsĹuga klikniÄcia na `#wordDisplay`
$wordContainer.on('click', function () {
                const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);
$(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 104); // Podniesienie z-index tylko dla aktywnego
                            let ostatniElement2 = tablica11b[tablica11b.length - 1];
console.log('hej55aa', ostatniElement2);
wybierzRodzaj2c('all', currentFiszkaIndex, matchingFiszki1, indexDiv);
    // SprawdĹş, czy element 'wordDisplay' juĹź istnieje
// SprawdĹş, czy element 'wordDisplay' juĹź istnieje w odpowiednim kontenerze
if (ostatniElement2 && indexDiv !== ostatniElement2) {
    // ZnajdĹş kontener na podstawie data-lesson
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // JeĹli 'wordDisplay' istnieje, wykonaj coĹ z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay5:', $wordContainer);
        
        // Tutaj moĹźesz wykonaÄ akcje na $wordContainer, np. przesuniÄcie
        $wordContainer.css({
            'right': '0px', // PrzesuĹ w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
}
});


// WywoĹaj funkcjÄ z podanÄ kategoriÄ
function wybierzRodzaj2(category, currentFiszkaIndex, matchingFiszki1, indexDiv) {

    console.log("Wybrany rodzaj sĹownictwa: ", currentFiszkaIndex);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id juĹź jest w matchingLessons, aby uniknÄÄ duplikatĂłw
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            if (fiszka.category !== 'all') {
                // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
                const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
                const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

                // JeĹli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
                if (isInCategory2 || isInCategory3) {
                    console.log(`Znaleziono fiszkÄ z kategoriÄ "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                    if (fiszka.id && fiszka.id[1]) {
                        matchingLessons.push(fiszka.id[1]);
                    }
                }
            }
        }
    }
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('WyĹwietlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}

// WywoĹaj funkcjÄ z podanÄ kategoriÄ
function wybierzRodzaj2b(category, indeks5, matchingFiszki1, indexDiv) {

    console.log("Wybrany rodzaj sĹownictwa: ", currentFiszkaIndex);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id juĹź jest w matchingLessons, aby uniknÄÄ duplikatĂłw
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            if (fiszka.category !== 'all') {
                // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
                const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
                const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

                // JeĹli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
                if (isInCategory2 || isInCategory3) {
                    console.log(`Znaleziono fiszkÄ z kategoriÄ "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                    if (fiszka.id && fiszka.id[1]) {
                        matchingLessons.push(fiszka.id[1]);
                    }
                }
            }
        }
    }
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('WyĹwietlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki1);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}
function wybierzRodzaj2c(category, indeks5, matchingFiszki1, indexDiv) {

    console.log("Wybrany rodzaj sĹownictwa: ", currentFiszkaIndex);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id juĹź jest w matchingLessons, aby uniknÄÄ duplikatĂłw
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            if (fiszka.category !== 'all') {
                // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
                const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
                const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

                // JeĹli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
                if (isInCategory2 || isInCategory3) {
                    console.log(`Znaleziono fiszkÄ z kategoriÄ "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                    if (fiszka.id && fiszka.id[1]) {
                        matchingLessons.push(fiszka.id[1]);
                    }
                }
            }
        }
    }
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('WyĹwietlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5c(indexDiv, fiszki, indeks5, matchingFiszki1);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}

function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex > 0 && currentFiszkaIndex < matchingFiszki1.length) {
        if (matchingFiszki1.length > 0) {
            let id = matchingFiszki1[currentFiszkaIndex - 1].id;
            console.log('hej2x', id);
            let parametr = '';
            // SprawdĹş, czy id jest tablicÄ
            if (Array.isArray(id)) {
                // PoĹÄcz wartoĹci z tablicy id w jeden ciÄg znakĂłw oddzielony przecinkami
                id = id.slice(0, 3).join(',');
                // ObsĹuga ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki1[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
                }
            }
// Tworzenie klasy CSS
const className = `fiszka-${id}${parametr ? ',' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;
console.log('Usuwam fiszkÄ o klasie5:', className);
// Znalezienie i usuniÄcie diva z klasÄ `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa caĹy div z DOM
}
                // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ĺadowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
} else if (currentFiszkaIndex === 0) {
    if (matchingFiszki1.length >= 0) {
                    // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ĺadowana fiszka5:', currentFiszkaIndex);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
}
}
}

function showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki1) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex >= 0 && currentFiszkaIndex <= matchingFiszki1.length) {
        if (matchingFiszki1.length >= 0) {
            let id = matchingFiszki1[currentFiszkaIndex + 1].id;
            console.log('hej2', id);
            let parametr = '';
            // SprawdĹş, czy id jest tablicÄ
            if (Array.isArray(id)) {
                // PoĹÄcz wartoĹci z tablicy id w jeden ciÄg znakĂłw oddzielony przecinkami
                id = id.slice(0, 3).join(',');
                // ObsĹuga ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki1[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
                }
            }
// Tworzenie klasy CSS
const className = `fiszka-${id}${parametr ? '-' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;
console.log('Usuwam fiszkÄ o klasie5:', className);
// Znalezienie i usuniÄcie diva z klasÄ `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa caĹy div z DOM
}
                // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ĺadowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
}
}
function showFiszkiForLesson5c(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

if (currentFiszkaIndex === 0) {
    if (matchingFiszki1.length >= 0) {
                    // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ĺadowana fiszka5:', currentFiszkaIndex);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
}
}
}
        }
                displayWords(currentWordIndex, indexDiv); // WywoĹanie z indeksem
                
                // Dostosuj rozmiar czcionki
                updateWordDisplay(currentWordIndex);
            } else {
                console.log('Nie znaleziono sĹĂłw w sentence10.');
            }
        } else {
            console.log('Nie znaleziono elementu .sentence10 w kontenerze.');
        }
    } else {
        console.log('Nie znaleziono kontenera o data-lesson = ' + indexDiv);
    }

}
function highlightFirstWord2(indexDiv) {
    const $container = $(`.image-container3b[data-lesson="${indexDiv}"]`);
    $(`.image-container3b`).css('z-index', 100); 
    $container.css('z-index', 102); 

    console.log('funkcja odpala się');

if (matchingFiszki2.length > 0) {
        const $sentence20 = $container.find('.sentence-block').first();
                const $sentence20b = $container.find('.sentence-block').first();
                        const $sentence20c = $container.find('.sentence-block').first();
        
console.log('funkcja odpala się', $sentence20);
        if ($sentence20.length > 0 && $sentence20b.length > 0 && $sentence20c.length > 0) {
            console.log('funkcja odpala się', $sentence20);
let sentenceText = globalSentence20 + " " + globalSentence22;
let sentenceText2 = globalSentence20b + " " + globalSentence22b;
let sentenceText3 = globalSentence20c + " " + globalSentence22c;
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
                let firstWord = words[0];
                let secondWord = words[1] || '';
                let thirdWord = words[2] || '';
                let forthWord = words[3] || '';
                let fifthWord = words[4] || '';
                let sixthWord = words[5] || '';
                                let firstWord2 = words2[0];
                let secondWord2 = words2[1] || '';
                let thirdWord2 = words2[2] || '';
                let forthWord2 = words2[3] || '';
                let fifthWord2 = words2[4] || '';
                let sixthWord2 = words2[5] || '';
                                                let firstWord3 = words3[0];
                let secondWord3 = words3[1] || '';
                let thirdWord3 = words3[2] || '';
                let forthWord3 = words3[3] || '';
                let fifthWord3 = words3[4] || '';
                let sixthWord3 = words3[5] || '';
                        // --- WYWOŁAJ TUTAJ updateHighlight, żeby od razu zbudować linie ---

                let highlightedSpan = `<span class="highlighted">${firstWord}</span>`;
                let highlightedSpan2 = `<span class="highlighted" style="display:none;">${secondWord}</span>`;
                let highlightedSpan3 = `<span class="highlighted" style="display:none;">${thirdWord}</span>`;
                let highlightedSpan4 = `<span class="highlighted" style="display:none;">${forthWord}</span>`;
                let highlightedSpan5 = `<span class="highlighted" style="display:none;">${fifthWord}</span>`;
                let highlightedSpan6 = `<span class="highlighted" style="display:none;">${sixthWord}</span>`;
                                let highlightedSpan2b = `<span class="highlighted">${firstWord2}</span>`;
                let highlightedSpan22 = `<span class="highlighted" style="display:none;">${secondWord2}</span>`;
                let highlightedSpan33 = `<span class="highlighted" style="display:none;">${thirdWord2}</span>`;
                let highlightedSpan44 = `<span class="highlighted" style="display:none;">${forthWord2}</span>`;
                let highlightedSpan55 = `<span class="highlighted" style="display:none;">${fifthWord2}</span>`;
                let highlightedSpan66 = `<span class="highlighted" style="display:none;">${sixthWord2}</span>`;
                                                let highlightedSpan3b = `<span class="highlighted">${firstWord3}</span>`;
                let highlightedSpan22b = `<span class="highlighted" style="display:none;">${secondWord3}</span>`;
                let highlightedSpan33b = `<span class="highlighted" style="display:none;">${thirdWord3}</span>`;
                let highlightedSpan44b = `<span class="highlighted" style="display:none;">${forthWord3}</span>`;
                let highlightedSpan55b = `<span class="highlighted" style="display:none;">${fifthWord3}</span>`;
                let highlightedSpan66b = `<span class="highlighted" style="display:none;">${sixthWord3}</span>`;
                
                
                let button1 = `<button class="prev-button" id="prev-button">&lt;</button>`;
                let button2 = `<button class="next-button" id="next-button">&gt;</button>`;

                $sentence20.html(`
                    ${button1} 
                    <span class="word-span" style="cursor: pointer;">${highlightedSpan}</span> 
                    <span class="word-span" style="cursor: pointer;">${secondWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${thirdWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${forthWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${fifthWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${sixthWord}</span>
                    ${button2}
                    <br>
                `);
                                $sentence20b.html(`
                    ${button1} 
                    <span class="word-span2" style="cursor: pointer;">${highlightedSpan2b}</span> 
                    <span class="word-span2" style="cursor: pointer;">${secondWord2}</span> 
                    <span class="word-span2" style="cursor: pointer;">${thirdWord2}</span> 
                    <span class="word-span2" style="cursor: pointer;">${forthWord2}</span> 
                    <span class="word-span2" style="cursor: pointer;">${fifthWord2}</span> 
                    <span class="word-span2" style="cursor: pointer;">${sixthWord2}</span>
                    ${button2}
                    <br>
                `);
                                                $sentence20c.html(`
                    ${button1} 
                    <span class="word-span3" style="cursor: pointer;">${highlightedSpan3b}</span> 
                    <span class="word-span3" style="cursor: pointer;">${secondWord3}</span> 
                    <span class="word-span3" style="cursor: pointer;">${thirdWord3}</span> 
                    <span class="word-span3" style="cursor: pointer;">${forthWord3}</span> 
                    <span class="word-span3" style="cursor: pointer;">${fifthWord3}</span> 
                    <span class="word-span3" style="cursor: pointer;">${sixthWord3}</span>
                    ${button2}
                    <br>
                `);


$("<style>")
  .prop("type", "text/css")
  .html(".word-span:hover { background-color: #2ecc71; }")
  .appendTo("head");
  $("<style>")
  .prop("type", "text/css")
  .html(".word-span2:hover { background-color: #2ecc71; }")
  .appendTo("head");
    $("<style>")
  .prop("type", "text/css")
  .html(".word-span3:hover { background-color: #2ecc71; }")
  .appendTo("head");
                            updateHighlight(
            indexDiv, $sentence20, 0, // startowe podświetlenie = pierwsze słowo
            firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord
        );    
                        let currentWordIndex = 0; // Indeks sĹowa, ktĂłre ma byÄ wyĹwietlane

// Funkcja obsĹugujÄca klikniÄcia na sĹowa, przyjmujÄca clickedIndex
function handleWordClick(clickedIndex, indexDiv, matchingFiszki2) {
    console.log("Przekazano clickedIndex:", clickedIndex);

    // PodĹwietlenie klikniÄtego sĹowa na staĹe
    $('.word-span').removeClass('highlighted');
    $('.word-span').eq(clickedIndex).addClass('highlighted'); // PodĹwietlenie wedĹug clickedIndex

    // Zaktualizuj currentHighlightIndex na clickedIndex
    currentHighlightIndex = clickedIndex;
    console.log("Aktualny indeks podĹwietlenia:", currentHighlightIndex);

    // WywoĹaj funkcjÄ wyĹwietlania fiszek
    showFiszkiForLesson5(indexDiv, fiszki, clickedIndex, matchingFiszki2);

}
                        const $wordContainer = $('<div>').attr('id', 'wordDisplay').css({
                        }).appendTo($container);
                        let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55', ostatniElement2);
    // SprawdĹş, czy element 'wordDisplay' juĹź istnieje
// SprawdĹş, czy element 'wordDisplay' juĹź istnieje w odpowiednim kontenerze
if (ostatniElement2) {
    // ZnajdĹş kontener na podstawie data-lesson
    const $container = $(`.image-container3b[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // JeĹli 'wordDisplay' istnieje, wykonaj coĹ z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay:', $wordContainer);
        
        // Tutaj moĹźesz wykonaÄ akcje na $wordContainer, np. przesuniÄcie
        $wordContainer.css({
            'right': '0px', // PrzesuĹ w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
} else {
    console.log('Brak ostatniego elementu w tablica11b');
}

// ObsĹuga klikniÄcia na indexDiv
$('.indexDiv').on('click', function () {
    const indexDiv = $(this).data('lesson'); // Pobierz atrybut data-lesson dla klikniÄtego indexDiv
    handleIndexDivClick(indexDiv); // WywoĹaj funkcjÄ przesuwania 'wordDisplay'
});
                        const $currentWordDisplay = $('<span>').appendTo($wordContainer);
    function updateWordDisplay2(currentWordIndex) {
        let fiszka = matchingFiszki2[currentFiszkaIndex];
        console.log('hej11', fiszka);
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
// Deklaracja clickedIndex jako zmiennej globalnej
let clickedIndex;

// Dodanie zdarzenia click
$(document).on('click', '.word-span', function() {
    const clickedWord = $(this).text();
    console.log("KlikniÄto:", clickedWord);

    // Ustalanie clickedIndex dla klikniÄtego sĹowa
    clickedIndex = words.indexOf(clickedWord);
    console.log('hej341', clickedIndex);
    updateHighlight($sentence20, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    // WywoĹanie handleWordClick z clickedIndex
    handleWordClick(clickedIndex, indexDiv, matchingFiszki2);
});
function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki2) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);

if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki2.length) {

        // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
        const fiszka = matchingFiszki2[currentFiszkaIndex];
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
        

    }
    return fiszkaBlock;
}

let currentHighlightIndex = 0; // Indeks podĹwietlenia

let displayWordsIndex = 0; // Indeks do wyĹwietlania sĹĂłw (moĹźna dostosowaÄ w zaleĹźnoĹci od wymagaĹ)


// ObsĹuga klikniÄcia na "next"
function handleNextClick(indexDiv, $sentence20, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // SprawdĹş, czy moĹźemy zwiÄkszyÄ indeks podĹwietlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence20, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex++;

        }
function handleNextClick2(indexDiv, $sentence20, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // SprawdĹş, czy moĹźemy zwiÄkszyÄ indeks podĹwietlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence20, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex--;

        }


function updateHighlight(indexDiv, $sentence20, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    const words = [firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord];
    const words2 = [firstWord2, secondWord2, thirdWord2, forthWord2, fifthWord2, sixthWord2];
        const words3 = [firstWord3, secondWord3, thirdWord3, forthWord3, fifthWord3, sixthWord3];

    // --- Główna linia słów (word-span)
    const highlightedWords = words.map((word, i) => {
        return i === index
            ? `<span class="highlighted word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`
            : `<span class="word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`;
    });

    // --- Druga linia słów (word-span2)
    const highlightedWords2 = words2.map((word, i2) => {
        return i2 === index
            ? `<span class="highlighted word-span2" data-index="${i2}" style="cursor: pointer;">${word}</span>`
            : `<span class="word-span2" data-index="${i2}" style="cursor: pointer;">${word}</span>`;
    });
        // --- Trzecoa linia słów (word-span2)
    const highlightedWords3 = words3.map((word, i3) => {
        return i3 === index
            ? `<span class="highlighted word-span3" data-index="${i3}" style="cursor: pointer;">${word}</span>`
            : `<span class="word-span3" data-index="${i3}" style="cursor: pointer;">${word}</span>`;
    });

$sentence20.html(`
  <button class="prev-button" id="prev-button">&lt;</button>
  ${highlightedWords.join(' ')}
  <br>
  ${highlightedWords2.join(' ')}
  <br>
     ${highlightedWords3.join(' ')}
  <button class="next-button" id="next-button">&gt;</button>
`);

    // --- Obsługa kliknięć word-span
    $sentence20.find('.word-span').off('click').on('click', function () {
        const clickedIndex = $(this).data('index');
        handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
        updateHighlight(indexDiv, $sentence20, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    });

    // --- Obsługa kliknięć word-span2
    $sentence20b.find('.word-span2').off('click').on('click', function () {
        const clickedIndex = $(this).data('index');
        handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
        updateHighlight(indexDiv, $sentence20, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    });
        // --- Obsługa kliknięć word-span2
    $sentence20c.find('.word-span3').off('click').on('click', function () {
        const clickedIndex = $(this).data('index');
        handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
        updateHighlight(indexDiv, $sentence20, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    });
}
       let currentFiszkaIndex = 0;
    function updateWordDisplay(currentWordIndex) {
        const fiszka = matchingFiszki2[currentFiszkaIndex];
        console.log('hej11d', fiszka);
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
                                                
                // Funkcja displayWords przyjmuje teraz currentWordIndex
                function displayWords(nowy, indexDiv) {

                                console.log('index66', indexDiv);
                    console.log('hej4433', currentWordIndex);
       currentFiszkaIndex = 0;

currentFiszkaIndex = nowy;

                        const $prevButton = $('<button>')
                            .text('<')
                            .attr('id', 'prev-button') 
                            .addClass('prev-button')
                            .css({
                            'position': 'absolute',
                            'left': '-20px',
                            'width': '30px',
                            'height': '30px',
                            'cursor': 'pointer',
                            'z-index': '1000001'
                        }).appendTo($wordContainer);

                        const $nextButton = $('<button>')
                            .text('>')
                            .attr('id', 'next-button') 
                            .addClass('next-button')
                            .css({
                                'position': 'absolute',
                                'right': '-20px',
                                'width': '30px',
                                'height': '30px',
                                'cursor': 'pointer',
                                'z-index': '1000001'
                            }).appendTo($wordContainer);

                        $prevButton.on('click', function() {
    console.log('Aktualny index fiszki:', currentFiszkaIndex);
    console.log('DostÄpne fiszki:', matchingFiszki2.length);

    if (currentFiszkaIndex <= matchingFiszki2.length - 1) {
        currentFiszkaIndex--; // ZwiÄksz indeks fiszki
        $(`.image-container3b`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego
                        let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55', ostatniElement2);
    // SprawdĹş, czy element 'wordDisplay' juĹź istnieje
// SprawdĹş, czy element 'wordDisplay' juĹź istnieje w odpowiednim kontenerze
if (ostatniElement2) {
    // ZnajdĹş kontener na podstawie data-lesson
    const $container = $(`.image-container3b[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // JeĹli 'wordDisplay' istnieje, wykonaj coĹ z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay:', $wordContainer);
        
        // Tutaj moĹźesz wykonaÄ akcje na $wordContainer, np. przesuniÄcie
        $wordContainer.css({
            'right': '0px', // PrzesuĹ w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
} else {
    console.log('Brak ostatniego elementu w tablica11b');
}
                                                        tablica12b.push(currentFiszkaIndex);
                                                        console.log('hej68cx', fiszkaobject);
let indeks5; // Zainicjalizuj zmiennÄ przed warunkami
if (currentFiszkaIndex < 4) {
    indeks5 = tablica12b[tablica12b.length - 2];
} else if (currentFiszkaIndex === 4) {
    indeks5 = 5;
}
                                                        console.log('hej555', indeks5);
                                                        handleNextClick2(indexDiv, $sentence20, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                                                        wybierzRodzaj2b('all', indeks5, matchingFiszki2, indexDiv);
                                                        updateWordDisplay(currentWordIndex, indexDiv);
                                                        
console.log("indexDiv2", tablica12b);
        console.log('hej68c', currentFiszkaIndex);
    } else {
        console.log('Koniec fiszek!'); // Informacja o koĹcu fiszek
    }
                        });
                        if (currentFiszkaIndex === 0) {
                          tablica12b.push(0);  
                        }

                    console.log('hej26', tablica12b);
$nextButton.on('click', function () {
                                                    console.log('Aktualny index fiszki:', indexDiv);
                                                    console.log('DostÄpne fiszki:', matchingFiszki2);
                                                                                                            
                                                    console.log('hej303b', fiszkaobject);
                                                    if (currentFiszkaIndex <= matchingFiszki2.length - 1) {
                                                        currentFiszkaIndex++; // ZwiÄksz indeks fiszki
$(`.image-container3b`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego

                                    console.log('Dodano wartoĹÄ33:', tablica11b);
                                                                                                            // SprawdĹş, czy `indexDiv` juĹź istnieje w `fiszkaobject.data`
                                                    const existingIndex = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex !== -1) {
                                                        // JeĹli istnieje, zastÄp wartoĹÄ
                                                        fiszkaobject.data[existingIndex] = [indexDiv, currentFiszkaIndex];
                                                    } else {
                                                        // JeĹli nie istnieje, dodaj nowÄ tablicÄ
                                                        fiszkaobject.data.push([indexDiv, currentFiszkaIndex]);
                                                    }

                                                    // SprawdĹş, czy `indexDiv` juĹź istnieje w `fiszkaobject.data`
                                                    const existingIndex2 = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex2 !== -1) {
                                                        // JeĹli istnieje, zaktualizuj `currentFiszkaIndex`
                                                        fiszkaobject.data[existingIndex2][1] = currentFiszkaIndex;
                                                        console.log('hej303bb', currentFiszkaIndex);

                                                        console.log('hej303bbx', fiszkaobject.data[existingIndex2][1]);
                                                    } else {
                                                        // JeĹli nie istnieje, dodaj nowÄ tablicÄ
                                                        fiszkaobject.data.push([indexDiv, currentFiszkaIndex]);
                                                    }
                                                    tablica12b.push(currentFiszkaIndex);
                                setTimeout(() => {
                                                        wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki2, indexDiv);
                                }, 800);

                                                                                                                console.log('hej68cx', currentFiszkaIndex);
                                                        handleNextClick(indexDiv, $sentence20, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);

                                                        updateWordDisplay(currentWordIndex, indexDiv);
                                                        // WywoĹaj funkcjÄ, przekazujÄc zaktualizowany indeks
                                                        console.log("indexDiv2", tablica12b);
                                                    } else {
                                                        console.log('Koniec fiszek!'); // Informacja o koĹcu fiszek
                                                    }
                                                });


                                                                                            console.log('hej444b', currentFiszkaIndex);
                                                                                            setTimeout(() => {

                                                                                        if (currentFiszkaIndex === 0) {
console.log("indexDiv2x", currentFiszkaIndex);
                                                                                            let indeks55x; // Zainicjalizuj zmiennÄ przed warunkami
if (currentFiszkaIndex === 0 || currentFiszkaIndex > 0) {
    indeks55x = currentFiszkaIndex;

                                                    wybierzRodzaj2c('all', indeks55x, matchingFiszki2, indexDiv);
                                                                            updateWordDisplay(currentWordIndex);
                                                                            }
                                                }
                                                                                }, 300);
                                                    updateWordDisplay(currentWordIndex);
                                                // ObsĹuga klikniÄcia na `#wordDisplay`
$wordContainer.on('click', function () {
                const $container = $(`.image-container3b[data-lesson="${indexDiv}"]`);
$(`.image-container3b`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 104); // Podniesienie z-index tylko dla aktywnego
                            let ostatniElement2 = tablica11b[tablica11b.length - 1];
console.log('hej55aa', ostatniElement2);
wybierzRodzaj2c('all', currentFiszkaIndex, matchingFiszki2, indexDiv);
    // SprawdĹş, czy element 'wordDisplay' juĹź istnieje
// SprawdĹş, czy element 'wordDisplay' juĹź istnieje w odpowiednim kontenerze
if (ostatniElement2 && indexDiv !== ostatniElement2) {
    // ZnajdĹş kontener na podstawie data-lesson
    const $container = $(`.image-container3b[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // JeĹli 'wordDisplay' istnieje, wykonaj coĹ z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay5:', $wordContainer);
        
        // Tutaj moĹźesz wykonaÄ akcje na $wordContainer, np. przesuniÄcie
        $wordContainer.css({
            'right': '0px', // PrzesuĹ w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
}
});


// WywoĹaj funkcjÄ z podanÄ kategoriÄ
function wybierzRodzaj2(category, currentFiszkaIndex, matchingFiszki2, indexDiv) {

    console.log("Wybrany rodzaj sĹownictwa: ", currentFiszkaIndex);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id juĹź jest w matchingLessons, aby uniknÄÄ duplikatĂłw
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            if (fiszka.category !== 'all') {
                // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
                const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
                const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

                // JeĹli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
                if (isInCategory2 || isInCategory3) {
                    console.log(`Znaleziono fiszkÄ z kategoriÄ "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                    if (fiszka.id && fiszka.id[1]) {
                        matchingLessons.push(fiszka.id[1]);
                    }
                }
            }
        }
    }
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('WyĹwietlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki2);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}

// WywoĹaj funkcjÄ z podanÄ kategoriÄ
function wybierzRodzaj2b(category, indeks5, matchingFiszki2, indexDiv) {

    console.log("Wybrany rodzaj sĹownictwa: ", currentFiszkaIndex);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id juĹź jest w matchingLessons, aby uniknÄÄ duplikatĂłw
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            if (fiszka.category !== 'all') {
                // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
                const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
                const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

                // JeĹli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
                if (isInCategory2 || isInCategory3) {
                    console.log(`Znaleziono fiszkÄ z kategoriÄ "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                    if (fiszka.id && fiszka.id[1]) {
                        matchingLessons.push(fiszka.id[1]);
                    }
                }
            }
        }
    }
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('WyĹwietlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki2);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}
function wybierzRodzaj2c(category, indeks5, matchingFiszki2, indexDiv) {

    console.log("Wybrany rodzaj sĹownictwa: ", currentFiszkaIndex);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id juĹź jest w matchingLessons, aby uniknÄÄ duplikatĂłw
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            if (fiszka.category !== 'all') {
                // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
                const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
                const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

                // JeĹli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
                if (isInCategory2 || isInCategory3) {
                    console.log(`Znaleziono fiszkÄ z kategoriÄ "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                    if (fiszka.id && fiszka.id[1]) {
                        matchingLessons.push(fiszka.id[1]);
                    }
                }
            }
        }
    }
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('WyĹwietlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5c(indexDiv, fiszki, indeks5, matchingFiszki2);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}

function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki2) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex > 0 && currentFiszkaIndex < matchingFiszki2.length) {
        if (matchingFiszki2.length > 0) {
            let id = matchingFiszki2[currentFiszkaIndex - 1].id;
            console.log('hej2x', id);
            let parametr = '';
            // SprawdĹş, czy id jest tablicÄ
            if (Array.isArray(id)) {
                // PoĹÄcz wartoĹci z tablicy id w jeden ciÄg znakĂłw oddzielony przecinkami
                id = id.slice(0, 3).join(',');
                // ObsĹuga ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki2[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
                }
            }
// Tworzenie klasy CSS
const className = `fiszka-${id}${parametr ? ',' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;
console.log('Usuwam fiszkÄ o klasie5:', className);
// Znalezienie i usuniÄcie diva z klasÄ `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa caĹy div z DOM
}
                // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki2[currentFiszkaIndex];
            console.log('Ĺadowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
} else if (currentFiszkaIndex === 0) {
    if (matchingFiszki2.length >= 0) {
                    // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki2[currentFiszkaIndex];
            console.log('Ĺadowana fiszka5:', currentFiszkaIndex);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
}
}
}

function showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki2) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex >= 0 && currentFiszkaIndex <= matchingFiszki2.length) {
        if (matchingFiszki2.length >= 0) {
            let id = matchingFiszki2[currentFiszkaIndex + 1].id;
            console.log('hej2', id);
            let parametr = '';
            // SprawdĹş, czy id jest tablicÄ
            if (Array.isArray(id)) {
                // PoĹÄcz wartoĹci z tablicy id w jeden ciÄg znakĂłw oddzielony przecinkami
                id = id.slice(0, 3).join(',');
                // ObsĹuga ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki2[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
                }
            }
// Tworzenie klasy CSS
const className = `fiszka-${id}${parametr ? '-' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;
console.log('Usuwam fiszkÄ o klasie5:', className);
// Znalezienie i usuniÄcie diva z klasÄ `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa caĹy div z DOM
}
                // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki2[currentFiszkaIndex];
            console.log('Ĺadowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
}
}
function showFiszkiForLesson5c(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki2) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

if (currentFiszkaIndex === 0) {
    if (matchingFiszki2.length >= 0) {
                    // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki2[currentFiszkaIndex];
            console.log('Ĺadowana fiszka5:', currentFiszkaIndex);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
}
}
}
        }
                displayWords(currentWordIndex, indexDiv); // WywoĹanie z indeksem
                
                // Dostosuj rozmiar czcionki
                updateWordDisplay(currentWordIndex);
            } else {
                console.log('Nie znaleziono sĹĂłw w sentence20.');
            }
        } else {
            console.log('Nie znaleziono elementu .sentence20 w kontenerze.');
        }
    } else {
        console.log('Nie znaleziono kontenera o data-lesson = ' + indexDiv);
    }

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

    if (currentPos < 0 || currentPos >= currentTriplet.length) currentPos = 0;

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
// --- Teksty / zdania ---
    const $textContainer = $('<div>').addClass('text-block');
    let currentSentenceHtml = "";

    // --- Sprawdzenie cache ---
    if (!sentenceCache[currentPos]) {
        let currentSentenceHtml = "";
        try {
if (currentPos === 0 && typeof addBackgroundToText1b === 'function') {
    const { sentence10, sentence11, sentence10b, sentence11b } = addBackgroundToText1b(
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
        (sentence11b || "").toUpperCase();
        "<br>" +
                        (sentence10c || "").toUpperCase() +
        (sentence11c || "").toUpperCase();
} else if (currentPos === 1 && typeof addBackgroundToText2b === 'function') {
                const { sentence20, sentence22 } = addBackgroundToText2b(matchingFiszki2, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);

    // zapis globalny, by highlightFirstWord miało dostęp
    globalSentence20 = sentence20
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
    (sentence22b || "").toUpperCase();
            } else if (currentPos === 2 && typeof addBackgroundToText3b === 'function') {
                const { sentence30, sentence33 } = addBackgroundToText3b(matchingFiszki3, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
currentSentenceHtml =
    (sentence30 || "") + // tylko sentence10 na małe litery
    (sentence33 || "") +
    "<br>" +
    (sentence30b || "").toUpperCase() +
    (sentence33b || "").toUpperCase();
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

    // Nawigacja
    const $nav = $('<div>').addClass('nav-buttons');
const $left = $('<button>').text('←').on('click', () => {
    currentPos = (currentPos - 1 + currentTriplet.length) % currentTriplet.length;
    renderLesson(matchingFiszki1, matchingFiszki2);
});
const $right = $('<button>').text('→').on('click', () => {
    currentPos = (currentPos + 1) % currentTriplet.length;
    renderLesson(matchingFiszki1, matchingFiszki2);
});
    $nav.append($left, $right);

    $container.append($mediaContainer, $textContainer, $nav);
    
}

$('body').off('click', '.run-icon').on('click', '.run-icon', function () {
  const indexDiv = $(this).attr('data-index2');
  const link = linkMap[indexDiv] || `demo1angielski.html?category=${selectedCategory}&data=${indexDiv}`;
  window.open(link, '_blank');
});

renderLesson(matchingFiszki1, matchingFiszki2); // jeśli chcesz drugie zdanie


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
function showFiszkiForLesson6(ostatniElement2, ostatniElement3) {

                        console.log('hej11z', ostatniElement2);
                        if (ostatniElement3 === undefined) {
                            ostatniElement3 = 0;
                        }
                        const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);

                        console.log('ostatniElement2:', ostatniElement2);
                        console.log('ostatniElement3:', ostatniElement3);

                        console.log('hej22x', tablica12b);
                        console.log('hej64xxh', ostatniElement3);
                        if (matchingFiszki1.length > 0) {
                            tablica15a.push(matchingFiszki1);

                            console.log('hej64xx', tablica15a);
                            let ostatniElement4 = tablica15a[tablica15a.length - 2];
                            console.log('hej64xx', ostatniElement4);
                            if (ostatniElement3 >= 0 && ostatniElement3 < ostatniElement4.length) {

                                let id = ostatniElement4[ostatniElement3].id;
                                console.log('hej2dd', id);
                                let parametr = '';

                                // Sprawdź, czy id jest tablicą
                                if (Array.isArray(id)) {
                                    // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
                                    id = id.slice(0, 3).join(',');

                                    // Obsługa ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                                    if (id.length > 3) {
                                        parametr = matchingFiszki1[ostatniElement3].id[3]; // Pobierz czwarty element z tablicy
                                    }
                                }
                                console.log('hej44', $container);

                                const className = `fiszka-${id}${parametr ? ',' + parametr : ''}`;
                                const selector = `.${className.replace(/,/g, '\\,')}`;
                                tablica13a.push(selector);
                                console.log('Generated selector:', tablica13a);
                                let selector2 = tablica13a[tablica13a.length - 1];
                                setTimeout(() => {
                                    // Znajdź element wewnątrz kontenera
                                    const $divToRemove = $container.find(selector2);
                                    console.log('Element to remove:', $divToRemove);

                                    if ($divToRemove.length) {
                                        $divToRemove.remove(); // Usunięcie elementu
                                        console.log('Removed:', $divToRemove);
                                    } else {
                                        console.log('Element not found within container:', selector);
                                    }
                                }, 500); // Opóźnienie

                            }
                            console.log('hej44d', $container);
                        }
                        console.log('Container found:', $container.length > 0 ? 'Yes' : 'No');
                        console.log('Container content:', $container.html());
                    }
                    function showFiszkiForLesson6b(ostatniElement2, ostatniElement3) {

                        console.log('hej11z', ostatniElement2);
                        if (ostatniElement3 === undefined) {
                            ostatniElement3 = 0;
                        }
                        const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);

                        console.log('ostatniElement2:', ostatniElement2);
                        console.log('ostatniElement3:', ostatniElement3);

                        console.log('hej22x', tablica12b);
                        console.log('hej64xxh', ostatniElement3);
                        if (matchingFiszki2.length > 0) {
                            tablica15a.push(matchingFiszki2);

                            console.log('hej64xx', tablica15a);
                            let ostatniElement4 = tablica15a[tablica15a.length - 2];
                            console.log('hej64xx', ostatniElement4);
                            if (ostatniElement3 >= 0 && ostatniElement3 < ostatniElement4.length) {

                                let id = ostatniElement4[ostatniElement3].id;
                                console.log('hej2dd', id);
                                let parametr = '';

                                // Sprawdź, czy id jest tablicą
                                if (Array.isArray(id)) {
                                    // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
                                    id = id.slice(0, 3).join(',');

                                    // Obsługa ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                                    if (id.length > 3) {
                                        parametr = matchingFiszki2[ostatniElement3].id[3]; // Pobierz czwarty element z tablicy
                                    }
                                }
                                console.log('hej44', $container);

                                const className = `fiszka-${id}${parametr ? ',' + parametr : ''}`;
                                const selector = `.${className.replace(/,/g, '\\,')}`;
                                tablica13a.push(selector);
                                console.log('Generated selector:', tablica13a);
                                let selector2 = tablica13a[tablica13a.length - 1];
                                setTimeout(() => {
                                    // Znajdź element wewnątrz kontenera
                                    const $divToRemove = $container.find(selector2);
                                    console.log('Element to remove:', $divToRemove);

                                    if ($divToRemove.length) {
                                        $divToRemove.remove(); // Usunięcie elementu
                                        console.log('Removed:', $divToRemove);
                                    } else {
                                        console.log('Element not found within container:', selector);
                                    }
                                }, 500); // Opóźnienie

                            }
                            console.log('hej44d', $container);
                        }
                        console.log('Container found:', $container.length > 0 ? 'Yes' : 'No');
                        console.log('Container content:', $container.html());
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