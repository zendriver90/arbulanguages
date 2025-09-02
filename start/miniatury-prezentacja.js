const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category');
                        const tablica11 = [];
                        
function showCombinedSentenceForLesson22b(number1, number2, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, newIndex5, newIndex10, newIndex10b3, newIndex10b4, newIndex10dd, indexDiv, indexDiv0, indexDiv0b, indexDiv0d, newIndex10d, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {      
    console.log('hejhej11v', matchingLessons5b);
                            let tablica60 = [];
                const matchingFiszki1 = fiszki10.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki10.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki10.filter(fiszka => fiszka.id[1] === lessonIdToShow3);

                console.log('hej450b', tablica60);
                console.log('hej444d', newIndex);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';
                if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {

                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki10);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki10);
                    const srcWord1d = pobierzSrcWordDlaLekcji4(lessonIdToShow1, fiszki10);
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki10);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki10);
                    const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki10);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki10);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki10);
                    const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki10);
                    const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki10);
                    function pobierzSrcWordDlaLekcji(lessonId, fiszki10) {
                        const matchingFiszka = fiszki10.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[0] : null;
                    }
                    function pobierzSrcWordDlaLekcji3(lessonId, fiszki10) {
                        const matchingFiszka = fiszki10.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
                    }
                    function pobierzSrcWordDlaLekcji2(lessonId, fiszki10) {
                        const matchingFiszka = fiszki10.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    function pobierzSrcWordDlaLekcji4(lessonId, fiszki10) {
                        const matchingFiszka = fiszki10.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);

                    let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence33 = "";

                    // Zmienna do liczenia wystąpień indexToCheck
                                        let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence11 = "";
                    let sentence1bba = "";
                    let sentence1bbab = "";
                    
                    function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        
        $(document).ready(function () {
function isFiszkaActive2(className) {
    const learned = getLearned2();

    const entry = learned.find(e => e.className === className);

    return entry && entry.classToAdd === "active2";
}
                            sentence1bba = "";
                            sentence1bbab = "";
                            setTimeout(() => {
                                for (let i = 0; i < matchingFiszki1.length; i++) {
                                    const fiszka = matchingFiszki1[i];
                                    
                                    if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                        
                                        continue;
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                        let sentencePart = fiszka.sentence1[ki];
const classNameToCheck = `fiszka-${fiszka.id}`;

const isActive = isFiszkaActive2(classNameToCheck);

    if (isActive) {
        const spanGreen = document.createElement('span');
        spanGreen.textContent = sentencePart;
        spanGreen.classList.add('orange');
        sentencePart = spanGreen.outerHTML;
    }
                                        const indexToCheck = i + lesson1PartLength + 1;
                                        const indexToCheck2 = i + lesson1PartLength + 1;
                                            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                        
                                        function countCategoryInFiszki(matchingFiszki1, category) {
                                            // Zmienna do przechowywania sumy wystąpień
                                            let totalCount = 0;

                                            // Iteracja przez wszystkie fiszki
                                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                                const fiszka = matchingFiszki1[i];

                                                // Zlicz wystąpienia kategorii w category3
                                                if (fiszka.category3 && Array.isArray(fiszka.category3)) {
                                                    const count = fiszka.category3.filter(cat => cat === category).length;
                                                    totalCount += count; // Dodaj do sumy
                                                }
                                            }

                                            return [totalCount]; // Zwróć tablicę z jedną sumaryczną wartością
                                        }

// Użycie funkcji
                                        const categoryToCount = "PresentSimplePodmiot";
                                        const categoryToCount2 = "PresentSimpleCzasownik";
                                        const occurrences = countCategoryInFiszki(matchingFiszki1, categoryToCount);
                                        const occurrences2 = countCategoryInFiszki(matchingFiszki1, categoryToCount2);
// Wypisywanie wyników
                                        console.log('Suma wystąpień:', occurrences2);
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Flaga sprawdzająca, czy podmiot został już dodany

                                        if (aktualny && rodzaj === "play" && matchingIndexes2.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            if (i === 0 && occurrences[0] === 2) {
                                                console.log('Podświetlono pierwsze słowo:', fiszka.sentence1[ki]);
                                                const firstWordElement = document.createElement('span');
                                                firstWordElement.textContent = sentencePart;
                                                firstWordElement.classList.add('green'); // Dodaj klasę, która podświetla słowo na zielono
                                                sentencePart = firstWordElement.outerHTML; // Zamień pierwsze słowo na jego wersję z "span"
                                            }
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2
                                            if (i === 1 && occurrences[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (i === 0 && occurrences[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        if (aktualny && rodzaj === "play" && matchingIndexes3.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2

                                            if (i === 2 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 1, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (i === 2 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (i === 1 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[ki]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        // Dodaj sentencePart do sentence10
                                        sentence10 += sentencePart + " ";

                                    }

                                }
                                for (let ii = 0; ii < matchingFiszki1.length; ii++) {
                                    const fiszka = matchingFiszki1[ii];
                                    
                                    if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                        
                                        continue;
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let kii = 0; kii < fiszka.sentence2.length; kii++) {
                                        let sentencePart2 = fiszka.sentence2[kii];
    const classNameToCheck = `fiszka-${fiszka.id}`;
    const isActive = isFiszkaActive2(classNameToCheck);

    if (isActive) {
        const spanGreen2 = document.createElement('span');
        spanGreen2.textContent = sentencePart2;
        spanGreen2.classList.add('orange');
        sentencePart2 = spanGreen2.outerHTML;

        console.log('[✅ PODŚWIETLONO NA ZIELONO w sentence2]', sentencePart2);
    }
                                        const indexToCheck = ii + lesson1PartLength + 1;
                                        const indexToCheck2 = ii + lesson1PartLength + 1;
                                            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                        function countCategoryInFiszki1b(matchingFiszki1, category) {
                                            // Zmienna do przechowywania sumy wystąpień
                                            let totalCount = 0;
                                            // Iteracja przez wszystkie fiszki
                                            for (let ii = 0; ii < matchingFiszki1.length; ii++) {
                                                const fiszka = matchingFiszki1[ii];

                                                // Zlicz wystąpienia kategorii w category3
                                                if (fiszka.category3 && Array.isArray(fiszka.category3)) {
                                                    const count = fiszka.category3.filter(cat => cat === category).length;
                                                    totalCount += count; // Dodaj do sumy
                                                }
                                            }
                                            return [totalCount]; // Zwróć tablicę z jedną sumaryczną wartością
                                        }
                                        const categoryToCount2 = "PresentSimpleCzasownik";
                                        const occurrences2 = countCategoryInFiszki1b(matchingFiszki1, categoryToCount2);
// Wypisywanie wyników
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Flaga sprawdzająca, czy podmiot został już dodany

                                        if (aktualny && rodzaj === "play" && matchingIndexes3.includes(indexToCheck)) {
                                            // Sprawdź, czy to jest pierwsze słowo
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2

                                            if (ii === 6 && occurrences2[0] === 1) {
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart2;
                                                podmiotElement.classList.add('blue');
                                                sentencePart2 = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart2.split(' ');
                                                words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart2 = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        // Dodaj sentencePart do sentence10
                                        sentence11 += sentencePart2 + " ";

                                    }
                                }

                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    let sentencePart3 = fiszka.translateb;
                                    console.log('sentencePart3:', sentencePart3);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart3;
                                        sentencePart3 = spanElement.outerHTML;

                                    }
                                    sentence1bba += sentencePart3 + " ";
                                }
                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    let sentencePart3 = fiszka.translate;
                                    console.log('sentencePart3:', sentencePart3);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart3;
                                        sentencePart3 = spanElement.outerHTML;

                                    }
                                    sentence1bbab += sentencePart3 + " ";
                                }

 $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);

// Kolory przypisane do kategorii
const colorMapping = {
    'sport': '#28a745',        // Zielony
    'natura': '#007bff',       // Niebieski
    'nauka': '#dc3545',        // Czerwony
    'czarnyhumor': '#ffc107',  // Żółty
    'zwiazki': '#fd7e14',      // Pomarańczowy
    'all': '#800080',
    'wszystkie': 'yellow'       
};

const startRange2 = 1;
const endRange2 = 7;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            selectedCategory = button.getAttribute('data-category');
            updateButtonColors();
        });
    });
});

let previousTrojkiJSON = '';
const tablica60 = [];
const linkMap = {}; // mapa data-name -> link

function updateButtonColors() {
    tablica60.length = 0;
    for (let key in linkMap) delete linkMap[key]; // reset mapy linków

    const color = colorMapping[selectedCategory] || '#800080';

    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataName = parseInt(block.getAttribute('data-name'), 10);
        tablica60.push(dataName);

        if (dataName >= startRange2 && dataName <= endRange2) {
            const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');
            if (button) {
                button.style.backgroundColor = color;
                button.style.color = 'white';
            }
        }
    });

    const trojki = [];
    for (let i = 0; i < tablica60.length; i += 3) {
        trojki.push(tablica60.slice(i, i + 3));
    }

    if (newIndex === 0 || newIndex5 === 0 || newIndex10 === 0) {
        for (let i = 0; i < trojki.length; i++) {
            trojki[i] = trojki[i].map(num => (num > index50 ? num - 3 : num));
        }
    }

    const currentTrojkiJSON = JSON.stringify(trojki);
    if (currentTrojkiJSON !== previousTrojkiJSON) {
        previousTrojkiJSON = currentTrojkiJSON;

        // Usuń stare linki i przyciski
        $('.hidden-link').remove();
        $('.run-button3').remove();

trojki.forEach((trojka, i) => {
    const lessonNumber = i + 1;
    const link = `demo1angielski.html?category=${selectedCategory}&data=${trojka.join(',')}`;

    // Zapis mapowania dla wszystkich elementów trójki
    trojka.forEach(indexDiv => linkMap[indexDiv] = link);

    // Tworzymy przycisk tylko w pierwszym elemencie trójki
    const firstIndex = trojka[0];
    const $container = $(`.sentence-block[data-name="${firstIndex}"]`);
    const $buttonb2 = $('<button></button>')
        .css({
            position: 'absolute',
            top: '60px',
            right: '5px',
            'z-index': 2000,
            color: 'white',
            'background-color': '#007bff',
            border: 'none',
            'border-radius': '4px',
            padding: '5px 10px',
            cursor: 'pointer'
        });
    $buttonb2.addClass('run-button3');
    $buttonb2.text(`Otwórz lekcję tutaj`);
    $buttonb2.attr('data-index2', firstIndex);
    $container.append($buttonb2);
});
    }
}

