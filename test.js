let tablica12ab2 = [];
            let tablica12ad2 = [];
            let tablica12abc2 = [];
function showCombinedSentenceForLesson5b2(selectedCategory, globalCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
                console.log('hej55bbv', selectedCategory);

                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej444', newIndex);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';
                if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {
                    let sentence20 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence22 = "";
                    let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence33 = "";
                    // Zmienna do liczenia wystąpień indexToCheck
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
                                        // Dodaj sentencePart do sentence10
                                        sentence11 += sentencePart2 + " ";
                                    }
                                }

                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart3 = fiszka.translateb;
                                    sentence1bba += sentencePart3 + " ";
                                }
                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart3 = fiszka.translate;
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
                                // CHCE TUTAJ WSTAWIĆ FUNKCJE KTÓRA BĘDZIZE KOLOROWAĆ MOJE LEFT-BUTTON
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

                                });
                            }, 0);
                        });                          
                    }
                    
                    