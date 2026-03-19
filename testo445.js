function generateFiszkaBlock(fiszka, lessonId2, category) {
const isMultiVersion = Array.isArray(fiszka.entries) && fiszka.entries.length > 1;
// Tworzymy przycisk Zatwierdź tylko jeśli jest wiele wersji
if (isMultiVersion) {
    const $btnApprove = $('<button>')
        .text('Zatwierdź')
        .addClass('btnApprove')
        .css({
            marginRight: '6px',
            padding: '10px 18px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#1e90ff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
        });

    // 🔹 Zapisujemy w kontenerze fiszki wszystkie potrzebne dane
    fiszkaContainer.data({
        fiszkaObj: fiszka,         // obiekt fiszki
        fiszki10Obj: fiszki10,     // cała tablica do generateOrUpdateMatrix
        startIndex2: startIndexByLesson[lessonId2] || 0 // 🔹 zapisujemy startIndex dla lekcji
    });

    fiszkaContainer.append($btnApprove);
}

$(document).on('click', '.btnApprove', function() {

    if (MATRIX_MODE !== 'APPROVE') return;

    const $fiszkaContainer = $(this).closest('.fiszka');
    const selectedIndex = parseInt($fiszkaContainer.data('selectedIndex')) || 0;

    const fiszkaObj = $fiszkaContainer.data('fiszkaObj');
    const fiszki10Obj = $fiszkaContainer.data('fiszki10Obj');
    const startIndex2 = $fiszkaContainer.data('startIndex2');

    if (!fiszkaObj || !fiszki10Obj) {
        console.log("Brak danych w kontenerze fiszki");
        return;
    }

    const entry = fiszkaObj.entries[selectedIndex];
    if (!entry) return;

    const idFiszki = entry.id || selectedIndex;
    const idFiszki2 = fiszkaObj.id ? fiszkaObj.id[0] : selectedIndex;
    const relativeIndex = idFiszki2 - startIndex2;

    if (!selectedFiszkiHistoryByLesson[lessonId2]) {
        selectedFiszkiHistoryByLesson[lessonId2] = [];
    }

    selectedFiszkiHistoryByLesson[lessonId2][relativeIndex] = {
        idFiszki: idFiszki,
        img: entry.img,
        word: fiszkaObj.sentence?.[selectedIndex] || null
    };

    const history = selectedFiszkiHistoryByLesson[lessonId2];
// Sprawdzenie kolejki dla tej lekcji
if (!matrixQueueByLesson[lessonId2]) {
    matrixQueueByLesson[lessonId2] = Promise.resolve();
}

// Dodanie zadania do kolejki tej lekcji
matrixQueueByLesson[lessonId2] = matrixQueueByLesson[lessonId2]
    .then(() => Promise.all(imagePromises)) // czekamy na obrazki tylko tej lekcji
    .then(() => {
        // Odświeżamy tylko matrycę dla tej lekcji
        if (fiszkaContainer && fiszki10.length > 0) {
            return generateOrUpdateMatrix(
                fiszki10,                        // dane fiszek dla tej lekcji
                lessonId2,                        // id lekcji
                selectedFiszkiHistoryByLesson[lessonId2], // historia tej lekcji
                fiszkaContainer                   // kontener tej lekcji
            );
        }
    })
    .catch(err => console.error(err));

    console.log('Zatwierdzono wersję:', selectedIndex);
});
// Ustawiamy startIndex dla lekcji, jeśli jeszcze nie został ustawiony
if (startIndexByLesson[lessonId2] === undefined) {
    startIndexByLesson[lessonId2] = fiszka.id[0];
    console.log("StartIndex dla lekcji", lessonId2, startIndexByLesson[lessonId2]);
}

const startIndex2 = startIndexByLesson[lessonId2];
console.log('start100', startIndexByLesson[lessonId2]);
console.log('startIndex for lesson5', startIndex2);
console.log('startIndex for lesson', startIndex);

// --- 4️⃣ Tworzymy przyciski dla każdego wpisu w fiszce
fiszka.entries.forEach((entry, index) => {
    const displayText = entry.category.join(", ");
    const isIncluded = selectedIndexes.includes(index);

    const storyButton = $('<button>')
        .text(displayText)
        .addClass('story_button');

if (isIncluded) {
    storyButton.click(function () {
        console.log('Clicked entry', entry, index);

        // ✅ Ustawiamy idFiszki dynamicznie
        const idFiszki = entry.id || index;
        showStory(index, idFiszki);
        lastClickedIndex = index;

        // zapamiętujemy wersję
        const idFiszki2 = fiszka.id ? fiszka.id[0] : index;
        console.log("idFiszki2:", idFiszki2);
        console.log("startIndex2:", startIndex2);

        // 🔹 Obliczamy indeks relatywny względem pierwszej fiszki w lekcji
        const relativeIndex = idFiszki2 - startIndex2;
        console.log('relativeIndex', relativeIndex);

        // 🔹 Aktualizujemy historię dla tej lekcji
        if (!selectedFiszkiHistoryByLesson[lessonId2]) {
            selectedFiszkiHistoryByLesson[lessonId2] = [];
        }
        selectedFiszkiHistoryByLesson[lessonId2][relativeIndex] = {
            idFiszki: idFiszki,
            img: entry.img,
            word: fiszka.sentence?.[index] || null
        };

        // 🔹 Pobranie historii dla lekcji
        const history = selectedFiszkiHistoryByLesson[lessonId2];
        if (MATRIX_MODE === 'RANDOM') {
        // 🔹 Jeśli kolejka dla lekcji nie istnieje, tworzymy pustą Promise
        if (!matrixQueueByLesson[lessonId2]) {
            matrixQueueByLesson[lessonId2] = Promise.resolve();
        }

        // 🔹 Przekazujemy bezpośrednio kontener klikanej fiszki
        const idFiszki2Container = $(this).closest('.fiszka');
        const $fiszkaContainer = $(this).closest('.fiszka');

        // ✅ zapamiętujemy wybraną wersję w kontenerze fiszki
        $fiszkaContainer.data('selectedIndex', index);

        // 🔹 Dodajemy zadanie do kolejki
        matrixQueueByLesson[lessonId2] = matrixQueueByLesson[lessonId2]
            .then(() =>
                Promise.all(
                    history
                        .filter(h => h?.img?.src)
                        .map(h => loadImage(h.img.src))
                )
            )
            .then(() => {
                console.log('Container dla tej fiszki:', idFiszki2Container);
                generateOrUpdateMatrix(fiszki10, lessonId2, history, idFiszki2Container, idFiszki);
            })
            .catch(err => console.error(err));
} else if (MATRIX_MODE === 'APPROVE') {
            // 🔹 Tryb APPROVE – nic nie wgrywamy, czekamy na kliknięcie przycisku "Zatwierdź"
            console.log('Wybrano wersję w APPROVE. Obrazki zostaną wgrane po kliknięciu Zatwierdź.');
        }