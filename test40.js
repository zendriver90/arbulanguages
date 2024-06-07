flashcardContainer.querySelectorAll('.charakter-button').forEach(button => {
                        button.addEventListener('click', function () {
                            // Usuń zieloną ramkę z poprzednio zaznaczonego przycisku charakteru
                            var currentlySelectedCharakter = flashcardContainer.querySelector('.zaznaczony-charakter');
                            if (currentlySelectedCharakter) {
                                currentlySelectedCharakter.classList.remove('zaznaczony-charakter');
                            }
                            // Dodaj zieloną ramkę do aktualnie klikniętego przycisku charakteru
                            button.classList.add('zaznaczony-charakter');
                        });
                    });
                    przekazArgument('osoby');
                    console.log("wykonuje sie 12");
                }

                var czasv2;
// Definicja zmiennej globalnej globalCategory
                let globalCategory = '';

// Definicja zmiennej matchingIndexes
                let matchingIndexes = [];

// Funkcja przekazująca argument
                function przekazArgument(category) {
                    // Przypisz wartość do zmiennej globalnej
                    globalCategory = category;

                    // Wywołaj funkcję wybierzCharakter
                    wybierzCharakter();
                }

// Funkcja wybierająca charakter
                function wybierzCharakter(czas) {
                    if (!czas) {
                        czas = 'fiszki';
                    }
                    // Aktualizuj matchingIndexes na podstawie nowej kategorii
                    matchingIndexes = findXForMatchingFiszka(globalCategory, fiszki);

                    // Wyświetl na konsoli zaktualizowane matchingIndexes
                    console.log("Zaktualizowane matchingIndexes:", matchingIndexes);
                    wybierzRodzaj(globalCategory, czas, matchingIndexes);
                    console.log("wykonuje sie");
                    czasv2 = czas;
                    console.log('hej5', czas);
                }

// Funkcja znajdująca indeksy dla pasujących "fiszek"
                function findXForMatchingFiszka(category, fiszki) {
                    const matchingIndexes = [];
                    // Iteruj przez tablicę fiszki
                    for (let i = 0; i < fiszki.length; i++) {
                        // Sprawdzamy, czy category2 w fiszce zawiera podaną kategorię
                        if (fiszki[i].category2.includes(category)) {
                            // Jeśli warunek jest spełniony, dodajemy indeks "fiszki" do tablicy
                            matchingIndexes.push(i + 1);
                            console.log('hej7', matchingIndexes);
                        }
                    }
                    // Zwracamy tablicę indeksów pasujących "fiszek"
                    return matchingIndexes;
                }

// Przykładowe użycie:
// Ustalanie kategorii na podstawie globalCategory
                const categoryToFind = (globalCategory === 'osoby') ? 'osoby+czas' : 'osoby';
                if (globalCategory === 'osoby+czas') {
                    const categoryToFind = (globalCategory === 'osoby+czas') ? 'osoby' : 'osoby+czas';
                }
// Wywołanie funkcji findXForMatchingFiszka() dla odpowiedniej kategorii
                matchingIndexes = findXForMatchingFiszka(categoryToFind, fiszki);

// Wyświetlenie wyniku
                console.log("Matching indexes:", matchingIndexes);
                function wybierzRodzaj(category, czas, matchingIndexes) {
                                        const lessonsArray = [];
                    console.log('hej45', lessonsArray);
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

                    // Usuń załadowane kontenery o klasie 'image-container3'
                    const loadedContainers = document.querySelectorAll('.image-container3');
                    loadedContainers.forEach(container => {
                        container.parentNode.removeChild(container);
                    });
                    console.log('hejxxxxxxxxxxxxxxxxx');


                    if (czas === 'fiszki') {
                        console.log('Warunek czas === "fiszki" jest spełniony');
                        if (uniqueMatchingLessons.length > 1) {
        // Inicjuj flagę dla wystąpienia zera
        let zeroWylosowane = false;
        // Losowy indeks, w którym pojawi się zero
        const zeroIndex = Math.floor(Math.random() * (uniqueMatchingLessons.length / 3));

                            // Wyświetl fiszki dla każdej znalezionej pary lekcji
                            let startIndex = 0; // Zainicjuj startIndex poza pętlą
                            for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
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
                                startIndex = [i][0] / 3;
                                console.log('hej556', losowyIndex);
                                console.log('hej40', startIndex); // Wyświetl wartość startIndex
                                showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex);
                            }
                        }
                    }
console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
                                lessonsArray.forEach(lesson => {
    // Sprawdź czy newIndex ma wartość 0
    if (lesson.newIndex === 0) {
        // Wyświetl dane tego elementu
        console.log('Lekcja z newIndex === 0:', lesson);
        // Możesz także wywołać tutaj inną funkcję lub operacje związane z tym elementem
    }
});
    lessonsArray.forEach((lesson, index) => {
                if (index >= lessonsArray.length - 4 && lesson.newIndex === 0) {
            console.log('Indeks2 ostatnich 4 wartości z newIndex === 0:', index, lessonsArray);
            console.log("wykonuje się 2");
        }
    const lastIndex = lessonsArray.length;
    if (index >= lastIndex - 3 && index < lastIndex && lesson.newIndex === 0) {
        console.log('Indeks 4 elementów przed ostatnimi 4 elementami:', index, lessonsArray);
        wybierzRodzaj(category, czas, matchingIndexes, i);
        console.log("wykonuje się 3");
    }
    });
    
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
// Pobierz parametr z adresu URL
                const urlParams = new URLSearchParams(window.location.search);
                const category = urlParams.get('category');


                function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                    const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                    return matchingFiszka ? matchingFiszka.srcWord : null;
                }


