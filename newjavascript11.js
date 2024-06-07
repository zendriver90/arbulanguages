if (czas === 'fiszki') {
    const sentence1 = '';
    const sentence2 = '';
    if (uniqueMatchingLessons.length > 1) {
        // Wyświetl fiszki dla każdej znalezionej pary lekcji
        let startIndex = 0; // Zainicjuj startIndex poza pętlą
        for (let i = 0; i < uniqueMatchingLessons.length; i += 2) {
            const lessonId1 = uniqueMatchingLessons[i][0]; // Pobierz pierwszą wartość z pary lekcji
            const lessonId2 = uniqueMatchingLessons[i + 1][0]; // Pobierz pierwszą wartość z pary lekcji
            // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
            startIndex = i * 6;
            console.log('hej40', startIndex); // Wyświetl wartość startIndex
            
            // Dodaj dodatkowe logi, aby zbadać wartości lessonId1 i lessonId2
            console.log('lessonId1:', lessonId1);
            console.log('lessonId2:', lessonId2);

            const srcWord1 = matchingLessons.get(lessonId1);
            const srcWord2 = matchingLessons.get(lessonId2);
            // Dodaj logi, aby zbadać pobrane wartości srcWord1 i srcWord2
            console.log('111', srcWord1);
            console.log('222', srcWord2);
            
            // Wywołaj funkcję showCombinedSentenceForLesson
            showCombinedSentenceForLesson(lessonId1, lessonId2, fiszki, matchingIndexes, startIndex, srcWord1, srcWord2);
        }
    }
}

