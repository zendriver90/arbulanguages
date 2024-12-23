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