// Delegacja zdarzeń – działa dla nowych przycisków
$('body').off('click', '.run-button3').on('click', '.run-button3', function () {
    const indexDiv = $(this).attr('data-index2');
    const lessonLink = linkMap[indexDiv];
    if (lessonLink) window.open(lessonLink, '_blank');
});

// Uruchom na start
setTimeout(updateButtonColors, 0);

                                $('.sentence1bba').html('');
                                $sentenceDiv.on('click', '.left-button', function () {

                                    // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                    if (sentence1bba === "") {
                                        let sentencePart3 = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bba += sentencePart3 + " ";
                                    }
                                    if (sentence1bbab === "") {
                                        let sentencePart33 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bbab += sentencePart33 + " ";
                                    }

                                    // Dodanie treści do diva wraz z przyciskiem
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                    // Ustawienie stylu dla przycisków .left-button
                                    $('.sentence1bb1b').html('');
                                    $('.sentence1bba2').html('');
                                    $('.left-button').css('position', 'relative');
                                    $('.left-buttonb').css('position', 'relative');
                                    $('.left-buttonbb').css('position', 'relative');
                                    let sentencePart1 = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                    let sentencePart3 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                    console.log('Kliknięto przycisk');
                                    if ($sentence1bba.css('display') === 'none' || sentence1bVisible) {
                                        $sentence1bba.css('display', 'block');
                                        $sentence1bba.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                                    if ($sentence1bbab.css('display') === 'none' || sentence1bVisible) {
                                        $sentence1bbab.css('display', 'block');
                                        $sentence1bbab.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                                    // Dodanie stylizacji na hover

                                    $sentence1bb1b.html('');
                                    $sentence1bb1b.empty();
                                });
                                $sentence1bb1b.html('');
                                $sentence1bb1b.empty();
                            }, 0);
                        });                       
                    }


                                        let sentence20 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence22 = "";
                    let sentence1bb1b = "";
                    let sentence1bba2 = "";
                    function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {

                        $(document).ready(function () {
                            function isFiszkaActive2(className) {
    const learned = getLearned2();

    const entry = learned.find(e => e.className === className);

    if (entry) {
        if (entry.classToAdd === "active") return "green";
        if (entry.classToAdd === "active2") return "orange";
    }
    return null;
}
                                sentence1bb1b = "";
                                sentence1bba2 = "";
                                // Iteracja przez matchingFiszki2 dla sentence1
                                for (let j = 0; j < matchingFiszki2.length; j++) {
                                    const fiszka = matchingFiszki2[j];
                                    if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                        continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let k = 0; k < fiszka.sentence1.length; k++) {
                                        let sentencePart = fiszka.sentence1[k];

                                        console.log('sentencePart5:', sentencePart);
                                        const indexToCheck = j + lesson2PartLength + 1;
                                        const indexToCheck2 = j + lesson2PartLength + 1;
                                        // Sprawdź, czy indeks jest równy 0
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                        }
                                        
                                        // Dodaj sentencePart do sentence10
                                        sentence20 += sentencePart + " ";

                                    }

                                }
                                                                // Iteracja przez matchingFiszki2 dla sentence2
                                for (let jj = 0; jj < matchingFiszki2.length; jj++) {
                                    const fiszka = matchingFiszki2[jj];
                                    
                                    if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                        
                                        continue;
                                    }

for (let kk = 0; kk < fiszka.sentence2.length; kk++) {
    let sentencePart2 = fiszka.sentence2[kk];
    if (!sentencePart2 || sentencePart2.trim() === "") continue;

    const classNameToCheck = `fiszka-${fiszka.id}`;
const colorClass = isFiszkaActive2(classNameToCheck);

    const span = document.createElement('span');
    span.textContent = sentencePart2;
    span.classList.add(classNameToCheck); // identyfikacja fiszki

    if (colorClass) {
        span.classList.add(colorClass);
    }
                                        const indexToCheck = jj + lesson2PartLength + 1;
                                        const indexToCheck2 = jj + lesson2PartLength + 1;
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                        }

    sentence22 += span.outerHTML + " ";
}
                                }

