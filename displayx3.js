            
            const tablica10 = [];

                        let sentence1bVisible = false;
            let sentence1baVisible = false;
            let sentence1b3aVisible = false;
                        let tablica12ab = [];
            let tablica12ad = [];
            let tablica12abc = [];
            const displayedIds = [];
function showCombinedSentenceForLesson(number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, newIndex10, indexDiv, indexDiv0b, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
                console.log('hej55bbv', indexDiv);
                console.log('hej100', newIndex);
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
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                    const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                    const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki);
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
                    console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);


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

                            console.log('Rozpoczęcie funkcji addBackgroundToText');
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
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                        } else if (currentIndexValue == 0) {

                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                        } else if (currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
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
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
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
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
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
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    sentence33 += sentencePart2 + " ";
                                }
                            }

                            // Dodanie treści do diva wraz z przyciskiem
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


// Tworzymy nowy kontener
const $container = $('<div></div>');
$container.addClass('image-container3');
$container.css('position', 'relative');
$container.attr('data-lesson', indexDiv);

const $insertedContainer = $(`.image-container3b[data-lesson="${indexDiv + 1}"]`);
if ($insertedContainer.length > 0) {
    $container.insertBefore($insertedContainer);
} else {
    // Jeśli nie ma takiego kontenera, dodaj na koniec
    $('.grid-container').append($container);
}


                    const srcWords = [srcWord1, srcWord2, srcWord3];
                    const srcWordsb = [srcWord1d, srcWord2d, srcWord3d];
                    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];
                                            console.log("srcWord1b:", srcWord1d);
