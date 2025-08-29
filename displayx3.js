            
            const tablica10 = [];
            const displayedIds = [];
function showCombinedSentenceForLesson(number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, newIndex10, indexDiv, indexDiv0, indexDiv0b, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
                console.log('hej55bbv', buttonindex);
                console.log('hej100', index50);
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

                            console.log('RozpoczÄcie funkcji addBackgroundToText');
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
                                    continue; // JeĹli sentence1 nie istnieje lub jest puste, przejdĹş do nastÄpnej fiszki
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieĹźÄcej fiszki znajduje siÄ w tablicy matchingIndexes
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieĹźÄcej fiszki znajduje siÄ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                        } else if (currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
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
                                    continue; // JeĹli sentence1 nie istnieje lub jest puste, przejdĹş do nastÄpnej fiszki
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieĹźÄcej fiszki znajduje siÄ w tablicy matchingIndexes
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieĹźÄcej fiszki znajduje siÄ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
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
                                    continue; // JeĹli sentence1 nie istnieje lub jest puste, przejdĹş do nastÄpnej fiszki
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieĹźÄcej fiszki znajduje siÄ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieĹźÄcej fiszki znajduje siÄ w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawieraĹ utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    sentence33 += sentencePart2 + " ";
                                }
                            }

                            // Dodanie treĹci do diva wraz z przyciskiem
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

// przycisk w grid-container
const $button = $('<button></button>')
    .addClass('run-button4')
    .text('Uruchom-działa')
    .attr('data-index2', indexDiv)
    .css({
        position: 'absolute',
        zIndex: 999999, // żeby zawsze był na wierzchu
        background: 'white',
        border: '1px solid #aaa'
    })
    .on('click', function () {
        const index5 = $(this).attr('data-index2');
        const index55 = parseInt(index5, 10);

        setTimeout(() => {
            console.log('Kliknięto przycisk o indeksie:', index55);
            przekazArgument0(
                tablica7[0], tablica3[2], index55,
                true, tablica3[0], true, true,
                tablica3[1], tablica3[4],
                false, '', '', '', '', indexDivRange
            );
        }, 100);
    })
    .appendTo('.grid-container');

// Funkcja aktualizująca pozycję przycisku względem kontenera
function updateButtonPosition() {
    if ($container.length && $button.length) {
        const offset = $container.offset(); // pozycja względem dokumentu
        const gridOffset = $('.grid-container').offset(); // pozycja grid-container
        // ustaw pozycję absolutną w grid-container
        $button.css({
            top: offset.top - gridOffset.top - 10 + 'px',  // 10px nad kontenerem
            left: offset.left - gridOffset.left + 10 + 'px'
        });
    }
    requestAnimationFrame(updateButtonPosition);
}

// Uruchamiamy pętlę aktualizującą pozycję
updateButtonPosition();


const $insertedContainer = $(`.image-container3b[data-lesson="${indexDiv + 1}"],
                             .image-container3b[data-lesson="${indexDiv + 2}"]`);

if ($insertedContainer.length > 0) {
    $container.insertBefore($insertedContainer.first());
} else {
    // Jeśli nie ma takiego kontenera, dodaj na koniec
    $('.grid-container').append($container);
}

                    const srcWords = [srcWord1, srcWord2, srcWord3];
                    const srcWordsb = [srcWord1d, srcWord2d, srcWord3d];
                    const srcWordsf = [srcWord1f, srcWord2f, srcWord3f];
                    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];
                                            console.log("srcWord1b:", srcWord1d);
