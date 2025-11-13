function highlightFirstWord3(indexDiv) {
    const $container = $(`.image-container3b[data-lesson="${indexDiv}"]`);
    // Obliczamy id pierwszego zdania w tej lekcji
    const firstSentenceId = (indexDiv - 1) * 3 + 3;

    // Pobieramy fiszkę, która jest pierwszym zdaniem w lekcji
    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === firstSentenceId);
    $(`.image-container3b`).css('z-index', 100); 
    $container.css('z-index', 102); 

    console.log('funkcja odpala się');

if (matchingFiszki3.length > 0) {
        const $sentence30 = $container.find('.sentence-block').first();
                const $sentence30b = $container.find('.sentence-block').first();
                        const $sentence30c = $container.find('.sentence-block').first();
        
console.log('funkcja odpala się', $sentence30);
        if ($sentence30.length > 0 && $sentence30b.length > 0 && $sentence30c.length > 0) {
            console.log('funkcja odpala się', $sentence30);
let sentenceText = globalSentence30 + " " + globalSentence33;
let sentenceText2 = globalSentence30b + " " + globalSentence33b;
let sentenceText3 = globalSentence30c + " " + globalSentence33c;
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
let button1 = `<button class="prev-buttonv prev-button1">&lt;</button>`;
let button2 = `<button class="next-buttonv next-button1">&gt;</button>`;

// --- LINIA 2 ---
let button1b = `<button class="prev-buttonv prev-button2">&lt;</button>`;
let button2b = `<button class="next-buttonv next-button2">&gt;</button>`;

// --- LINIA 3 ---
let button1c = `<button class="prev-buttonv prev-button3">&lt;</button>`;
let button2c = `<button class="next-buttonv next-button3">&gt;</button>`;

// --- LINIA 1 ---
$sentence30.html(`
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
$sentence30b.html(`
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
$sentence30c.html(`
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
            indexDiv, $sentence30, 0, // startowe podświetlenie = pierwsze słowo
            firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord
        );    
                        let currentWordIndex = 0; // Indeks sĹowa, ktĂłre ma byÄ wyĹwietlane

// Funkcja obsĹugujÄca klikniÄcia na sĹowa, przyjmujÄca clickedIndex
function handleWordClick(clickedIndex, indexDiv, matchingFiszki3) {
    console.log("Przekazano clickedIndex:", clickedIndex);

    // PodĹwietlenie klikniÄtego sĹowa na staĹe
    $('.word-span').removeClass('highlighted');
    $('.word-span').eq(clickedIndex).addClass('highlighted'); // PodĹwietlenie wedĹug clickedIndex

    // Zaktualizuj currentHighlightIndex na clickedIndex
    currentHighlightIndex = clickedIndex;
    console.log("Aktualny indeks podĹwietlenia:", currentHighlightIndex);

    // WywoĹaj funkcjÄ wyĹwietlania fiszek
    showFiszkiForLesson5(indexDiv, fiszki, clickedIndex, matchingFiszki3);

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
        let fiszka = matchingFiszki3[currentFiszkaIndex];
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
    updateHighlight($sentence30, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    // WywoĹanie handleWordClick z clickedIndex
    handleWordClick(clickedIndex, indexDiv, matchingFiszki3);
});
function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki3) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);

if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki3.length) {

        // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
        const fiszka = matchingFiszki3[currentFiszkaIndex];
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
        

    }
    return fiszkaBlock;
}

let currentHighlightIndex = 0; // Indeks podĹwietlenia

let displayWordsIndex = 0; // Indeks do wyĹwietlania sĹĂłw (moĹźna dostosowaÄ w zaleĹźnoĹci od wymagaĹ)


// ObsĹuga klikniÄcia na "next"
function handleNextClick(indexDiv, $sentence30, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // SprawdĹş, czy moĹźemy zwiÄkszyÄ indeks podĹwietlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence30, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex++;

        }
function handleNextClick2(indexDiv, $sentence30, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // SprawdĹş, czy moĹźemy zwiÄkszyÄ indeks podĹwietlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence30, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex--;

        }


function updateHighlight(indexDiv, $sentence30, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
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
    $sentence30.html(`
        <div class="sentence-line">
            <button class="prev-buttonv prev-button1">&lt;</button>
            ${highlightedWords.join(' ')}
            <button class="next-buttonv next-button1">&gt;</button>
        </div>
        <div class="sentence-line">
            <button class="prev-buttonv prev-button2">&lt;</button>
            ${highlightedWords2.join(' ')}
            <button class="next-buttonv next-button2">&gt;</button>
        </div>
        <div class="sentence-line">
            <button class="prev-buttonv prev-button3">&lt;</button>
            ${highlightedWords3.join(' ')}
            <button class="next-buttonv next-button3">&gt;</button>
        </div>
    `);

    // --- Obsługa kliknięć w słowa
    $sentence30.find('.word-span, .word-span2, .word-span3')
        .off('click')
        .on('click', function () {
            const clickedIndex = $(this).data('index');
            handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
            currentHighlightIndex = clickedIndex;
            updateHighlight(indexDiv, $sentence30, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
        });

}
$(document).off('click', '.next-buttonv').on('click', '.next-buttonv', function () {
    const $container = $(this).closest('.image-container3b');
    const indexDiv = $container.data('lesson');
    const $sentence30 = $container.find('.sentence-block').first();

    // jeśli indeks nie istnieje — ustaw na -1
    // (dzięki temu pierwsze kliknięcie zrobi -1 + 1 = 0 → 1)
    if (typeof currentFiszkaIndex === "undefined") {
        currentFiszkaIndex = -1;
        console.warn("⚠️ currentFiszkaIndex był niezdefiniowany — ustawiono -1");
    }

    // 👇 teraz dopiero inkrementujemy
    currentFiszkaIndex++;

    console.log("🔥 Kliknięto NEXT, aktualny indeks:", currentFiszkaIndex);

    // jeśli przekroczy zakres — wróć do 0
    if (currentFiszkaIndex >= matchingFiszki3.length) {
        currentFiszkaIndex = 0;
    }

    const fiszka = matchingFiszki3[currentFiszkaIndex];
    const index = currentFiszkaIndex;

    if (fiszka) {
    // --- aktualizacja tekstu słowa ---
    if (fiszka && fiszka.sentence1) {
        const currentWord = fiszka.sentence1[currentWordIndex] || "";
        $currentWordDisplay.text(currentWord);
    } else if (fiszka && fiszka.sentence2) {
        const currentWord = fiszka.sentence2[currentWordIndex] || "";
        $currentWordDisplay.text(currentWord);
    }
        updateHighlight(indexDiv, $sentence30, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
        showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki3);
        updateWordDisplay(currentFiszkaIndex);
    }
});

$(document).off('click', '.prev-buttonv').on('click', '.prev-buttonv', function () {
    const $container = $(this).closest('.image-container3b');
    const indexDiv = $container.data('lesson');
    const $sentence30 = $container.find('.sentence-block').first();

    // jeśli indeks nie istnieje — ustaw na -1
    // (dzięki temu pierwsze kliknięcie zrobi -1 + 1 = 0 → 1)
    if (typeof currentFiszkaIndex === "undefined") {
        currentFiszkaIndex = -1;
        console.warn("⚠️ currentFiszkaIndex był niezdefiniowany — ustawiono -1");
    }

    // 👇 teraz dopiero inkrementujemy
    currentFiszkaIndex--;

    console.log("🔥 Kliknięto NEXT, aktualny indeks:", currentFiszkaIndex);

    // jeśli przekroczy zakres — wróć do 0
    if (currentFiszkaIndex >= matchingFiszki3.length) {
        currentFiszkaIndex = 0;
    }

    const fiszka = matchingFiszki3[currentFiszkaIndex];
    const index = currentFiszkaIndex;

    if (fiszka) {
    // --- aktualizacja tekstu słowa ---
    if (fiszka && fiszka.sentence1) {
        const currentWord = fiszka.sentence1[currentWordIndex] || "";
        $currentWordDisplay.text(currentWord);
    } else if (fiszka && fiszka.sentence2) {
        const currentWord = fiszka.sentence2[currentWordIndex] || "";
        $currentWordDisplay.text(currentWord);
    }
        updateHighlight(indexDiv, $sentence30, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
        showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki3);
        updateWordDisplay(currentFiszkaIndex);
    }
});
       let currentFiszkaIndex = 0;
    function updateWordDisplay(currentWordIndex) {
        let fiszka = matchingFiszki3[currentFiszkaIndex];
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
    console.log('DostÄpne fiszki:', matchingFiszki3.length);

    if (currentFiszkaIndex <= matchingFiszki3.length - 1) {
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
                                                        handleNextClick2(indexDiv, $sentence30, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                                                        wybierzRodzaj2b('all', indeks5, matchingFiszki3, indexDiv);
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
                                                    console.log('DostÄpne fiszki:', matchingFiszki3);
                                                                                                            
                                                    console.log('hej303b', fiszkaobject);
                                                    if (currentFiszkaIndex <= matchingFiszki3.length - 1) {
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
                                                        wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki3, indexDiv);
                                }, 800);

                                                                                                                console.log('hej68cx', currentFiszkaIndex);
                                                        handleNextClick(indexDiv, $sentence30, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);

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

                                                    wybierzRodzaj2c('all', indeks55x, matchingFiszki3, indexDiv);
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
wybierzRodzaj2c('all', currentFiszkaIndex, matchingFiszki3, indexDiv);
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
function wybierzRodzaj2(category, currentFiszkaIndex, matchingFiszki3, indexDiv) {

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
            showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki3);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}

// WywoĹaj funkcjÄ z podanÄ kategoriÄ
function wybierzRodzaj2b(category, indeks5, matchingFiszki3, indexDiv) {

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
            showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki3);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}
function wybierzRodzaj2c(category, indeks5, matchingFiszki3, indexDiv) {

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
            showFiszkiForLesson5c(indexDiv, fiszki, indeks5, matchingFiszki3);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategoriÄ "${category}".`);
    }
}

function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki3) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex > 0 && currentFiszkaIndex < matchingFiszki3.length) {
        if (matchingFiszki3.length > 0) {
            let id = matchingFiszki3[currentFiszkaIndex - 1].id;
            console.log('hej2x', id);
            let parametr = '';
            // SprawdĹş, czy id jest tablicÄ
            if (Array.isArray(id)) {
                // PoĹÄcz wartoĹci z tablicy id w jeden ciÄg znakĂłw oddzielony przecinkami
                id = id.slice(0, 3).join(',');
                // ObsĹuga ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki3[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
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
            const fiszka = matchingFiszki3[currentFiszkaIndex];
            console.log('Ĺadowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
} else if (currentFiszkaIndex === 0) {
    if (matchingFiszki3.length >= 0) {
                    // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki3[currentFiszkaIndex];
            console.log('Ĺadowana fiszka5:', currentFiszkaIndex);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
}
}
}

function showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki3) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex >= 0 && currentFiszkaIndex <= matchingFiszki3.length) {
        if (matchingFiszki3.length >= 0) {
            let id = matchingFiszki3[currentFiszkaIndex + 1].id;
            console.log('hej2', id);
            let parametr = '';
            // SprawdĹş, czy id jest tablicÄ
            if (Array.isArray(id)) {
                // PoĹÄcz wartoĹci z tablicy id w jeden ciÄg znakĂłw oddzielony przecinkami
                id = id.slice(0, 3).join(',');
                // ObsĹuga ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki3[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
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
            const fiszka = matchingFiszki3[currentFiszkaIndex];
            console.log('Ĺadowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
}
}
function showFiszkiForLesson5c(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki3) {
    console.log('Ĺaduje siÄ');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

if (currentFiszkaIndex === 0) {
    if (matchingFiszki3.length >= 0) {
                    // Pobierz jednÄ fiszkÄ na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki3[currentFiszkaIndex];
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
                console.log('Nie znaleziono sĹĂłw w sentence30.');
            }
        } else {
            console.log('Nie znaleziono elementu .sentence30 w kontenerze.');
        }
    } else {
        console.log('Nie znaleziono kontenera o data-lesson = ' + indexDiv);
    }

}


            let polski = false;
            let losowaniaCounter = 0; // Zmienna licznika losowań
            let nowyLicznik = 0;
            let losowaniaCounter2 = 0; // Zmienna licznika losowań
            let tablica33 = [];
            let tablica33b = [];
            function wybierzRodzaj(selectedCategory, category, czas, matchingIndexes, index55, index77, buttonindex, idpolski, frazyid, matchingIndexes2, rodzaj, matchingIndexes3, isSearching, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40, indexDivRange, indexDiv0, indexDiv0b, indexDiv0d, number, flagaPrzycisku2, flagaPrzycisku) {
                category = category || globalCategory;
                czasv2 = czas;
                number;
                       console.log('Liczba5', index55, index77); // Dodano log licznika losowań
                console.log('hej108n', number);
                console.log("Wybrany rodzaj słownictwa:vv ", selectedCategory);
                console.log('hej5b', index55);
                console.log('hej755', matchingIndexes);

                const matchingLessons = new Set();
                const matchingLessons1b = new Set(matchingLessons5);
                const matchingLessons2 = new Set();
// Iteracja przez fiszki
console.log('hej755', matchingLessons1b);
                for (const fiszka of fiszki) {
                    let matchingFiszka = false;
                    // Sprawdzenie warunków dla category
                    if (category === 'all' || !category) {
                        matchingFiszka = true;
                    } else if (category !== 'PresentSimple' && category !== 'PresentContinous' && category !== 'PastSimple') {
                        matchingFiszka = fiszka.category2.includes(category);
                    } else {
                        matchingFiszka = fiszka.category3 && fiszka.category3.includes(category);
                    }

                    // Dodanie fiszki do matchingLessons na podstawie warunków
                    if (matchingFiszka) {
                        if (frazyid === 'frazy') {
                            matchingLessons2.add(fiszka.id[2]);
                        } else {
                            // Dodawanie id do matchingLessons, jeśli czas nie jest 'frazy'
                            matchingLessons.add(fiszka.id[1]);
                        }
                    }
                }
                console.log('matchingLessons2:', matchingLessons2);
                const uniqueMatchingLessons = Array.from(matchingLessons);
                const uniqueMatchingLessons2 = Array.from(matchingLessons2);
                const uniqueMatchingLessons2b = Array.from(matchingLessons1b);
                    // Pobranie lekcji dla pasujących słów
                console.log('Unikalne dopasowane lekcjenn:', uniqueMatchingLessons2b);

                let myVariable;

                                if (idpolski === 'losowyuklad') {
                                    console.log('hej130: wyswietla się');
    console.log('Warunek czas === "fiszki" jest spełniony');
    $('.grid-container .image-container3b').remove();
                    $('.grid-container .image-container4').remove();
                    $('.grid-container .image-container5').remove();

    console.log('Zawartość myVariable:', myVariable);
    if (myVariable.length > 1) {
        let indexDiv = 0;
        let lessonsGroups = []; // Tablica do przechowywania grup lessonId
                        let startIndex = 0;
        for (let i = 0; i < myVariable.length; i += 3) {
            indexDiv++;
            const lessonId1 = myVariable[i];
            const lessonId2 = myVariable[i + 1];
            const lessonId3 = myVariable[i + 2];

            const lessonObject2 = {
                lessonId1: lessonId1,
                lessonId2: lessonId2,
                lessonId3: lessonId3,
                indexDiv: indexDiv
            };

            lessonsGroups.push(lessonObject2);
        }

        console.log('Utworzone grupy:', lessonsGroups);

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffleArray(lessonsGroups);
        console.log('Grupy po tasowaniu:', lessonsGroups);

        lessonsGroups.forEach((group, index) => {
            console.log(`Grupa ${index}:`, group);

            const lesson1Sentences = correlationsCount.find(item => item[0] === group.lessonId1) || [group.lessonId1, 0];
            const lesson2Sentences = correlationsCount.find(item => item[0] === group.lessonId2) || [group.lessonId2, 0];
            const lesson3Sentences = correlationsCount.find(item => item[0] === group.lessonId3) || [group.lessonId3, 0];

            const lesson1SecondPartLength = partLengths2.find(item => item.id === group.lessonId1)?.count2 || 0;
            const lesson2SecondPartLength = partLengths2.find(item => item.id === group.lessonId2)?.count2 || 0;
            const lesson3SecondPartLength = partLengths2.find(item => item.id === group.lessonId3)?.count2 || 0;

            const lesson1FirstPartLength = partLengths1.find(item => item.id === group.lessonId1)?.count2 || 0;
            const lesson2FirstPartLength = partLengths1.find(item => item.id === group.lessonId2)?.count2 || 0;
            const lesson3FirstPartLength = partLengths1.find(item => item.id === group.lessonId3)?.count2 || 0;

            const lesson1PartLength = partLengths3.find(item => item.id === group.lessonId1)?.cumulativeCount || 0;
            const lesson2PartLength = partLengths3.find(item => item.id === group.lessonId2)?.cumulativeCount || 0;
            const lesson3PartLength = partLengths3.find(item => item.id === group.lessonId3)?.cumulativeCount || 0;

            console.log('Dane dla grupy:', {
                lesson1PartLength,
                lesson2PartLength,
                lesson3PartLength,
                lesson1Sentences,
                lesson2Sentences,
                lesson3Sentences
            });

    try {
        showCombinedSentenceForLesson22b(
            selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
            buttonindex, index55, index77, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
            startIndex, newIndex, indexDiv,
            lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences,
            lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
            lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
            cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
            lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
        );
    } catch (error) {
        console.error("Błąd w showCombinedSentenceForLesson dla grupy:", group, "Błąd:", error);
    }
        });

        console.log('Zawartość lessonsGroups:', lessonsGroups);
        const numberOfContainers = $('.image-container3').length;
        console.log('Liczba dodanych divów:', numberOfContainers);
    }
}