console.log("srcWord2b:", srcWord2b);
console.log("srcWord3b:", srcWord3b);
                    // Tworzymy kontenery dynamicznie

                    console.log('hej155', srcWordsb);
                    // Zmienna globalna przechowująca łączny czas trwania wszystkich wideo
                    let videoDurations = [];
                    let totalDuration = 0;
                    for (let i = 0; i < srcWords.length; i++) {
                        const video = document.createElement('video');
                        video.src = srcWords[i];
                        video.addEventListener('loadedmetadata', function () {
                            totalDuration += this.duration;
                            console.log('tablica8', totalDuration);
                            console.log('działa5');
                        });
                    }
                    console.log('tablica11', videoDurations);
                    function removePreviousVideo() {
                        const previousVideo = $container.find('video'); // Poprawne odwołanie do poprzedniego wideo
                        if (previousVideo.length > 0) {
                            previousVideo.remove(); // Usunięcie poprzedniego wideo z kontenera
                        }
                    }
                    if ((newIndex === 0 || newIndex10 === 0) && !buttonindex && !isSearching && !number) {
                        console.log('hej33b', buttonindex);
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo1(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    przekazArgument0(tablica7[0], tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niższy
                                });

const video = document.createElement('video');
video.setAttribute('autoplay', '');
video.setAttribute('loop', '');
video.muted = true; // ← to jest kluczowe!
video.playsInline = true; // ← opcjonalne, ale przydatne na mobile

const source = document.createElement('source');
source.src = srcWords[index];
source.type = 'video/mp4';

video.appendChild(source);
const $videoElement = $(video);
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasę CSS zależnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // Utwórz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne użycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>
$videoElement.attr('muted', true); // atrybut, nie .prop
                                // Obsługa błędu ładowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsługi zdarzenia loadedmetadata
$videoElement.hide(); // Ukrycie wideo przed załadowaniem
function ensureVideoStarts($videoElement, index) {
    let retryCount = 0;
    const maxRetries = 20;
    let started = false;

    function tryStart() {
        if (started) return;
        const el = $videoElement[0];
        const duration = el.duration;

        if (el.readyState < 3 || isNaN(duration) || duration === Infinity || duration === 0) {
            if (retryCount++ < maxRetries) {
                console.warn(`Wideo ${index} niegotowe (readyState=${el.readyState}), próba ${retryCount}`);
                return setTimeout(tryStart, 300);
            } else {
                console.error(`Wideo ${index} nie wystartowało`);
                return;
            }
        }

        started = true;
        $videoElement.show();
        videoDurations[index] = duration;

        $videoElement.off('timeupdate').on('timeupdate', function () {
            let adjustedProgress = 0;
            for (let i = 0; i < index; i++) {
                adjustedProgress += (videoDurations[i] / totalDuration) * 100;
            }
            adjustedProgress += (this.currentTime / duration) * (videoDurations[index] / totalDuration) * 100;
            updateProgress(adjustedProgress);

            if (!currentIndexValue.includes(index)) {
                currentIndexValue.push(index);
                if ([0, 1, 2].includes(currentIndexValue[0])) {
                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                }
            }

            if (duration - this.currentTime < 1) {
                addVideo1(index + 1);
                updateProgress(0);
            }
        });

        el.play().then(() => {
            console.log(`Wideo ${index} odtworzone`);
        }).catch(error => {
            console.warn(`Autoplay nie działa (index ${index}):`, error);
        });
    }

    // Jeśli nie zadziała 'canplaythrough', dodaj fallback na loadeddata
    $videoElement.one('canplaythrough loadeddata', tryStart);

    try {
        $videoElement[0].load();
    } catch (e) {
        console.warn('Błąd ładowania:', e);
    }
}

console.log('wykonuje się655');
                                addScenes(index);
                                // Dodaj div z wideo do tła kontenera
$vidDiv.appendTo($container);
window.addEventListener('pageshow', () => {
  const video = document.getElementById('myVideo');
  if (video) {
    video.play().catch((error) => {
      console.error('Error playing video:', error);
    });
  }
});
// Upewnij się, że wideo jest fizycznie w DOM, zanim zaczniesz ładowanie
requestAnimationFrame(() => {
    setTimeout(() => {
        ensureVideoStarts($videoElement, index);
    }, 200); // małe opóźnienie buforujące
});
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postępu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postępu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodająca nowe elementy <div>
                                function addScenes(index) {
                                    // Sprawdź, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // Jeśli istnieje, wyczyść jego zawartość
                                        $sceneDiv.empty();
                                    } else {
                                        // Jeśli nie istnieje, stwórz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielności przez 2 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielności przez 1 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
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
                                                'position': 'absolute', // Precyzyjne pozycjonowanie względem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaźnik
                                            })
                                            .on('click', function () {
                                                // Pętla po wszystkich elementach wideo i zatrzymywanie każdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // Zmień obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/stopok2.png');
                                                    } else {
                                                        video.play();
                                                        // Zmień obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    }
                                                });
                                            });

                                    // Dodanie przycisku do kontenera
                                    $stopButton.appendTo($container);

                                    // Pokazywanie przycisku na hover kontenera
                                    $container.on('mouseover', function () {
                                        $stopButton.show();
                                    });

                                    // Ukrywanie przycisku, gdy mysz opuści kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk został dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo1(0);
                            }, 200);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo1b(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    przekazArgument0(tablica7[0], tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video22').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niższy
                                });

                                const $videoElement = $('<video>').attr({
                                    'autoplay': true,
                                    'muted': true,
                                    'loop': true
                                }).css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niższy
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasę CSS zależnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // Utwórz element <source> dla wideo i ustaw atrybuty

                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne użycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);
                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);
                                // Dodaj element <source> do elementu <video>

                                // Obsługa błędu ładowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsługi zdarzenia loadedmetadata
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
                                        // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                        if (!currentIndexValue.includes(index)) {
                                            // Dodaj index do tablicy currentIndex
                                            currentIndexValue.push(index);
                                            console.log('hej70', currentIndexValue);
                                            // Wywołaj funkcję addBackgroundToText tylko raz
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                                            }
                                        }

                                        // Sprawdź, czy wideo zostało zakończone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakończone, uruchamiam następne.');
                                            // Odtwórz następne wideo po zakończeniu poprzedniego
                                            addVideo1b(index + 1);
                                            updateProgress(0);
                                        }
                                    });
                                });
                                addScenes(index);
                                // Dodaj div z wideo do tła kontenera
                                $vidDiv.appendTo($container);
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postępu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postępu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);
// Funkcja dodająca nowe elementy <div>
                                function addScenes(index) {
                                    // Sprawdź, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // Jeśli istnieje, wyczyść jego zawartość
                                        $sceneDiv.empty();
                                    } else {
                                        // Jeśli nie istnieje, stwórz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielności przez 2 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielności przez 1 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
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
                                                'position': 'absolute', // Precyzyjne pozycjonowanie względem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaźnik
                                            })
                                            .on('click', function () {
                                                // Pętla po wszystkich elementach wideo i zatrzymywanie każdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // Zmień obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // Zmień obrazek z powrotem na "Stop"
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

                                    // Ukrywanie przycisku, gdy mysz opuści kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk został dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo1b(0);
                            }, 200);
                        }
                    } else if ((newIndex === 0 || newIndex10 === 0) && !buttonindex && !isSearching && number) {
                        
    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];

    // Ograniczamy cały kontener
    $container.css({
      'position': 'relative',
      'height': '100px',
      'overflow': 'hidden',
      'border': '1px solid #ccc'  // dla testu, widoczna granica
    });

    // 🔹 Dodaj przycisk URUCHOM natychmiast – przed odliczaniem
    const $button = $('<button></button>')
        .addClass('run-button4')
        .text('Uruchom')
        .attr('data-index2', indexDiv)
        .on('click', function () {
            const index5 = $(this).attr('data-index2');
            const index55 = parseInt(index5, 10);
            setTimeout(() => {
                console.log('Kliknięto przycisk o indeksie:', index55);
                przekazArgument0(
                    tablica7[0], tablica3[2], index55,
                    true, tablica3[0], true, true,
                    tablica3[1], tablica3[4],
                    false, '', '', '', '', '100', indexDiv0, indexDiv0b
                );
            }, 100);
        });

