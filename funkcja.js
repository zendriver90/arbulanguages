let tablica40 = [];
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

                        console.log('hej12', indices2);

                        const zeroIndex = Math.floor(Math.random() * lengthDividedByThree);
                        const zeroIndex2 = index55 - 1;
                        indices[zeroIndex] = 0;
                        indices2[zeroIndex2] = 0;
                        losowaniaCounter++; // Inkrementuj licznik przy każdym wywołaniu
                        tablica33.push(losowaniaCounter); // Dodaj zaktualizowany licznik do tablicy
                        console.log('hej1113', tablica33); // Wyświetl zawartość tablicy
                        const ostatniaWartosc = tablica33[tablica33.length - 1];
                        for (let i = 0; i < myVariable.length; i += 3) {
                            indexDiv++;
                            const lessonId1 = myVariable[i];
                            const lessonId2 = myVariable[i + 1];
                            const lessonId3 = myVariable[i + 2];
                            const newIndex = indices[Math.floor(i / 3)];
                            const index50 = indices2[Math.floor(i / 3)];
                            
                            console.log('hej16e', lessonId1);

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
                            console.log('hej34', lessonObject);

                            // Zwiększenie licznika losowań
                            console.log('Liczba losowań:', losowaniaCounter); // Dodano log licznika losowań

                            // Sprawdzenie, czy osiągnięto limit losowań
                            if (losowaniaCounter >= 7) {
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

console.log('xxx:', indexDivRange); // Dodano log licznika losowań
if ((tablica10.length <= indexDivRange || tablica10.length === 0) && ostatniaWartosc < 2) {

    let number = true;
    console.log('hej32vv', newIndex);
    if (newIndex !== 0) {
    // ⬇️ ZAWSZE wykonujemy tę funkcję – nawet jeśli newIndex = 0
    showCombinedSentenceForLesson22b(
        selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
        buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
        startIndex, newIndex, indexDiv, lessonsArray,
        lesson1PartLength, lesson2PartLength, lesson3PartLength,
        lesson1Sentences, lesson2Sentences, lesson3Sentences,
        lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
        lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
        cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
        lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
    );
    continue;
    }

if (newIndex === 0) {
    showCombinedSentenceForLesson(
        number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
        buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
        startIndex, newIndex, indexDiv, lessonsArray,
        lesson1PartLength, lesson2PartLength, lesson3PartLength,
        lesson1Sentences, lesson2Sentences, lesson3Sentences,
        lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
        lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
        cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
        lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
    );
}


} else if ((tablica10.length <= indexDivRange || tablica10.length === 0) && ostatniaWartosc < 3 && ostatniaWartosc > 1) {
                                let number = true;
                                console.log('wykonuje się 8');
                                console.log('hej32vv', tablica40);
                                console.log('hej18', tablica10);
                                newIndex2 = tablica40[tablica40.length - 1];
                                    if (newIndex2 === 0) {
    // ⬇️ ZAWSZE wykonujemy tę funkcję – nawet jeśli newIndex = 0
    showCombinedSentenceForLesson22b(
        selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
        buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
        startIndex, newIndex, indexDiv, lessonsArray,
        lesson1PartLength, lesson2PartLength, lesson3PartLength,
        lesson1Sentences, lesson2Sentences, lesson3Sentences,
        lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
        lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
        cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
        lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
    );
    continue;
    }
if (newIndex === 0) {
    showCombinedSentenceForLesson(
        number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
        buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
        startIndex, newIndex, indexDiv, lessonsArray,
        lesson1PartLength, lesson2PartLength, lesson3PartLength,
        lesson1Sentences, lesson2Sentences, lesson3Sentences,
        lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
        lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
        cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
        lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
    );
}
} else if (ostatniaWartosc > 2) {
                                let number = false;
                               console.log('wykonuje się 8');
                                console.log('hej32', newIndex);
                                console.log('hej18', tablica10);
if (newIndex === 0) {
    showCombinedSentenceForLesson(
        number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
        buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes,
        startIndex, newIndex, indexDiv, lessonsArray,
        lesson1PartLength, lesson2PartLength, lesson3PartLength,
        lesson1Sentences, lesson2Sentences, lesson3Sentences,
        lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
        lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
        cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
        lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
    );
}  
                            }

                        }

                        console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
                        const numberOfContainers = $('.image-container3').length;
                        console.log('Liczba dodanych divów:', numberOfContainers);
                    }
                }
                
                                            const indexDiv0 = tablica41[tablica41.length - 1];