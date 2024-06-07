
function wybierzRodzaj(category, czas, matchingIndexes) {
                    category = category || globalCategory;
                    czasv2 = czas;
                    console.log("Wybrany rodzaj słownictwa: " + category);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut
                    console.log('hej7', matchingIndexes); // Dodano logowanie matchingIndexes

                    const matchingLessons = new Set(); // Użyj obiektu Set do przechowywania unikalnych wartości

                    // Iteracja przez fiszki
                    for (const fiszka of fiszki) {
                        // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                        const matchingFiszka = fiszka.category2.includes(category);
                        // Jeśli znaleziono pasującą fiszkę, dodaj numer lekcji do zestawu matchingLessons
                        if (matchingFiszka) {
                            matchingLessons.add(fiszka.id[1]);
                            console.log('hej8', matchingLessons);
                        }
                    }

                    // Konwertuj zestaw z powrotem na tablicę, jeśli to konieczne
                    const uniqueMatchingLessons = Array.from(matchingLessons);
                    console.log('hejxxxxxxxxxxxxxxxxx', uniqueMatchingLessons);
                    // Usuń załadowane kontenery o klasie 'image-container3'
                    const loadedContainers = document.querySelectorAll('.image-container3');
                    loadedContainers.forEach(container => {
                        container.parentNode.removeChild(container);
                    });
                    console.log('hejxxxxxxxxxxxxxxxxx');


                    if (czas === 'fiszki' && czas !== "zdania") {
                        console.log('Warunek czas === "fiszki" jest spełniony');
                        if (uniqueMatchingLessons.length > 1) {
                            // Inicjuj flagę dla wystąpienia zera
                            let zeroWylosowane = false;
                            // Losowy indeks, w którym pojawi się zero
                            const zeroIndex = Math.floor(Math.random() * (uniqueMatchingLessons.length / 3));

                            let indexDiv = 0;
                            // Wyświetl fiszki dla każdej znalezionej pary lekcji
                            let startIndex = 0; // Zainicjuj startIndex poza pętlą

                            for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
                                                                indexDiv++;
    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
    $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
    $container.attr('data-lesson', i + 1);

    // Dodajemy nowy div do ciała dokumentu
    $('body').append($container);
}
                                const lessonId1 = uniqueMatchingLessons[i];
                                const lessonId2 = uniqueMatchingLessons[i + 1];
                                const lessonId3 = uniqueMatchingLessons[i + 2];
                                let losowyIndex;

                                // Sprawdź, czy zero nie zostało jeszcze wylosowane i czy obecny indeks jest równy zeroIndex
                                if (!zeroWylosowane && i / 3 === zeroIndex) {
                                    losowyIndex = 0;
                                    zeroWylosowane = true;
                                } else {
                                    // Losuj losowy indeks z zakresu od 1 do długości / 3 - 1
                                    losowyIndex = Math.floor(Math.random() * (uniqueMatchingLessons.length / 3 - 1)) + 1;
                                }

                                const newIndex = losowyIndex;

                                // Tworzenie obiektu reprezentującego lekcję
                                const lessonObject = {
                                    lessonId1: lessonId1,
                                    lessonId2: lessonId2,
                                    lessonId3: lessonId3,
                                    newIndex: newIndex
                                            // Tutaj możesz dodać więcej danych, jeśli są potrzebne
                                            // np. sentence1, sentence2 itp.
                                };
                                // Dodawanie obiektu do tablicy lekcji
                                lessonsArray.push(lessonObject);


                                // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                console.log('hej556', losowyIndex);
                                console.log('hej40', startIndex); // Wyświetl wartość startIndex
                                showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);

                            }
                            console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);

                        }
                    }

                    if (czas === 'zdania') {
                        // Wyświetl pojedyncze zdania dla znalezionych lekcji
                        uniqueMatchingLessons.forEach(lessonId => {
                            showCombinedSentenceForLesson2(lessonId, fiszki);
                        });
                    }

                    // Ustaw wartość globalCategory
                    globalCategory = category;

                    // Aktualizuj atrybut href linku z użyciem JavaScript
                    var link = document.getElementById('linkDoStrony');
                    link.href = 'demo5.html?category=' + encodeURIComponent(globalCategory);
                }
function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray) {

    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                                    function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                                        return matchingFiszka ? matchingFiszka.srcWord : null;
                                    }
        const container = document.createElement('div');

                        const sentenceDiv = document.createElement('div');
                        sentenceDiv.classList.add('sentence');
                        sentenceDiv.innerHTML = `${sentence1}<br> ${sentence2}<br> ${sentence3}`;
                        sentenceDiv.style.position = 'absolute'; // Ustawienie pozycji na absolute
                        sentenceDiv.style.fontSize = '18px'; // Ustawienie rozmiaru czcionki na 12 pikseli
                        sentenceDiv.style.bottom = '0'; // Przyleganie do dolnej krawędzi kontenera
                        sentenceDiv.style.textAlign = 'center'; // Wyśrodkowanie tekstu w poziomie

// Ustawienie z-index dla sentenceDiv większego niż z-index dla vidDiv
                        sentenceDiv.style.zIndex = '1';
                        container.appendChild(sentenceDiv);

                        // Pobierz pierwszy element .image-container
                        const firstImageContainer = document.querySelector('.image-container');
                        console.log('hej');

                        const srcWords = [srcWord1, srcWord2, srcWord3];
                        tablica10.push(srcWords);
                        console.log('hej6', tablica10);
                        function addVideo(index) {

                            console.log('hej78', index);

                            const $vidDiv = $('<div>').addClass('background-video');

// Utwórz element <video> i ustaw atrybuty
                            const $videoElement = $('<video>').attr({
                                'autoplay': true, // Automatyczne odtwarzanie wideo
                                'muted': true, // Wyciszenie dźwięku wideo
                                'loop': true      // Zapętlenie wideo
                            });

// Utwórz element <source> dla wideo i ustaw atrybuty
                            const $sourceElement = $('<source>').attr({
                                'src': srcWord, // Poprawne użycie interpolacji
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
                            // Obsługa zdarzenia timeupdate
                            $videoElement.on('timeupdate', function () {
                                console.log('hej77', index);
                                // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                if (!currentIndexValue.includes(index)) {
                                    // Dodaj index do tablicy currentIndex
                                    currentIndexValue.push(index);
                                    console.log('hej70', currentIndexValue);
                                    // Wywołaj funkcję addBackgroundToText tylko raz
                                    if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1) {
                                        addBackgroundToText(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, true);
                                        addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                        addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                    }
                                    if (currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                        addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                        addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                    }
                                    if (currentIndexValue[0] === 2 || currentIndexValue[0] === 3) {
                                        addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                    }
                                }

                                // Sprawdź, czy wideo zostało zakończone
                                if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                    console.log('Wideo zakończone, uruchamiam następne.');

                                    // Odtwórz następne wideo po zakończeniu poprzedniego
                                    addVideo(index + 1);
                                }
                            });

                            // Dodaj div z wideo do tła kontenera
                            $vidDiv.appendTo(container);

                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                        }
                        
                        // Wstaw .image-container3 przed pierwszym .image-container
                        firstImageContainer.parentNode.insertBefore(container, firstImageContainer);
                    }

                    // Deklaracja tablicy, która będzie zawierać wszystkie tablice
                }