$button.css({
    'position': 'absolute',
    'left': '10px',        // lewa krawędź kontenera
    'top': '30px',         // poniżej licznika
    'font-size': '14px',
    'height': '36px',
    'width': '120px',
    'color': 'white',
    'background-color': 'blue',
    'border': '1px solid #aaa',
    'border-radius': '6px',
    'cursor': 'pointer'    // bardzo wysoki, by nic go nie zakryło
});

    $container.append($button);

    // Licznik odliczania
    const $countdown = $('<p>')
        .attr('id', 'countdown-timer')
        .css({
            'font-size': '20px',
            'font-weight': 'bold',
            'color': 'red',
            'margin': '0',
            'position': 'absolute',
            'top': '8px',
            'left': '130px',
            'z-index': '10',
            'line-height': '30px',
            'height': '30px',
            'width': '40px',
            'text-align': 'center',
            'user-select': 'none'
        })
        .text('7');

    $container.append($countdown);

    let counter = 7;
    const countdownInterval = setInterval(() => {
        counter--;
        $countdown.text(counter);

        if (counter === 0) {
            clearInterval(countdownInterval);
            $countdown.remove();
            przekazArgument0(tablica7[0], tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100', indexDiv0, indexDiv0b);
        }
    }, 1000);

    // Kontener na tekst, który będzie scrollowany
    const $textContainer = $('<div></div>').css({
      'position': 'absolute',
      'top': '20px', // poniżej przycisku i licznika
      'left': '0',
      'right': '0',
      'bottom': '0',
      'overflow-y': 'auto',
      'padding': '0 10px',
      'font-size': '10px',
      'text-align': 'center',
      'background-color': '#f9f9f9' // opcjonalnie
    });

    // Dodaj tekst informacyjny
    $textContainer.append(
      $('<p>')
        .text('Może zainteresują Cię kadry z tych filmów:')
        .css({
          'margin': '5px 0 8px 0'
        })
    );

    // Dodaj nazwy filmów do tekstu
    srcWords2.forEach(function(src, index) {
        if (src) {
            const fileName = src.split('/').pop().replace('.mp4', '');
            const $videoName = $('<p>')
                .text(fileName)
                .css({
                    'font-weight': 'bold',
                    'margin': '2px 0'
                });
            $textContainer.append($videoName);
        }
    });

    $container.append($textContainer);
        return;
} else if (index50 === 0 && buttonindex && !isSearching) {
                        let stopButtonAdded = false;
                        console.log('hej3338', newIndex);
                        let funkcjaWywolana = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo2(index) {
                                console.log('hej80', index);

                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    setTimeout(function () {
                                        $('.progress-bar').remove();
                                    }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
                                    przekazArgument0(tablica7[0], tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }

                                // Usuń poprzednie wideo
                                removePreviousVideo();
                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video');

                                // Utwórz element <video> i ustaw atrybuty
                                const $videoElement = $('<video>').attr({
                                    'autoplay': true, // Automatyczne odtwarzanie wideo
                                    'muted': true, // Wyciszenie dźwięku wideo
                                    'loop': true // Zapętlenie wideo
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasę CSS zależnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // Utwórz element <source> dla wideo i ustaw atrybuty
                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne użycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);

                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);

                                // Dodaj element <source> do elementu <video>
                                // Obsługa błędu ładowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };

                                let currentIndexValue = [];

                                // Funkcja obsługi zdarzenia loadedmetadata
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

                                        // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                        if (!currentIndexValue.includes(index)) {
                                            // Dodaj index do tablicy currentIndex
                                            currentIndexValue.push(index);
                                            console.log('hej70', currentIndexValue);

                                            // Wywołaj funkcję addBackgroundToText tylko raz
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                                            }
                                        }

                                        // Sprawdź, czy wideo zostało zakończone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakończone, uruchamiam następne.');
                                            // Odtwórz następne wideo po zakończeniu poprzedniego
                                            addVideo2(index + 1);
                                            updateProgress(0);
                                        }
                                    });
                                });

                                addScenes(index);
                                // Dodaj wideo do kontenera
                                $vidDiv.appendTo($container);

                                function updateProgress(progress) {
                                    // Aktualizuj pasek postępu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postępu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);

                                function addScenes(index) {
                                    // Sprawdź, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // Jeśli istnieje, wyczyść jego zawartość
                                        $sceneDiv.empty();
                                    } else {
                                        // Jeśli nie istnieje, stwórz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielności przez 2 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielności przez 1 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-right': '-20px',
                                                'text-align': 'left',
                                                'background-color': 'blue',
                                                'z-index': '99999999999'
                                            });
                                        }
                                    } else if (window.matchMedia("(min-width: 999px)").matches) {
                                        // Dodatkowe style, jeśli indexDiv jest podzielny przez 4
                                        if (indexDiv % 4 === 1) {
                                            // Dodaj klasę 'scene-description2' do $sceneDiv
                                            $sceneDiv.removeClass('scene-description');
                                            $sceneDiv.addClass('scene-description2');
                                        } else {
                                            // Upewnij się, że klasa 'scene-description2' jest usunięta, jeśli nie jest podzielna przez 4
                                            $sceneDiv.removeClass('scene-description2');
                                        }
                                    }
                                }
