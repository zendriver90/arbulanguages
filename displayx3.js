            

            const displayedIds = [];
function showCombinedSentenceForLesson(
        selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
        buttonindex, index55, index77, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes,
        startIndex, newIndex, indexDiv,
        lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
        lesson1Sentences, lesson2Sentences, lesson3Sentences,
        lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
        lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
        cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
        lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
console.log('wykonuje się12');
        console.log("index55 =", index55);
                            let tablica60 = [];
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej450b', tablica60);
                console.log('hej444', newIndex);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';
                if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {

                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    const srcWord1d = pobierzSrcWordDlaLekcji4(lessonIdToShow1, fiszki);
                    const srcWord1f = pobierzSrcWordDlaLekcji4b(lessonIdToShow1, fiszki);
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                    const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki);
                    const srcWord2f = pobierzSrcWordDlaLekcji4b(lessonIdToShow2, fiszki);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                    const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki);
                    const srcWord3f = pobierzSrcWordDlaLekcji4b(lessonIdToShow3, fiszki);
                    const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                    function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[0] : null;
                    }
                    function pobierzSrcWordDlaLekcji3(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
                    }
                    function pobierzSrcWordDlaLekcji2(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    function pobierzSrcWordDlaLekcji4(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                                        function pobierzSrcWordDlaLekcji4b(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.opis : null;
                    }
                    console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);

                    let sentence10 = "";
                    let sentence11 = "";
                    let sentence20 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence22 = "";
                    let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence33 = "";
                    let sentence12 = " / ";
                    let sentence1b = " / ";
                    let sentence1b2 = " / ";
                    let sentence1b2a = "";
                    let sentence1b22 = "";
                    let sentence1c2a = "";
                    let sentence1c22 = "";
function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b) {
                        setTimeout(function () {
                            sentence10 = "";
                            sentence11 = "";
                            sentence20 = "";
                            sentence22 = "";
                            sentence30 = "";
                            sentence33 = "";
                            sentence1b = "";
                            sentence1b2 = "";
                            sentence1b2a = "";
                            sentence1b22 = "";
                            sentence1c2a = "";
                            sentence1c22 = "";

                            console.log('RozpoczĂÂcie funkcji addBackgroundToText');
                            console.log('matchingFiszki1:', fiszki);
                            console.log('lessonIdToShow1:', lessonIdToShow1);
                            console.log('matchingIndexes:', matchingIndexes);
                            console.log('currentIndexValue:', currentIndexValue);
                            console.log('aktualny:', aktualny);
                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                const fiszka = matchingFiszki1[i];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // JeÄšÂli sentence1 nie istnieje lub jest puste, przejdÄšĹ do nastĂÂpnej fiszki
                                }

                                // Iteracja przez elementy sentence1
                                for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                    let sentencePart = fiszka.sentence1[ki];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = i + lesson1PartLength + 1;
                                    console.log('indexToCheck5:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieÄšĹşĂÂcej fiszki znajduje siĂÂ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                        } else if (currentIndexValue == 0) {

                                            if (sentence1b === "") {
                                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                                sentence1b += sentencePart333 + " ";
                                            }

                                            if (sentence1b2 === "") {
                                                let sentencePart333 = fiszka.translate ? fiszka.translate : "";
                                                sentence1b2 += sentencePart333 + " ";
                                            }
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    console.log('sentencePart po przetworzeniu:', sentencePart); // Dodaj log po przetworzeniu
                                    sentence10 += sentencePart + " ";
                                }
                            }
                            console.log('final sentence10:', sentence10); // Dodaj log dla ostatecznego wyniku


                            for (let ii = 0; ii < matchingFiszki1.length; ii++) {
                                const fiszka = matchingFiszki1[ii];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }

                                // Iteracja przez elementy sentence1
                                for (let kii = 0; kii < fiszka.sentence2.length; kii++) {
                                    let sentencePart2 = fiszka.sentence2[kii];
                                    console.log('sentencePart5:', sentencePart2);
                                    const indexToCheck = ii + lesson1PartLength + 1;
                                    console.log('indexToCheck77:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieÄšĹşĂÂcej fiszki znajduje siĂÂ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                        } else if (currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    console.log('sentencePart2 po przetworzeniu:', sentencePart2);
                                    sentence11 += sentencePart2 + " ";
                                }
                            }
                            // Iteracja przez matchingFiszki2 dla sentence1
                            for (let j = 0; j < matchingFiszki2.length; j++) {
                                const fiszka = matchingFiszki2[j];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // JeÄšÂli sentence1 nie istnieje lub jest puste, przejdÄšĹ do nastĂÂpnej fiszki
                                }

                                // Iteracja przez elementy sentence1
                                for (let k = 0; k < fiszka.sentence1.length; k++) {
                                    let sentencePart = fiszka.sentence1[k];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = j + lesson2PartLength + 1;
                                    console.log('indexToCheck5:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieÄšĹşĂÂcej fiszki znajduje siĂÂ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                        } else if (currentIndexValue == 1) {

                                            if (sentence1b2a === "") {
                                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                                sentence1b2a += sentencePart333 + " ";
                                            }
                                            if (sentence1b22 === "") {
                                                let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                                sentence1b22 += sentencePart444 + " ";
                                            }
                                            $('.sentence1b').html('');
                                            $('.sentence1b2').html('');
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    sentence20 += sentencePart + " ";
                                }
                            }

                            // Iteracja przez matchingFiszki2 dla sentence2
                            for (let jj = 0; jj < matchingFiszki2.length; jj++) {
                                const fiszka = matchingFiszki2[jj];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }

                                // Iteracja przez elementy sentence2
                                for (let kk = 0; kk < fiszka.sentence2.length; kk++) {
                                    let sentencePart2 = fiszka.sentence2[kk];
                                    console.log('sentencePart2 przed przetworzeniem:', sentencePart2);
                                    const indexToCheck = jj + lesson2PartLength + 1;
                                    console.log('indexToCheck3:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieÄšĹşĂÂcej fiszki znajduje siĂÂ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    sentence22 += sentencePart2 + " ";
                                }
                            }

                            for (let l = 0; l < matchingFiszki3.length; l++) {
                                const fiszka = matchingFiszki3[l];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // JeÄšÂli sentence1 nie istnieje lub jest puste, przejdÄšĹ do nastĂÂpnej fiszki
                                }
                                // Iteracja przez elementy sentence1
                                for (let lm = 0; lm < fiszka.sentence1.length; lm++) {
                                    let sentencePart = fiszka.sentence1[lm];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = l + lesson3PartLength + 1;
                                    console.log('indexToCheck55:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieÄšĹşĂÂcej fiszki znajduje siĂÂ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2) {
                                            if (sentence1c2a === "") {
                                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                                sentence1c2a += sentencePart333 + " ";
                                            }
                                            if (sentence1c22 === "") {
                                                let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                                sentence1c22 += sentencePart444 + " ";
                                            }
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    sentence30 += sentencePart + " ";
                                }
                            }
                            // Iteracja przez matchingFiszki2 dla sentence2
                            for (let lmm = 0; lmm < matchingFiszki3.length; lmm++) {
                                const fiszka = matchingFiszki3[lmm];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }

                                // Iteracja przez elementy sentence2
                                for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                    let sentencePart2 = fiszka.sentence2[lmn];
                                    console.log('sentencePart2 przed przetworzeniem:', sentencePart2);
                                    const indexToCheck = lmm + lesson3PartLength + 1;
                                    console.log('indexToCheck3:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieÄšĹşĂÂcej fiszki znajduje siĂÂ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraÄšÂ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    sentence33 += sentencePart2 + " ";
                                }
                            }

                            // Dodanie treÄšÂci do diva wraz z przyciskiem
    $sentenceDivB.html(`
<div class="sentence-blockB" data-name="${id1}">
    ${sentence10}${sentence11}<br>
    <div class="sentence1b">${sentence1b}</div>
    <div class="sentence1b2">${sentence1b2}</div>
</div>

<div class="sentence-blockB" data-name="${id2}">
    ${sentence20}${sentence22}<br>
    <div class="sentence1b2a">${sentence1b2a}</div>
    <div class="sentence1b22">${sentence1b22}</div>
</div>

<div class="sentence-blockB" data-name="${id3}">
    ${sentence30}${sentence33}<br>
    <div class="sentence1c2a">${sentence1c2a}</div>
    <div class="sentence1c22">${sentence1c22}</div>
</div>
`);

                        }, 0);

                    }


