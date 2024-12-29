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
    
    
    
    function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ładuje się');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
    if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki1.length) {
        if (matchingFiszki1.length > 0) {
            let id = matchingFiszki1[currentFiszkaIndex].id;
            console.log('hej2', id);
            let parametr = '';

            // Sprawdź, czy id jest tablicą
            if (Array.isArray(id)) {
                // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
                id = id.slice(0, 3).join(',');

                // Obsługa ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                // Sprawdzamy, czy id ma więcej niż 3 elementy, nie bazujemy już na długości ciągu znaków
                if (id.length > 3) {
                    parametr = matchingFiszki1[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
                }
            }

            // Tworzenie klasy CSS z odpowiednim formatowaniem (poprawione usunięcie przecinków w CSS)
            const className = `fiszka-${id}${parametr ? '\\,' + parametr : ''}`;
            const selector = `.${className.replace(/,/g, '\\,')}`;
            console.log('hejhej2', parametr);
            console.log('hej1h', className);
                    // Zapisz klasę 'active' lub zmień z 'active2' na 'active'

                    // Zapisz klasę 'active' lub zmień z 'active2' na 'active'
        }
                    // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            const fiszka2 = matchingFiszki1[currentFiszkaIndex - 1];
            console.log('Ładowana fiszka:', fiszka2);
            const fiszkaBlock = generateFiszkaBlock(fiszka, indexDiv);
            removeFiszka(fiszka2);
            return fiszkaBlock;
    }

    console.log("Brak fiszek w matchingFiszki1 lub indeks poza zakresem.");
    return null; // lub jakąś inną odpowiednią wartość
}


function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ładuje się');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);



    if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki1.length) {
        if (matchingFiszki1.length > 0) {
            let id = matchingFiszki1[currentFiszkaIndex - 1].id;
            console.log('hej2', id);
            let parametr = '';

            // Sprawdź, czy id jest tablicą
            if (Array.isArray(id)) {
                // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
                id = id.slice(0, 3).join(',');

                // Obsługa ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki1[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
                }
            }

// Tworzenie klasy CSS
const className = `fiszka-${id}${parametr ? '\\,' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;

// Znalezienie i usunięcie diva z klasą `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa cały div z DOM
}
                // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ładowana fiszka:', fiszka);
            const fiszkaBlock = generateFiszkaBlock(fiszka, indexDiv);

            return fiszkaBlock;
}
        console.log('hej44', $container);
                }
            }
            
                    // Użycie wartości z tablica12b zamiast currentFiszkaIndex
let indeksb = tablica12b[0];  // Tutaj pobieramy pierwszy element z tablica12b
                console.log('hej64x', matchingFiszki1);
        tablica11c.push(matchingFiszki1[indeksb]);
        console.log('hej64c', tablica11c);
        
        tablica11b.push(indexDiv);