// Kolory przypisane do kategorii
const colorMapping = {
    'sport': '#28a745',        // Zielony
    'natura': '#007bff',       // Niebieski
    'nauka': '#dc3545',        // Czerwony
    'czarnyhumor': '#ffc107',  // Żółty
    'zwiazki': '#fd7e14',      // Pomarańczowy
    'all': '#800080'           // Fioletowy
};

// Zakres pokolorowanych przycisków
const startRange2 = 1;
const endRange2 = 6;

document.addEventListener('DOMContentLoaded', () => {
    // Kliknięcie w kategorię
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // zapobiega przeładowaniu
            selectedCategory = button.getAttribute('data-category');
            updateButtonColors();
        });
    });
});
// Główna funkcja kolorująca
function updateButtonColors() {
    const color = colorMapping[selectedCategory] || '#800080';
    
    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataName = parseInt(block.getAttribute('data-name'), 10);

        const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');

        if (button) {
            if (dataName >= startRange2 && dataName <= endRange2) {
                button.style.backgroundColor = color;
                button.style.color = 'white';
            } else {
                // Czyścimy kolory poza zakresem
                button.style.backgroundColor = '';
                button.style.color = '';
            }
        }
    });
    }
    updateButtonColors();
 $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                $('.sentence1bb1b').html('');
                                $('.sentence1bba2').html('');
                                $sentenceDiv.on('click', '.left-buttonb', function () {
                                    $('.sentence1bba').html('');
                                    // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                    if (sentence1bb1b === "") {
                                        let sentencePart33 = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bb1b += sentencePart33 + " ";
                                    }
                                    console.log('hej56', sentence1bb1b);
                                    if (sentence1bba2 === "") {
                                        let sentencePart33 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bba2 += sentencePart33 + " ";
                                    }
                                    // Dodanie treści do diva wraz z przyciskiem
 $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                    $('.sentence1bba').html('');
                                    // Ustawienie stylu dla przycisków .left-button
                                    $('.left-button').css('position', 'relative');
                                    $('.left-buttonb').css('position', 'relative');
                                    $('.left-buttonbb').css('position', 'relative');
                                    let sentencePart33 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                    // Obsługa kliknięcia przycisku
                                    console.log('Kliknięto przycisk');
                                    let $sentence1bb1b = $sentenceDiv.find('.sentence1bb1b');
                                    if ($sentence1bb1b.css('display') === 'none') {
                                        sentence1bVisible = false;
                                        sentence1baVisible = true;
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bb1b.css('display', 'block');
                                        $sentence1bb1b.css({
                                            'margin-top': '-25px',
                                            'top': '24px',
                                            'position': 'relative'
                                        });
                                    }
                                    if ($sentence1bba2.css('display') === 'none') {
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bba2.css('display', 'block');
                                        $sentence1bba2.css({
                                            'margin-top': '0px',
                                            'top': '23px',
                                            'position': 'relative'
                                        });
                                    }

                                    $sentence1bb1a.html('');
                                    $sentence1bb1a.empty();
                                });
                                $sentence1bb1a.html('');
                                $sentence1bb1a.empty();
                        });
                    }






                    let sentence1bb3 = "";
                    let sentence1bb1c = "";

                    function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        $(document).ready(function () {
                                function isFiszkaActive2(className) {
    const learned = getLearned2();

    const entry = learned.find(e => e.className === className);

    return entry && entry.classToAdd === "active2";
}
                            sentence1bb3 = "";
                            sentence1bb1c = "";

                            for (let l = 0; l < matchingFiszki3.length; l++) {
                                const fiszka = matchingFiszki3[l];
                                
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    
                                    continue;
                                }
                                for (let lm = 0; lm < fiszka.sentence1.length; lm++) {
                                    let sentencePart = fiszka.sentence1[lm];
                                    const classNameToCheck = `fiszka-${fiszka.id}`;

const isActive = isFiszkaActive2(classNameToCheck);
    if (isActive) {
        const spanGreen = document.createElement('span');
        spanGreen.textContent = sentencePart;
        spanGreen.classList.add('orange');
        sentencePart = spanGreen.outerHTML;
    }

                                        const indexToCheck = l + lesson3PartLength + 1;
                                        const indexToCheck2 = l + lesson3PartLength + 1;
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                            }
                                        }
function countCategoryInFiszki2(matchingFiszki3, category) {
                                            // Zmienna do przechowywania sumy wystąpień
                                            let totalCount = 0;

                                            // Iteracja przez wszystkie fiszki
                                            for (let l = 0; l < matchingFiszki3.length; l++) {
                                                const fiszka = matchingFiszki3[l];

                                                // Zlicz wystąpienia kategorii w category3
                                                if (fiszka.category3 && Array.isArray(fiszka.category3)) {
                                                    const count = fiszka.category3.filter(cat => cat === category).length;
                                                    totalCount += count; // Dodaj do sumy
                                                }
                                            }

                                            return [totalCount]; // Zwróć tablicę z jedną sumaryczną wartością
                                        }

// Użycie funkcji
                                        const categoryToCount = "PresentSimplePodmiot";
                                        const categoryToCount2 = "PresentSimpleCzasownik";
                                        const occurrences = countCategoryInFiszki2(matchingFiszki3, categoryToCount);
                                        const occurrences2 = countCategoryInFiszki2(matchingFiszki3, categoryToCount2);
// Wypisywanie wyników
                                        console.log('Suma wystąpień:', occurrences2);
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
                                        // Flaga sprawdzająca, czy podmiot został już dodany

                                        if (aktualny && rodzaj === "play" && matchingIndexes2.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            if (l === 0 && occurrences[0] === 2) {
                                                console.log('Podświetlono pierwsze słowo:', fiszka.sentence1[l]);
                                                const firstWordElement = document.createElement('span');
                                                firstWordElement.textContent = sentencePart;
                                                firstWordElement.classList.add('green'); // Dodaj klasę, która podświetla słowo na zielono
                                                sentencePart = firstWordElement.outerHTML; // Zamień pierwsze słowo na jego wersję z "span"
                                            }
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2
                                            if (l === 1 && occurrences[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 0 && occurrences[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('green');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(podmiot)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        if (aktualny && rodzaj === "play" && matchingIndexes3.includes(indexToCheck2)) {
                                            console.log('hej123', occurrences);
                                            // Sprawdź, czy to jest pierwsze słowo
                                            // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2

                                            if (l === 2 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(2, 1, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 2 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 1 && occurrences2[0] === 1) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 2 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 3 && occurrences2[0] === 2) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            } else if (l === 3 && occurrences2[0] === 3) {
                                                console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[l]);
                                                const podmiotElement = document.createElement('span');
                                                podmiotElement.textContent = sentencePart;
                                                podmiotElement.classList.add('blue');
                                                sentencePart = podmiotElement.outerHTML;
                                                podmiotElement.textContent = "(czasownik)";

                                                // Rozdziel zdanie na słowa
                                                let words = sentencePart.split(' ');
                                                words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po pierwszym słowie
                                                sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

                                            }
                                        }
                                        // Dodaj sentencePart do sentence10
                                        sentence30 += sentencePart + " ";
                                }
                            }

                            for (let lmm = 0; lmm < matchingFiszki3.length; lmm++) {
                                const fiszka = matchingFiszki3[lmm];
                               
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                   
                                    continue;
                                }
                                for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                    let sentencePart3 = fiszka.sentence2[lmn];
    if (!sentencePart3 || sentencePart3.trim() === "") continue;

    const classNameToCheck = `fiszka-${fiszka.id}`;
    const isActive = isFiszkaActive2(classNameToCheck);

    // Dodaj klasę do SPANA, która potem będzie aktywowana po odświeżeniu
    const span = document.createElement('span');
    span.textContent = sentencePart3;
    span.classList.add(classNameToCheck); // ← tu dodajemy klasę identyfikującą fiszkę

    if (isActive) {
        span.classList.add('orange');
        console.log('[✅ PODŚWIETLONO NA POMARAŃCZOWO]', sentencePart3);
    }
                                    const indexToCheck = lmm + lesson3PartLength + 1;
                                    const indexToCheck2 = lmm + lesson3PartLength + 1;
                                        if (aktualny) {
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart3;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart3 = spanElement.outerHTML;
                                            }
                                        }
    sentence33 += span.outerHTML + " ";
                                }
                            }
                            for (let z = 0; z < matchingFiszki3.length; z++) {
                                const fiszka = matchingFiszki3[z];
                                let sentencePart444b = fiszka.translateb;
                                        if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart444b;
                                        sentencePart444b = spanElement.outerHTML;

                                    }
                                    sentence1bb3 += sentencePart444b + " ";
                                }

                            for (let zi = 0; zi < matchingFiszki3.length; zi++) {
                                const fiszka = matchingFiszki3[zi];
                                let sentencePart444 = fiszka.translate;
                                if (aktualny) {
                                    const spanElement = document.createElement('span');
                                    spanElement.textContent = sentencePart444;
                                    sentencePart444 = spanElement.outerHTML;
                                }
                                sentence1bb1c += sentencePart444 + " ";
                            }