console.log("srcWord2b:", srcWord2b);
console.log("srcWord3b:", srcWord3b);
                    // Tworzymy kontenery dynamicznie

                    console.log('hej155', srcWordsb);
                    // Zmienna globalna przechowujÄca ĹÄczny czas trwania wszystkich wideo
                    let videoDurations = [];
                    let totalDuration = 0;
                    for (let i = 0; i < srcWords.length; i++) {
                        const video = document.createElement('video');
                        video.src = srcWords[i];
                        video.addEventListener('loadedmetadata', function () {
                            totalDuration += this.duration;
                            console.log('tablica8', totalDuration);
                            console.log('dziaĹa5');
                        });
                    }
                    console.log('tablica11', videoDurations);
                    function removePreviousVideo() {
                        const previousVideo = $container.find('video'); // Poprawne odwoĹanie do poprzedniego wideo
                        if (previousVideo.length > 0) {
                            previousVideo.remove(); // UsuniÄcie poprzedniego wideo z kontenera
                        }
                    }
                    if ((newIndex === 0 || newIndex10 === 0) && !buttonindex && !isSearching && !number) {
                        console.log('hej33b', buttonindex);
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo1(index) {
                                console.log('hej80', index);
                                // SprawdĹş, czy jesteĹmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    console.log("wykonuje siÄ");
                                    funkcjaWywolana = true;
                                }
                                // UsuĹ poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tĹa kontenera
                                const $vidDiv = $('<div>').addClass('background-video').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });

                                const $videoElement = $('<video>').attr({
                                    'autoplay': true,
                                    'muted': true,
                                    'loop': true
                                }).css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasÄ CSS zaleĹźnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // UtwĂłrz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne uĹźycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>

                                // ObsĹuga bĹÄdu Ĺadowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie moĹźna zaĹadowaÄ pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsĹugi zdarzenia loadedmetadata
$videoElement.hide(); // Ukrycie wideo przed zaĹadowaniem