function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, tablica) {
                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                        console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);
                        const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                        const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                        const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                        function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                            return matchingFiszka ? matchingFiszka.srcWord : null;
                        }
                        let sentence1 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, aktualny) {
                        }

                        let sentence2 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, aktualny) {
                        }

                        let sentence3 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, aktualny) {
                        }

                        const container = document.createElement('div');
                        container.classList.add('image-container3');
                        container.style.position = 'relative'; // Ustawienie pozycji na relative
// Tworzenie i dodawanie wartości do tablicy

                        const srcWords = [srcWord1, srcWord2, srcWord3];
                        function removePreviousVideo() {
                            const previousVideo = container.querySelector('video');
                            if (previousVideo) {
                                previousVideo.parentNode.removeChild(previousVideo);
                            }
                        }
                        // Tablica do przechowywania elementów image-container3
                        // Deklaracja tablicy globalnie
// Funkcja do tworzenia i dodawania wideo do kontenera
                        if (newIndex === 0) {
                            function addVideo(index) {
                                setTimeout(function() {
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length) {
                                    przekazArgument('osoby');
                                    console.log("wykonuje się");
                                }
                                }, 3000); // 3000 milisekund (3 sekundy)
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                // Utwórz div dla wideo
                                const vidDiv = document.createElement('div');
                                vidDiv.classList.add('background-video');

                                // Utwórz element <video>
                                const videoElement = document.createElement('video');
                                videoElement.setAttribute('autoplay', ''); // Automatyczne odtwarzanie wideo
                                videoElement.muted = true; // Wyciszenie dźwięku wideo
                                videoElement.setAttribute('loop', ''); // Zapętlenie wideo

                                // Utwórz element <source> dla wideo
                                const sourceElement = document.createElement('source');
                                sourceElement.setAttribute('src', `${srcWords[index]}`); // Poprawne użycie interpolacji
                                sourceElement.setAttribute('type', 'video/mp4'); // Typ pliku wideo

                                // Dodaj element <source> do elementu <video>
                                videoElement.appendChild(sourceElement);

                                // Obsługa błędu ładowania wideo
                                videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Obsługa zdarzenia timeupdate
                                videoElement.ontimeupdate = function () {

                                    // Sprawdź, czy wideo zostało zakończone
                                    if (videoElement.duration - videoElement.currentTime < 0.5) {
                                        console.log('Wideo zakończone, uruchamiam następne.');

                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo(index + 1, currentIndexValue);
                                    }
                                };

                                // Dodaj element <video> do diva z wideo
                                vidDiv.appendChild(videoElement);

                                // Dodaj div z wideo do tła kontenera
                                container.appendChild(vidDiv);

                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener

                            }
                        } else {
                            function addVideo(index) {
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length) {
                                    // Jeśli tak, ustaw index na początkowy indeks (0)
                                    index = 0;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                // Utwórz div dla wideo
                                const vidDiv = document.createElement('div');
                                vidDiv.classList.add('background-video');

                                // Utwórz element <video>
                                const videoElement = document.createElement('video');
                                // Zatrzymaj odtwarzanie wideo
                                if (videoElement && !videoElement.paused) {
                                    videoElement.pause();
                                }
                                videoElement.muted = true; // Wyciszenie dźwięku wideo
                                videoElement.setAttribute('loop', ''); // Zapętlenie wideo

                                // Utwórz element <source> dla wideo
                                const sourceElement = document.createElement('source');
                                sourceElement.setAttribute('src', `${srcWords[index]}`); // Poprawne użycie interpolacji
                                sourceElement.setAttribute('type', 'video/mp4'); // Typ pliku wideo

                                // Dodaj element <source> do elementu <video>
                                videoElement.appendChild(sourceElement);

                                // Obsługa błędu ładowania wideo
                                videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Obsługa zdarzenia timeupdate
                                videoElement.ontimeupdate = function () {
                                    // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex

                                    // Sprawdź, czy wideo zostało zakończone
                                    if (videoElement.duration - videoElement.currentTime < 0.5) {
                                        console.log('Wideo zakończone, uruchamiam następne.');

                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo(index + 1, currentIndexValue);
                                    }
                                };

                                // Dodaj element <video> do diva z wideo
                                vidDiv.appendChild(videoElement);

                                // Dodaj div z wideo do tła kontenera
                                container.appendChild(vidDiv);

                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener

                            }

                            // Zamiast ręcznie tworzyć tablicę imageContainers, możemy wykorzystać metodę document.querySelectorAll()
                        }
                        addVideo(0);