// Kolory przypisane do kategorii
const colorMapping = {
    'sport': '#28a745',        // Zielony
    'natura': '#007bff',       // Niebieski
    'nauka': '#dc3545',        // Czerwony
    'czarnyhumor': '#ffc107',  // Żółty
    'zwiazki': '#fd7e14',      // Pomarańczowy
    'all': '#800080'           // Fioletowy
};

// Zakres pokolorowanych przycisków
const startRange2 = 1;
const endRange2 = 6;

document.addEventListener('DOMContentLoaded', () => {
    // Kliknięcie w kategorię
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // zapobiega przeładowaniu
            selectedCategory = button.getAttribute('data-category');
            updateButtonColors();
        });
    });
});

// Główna funkcja kolorująca
function updateButtonColors() {
    const color = colorMapping[selectedCategory] || '#800080';
    
    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataName = parseInt(block.getAttribute('data-name'), 10);

        const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');

        if (button) {
            if (dataName >= startRange2 && dataName <= endRange2) {
                button.style.backgroundColor = color;
                button.style.color = 'white';
            } else {
                // Czyścimy kolory poza zakresem
                button.style.backgroundColor = '';
                button.style.color = '';
            }
        }
    });
    }
    updateButtonColors();
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);
                                $('.sentence1bb3').html('');
                                $('.sentence1bb1c').html('');
                                $sentenceDiv.on('click', '.left-buttonbb', function () {
                                    $('.sentence1bb3').html('');
                                    // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                    if (sentence1bb3 === "") {
                                        let sentencePart444b = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bb3 += sentencePart444b + " ";
                                    }
                                    if (sentence1bb1c === "") {
                                        let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bb1c += sentencePart444 + " ";
                                    }
                                    // Dodanie treści do diva wraz z przyciskiem
    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);

                                    // Ustawienie stylu dla przycisków .left-button
                                    $('.left-button').css('position', 'relative');
                                    $('.left-buttonb').css('position', 'relative');
                                    $('.left-buttonbb').css('position', 'relative');
                                    let sentencePart444 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                    // Obsługa kliknięcia przycisku
                                    console.log('Kliknięto przycisk');
                                    let $sentence1bb3 = $sentenceDiv.find('.sentence1bb3');
                                    if ($sentence1bb3.css('display') === 'none') {
                                        sentence1bVisible = false;
                                        sentence1baVisible = true;
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bb3.css('display', 'block');
                                        $sentence1bb3.css({
                                            'margin-top': '-25px',
                                            'top': '24px',
                                            'position': 'relative'
                                        });
                                    }
                                    if ($sentence1bb1c.css('display') === 'none') {
                                        // Pokazujemy zdanie .sentence1b
                                        $sentence1bb1c.css('display', 'block');
                                        $sentence1bb1c.css({
                                            'margin-top': '0px',
                                            'top': '23px',
                                            'position': 'relative'
                                        });
                                    }

                                });
                        });
                    }
                        console.log('wykonuje się teraz5');


                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container3b'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);

                    if (newIndex10 !== null) {
                    const $container2b = $(`.image-container3b[data-lesson="${indexDiv0b}"]`);
                console.log('data-lesson10', $container2b);            

if ($container2b.length > 0) {
        console.log('Usunięto kontener2b o data-lesson', $container2b);
    $container2b.remove();
}
                    }
                                        if (newIndex10d !== null) {
                    const $container2bv = $(`.image-container3b[data-lesson="${indexDiv0d}"]`);
                console.log('data-lesson10', $container2bv);            

if ($container2bv.length > 0) {
        console.log('Usunięto kontener2b o data-lesson', $container2bv);
    $container2bv.remove();
}
                    }
                                                            if (newIndex10b3 !== null) {
                    const $container2bv = $(`.image-container3b[data-lesson="${indexDiv0b}"]`);
                console.log('data-lesson10', $container2bv);            

if ($container2bv.length > 0) {
        console.log('Usunięto kontener2b o data-lesson', $container2bv);
    $container2bv.remove();
}
                    }
                                                                                if (newIndex10dd !== null) {
                    const $container2bv = $(`.image-container3b[data-lesson="${indexDiv0b}"]`);
                console.log('data-lesson10', $container2bv);            

if ($container2bv.length > 0) {
        console.log('Usunięto kontener2b o data-lesson', $container2bv);
    $container2bv.remove();
}
                    }
