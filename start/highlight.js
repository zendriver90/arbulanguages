function highlightFirstWord2(indexDiv) {
    const $container = $(`.image-container3b[data-lesson="${indexDiv}"]`);
    $(`.image-container3b`).css('z-index', 100); 
    $container.css('z-index', 102); 

    console.log('Zawartość kontenera:', matchingFiszki2);

if (matchingFiszki2.length > 0) {
        const $sentence20 = $container.find('.sentence');

        if ($sentence20.length > 0) {
            let sentenceText = $sentence20.html();
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = sentenceText;
            let words = tempDiv.innerText.trim().split(/\s+/);
            console.log('tutaj dociera kod', words);

            if (words.length > 0) {
                let firstWord = words[0];
                let secondWord = words[1] || '';
                let thirdWord = words[2] || '';
                let forthWord = words[3] || '';
                let fifthWord = words[4] || '';
                let sixthWord = words[5] || '';
                let highlightedSpan = `<span class="highlighted">${firstWord}</span>`;
                let highlightedSpan2 = `<span class="highlighted" style="display:none;">${secondWord}</span>`;
                let highlightedSpan3 = `<span class="highlighted" style="display:none;">${thirdWord}</span>`;
                let highlightedSpan4 = `<span class="highlighted" style="display:none;">${forthWord}</span>`;
                let highlightedSpan5 = `<span class="highlighted" style="display:none;">${fifthWord}</span>`;
                let highlightedSpan6 = `<span class="highlighted" style="display:none;">${sixthWord}</span>`;
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

$("<style>")
  .prop("type", "text/css")
  .html(".word-span:hover { background-color: #2ecc71; }")
  .appendTo("head");
                        
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

    // Generuj podĹwietlone sĹowa
    const highlightedWords = words.map((word, i) => {
        return i === index
            ? `<span class="highlighted word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`
            : `<span class="word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`;
    });

    // Zaktualizuj HTML dla $sentence20
    $sentence20.html(`
        <button class="prev-button" id="prev-button">&lt;</button>
        ${highlightedWords.join(' ')}
        <button class="next-button" id="next-button">&gt;</button>
    `);

    // ObsĹuga zdarzeĹ klikniÄcia sĹĂłw
    $sentence20.find('.word-span').off('click').on('click', function () {
        const clickedIndex = $(this).data('index');


        // WywoĹanie funkcji obsĹugi klikniÄcia
        handleWordClick(clickedIndex, indexDiv, matchingFiszki2);

        // Ponowne zaktualizowanie podĹwietlenia
        updateHighlight($sentence20, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
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
console.log('tutaj dociera kod2', words);
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

function showFiszkiForLesson6b(ostatniElement2, ostatniElement3) {

                        console.log('hej11z', ostatniElement2);
                        if (ostatniElement3 === undefined) {
                            ostatniElement3 = 0;
                        }
                        const $container = $(`.image-container3b[data-lesson="${ostatniElement2}"]`);

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