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
                    console.log('wykonuje się 6', matchingIndexes);
                    return matchingIndexes;
                }
function countCorrelationsForId0(fiszki) {
    const correlationsCount = [];

    fiszki.forEach(fiszka => {
        const id0 = fiszka.id[1];
        const id1 = fiszka.id[0];

        let found = false;
        for (let i = 0; i < correlationsCount.length; i++) {
            if (correlationsCount[i][0] === id0) {
                correlationsCount[i][1]++;
                found = true;
                break;
            }
        }

        if (!found) {
            correlationsCount.push([id0, 1]);
        }
    });

    return correlationsCount;
}

const correlationsCount = countCorrelationsForId0(fiszki);
console.log('hej12', correlationsCount);

                function wybierzRodzaj(category, czas, matchingIndexes) {
                    category = category || globalCategory;
                    czasv2 = czas;
                    console.log("Wybrany rodzaj słownictwa: " + category);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut
                    console.log('hej755', matchingIndexes); // Dodano logowanie matchingIndexes

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
                                if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                    const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                    if (containerToRemove.length > 0) {
                                        containerToRemove.remove();
                                    }
                                }

                                // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                console.log('hej556', lessonsArray);
                                console.log('hej40', startIndex); // Wyświetl wartość startIndex
                                console.log('hej77', tablica10);
                                console.log('wykonuje się 7');
                                if (tablica10.length <= 3 || tablica10.length === 0) {
                                    console.log('wykonuje się 8');
                                    console.log('hej18', tablica10);
                                    showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);

                                } else if ((newIndex === 0 && tablica10.length !== 0) || (tablica10.length <= 3 && tablica10.length !== 0)) {
                                    console.log('wykonuje się 10');
                                    console.log('hej22', tablica10);
                                    showCombinedSentenceForLesson3(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                                }
                            }
                            console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
// Sprawdź, czy dodano odpowiednią liczbę divów
                            const numberOfContainers = $('.image-container3').length;
                            console.log('Liczba dodanych divów:', numberOfContainers);
                        }
                    }
                    






console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                            // Dodanie treści do diva wraz z przyciskiem
                            $sentenceDiv.html('<button class="left-button first-button">+</button><span class="sentence1" style="position:relative;">' + sentence1 + '</span><br>' + '<button class="left-buttonb second-button">+</button><span class="sentence2" style="position:relative;">' + sentence2 + '</span><br>' + '<button class="left-buttonbb third-button">+</button><span class="sentence3" style="position:relative;">' + sentence3 + '</span><br>');


