function highlightFirstWord(indexDiv) {
    const $container = $(`.image-container3b[data-lesson="${indexDiv}"]`);
    // Obliczamy id pierwszego zdania w tej lekcji
    const firstSentenceId = (indexDiv - 1) * 3 + 2;

    // Pobieramy fiszkę, która jest pierwszym zdaniem w lekcji
    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === firstSentenceId);
    $(`.image-container3b`).css('z-index', 100); 
    $container.css('z-index', 102); 

    console.log('Zawartość kontenera:', matchingFiszki3);

if (matchingFiszki3.length > 0) {
        const $sentence30 = $container.find('.sentence-block').first();
        const $sentence30b = $container.find('.sentence-block').first();
        const $sentence30c = $container.find('.sentence-block').first();

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
let button1 = `<button class="prev-button prev-button1">&lt;</button>`;
let button2 = `<button class="next-buttonv next-button1">&gt;</button>`;

// --- LINIA 2 ---
let button1b = `<button class="prev-button prev-button2">&lt;</button>`;
let button2b = `<button class="next-buttonv next-button2">&gt;</button>`;

// --- LINIA 3 ---
let button1c = `<button class="prev-button prev-button3">&lt;</button>`;
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
        // PodĹwietlenie klikniÄtego sĹowa na staĹe
    $('.word-span2').removeClass('highlighted');
    $('.word-span2').eq(clickedIndex).addClass('highlighted'); // PodĹwietlenie wedĹug clickedIndex
        $('.word-span3').removeClass('highlighted');
    $('.word-span3').eq(clickedIndex).addClass('highlighted'); // PodĹwietlenie wedĹug clickedIndex

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
            handleWordClick(clickedIndex, indexDiv, matchingFiszki3);
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
    const fiszka = matchingFiszki3[currentFiszkaIndex];
    console.log('hej11d', fiszka);

    // --- aktualny index wyświetlany w konsoli i w widoku ---
    console.log('Aktualny index fiszki:', currentFiszkaIndex);

    // Jeśli chcesz wyświetlać go też w interfejsie (np. w rogu kontenera):
    let $indexDisplay = $('#indexDisplay');
    if ($indexDisplay.length === 0) {
        $indexDisplay = $('<div id="indexDisplay"></div>').css({
            position: 'absolute',
            top: '5px',
            right: '10px',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '14px',
            zIndex: 9999
        }).appendTo('body');
    }
    $indexDisplay.text(`Index: ${currentFiszkaIndex}`);

    // --- aktualizacja tekstu słowa ---
    if (fiszka && fiszka.sentence1) {
        const currentWord = fiszka.sentence1[currentWordIndex] || "";
        $currentWordDisplay.text(currentWord);
    } else if (fiszka && fiszka.sentence2) {
        const currentWord = fiszka.sentence2[currentWordIndex] || "";
        $currentWordDisplay.text(currentWord);
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
                const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);
$(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 104); // Podniesienie z-index tylko dla aktywnego
                            let ostatniElement2 = tablica11b[tablica11b.length - 1];
console.log('hej55aa', ostatniElement2);
wybierzRodzaj2c('all', currentFiszkaIndex, matchingFiszki3, indexDiv);
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

                // Dodaj buttony do diva
                $flashcardContainer.append(`
<div id="konsola">
    <div id="title">WIDOK</div>
<button id="inne" class="rodzaj-button" data-rodzaj="osoby">SPOŁECZNOŚCIOWY</button>        
        <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'losowyuklad')">WYGENEROWANY JEDNORAZOWO</button>
            <div id="title">RODZAJ SŁOWNICTWA</div>
                    <button id="inne" class="rodzaj-button" data-rodzaj="osoby">KOGNATY</button>
    <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '', tablica3[1])">Wszystkie</button>
    <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('osoby', '', '', '', '', '', tablica3[1], 'other')">Osoby</button>
    <button class="rodzaj-button" data-rodzaj="zaimki osobowe" onclick="przekazArgument0('zaimkiosobowe', '', '', '', '', '', tablica3[1], 'other')">Zaimki osobowe</button>
    <button id="inne" onclick="przekazArgument0('emocje', '', '', '', '', '', tablica3[1])">Emocje</button>
    <button class="rodzaj-button" data-rodzaj="zaimki" onclick="przekazArgument0('spojniki', '', '', '', '', '', tablica3[1])">Spójniki</button>
    <button id="inne" onclick="przekazArgument0('kolory', '', '', '', '', '', tablica3[1])">Kolory</button>
    <button class="rodzaj-button" data-rodzaj="zwierzeta" onclick="przekazArgument0('zwierzeta', '', '', '', '', '', tablica3[1])">Zwierzęta</button>
    <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument0('czasownik', '', '', '', '', '', tablica3[1])">Czasowniki</button>
            <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument0('czas', '', '', '', '', '', tablica3[1])">Czas</button>
    <br>ILOŚĆ MATERIAŁU NA LEKCJE<br>
<button class="czas" onclick="ustawTryb('zdania', undefined); przekazArgument0(globalCategory, '', '', 'zdania', false, false, tablica3[1])">5 MINUT (JEDNO ZDANIE)</button>
<button id="english" class="czas" onclick="ustawTryb('fiszki', undefined); przekazArgument0(globalCategory, '', '', 'fiszki', true, true, tablica3[1])">10 MINUT (3 ZDANIA) - OPCJONALNIE</button>
<br>TRYB LEKCJI<br>
<button id="english" class="czas" onclick="ustawTryb(tablica3[0], ''); przekazArgument0(globalCategory, '', '', tablica3[0], false, false, tablica3[1])">ZDANIA</button>
<button class="czas" onclick="ustawTryb(tablica3[0], 'frazy'); przekazArgument0(globalCategory, '', '', tablica3[0], true, true, tablica3[1])">FRAZY</button>
    <button id="inne" class="czas">POJEDYŃCZE SŁOWA</button>
    <br>DOSTĘPNE WERSJE TŁUMACZENIA<br>
    <button id="english" class="charakter-button" onclick="wybierzCharakter()">NA ŻADANIE-OPCJONALNIE</button>
    <button id="inne" class="charakter-button" onclick="wybierzCharakter('fiszki')">TYLKO PO ANGIELSKU</button>
    <button id="inne" class="charakter-button" onclick="przekazArgument0('', '', '', 'zdania', true)">TYLKO PO POLSKU</button>
</div>
<div id="konsola">
            <div id="title">CZASY</div>
<button class="charakter-button" onclick="przekazArgument0(globalCategory, '', '', '', '', '', tablica3[1], 'play')">OZNACZ CZAS</button>
<br>
    <button class="charakter-button" onclick="przekazArgument0('PresentSimple', '', '', '', '', '', tablica3[1], 'play')">PRESENT SIMPLE</button>
            <button class="charakter-button" onclick="przekazArgument0('PresentContinous', '', '', '', '', '', tablica3[1], 'other')">PRESENT CONTINOUS</button>
                    <button class="charakter-button" onclick="przekazArgument0('PastSimple', '', '', '', '', '', tablica3[1])">PAST SIMPLE</button>
    <button id="inne">PAST SIMPLE</button>
    <br>
    <div id="title">OPCJE ZDANIA</div>
    <button id="inne" class="charakter-button">PODZIEL ZDANIA NA CZĘŚCI</button>
    <button id="inne" class="czas">WYSUŃ JEDNOCZEŚNIE W DANEJ LEKCJI</button>
    <br>
    <div id="title">CHARAKTER ZDANIA</div>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'krotkie')">Krótkie</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'dlugie')">Długie(złożone)</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, '')">Dowolne</button>
    <div id="title">PRIORYTETY LINGWISTYCZNE</div>
    <button id="inne" onclick="wybierzCharakter('krotkie')">Wymowa</button>
<button id="inne" class="charakter-button" onclick="wybierzCharakter('krotkie')">Pisownia</button>
<button id="inne" onclick="wybierzCharakter('krotkie')">Sens zdania</button>
    <button id="inne" id="dowolne" onclick="wybierzCharakter('dowolne')">WSZYSTKIE</button>
</div>
<div id="konsola3">
    <h2>Ulubione Fiszki</h2>
    <button onclick="wplecUlubioneFiszki()">Ulubione Fiszki</button>
</div>
<div id="konsola4">
    <h2>Generuj intuicyjnie z pokrewną tematyką</h2>
    <button onclick="wybierzTematyke('nauka')">Podobne</button>
    <button onclick="wybierzTematyke('podroze')">Eksporuj moją nową pasje</button>
    <button onclick="wybierzTematyke('podroze')">Odkryj moją nową pasje</button>
</div>
</div>
`);

    // Kontener na tekst, który będzie scrollowany
    const $textContainer2 = $('<div></div>').css({
      'position': 'absolute',
      'top': '20px', // poniżej przycisku i licznika
      'left': '0',
      'color': 'white',
      'right': '0',
      'bottom': '0',
      'overflow-y': 'auto',
      'padding': '0 10px',
      'font-size': '10px',
      'text-align': 'center'
    });

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
            $textContainer2.append($videoName);
        }
    });
$mediaContainer.append($textContainer2);