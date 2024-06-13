function calculatePartLengths(fiszki) {
    const idToLengthsMap = new Map(); // Mapa dla długości części zdania dla każdego identyfikatora y

    fiszki.forEach(fiszka => {
        const y = fiszka.id[1];
        const totalLength = (fiszka.sentence1 ? fiszka.sentence1.length : 0) + (fiszka.sentence2 ? fiszka.sentence2.length : 0);

        if (!idToLengthsMap.has(y)) {
            idToLengthsMap.set(y, {
                count: 1
            });
        } else {
            const lengths = idToLengthsMap.get(y);
            lengths.count += 1;
            idToLengthsMap.set(y, lengths);
        }
    });

    const result = [];
    let cumulativeCount = 0; // Dodana zmienna do śledzenia sumy count
    idToLengthsMap.forEach((lengths, id) => {
        cumulativeCount += lengths.count; // Dodajemy aktualną wartość count do sumy
        result.push({ id: id, cumulativeCount}); // Dodajemy sumę count do wyniku
    });

    return result;
}

const partLengths = calculatePartLengths(fiszki);
console.log('Cumulative counts:', partLengths);

// Znajdź długości drugiej części zdania dla każdej lekcji
const lesson1SecondPartLength = partLengths.find(item => item.id === lessonId1)?.cumulativeCount || 0;
const lesson2SecondPartLength = partLengths.find(item => item.id === lessonId2)?.cumulativeCount || 0;
const lesson3SecondPartLength = partLengths.find(item => item.id === lessonId3)?.cumulativeCount || 0;