function wybierzRodzaj(category, czas) {
    category = category || globalCategory;
    czasv2 = czas;
    console.log("Wybrany rodzaj słownictwa: " + category);
    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut

    // Zamiast Set użyj Map do przechowywania par numerów lekcji i odpowiadających im srcWord
    const matchingLessons = new Map();

    // Iteracja przez fiszki
    for (const fiszka of fiszki) {
        console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
        // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
        const matchingFiszka = fiszka.category2.includes(category);

        // Jeśli znaleziono pasującą fiszkę, dodaj numer lekcji i srcWord[0] do mapy matchingLessons
        if (matchingFiszka) {
            console.log(`Znaleziono fiszkę z kategorią "${category}" w lekcji ${JSON.stringify(fiszka)}`);
            if (fiszka.srcWord && fiszka.srcWord.length > 0) {
                matchingLessons.set(fiszka.id[1], fiszka.srcWord[0]);
            } else {
                console.log(`Brak srcWord dla fiszki: ${JSON.stringify(fiszka)}`);
            }
            console.log('hej8', matchingLessons);
        }
    }

    // Konwertuj mapę z powrotem na tablicę, jeśli to konieczne
    const uniqueMatchingLessons = Array.from(matchingLessons);

    // Usuń załadowane kontenery o klasie 'image-container3'
    const loadedContainers = document.querySelectorAll('.image-container3');
    loadedContainers.forEach(container => {
        container.parentNode.removeChild(container);
    });

if (czas === 'fiszki') {
    const sentence1 = '';
    const sentence2 = '';
    if (uniqueMatchingLessons.length > 1) {
        // Wyświetl fiszki dla każdej znalezionej pary lekcji
        let startIndex = 0; // Zainicjuj startIndex poza pętlą
        for (let i = 0; i < uniqueMatchingLessons.length; i += 2) {
            const lessonId1 = uniqueMatchingLessons[i][0]; // Pobierz pierwszą wartość z pary lekcji
            const lessonId2 = uniqueMatchingLessons[i + 1][0]; // Pobierz pierwszą wartość z pary lekcji
            // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
            startIndex = i * 6;
            console.log('hej40', startIndex); // Wyświetl wartość startIndex
            
            // Dodaj dodatkowe logi, aby zbadać wartości lessonId1 i lessonId2
            console.log('lessonId1:', lessonId1);
            console.log('lessonId2:', lessonId2);

            const srcWord1 = matchingLessons.get(lessonId1);
            const srcWord2 = matchingLessons.get(lessonId2);
            // Dodaj logi, aby zbadać pobrane wartości srcWord1 i srcWord2
            console.log('111', srcWord1);
            console.log('222', srcWord2);
            
            // Wywołaj funkcję showCombinedSentenceForLesson
            showCombinedSentenceForLesson(lessonId1, lessonId2, fiszki, matchingIndexes, startIndex, srcWord1, srcWord2);
        }
    }
}

    if (czas === 'zdania') {
        // Wyświetl pojedyncze zdania dla znalezionych lekcji
        uniqueMatchingLessons.forEach(lessonId => {
            const srcWord = matchingLessons.get(lessonId);
            showCombinedSentenceForLesson2(lessonId, fiszki, srcWord);
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

                wybierzRodzaj(category);
                function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, fiszki, matchingIndexes, startIndex, srcWord1, srcWord2) {
                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
console.log('1', matchingFiszki1);
console.log('2', matchingFiszki2);
                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0) {
                        console.log(`Fiszki dla lekcji ${lessonIdToShow1} i ${lessonIdToShow2}:`);

                        const srcWord = fiszki[0].srcWord[0];
                        console.log('hej50', srcWord);
                        // Budowanie zdania dla pierwszego zestawu fiszek
                        let sentence1 = "";
                        for (let i = 0; i < matchingFiszki1.length; i++) {
                            const fiszka = matchingFiszki1[i];
                            let sentencePart = fiszka.sentence[i % 3]; // Domyślnie używaj zdania bez zmian

                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                            if (matchingIndexes.includes(i + 1 + startIndex)) {
                                sentencePart = `<span style="color: yellow;">${fiszka.sentence[i % 3]}xx</span>`;
                                console.log(`Zaznaczono słowo ${i + 1 + startIndex} w pierwszym zestawie fiszek.`);
                            }

                            sentence1 += sentencePart + " ";
                        }

                        // Budowanie zdania dla drugiego zestawu fiszek
                        let sentence2 = "";
                        for (let j = 0; j < matchingFiszki2.length; j++) {
                            const fiszka = matchingFiszki2[j];
                            let sentencePart = fiszka.sentence[j % 3]; // Domyślnie używaj zdania bez zmian

                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                            if (matchingIndexes.includes(matchingFiszki1.length + j + 1 + startIndex)) {
                                sentencePart = `<span style="color: yellow;">${fiszka.sentence[j % 3]}zz</span>`;
                                console.log(`Zaznaczono słowo ${matchingFiszki1.length + j + 1 + startIndex} w drugim zestawie fiszek.`);
                            }

                            sentence2 += sentencePart + " ";
                        }

        // Utwórz kontener i dodaj zdanie do niego
        const container = document.createElement('div');
        container.classList.add('image-container3');

// Utwórz element <video>
const videoElement = document.createElement('video');
videoElement.setAttribute('autoplay', ''); // Automatyczne odtwarzanie wideo
videoElement.setAttribute('muted', ''); // Wyciszenie dźwięku wideo
videoElement.setAttribute('loop', ''); // Zapętlenie wideo

// Utwórz element <source> dla wideo
const sourceElement = document.createElement('source');
sourceElement.setAttribute('src', `${srcWord1}`, `${srcWord2}`); // Poprawne użycie interpolacji
sourceElement.setAttribute('type', 'video/mp4'); // Typ pliku wideo

// Dodaj element <source> do elementu <video>
videoElement.appendChild(sourceElement);

// Obsługa błędu ładowania wideo
videoElement.onerror = function() {
    console.error('Nie można załadować pliku wideo.');
};

// Dodaj element <video> do kontenera
container.appendChild(videoElement);

// Utwórz div zawierający zdanie
const sentenceDiv = document.createElement('div');
sentenceDiv.classList.add('sentence');
sentenceDiv.innerHTML = `${sentence1} ${sentence2}`;

// Dodaj div z zdaniem do kontenera
container.appendChild(sentenceDiv);
                        // Pobierz pierwszy element .image-container
                        const firstImageContainer = document.querySelector('.image-container');

                        // Wstaw .image-container3 przed pierwszym .image-container
                        firstImageContainer.parentNode.insertBefore(container, firstImageContainer);
                    } else {
                        console.log(`Brak fiszek dla lekcji ${lessonIdToShow1} lub ${lessonIdToShow2}.`);
                    }
                }
                
                
        // Utwórz kontener i dodaj zdanie do niego
        const container = document.createElement('div');
        container.classList.add('image-container3');

// Utwórz element <video>
const videoElement = document.createElement('video');
videoElement.setAttribute('autoplay', ''); // Automatyczne odtwarzanie wideo
videoElement.setAttribute('muted', ''); // Wyciszenie dźwięku wideo
videoElement.setAttribute('loop', ''); // Zapętlenie wideo

// Utwórz element <source> dla wideo
const sourceElement = document.createElement('source');
sourceElement.setAttribute('src', `${srcWord}`); // Poprawne użycie interpolacji
sourceElement.setAttribute('type', 'video/mp4'); // Typ pliku wideo

// Dodaj element <source> do elementu <video>
videoElement.appendChild(sourceElement);

// Obsługa błędu ładowania wideo
videoElement.onerror = function() {
    console.error('Nie można załadować pliku wideo.');
};

// Dodaj element <video> do kontenera
container.appendChild(videoElement);

// Utwórz div zawierający zdanie
const sentenceDiv = document.createElement('div');
sentenceDiv.classList.add('sentence');
sentenceDiv.innerHTML = `${sentence1} ${sentence2}`;

// Dodaj div z zdaniem do kontenera
container.appendChild(sentenceDiv);

                function wybierzRodzaj(category, czas) {
                    category = category || globalCategory;
                    czasv2 = czas;
                    console.log("Wybrany rodzaj słownictwa: " + category);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut

                    const matchingLessons = new Set(); // Użyj obiektu Set do przechowywania unikalnych wartości

                    // Iteracja przez fiszki
                    for (const fiszka of fiszki) {
                        console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
                        // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                        const matchingFiszka = fiszka.category2.includes(category);

                        // Jeśli znaleziono pasującą fiszkę, dodaj numer lekcji do zestawu matchingLessons
                        if (matchingFiszka) {
                            console.log(`Znaleziono fiszkę z kategorią "${category}" w lekcji ${JSON.stringify(fiszka)}`);
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

if (czas === 'fiszki') {
    const sentence1 = '';
    const sentence2 = '';
    if (uniqueMatchingLessons.length > 1) {
        // Wyświetl fiszki dla każdej znalezionej pary lekcji
        let startIndex = 0; // Zainicjuj startIndex poza pętlą
        for (let i = 0; i < uniqueMatchingLessons.length; i += 2) {
            const lessonId1 = uniqueMatchingLessons[i];
            const lessonId2 = uniqueMatchingLessons[i + 1];
            // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
            startIndex = i * 6;
            console.log('hej40', startIndex); // Wyświetl wartość startIndex
            showCombinedSentenceForLesson(lessonId1, lessonId2, fiszki, matchingIndexes, startIndex);
        }
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

// Pobierz parametr z adresu URL
                const urlParams = new URLSearchParams(window.location.search);
                const category = urlParams.get('category');

                wybierzRodzaj(category);
                
                function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
    const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
    return matchingFiszka ? matchingFiszka.srcWord : null;
}

                
                function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, fiszki, matchingIndexes, startIndex) {
                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
console.log('1', matchingFiszki1);
console.log('2', matchingFiszki2);
                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0) {
                        console.log(`Fiszki dla lekcji ${lessonIdToShow1} i ${lessonIdToShow2}:`);
        const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
        const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
        console.log('Source word for lesson 1:', srcWord1);
        console.log('Source word for lesson 2:', srcWord2);
function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
    const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
    return matchingFiszka ? matchingFiszka.srcWord : null;
}
                        const srcWord = fiszki[0].srcWord[0];
                        console.log('hej50', srcWord);
                        // Budowanie zdania dla pierwszego zestawu fiszek
                        let sentence1 = "";
                        for (let i = 0; i < matchingFiszki1.length; i++) {
                            const fiszka = matchingFiszki1[i];
                            let sentencePart = fiszka.sentence[i % 3]; // Domyślnie używaj zdania bez zmian

                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                            if (matchingIndexes.includes(i + 1 + startIndex)) {
                                sentencePart = `<span style="color: yellow;">${fiszka.sentence[i % 3]}</span>`;
                                console.log(`Zaznaczono słowo ${i + 1 + startIndex} w pierwszym zestawie fiszek.`);
                            }

                            sentence1 += sentencePart + " ";
                        }

                        // Budowanie zdania dla drugiego zestawu fiszek
                        let sentence2 = "";
                        for (let j = 0; j < matchingFiszki2.length; j++) {
                            const fiszka = matchingFiszki2[j];
                            let sentencePart = fiszka.sentence[j % 3]; // Domyślnie używaj zdania bez zmian

                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                            if (matchingIndexes.includes(matchingFiszki1.length + j + 1 + startIndex)) {
                                sentencePart = `<span style="color: yellow;">${fiszka.sentence[j % 3]}</span>`;
                                console.log(`Zaznaczono słowo ${matchingFiszki1.length + j + 1 + startIndex} w drugim zestawie fiszek.`);
                            }

                            sentence2 += sentencePart + " ";
                        }

// Utwórz kontener i dodaj zdanie do niego
const container = document.createElement('div');
container.classList.add('image-container3');
container.style.position = 'relative'; // Ustawienie pozycji na relative

// Utwórz div dla wideo
const vidDiv = document.createElement('div');
vidDiv.classList.add('background-video');

// Utwórz element <video>
const videoElement = document.createElement('video');
videoElement.setAttribute('autoplay', ''); // Automatyczne odtwarzanie wideo
videoElement.setAttribute('muted', ''); // Wyciszenie dźwięku wideo
videoElement.setAttribute('loop', ''); // Zapętlenie wideo

// Utwórz element <source> dla wideo
const sourceElement = document.createElement('source');
sourceElement.setAttribute('src', `${srcWord1}`); // Poprawne użycie interpolacji
sourceElement.setAttribute('type', 'video/mp4'); // Typ pliku wideo

// Dodaj element <source> do elementu <video>
videoElement.appendChild(sourceElement);

// Obsługa błędu ładowania wideo
videoElement.onerror = function() {
    console.error('Nie można załadować pliku wideo.');
};

// Dodaj element <video> do diva z wideo
vidDiv.appendChild(videoElement);

// Dodaj div z wideo do tła kontenera
container.appendChild(vidDiv);

// Utwórz div zawierający zdanie
const sentenceDiv = document.createElement('div');
sentenceDiv.classList.add('sentence');
sentenceDiv.innerHTML = `${sentence1}<br> ${sentence2}`;
sentenceDiv.style.position = 'absolute'; // Ustawienie pozycji na absolute
sentenceDiv.style.fontSize = '18px'; // Ustawienie rozmiaru czcionki na 12 pikseli
sentenceDiv.style.bottom = '0'; // Przyleganie do dolnej krawędzi kontenera
sentenceDiv.style.textAlign = 'center'; // Wyśrodkowanie tekstu w poziomie

// Ustawienie z-index dla sentenceDiv większego niż z-index dla vidDiv
sentenceDiv.style.zIndex = '1';

// Dodaj div z zdaniem do kontenera
container.appendChild(sentenceDiv);
                        // Pobierz pierwszy element .image-container
                        const firstImageContainer = document.querySelector('.image-container');

                        // Wstaw .image-container3 przed pierwszym .image-container
                        firstImageContainer.parentNode.insertBefore(container, firstImageContainer);
                    } else {
                        console.log(`Brak fiszek dla lekcji ${lessonIdToShow1} lub ${lessonIdToShow2}.`);
                    }
                }