// Tworzymy kontener .image-container3
const $container = $('<div></div>');
$container.addClass('image-container3');
$container.css({
    position: 'relative',
    width: '100%',
    zIndex: 2000
});
$container.attr('data-lesson', indexDiv);
$('.grid-container').append($container);

const observer = new MutationObserver(() => {
  // 🔹 Szukamy kontenerów powiązanych z indexDiv0b
  const container3b    = document.querySelector(`.image-container3b[data-lesson="${index55 + 1}"]`);
  const container3bCur = document.querySelector(`.image-container3b[data-lesson="${index55}"]`);
  const container3     = document.querySelector(`.image-container3[data-lesson="${index55}"]`);
  // --- pierwszy warunek: indexDiv0b ---
  if (container3 && container3b && container3bCur) {
    container3b.parentNode.insertBefore(container3, container3b);
    console.log(`✅ Wstawiono55 container3 (data-lesson=${index55}) przed container3b (data-lesson=${index55 + 1})`);

    container3bCur.remove();
    console.log(`🗑️ Usunięto container3b o data-lesson=${index55}`);

    observer.disconnect();
    return;
  }
});

// obserwuj cały body i wszystkie poddrzewa
observer.observe(document.body, { childList: true, subtree: true });
                    const srcWords = [srcWord1, srcWord2, srcWord3];
                    const srcWordsb = [srcWord1d, srcWord2d, srcWord3d];
                    const srcWordsf = [srcWord1f, srcWord2f, srcWord3f];
                    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];

                    // Tworzymy kontenery dynamicznie

                    // Zmienna globalna przechowujĂÂca ÄšÂĂÂczny czas trwania wszystkich wideo
                    let videoDurations = [];
                    let totalDuration = 0;
                    for (let i = 0; i < srcWords.length; i++) {
                        const video = document.createElement('video');
                        video.src = srcWords[i];
                        video.addEventListener('loadedmetadata', function () {
                            totalDuration += this.duration;
                            console.log('tablica8', totalDuration);
                            console.log('dziaÄšÂa5');
                        });
                    }
                    console.log('tablica11', videoDurations);
                    function removePreviousVideo() {
                        const previousVideo = $container.find('video'); // Poprawne odwoÄšÂanie do poprzedniego wideo
                        if (previousVideo.length > 0) {
                            previousVideo.remove(); // UsuniĂÂcie poprzedniego wideo z kontenera
                        }
                    }
                    if (index55 === indexDiv) {
                        console.log('wykonuje siÄ22');
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo1(index) {
                                console.log('hej80', index);
                                // SprawdÄšĹ, czy jesteÄšÂmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    console.log("wykonuje siĂÂ");
                                    funkcjaWywolana = true;
                                }
                                // UsuÄšÂ poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tÄšÂa kontenera
                                const $vidDiv = $('<div>').addClass('background-video').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niÄšĹşszy
                                });

                                const $videoElement = $('<video>').attr({
                                    'autoplay': true,
                                    'muted': true,
                                    'loop': true
                                }).css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niÄšĹşszy
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasĂÂ CSS zaleÄšĹşnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // UtwÄĹrz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne uÄšĹşycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>

                                // ObsÄšÂuga bÄšÂĂÂdu ÄšÂadowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie moÄšĹşna zaÄšÂadowaĂÂ pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsÄšÂugi zdarzenia loadedmetadata