$(document).ready(function () {
                                let buttonClicked = false;
                                let buttonBClicked = false;
                                let buttonCClicked = false;
                                // Obsługa kliknięcia przycisku
                                $sentenceDiv.on('click', '.left-button', function () {
                                    console.log('Kliknięto przycisk');
                                    // Sprawdzamy, czy sentence1 zostało znalezione
                                    let $sentence1 = $sentenceDiv.find('.sentence1');
                                    let $sentence1b = $sentenceDiv.find('.sentence1b');
                                    let $sentence2 = $sentenceDiv.find('.sentence2');
                                    let $sentence3 = $sentenceDiv.find('.sentence3');

                                    if ($sentence1.length > 0) {
                                        console.log('sentence1 zostało znalezione:', $sentence1.text());
                                        if (buttonCClicked) {
                                            // Pobieramy aktualną wartość top
                                            let currentTop2 = parseInt($sentence2.css('top'));
                                            let currentTop3 = parseInt($sentence3.css('top'));
                                            let currentTop = Math.min(currentTop2, currentTop3);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop + 30;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence2.css('top', newTop);
                                            $sentence3.css('top', newTop);

                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let $thirdButton = $sentenceDiv.find('.third-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 0);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 + 30);
                                            let currentButtonTop3 = parseInt($thirdButton.css('top'));
                                            $thirdButton.css('top', currentButtonTop3 + 30);
                                            buttonClicked = true;
                                        } else if (buttonBClicked) {
                                            // Pobieramy aktualną wartość top
                                            let currentTop2 = parseInt($sentence2.css('top'));
                                            let currentTop = Math.min(currentTop2);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop + 30;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence2.css('top', newTop);
                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let $thirdButton = $sentenceDiv.find('.third-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 0);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 + 30);
                                            let currentButtonTop3 = parseInt($thirdButton.css('top'));
                                            $thirdButton.css('top', currentButtonTop3 + 30);
                                            buttonClicked = true;
                                            buttonBClicked = true;
                                        } else {
// Pokazujemy zdanie .sentence1b
$sentence1b.css('display', 'block');

// Przesuwamy sentence1b na nową linię z marginesem górnym -15px
$sentence1b.css({
    'margin-top': '-15px',
                        'top': + 15 + 'px',
    'position': 'relative'
});
                                            // Jeśli przycisk jest pierwszy, przesuwamy go również
                                            buttonClicked = true;
                                            console.log('Transformacja stosowana na sentence1:', $sentence1.css('top'));
                                        }
                                    }
                                });

                                $sentenceDiv.on('click', '.left-buttonb', function () {
                                    console.log('Kliknięto przycisk');
// Pobieramy wszystkie zdania
                                    let $sentence1 = $sentenceDiv.find('.sentence1');
                                    let $sentence2 = $sentenceDiv.find('.sentence2');
                                    let $sentence3 = $sentenceDiv.find('.sentence3');

                                    if ($sentence1.length > 0 && $sentence2.length > 0) {
                                        console.log('sentence1b zostało znalezione:', $sentence2.text());
                                        if (buttonClicked && !buttonCClicked && !buttonBClicked) {
                                            // Pobieramy aktualną wartość top dla pierwszego i drugiego zdania
                                            let currentTop1 = parseInt($sentence1.css('top'));
                                            let currentTop2 = parseInt($sentence2.css('top'));
                                            let currentTop = Math.min(currentTop1, currentTop2);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop - 0;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence1.css('top', newTop);
                                            $sentence2.css('top', newTop);

                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 0);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 - 30);
                                            buttonBClicked = true;
                                            console.log('Transformacja stosowana na zdaniach:', $sentence1.first().css('top'));

                                        } else if (buttonCClicked && !buttonClicked && !buttonBClicked) {
                                            // Pobieramy aktualną wartość top dla pierwszego i drugiego zdania
                                            let currentTop3 = parseInt($sentence3.css('top'));
                                            let currentTop = Math.min(currentTop3);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop + 30;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence3.css('top', newTop);

                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let $thirdButton = $sentenceDiv.find('.third-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 0);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 - 0);
                                            let currentButtonTop3 = parseInt($thirdButton.css('top'));
                                            $thirdButton.css('top', currentButtonTop3 + 30);
                                            buttonBClicked = true;
                                            console.log('Transformacja stosowana na zdaniach:', $sentence1.first().css('top'));
                                        } else if (buttonClicked && buttonBClicked && buttonCClicked) {
                                            // Pobieramy aktualną wartość top dla pierwszego i drugiego zdania
                                            let currentTop3 = parseInt($sentence3.css('top'));
                                            let currentTop = Math.min(currentTop3);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop + 30;

                                            // Aktualizujemy pozycję dla obu zdań

                                            $sentence3.css('top', newTop);

                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let $thirdButton = $sentenceDiv.find('.third-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 0);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 - 0);
                                            let currentButtonTop3 = parseInt($thirdButton.css('top'));
                                            $thirdButton.css('top', currentButtonTop3 + 30);
                                            buttonCClicked = true;
                                            buttonClicked = true;
                                            buttonBClicked = true;
                                            console.log('działa');
                                            console.log('Transformacja stosowana na zdaniach:', $sentence1.first().css('top'));
                                        } else if (!buttonCClicked && !buttonBClicked && !buttonClicked) {
                                            // Pobieramy aktualną wartość top dla pierwszego i drugiego zdania
                                            let currentTop1 = parseInt($sentence1.css('top'));
                                            let currentTop2 = parseInt($sentence2.css('top'));
                                            let currentTop = Math.min(currentTop1, currentTop2);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop - 30;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence1.css('top', newTop);
                                            $sentence2.css('top', newTop);

                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 30);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 - 30);
                                            buttonBClicked = true;
                                        }
                                    }

                                });
                                $sentenceDiv.on('click', '.left-buttonbb', function () {
                                    console.log('Kliknięto przycisk');
// Pobieramy wszystkie zdania
                                    let $sentence1 = $sentenceDiv.find('.sentence1');
                                    let $sentence2 = $sentenceDiv.find('.sentence2');
                                    let $sentence3 = $sentenceDiv.find('.sentence3');
                                    if ($sentence1.length > 0 && $sentence2.length > 0 && $sentence3.length > 0) {
                                        console.log('sentence1b zostało znalezione:', $sentence2.text());
                                        if (buttonBClicked) {
                                            // Pobieramy aktualną wartość top dla pierwszego i drugiego zdania
                                            let currentTop1 = parseInt($sentence1.css('top'));
                                            let currentTop2 = parseInt($sentence2.css('top'));
                                            let currentTop3 = parseInt($sentence3.css('top'));
                                            let currentTop = Math.min(currentTop1, currentTop2, currentTop3);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop - 0;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence1.css('top', newTop);
                                            $sentence2.css('top', newTop);
                                            $sentence3.css('top', newTop);
                                            // Aktualizacja pozycji przycisku first-button
                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let $thirdButton = $sentenceDiv.find('.third-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 0);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 - 0);
                                            let currentButtonTop3 = parseInt($thirdButton.css('top'));
                                            $thirdButton.css('top', currentButtonTop3 - 30);
                                            buttonCClicked = true;
                                            buttonBClicked = true;
                                            buttonClicked = true;
                                            console.log('Transformacja stosowana na zdaniach:', $sentence1.first().css('top'));

                                        } else if (buttonClicked && buttonBClicked) {
                                            // Pobieramy aktualną wartość top dla pierwszego i drugiego zdania
                                            let currentTop1 = parseInt($sentence1.css('top'));
                                            let currentTop2 = parseInt($sentence2.css('top'));
                                            let currentTop3 = parseInt($sentence3.css('top'));
                                            let currentTop = Math.min(currentTop1, currentTop2, currentTop3);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop - 0;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence1.css('top', newTop);
                                            $sentence2.css('top', newTop);
                                            $sentence3.css('top', newTop);

                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let $thirdButton = $sentenceDiv.find('.third-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 0);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 - 30);
                                            let currentButtonTop3 = parseInt($thirdButton.css('top'));
                                            $thirdButton.css('top', currentButtonTop3 - 30);
                                            buttonClicked = true;
                                            buttonBClicked = true;
                                            buttonCClicked = true;
                                            console.log('Transformacja stosowana na zdaniach:', $sentence1.first().css('top'));
                                        } else if (!buttonCClicked) {
                                            // Pobieramy aktualną wartość top dla pierwszego i drugiego zdania
                                            let currentTop1 = parseInt($sentence1.css('top'));
                                            let currentTop2 = parseInt($sentence2.css('top'));
                                            let currentTop3 = parseInt($sentence3.css('top'));
                                            let currentTop = Math.min(currentTop1, currentTop2, currentTop3);

                                            // Dodajemy przesunięcie o 30 pikseli
                                            let newTop = currentTop - 30;

                                            // Aktualizujemy pozycję dla obu zdań
                                            $sentence1.css('top', newTop);
                                            $sentence2.css('top', newTop);
                                            $sentence3.css('top', newTop);

                                            // Aktualizacja pozycji przycisku first-button
                                            let $firstButton = $sentenceDiv.find('.first-button');
                                            let $secondButton = $sentenceDiv.find('.second-button');
                                            let $thirdButton = $sentenceDiv.find('.third-button');
                                            let currentButtonTop = parseInt($firstButton.css('top'));
                                            $firstButton.css('top', currentButtonTop - 30);
                                            let currentButtonTop2 = parseInt($secondButton.css('top'));
                                            $secondButton.css('top', currentButtonTop2 - 30);
                                            let currentButtonTop3 = parseInt($thirdButton.css('top'));
                                            $thirdButton.css('top', currentButtonTop3 - 30);
                                            buttonCClicked = true;
                                            buttonBClicked = true;
                                            buttonClicked = true;
                                            console.log('Transformacja stosowana na zdaniach:', $sentence1.first().css('top'));
                                        }
                                    }
                                });/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
                function wybierzRodzaj(category, czas, matchingIndexes) {
                    category = category || globalCategory;
                    czasv2 = czas;
                    console.log("Wybrany rodzaj słownictwa: " + category);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut
                    console.log('hej755', matchingIndexes); // Dodano logowanie matchingIndexes

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
                                if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                    const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                    if (containerToRemove.length > 0) {
                                        containerToRemove.remove();
                                    }
                                }

                                // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                console.log('hej556', losowyIndex);
                                console.log('hej40', startIndex); // Wyświetl wartość startIndex
                                console.log('hej77', tablica10);
                                console.log('wykonuje się 7');
                                if (tablica10.length <= 3 || tablica10.length === 0) {
                                    console.log('wykonuje się 8');
                                    console.log('hej18', tablica10);
                                    showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);

                                }

                function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray) {

                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);

                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                        const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                        const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                        const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);

                        function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                            return matchingFiszka ? matchingFiszka.srcWord : null;
                        }
                        console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);