$videoElement.on('loadedmetadata', function () {
    $videoElement.show(); // PokaĹź wideo po zaĹadowaniu metadanych

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
            console.log('Wideo zakoĹczone, uruchamiam nastÄpne.');
            addVideo1(index + 1);
            updateProgress(0);
        }
    });
});
                                addScenes(index);
                                // Dodaj div z wideo do tĹa kontenera
                                $vidDiv.appendTo($container);
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postÄpu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postÄpu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '140%', // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie rĂłwnowagi dla powiÄkszenia paska postÄpu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '100%' // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodajÄca nowe elementy <div>
                                function addScenes(index) {
                                    // SprawdĹş, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // JeĹli istnieje, wyczyĹÄ jego zawartoĹÄ
                                        $sceneDiv.empty();
                                    } else {
                                        // JeĹli nie istnieje, stwĂłrz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielnoĹci przez 2 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielnoĹci przez 1 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
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
                                            .attr('src', 'https://www.arbulang.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie wzglÄdem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaĹşnik
                                            })
                                            .on('click', function () {
                                                // PÄtla po wszystkich elementach wideo i zatrzymywanie kaĹźdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // ZmieĹ obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // ZmieĹ obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/stopok2.png');
                                                    }
                                                });
                                            });

                                    // Dodanie przycisku do kontenera
                                    $stopButton.appendTo($container);

                                    // Pokazywanie przycisku na hover kontenera
                                    $container.on('mouseover', function () {
                                        $stopButton.show();
                                    });

                                    // Ukrywanie przycisku, gdy mysz opuĹci kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk zostaĹ dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo1(0);
                            }, 200);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo1b(index) {
                                console.log('hej80', index);
                                // SprawdĹş, czy jesteĹmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    console.log("wykonuje siÄ");
                                    funkcjaWywolana = true;
                                }
                                // UsuĹ poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tĹa kontenera
                                const $vidDiv = $('<div>').addClass('background-video22').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });

                                const $videoElement = $('<video>').attr({
                                    'autoplay': true,
                                    'muted': true,
                                    'loop': true
                                }).css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasÄ CSS zaleĹźnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // UtwĂłrz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne uĹźycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>

                                // ObsĹuga bĹÄdu Ĺadowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie moĹźna zaĹadowaÄ pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsĹugi zdarzenia loadedmetadata
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
                                        // SprawdĹş, czy wartoĹÄ index nie zostaĹa jeszcze dodana do tablicy currentIndex
                                        if (!currentIndexValue.includes(index)) {
                                            // Dodaj index do tablicy currentIndex
                                            currentIndexValue.push(index);
                                            console.log('hej70', currentIndexValue);
                                            // WywoĹaj funkcjÄ addBackgroundToText tylko raz
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                                            }
                                        }

                                        // SprawdĹş, czy wideo zostaĹo zakoĹczone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakoĹczone, uruchamiam nastÄpne.');
                                            // OdtwĂłrz nastÄpne wideo po zakoĹczeniu poprzedniego
                                            addVideo1b(index + 1);
                                            updateProgress(0);
                                        }
                                    });
                                });
                                addScenes(index);
                                // Dodaj div z wideo do tĹa kontenera
                                $vidDiv.appendTo($container);
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postÄpu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postÄpu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '140%', // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie rĂłwnowagi dla powiÄkszenia paska postÄpu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '100%' // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodajÄca nowe elementy <div>
                                function addScenes(index) {
                                    // SprawdĹş, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // JeĹli istnieje, wyczyĹÄ jego zawartoĹÄ
                                        $sceneDiv.empty();
                                    } else {
                                        // JeĹli nie istnieje, stwĂłrz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielnoĹci przez 2 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielnoĹci przez 1 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
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
                                            .attr('src', 'https://www.arbulang.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie wzglÄdem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaĹşnik
                                            })
                                            .on('click', function () {
                                                // PÄtla po wszystkich elementach wideo i zatrzymywanie kaĹźdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // ZmieĹ obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // ZmieĹ obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/stopok2.png');
                                                    }
                                                });
                                            });

                                    // Dodanie przycisku do kontenera
                                    $stopButton.appendTo($container);

                                    // Pokazywanie przycisku na hover kontenera
                                    $container.on('mouseover', function () {
                                        $stopButton.show();
                                    });

                                    // Ukrywanie przycisku, gdy mysz opuĹci kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk zostaĹ dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo1b(0);
                            }, 200);
                        }
                        } else if ((newIndex === 0 || newIndex10 === 0) && !buttonindex && !isSearching && number) {
                            $('.image-container3b').each(function() {
  this.style.setProperty('position', 'relative', 'important');
  this.style.setProperty('z-index', '1', 'important');
});
    // === przygotowanie kontenera ===
    const $gridContainer = $('.grid-container');
    $gridContainer.css('position', 'relative');

    // ===========================
    // Funkcje i przyciski "nike" (tylko ramka podczas odliczania; fill po zakończeniu)
    // ===========================
    function makeNikeButton(storageKey, title) {
        const $btn = $('<button class="nike-button" aria-label="' + title + '"></button>');
        $btn.html('<span class="nike-icon">✓</span>');
        $btn.data('storageKey', storageKey);
        $btn.css({
            width: '44px',
            height: '44px',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            'border-radius': '8px',
            border: '3px solid #aaa',
            'background-color': 'transparent',
            color: '#444',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            'font-size': '18px',
            'line-height': '1'
        });
        return $btn;
    }

function restoreNikeButtonState($btn) {
    const key = $btn.data('storageKey');
    if (localStorage.getItem(key) === 'done') {
        $btn.addClass('filled');
        $btn.css({
            'background-color': 'green',
            color: 'black',        // ikona ✓ czarna
            border: '3px solid green'
        });
    } else {
        $btn.removeClass('filled');
        $btn.css({
            'background-color': 'transparent',
            color: '#444',
            border: '3px solid #aaa'
        });
    }
}

function setNikeActive($btn) {
    $btn.addClass('active');
    $btn.css({
        'border': '5px solid green',  // teraz grubsza ramka
        'background-color': 'transparent',
        color: '#444'                 // ikona pozostaje czarna
    });
}

    function clearNikeActive($btn) {
        $btn.removeClass('active');
        if (!$btn.hasClass('filled')) $btn.css('border-color', '#aaa');
    }

    function resetNikeButtons() {
        [$nike1, $nike2, $nike3].forEach(btn => {
            if (!btn.hasClass('filled')) {
                btn.find('.fill-bar').remove();
                btn.css({'background-color':'transparent', color:'#444', 'border-color': '#aaa'});
            }
            btn.removeClass('active');
        });
    }

    // finishNikeFill -> dopiero tutaj tworzymy fill-bar i zapisujemy stan
function finishNikeFill($btn, storageKey) {
    if (localStorage.getItem(storageKey) === 'done') {
        restoreNikeButtonState($btn);
        return;
    }

    // Usuń ewentualne active klasy
    $btn.removeClass('active');

    // Ustaw styl "pełnego wypełnienia" – zielone tło, czarna ikona
    $btn.addClass('filled');
    $btn.css({
        'background-color': 'green',
        color: 'black',          // ikona ✓ czarna
        border: '3px solid green'
    });

    // Zapisz w localStorage
    localStorage.setItem(storageKey, 'done');
}

    // convenience: jeśli chcesz aby nike "samo" uruchomiło i samo skończyło (np. przypadek tablica55)
function startNikeAuto(duration, $btn, storageKey) {
    if (localStorage.getItem(storageKey) === 'done') {
        restoreNikeButtonState($btn);
        return;
    }

    // ustaw ramkę aktywną dla tego przycisku
    setNikeActive($btn);

    // po odliczaniu wypełnienie
    setTimeout(() => {
        finishNikeFill($btn, storageKey);
    }, duration);
}
    // Tworzymy 3 "nike" przyciski
// Tworzymy 3 "nike" przyciski
const $nike1 = makeNikeButton('nike1Done', 'Nike 1');
const $nike2 = makeNikeButton('nike2Done', 'Nike 2');
const $nike3 = makeNikeButton('nike3Done', 'Nike 3');

// Kontener na przyciski – teraz GLOBALNY, a nie w grid-container
const $buttonsContainer = $('<div id="nikeBar"></div>').css({
    position: 'fixed',     // <<< klucz
    bottom: '10px',        // odległość od dołu ekranu
    right: '20px',         // odległość od prawej
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    zIndex: 9999999999,          // <<< klucz – wyżej niż wszystko
    'background-color': 'rgba(255,255,255,0.8)',
    'padding': '8px',
    'border-radius': '12px',
    'box-shadow': '0 2px 8px rgba(0,0,0,0.3)'
});

$buttonsContainer.append($nike1, $nike2, $nike3);
$('body').append($buttonsContainer); // <<< WAŻNE – do body, a nie do grid-container

    // Przywróć stan z localStorage dla każdego nike
    [$nike1, $nike2, $nike3].forEach(btn => restoreNikeButtonState(btn));

    // opcjonalne kliknięcia (jeżeli chcesz manualne uruchamianie)
    $nike1.on('click', () => {
        if (localStorage.getItem('nike1Done') !== 'done') {
            // pokaż ramkę (active) i ustaw szybką auto-symulację fill po 8s:
            startNikeAuto(8000, $nike1, 'nike1Done');
        }
    });
    $nike2.on('click', () => {
        if (localStorage.getItem('nike2Done') !== 'done') startNikeAuto(8000, $nike2, 'nike2Done');
    });
    $nike3.on('click', () => {
        if (localStorage.getItem('nike3Done') !== 'done') startNikeAuto(8000, $nike3, 'nike3Done');
    });

    // Jeżeli chcesz, aby przy tablica55 uruchamiał się automatycznie, użyj startNikeAuto
    if (tablica55 && tablica55[0] === true) {
        // uruchamia ramkę natychmiast; po 8000ms wypełni się
        startNikeAuto(8000, $nike1, 'nike1Done');
    }
    if (tablica55 && tablica55[2] === true) {
        startNikeAuto(8000, $nike2, 'nike2Done');
    }

    // ===========================
    // Dalej: Twój oryginalny kontener + licznik (integracja)
    // ===========================
    $container.css({
      'position': 'relative',
      'height': '100px',
      'overflow': 'hidden',
      'border': '1px solid #ccc'
    });



// Tworzenie licznika w kontenerze
const $countdown = $('<p>')
    .attr('id', 'countdown-timer')
    .css({
        'font-size': '14px',       // standardowa wielkość liter na PC
        'font-weight': 'bold',
        'color': 'green',
        'margin': '0 auto',        // automatyczne marginesy do wycentrowania
        'position': 'absolute',
        'top': '0px',
        'left': '50%',             // ustawienie na środek
        'transform': 'translateX(-50%)', // korekta przesunięcia
        'z-index': '10',
        'line-height': '30px',
        'height': '30px',
        'width': '250px',
        'text-align': 'center',
        'user-select': 'none',
        'text-transform': 'none'   // normalne litery, nie uppercase
    })
    .text('30 sekund do uruchomienia filmów');

$container.append($countdown);

// Responsywność dla smartfona
const style = document.createElement('style');
style.innerHTML = `
  @media (max-width: 480px) {
    #countdown-timer {
      font-size: 14px !important; /* mniejsze litery na telefon */
      width: 200px !important;    /* dostosowana szerokość */
    }
  }
`;
document.head.appendChild(style);

// === INTEGRACJA: przed startem lokalnego licznika ustawiamy tylko RAMKĘ na zielono ===
if (localStorage.getItem('nike1Done') !== 'done') {
    setNikeActive($nike1);
}

// Start lokalnego licznika (30s)
let counter = 30;
let countdownInterval = setInterval(() => {
    counter--;
    $countdown.text(counter + ' sekund do uruchomienia filmów');

    if (counter === 0) {
        clearInterval(countdownInterval);
        $countdown.remove();

        finishNikeFill($nike1, 'nike1Done');

        przekazArgument0(
            tablica7[0], tablica3[2], undefined, false,
            tablica3[0], true, true, tablica3[1], tablica3[4],
            false, '', '', '', '', '100', indexDiv0, indexDiv0b
        );
    }
}, 1000);

    window.myCountdownInterval = countdownInterval;

    // Kontener na tekst + propozycje
    const $textContainer = $('<div></div>').css({
      'position': 'absolute',
      'top': '20px',
      'left': '0',
      'right': '0',
      'bottom': '0',
      'overflow-y': 'auto',
      'padding': '0 10px',
      'font-size': '10px',
      'text-align': 'center',
      'background-color': '#f9f9f9'
    });

$textContainer.append(
    $('<p>')
        .text('Może zainteresują Cię kadry z tych filmów:')
        .addClass('text-intro')
);
    // Iteracja Twoich list (srcWords2, srcWordsb, srcWordsf)
srcWords2.forEach((name, idxLesson) => {
    if (!name) return;

    const thumb = srcWordsb[idxLesson] || '';
    const textF = srcWordsf[idxLesson] || '';

    const $item = $('<div></div>').addClass('video-item');
    const $img = $('<img>').attr('src', thumb).attr('alt', name)
        .on('error', function() { $(this).css({'background':'#ccc'}).attr('alt','Brak miniatury'); })
        .addClass('video-thumb');

    const $rightCol = $('<div></div>').addClass('video-text');
    const $videoName = $('<p></p>').text(name).addClass('video-name');
    const $videoTextF = $('<p></p>').text(textF).addClass('video-subtext');

    // ===== kontener opisu + ikonka =====
    const $descContainer = $('<div></div>').css({
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    });
    $videoTextF.css({margin:0, flex:1});
    const $icon = $('<span></span>').text('🔄').css({
        cursor: 'pointer',
        fontSize: '20px',
        userSelect: 'none'
    }).attr('title','Odśwież dane fiszki');

    $descContainer.append($videoTextF, $icon);
    $rightCol.append($videoName, $descContainer);
    $item.append($img, $rightCol);
    $textContainer.append($item);

$icon.on('click', function() {
    // Tworzymy kontener na Twoje zdanie
    const $sentenceDivB = $('<div></div>').addClass('sentenceBA');

    // Wywołanie Twojej funkcji generującej zdania
    addBackgroundToText(matchingFiszki1, matchingIndexes, '1', true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);

    // Wstawienie wygenerowanych zdań do kontenera
    $sentenceDivB.html(`
        <div class="sentence-blockB" data-name="${matchingFiszki1[0]?.id[1] || 'unknown1'}">
            ${sentence10}${sentence11}<br>
        </div>
    `);

    // Stylizacja kontenera
    $sentenceDivB.css({
        'position': 'absolute',
        'margin-top': '10px',
        'text-align': 'center',
        'z-index': '100'
    });

    // Dodanie kontenera do elementu wideo
    $item.append($sentenceDivB);
});
});

    $container.append($textContainer);
    return;
} else if (newIndex10 === 0 && !isSearching) {
        if (window.myCountdownInterval) {
        clearInterval(window.myCountdownInterval); // zatrzymanie licznika
        $('#countdown-timer').remove();           // usuniÄcie elementu
        window.myCountdownInterval = null;        // wyczyszczenie referencji
    }
                        console.log('hej33b', buttonindex);
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo1(index) {
                                console.log('hej80', index);
                                // SprawdĹş, czy jesteĹmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    console.log("wykonuje siÄ");
                                    funkcjaWywolana = true;
                                }
                                // UsuĹ poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tĹa kontenera
                                const $vidDiv = $('<div>').addClass('background-video').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });

                                const $videoElement = $('<video>').attr({
                                    'autoplay': true,
                                    'muted': true,
                                    'loop': true
                                }).css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasÄ CSS zaleĹźnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // UtwĂłrz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne uĹźycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>

                                // ObsĹuga bĹÄdu Ĺadowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie moĹźna zaĹadowaÄ pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsĹugi zdarzenia loadedmetadata