if (newIndex10d === null) {
    const $container2 = $(`.image-container3b[data-lesson="${indexDiv0 + 1}"], 
                          .image-container3b[data-lesson="${indexDiv0 + 2}"]`);
    if ($container2.length > 0) {
        $container.insertBefore($container2.first());
    } else {
        $('.grid-container').append($container);
    }
}

if (number1) {
    const $container2 = $(`.image-container3b[data-lesson="${indexDiv0b + 1}"]`);
    if ($container2.length > 0) {
        $container.insertBefore($container2.first());
    } else {
        $('.grid-container').append($container);
    }
}

if (newIndex10b4 !== null) {
    const $container2 = $(`.image-container3b[data-lesson="${indexDiv0b + 1}"], 
                          .image-container3b[data-lesson="${indexDiv0b + 2}"]`);
    if ($container2.length > 0) {
        $container.insertBefore($container2.first());
    } else {
        $('.grid-container').append($container);
    }
}


                    const srcWords = [srcWord1, srcWord2, srcWord3];
                    const srcWordsb = [srcWord1d, srcWord2d, srcWord3d];
                    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];
                                            console.log("srcWord1b:", srcWord1d);
console.log("srcWord2b:", srcWord2b);
console.log("srcWord3b:", srcWord3b);
                    const srcWordimage = [srcWord10];
                    // Tworzymy kontenery dynamicznie

                    console.log('hej155', srcWordsb);
                    // Zmienna globalna przechowująca łączny czas trwania wszystkich wideo
                    let videoDurations = [];
                    let totalDuration = 0;
                    for (let i = 0; i < srcWords.length; i++) {
                        const video = document.createElement('video');
                        video.src = srcWords[i];
                        video.addEventListener('loadedmetadata', function () {
                            totalDuration += this.duration;
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

                    
                    function addVideo3(index) {
                            console.log('index44b', indexDiv);

                            // Tworzymy element <video> z atrybutami
                            const $videoElement = $('<video>').attr({
                                'loop': true,
                                'style': 'z-index: 1',
                                'poster': srcWordimage[index] // Dodanie plakatu do wideo
                            });

// Tworzymy kontener dla miniatur
                            const $thumbnailContainer = $('<div>').addClass('thumbnail-container').css({
                                display: 'flex',
                                justifyContent: 'space-between',
                                position: 'absolute',
                                top: '10px',
                                left: '10px',
                                width: '90%', // Kontener zajmuje 90% szerokości wideo
                                zIndex: '2',
                                pointerEvents: 'auto' // Reaguje na zdarzenia
                            });
                            
                            
srcWordsb.forEach((src, idx) => {
    // Miniatura
const $thumbnail = $('<img>').attr({
    src: src,
    class: `thumbnail-${idx + 1}`
}).css({
    width: 'calc(100% - 4px)', // Odejmujemy szerokość ramki (2px z każdej strony)
    cursor: 'pointer',
    border: '2px solid white',
    borderRadius: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    display: 'block' // Zapobiega pustym marginesom obrazka
});
    

const $icons = $('<div></div>').addClass('overlay-icons').css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex', // Flexbox dla ułożenia ikon w linii
    flexDirection: 'row', // Ułożenie ikon w poziomie
    alignItems: 'center', // Centrowanie ikon w pionie
    gap: '10px', // Odstęp między ikonami
    zIndex: 2,  // Zwiększamy zIndex, aby ikony były nad miniaturą, ale nie zasłaniały obramowania
    pointerEvents: 'auto' // Zmiana na auto, aby ikony były klikalne, jeśli potrzebujesz
});
    // Ikony
    // Ikona speaker
const $speakerIcon = $('<img>')
  .attr({
    src: 'https://www.arbulang.com/img/play.png',
    alt: 'Głośnik'
  })
  .css({
    width: '18px',
    height: '18px',
    cursor: 'pointer'
  })
  .on('click', function(e) {
    e.stopPropagation(); // Zapobiegamy propagacji kliknięcia
    
    // Ustawienie plakatu dla wideo
    $videoElement.attr('poster', src);
    $videoElement[0].load();
    
    console.log('Kliknięto speakerIcon dla idx:', idx);

    // Usuwamy wszystkie miniatury, które NIE są klikniętą miniaturą
    $thumbnailContainer.find('img').not(`.thumbnail-${idx + 1}`).remove();

    // Znalezienie klikniętej miniatury i usunięcie samego obrazka
    const $clickedThumbnail = $thumbnailContainer.find(`.thumbnail-${idx + 1}`);
    
    // Tworzymy pusty div zamiast obrazka, aby ramka pozostała
    const $emptyFrame = $('<div></div>')
      .css({
        width: $clickedThumbnail.width(),  // Szerokość taka sama jak miniatura
        height: $clickedThumbnail.height(), // Wysokość taka sama jak miniatura
        border: '2px solid white', // Ramka taka sama jak wcześniej
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
        backgroundColor: 'transparent', // Upewniamy się, że tło jest przezroczyste
        display: 'block' // Zapobiega pustym marginesom obrazka
      });

    // Zamieniamy obrazek na pusty div
    $clickedThumbnail.replaceWith($emptyFrame);

    setTimeout(function () {
      addVideo2bd(idx);
    }, 200);
});
    const $playIcon = $('<img>').attr({
        src: 'https://www.arbulang.com/img/music2.png', // Ikona play
        alt: 'Play'
    }).css({
        width: '20px',
        height: '20px',
        cursor: 'pointer'
    }).on('click', function () {
        // Odtwarzanie wideo po kliknięciu playIcon
        addVideo3(idx); // Przekazanie idx zamiast indexDiv
    });

    // Dodaj ikony do kontenera ikon
    $icons.append($speakerIcon, $playIcon);

    // Dodaj miniaturę i ikony do kontenera miniatury
    const $thumbnailWrapper = $('<div></div>').css({
        position: 'relative', // Pozycjonowanie względne dla poprawnego overlay
        width: '30%', // Każdy wrapper zajmuje 1/3 szerokości
        overflow: 'hidden' // Zapewnia, że overlay nie wychodzi poza miniaturę
    }).append($thumbnail, $icons);

    // Obsługa hover
    $thumbnailWrapper.hover(
        function () {
            $icons.css('display', 'flex'); // Pokaż ikony
        },
        function () {
            $icons.css('display', 'none'); // Ukryj ikony
        }
    );


    

    // Dodaj wrapper do głównego kontenera
    $thumbnailContainer.append($thumbnailWrapper);

                                function addVideo2bd(idx) {
                                    let initialProgress = 0;
                                    console.log('hej80d', idx);

                                    console.log('hej10a', tablica12ab[0]);
                                    // Sprawdź, czy jesteśmy poza zakresem tablicy
                                    if (idx >= srcWords.length && !funkcjaWywolana) {
                                        setTimeout(function () {
                                            $('.progress-bar').remove();
                                        }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
                                        przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                        console.log("wykonuje się");
                                        funkcjaWywolana = true;
                                    }

                                    // Usuń poprzednie wideo
                                    removePreviousVideo();
                                    console.log('hej78', idx);

                                    // Dodaj div z wideo do tła kontenera
                                    const $vidDiv = $('<div>').addClass('background-video22');

                                    // Utwórz element <video> i ustaw atrybuty
                                    const $videoElement = $('<video>').attr({
                                        'autoplay': true, // Automatyczne odtwarzanie wideo
                                        'muted': true, // Wyciszenie dźwięku wideo
                                        'loop': true // Zapętlenie wideo
                                    });
                                    // Utwórz element <source> dla wideo i ustaw atrybuty
                                    const $sourceElement = $('<source>').attr({
                                        'src': srcWords[idx], // Poprawne użycie interpolacji
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
                                    if (idx === 1 || idx === 2) {
                                        function addVideo2bd0(index) {
                                            console.log('hej80dB', idx);

                                            // Usuń poprzednie wideo
                                            removePreviousVideo();
                                            console.log('hej78', idx);

                                            // Dodaj div z wideo do tła kontenera
                                            const $vidDiv = $('<div>').addClass('background-video22');

                                            // Utwórz element <video> i ustaw atrybuty
                                            const $videoElement = $('<video>').attr({
                                                'autoplay': true, // Automatyczne odtwarzanie wideo
                                                'muted': true, // Wyciszenie dźwięku wideo
                                                'loop': true // Zapętlenie wideo
                                            });
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
                                            // Oblicz początkowy postęp na podstawie wszystkich wcześniejszych wideo


                                            console.log('Początkowy postęp dla indeksu:', idx, 'to:', initialProgress);

                                            // Obsługa załadowania metadanych wideo
                                            $videoElement.on('loadedmetadata', function () {
                                                const videoDuration = this.duration;
                                                videoDurations[index] = videoDuration;

                                                // Aktualizacja totalDuration, jeśli jeszcze nie obliczone
                                                if (!totalDuration) {
                                                    totalDuration = videoDurations.reduce((sum, duration) => sum + (duration || 0), 0);
                                                }

                                                tablica12ab.push(videoDuration);
                                                console.log('hej15b', tablica12ab[0]);
                                                // Obsługa postępu w trakcie odtwarzania wideo

                                            });
                                        }
                                        addVideo2bd0(0);
                                    }
                                    setTimeout(function () {
                                        console.log('hej24bc', tablica12ab[0]);
                                    }, 300); // Opóźnienie w milisekundach (tu: 200 ms)
                                    if (idx === 2) {
                                        function addVideo2bd0(idx) {
                                            console.log('hej80dB', idx);

                                            // Usuń poprzednie wideo
                                            removePreviousVideo();
                                            console.log('hej78', idx);

                                            // Dodaj div z wideo do tła kontenera
                                            const $vidDiv = $('<div>').addClass('background-video22');

                                            // Utwórz element <video> i ustaw atrybuty
                                            const $videoElement = $('<video>').attr({
                                                'autoplay': true, // Automatyczne odtwarzanie wideo
                                                'muted': true, // Wyciszenie dźwięku wideo
                                                'loop': true // Zapętlenie wideo
                                            });
                                            // Utwórz element <source> dla wideo i ustaw atrybuty
                                            const $sourceElement = $('<source>').attr({
                                                'src': srcWords[idx], // Poprawne użycie interpolacji
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
                                            // Oblicz początkowy postęp na podstawie wszystkich wcześniejszych wideo

                                            console.log('Początkowy postęp dla indeksu:', idx, 'to:', initialProgress);

                                            // Obsługa załadowania metadanych wideo
                                            $videoElement.on('loadedmetadata', function () {
                                                const videoDuration = this.duration;
                                                videoDurations[idx] = videoDuration;

                                                // Aktualizacja totalDuration, jeśli jeszcze nie obliczone
                                                if (!totalDuration) {
                                                    totalDuration = videoDurations.reduce((sum, duration) => sum + (duration || 0), 0);
                                                }
                                                console.log('hej15', videoDuration);
                                                tablica12ad.push(videoDuration);
                                                tablica12abc[0] = tablica12ab[0] + tablica12ad[0];
                                                // Obsługa postępu w trakcie odtwarzania wideo

                                            });
                                        }
                                        addVideo2bd0(1);
                                    }

                                    console.log('hej24bci', tablica12ad[0]);
                                    console.log('hej24bcl', tablica12abc[0]);
                                    let currentIndexValue = [];


                                    $videoElement.on('loadedmetadata', function () {
                                        const videoDuration = this.duration;
                                        videoDurations[idx] = videoDuration;
                                        console.log('tablica77', totalDuration);
                                        $videoElement.on('timeupdate', function () {
                                            let adjustedProgress = 0;

                                            adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[idx] / totalDuration) * 100;
                                            console.log('hej22cd', idx);
                                            if (idx === 0) {
                                                let startPosition = 0;  // Przykład: start na początku
                                                let startPositionPercentage = (startPosition / totalDuration) * 100; // Przeliczenie na procent
                                                console.log('hej24b1', startPositionPercentage);
                                                updateProgress2(startPositionPercentage, adjustedProgress);
                                            }
                                            if (idx === 1) {
                                                setTimeout(function () {
                                                    let startPosition = tablica12ab[0];  // Przykład: start na określonej wartości
                                                    let startPositionPercentage = (startPosition / totalDuration) * 100; // Przeliczenie na procent
                                                    console.log('hej24b2', startPositionPercentage);
                                                    updateProgress2(startPositionPercentage, adjustedProgress);
                                                }, 800); // Opóźnienie w milisekundach
                                            }
                                            if (idx === 2) {
                                                let startPosition = tablica12abc[0];  // Przykład: start na określonej wartości
                                                let startPositionPercentage = (startPosition / totalDuration) * 100; // Przeliczenie na procent
                                                console.log('hej24b3', startPositionPercentage);
                                                updateProgress2(startPositionPercentage, adjustedProgress);
                                            }

                                            console.log('hej22cdi', startPosition);
                                            // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                            if (!currentIndexValue.includes(idx)) {
                                                // Dodaj index do tablicy currentIndex
                                                currentIndexValue.push(idx);
                                                console.log('hej70', currentIndexValue);

                                                // Wywołaj funkcję addBackgroundToText tylko raz
                                                if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                                                }
                                            }

                                            // Sprawdź, czy wideo zostało zakończone
                                            if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                                console.log('Wideo zakończone, uruchamiam następne.');
                                                // Odtwórz następne wideo po zakończeniu poprzedniego
                                                addVideo2bd(idx + 1);
                                            }
                                        });
                                    });

                                    addScenes(index);
                                    // Dodaj wideo do kontenera
                                    $vidDiv.appendTo($container);



                                    // Inicjalizacja paska postępu
                                    const $progressBar2 = $('<div>').addClass('progress-bar2');
                                    if (window.matchMedia("(min-width: 999px)").matches) {
                                        $progressBar2.css({
                                            'position': 'absolute',
                                            'z-index': '2',
                                            'bottom': '0',
                                            'height': '7px', // Wysokość paska postępu
                                            'background-color': 'green', // Kolor paska postępu
                                            'margin-bottom': '-2%',
                                            'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
                                        });
                                    } else {
                                        $progressBar2.css({
                                            'position': 'absolute',
                                            'z-index': '2',
                                            'bottom': '0px',
                                            'height': '7px', // Wysokość paska postępu
                                            'background-color': 'green'
                                        });
                                    }
                                    function updateProgress2(startPosition, adjustedProgress) {
                                        console.log('hej122', startPosition);
                                        // Zaktualizuj pasek postępu: szerokość będzie zależna od startowej pozycji oraz postępu
                                        $('.progress-bar2').css('left', startPosition + '%'); // Ustawienie lewej krawędzi paska postępu
                                        $('.progress-bar2').css('width', adjustedProgress + '%'); // Ustawienie szerokości paska postępu
                                    }
                                    $progressBar2.appendTo($container);

                                    function addScenes(index) {
                                        // Sprawdź, czy istnieje element <div> o klasie 'scene-description'
                                        let $sceneDiv = $container.find('.scene-description');

                                        if ($sceneDiv.length) {
                                            // Jeśli istnieje, wyczyść jego zawartość
                                            $sceneDiv.empty();
                                        } else {
                                            // Jeśli nie istnieje, stwórz nowy element <div>
                                            $sceneDiv = $('<div>').addClass('scene-description').appendTo($container);
                                        }

                                        // Dodaj nowy tekst do <div>
                                        $sceneDiv.text(`Scena z filmu ${srcWords2[index]}`);

                                        if (window.matchMedia("(max-width: 999px)").matches) {
                                            if (indexDiv % 2 === 0) {
                                                console.log('Warunek podzielności przez 2 spełniony2');
                                                // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                                $sceneDiv.css({
                                                    'position': 'relative',
                                                    'margin-top': '-140px',
                                                    'margin-left': '-450px',
                                                    'text-align': 'left',
                                                    'background-color': 'orange',
                                                    'z-index': '9999999'
                                                });
                                            } else if (indexDiv % 1 === 0 || indexDiv % 3 === 0 || indexDiv % 5 === 0) {
                                                console.log('Warunek podzielności przez 1 spełniony2');
                                                // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                                $sceneDiv.css({
                                                    'position': 'relative',
                                                    'margin-top': '-140px',
                                                    'margin-right': '-20px',
                                                    'text-align': 'left',
                                                    'background-color': 'blue',
                                                    'z-index': '99999999999'
                                                });
                                            }
                                        } else if (window.matchMedia("(min-width: 999px)").matches) {
                                            // Dodatkowe style, jeśli indexDiv jest podzielny przez 4
                                            if (indexDiv % 4 === 1) {
                                                // Dodaj klasę 'scene-description2' do $sceneDiv
                                                $sceneDiv.removeClass('scene-description');
                                                $sceneDiv.addClass('scene-description2');
                                            } else {
                                                // Upewnij się, że klasa 'scene-description2' jest usunięta, jeśli nie jest podzielna przez 4
                                                $sceneDiv.removeClass('scene-description2');
                                            }
                                        }
                                    }
// Tworzenie przycisku "Stop"
                                    if (!stopButtonAdded) {
                                        const $stopButton = $('<img>')
                                                .attr('src', 'https://www.arbulang.com/img/stopok2.png')
                                                .css({
                                                    'display': 'none', // Ukryty na starcie
                                                    'position': 'absolute', // Precyzyjne pozycjonowanie względem kontenera
                                                    'top': '-15px',
                                                    'left': '20px',
                                                    'width': '40px',
                                                    'height': '40px',
                                                    'z-index': '999999',
                                                    'cursor': 'pointer' // Ustawienie kursora jako wskaźnik
                                                })
                                                .on('click', function () {
                                                    // Pętla po wszystkich elementach wideo i zatrzymywanie każdego z nich
                                                    $('video').each(function () {
                                                        const video = this;
                                                        if (!video.paused) {
                                                            video.pause();
                                                            // Zmień obrazek na "Play"
                                                            $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
                                                        } else {
                                                            video.play();
                                                            // Zmień obrazek z powrotem na "Stop"
                                                            $stopButton.attr('src', 'https://www.arbulang.com/img/stopok2.png');
                                                        }
                                                    });
                                                });

                                        // Dodanie przycisku do kontenera
                                        $stopButton.appendTo($container);

                                        // Pokazywanie przycisku na hover kontenera
                                        $container.on('mouseover', function () {
                                            $stopButton.show();
                                        });

                                        // Ukrywanie przycisku, gdy mysz opuści kontener
                                        $container.on('mouseout', function () {
                                            $stopButton.hide();
                                        });

                                        stopButtonAdded = true;  // Flaga ustawiona na true, gdy przycisk został dodany
                                    }
                                }
                            });

                            // Tworzymy element <div> dla nakładki
                            const $overlay = $('<div>').addClass('overlay');

                            // Tworzymy przycisk w overlay
                            const $buttonb = $('<img>').attr({
                                'src': 'https://www.arbulang.com/img/startsystem.png',
                                'class': 'overlay-button'
                            });