let sentence1b = "";
let sentence1bb = "";
let sentence1bba = "";
                        function addBackgroundToText1b(matchingFiszki1, lessonIdToShow1, matchingIndexes, aktualny) {
                                                            $(document).ready(function () {
                            sentence1b = "";
                            sentence1bb = "";
                            sentence1bba = "";
                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                const fiszka = matchingFiszki1[i];
                                let sentencePart = fiszka.sentence[i % 3]; // Domyślnie używaj zdania bez zmian

                                console.log('hej31', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(i + (lessonIdToShow1 - 1) * 6 + 1)) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    }
                                }

                                sentence1b += sentencePart + " ";
 

    // Obsługa kliknięcia przycisku
    $sentenceDiv.on('click', '.left-button', function () {
                    // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
            if (sentence1bb === "") {
                let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                sentence1bb += sentencePart1 + " ";
            }
            if (sentence1bba === "") {
                let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                sentence1bba += sentencePart1a + " ";
            }
            // Dodanie treści do diva wraz z przyciskiem
    $sentenceDiv.html(
        '<br><button class="left-button first-button">+<br></button>' +
        '<span class="sentence1b">' + sentence1b + '</span>' +
        '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' + 
        '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' + 
        '<br><button class="left-buttonb second-button">+<br></button>' +
        '<span class="sentence2b">' + sentence2b + '</span>' +
        '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' + 
                        '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
        '<br><button class="left-buttonbb third-button">+<br></button>' +
        '<span class="sentence3b">' + sentence3b + '</span>' +
        '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' + 
        '<br>'
    );

    // Ustawienie stylu dla przycisków .left-button
    $('.left-button').css('position', 'relative');
    $('.left-buttonb').css('position', 'relative');
    $('.left-buttonbb').css('position', 'relative');
                                        let sentencePart1 = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                let sentencePart1a = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
        console.log('Kliknięto przycisk');
        let $sentence1bb2 = $sentenceDiv.find('.sentence1bb2');
        let $sentence1bb = $sentenceDiv.find('.sentence1bb');
        let $sentence1bba = $sentenceDiv.find('.sentence1bba');
        if ($sentence1bb.css('display') === 'none') {
            // Pokazujemy zdanie .sentence1bb
            $sentence1bb.css('display', 'block');
            $sentence1bb.css({
                'margin-bottom': '-20px',
                'top': '0px',
                'position': 'relative'
            });
        }

        if ($sentence1bba.css('display') === 'none') {
            // Pokazujemy zdanie .sentence1bba
            $sentence1bba.css('display', 'block');
            $sentence1bba.css({
                'margin-bottom': '-0px',
                'top': '0px',
                'position': 'relative'
            });
        }
        $sentence1bb2.html('');
        $sentence1bb2.empty();
                $sentence1bb2a.html('');
        $sentence1bb2a.empty();
        
    });
};
                                                            });
                            
                            console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1
                                                        
                        }

                        const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                        $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                        $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                        // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                        $container.attr('data-lesson', indexDiv);

                        $('.grid-container').append($container);

                        const srcWords = [srcWord1, srcWord2, srcWord3];
                        // Zmienna globalna przechowująca łączny czas trwania wszystkich wideo
                        let videoDurations = [];

                        let totalDuration = 0;
                        for (let i = 0; i < srcWords.length; i++) {
                            const video = document.createElement('video');
                            video.src = srcWords[i];
                            video.addEventListener('loadedmetadata', function () {
                                totalDuration += this.duration;
                                console.log('tablica8', totalDuration);
                                console.log('działa5');
                            });
                        }
                        console.log('tablica11', videoDurations);
                        function removePreviousVideo() {
                            const previousVideo = $container.find('video'); // Poprawne odwołanie do poprzedniego wideo
                            if (previousVideo.length > 0) {
                                previousVideo.remove(); // Usunięcie poprzedniego wideo z kontenera
                            }
                        }

                        if (newIndex === 0) {
                            let funkcjaWywolana = false;
                            function addVideo(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    setTimeout(function () {
                                        $('.progress-bar').remove();
                                    }, 200); // Opóźnienie w milisekundach (tu: 1 sekunda)
                                    setFirstFrame();
                                    przekazArgument();
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                const $vidDiv = $('<div>').addClass('background-video');

// Utwórz element <video> i ustaw atrybuty
                                const $videoElement = $('<video>').attr({
                                    'autoplay': true, // Automatyczne odtwarzanie wideo
                                    'muted': true, // Wyciszenie dźwięku wideo
                                    'loop': true // Zapętlenie wideo
                                });
                                // Dodaj klasę CSS zależnie od indeksu wideo
                                if (index === 0) {
                                    $videoElement.addClass('scaled-video');
                                } else {
                                    $videoElement.addClass('next-video');
                                }
// Utwórz element <source> dla wideo i ustaw atrybuty
                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne użycie interpolacji
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
                                // Funkcja obsługi zdarzenia loadedmetadata
                                $videoElement.on('loadedmetadata', function () {
                                    const videoDuration = this.duration;
                                    videoDurations[index] = videoDuration;
                                    console.log('tablica77', totalDuration);
                                    $videoElement.on('timeupdate', function () {
                                        let adjustedProgress = 0;
                                        for (let i = 0; i < index; i++) {
                                            adjustedProgress += (videoDurations[i] / totalDuration) * 100;
                                        }
                                        adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[index] / totalDuration) * 100;

                                        updateProgress(adjustedProgress);
                                        console.log('hej78', index);
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
                                            updateProgress(0);
                                        }
                                    });
                                });
                                // Dodaj div z wideo do tła kontenera
                                $vidDiv.appendTo($container);

                                function setFirstFrame() {
                                    // Tworzenie nowego wideo
                                    const video = document.createElement('video');
                                    video.src = srcWords[0]; // Ustawienie pierwszego filmu
                                    video.muted = true;
                                    video.preload = 'metadata'; // Wczytanie metadanych filmu, ale nie całego filmu

                                    // Odczytanie pierwszej klatki wideo jako obraz
                                    video.addEventListener('loadeddata', function () {
                                        const canvas = document.createElement('canvas');
                                        canvas.width = this.videoWidth;
                                        canvas.height = this.videoHeight;
                                        const ctx = canvas.getContext('2d');
                                        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

                                        // Ustawienie pierwszej klatki jako tło kontenera
                                        $container.css({
                                            'background-image': 'url(' + canvas.toDataURL() + ')',
                                            'background-size': 'cover',
                                            'background-position': 'center',
                                            'background-repeat': 'no-repeat'
                                        });
                                    });

                                    // Rozpoczęcie odtwarzania wideo, aby odczytać pierwszą klatkę
                                    video.play();
                                }
                                function updateProgress(progress) {
                                    // Aktualizuj pasek postępu na dole kontenera
                                    $('.progress-bar').css('width', progress + '%');
                                }

