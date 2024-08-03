function getRandomId(max, range, usedIds) {
    const start = (range - 1) * max + 1;
    const end = range * max;

    // Filtruj dostępne identyfikatory, usuwając już użyte
    const availableIds = Array.from({length: end - start + 1}, (_, index) => start + index)
            .filter(id => !usedIds.includes(id));

    if (availableIds.length === 0) {
        // W przypadku, gdy wszystkie identyfikatory zostały już użyte, zwracamy null lub możemy obsłużyć to w inny sposób
        return null;
    }

    // Losuj identyfikator z dostępnych
    const randomIndex = Math.floor(Math.random() * availableIds.length);
    const randomId = availableIds[randomIndex];

    // Dodaj użyty identyfikator do listy
    usedIds.push(randomId);

    return randomId;
}

// Funkcja do zapisywania danych do localStorage
function saveToLocalStorage(data) {
    localStorage.setItem('wylosowaneLekcje', JSON.stringify(data));
}

// Funkcja do wczytywania danych z localStorage
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('wylosowaneLekcje');
    return storedData ? JSON.parse(storedData) : null;
}

const maxRandom = 3;

let lessons2;

// Sprawdź, czy istnieją zapisane dane w localStorage
const storedLessons = loadFromLocalStorage();

if (storedLessons) {
    // Jeśli dane są zapisane, wczytaj je
    lessons2 = storedLessons;
    console.log('Wczytane dane z localStorage:', lessons2);

    // Opóźnij wywołanie funkcji do wyświetlania fiszek
    setTimeout(showFiszki2, 0);
} else {
    // Jeśli nie ma zapisanych danych, losuj i zapisz
    lessons2 = {
        1: [],
        2: [],
        3: []
    };

    // Funkcja do losowania i zapisywania danych
    function losowanie(szablon) {
        // Lista użytych identyfikatorów
        let usedIds = [];

        // Przypisanie przypadkowych id[1] dla każdej lekcji
        for (const lessonId2 in lessons2) {
            const randomId1 = getRandomId(maxRandom, szablon, usedIds);

            if (randomId1 === null) {
                console.log('Wszystkie dostępne identyfikatory zostały już użyte.');
                return;
            }

            console.log(`Lekcja ${lessonId2}: Losowe ID[1]: ${randomId1}`);
            lessons2[lessonId2] = fiszki.filter(f => f.id[1] === randomId1);
            console.log(`Lekcja ${lessonId2} przefiltrowane dane:`, lessons2[lessonId2]);
        }

        // Zapisz wylosowane dane do  localStorage
        saveToLocalStorage(lessons2);

        // Opóźnij wywołanie funkcji do wyświetlania fiszek
        setTimeout(showFiszki2, 0);
    }

    // Posortowanie fiszek w danej lekcji względem id[1] i id[0]
    for (const lessonId2 in lessons2) {
        lessons2[lessonId2].sort((a, b) => {
            if (a.id[1] !== b.id[1]) {
                return a.id[1] - b.id[1];
            }
            return a.id[0] - b.id[0];
        });
        console.log(`Sorted data for Lesson ${lessonId2}:`, lessons2[lessonId2]);
    }

    // Wywołaj funkcję losowania
    losowanie(/* dodaj tutaj odpowiednią wartość dla szablonu */);
}

// Funkcja do wyświetlania fiszek w danej lekcji
function showFiszki2() {
    for (const lessonId2 in lessons2) {
        console.log(`Lesson ${lessonId2}:`);
        if (lessons2[lessonId2].length === 0) {
            console.log("No data for this lesson and the randomly generated identifier.");
        } else {
            lessons2[lessonId2].forEach(fiszka => {
                console.log(`Processing fiszka with ID: [${fiszka.id.join(', ')}]`);
                generateFiszkaBlock(fiszka, lessonId2);
                console.log(`Generated fiszka with ID: [${fiszka.id.join(', ')}]`);
            });
            console.log('lessons2 z wylosowanymi identyfikatorami dla pierwszej tablicy:', lessons2[1][0]);
        }
    }
}