console.log('hej64', tablica11b);


    function addVideo2bd(idx) {
        console.log('hej80d', idx);

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

        let currentIndexValue = [];
        
    // Oblicz początkowy postęp na podstawie wszystkich wcześniejszych wideo
    let tablica12 = [];
        let initialProgress = tablica12[0];
                const videoDuration = this.duration;
        videoDurations[idx] = videoDuration;

        // Aktualizacja totalDuration, jeśli jeszcze nie obliczone
        if (!totalDuration) {
            totalDuration = videoDurations.reduce((sum, duration) => sum + (duration || 0), 0);
        }
        // Sprawdzenie danych wejściowych przed obliczeniami
console.log('videoDurations:', videoDurations);
console.log('totalDuration:', totalDuration);
    // Liczymy postęp z wszystkich wideo, które były wcześniej kliknięte (niekoniecznie odtworzone)
    for (let i = 0; i < idx; i++) {
        if (videoDurations[i]) {
            // Postęp dla wideo, które zostało wcześniej kliknięte, ale nie odtworzone
            initialProgress += (videoDurations[i] / totalDuration) * 100;
            tablica12.push(initialProgress);

        }
                    console.log('hej12a', tablica12);
    }

    // Ustaw początkowy punkt paska postępu
    updateProgress2(initialProgress);
    console.log('Początkowy postęp dla indeksu:', idx, 'to:', initialProgress);
    
    
        // Obsługa załadowania metadanych wideo
    $videoElement.on('loadedmetadata', function () {
        const videoDuration = this.duration;
        videoDurations[idx] = videoDuration;

        // Aktualizacja totalDuration, jeśli jeszcze nie obliczone
        if (!totalDuration) {
            totalDuration = videoDurations.reduce((sum, duration) => sum + (duration || 0), 0);
        }

        // Obsługa postępu w trakcie odtwarzania wideo
        $videoElement.on('timeupdate', function () {
            const currentProgress = (this.currentTime / videoDuration) * (videoDurations[idx] / totalDuration) * 100;
            updateProgress2(initialProgress + currentProgress);
            
                    if (idx === 1) {
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

    // Ustaw początkowy punkt paska postępu
    updateProgress2(initialProgress);
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
                tablica12ab.push(videoDuration);
        // Obsługa postępu w trakcie odtwarzania wideo
        $videoElement.on('timeupdate', function () {
            const currentProgress = (this.currentTime / videoDuration) * (videoDurations[idx] / totalDuration) * 100;
            updateProgress2(initialProgress + currentProgress);

                // Sprawdź, czy wideo zostało zakończone
                if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                    console.log('Wideo zakończone, uruchamiam następne.');
                    // Odtwórz następne wideo po zakończeniu poprzedniego
                    addVideo2bd0(idx + 1);
                    updateProgress2(0);
                }
            });
        });
        }
        addVideo2bd0(idx);
    }
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

    // Ustaw początkowy punkt paska postępu
    updateProgress2(initialProgress);
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
        tablica12ab.push(videoDuration);
        // Obsługa postępu w trakcie odtwarzania wideo
        $videoElement.on('timeupdate', function () {
            const currentProgress = (this.currentTime / videoDuration) * (videoDurations[idx] / totalDuration) * 100;
            updateProgress2(initialProgress + currentProgress);

                // Sprawdź, czy wideo zostało zakończone
                if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                    console.log('Wideo zakończone, uruchamiam następne.');
                    // Odtwórz następne wideo po zakończeniu poprzedniego
                    addVideo2bd0(idx + 1);
                    updateProgress2(0);
                }
            });
        });
        }
        addVideo2bd0(idx);
    }
    
    console.log('hej15m', sumPreviousDurations);
    // Obsługa postępu w trakcie odtwarzania
    $videoElement.on('timeupdate', function () {
        const currentTime = this.currentTime; // Obecny czas odtwarzania wideo

        // Obliczamy procentowy postęp wideo
        const currentProgress = (currentTime / videoDuration) * 100;

        console.log(`Procentowy postęp wideo ${idx}: ${currentProgress}%`);

        // Obliczamy, od jakiej pozycji na pasku zaczyna się postęp tego wideo
        const startPosition = (sumPreviousDurations / totalDuration) * 100; // Procentowe położenie początkowe dla tego wideo

        console.log(`Startowa pozycja dla wideo ${idx}: ${startPosition}%`);

        // Aktualizujemy pasek postępu dla tego wideo, zaczynając od `startPosition`
        updateProgress2(startPosition, currentProgress);
        
        function updateProgress2(startPosition, progress) {
    // Zaktualizuj pasek postępu: szerokość będzie zależna od startowej pozycji oraz postępu
    $('.progress-bar2').css('left', startPosition + '%'); // Ustawienie lewej krawędzi paska postępu
    $('.progress-bar2').css('width', progress + '%'); // Ustawienie szerokości paska postępu
}
    
    
    let idx2 = idx + 1;
const index2 = index + 2;
console.log('hej8a', idx2);
$videoElement.on('loadedmetadata', function () {
    console.log('hej18', idx);
    const videoDuration = this.duration;
    videoDurations[idx] = videoDuration;
    
        tablica6.push(videoDurations[idx]);
    // Obliczanie sumy poprzednich czasów trwania i dodanie do tablica6
    const sumPreviousDurations = tablica6[tablica6.length - 1];

    console.log('hej17', tablica6);

console.log('hej15m', sumPreviousDurations);
    // Obsługa postępu w trakcie odtwarzania wideo
    $videoElement.on('timeupdate', function () {
                                            let adjustedProgress = 0;
                                    for (let i = 0; i < index; i++) {
                                        adjustedProgress += (videoDurations[i] / totalDuration) * 100;
                                    }
        // Oblicz procent postępu dla obecnego wideo, uwzględniając wcześniejsze
        const currentProgress = ((sumPreviousDurations + this.currentTime) / totalDuration) * 100;
        setTimeout(function () {
        updateProgress2(currentProgress); // Zaktualizuj pasek postępu
}, 200); // Opóźnienie w milisekundach (tu: 200 ms)

if (idx === 0 && index === 0) {
    updateProgress2(adjustedProgress);
}
if (idx === 1 && index === 1) {
    updateProgress2(adjustedProgress);
}
if (idx === 2 && index === 2) {
    updateProgress2(adjustedProgress);
}

        // Użycie wartości z tablica12b zamiast currentFiszkaIndex
let indeksb = tablica12b[2];  // Tutaj pobieramy pierwszy element z tablica12b
                console.log('hej64x', matchingFiszki1);
        tablica11c.push(matchingFiszki1[indeksb]);
        console.log('hej64c', tablica11c);
        
        
        // Obsługa kliknięcia przycisku overlay
$buttonb.on('click', function () {
        // Dodaj kopię wartości indexDiv do tablicy
    // Przykład nowej wartości indexDiv
    let nowaWartosc = indexDiv;

    // Sprawdź, czy wartość już nie istnieje w tablicy (opcjonalnie)
    if (!tablica11b.includes(nowaWartosc)) {
        tablica11b.push(nowaWartosc); // Dodaj nową wartość na końcu tablicy
        console.log('Dodano wartość:', nowaWartosc);
        console.log('Dodano wartość:', tablica11b);
    } else {
        console.log('Wartość już istnieje w tablicy:', nowaWartosc);
    }

let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55h', ostatniElement2);
                        setTimeout(() => {
                        showFiszkiForLesson6(ostatniElement2);
                        }, 1000);
                        
                        function showFiszkiForLesson6(ostatniElement2) {

    console.log('hej11z', ostatniElement2);
    if (!Array.isArray(tablica12b)) {
        tablica12b = []; // Inicjalizuj tablicę, jeśli nie istnieje
    }

    // Jeżeli tablica jest pusta, dodaj 0 jako pierwszy element
    if (tablica12b.length === 0) {
        tablica12b.push(0);
    } else {
        // Jeśli tablica ma już elementy, przypisz 0 do pierwszego elementu
        tablica12b[0] = 0;
        // Niepotrzebne jest wywoływanie push bez argumentu, więc usuwamy tę linię
    }
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);

        console.log('ostatniElement2:', ostatniElement2);

    console.log('hej22x', tablica12b);
    const ostatniElement3 = tablica12b[tablica12b.length - 1];
    console.log('hej64xxh', ostatniElement3);
    if (matchingFiszki1.length > 0) {
                console.log('hej64xx', matchingFiszki1);
    if (ostatniElement3 >= 0 && ostatniElement3 < matchingFiszki1.length) {

            let id = matchingFiszki1[ostatniElement3].id;
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
        let selector2 = tablica13a[tablica13a.length - 2];
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
            
            function showFiszkiForLesson6(ostatniElement2, ostatniElement3) {
    console.log('hej64xxh', ostatniElement3);
    console.log('hej11z', ostatniElement2);
    if (!Array.isArray(tablica12b)) {
        tablica12b = []; // Inicjalizuj tablicę, jeśli nie istnieje
    }

    // Jeżeli tablica jest pusta, dodaj 0 jako pierwszy element
    if (tablica12b.length === 0) {
        tablica12b.push(0);
    } else {
        // Jeśli tablica ma już elementy, przypisz 0 do pierwszego elementu
        tablica12b[0] = 0;
        // Niepotrzebne jest wywoływanie push bez argumentu, więc usuwamy tę linię
    }
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);

        console.log('ostatniElement2:', ostatniElement2);

    console.log('hej22x', tablica12b);

    if (matchingFiszki1.length > 0) {
                console.log('hej64xx', matchingFiszki1);
    if (ostatniElement3 >= 0 && ostatniElement3 < matchingFiszki1.length) {

            let id = matchingFiszki1[ostatniElement3].id;
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
        let selector2 = tablica13a[tablica13a.length - 2];
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
            
            // Obsługa kliknięcia przycisku overlay
$buttonb.on('click', function () {
        // Dodaj kopię wartości indexDiv do tablicy
    // Przykład nowej wartości indexDiv
    let nowaWartosc = indexDiv;

    // Sprawdź, czy wartość już nie istnieje w tablicy (opcjonalnie)
    if (!tablica11b.includes(nowaWartosc)) {
        tablica11b.push(nowaWartosc); // Dodaj nową wartość na końcu tablicy
        console.log('Dodano wartość:', nowaWartosc);
        console.log('Dodano wartość:', tablica11b);
    } else {
        console.log('Wartość już istnieje w tablicy:', nowaWartosc);
    }

let ostatniElement2 = tablica11b[tablica11b.length - 2];
let ostatniElement3 = tablica12b[tablica12b.length - 1];
console.log('hej55h', ostatniElement2);
                        setTimeout(() => {
                        showFiszkiForLesson6(ostatniElement2, ostatniElement3);
                        }, 1000);
                        
                        ostatniElement2 - to numer kontenera;
                        ostatniElement3 - to numer danej fiszki w kontenerze
                        
                                
let currentFiszkaIndex = tablica24.length > 0 
    ? tablica24[tablica24.length - 1] // Ostatni element tablica20
    : 0; // Wartość domyślna, gdy tablica24 jest pusta
console.log('hej303x', currentFiszkaIndex);

                                                        console.log('Dodano wartośćx:', tablica12b[currentFiszkaIndex][0]);
                                                        let nowaWartosc = indexDiv;

                                // Sprawdź, czy wartość już nie istnieje w tablicy (opcjonalnie)
                                if (!tablica11b.includes(nowaWartosc)) {
                                    tablica11b.push(nowaWartosc); // Dodaj nową wartość na końcu tablicy
                                    console.log('Dodano wartość:', nowaWartosc);
                                    
                                } else {
                                    console.log('Wartość już istnieje w tablicy:', nowaWartosc);
                                }

                                let ostatniElement2 = tablica11b[0];

                                let ostatniElement3 = tablica12b[tablica12b.length - 1];
                                console.log('hej55h', ostatniElement3);
                                console.log('hej55h+', ostatniElement2);
                                                                if (tablica12b[1] === tablica11b[tablica11b.length - 1]) {
                                setTimeout(() => {
                                    showFiszkiForLesson6(ostatniElement2, ostatniElement3);
                                }, 0);
                            }
