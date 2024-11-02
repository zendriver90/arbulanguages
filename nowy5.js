function highlightFirstWord(indexDiv) {
    const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);

    if (matchingFiszki1.length > 0) {
        const $sentence10 = $container.find('.sentenceBB');
        const $sentence11 = $container.find('.sentence11');
        const $sentence1bba = $container.find('.sentence1bba');

        if ($sentence10.length > 0 || $sentence11.length > 0 || $sentence1bba.length > 0) {
            let sentenceText = $sentence10.html();
            let sentenceText2 = $sentence1bba.html();
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = sentenceText;
            let words = tempDiv.innerText.split(' ');

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

                let button1 = `<button class="nav-button" id="prev-button" style="display:none;">&lt;</button>`;
                let button2 = `<button class="next-button" id="nextbutton">&gt;</button>`;

                $sentence10.html(`
                    ${button1} 
                    <span class="word-span">${highlightedSpan}</span> 
                    <span class="word-span">${secondWord}</span> 
                    <span class="word-span">${thirdWord}</span> 
                    <span class="word-span">${forthWord}</span> 
                    <span class="word-span">${fifthWord}</span> 
                    <span class="word-span">${sixthWord}</span>
                    ${button2}
                    <br>
                    <div class="sentence1bba">${sentenceText2}</div>
                `);

                $('.word-span').on('mouseover', function() {
                    $(this).addClass('highlighted');
                }).on('mouseout', function() {
                    $(this).removeClass('highlighted');
                });

                let currentHighlightIndex = 0; // Indeks bieżącego podświetlenia

                // Obsługa kliknięcia na "next"
                $(document).on('click', '#nextbutton', function() {
                    if (currentHighlightIndex < 5) {
                        currentHighlightIndex++;
                        updateHighlight($sentence10, currentHighlightIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                    }
                    // Pokazuj przycisk "prev" tylko, gdy jest cofnąć
                    if (currentHighlightIndex > 0) {
                        $('#prev-button').show();
                    }
                    if (currentHighlightIndex === 5) {
                        $('#nextbutton').hide(); // Ukryj przycisk next na końcu
                    }
                });

                // Obsługa kliknięcia na "prev"
                $(document).on('click', '#prev-button', function() {
                    if (currentHighlightIndex > 0) {
                        currentHighlightIndex--;
                        updateHighlight($sentence10, currentHighlightIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                    }
                    // Ukryj przycisk "prev" jeśli jesteśmy na początku
                    if (currentHighlightIndex === 0) {
                        $(this).hide();
                    }
                    // Pokaż przycisk "next" jeśli nie jesteśmy na końcu
                    if (currentHighlightIndex < 5) {
                        $('#nextbutton').show();
                    }
                });


// Funkcja aktualizująca podświetlenie słów
function updateHighlight($sentence10, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    const words = [firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord];
    let highlightedWords = words.map((word, i) => {
        return i === index ? `<span class="highlighted">${word}</span>` : `<span class="word-span">${word}</span>`;
    });

    // Uaktualnij HTML dla $sentence10
    $sentence10.html(`
        <button class="nav-button" id="prev-button">&lt;</button>
        ${highlightedWords.join(' ')}
        <button class="next-button" id="nextbutton">&gt;</button>
    `);

    // Dodaj efekt podświetlenia przy najechaniu myszą
    $('.word-span').on('mouseover', function() {
        $(this).addClass('highlighted');
    }).on('mouseout', function() {
        $(this).removeClass('highlighted');
    });
}


function highlightFirstWord(indexDiv) {

    // Wybierz kontener na podstawie indexDiv
    const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);

    // Sprawdź, czy kontener istnieje
    if (matchingFiszki1.length > 0) {


        console.log('tablicaFiszki:', matchingFiszki1);
        // Zlokalizuj elementy z tekstem (np. div z klasą sentenceBB)
        const $sentence10 = $container.find('.sentenceBB');
        const $sentence11 = $container.find('.sentence11');
        const $sentence1bba = $container.find('.sentence1bba');

        // Sprawdź, czy element sentence10 istnieje
        if ($sentence10.length > 0 || sentence11.length > 0 || sentence1bba.length > 0) {
            // Pobierz tekst z sentence10
            let sentenceText = $sentence10.html(); // Użyj html() zamiast text(), aby zachować znaczniki
            let sentenceText2 = $sentence1bba.html(); // Użyj html() zamiast text(), aby zachować znaczniki
            console.log('hej55', sentenceText2);
            console.log('sentenceText:', sentenceText);

            // Podziel tekst na słowa, usuwając dodatkowe znaczniki HTML
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = sentenceText;
            let words = tempDiv.innerText.split(' '); // Użyj innerText, aby uzyskać tekst bez znaczników

            if (words.length > 0) {
                // Pobierz pierwsze, drugie i trzecie słowo
                let firstWord = words[0];
                let secondWord = words[1] || ''; // Upewnij się, że drugi wyraz istnieje
                let thirdWord = words[2] || ''; // Upewnij się, że trzeci wyraz istnieje
                let forthWord = words[3] || '';
                let fifthWord = words[4] || ''; // Upewnij się, że drugi wyraz istnieje
                let sixthWord = words[5] || ''; // Upewnij się, że trzeci wyraz istnieje
                
                // Utwórz nowe spany dla każdego słowa
                let highlightedSpan = `<span class="highlighted">${firstWord}</span>`;
                let highlightedSpan2 = `<span class="highlighted" style="display:none;">${secondWord}</span>`;
                let highlightedSpan3 = `<span class="highlighted" style="display:none;">${thirdWord}</span>`;
                let highlightedSpan4 = `<span class="highlighted" style="display:none;">${forthWord}</span>`;
                let highlightedSpan5 = `<span class="highlighted" style="display:none;">${fifthWord}</span>`;
                let highlightedSpan6 = `<span class="highlighted" style="display:none;">${sixthWord}</span>`;
                
                // Tworzymy przyciski z klasą CSS
                let button1 = `<button class="nav-button" id="prev-button">&lt;</button>`;
                let button2 = `<button class="next-button" id="nextbutton">&gt;</button>`;

                // Użyj html(), aby zachować znaczniki i odstępy
                $sentence10.html(`
    ${button1} 
    <span class="word-span">${highlightedSpan}</span> 
    <span class="word-span">${secondWord}</span> 
    <span class="word-span">${thirdWord}</span> 
    <span class="word-span">${forthWord}</span> 
    <span class="word-span">${fifthWord}</span> 
    <span class="word-span">${sixthWord}</span>
    ${button2}
    <br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bbab">${sentence1bbab}</div>
                `); // Dodaj przyciski w odpowiednich miejscach
// Dodaj efekt podświetlenia przy najechaniu myszą
$('.word-span').on('mouseover', function() {
    $(this).addClass('highlighted');
}).on('mouseout', function() {
    $(this).removeClass('highlighted');
});
                let currentHighlightIndex = 0; // Zmienna do przechowywania aktualnego indeksu podświetlenia
                const currentWordIndex = 0; // Indeks aktualnej fiszki
                // Znajdź istniejące elementy sentence1bba i sentence1bbab

// Definicja funkcji, która obsługuje logikę podświetlenia
$(document).on('click', '.next-button', function() {
    // Ukryj bieżące podświetlenie i przełącz na następne
    if (currentHighlightIndex === 0) {
        // Zastąp highlightedSpan przez firstWord i aktywuj highlightedSpan2
        $sentence10.html(`
            ${button1} 
    <span class="word-span">${firstWord}</span> 
    <span class="word-span">${highlightedSpan2}</span> 
    <span class="word-span">${thirdWord}</span> 
    <span class="word-span">${forthWord}</span> 
    <span class="word-span">${fifthWord}</span> 
    <span class="word-span">${sixthWord}</span>
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
            // Dodaj efekt podświetlenia przy najechaniu myszą
$('.word-span').on('mouseover', function() {
    $(this).addClass('highlighted');
}).on('mouseout', function() {
    $(this).removeClass('highlighted');
});
        $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 1; // Przejdź do następnego indeksu
displayWords(1, indexDiv);
    } else if (currentHighlightIndex === 1) {
        // Zastąp highlightedSpan2 przez secondWord i aktywuj highlightedSpan3
        $sentence10.html(`
            ${button1} 
    <span class="word-span">${firstWord}</span> 
    <span class="word-span">${secondWord}</span> 
    <span class="word-span">${highlightedSpan3}</span> 
    <span class="word-span">${forthWord}</span> 
    <span class="word-span">${fifthWord}</span> 
    <span class="word-span">${sixthWord}</span>
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
                        // Dodaj efekt podświetlenia przy najechaniu myszą
$('.word-span').on('mouseover', function() {
    $(this).addClass('highlighted');
}).on('mouseout', function() {
    $(this).removeClass('highlighted');
});
        $sentence10.find('.highlighted').eq(1).hide(); // Ukryj highlightedSpan2
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan3
        currentHighlightIndex = 2; // Przejdź do następnego indeksu
displayWords(2, indexDiv);
    } else if (currentHighlightIndex === 2) {
        console.log('Zmieniam podświetlenie z pierwszego na czwarte słowo.');
        $sentence10.html(`
            ${button1} 
    <span class="word-span">${firstWord}</span> 
    <span class="word-span">${secondWord}</span> 
    <span class="word-span">${thirdWord}</span> 
    <span class="word-span">${highlightedSpan4}</span> 
    <span class="word-span">${fifthWord}</span> 
    <span class="word-span">${sixthWord}</span>
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
                                    // Dodaj efekt podświetlenia przy najechaniu myszą
$('.word-span').on('mouseover', function() {
    $(this).addClass('highlighted');
}).on('mouseout', function() {
    $(this).removeClass('highlighted');
});
                    $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 3;
displayWords(3, indexDiv);
    } else if (currentHighlightIndex === 3) {
        console.log('Zmieniam podświetlenie z pierwszego na piąte słowo.');
        $sentence10.html(`
            ${button1} 
    <span class="word-span">${firstWord}</span> 
    <span class="word-span">${secondWord}</span> 
    <span class="word-span">${thirdWord}</span> 
    <span class="word-span">${forthWord}</span> 
    <span class="word-span">${highlightedSpan5}</span> 
    <span class="word-span">${sixthWord}</span>
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
                                                // Dodaj efekt podświetlenia przy najechaniu myszą
$('.word-span').on('mouseover', function() {
    $(this).addClass('highlighted');
}).on('mouseout', function() {
    $(this).removeClass('highlighted');
});
                    $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 4;
        displayWords(4, indexDiv);
    } else if (currentHighlightIndex === 4) {
        console.log('Zmieniam podświetlenie z pierwszego na szóste słowo.');
        $sentence10.html(`
            ${button1} 
    <span class="word-span">${firstWord}</span> 
    <span class="word-span">${secondWord}</span> 
    <span class="word-span">${thirdWord}</span> 
    <span class="word-span">${forthWord}</span> 
    <span class="word-span">${fifthWord}</span> 
    <span class="word-span">${highlightedSpan6}</span>
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
                                                            // Dodaj efekt podświetlenia przy najechaniu myszą
$('.word-span').on('mouseover', function() {
    $(this).addClass('highlighted');
}).on('mouseout', function() {
    $(this).removeClass('highlighted');
});
                    $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 5;
        displayWords(5, indexDiv);
    }
        // Obsługa kliknięcia na "next" - przechodzenie do kolejnych słów

});

                // Funkcja displayWords przyjmuje teraz currentWordIndex
                function displayWords(nowy, indexDiv) {
                                console.log('index66', indexDiv);
                    console.log('hej4433', currentWordIndex);
                        const $wordContainer = $('<div>').attr('id', 'wordDisplay').css({
                            'position': 'absolute',
                            'bottom': '-20px',
                            'font-size': '22px',
                            'right': '-140px',
                            'width': '130px',
                            'height': '30px',
                            'text-align': 'center',
                            'line-height': '30px',
                            'color': 'black',
                            'background-color': 'lightgray',
    'border-radius': '8px',
    'border': '2px solid black',  // Dodaj obramowanie
                            'z-index': '1000000'
                        }).appendTo($container);
                        const $currentWordDisplay = $('<span>').appendTo($wordContainer);

                        let currentFiszkaIndex = nowy;

                        const $prevButton = $('<button>').text('<').css({
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
                            if (currentFiszkaIndex > 0) {
                                currentFiszkaIndex--;
                                console.log('Moving to previous fiszka, currentFiszkaIndex:', currentFiszkaIndex);
                                updateWordDisplay(currentWordIndex); 
                            }
                        });

$nextButton.on('click', function() {
    console.log('Aktualny index fiszki:', currentFiszkaIndex);
    console.log('Dostępne fiszki:', matchingFiszki1.length);
        
    if (currentFiszkaIndex < matchingFiszki1.length - 1) {
        currentFiszkaIndex++; // Zwiększ indeks fiszki
        console.log('hej68c', currentFiszkaIndex);
        // Wywołaj funkcję, przekazując zaktualizowany indeks
        wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki1); // Podaj nazwę kategorii, którą chcesz wybrać
    } else {
        console.log('Koniec fiszek!'); // Informacja o końcu fiszek
    }
});

    function updateWordDisplay() {
        const fiszka = matchingFiszki1[currentFiszkaIndex];
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
    
                        updateWordDisplay(currentWordIndex);
// Wywołaj funkcję z podaną kategorią
function wybierzRodzaj2(category, currentFiszkaIndex, matchingFiszki1) {
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
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('Wyświetlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategorią "${category}".`);
    }
}
wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki1);
function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);

if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki1.length) {

        // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
        const fiszka = matchingFiszki1[currentFiszkaIndex];
            const fiszkaBlock = generateFiszkaBlock(fiszka, indexDiv, 'fiszkaContainer1');
        

    }
    return fiszkaBlock;
}
                }
                displayWords(currentWordIndex, indexDiv); // Wywołanie z indeksem
                
                // Dostosuj rozmiar czcionki
                updateWordDisplay(currentWordIndex);
                adjustFontSize($sentence10);
            } else {
                console.log('Nie znaleziono słów w sentence10.');
            }
        } else {
            console.log('Nie znaleziono elementu .sentence10 w kontenerze.');
        }
    } else {
        console.log('Nie znaleziono kontenera o data-lesson = ' + indexDiv);
    }
}


    const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);