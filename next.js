                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container4'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    $('.grid-container').append($container);
if (newIndex === 0 && !buttonindex) {
} else {
                        function addVideo3(index) {
                            console.log('index44b', indexDiv);
                            // Utwórz element <video> i ustaw atrybuty
                            const $videoElement = $('<video>').attr({
                                'muted': true, // Wyciszenie dźwięku wideo
                                'loop': true, // Zapętlenie wideo
                                'style': 'z-index: 1',
                                'poster': srcWordimage[index] // Dodanie plakatu do wideo
                            });
                            // Utwórz element <div> dla nakładki
                            const $overlay = $('<div>').addClass('overlay');
                            const $buttonb = $('<img>').attr({
                                'src': 'http://arbu-1dcc9.web.app/img/startsystem.png', // Względna ścieżka do pliku PNG
                                'class': 'overlay-button' // Klasa dla stylów CSS
                            }).css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '10px',
                                'width': '30px',
                                'height': '30px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                            });
                            // Dodaj element video do diva dla wideo
                            $videoElement.appendTo($container);
                            // Dodaj nakładkę do kontenera, po dodaniu wideo
                            $overlay.appendTo($container);
                            // Dodaj przycisk do nakładki
                            $buttonb.appendTo($container);

                            if (indexDiv < 34) {
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
                                                        // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, polski);
                        }
                        addVideo3(0);
                    }
                    const fiszki = [
    {
        id: [
            1,
            1,
            1
        ],
        srcWordimage: "http://arbu-1dcc9.web.app/filmy/party.png",
    },
    {
        id: [
            2,
            1,
            1
        ],
    },
    {
        id: [
            3,
            1,
            1
        ],
    },
    {
        id: [
            4,
            1,
            2
        ],
    },
    {
        id: [
            5,
            1,
            2
        ],
    },
    {
        id: [
            6,
            1,
            2
        ],
    },
    {
        id: [
            7,
            2,
            3
        ],
        srcWordimage: "http://arbu-1dcc9.web.app/filmy/procedure.png",
    },
    {
        id: [
            8,
            2,
            3
        ],
    },
    {
        id: [
            9,
            2,
            3
        ],
    },
    {
        id: [
            10,
            2,
            4
        ],
    },
    {
        id: [
            11,
            2,
            4
        ],
    },
    {
        id: [
            12,
            2,
            4
        ],
    },
    {
        id: [
            13,
            3,
            5
        ],
        srcWordimage: "http://arbu-1dcc9.web.app/filmy/emotions.png",
    },
    {
        id: [
            14,
            3,
            5
        ],
    },
    {
        id: [
            15,
            3,
            5
        ],
    },
    {
        id: [
            16,
            3,
            6
        ],
    },
    {
        id: [
            17,
            3,
            6
        ],
    },
    {
        id: [
            18,
            3,
            6
        ],
    },
    {
        id: [
            19,
            4,
            7
        ],
        srcWordimage: "http://arbu-1dcc9.web.app/filmy/shy.png",
    }
    
                                                $(document).on('click', '.word-span', function () {
                                                const clickedWord = $(this).text();
                                                console.log("Kliknięto:", clickedWord);

                                                // Ustalanie clickedIndex dla klikniętego słowa
                                                clickedIndex = words.indexOf(clickedWord);
                                                console.log('hej341', clickedIndex);
                                                                                                                                                        // Sprawdź, czy `indexDiv` już istnieje w `fiszkaobject.data`
                                                    const existingIndex = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex !== -1) {
                                                        // Jeśli istnieje, zastąp wartość
                                                        fiszkaobject.data[existingIndex] = [indexDiv, clickedIndex];
                                                    } else {
                                                        // Jeśli nie istnieje, dodaj nową tablicę
                                                        fiszkaobject.data.push([indexDiv, clickedIndex]);
                                                    }
                                                    // Sprawdź, czy `indexDiv` już istnieje w `fiszkaobject.data`
                                                    const existingIndex2 = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex2 !== -1) {
                                                        // Jeśli istnieje, zaktualizuj `currentFiszkaIndex`
                                                        fiszkaobject.data[existingIndex2][1] = clickedIndex;
                                                        console.log('hej303bb', clickedIndex);

                                                        console.log('hej303bbx', indexDiv);
                                                    } else {
                                                        // Jeśli nie istnieje, dodaj nową tablicę
                                                        fiszkaobject.data.push([indexDiv, clickedIndex]);
                                                    }
console.log('hej556', fiszkaobject);
                                                updateHighlight($sentence10, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);

                                            });
                                                function updateHighlight($sentence10, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {

                                                const words = [firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord];

                                                // Generowanie HTML z przypisanymi funkcjami kliknięcia
                                                let highlightedWords = words.map((word, i) => {
                                                    return i === index
                                                            ? `<span class="highlighted word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`
                                                            : `<span class="word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`;
                                                });

                                                // Uaktualnij HTML dla $sentence10
                                                $sentence10.html(`
        <button class="nav-button" id="prev-button">&lt;</button>
        ${highlightedWords.join(' ')}
        <button class="next-button" id="nextbutton">&gt;</button>
    `);

                                                // Dodanie zdarzenia click dla każdego słowa
                                                $sentence10.find('.word-span').on('click', function () {
                                                    const clickedIndex = $(this).data('index'); // Pobieranie indeksu klikniętego słowa
                                                    console.log('hej223', clickedIndex);
                                                    handleWordClick(clickedIndex, indexDiv, matchingFiszki1); // Wywołanie funkcji obsługi kliknięcia

                                                });
                                                console.log('hej12a', displayWordsIndex);
                                                displayWords(index, indexDiv); // Wywołaj funkcję do wyświetlenia słów z nowym indeksem
                                            }
                                            
                                            function znajdzPierwszyIndexDiv(fiszkaobject, nowaWartosc) {
  for (let i = 0; i < fiszkaobject.data.length; i++) {
    if (fiszkaobject.data[i][0] === nowaWartosc) {
      return i; // Zwracamy indeks, jeśli znaleźliśmy dopasowanie
    }
  }
  return -1; // Zwracamy -1, jeśli nie znaleźliśmy dopasowania
}
const pierwszyIndex = znajdzPierwszyIndexDiv(fiszkaobject, indexDiv);
if (pierwszyIndex !== -1) {
  console.log("Pierwszy element z indexDiv:", fiszkaobject.data[pierwszyIndex]);
} else {
  console.log("Nie znaleziono elementu z takim indexDiv");
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
                                console.log('hej55h', ostatniElement3);
                                console.log('hej55h+', ostatniElement2);
                                setTimeout(() => {
                                    showFiszkiForLesson6(ostatniElement2, ostatniElement3);
                                }, 0);

                                highlightFirstWord(indexDiv);
                                console.log('hej44f', tablica24[tablica24.length - 1]);
                            });
                            
                            
                            function wybierzRodzaj2(category, currentFiszkaIndex, matchingFiszki1, indexDiv) {

    console.log("Wybrany rodzaj słownictwa: ", currentFiszkaIndex);

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

                                                let ostatniElement2 = tablica11b[tablica11b.length - 1];
                                                if (currentFiszkaIndex === 0) {
                                                    wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki1, ostatniElement2);
                                                }
                                                
                                                
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
                                        
                                        function generateFiszkaBlock2(fiszka, lessonId2) {

// TWORZENIE KONTENERA FISZKI
        let fiszkaContainer = $('<div>').addClass('fiszka fiszka-' + fiszka.id);

    // Tworzenie ikony krzyżyka
    let closeIcon = $('<span>')
        .addClass('close-icon')
        .html('&times;') // HTML kod krzyżyka
        .css({
            position: 'absolute',
            top: '5px',
            right: '5px',
            cursor: 'pointer',
            color: 'red',
            fontSize: '20px',
        });

    // Zdarzenie kliknięcia na krzyżyk
    closeIcon.on('click', function () {
        removeFiszka(fiszka.id, lessonId2);
    });
    
    $nextButton.on('click', function () {
                                                    console.log('Aktualny index fiszki:', indexDiv);
                                                    console.log('Dostępne fiszki:', matchingFiszki1);
                                                                                                            
                                                    console.log('hej303b', fiszkaobject);
                                                    if (currentFiszkaIndex <= matchingFiszki1.length - 1) {
                                                        currentFiszkaIndex++; // Zwiększ indeks fiszki
$(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego
                        let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55', ostatniElement2);
    // Sprawdź, czy element 'wordDisplay' już istnieje
// Sprawdź, czy element 'wordDisplay' już istnieje w odpowiednim kontenerze
if (ostatniElement2) {
    // Znajdź kontener na podstawie data-lesson
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // Jeśli 'wordDisplay' istnieje, wykonaj coś z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay:', $wordContainer);
        
        // Tutaj możesz wykonać akcje na $wordContainer, np. przesunięcie
        $wordContainer.css({
            'right': '0px', // Przesuń w lewo
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
                                                        handleNextClick(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                                                        wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki1, indexDiv);
                                                        updateWordDisplay(currentWordIndex, currentFiszkaIndex);
                                                        // Wywołaj funkcję, przekazując zaktualizowany indeks
                                                        console.log("indexDiv2", tablica12b);
                                                    } else {
                                                        console.log('Koniec fiszek!'); // Informacja o końcu fiszek
                                                    }
                                                });
                                                
                                                                if (czas === 'fiszki' && czas !== "zdania") {
                    console.log('Warunek czas === "fiszki" jest spełniony');
                    $('.grid-container .image-container4').remove();
                    $('.grid-container .image-container5').remove();

                    if (myVariable.length > 1) {
                        let indexDiv = 0;
                        for (let i = 0; i < myVariable.length; i += 3) {
                            indexDiv++;
                            const lessonId1 = myVariable[i];
                            const lessonId2 = myVariable[i + 1];
                            const lessonId3 = myVariable[i + 2];
                                                            function showCombinedSentenceForLesson(matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray) {
                console.log('hej55bb', rodzaj);
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej450b', matchingIndexes2);
                console.log('hej444', newIndex);
                if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {