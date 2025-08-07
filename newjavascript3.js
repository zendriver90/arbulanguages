            
            const tablica10 = [];

                        let sentence1bVisible = false;
            let sentence1baVisible = false;
            let sentence1b3aVisible = false;
                        let tablica12ab = [];
            let tablica12ad = [];
            let tablica12abc = [];
            const displayedIds = [];
function showCombinedSentenceForLesson(number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, newIndex10, indexDiv, indexDiv0b, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
                console.log('hej55bbv', matchingLessons5b);
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
                    
                    let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence11 = "";
                    let sentence1bba = "";
                    let sentence1bbab = "";
                    function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        $(document).ready(function () {

                            console.log('hejkh', lesson1PartLength);
                            sentence1bba = "";
                            sentence1bbab = "";
                            setTimeout(() => {
                                for (let i = 0; i < matchingFiszki1.length; i++) {
                                    const fiszka = matchingFiszki1[i];
                                    console.log('fiszka:', fiszka);
                                    if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                        console.log('fiszka.sentence2 is undefined or empty');
                                        continue;
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                        let sentencePart = fiszka.sentence1[ki];
                                        console.log('matchingIndexes1000:', matchingIndexes);
                                        const indexToCheck = i + lesson1PartLength + 1;
                                        const indexToCheck2 = i + lesson1PartLength + 1;
                                            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                            if (matchingLessons5b.includes(indexToCheck2) && matchingIndexes.length === 0) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                        
                                        function countCategoryInFiszki(matchingFiszki1, category) {
                                            // Zmienna do przechowywania sumy wystąpień
                                            let totalCount = 0;

                                            // Iteracja przez wszystkie fiszki
                                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                                const fiszka = matchingFiszki1[i];

                                                // Zlicz wystąpienia kategorii w category3
                                                if (fiszka.category3 && Array.isArray(fiszka.category3)) {
                                                    const count = fiszka.category3.filter(cat => cat === category).length;
                                                    totalCount += count; // Dodaj do sumy
                                                }
                                            }

                                            return [totalCount]; // Zwróć tablicę z jedną sumaryczną wartością
                                        }

// Użycie funkcji
                                        const categoryToCount = "PresentSimplePodmiot";
                                        const categoryToCount2 = "PresentSimpleCzasownik";
                                        const occurrences = countCategoryInFiszki(matchingFiszki1, categoryToCount);
                                        const occurrences2 = countCategoryInFiszki(matchingFiszki1, categoryToCount2);
// Wypisywanie wyników
                                        console.log('Suma wystąpień:', occurrences2);
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Flaga sprawdzająca, czy podmiot został już dodany

                                        if (aktualny && rodzaj === "play" && matchingIndexes2.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            if (i === 0 && occurrences[0] === 2) {
                                                console.log('Podświetlono pierwsze słowo:', fiszka.sentence1[ki]);
                                                const firstWordElement = document.createElement('span');
                                                firstWordElement.textContent = sentencePart;
                                                firstWordElement.classList.add('green'); // Dodaj klasę, która podświetla słowo na zielono
                                                sentencePart = firstWordElement.outerHTML; // Zamień pierwsze słowo na jego wersję z "span"
                                            }
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2
                                            if (i === 1 && occurrences[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (i === 0 && occurrences[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        if (aktualny && rodzaj === "play" && matchingIndexes3.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2

                                            if (i === 2 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 1, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (i === 2 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (i === 1 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        // Dodaj sentencePart do sentence10
                                        sentence10 += sentencePart + " ";

                                    }

                                }
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
                                        console.log('sentencePart5:', ii);
                                        const indexToCheck = ii + lesson1PartLength + 1;
                                        const indexToCheck2 = ii + lesson1PartLength + 1;
                                        console.log('indexToCheck77:', indexToCheck);
                                            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                            if (matchingLessons5b.includes(indexToCheck2) && matchingIndexes.length === 0) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                        
                                        function countCategoryInFiszki1b(matchingFiszki1, category) {
                                            // Zmienna do przechowywania sumy wystąpień
                                            let totalCount = 0;

                                            // Iteracja przez wszystkie fiszki
                                            for (let ii = 0; ii < matchingFiszki1.length; ii++) {
                                                const fiszka = matchingFiszki1[ii];

                                                // Zlicz wystąpienia kategorii w category3
                                                if (fiszka.category3 && Array.isArray(fiszka.category3)) {
                                                    const count = fiszka.category3.filter(cat => cat === category).length;
                                                    totalCount += count; // Dodaj do sumy
                                                }
                                            }

                                            return [totalCount]; // Zwróć tablicę z jedną sumaryczną wartością
                                        }
                                        const categoryToCount2 = "PresentSimpleCzasownik";
                                        const occurrences2 = countCategoryInFiszki1b(matchingFiszki1, categoryToCount2);
// Wypisywanie wyników
                                        console.log('Suma wystąpień5:', occurrences2);
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Flaga sprawdzająca, czy podmiot został już dodany

                                        if (aktualny && rodzaj === "play" && matchingIndexes3.includes(indexToCheck)) {
                                            // Sprawdź, czy to jest pierwsze słowo
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2

                                            if (ii === 6 && occurrences2[0] === 1) {
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart2;
                                                podmiotElement.classList.add('blue');
                                                sentencePart2 = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart2.split(' ');
                                                words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart2 = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        // Dodaj sentencePart do sentence10
                                        sentence11 += sentencePart2 + " ";

                                    }
                                }

                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart3 = fiszka.translateb;
                                    console.log('sentencePart3:', sentencePart3);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart3;
                                        sentencePart3 = spanElement.outerHTML;

                                    }
                                    sentence1bba += sentencePart3 + " ";
                                }
                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart3 = fiszka.translate;
                                    console.log('sentencePart3:', sentencePart3);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart3;
                                        sentencePart3 = spanElement.outerHTML;

                                    }
                                    sentence1bbab += sentencePart3 + " ";
                                }

                                console.log('hej20', sentence1bba);
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);

// Kolory przypisane do kategorii
const colorMapping = {
    'sport': '#28a745',        // Zielony
    'natura': '#007bff',       // Niebieski
    'nauka': '#dc3545',        // Czerwony
    'czarnyhumor': '#ffc107',  // Żółty
    'zwiazki': '#fd7e14',      // Pomarańczowy
    'all': '#800080'     
};

// Zakres pokolorowanych przycisków
const startRange2 = 1;
const endRange2 = 100;

document.addEventListener('DOMContentLoaded', () => {
    // Kliknięcie w kategorię
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // zapobiega przeładowaniu
            selectedCategory = button.getAttribute('data-category');
            updateButtonColors();
        });
    });
});
let previousTrojkiJSON = '';
const tablica60 = [];
console.log('hej340', tablica60);
function updateButtonColors() {
    tablica60.length = 0; // wyczyść tablicę

    const color = colorMapping[selectedCategory] || '#800080';

    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataNameAttr = block.getAttribute('data-name');
        const dataName = parseInt(dataNameAttr, 10);

        const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');

        // Jeśli brak data-name albo nie jest liczbą – pomiń
        if (isNaN(dataName)) return;

        // dla "all" – dodaj wszystkie i koloruj wszystkie
        if (selectedCategory === 'wszystkie') {
            tablica60.push(dataName);
            if (button) {
                button.style.backgroundColor = color;
                button.style.color = 'white';
            }
        }
else if (dataName >= startRange2 && dataName <= endRange2) {
    tablica60.push(dataName);
    if (button) {
        if (dataName <= 6) {
            button.style.backgroundColor = color;
            button.style.color = 'white';
        } else {
            // pozostałe przyciski w zakresie 1–100 – bez kolorowania
            button.style.backgroundColor = '';
            button.style.color = '';
        }
    }
}
    });
    
    // PodziaĹ na trĂłjki
    const trojki = [];
    for (let i = 0; i < tablica60.length; i += 3) {
        trojki.push(tablica60.slice(i, i + 3));
    }

    const currentTrojkiJSON = JSON.stringify(trojki);
    if (currentTrojkiJSON !== previousTrojkiJSON) {
        previousTrojkiJSON = currentTrojkiJSON;

        console.log('Nowe trĂłjki:', trojki);

        // UsuĹ stare linki
        $('.hidden-link').remove();
        console.log('UsuniÄto stare linki');

        // Wygeneruj nowe linki (dla pierwszych dwĂłch trĂłjek, jeĹli istniejÄ)
        const firstTrojka = trojki[0] || [];
        const secondTrojka = trojki[1] || [];
        const thirdTrojka = trojki[2] || [];
        const cztery = trojki[3] || [];
        const piec = trojki[4] || [];
        const szesc = trojki[5] || [];
        const siedem = trojki[6] || [];
        const osiem = trojki[7] || [];
        const dziewiec = trojki[8] || [];
        const dziesiec = trojki[9] || [];
        const jedenascie = trojki[10] || [];
        const dwanascie = trojki[11] || [];
        const trzynascie = trojki[12] || [];
        const czternascie = trojki[13] || [];
        const pietnascie = trojki[14] || [];
        const szstnascie = trojki[15] || [];
        const siedemnascie = trojki[16] || [];
        const osiemnascie = trojki[17] || [];
                const dziewietnascie = trojki[18] || [];
        const link1 = `demo1angielski.html?category=${selectedCategory}&data=${firstTrojka.join(',')}`;
        const link2 = `demo1angielski.html?category=${selectedCategory}&data=${secondTrojka.join(',')}`;
        const link3 = `demo1angielski.html?category=${selectedCategory}&data=${thirdTrojka.join(',')}`;
        const link4 = `demo1angielski.html?category=${selectedCategory}&data=${cztery.join(',')}`;
        const link5 = `demo1angielski.html?category=${selectedCategory}&data=${piec.join(',')}`;
        const link6 = `demo1angielski.html?category=${selectedCategory}&data=${szesc.join(',')}`;
        const link7 = `demo1angielski.html?category=${selectedCategory}&data=${siedem.join(',')}`;
        const link8 = `demo1angielski.html?category=${selectedCategory}&data=${osiem.join(',')}`;
        const link9 = `demo1angielski.html?category=${selectedCategory}&data=${dziewiec.join(',')}`;
        const link10 = `demo1angielski.html?category=${selectedCategory}&data=${dziesiec.join(',')}`;
        const link11 = `demo1angielski.html?category=${selectedCategory}&data=${jedenascie.join(',')}`;
        const link12 = `demo1angielski.html?category=${selectedCategory}&data=${dwanascie.join(',')}`;
        const link13 = `demo1angielski.html?category=${selectedCategory}&data=${trzynascie.join(',')}`;
        const link14 = `demo1angielski.html?category=${selectedCategory}&data=${czternascie.join(',')}`;
        const link15 = `demo1angielski.html?category=${selectedCategory}&data=${pietnascie.join(',')}`;
        const link16 = `demo1angielski.html?category=${selectedCategory}&data=${szstnascie.join(',')}`;
        const link17 = `demo1angielski.html?category=${selectedCategory}&data=${siedemnascie.join(',')}`;
        const link18 = `demo1angielski.html?category=${selectedCategory}&data=${osiemnascie.join(',')}`;
        const link19 = `demo1angielski.html?category=${selectedCategory}&data=${dziewietnascie.join(',')}`;

        const linksHTML = `
            <a href="${link1}" class="hidden-link lesson-link-1" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link2}" class="hidden-link lesson-link-2" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link3}" class="hidden-link lesson-link-3" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link4}" class="hidden-link lesson-link-4" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link5}" class="hidden-link lesson-link-5" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link6}" class="hidden-link lesson-link-6" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link7}" class="hidden-link lesson-link-7" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link8}" class="hidden-link lesson-link-8" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link9}" class="hidden-link lesson-link-9" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link10}" class="hidden-link lesson-link-10" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link11}" class="hidden-link lesson-link-11" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link12}" class="hidden-link lesson-link-12" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link13}" class="hidden-link lesson-link-13" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link14}" class="hidden-link lesson-link-14" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link15}" class="hidden-link lesson-link-15" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link16}" class="hidden-link lesson-link-16" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link17}" class="hidden-link lesson-link-17" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link18}" class="hidden-link lesson-link-18" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                <a href="${link19}" class="hidden-link lesson-link-19" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
        `;

        $('body').append(linksHTML);
        console.log('Dodano linki:', link1, link2);
    }
}
    setTimeout(() => {
// Uruchom na poczÄtku
updateButtonColors();
}, 0); // opóźnienie np. 100ms

                                $('.sentence1bba').html('');
                                $sentenceDiv.on('click', '.left-button', function () {

                                    // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                    if (sentence1bba === "") {
                                        let sentencePart3 = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bba += sentencePart3 + " ";
                                    }
                                    if (sentence1bbab === "") {
                                        let sentencePart33 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bbab += sentencePart33 + " ";
                                    }
                                    console.log('hej20', sentence1bba);

                                    // Dodanie treści do diva wraz z przyciskiem
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                    // Ustawienie stylu dla przycisków .left-button
                                    $('.sentence1bb1b').html('');
                                    $('.sentence1bba2').html('');
                                    $('.left-button').css('position', 'relative');
                                    $('.left-buttonb').css('position', 'relative');
                                    $('.left-buttonbb').css('position', 'relative');
                                    let sentencePart1 = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                    let sentencePart3 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                    console.log('Kliknięto przycisk');
                                    if ($sentence1bba.css('display') === 'none' || sentence1bVisible) {
                                        $sentence1bba.css('display', 'block');
                                        $sentence1bba.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                                    if ($sentence1bbab.css('display') === 'none' || sentence1bVisible) {
                                        $sentence1bbab.css('display', 'block');
                                        $sentence1bbab.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                                    // Dodanie stylizacji na hover

                                    $sentence1bb1b.html('');
                                    $sentence1bb1b.empty();
                                });
                                $sentence1bb1b.html('');
                                $sentence1bb1b.empty();
                            }, 0);
                        });
                        console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                    }


                    let sentence1bb1b = "";
                    let sentence1bba2 = "";
                    function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {

                        $(document).ready(function () {
                            setTimeout(() => {
                                sentence1bb1b = "";
                                sentence1bba2 = "";
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
                                        const indexToCheck2 = j + lesson2PartLength + 1;
                                        console.log('indexToCheck5:', indexToCheck);
                                        console.log('hej31', sentencePart);
                                        // Sprawdź, czy indeks jest równy 0
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                        }
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                        function countCategoryInFiszki2(matchingFiszki2, category) {
                                            // Zmienna do przechowywania sumy wystąpień
                                            let totalCount = 0;

                                            // Iteracja przez wszystkie fiszki
                                            for (let j = 0; j < matchingFiszki2.length; j++) {
                                                const fiszka = matchingFiszki2[j];

                                                // Zlicz wystąpienia kategorii w category3
                                                if (fiszka.category3 && Array.isArray(fiszka.category3)) {
                                                    const count = fiszka.category3.filter(cat => cat === category).length;
                                                    totalCount += count; // Dodaj do sumy
                                                }
                                            }

                                            return [totalCount]; // Zwróć tablicę z jedną sumaryczną wartością
                                        }

// Użycie funkcji
                                        const categoryToCount = "PresentSimplePodmiot";
                                        const categoryToCount2 = "PresentSimpleCzasownik";
                                        const occurrences = countCategoryInFiszki2(matchingFiszki2, categoryToCount);
                                        const occurrences2 = countCategoryInFiszki2(matchingFiszki2, categoryToCount2);
// Wypisywanie wyników
                                        console.log('Suma wystąpień:', occurrences2);
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Flaga sprawdzająca, czy podmiot został już dodany

                                        if (aktualny && rodzaj === "play" && matchingIndexes2.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            if (j === 0 && occurrences[0] === 2) {
                                                console.log('Podświetlono pierwsze słowo:', fiszka.sentence1[j]);
                                                const firstWordElement = document.createElement('span');
                                                firstWordElement.textContent = sentencePart;
                                                firstWordElement.classList.add('green'); // Dodaj klasę, która podświetla słowo na zielono
                                                sentencePart = firstWordElement.outerHTML; // Zamień pierwsze słowo na jego wersję z "span"
                                            }
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2
                                            if (j === 1 && occurrences[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[j]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (j === 0 && occurrences[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[j]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        if (aktualny && rodzaj === "play" && matchingIndexes3.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2

                                            if (j === 2 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[j]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 1, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (j === 2 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[j]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (j === 1 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[j]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        // Dodaj sentencePart do sentence10
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
                                        const indexToCheck2 = jj + lesson2PartLength + 1;
                                        console.log('indexToCheck3:', indexToCheck);
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                        }
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                        sentence22 += sentencePart2 + " ";
                                    }
                                }
                                for (let li = 0; li < matchingFiszki2.length; li++) {
                                    const fiszka = matchingFiszki2[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart33 = fiszka.translateb;
                                    console.log('sentencePart3:', sentencePart33);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart33;
                                        sentencePart33 = spanElement.outerHTML;

                                    }
                                    sentence1bb1b += sentencePart33 + " ";
                                }
                                for (let li = 0; li < matchingFiszki2.length; li++) {
                                    const fiszka = matchingFiszki2[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart333 = fiszka.translate;
                                    console.log('sentencePart3:', sentencePart333);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart333;
                                        sentencePart333 = spanElement.outerHTML;

                                    }
                                    sentence1bba2 += sentencePart333 + " ";
                                }

                                console.log('hej20', sentence1bb1b);
                                // Kliknięcie w kategorię
// Kolory przypisane do kategorii
const colorMapping = {
    'sport': '#28a745',        // Zielony
    'natura': '#007bff',       // Niebieski
    'nauka': '#dc3545',        // Czerwony
    'czarnyhumor': '#ffc107',  // Żółty
    'zwiazki': '#fd7e14',      // Pomarańczowy
    'all': '#800080'           // Fioletowy
};

// Zakres pokolorowanych przycisków
const startRange2 = 1;
const endRange2 = 6;

document.addEventListener('DOMContentLoaded', () => {
    // Kliknięcie w kategorię
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // zapobiega przeładowaniu
            selectedCategory = button.getAttribute('data-category');
            updateButtonColors();
        });
    });
});
// Główna funkcja kolorująca
function updateButtonColors() {
    const color = colorMapping[selectedCategory] || '#800080';
    
    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataName = parseInt(block.getAttribute('data-name'), 10);

        const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');

        if (button) {
            if (dataName >= startRange2 && dataName <= endRange2) {
                button.style.backgroundColor = color;
                button.style.color = 'white';
            } else {
                // Czyścimy kolory poza zakresem
                button.style.backgroundColor = '';
                button.style.color = '';
            }
        }
    });
    }
    updateButtonColors();
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                $('.sentence1bb1b').html('');
                                $('.sentence1bba2').html('');
                                $sentenceDiv.on('click', '.left-buttonb', function () {
                                    $('.sentence1bba').html('');
                                    // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                    if (sentence1bb1b === "") {
                                        let sentencePart33 = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bb1b += sentencePart33 + " ";
                                    }
                                    console.log('hej56', sentence1bb1b);
                                    if (sentence1bba2 === "") {
                                        let sentencePart33 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bba2 += sentencePart33 + " ";
                                    }
                                    // Dodanie treści do diva wraz z przyciskiem
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                    $('.sentence1bba').html('');
                                    // Ustawienie stylu dla przycisków .left-button
                                    $('.left-button').css('position', 'relative');
                                    $('.left-buttonb').css('position', 'relative');
                                    $('.left-buttonbb').css('position', 'relative');
                                    let sentencePart33 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                    // Obsługa kliknięcia przycisku
                                    console.log('Kliknięto przycisk');
                                    let $sentence1bb1b = $sentenceDiv.find('.sentence1bb1b');
                                    if ($sentence1bb1b.css('display') === 'none') {
                                        sentence1bVisible = false;
                                        sentence1baVisible = true;
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bb1b.css('display', 'block');
                                        $sentence1bb1b.css({
                                            'margin-top': '-25px',
                                            'top': '24px',
                                            'position': 'relative'
                                        });
                                    }
                                    if ($sentence1bba2.css('display') === 'none') {
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bba2.css('display', 'block');
                                        $sentence1bba2.css({
                                            'margin-top': '0px',
                                            'top': '23px',
                                            'position': 'relative'
                                        });
                                    }

                                    $sentence1bb1a.html('');
                                    $sentence1bb1a.empty();
                                });
                                $sentence1bb1a.html('');
                                $sentence1bb1a.empty();
                            }, 0);
                        });
                    }







                    let sentence1bb3 = "";
                    let sentence1bb1c = "";

                    function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        $(document).ready(function () {
setTimeout(() => {
                            sentence1bb3 = "";
                            sentence1bb1c = "";

                            for (let l = 0; l < matchingFiszki3.length; l++) {
                                const fiszka = matchingFiszki3[l];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue;
                                }
                                for (let lm = 0; lm < fiszka.sentence1.length; lm++) {
                                    let sentencePart = fiszka.sentence1[lm];
                                        console.log('sentencePart5:', sentencePart);
                                        const indexToCheck = l + lesson3PartLength + 1;
                                        const indexToCheck2 = l + lesson3PartLength + 1;
                                    console.log('indexToCheck:', indexToCheck);
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                        }
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
function countCategoryInFiszki2(matchingFiszki3, category) {
                                            // Zmienna do przechowywania sumy wystąpień
                                            let totalCount = 0;

                                            // Iteracja przez wszystkie fiszki
                                            for (let l = 0; l < matchingFiszki3.length; l++) {
                                                const fiszka = matchingFiszki3[l];

                                                // Zlicz wystąpienia kategorii w category3
                                                if (fiszka.category3 && Array.isArray(fiszka.category3)) {
                                                    const count = fiszka.category3.filter(cat => cat === category).length;
                                                    totalCount += count; // Dodaj do sumy
                                                }
                                            }

                                            return [totalCount]; // Zwróć tablicę z jedną sumaryczną wartością
                                        }

// Użycie funkcji
                                        const categoryToCount = "PresentSimplePodmiot";
                                        const categoryToCount2 = "PresentSimpleCzasownik";
                                        const occurrences = countCategoryInFiszki2(matchingFiszki3, categoryToCount);
                                        const occurrences2 = countCategoryInFiszki2(matchingFiszki3, categoryToCount2);
// Wypisywanie wyników
                                        console.log('Suma wystąpień:', occurrences2);
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Flaga sprawdzająca, czy podmiot został już dodany

                                        if (aktualny && rodzaj === "play" && matchingIndexes2.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            if (l === 0 && occurrences[0] === 2) {
                                                console.log('Podświetlono pierwsze słowo:', fiszka.sentence1[l]);
                                                const firstWordElement = document.createElement('span');
                                                firstWordElement.textContent = sentencePart;
                                                firstWordElement.classList.add('green'); // Dodaj klasę, która podświetla słowo na zielono
                                                sentencePart = firstWordElement.outerHTML; // Zamień pierwsze słowo na jego wersję z "span"
                                            }
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2
                                            if (l === 1 && occurrences[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 0 && occurrences[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        if (aktualny && rodzaj === "play" && matchingIndexes3.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2

                                            if (l === 2 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 1, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 2 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 1 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 2 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 3 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 3 && occurrences2[0] === 3) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        // Dodaj sentencePart do sentence10
                                        sentence30 += sentencePart + " ";
                                }
                            }

                            for (let lmm = 0; lmm < matchingFiszki3.length; lmm++) {
                                const fiszka = matchingFiszki3[lmm];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }
                                for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                    let sentencePart3 = fiszka.sentence2[lmn];
                                    const indexToCheck = lmm + lesson3PartLength + 1;
                                    const indexToCheck2 = lmm + lesson3PartLength + 1;
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart3;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart3 = spanElement.outerHTML;
                                            }
                                        }
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart3;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart3 = spanElement.outerHTML;
                                            }
                                    sentence33 += sentencePart3 + " ";
                                }
                            }
                            for (let z = 0; z < matchingFiszki3.length; z++) {
                                const fiszka = matchingFiszki3[z];
                                let sentencePart444b = fiszka.translateb;
                                        if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart444b;
                                        sentencePart444b = spanElement.outerHTML;

                                    }
                                    sentence1bb3 += sentencePart444b + " ";
                                }

                            for (let zi = 0; zi < matchingFiszki3.length; zi++) {
                                const fiszka = matchingFiszki3[zi];
                                let sentencePart444 = fiszka.translate;
                                if (aktualny) {
                                    const spanElement = document.createElement('span');
                                    spanElement.textContent = sentencePart444;
                                    sentencePart444 = spanElement.outerHTML;
                                }
                                sentence1bb1c += sentencePart444 + " ";
                            }
// Kolory przypisane do kategorii
const colorMapping = {
    'sport': '#28a745',        // Zielony
    'natura': '#007bff',       // Niebieski
    'nauka': '#dc3545',        // Czerwony
    'czarnyhumor': '#ffc107',  // Żółty
    'zwiazki': '#fd7e14',      // Pomarańczowy
    'all': '#800080'           // Fioletowy
};

// Zakres pokolorowanych przycisków
const startRange2 = 1;
const endRange2 = 6;

document.addEventListener('DOMContentLoaded', () => {
    // Kliknięcie w kategorię
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // zapobiega przeładowaniu
            selectedCategory = button.getAttribute('data-category');
            updateButtonColors();
        });
    });
});