if (window.matchMedia("(max-width: 999px)").matches) {
                                            if (indexDiv % 2 === 0) {
                                                console.log('Warunek podzielności przez 2 spełniony2');
                                                // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                                $buttonb.css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '140px',
                                'width': '20px',
                                'height': '20px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                                                });
                                            } else if (indexDiv % 2 !== 0) {
                                                console.log('Warunek podzielności przez 1 spełniony2');
                                                // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                                $buttonb.css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '10px',
                                'width': '20px',
                                'height': '20px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                                                });
                                            }
                                        } else if (window.matchMedia("(min-width: 999px)").matches) {
                                            // Dodatkowe style, jeśli indexDiv jest podzielny przez 4
                                            if (indexDiv % 4 === 0) {
                                                $buttonb.css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '10px',
                                'width': '20px',
                                'height': '20px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                                                });
                                            }
                                        }
                            // Dodajemy elementy do kontenera
                            $container.append($thumbnailContainer); // Miniatury
                            $container.append($videoElement); // Wideo
                            $container.append($overlay); // Nakładka
                            $container.append($buttonb); // Przycisk w nakładce
                            // Dodaj funkcję hover do kontenera
                            if (indexDiv < 18) {
                                // Jeśli indexDiv < 5, dodajemy hover z dynamicznym napisem
                                $container.hover(function () {
                                    $('.overlay', this).css('transform', 'translateX(0)');

                                    // Twórz nowy dynamiczny div z napisem
                                    const $dynamicDiv = $('<div>').addClass('dynamic-div').text('Lekcja dostępna - otwórz');
                                    // Dodaj dynamiczny div do kontenera
                                    $dynamicDiv.appendTo($(this)).fadeIn(300);
                                }, function () {
                                    $('.overlay', this).css('transform', 'translateX(100%)');

                                    // Usuń dynamiczny div po zakończeniu hovera
                                    $('.dynamic-div', this).fadeOut(300, function () {
                                        $(this).remove();
                                    });
                                });
                            }
                                                        if (indexDiv < 20 && indexDiv > 17) {
                                // Jeśli indexDiv < 5, dodajemy hover z dynamicznym napisem
                                $container.hover(function () {
                                    $('.overlay', this).css('transform', 'translateX(0)');

                                    // Twórz nowy dynamiczny div z napisem
                                    const $dynamicDiv2 = $('<div>').addClass('dynamic-div2').text('Nowa lekcja - już dostępna');
                                    // Dodaj dynamiczny div do kontenera
                                    $dynamicDiv2.appendTo($(this)).fadeIn(300);
                                }, function () {
                                    $('.overlay', this).css('transform', 'translateX(100%)');

                                    // Usuń dynamiczny div po zakończeniu hovera
                                    $('.dynamic-div2', this).fadeOut(300, function () {
                                        $(this).remove();
                                    });
                                });
                            }

                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                        }
                        if ((newIndex !== 0 && newIndex10d === null) || (newIndex === 0 && newIndex10d === null)) {
                        setTimeout(function () {
                            addVideo3(0);
                        }, 100);
                    }

                    // Stwórz przycisk za pomocą jQuery
                    // Tworzenie nowego elementu div za pomocą jQuery

                   if ((index50 === 0 && buttonindex)) {
    var $sentenceDivB = $('<div></div>');
    $sentenceDivB.addClass('sentenceBA');

    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';

    $sentenceDivB.html(`
<div class="sentence-blockB" data-name="${id1}">
    ${sentence10}${sentence11}<br>
    <div class="sentence1b">${sentence1b}</div>
    <div class="sentence1b2">${sentence1b2}</div>
</div>

<div class="sentence-blockB" data-name="${id2}">
    ${sentence20}${sentence22}<br>
    <div class="sentence1b2a">${sentence1b2a}</div>
    <div class="sentence1b22">${sentence1b22}</div>
</div>

<div class="sentence-blockB" data-name="${id3}">
    ${sentence30}${sentence33}<br>
    <div class="sentence1c2a">${sentence1c2a}</div>
    <div class="sentence1c22">${sentence1c22}</div>
</div>
`);
                        $sentenceDivB.css({
                            'position': 'absolute',
                            'margin-top': '40px',
                            'text-align': 'center',
                            'z-index': '100'
                        });
                    } else if (newIndex === 0 && newIndex5 === 0 || newIndex10d === 0 || newIndex10 === 0 || newIndex10b4 === 0 || (newIndex !== 0 && newIndex10d === null)) {
    var $sentenceDiv = $('<div></div>');
    $sentenceDiv.addClass('sentence');

    // Pobieramy nazwy (id[1]) do atrybutów
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';

    $sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bba">${sentence1bbab}</div>
</div>

<div class="sentence-block" data-name="${id2}">
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
</div>

<div class="sentence-block" data-name="${id3}">
    <button class="left-buttonbb third-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <div class="sentence1bb3">${sentence1bb3}</div>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
</div>
`);

    $sentenceDiv.css({
        'position': 'absolute',
        'margin-top': '-50px',
        'text-align': 'center',
        'z-index': '5'
    });
}

// Tworzenie przycisku
const $button = $('<button></button>')
    .addClass('run-button')
    .text('Uruchom-działa') // Tekst przycisku
    .attr('data-index2', indexDiv)
    .on('click', function () {
        const index5 = $(this).attr('data-index2');
        const index55 = parseInt(index5, 10);

        setTimeout(() => {
            console.log('Kliknięto przycisk o indeksie:', index55);
            przekazArgument0(
                tablica7[0], tablica3[2], index55,
                true, tablica3[0], true, true,
                tablica3[1], tablica3[4],
                false, '', '', '', '', '100', '', '', '', false, true, false
            );
        }, 100);
    });

// Stylowanie przycisku – widoczny od razu
$button.css({
    'position': 'absolute',
    'right': '-200px',       // Dopasuj pozycję według potrzeb
    'top': '5px',
    'font-size': '10px',
    'height': '30px',
    'width': '170px',
    'color': 'blue',
    'background-color': 'white',
    'z-index': '12',         // Wyższy niż inne elementy
    'border': '1px solid #aaa',
    'cursor': 'pointer'
});

// Dodanie przycisku do kontenera – OD RAZU po jego stworzeniu
$container.append($button);

                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDiv);
                    tablica11.push(srcWords);
                    console.log('hej6', tablica11);
console.log('wykonuje się teraz');
                }
                }