$videoElement.hide(); // Ukrycie wideo przed zaÄšÂadowaniem

$videoElement.on('loadedmetadata', function () {
    $videoElement.show(); // PokaÄšĹş wideo po zaÄšÂadowaniu metadanych

    const videoDuration = this.duration;
    videoDurations[index] = videoDuration;
    console.log('tablica77', totalDuration);

    $videoElement.on('timeupdate', function () {
        let adjustedProgress = 0;
        for (let i = 0; i < index; i++) {
            adjustedProgress += (videoDurations[i] / totalDuration) * 100;
        }
        adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[index] / totalDuration) * 100;
        updateProgress(adjustedProgress);
        console.log('hej78', index);

        if (!currentIndexValue.includes(index)) {
            currentIndexValue.push(index);
            console.log('hej70', currentIndexValue);
            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
            }
        }

        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
            console.log('Wideo zakoÄšÂczone, uruchamiam nastĂÂpne.');
            addVideo1(index + 1);
            updateProgress(0);
        }
    });
});
                                addScenes(index);
                                // Dodaj div z wideo do tÄšÂa kontenera
                                $vidDiv.appendTo($container);
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postĂÂpu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postĂÂpu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // WysokoÄšÂĂÂ paska postĂÂpu
                                        'background-color': 'green', // Kolor paska postĂÂpu
                                        'width': '140%', // Delikatne powiĂÂkszenie paska postĂÂpu o 2% w kaÄšĹşdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie rÄĹwnowagi dla powiĂÂkszenia paska postĂÂpu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // WysokoÄšÂĂÂ paska postĂÂpu
                                        'background-color': 'green', // Kolor paska postĂÂpu
                                        'width': '100%' // Delikatne powiĂÂkszenie paska postĂÂpu o 2% w kaÄšĹşdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodajĂÂca nowe elementy <div>
                                function addScenes(index) {
                                    // SprawdÄšĹ, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // JeÄšÂli istnieje, wyczyÄšÂĂÂ jego zawartoÄšÂĂÂ
                                        $sceneDiv.empty();
                                    } else {
                                        // JeÄšÂli nie istnieje, stwÄĹrz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielnoÄšÂci przez 2 speÄšÂniony2');
                                            // ZmieÄšÂ CSS paska napisu, aby wyÄšÂwietlaÄšÂ siĂÂ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielnoÄšÂci przez 1 speÄšÂniony2');
                                            // ZmieÄšÂ CSS paska napisu, aby wyÄšÂwietlaÄšÂ siĂÂ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-right': '-20px',
                                                'text-align': 'left',
                                                'background-color': 'blue',
                                                'z-index': '99999999999'
                                            });
                                        }
                                    }
                                }


