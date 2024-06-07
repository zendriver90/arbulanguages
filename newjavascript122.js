                           const lessonsArray = [];
                            console.log('hej45', lessonsArray);
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

                    // Usuń załadowane kontenery o klasie 'image-container3'
                    const loadedContainers = document.querySelectorAll('.image-container3');
                    loadedContainers.forEach(container => {
                        container.parentNode.removeChild(container);
                    });

const lessonsArray = [];
console.log('hej45', lessonsArray);
if (czas === 'fiszki') {
    if (uniqueMatchingLessons.length > 1) {

                            // Wyświetl fiszki dla każdej znalezionej pary lekcji
                            let startIndex = 0; // Zainicjuj startIndex poza pętlą
                            for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
                                const lessonId1 = uniqueMatchingLessons[i];
                                const lessonId2 = uniqueMatchingLessons[i + 1];
                                const lessonId3 = uniqueMatchingLessons[i + 2];
                                                                        const losowyIndex = Math.floor(Math.random() * uniqueMatchingLessons.length / 3);
            let newIndex = losowyIndex;
            let IndexNew = [];
            IndexNew.push(newIndex);
            console.log('hej43', newIndex);
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
                            console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
lessonsArray.forEach(lesson => {
    // Sprawdź czy newIndex ma wartość 0
    if (lesson.newIndex === 0) {
        // Wyświetl dane tego elementu
        console.log('Lekcja z newIndex === 0:', lesson);

        // Pobierz indeks lekcji
        const lessonIndex = lesson.lessonId1;

        // Znajdź kontener dla danej lekcji
        const containerToRemove = document.querySelector(`.image-container3[data-lesson="${lessonIndex}"]`);
        console.log('hej99', containerToRemove);
                                addVideo(0);
                                console.log("uruchomione");
        if (containerToRemove) {
            console.log('Usuwanie kontenera dla lekcji:', lessonIndex);
            containerToRemove.parentNode.removeChild(containerToRemove);
        } else {
            console.log('Nie znaleziono kontenera do usunięcia dla lekcji:', lessonIndex);
        }

        // Możesz także wywołać tutaj inne operacje związane z tym elementem
    }
});
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