// Tworzenie przycisku "Stop"
                                if (!stopButtonAdded) {
                                    const $stopButton = $('<img>')
                                            .attr('src', 'https://www.arbulang.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie względem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaźnik
                                            })
                                            .on('click', function () {
                                                // Pętla po wszystkich elementach wideo i zatrzymywanie każdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // Zmień obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // Zmień obrazek z powrotem na "Stop"
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

                                    // Ukrywanie przycisku, gdy mysz opuści kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk został dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo2(0);
                            }, 700);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo2b(index) {
                                console.log('hej80', index);

                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    setTimeout(function () {
                                        $('.progress-bar').remove();
                                    }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
                                    przekazArgument0(tablica7[0], tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }

                                // Usuń poprzednie wideo
                                removePreviousVideo();
                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video22');

                                // Utwórz element <video> i ustaw atrybuty
                                const $videoElement = $('<video>').attr({
                                    'autoplay': true, // Automatyczne odtwarzanie wideo
                                    'muted': true, // Wyciszenie dźwięku wideo
                                    'loop': true // Zapętlenie wideo
                                });
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    // Dodaj klasę CSS zależnie od indeksu wideo
                                    if (index === 0) {
                                        $videoElement.addClass('scaled-video');
                                    } else {
                                        $videoElement.addClass('next-video');
                                    }
                                }
                                // Utwórz element <source> dla wideo i ustaw atrybuty
                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne użycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

                                // Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);

                                // Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);

                                // Dodaj element <source> do elementu <video>
                                // Obsługa błędu ładowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };

                                let currentIndexValue = [];

                                // Funkcja obsługi zdarzenia loadedmetadata
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

                                        // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                        if (!currentIndexValue.includes(index)) {
                                            // Dodaj index do tablicy currentIndex
                                            currentIndexValue.push(index);
                                            console.log('hej70', currentIndexValue);

                                            // Wywołaj funkcję addBackgroundToText tylko raz
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                                            }
                                        }

                                        // Sprawdź, czy wideo zostało zakończone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakończone, uruchamiam następne.');
                                            // Odtwórz następne wideo po zakończeniu poprzedniego
                                            addVideo2b(index + 1);
                                            updateProgress(0);
                                        }
                                    });
                                });

                                addScenes(index);
                                // Dodaj wideo do kontenera
                                $vidDiv.appendTo($container);

                                function updateProgress(progress) {
                                    // Aktualizuj pasek postępu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

                                // Inicjalizacja paska postępu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                if (window.matchMedia("(min-width: 999px)").matches) {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0',
                                        'left': '0',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                        'margin-bottom': '-2%',
                                        'margin-left': '-4%',
                                        'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
                                    });
                                } else {
                                    $progressBar.css({
                                        'position': 'absolute',
                                        'z-index': '2',
                                        'bottom': '0px',
                                        'left': '0px',
                                        'height': '7px', // Wysokość paska postępu
                                        'background-color': 'green', // Kolor paska postępu
                                        'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                    });
                                }
                                $progressBar.appendTo($container);

                                function addScenes(index) {
                                    // Sprawdź, czy istnieje element <div> o klasie 'scene-description'
                                    let $sceneDiv = $container.find('.scene-description');

                                    if ($sceneDiv.length) {
                                        // Jeśli istnieje, wyczyść jego zawartość
                                        $sceneDiv.empty();
                                    } else {
                                        // Jeśli nie istnieje, stwórz nowy element <div>
                                        $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                    }

                                    // Dodaj nowy tekst do <div>
                                    $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                    if (window.matchMedia("(max-width: 999px)").matches) {
                                        if (indexDiv % 2 === 0) {
                                            console.log('Warunek podzielności przez 2 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-left': '-450px',
                                                'text-align': 'left',
                                                'background-color': 'orange',
                                                'z-index': '9999999'
                                            });
                                        } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                            console.log('Warunek podzielności przez 1 spełniony2');
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'relative',
                                                'margin-top': '-140px',
                                                'margin-right': '-20px',
                                                'text-align': 'left',
                                                'background-color': 'blue',
                                                'z-index': '99999999999'
                                            });
                                        }
                                    } else if (window.matchMedia("(min-width: 999px)").matches) {
                                        // Dodatkowe style, jeśli indexDiv jest podzielny przez 4
                                        if (indexDiv % 4 === 1) {
                                            // Dodaj klasę 'scene-description2' do $sceneDiv
                                            $sceneDiv.removeClass('scene-description');
                                            $sceneDiv.addClass('scene-description2');
                                        } else {
                                            // Upewnij się, że klasa 'scene-description2' jest usunięta, jeśli nie jest podzielna przez 4
                                            $sceneDiv.removeClass('scene-description2');
                                        }
                                    }
                                }