$videoElement.hide(); // Ukrycie wideo przed zaĹadowaniem

$videoElement.on('loadedmetadata', function () {
    $videoElement.show(); // PokaĹź wideo po zaĹadowaniu metadanych

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
            console.log('Wideo zakoĹczone, uruchamiam nastÄpne.');
            addVideo1(index + 1);
            updateProgress(0);
        }
    });
});
                                addScenes(index);
                                // Dodaj div z wideo do tĹa kontenera
                                $vidDiv.appendTo($container);
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postÄpu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postÄpu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '140%', // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie rĂłwnowagi dla powiÄkszenia paska postÄpu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '100%' // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodajÄca nowe elementy <div>
                                function addScenes(index) {
                                    // SprawdĹş, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // JeĹli istnieje, wyczyĹÄ jego zawartoĹÄ
                                        $sceneDiv.empty();
                                    } else {
                                        // JeĹli nie istnieje, stwĂłrz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielnoĹci przez 2 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielnoĹci przez 1 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
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
                                            .attr('src', 'https://www.arbulang.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie wzglÄdem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaĹşnik
                                            })
                                            .on('click', function () {
                                                // PÄtla po wszystkich elementach wideo i zatrzymywanie kaĹźdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // ZmieĹ obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // ZmieĹ obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/stopok2.png');
                                                    }
                                                });
                                            });

                                    // Dodanie przycisku do kontenera
                                    $stopButton.appendTo($container);

                                    // Pokazywanie przycisku na hover kontenera
                                    $container.on('mouseover', function () {
                                        $stopButton.show();
                                    });

                                    // Ukrywanie przycisku, gdy mysz opuĹci kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk zostaĹ dodany
                                }
                                // Pobierz numer lekcji z data-lesson kontenera