// Główna funkcja kolorująca
function updateButtonColors() {
    const color = colorMapping[selectedCategory] || '#800080';
    
    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataName = parseInt(block.getAttribute('data-name'), 10);

        const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');

        if (button) {
            if (dataName >= startRange2 && dataName <= endRange2) {
                button.style.backgroundColor = color;
                button.style.color = 'white';
            } else {
                // Czyścimy kolory poza zakresem
                button.style.backgroundColor = '';
                button.style.color = '';
            }
        }
    });
    }
    updateButtonColors();
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                $('.sentence1bb3').html('');
                                $('.sentence1bb1c').html('');
                                $sentenceDiv.on('click', '.left-buttonbb', function () {
                                    $('.sentence1bb3').html('');
                                    // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                    if (sentence1bb3 === "") {
                                        let sentencePart444b = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bb3 += sentencePart444b + " ";
                                    }
                                    if (sentence1bb1c === "") {
                                        let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bb1c += sentencePart444 + " ";
                                    }
                                    // Dodanie treści do diva wraz z przyciskiem
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);

                                    // Ustawienie stylu dla przycisków .left-button
                                    $('.left-button').css('position', 'relative');
                                    $('.left-buttonb').css('position', 'relative');
                                    $('.left-buttonbb').css('position', 'relative');
                                    let sentencePart444 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                    // Obsługa kliknięcia przycisku
                                    console.log('Kliknięto przycisk');
                                    let $sentence1bb3 = $sentenceDiv.find('.sentence1bb3');
                                    if ($sentence1bb3.css('display') === 'none') {
                                        sentence1bVisible = false;
                                        sentence1baVisible = true;
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bb3.css('display', 'block');
                                        $sentence1bb3.css({
                                            'margin-top': '-25px',
                                            'top': '24px',
                                            'position': 'relative'
                                        });
                                    }
                                    if ($sentence1bb1c.css('display') === 'none') {
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bb1c.css('display', 'block');
                                        $sentence1bb1c.css({
                                            'margin-top': '0px',
                                            'top': '23px',
                                            'position': 'relative'
                                        });
                                    }

                                });
                            }, 0);
                        });
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
const srcWordimage = [srcWord10];
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
                        } else if (isSearching) {
                        function addVideo3(index) {
                            console.log('index44b', indexDiv);

                            // Tworzymy element <video> z atrybutami
                            const $videoElement = $('<video>').attr({
                                'muted': true,
                                'loop': true,
                                'style': 'z-index: 1',
                                'poster': srcWordimage[index] // Dodanie plakatu do wideo
                            });

// Tworzymy kontener dla miniatur
                            const $thumbnailContainer = $('<div>').addClass('thumbnail-container').css({
                                display: 'flex',
                                justifyContent: 'space-between',
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                width: '90%', // Kontener zajmuje 90% szerokości wideo
                                zIndex: '2',
                                pointerEvents: 'auto' // Reaguje na zdarzenia
                            });
                            
                            
srcWordsb.forEach((src, idx) => {
    // Miniatura
const $thumbnail = $('<img>').attr({
    src: src,
    class: `thumbnail-${idx + 1}`
}).css({
    width: 'calc(100% - 4px)', // Odejmujemy szerokość ramki (2px z każdej strony)
    cursor: 'pointer',
    border: '2px solid white',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    display: 'block' // Zapobiega pustym marginesom obrazka
});
    

const $icons = $('<div></div>').addClass('overlay-icons').css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex', // Flexbox dla ułożenia ikon w linii
    flexDirection: 'row', // Ułożenie ikon w poziomie
    alignItems: 'center', // Centrowanie ikon w pionie
    gap: '10px', // Odstęp między ikonami
    zIndex: 2,  // Zwiększamy zIndex, aby ikony były nad miniaturą, ale nie zasłaniały obramowania
    pointerEvents: 'auto' // Zmiana na auto, aby ikony były klikalne, jeśli potrzebujesz
});
    // Ikony
    // Ikona speaker
const $speakerIcon = $('<img>')
  .attr({
    src: 'https://www.arbulang.com/img/play.png',
    alt: 'Głośnik'
  })
  .css({
    width: '18px',
    height: '18px',
    cursor: 'pointer'
  })
  .on('click', function(e) {
    e.stopPropagation(); // Zapobiegamy propagacji kliknięcia
    
    // Ustawienie plakatu dla wideo
    $videoElement.attr('poster', src);
    $videoElement[0].load();
    
    console.log('Kliknięto speakerIcon dla idx:', idx);

    // Usuwamy wszystkie miniatury, które NIE są klikniętą miniaturą
    $thumbnailContainer.find('img').not(`.thumbnail-${idx + 1}`).remove();

    // Znalezienie klikniętej miniatury i usunięcie samego obrazka
    const $clickedThumbnail = $thumbnailContainer.find(`.thumbnail-${idx + 1}`);
    
    // Tworzymy pusty div zamiast obrazka, aby ramka pozostała
    const $emptyFrame = $('<div></div>')
      .css({
        width: $clickedThumbnail.width(),  // Szerokość taka sama jak miniatura
        height: $clickedThumbnail.height(), // Wysokość taka sama jak miniatura
        border: '2px solid white', // Ramka taka sama jak wcześniej
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        backgroundColor: 'transparent', // Upewniamy się, że tło jest przezroczyste
        display: 'block' // Zapobiega pustym marginesom obrazka
      });

    // Zamieniamy obrazek na pusty div
    $clickedThumbnail.replaceWith($emptyFrame);

    setTimeout(function () {
      addVideo2bd(idx);
    }, 200);
});
    const $playIcon = $('<img>').attr({
        src: 'https://www.arbulang.com/img/music2.png', // Ikona play
        alt: 'Play'
    }).css({
        width: '20px',
        height: '20px',
        cursor: 'pointer'
    }).on('click', function () {
        // Odtwarzanie wideo po kliknięciu playIcon
        addVideo3(idx); // Przekazanie idx zamiast indexDiv
    });

    // Dodaj ikony do kontenera ikon
    $icons.append($speakerIcon, $playIcon);

    // Dodaj miniaturę i ikony do kontenera miniatury
    const $thumbnailWrapper = $('<div></div>').css({
        position: 'relative', // Pozycjonowanie względne dla poprawnego overlay
        width: '30%', // Każdy wrapper zajmuje 1/3 szerokości
        overflow: 'hidden' // Zapewnia, że overlay nie wychodzi poza miniaturę
    }).append($thumbnail, $icons);

    // Obsługa hover
    $thumbnailWrapper.hover(
        function () {
            $icons.css('display', 'flex'); // Pokaż ikony
        },
        function () {
            $icons.css('display', 'none'); // Ukryj ikony
        }
    );


    

    // Dodaj wrapper do głównego kontenera
    $thumbnailContainer.append($thumbnailWrapper);

                                function addVideo2bd(idx) {
                                    let initialProgress = 0;
                                    console.log('hej80d', idx);

                                    console.log('hej10a', tablica12ab[0]);
                                    // Sprawdź, czy jesteśmy poza zakresem tablicy
                                    if (idx >= srcWords.length && !funkcjaWywolana) {
                                        setTimeout(function () {
                                            $('.progress-bar').remove();
                                        }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
                                        przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                        console.log("wykonuje się");
                                        funkcjaWywolana = true;
                                    }

                                    // Usuń poprzednie wideo
                                    removePreviousVideo();
                                    console.log('hej78', idx);

                                    // Dodaj div z wideo do tła kontenera
                                    const $vidDiv = $('<div>').addClass('background-video22');

                                    // Utwórz element <video> i ustaw atrybuty
                                    const $videoElement = $('<video>').attr({
                                        'autoplay': true, // Automatyczne odtwarzanie wideo
                                        'muted': true, // Wyciszenie dźwięku wideo
                                        'loop': true // Zapętlenie wideo
                                    });
                                    // Utwórz element <source> dla wideo i ustaw atrybuty
                                    const $sourceElement = $('<source>').attr({
                                        'src': srcWords[idx], // Poprawne użycie interpolacji
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
                                    if (idx === 1 || idx === 2) {
                                        function addVideo2bd0(index) {
                                            console.log('hej80dB', idx);

                                            // Usuń poprzednie wideo
                                            removePreviousVideo();
                                            console.log('hej78', idx);

                                            // Dodaj div z wideo do tła kontenera
                                            const $vidDiv = $('<div>').addClass('background-video22');

                                            // Utwórz element <video> i ustaw atrybuty
                                            const $videoElement = $('<video>').attr({
                                                'autoplay': true, // Automatyczne odtwarzanie wideo
                                                'muted': true, // Wyciszenie dźwięku wideo
                                                'loop': true // Zapętlenie wideo
                                            });
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
                                            // Oblicz początkowy postęp na podstawie wszystkich wcześniejszych wideo


                                            console.log('Początkowy postęp dla indeksu:', idx, 'to:', initialProgress);

                                            // Obsługa załadowania metadanych wideo
                                            $videoElement.on('loadedmetadata', function () {
                                                const videoDuration = this.duration;
                                                videoDurations[index] = videoDuration;

                                                // Aktualizacja totalDuration, jeśli jeszcze nie obliczone
                                                if (!totalDuration) {
                                                    totalDuration = videoDurations.reduce((sum, duration) => sum + (duration || 0), 0);
                                                }

                                                tablica12ab.push(videoDuration);
                                                console.log('hej15b', tablica12ab[0]);
                                                // Obsługa postępu w trakcie odtwarzania wideo

                                            });
                                        }
                                        addVideo2bd0(0);
                                    }
                                    setTimeout(function () {
                                        console.log('hej24bc', tablica12ab[0]);
                                    }, 300); // Opóźnienie w milisekundach (tu: 200 ms)
                                    if (idx === 2) {
                                        function addVideo2bd0(idx) {
                                            console.log('hej80dB', idx);

                                            // Usuń poprzednie wideo
                                            removePreviousVideo();
                                            console.log('hej78', idx);

                                            // Dodaj div z wideo do tła kontenera
                                            const $vidDiv = $('<div>').addClass('background-video22');

                                            // Utwórz element <video> i ustaw atrybuty
                                            const $videoElement = $('<video>').attr({
                                                'autoplay': true, // Automatyczne odtwarzanie wideo
                                                'muted': true, // Wyciszenie dźwięku wideo
                                                'loop': true // Zapętlenie wideo
                                            });
                                            // Utwórz element <source> dla wideo i ustaw atrybuty
                                            const $sourceElement = $('<source>').attr({
                                                'src': srcWords[idx], // Poprawne użycie interpolacji
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
                                            // Oblicz początkowy postęp na podstawie wszystkich wcześniejszych wideo

                                            console.log('Początkowy postęp dla indeksu:', idx, 'to:', initialProgress);

                                            // Obsługa załadowania metadanych wideo
                                            $videoElement.on('loadedmetadata', function () {
                                                const videoDuration = this.duration;
                                                videoDurations[idx] = videoDuration;

                                                // Aktualizacja totalDuration, jeśli jeszcze nie obliczone
                                                if (!totalDuration) {
                                                    totalDuration = videoDurations.reduce((sum, duration) => sum + (duration || 0), 0);
                                                }
                                                console.log('hej15', videoDuration);
                                                tablica12ad.push(videoDuration);
                                                tablica12abc[0] = tablica12ab[0] + tablica12ad[0];
                                                // Obsługa postępu w trakcie odtwarzania wideo

                                            });
                                        }
                                        addVideo2bd0(1);
                                    }

                                    console.log('hej24bci', tablica12ad[0]);
                                    console.log('hej24bcl', tablica12abc[0]);
                                    let currentIndexValue = [];


                                    $videoElement.on('loadedmetadata', function () {
                                        const videoDuration = this.duration;
                                        videoDurations[idx] = videoDuration;
                                        console.log('tablica77', totalDuration);
                                        $videoElement.on('timeupdate', function () {
                                            let adjustedProgress = 0;

                                            adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[idx] / totalDuration) * 100;
                                            console.log('hej22cd', idx);
                                            if (idx === 0) {
                                                let startPosition = 0;  // Przykład: start na początku
                                                let startPositionPercentage = (startPosition / totalDuration) * 100; // Przeliczenie na procent
                                                console.log('hej24b1', startPositionPercentage);
                                                updateProgress2(startPositionPercentage, adjustedProgress);
                                            }
                                            if (idx === 1) {
                                                setTimeout(function () {
                                                    let startPosition = tablica12ab[0];  // Przykład: start na określonej wartości
                                                    let startPositionPercentage = (startPosition / totalDuration) * 100; // Przeliczenie na procent
                                                    console.log('hej24b2', startPositionPercentage);
                                                    updateProgress2(startPositionPercentage, adjustedProgress);
                                                }, 800); // Opóźnienie w milisekundach
                                            }
                                            if (idx === 2) {
                                                let startPosition = tablica12abc[0];  // Przykład: start na określonej wartości
                                                let startPositionPercentage = (startPosition / totalDuration) * 100; // Przeliczenie na procent
                                                console.log('hej24b3', startPositionPercentage);
                                                updateProgress2(startPositionPercentage, adjustedProgress);
                                            }

                                            console.log('hej22cdi', startPosition);
                                            // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                            if (!currentIndexValue.includes(idx)) {
                                                // Dodaj index do tablicy currentIndex
                                                currentIndexValue.push(idx);
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
                                                addVideo2bd(idx + 1);
                                            }
                                        });
                                    });

                                    addScenes(index);
                                    // Dodaj wideo do kontenera
                                    $vidDiv.appendTo($container);



                                    // Inicjalizacja paska postępu
                                    const $progressBar2 = $('<div>').addClass('progress-bar2');
                                    if (window.matchMedia("(min-width: 999px)").matches) {
                                        $progressBar2.css({
                                            'position': 'absolute',
                                            'z-index': '2',
                                            'bottom': '0',
                                            'height': '7px', // Wysokość paska postępu
                                            'background-color': 'green', // Kolor paska postępu
                                            'margin-bottom': '-2%',
                                            'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
                                        });
                                    } else {
                                        $progressBar2.css({
                                            'position': 'absolute',
                                            'z-index': '2',
                                            'bottom': '0px',
                                            'height': '7px', // Wysokość paska postępu
                                            'background-color': 'green'
                                        });
                                    }
                                    function updateProgress2(startPosition, adjustedProgress) {
                                        console.log('hej122', startPosition);
                                        // Zaktualizuj pasek postępu: szerokość będzie zależna od startowej pozycji oraz postępu
                                        $('.progress-bar2').css('left', startPosition + '%'); // Ustawienie lewej krawędzi paska postępu
                                        $('.progress-bar2').css('width', adjustedProgress + '%'); // Ustawienie szerokości paska postępu
                                    }
                                    $progressBar2.appendTo($container);

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
                            });

                            // Tworzymy element <div> dla nakładki
                            const $overlay = $('<div>').addClass('overlay');

                            // Tworzymy przycisk w overlay
                            const $buttonb = $('<img>').attr({
                                'src': 'https://www.arbulang.com/img/startsystem.png',
                                'class': 'overlay-button'
                            });
if (window.matchMedia("(max-width: 999px)").matches) {
                                            if (indexDiv % 2 === 0) {
                                                console.log('Warunek podzielności przez 2 spełniony2');
                                                // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                                $buttonb.css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '140px',
                                'width': '20px',
                                'height': '20px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                                                });
                                            } else if (indexDiv % 2 !== 0) {
                                                console.log('Warunek podzielności przez 1 spełniony2');
                                                // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                                $buttonb.css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '10px',
                                'width': '20px',
                                'height': '20px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                                                });
                                            }
                                        } else if (window.matchMedia("(min-width: 999px)").matches) {
                                            // Dodatkowe style, jeśli indexDiv jest podzielny przez 4
                                            if (indexDiv % 4 === 0) {
                                                $buttonb.css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '10px',
                                'width': '20px',
                                'height': '20px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                                                });
                                            }
                                        }
                            // Dodajemy elementy do kontenera
                            $container.append($thumbnailContainer); // Miniatury
                            $container.append($videoElement); // Wideo
                            $container.append($overlay); // Nakładka
                            $container.append($buttonb); // Przycisk w nakładce
                            // Dodaj funkcję hover do kontenera
                            if (indexDiv < 18) {
                                // Jeśli indexDiv < 5, dodajemy hover z dynamicznym napisem
                                $container.hover(function () {
                                    $('.overlay', this).css('transform', 'translateX(0)');

                                    // Twórz nowy dynamiczny div z napisem
                                    const $dynamicDiv = $('<div>').addClass('dynamic-div').text('Lekcja dostępna - otwórz');
                                    // Dodaj dynamiczny div do kontenera
                                    $dynamicDiv.appendTo($(this)).fadeIn(300);
                                }, function () {
                                    $('.overlay', this).css('transform', 'translateX(100%)');

                                    // Usuń dynamiczny div po zakończeniu hovera
                                    $('.dynamic-div', this).fadeOut(300, function () {
                                        $(this).remove();
                                    });
                                });
                            }
                                                        if (indexDiv < 20 && indexDiv > 17) {
                                // Jeśli indexDiv < 5, dodajemy hover z dynamicznym napisem
                                $container.hover(function () {
                                    $('.overlay', this).css('transform', 'translateX(0)');

                                    // Twórz nowy dynamiczny div z napisem
                                    const $dynamicDiv2 = $('<div>').addClass('dynamic-div2').text('Nowa lekcja - już dostępna');
                                    // Dodaj dynamiczny div do kontenera
                                    $dynamicDiv2.appendTo($(this)).fadeIn(300);
                                }, function () {
                                    $('.overlay', this).css('transform', 'translateX(100%)');

                                    // Usuń dynamiczny div po zakończeniu hovera
                                    $('.dynamic-div2', this).fadeOut(300, function () {
                                        $(this).remove();
                                    });
                                });
                            }

                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                        }
                        setTimeout(function () {
                            addVideo3(0);
                        }, 1000);
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
            
            <!DOCTYPE html>
<head>
<title>Jak szybko nauczyć się angielskiego – 230 najważniejszych słów</title>
<meta charset="UTF-8">

<meta name="description" content="Ta platforma e-lerningowa pokazuje, że możesz wzmocnić swoją pamięć poznając zaledwie kilka słów za pomocą nowoczesnej techiniki pamięciowej.">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/alert.css">
    <link rel="stylesheet" type="text/css" href="css/lista.css">
    <link rel="stylesheet" type="text/css" href="css/fiszki.css">
    <link rel="stylesheet" type="text/css" href="css/styl7.css">
        <link rel="stylesheet" type="text/css" href="js/audioaudio.css">
    <link rel="stylesheet" type="text/css" href="css/1nowe-pc.css">
            <script src="js/story.js"></script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2654094815555460"
    crossorigin="anonymous"></script>
</head>
<style>
    #learningNotification {
  display: block !important;
  background: yellow !important;
  z-index: 9999 !important;
  position: relative;
}
</style>
<body>
    <div id="kontenery">
        <div id='karta1'>
            <p>Zdanie 1sze</p><img id="as" src="img/karty/as.jpg">
        </div>
        <div class="obrazek-container" id="obrazek-container1">
        </div>
        <div id='karta2'>
            <p>Zdanie 2gie</p><img id="as" src="img/karty/krol.jpg">
        </div>
        <div class="obrazek-container" id="obrazek-container2">
        </div>
        <div id='karta3'>
            <p>Zdanie 3cie</p><img id="as" src="img/karty/dama.jpg">
        </div>
        <div class="obrazek-container" id="obrazek-container3">
        </div>
    </div>
    <div id="kontenery2">
        <div class="obrazek-container" id="obrazek-container2b">
        </div>
        <div class="obrazek-container" id="obrazek-container2b">
        </div>
        <div class="obrazek-container" id="obrazek-container2b">
        </div>
        <div id='karta3b'>
            <p>Zdanie 3cie</p><img id="as" src="img/karty/dama.jpg">
        </div>
    </div>
    <button id="nauka">
        <p>UCZE SIĘ: <span id="liczbaKlikniec2">0</span>
    </button>
    <div id="right-container"><button id="nauka2">NAUCZYŁEM SIĘ X</button></div>
    <div id="bottom-container"><button id="nauka2">
            <p>POSTĘP: <span id="liczbaKlikniec">0</span>- ZAZNAJOMIONYCH
        </button></div>
        <script src="js/lista.js"></script>
    <div class="grid-containerb">
    </div>
        <script src="start\testowyb.js"></script>
<script>
// Wywołaj funkcję z otrzymaną wartością
function wybierzRodzaj(category, one, two, three) {
        console.log("Wybrany rodzaj słownictwa: " + category);
    console.log("Parametry data -> one:", one, "two:", two, "three:", three);
    console.log("Wybrany rodzaj słownictwa: " + category);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id już jest w matchingLessons, aby uniknąć duplikatów
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    } else if (category === 'sport') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id już jest w matchingLessons, aby uniknąć duplikatów
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    } else if (category === 'natura') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id już jest w matchingLessons, aby uniknąć duplikatów
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    } else if (category === 'nauka') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id już jest w matchingLessons, aby uniknąć duplikatów
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    } else if (category === 'czarny humor') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id już jest w matchingLessons, aby uniknąć duplikatów
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    } else if (category === 'zwiazki') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id już jest w matchingLessons, aby uniknąć duplikatów
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    } else {
    // Iteracja przez fiszki
    for (const fiszka of fiszki) {
        console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
if (fiszka.category !== 'all') {
        // Sprawdzenie, czy kategoria fiszki nie jest równa 'all'
        if (fiszka.category !== 'all') {
            // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
            const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
            const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

            // Jeśli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
            if (isInCategory2 || isInCategory3) {
                console.log(`Znaleziono fiszkę z kategorią "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                if (fiszka.id && fiszka.id[1]) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    }
}
    }

    // Dodaj one, two, three jeśli istnieją i nie są już dodane
    [one, two, three].forEach(val => {
        if (val && !matchingLessons.includes(val)) {
            matchingLessons.push(val);
            console.log(`➕ Dodano lekcję z parametru data: ${val}`);
        }
    });

    // Wyświetl fiszki tylko dla lessonId: one, two, three
    if (one) {
        console.log("📘 Wyświetlam lekcję dla one:", one);
        showFiszkiForLesson(one, fiszki, category);
    }
    if (two) {
        console.log("📗 Wyświetlam lekcję dla two:", two);
        showFiszkiForLesson(two, fiszki, category);
    }
    if (three) {
        console.log("📙 Wyświetlam lekcję dla three:", three);
        showFiszkiForLesson(three, fiszki, category);
    }
}

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const dataParam = urlParams.get('data');

// Zamień wartość 'data' na tablicę liczb
let selectedData = [];
if (dataParam) {
    selectedData = dataParam.split(',').map(num => parseInt(num, 10));
    console.log("Wybrane dane (data):", selectedData);
}

// Przypisz odpowiednio
const one = selectedData[0];
const two = selectedData[1];
const three = selectedData[2];

// Wywołaj funkcję z dodatkowymi parametrami
wybierzRodzaj(category, one, two, three);

function showFiszkiForLesson(lessonIdToShow, fiszki, category) {
    const matchingFiszki = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow);

    if (matchingFiszki.length > 0) {
        console.log(`Fiszki dla lekcji ${lessonIdToShow}:`);
        matchingFiszki.forEach(fiszka => {
            console.log(`Processing fiszka with ID: [${fiszka.id.join(', ')}]`);
            generateFiszkaBlock(fiszka, lessonIdToShow, category); // Upewnij się, że funkcja generateFiszkaBlock() jest zdefiniowana
            console.log(`Generated fiszka with ID: [${fiszka.id.join(', ')}]`);
        });
    } else {
        console.log(`No fiszki found for Lesson ${lessonIdToShow}.`);
    }
}
</script>
<script src="js/scroll.js"></script>
<script src="js/scrollapp.js"></script>
<script src="js/repeating.js"></script>
<script src="js/storage.js"></script>
</body>
<div id="footer"></div>
<div id="footer"></div>
<!-- Bieżący badge ze statycznym id -->
<div id="mainCounter" style="
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 128, 0, 0.8);
    color: white;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 18px;
    z-index: 1000;
    box-shadow: 0 0 6px rgba(0,0,0,0.1);
">
  🧠 Łącznie: <span id="totalValue">0</span><br>
  <div id="learningNotification" style="margin-top: 6px; font-size: 14px; color: #fff;"></div>
</div>

<!-- Kontener odznak po prawej stronie, pionowo -->
<div id="badgesColumn" style="
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 80px;
">

  <!-- Zdobyte odznaki (pionowo u góry) -->
  <div id="earnedBadgesContainer" style="
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      max-height: 300px;
      overflow-y: auto;
  ">
    <!-- Tu będą wstawiane zdobyte odznaki -->
  </div>

<!-- Aktualna odznaka na dole -->
<div id="currentBadgeContainer" style="
    margin-top: 20px;
    text-align: center;
    display: none;
">
  <h3 style="color: darkgreen; font-weight: bold; font-size: 12px; margin-bottom: 6px;"></h3>
  <div id="currentBadgeName" style="font-size: 14px; font-weight: bold; color: darkblue; margin-bottom: 6px;">
    <!-- Tu pojawi się nazwa odznaki -->
  </div>
  <div style="position: relative; display: inline-block;">
    <img id="badgeImage" src="img/songo1.jpg" alt="Odznaka" style="width: 60px; height: 60px; border-radius: 8px;">
    <div id="badgeOverlayText" style="
        position: absolute;
        bottom: 2px;
        right: 2px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 15px;
        padding: 2px 6px;
        border-radius: 4px;
    ">0/4</div>
  </div>
</div>

</div>
</html>