// Tworzenie przycisku "Stop"
                                if (!stopButtonAdded) {
                                    const $stopButton = $('<img>')
                                            .attr('src', 'https://localhost/arbulanguage.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie wzglĂÂdem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaÄšĹnik
                                            })
                                            .on('click', function () {
                                                // PĂÂtla po wszystkich elementach wideo i zatrzymywanie kaÄšĹşdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // ZmieÄšÂ obrazek na "Play"
                                                        $stopButton.attr('src', 'https://localhost/arbulanguage.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // ZmieÄšÂ obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://localhost/arbulanguage.com/img/stopok2.png');
                                                    }
                                                });
                                            });

                                    // Dodanie przycisku do kontenera
                                    $stopButton.appendTo($container);

                                    // Pokazywanie przycisku na hover kontenera
                                    $container.on('mouseover', function () {
                                        $stopButton.show();
                                    });

                                    // Ukrywanie przycisku, gdy mysz opuÄšÂci kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk zostaÄšÂ dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo1(0);
                            }, 200);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo1b(index) {
                                console.log('hej80', index);
                                // SprawdÄšĹ, czy jesteÄšÂmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    console.log("wykonuje siĂÂ");
                                    funkcjaWywolana = true;
                                }
                                // UsuÄšÂ poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tÄšÂa kontenera
                                const $vidDiv = $('<div>').addClass('background-video22').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niÄšĹşszy
                                });

                                const $videoElement = $('<video>').attr({
                                    'autoplay': true,
                                    'muted': true,
                                    'loop': true
                                }).css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niÄšĹşszy
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasĂÂ CSS zaleÄšĹşnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // UtwÄĹrz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne uÄšĹşycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>

                                // ObsÄšÂuga bÄšÂĂÂdu ÄšÂadowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie moÄšĹşna zaÄšÂadowaĂÂ pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsÄšÂugi zdarzenia loadedmetadata
                                $videoElement.on('loadedmetadata', function () {
                                    const videoDuration = this.duration;
                                    videoDurations[index] = videoDuration;
                                    console.log('tablica77', totalDuration);
                                    $videoElement.on('timeupdate', function () {
                                        let adjustedProgress = 0;
                                        for (let i = 0; i < index; i++) {
                                            adjustedProgress += (videoDurations[i] / totalDuration) * 100;
                                        }
                                        adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[index] / totalDuration) * 100;
                                        updateProgress(adjustedProgress);
                                        console.log('hej78', index);
                                        // SprawdÄšĹ, czy wartoÄšÂĂÂ index nie zostaÄšÂa jeszcze dodana do tablicy currentIndex
                                        if (!currentIndexValue.includes(index)) {
                                            // Dodaj index do tablicy currentIndex
                                            currentIndexValue.push(index);
                                            console.log('hej70', currentIndexValue);
                                            // WywoÄšÂaj funkcjĂÂ addBackgroundToText tylko raz
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                                            }
                                        }

                                        // SprawdÄšĹ, czy wideo zostaÄšÂo zakoÄšÂczone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakoÄšÂczone, uruchamiam nastĂÂpne.');
                                            // OdtwÄĹrz nastĂÂpne wideo po zakoÄšÂczeniu poprzedniego
                                            addVideo1b(index + 1);
                                            updateProgress(0);
                                        }
                                    });
                                });
                                addScenes(index);
                                // Dodaj div z wideo do tÄšÂa kontenera
                                $vidDiv.appendTo($container);
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postĂÂpu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postĂÂpu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // WysokoÄšÂĂÂ paska postĂÂpu
                                        'background-color': 'green', // Kolor paska postĂÂpu
                                        'width': '140%', // Delikatne powiĂÂkszenie paska postĂÂpu o 2% w kaÄšĹşdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie rÄĹwnowagi dla powiĂÂkszenia paska postĂÂpu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // WysokoÄšÂĂÂ paska postĂÂpu
                                        'background-color': 'green', // Kolor paska postĂÂpu
                                        'width': '100%' // Delikatne powiĂÂkszenie paska postĂÂpu o 2% w kaÄšĹşdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodajĂÂca nowe elementy <div>
                                function addScenes(index) {
                                    // SprawdÄšĹ, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // JeÄšÂli istnieje, wyczyÄšÂĂÂ jego zawartoÄšÂĂÂ
                                        $sceneDiv.empty();
                                    } else {
                                        // JeÄšÂli nie istnieje, stwÄĹrz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielnoÄšÂci przez 2 speÄšÂniony2');
                                            // ZmieÄšÂ CSS paska napisu, aby wyÄšÂwietlaÄšÂ siĂÂ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielnoÄšÂci przez 1 speÄšÂniony2');
                                            // ZmieÄšÂ CSS paska napisu, aby wyÄšÂwietlaÄšÂ siĂÂ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-right': '-20px',
                                                'text-align': 'left',
                                                'background-color': 'blue',
                                                'z-index': '99999999999'
                                            });
                                        }
                                    }
                                }