const lessonNumber = $container.attr('data-lesson');

// Tworzymy przycisk tylko jeśli jeszcze go nie ma w kontenerze

    const $buttonb2 = $('<button></button>')
        .addClass('run-button3')
        .text(`Otwórz lekcję`) // faktyczny numer lekcji
        .attr('data-lesson-number', lessonNumber)
        .css({
            position: 'absolute',
            top: '5px',
            right: '5px',
            'z-index': 2000,
            color: 'white',
            'background-color': '#007bff',
            border: 'none',
            'border-radius': '4px',
            padding: '5px 10px',
            cursor: 'pointer'
        });

    // Kliknięcie otwiera link do całej trójki (lekcji)
    $buttonb2.on('click', function () {
        const lessonNum = parseInt($(this).attr('data-lesson-number'), 10);
        const startIndex = (lessonNum - 1) * 3 + 1;
        const link = `demo1angielski.html?category=${selectedCategory}&data=${startIndex},${startIndex + 1},${startIndex + 2}`;
        window.open(link, '_blank');
    });

    $container.append($buttonb2);
                            }
                            setTimeout(function () {
                                addVideo1(0);
                            }, 200);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo1b(index) {
                                console.log('hej80', index);
                                // SprawdĹş, czy jesteĹmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    console.log("wykonuje siÄ");
                                    funkcjaWywolana = true;
                                }
                                // UsuĹ poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tĹa kontenera
                                const $vidDiv = $('<div>').addClass('background-video22').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });

                                const $videoElement = $('<video>').attr({
                                    'autoplay': true,
                                    'muted': true,
                                    'loop': true
                                }).css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niĹźszy
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasÄ CSS zaleĹźnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // UtwĂłrz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne uĹźycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>

                                // ObsĹuga bĹÄdu Ĺadowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie moĹźna zaĹadowaÄ pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsĹugi zdarzenia loadedmetadata
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
                                        // SprawdĹş, czy wartoĹÄ index nie zostaĹa jeszcze dodana do tablicy currentIndex
                                        if (!currentIndexValue.includes(index)) {
                                            // Dodaj index do tablicy currentIndex
                                            currentIndexValue.push(index);
                                            console.log('hej70', currentIndexValue);
                                            // WywoĹaj funkcjÄ addBackgroundToText tylko raz
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                                            }
                                        }

                                        // SprawdĹş, czy wideo zostaĹo zakoĹczone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakoĹczone, uruchamiam nastÄpne.');
                                            // OdtwĂłrz nastÄpne wideo po zakoĹczeniu poprzedniego
                                            addVideo1b(index + 1);
                                            updateProgress(0);
                                        }
                                    });
                                });
                                addScenes(index);
                                // Dodaj div z wideo do tĹa kontenera
                                $vidDiv.appendTo($container);
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postÄpu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postÄpu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '140%', // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie rĂłwnowagi dla powiÄkszenia paska postÄpu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // WysokoĹÄ paska postÄpu
                                        'background-color': 'green', // Kolor paska postÄpu
                                        'width': '100%' // Delikatne powiÄkszenie paska postÄpu o 2% w kaĹźdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodajÄca nowe elementy <div>
                                function addScenes(index) {
                                    // SprawdĹş, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // JeĹli istnieje, wyczyĹÄ jego zawartoĹÄ
                                        $sceneDiv.empty();
                                    } else {
                                        // JeĹli nie istnieje, stwĂłrz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielnoĹci przez 2 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielnoĹci przez 1 speĹniony2');
                                            // ZmieĹ CSS paska napisu, aby wyĹwietlaĹ siÄ po lewej stronie kontenera
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
                                            .attr('src', 'https://www.arbulang.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie wzglÄdem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaĹşnik
                                            })
                                            .on('click', function () {
                                                // PÄtla po wszystkich elementach wideo i zatrzymywanie kaĹźdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // ZmieĹ obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // ZmieĹ obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/stopok2.png');
                                                    }
                                                });
                                            });

                                    // Dodanie przycisku do kontenera
                                    $stopButton.appendTo($container);

                                    // Pokazywanie przycisku na hover kontenera
                                    $container.on('mouseover', function () {
                                        $stopButton.show();
                                    });

                                    // Ukrywanie przycisku, gdy mysz opuĹci kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk zostaĹ dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo1b(0);
                            }, 200);
                        }
                        // Pobierz numer lekcji z data-lesson kontenera