// Inicjalizacja paska postępu
                                const $progressBar = $('<div>').addClass('progress-bar');
                                $progressBar.css({
                                    'position': 'absolute',
                                    'z-index': '2',
                                    'bottom': '0',
                                    'left': '0',
                                    'height': '5px', // Wysokość paska postępu
                                    'background-color': '#007bff', // Kolor paska postępu
                                    'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
                                    'margin-bottom': '-2%',
                                    'margin-left': '-4%',
                                    'margin-right': '-4%'// Zapewnienie równowagi dla powiększenia paska postępu
                                });
                                $progressBar.appendTo($container);
                            }
                            addVideo(0);

                        } else {
                            function addVideo2(index) {

                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                console.log('hej90', index);

                                const $vidDiv = $('<div>').addClass('background-video');

// Utwórz element <video> i ustaw atrybuty
                                const $videoElement = $('<video>').attr({
                                    'muted': true, // Wyciszenie dźwięku wideo
                                    'loop': true, // Zapętlenie wideo
                                    'style': 'z-index: 0'
                                });
                                // Zatrzymaj odtwarzanie wideo


// Utwórz element <source> dla wideo i ustaw atrybuty
                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne użycie interpolacji
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
                                // Obsługa zdarzenia timeupdate


                                // Dodaj div z wideo do tła kontenera
                                $vidDiv.appendTo($container);

                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                                addBackgroundToText1b(matchingFiszki1, lessonIdToShow1, matchingIndexes, true);
                                addBackgroundToText2b(matchingFiszki2, lessonIdToShow2, matchingIndexes, true);
                                addBackgroundToText3b(matchingFiszki3, lessonIdToShow3, matchingIndexes, true);
                            }
                            addVideo2(0);

                        }