// Tworzenie przycisku "Stop"
                                if (!stopButtonAdded) {
                                    const $stopButton = $('<img>')
                                            .attr('src', 'https://localhost/arbulanguage.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie wzglĂÂdem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaÄšĹnik
                                            })
                                            .on('click', function () {
                                                // PĂÂtla po wszystkich elementach wideo i zatrzymywanie kaÄšĹşdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // ZmieÄšÂ obrazek na "Play"
                                                        $stopButton.attr('src', 'https://localhost/arbulanguage.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // ZmieÄšÂ obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://localhost/arbulanguage.com/img/stopok2.png');
                                                    }
                                                });
                                            });

                                    // Dodanie przycisku do kontenera
                                    $stopButton.appendTo($container);

                                    // Pokazywanie przycisku na hover kontenera
                                    $container.on('mouseover', function () {
                                        $stopButton.show();
                                    });

                                    // Ukrywanie przycisku, gdy mysz opuÄšÂci kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk zostaÄšÂ dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo1b(0);
                            }, 200);
                        }
                        }
                        
                        
                    

                        
                    // StwÄĹrz przycisk za pomocĂÂ jQuery
                    // Tworzenie nowego elementu div za pomocĂÂ jQuery


                    if (!isSearching) {
    var $sentenceDivB = $('<div></div>');
    $sentenceDivB.addClass('sentenceBA');

    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';

    $sentenceDivB.html(`
<div class="sentence-blockB" data-name="${id1}">
    ${sentence10}${sentence11}<br>
    <div class="sentence1b">${sentence1b}</div>
    <div class="sentence1b2">${sentence1b2}</div>
</div>

<div class="sentence-blockB" data-name="${id2}">
    ${sentence20}${sentence22}<br>
    <div class="sentence1b2a">${sentence1b2a}</div>
    <div class="sentence1b22">${sentence1b22}</div>
</div>

<div class="sentence-blockB" data-name="${id3}">
    ${sentence30}${sentence33}<br>
    <div class="sentence1c2a">${sentence1c2a}</div>
    <div class="sentence1c22">${sentence1c22}</div>
</div>
`);
                        $sentenceDivB.css({
                            'position': 'absolute',
                            'margin-top': '40px',
                            'text-align': 'center',
                            'z-index': '100'
                        });
                    }
                    
                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDivB);
                    tablica10.push(srcWords);
                    console.log('hej6', tablica10);
                }
            }
                
            