const lessonNumber = $container.attr('data-lesson');

// Tworzymy przycisk tylko jeśli jeszcze go nie ma w kontenerze

    const $buttonb2 = $('<button></button>')
        .addClass('run-button3')
        .text(`Otwórz lekcję ${lessonNumber}`) // faktyczny numer lekcji
        .attr('data-lesson-number', lessonNumber)
        .css({
            position: 'absolute',
            top: '5px',
            right: '5px',
            'z-index': 2000,
            color: 'white',
            'background-color': '#007bff',
            border: 'none',
            'border-radius': '4px',
            padding: '5px 10px',
            cursor: 'pointer'
        });

    // Kliknięcie otwiera link do całej trójki (lekcji)
    $buttonb2.on('click', function () {
        const lessonNum = parseInt($(this).attr('data-lesson-number'), 10);
        const startIndex = (lessonNum - 1) * 3 + 1;
        const link = `demo1angielski.html?category=${selectedCategory}&data=${startIndex},${startIndex + 1},${startIndex + 2}`;
        window.open(link, '_blank');
    });

    $container.append($buttonb2);
                        }
                        
                    // StwĂłrz przycisk za pomocÄ jQuery
                    // Tworzenie nowego elementu div za pomocÄ jQuery


                    if ((newIndex === 0 && !buttonindex && !isSearching) || (newIndex10 === 0 && !isSearching && number)) {
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

// Dodanie przycisku do kontenera â OD RAZU po jego stworzeniu
$container.append($button);
                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDivB);
                    tablica10.push(srcWords);
                    console.log('hej6', tablica10);

                }

                // Deklaracja tablicy, ktĂłra bÄdzie zawieraÄ wszystkie tablice
            }