// Tworzenie przycisku "Stop"
                                if (!stopButtonAdded) {
                                    const $stopButton = $('<img>')
                                            .attr('src', 'https://www.arbulang.com/img/stopok2.png')
                                            .css({
                                                'display': 'none', // Ukryty na starcie
                                                'position': 'absolute', // Precyzyjne pozycjonowanie względem kontenera
                                                'top': '-15px',
                                                'left': '20px',
                                                'width': '40px',
                                                'height': '40px',
                                                'z-index': '999999',
                                                'cursor': 'pointer' // Ustawienie kursora jako wskaźnik
                                            })
                                            .on('click', function () {
                                                // Pętla po wszystkich elementach wideo i zatrzymywanie każdego z nich
                                                $('video').each(function () {
                                                    const video = this;
                                                    if (!video.paused) {
                                                        video.pause();
                                                        // Zmień obrazek na "Play"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                    } else {
                                                        video.play();
                                                        // Zmień obrazek z powrotem na "Stop"
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

                                    // Ukrywanie przycisku, gdy mysz opuści kontener
                                    $container.on('mouseout', function () {
                                        $stopButton.hide();
                                    });

                                    stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk został dodany
                                }
                            }
                            setTimeout(function () {
                                addVideo2b(0);
                            }, 700);
                        }
                        }
                        
                    // Stwórz przycisk za pomocą jQuery
                    // Tworzenie nowego elementu div za pomocą jQuery


                    if ((index50 === 0 && buttonindex) || (newIndex === 0 && !buttonindex)) {
    var $sentenceDivB = $('<div></div>');
    $sentenceDivB.addClass('sentenceBA');

    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';

    $sentenceDivB.html(`
<div class="sentence-blockB" data-name="${id1}">
    <div class="sentence10">${sentence10}${sentence11}</div>
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
// Tworzenie przycisku
const $button = $('<button></button>')
    .addClass('run-button')
    .text('Uruchom') // Tekst przycisku
    .attr('data-index2', indexDiv)
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
                    
                    const $buttonb2 = $('<button></button>');
$buttonb2.addClass('run-button3');
$buttonb2.text('Otwórz lekcję w nowym oknie');

// Dodajemy atrybut 'data-index2' z wartością indexDiv do przycisku
$buttonb2.attr('data-index2', indexDiv);
$buttonb2.on('click', function () {
    const $clickedContainer = $container; // Przypisz kliknięty kontener do zmiennej

    // Dodaj tło do nieklikniętych kontenerów
    $('.image-container3').not($clickedContainer).each(function () {
        const $container = $(this);
        if ($container.find('.background-overlay').length === 0) {
            $('<div>')
                .addClass('background-overlay')
                .css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'width': '100%',
                    'height': '100%',
                    'background-color': 'blue',
                    'opacity': '0.35',
                    'z-index': '1000'
                })
                .appendTo($container);
        }
    });

    // Usuń klasę .background-overlay po powrocie na stronę
    $(window).on('pageshow', function () {
        $('.background-overlay').remove();
    });

    const index5b2 = $buttonb2.attr('data-index2');
    const index55b2 = parseInt(index5b2, 10);

    // Znajdź ukryty link i kliknij go
    let lessonLink = null;
    if (index55b2 === 1) {
        lessonLink = document.querySelector('.lesson-link-1');
    }
    if (index55b2 === 2) {
        lessonLink = document.querySelector('.lesson-link-2');
    }
        if (index55b2 === 3) {
        lessonLink = document.querySelector('.lesson-link-3');
    }
        if (index55b2 === 4) {
        lessonLink = document.querySelector('.lesson-link-4');
    }
    if (index55b2 === 5) {
        lessonLink = document.querySelector('.lesson-link-5');
    }
        if (index55b2 === 6) {
        lessonLink = document.querySelector('.lesson-link-6');
    }
        if (index55b2 === 7) {
        lessonLink = document.querySelector('.lesson-link-7');
    }
        if (index55b2 === 8) {
        lessonLink = document.querySelector('.lesson-link-8');
    }
        if (index55b2 === 9) {
        lessonLink = document.querySelector('.lesson-link-9');
    }
        if (index55b2 === 10) {
        lessonLink = document.querySelector('.lesson-link-10');
    }
            if (index55b2 === 11) {
        lessonLink = document.querySelector('.lesson-link-11');
    }
        if (index55b2 === 12) {
        lessonLink = document.querySelector('.lesson-link-12');
    }
        if (index55b2 === 13) {
        lessonLink = document.querySelector('.lesson-link-13');
    }
    if (index55b2 === 14) {
        lessonLink = document.querySelector('.lesson-link-14');
    }
        if (index55b2 === 15) {
        lessonLink = document.querySelector('.lesson-link-15');
    }
        if (index55b2 === 16) {
        lessonLink = document.querySelector('.lesson-link-16');
    }
    if (index55b2 === 17) {
        lessonLink = document.querySelector('.lesson-link-17');
    }
        if (index55b2 === 18) {
        lessonLink = document.querySelector('.lesson-link-18');
    }
        if (index55b2 === 19) {
        lessonLink = document.querySelector('.lesson-link-19');
    }
    if (lessonLink && lessonLink.href) {
        window.location.href = lessonLink.href; // ⬅️ otwieranie w tym samym oknie
    }
});

                    $container.append($buttonb2);
                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDivB);
                    tablica10.push(srcWords);
                    console.log('hej6', tablica10);

                }

                // Deklaracja tablicy, która będzie zawierać wszystkie tablice
            }