                            let polski = false;
            let losowaniaCounter = 0; // Zmienna licznika losowań
            let losowaniaCounter2 = 0; // Zmienna licznika losowań
            let tablica33 = [];
            let tablica33b = [];
            function wybierzRodzaj(selectedCategory, category, czas, matchingIndexes, index55, buttonindex, idpolski, frazyid, matchingIndexes2, rodzaj, matchingIndexes3, isSearching, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40, indexDivRange, indexDiv0, indexDiv0b, indexDiv0d, number, flagaPrzycisku2, flagaPrzycisku) {
                category = category || globalCategory;
                czasv2 = czas;
                number;
                console.log('hej108n', number);
                console.log("Wybrany rodzaj słownictwa:vv ", selectedCategory);
                console.log('hej5b', index55);
                console.log('hej755', matchingIndexes);

                const matchingLessons = new Set();
                const matchingLessons1b = new Set(matchingLessons5);
                const matchingLessons2 = new Set();
// Iteracja przez fiszki
console.log('hej755', matchingLessons1b);
                for (const fiszka of fiszki) {
                    let matchingFiszka = false;
                    // Sprawdzenie warunków dla category
                    if (category === 'all' || !category) {
                        matchingFiszka = true;
                    } else if (category !== 'PresentSimple' && category !== 'PresentContinous' && category !== 'PastSimple') {
                        matchingFiszka = fiszka.category2.includes(category);
                    } else {
                        matchingFiszka = fiszka.category3 && fiszka.category3.includes(category);
                    }

                    // Dodanie fiszki do matchingLessons na podstawie warunków
                    if (matchingFiszka) {
                        if (frazyid === 'frazy') {
                            matchingLessons2.add(fiszka.id[2]);
                        } else {
                            // Dodawanie id do matchingLessons, jeśli czas nie jest 'frazy'
                            matchingLessons.add(fiszka.id[1]);
                        }
                    }
                }
                console.log('matchingLessons2:', matchingLessons2);
                const uniqueMatchingLessons = Array.from(matchingLessons);
                const uniqueMatchingLessons2 = Array.from(matchingLessons2);
                const uniqueMatchingLessons2b = Array.from(matchingLessons1b);
                    // Pobranie lekcji dla pasujących słów
                console.log('Unikalne dopasowane lekcjenn:', uniqueMatchingLessons2b);

                let myVariable;

                if (!isSearching) {
                    myVariable = uniqueMatchingLessons;
                } else if (isSearching) {
                    myVariable = uniqueMatchingLessons2b;
                    console.log('myVariable8:', uniqueMatchingLessons2b);
                }
                
                
                if (czas === 'fiszki' && czas !== "zdania" && !isSearching) {
                    console.log('Warunek czas === "fiszki" jest spełniony');
                    $('.grid-container .image-container4').remove();
                    $('.grid-container .image-container5').remove();

                    if (myVariable.length > 1) {
                        let zeroWylosowane = false;
                        let indexDiv = 0;

                        let previousCumulativeFirstPartLength3 = 0;
                        let cumulativeFirstPartLength1 = 0;
                        let cumulativeFirstPartLength2 = 0;
                        let cumulativeFirstPartLength3 = 0;

                        let startIndex = 0;
                        const lengthDividedByThree = myVariable.length / 3;

                        let indices = Array.from({length: lengthDividedByThree}, (_, i) => i + 1);
                        let indices2 = [];
                        for (let i = 1; i <= lengthDividedByThree; i++) {
                            indices2.push(i);
                        }


                        const zeroIndex = Math.floor(Math.random() * lengthDividedByThree);
                        const zeroIndex2 = index55 - 1;
                        indices[zeroIndex] = 0;
                        indices2[zeroIndex2] = 0;
                        losowaniaCounter++; // Inkrementuj licznik przy każdym wywołaniu
                        tablica33.push(losowaniaCounter); // Dodaj zaktualizowany licznik do tablicy
                        const ostatniaWartosc = tablica33[tablica33.length - 1];
                                                                                    
for (let i = 0; i < myVariable.length; i += 3) {
    indexDiv++;

    const lessonId1 = myVariable[i];
    const lessonId2 = myVariable[i + 1];
    const lessonId3 = myVariable[i + 2];

    const newIndex = indices[Math.floor(i / 3)];
    const index50 = indices2[Math.floor(i / 3)];

    const lesson1Sentences = correlationsCount.find(item => item[0] === lessonId1) || [lessonId1, 0];
    const lesson2Sentences = correlationsCount.find(item => item[0] === lessonId2) || [lessonId2, 0];
    const lesson3Sentences = correlationsCount.find(item => item[0] === lessonId3) || [lessonId3, 0];

    const lesson1SecondPartLength = partLengths2.find(item => item.id === lessonId1)?.count2 || 0;
    const lesson2SecondPartLength = partLengths2.find(item => item.id === lessonId2)?.count2 || 0;
    const lesson3SecondPartLength = partLengths2.find(item => item.id === lessonId3)?.count2 || 0;

    const lesson1FirstPartLength = partLengths1.find(item => item.id === lessonId1)?.count2 || 0;
    const lesson2FirstPartLength = partLengths1.find(item => item.id === lessonId2)?.count2 || 0;
    const lesson3FirstPartLength = partLengths1.find(item => item.id === lessonId3)?.count2 || 0;

    const lesson1PartLength = partLengths3.find(item => item.id === lessonId1)?.cumulativeCount || 0;
    const lesson2PartLength = partLengths3.find(item => item.id === lessonId2)?.cumulativeCount || 0;
    const lesson3PartLength = partLengths3.find(item => item.id === lessonId3)?.cumulativeCount || 0;

    cumulativeFirstPartLength1 += lesson1PartLength;
    cumulativeFirstPartLength2 += lesson2PartLength;
    cumulativeFirstPartLength3 += lesson3PartLength;

                            const lessonObject = {
                                lessonId1: lessonId1,
                                lessonId2: lessonId2,
                                lessonId3: lessonId3,
                                index50: index50,
                                newIndex: newIndex,
                                lesson1Sentences: lesson1Sentences,
                                lesson2Sentences: lesson2Sentences,
                                lesson3Sentences: lesson3Sentences,
                                lesson1PartLength: lesson1PartLength,
                                lesson2PartLength: lesson2PartLength,
                                lesson3PartLength: lesson3PartLength,
                                lesson1FirstPartLength: lesson1FirstPartLength,
                                lesson2FirstPartLength: lesson2FirstPartLength,
                                lesson3FirstPartLength: lesson3FirstPartLength,
                                lesson1SecondPartLength: lesson1SecondPartLength,
                                lesson2SecondPartLength: lesson2SecondPartLength,
                                lesson3SecondPartLength: lesson3SecondPartLength,
                                indexDiv: indexDiv
                            };

    lessonsArray.push(lessonObject);
                            // Zwiększenie licznika losowań
                            console.log('Liczba losowańvv:', losowaniaCounter); // Dodano log licznika losowań

                            // Sprawdzenie, czy osiągnięto limit losowań
                            if (losowaniaCounter >= 10) {
                                console.log('Osiągnięto 7 losowań, wyświetlam powiadomienie');
                                powiadomienieCounter++; // Zwiększenie licznika powiadomień

                                if (confirm('Osiągnięto 7 losowań. Czy chcesz kontynuować losowania?')) {
                                    console.log('Użytkownik potwierdził dalsze losowania');
                                    losowaniaCounter = 0; // Zresetowanie licznika losowań
                                } else {
                                    console.log('Użytkownik przerwał dalsze losowania');
                                    break; // Przerwanie pętli, jeśli użytkownik nie chce kontynuować
                                }
                            }
                            if (category !== 'all') {
                                $('.grid-container .image-container3b').remove();
                               showCombinedSentenceForLesson5b2(category, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching);
                            }
                            console.log('hej108', flagaPrzycisku);
                          
                            // 🔹 Najpierw sprawdzamy specjalny przypadek dla flagaPrzycisku + index50

            if (category !== 'all') {
                $('.grid-container .image-container3b').remove();
                showCombinedSentenceForLesson5b2(category, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching);
            }

            console.log('hej108', flagaPrzycisku);
            if (flagaPrzycisku2 && !flagaPrzycisku && (tablica10.length <= indexDivRange || tablica10.length === 0) && category === 'all' && ostatniaWartosc < 2 && ostatniaWartosc > 0 && !number) {
                const newIndex5 = null;
                const newIndex10 = null;
                const newIndex10b3 = null;
                const newIndex10b4 = null;
                let number = false;
                let number1 = false;
                let number2 = false;
                const newIndex10dd = null;
                console.log('hej230', number);
                if (newIndex !== 0) {
                    showCombinedSentenceForLesson22b(number1, number2, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, newIndex5, newIndex10, newIndex10b3, newIndex10b4, newIndex10dd, indexDiv, indexDiv0, indexDiv0b, indexDiv0d, null, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching);
                }
                if (newIndex === 0) {
                    const currentIndexDiv = indexDiv;
                    setTimeout(() => {
                        tablica43.push(currentIndexDiv);
                    }, 0);
                    console.log('hej105', newIndex);
                    showCombinedSentenceForLesson22b(number1, number2, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, newIndex5, newIndex10, newIndex10b3, newIndex10b4, newIndex10dd, indexDiv, indexDiv0, indexDiv0b, indexDiv0d, null, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching);
                }
            } else if (flagaPrzycisku2 && !flagaPrzycisku && (tablica10.length <= indexDivRange || tablica10.length === 0) && category === 'all' && ostatniaWartosc < 3 && ostatniaWartosc > 1 && !number) {
                const newIndex5 = null;
                const newIndex10 = null;
                const newIndex10dd = null;
                const newIndex10b3 = null;
                let newIndex10b4 = null;
                let number = false;
                let number1 = false;
                let number2 = false;
                if (index50 === 0) {
                    const indexDiv0b = indexDiv;
                    tablica43b.push(indexDiv0b);
                    console.log('hej105b', index50);
                    przekazArgument0(tablica7[0], tablica3[2], undefined, true, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100', indexDiv0, indexDiv0b, indexDiv0d, false, true, false);
                } else if (index50 === 0) {
                    ostatniaWartosc === 3;
                }
            } else if (flagaPrzycisku2 && !flagaPrzycisku && (tablica10.length <= indexDivRange || tablica10.length === 0) && category === 'all' && ostatniaWartosc < 4 && ostatniaWartosc > 2 && !number) {
                const newIndex5 = null;
                const newIndex3 = null;
                const newIndex3b = null;
                const newIndex10 = null;
                const newIndex10b3 = null;
                let newIndex10b4 = null;
                let number = false;
                let number1 = false;
                let number2 = false;
let indexDiv0 /// CZY MUSZĘ TO ZAMIEŚCIĆ?
                let newIndex10dd = (indexDiv === indexDiv0) ? 0 : indexDiv;
                if (newIndex10dd === 0) {
    /// USUNIĘCIE PIERWSZEJ MINIATURY
                showCombinedSentenceForLesson22b(
            number1, number2, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
            buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
            startIndex, newIndex, newIndex5,  newIndex10, newIndex10b3, newIndex10b4, newIndex10dd, indexDiv, indexDiv0, indexDiv0b, indexDiv0d, newIndex10d, lessonsArray,
            lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences,
            lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
            lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
            cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
            lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
        );
}
                if (newIndex10dd === 0) {
                    showCombinedSentenceForLesson(number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, newIndex10, newIndex3, newIndex3b, newIndex10b3, newIndex10dd, indexDiv, indexDiv0, indexDiv0b, indexDiv0d, null, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching);
                }
            }
            
            else if (flagaPrzycisku2 && !flagaPrzycisku && (tablica10.length <= indexDivRange) && selectedCategory === 'all' && ostatniaWartosc < 3 && ostatniaWartosc > 1 && !number) {


    if (index50 === 0) {
        //// WGRANIE MIEJSCA NA DRUGĄ LEKCJĘ
        const indexDiv0b = indexDiv;
        tablica43b.push(indexDiv0b);
                                             nowyLicznik++;
        przekazArgument0(
          'all', tablica3[2], undefined, true, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100',
          indexDiv0, indexDiv0b, '', false, true, false
        );
    }
} else if (flagaPrzycisku2 && !flagaPrzycisku && (tablica10.length <= indexDivRange) && selectedCategory === 'all' && ostatniaWartosc < 4 && ostatniaWartosc > 2 && !number) {

    /// ZRESETUJ W TY MIEJSCU MOJĄ OSTATNIAWARTOSC DO LICZBY 1
    //    /// ZRESETUJ W TY MIEJSCU MOJĄ OSTATNIAWARTOSC DO LICZBY 1
    losowaniaCounter = 1;
    tablica33.push(losowaniaCounter);
    const ostatniaWartosc = 1;
        console.log('hej1004', nowyLicznik);
        nowyLicznik;
        /// ZRESETUJ W TY MIEJSCU MOJĄ OSTATNIAWARTOSC DO LICZBY 1
    let newIndexPierwszy = (indexDiv === indexDiv0b) ? 0 : indexDiv;
    let newIndexDrugi = (indexDiv === indexDiv0d) ? 0 : indexDiv;
    console.log('hej1003av', newIndexDrugi);
            console.log('hej1004vv', indexDiv0d, ostatniaWartosc, nowyLicznik, newIndexDrugi);

    if (newIndexDrugi === 0 && nowyLicznik > 1) {
                            console.log("wykonuje się4b");
        // --- LEKCJA INTERAKTYWNA --- (inny wariant funkcji)
        showCombinedSentenceForLesson22b(
            selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
            buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
            startIndex, newIndex, indexDiv,
            newIndexPierwszy, newIndexDrugi, indexDiv0b, indexDiv0d,
            lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences,
            lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
            lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
            cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
            lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
        );
continue;
    }

    if (newIndexPierwszy === 0 && nowyLicznik === 1) {
        // --- LEKCJA INTERAKTYWNA --- (inny wariant funkcji)
        showCombinedSentenceForLesson(
            selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
            buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
            startIndex, newIndex, indexDiv,
            newIndexPierwszy, newIndexDrugi, indexDiv0b, indexDiv0d,
            lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences,
            lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
            lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
            cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
            lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
        );
        continue;
    }
        if (newIndexPierwszy === 0 && nowyLicznik > 1) {
            console.log("wykonuje się4bv");
        // --- LEKCJA INTERAKTYWNA --- (inny wariant funkcji)
        showCombinedSentenceForLesson(
            selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
            buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
            startIndex, newIndex, indexDiv,
            newIndexPierwszy, newIndexDrugi, indexDiv0b, indexDiv0d,
            lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences,
            lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
            lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
            cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
            lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
        );
        continue;
    }
}