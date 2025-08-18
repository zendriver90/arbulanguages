const searchInput = document.querySelector("[data-search]");
console.log("Element input:", searchInput); // Sprawdzenie, czy input istnieje

let matchingKeys = [];
let matchingKeysB = [];
let searchKey = "key"; // Domyślnie angielski
let searching1 = false;
let searching2 = false;
let polskiButton = document.getElementById("polski");
let angielskiButton = document.getElementById("angielski");

polskiButton.addEventListener("click", function () {
    searchKey = "key2"; // Przełączamy na polski
    console.log("Przełączono na polski, używam klucza:", searchKey);
    isSearching = true;

    findMatchingKeys(fiszki, document.getElementById("search")?.value.toLowerCase().trim(), searchKey);
    matchingLessons5 = findLessonsForWords(fiszki, searchKey);
    matchingLessons5b = findLessonsForWordsB(fiszki, searchKey);

    przekazArgument0(tablica7[0], tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
});

angielskiButton.addEventListener("click", function () {
    searchKey = "key"; // Przełączamy na polski
    console.log("Przełączono na polski, używam klucza:", searchKey);
    isSearching = true;

    findMatchingKeys(fiszki, document.getElementById("search")?.value.toLowerCase().trim(), searchKey);
    matchingLessons5 = findLessonsForWords(fiszki, searchKey);
    matchingLessons5b = findLessonsForWordsB(fiszki, searchKey);

    przekazArgument0(tablica7[0], tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
});

function updateSearch() {
    const searchValue = document.getElementById("search")?.value.toLowerCase().trim();
    if (!searchValue) {
        console.log("Pole wyszukiwania jest puste.");
        return;
    }
    findMatchingKeys(fiszki, searchValue, searchKey);
}

function findMatchingKeys(fiszki, searchValue, searchKey) {
    console.log("Rozpoczynam filtrowanie fiszek dla frazy:", searchValue, "przy użyciu klucza:", searchKey);

    matchingKeys = fiszki
        .filter(fiszka => {
            let keyValue = fiszka[searchKey];

            if (Array.isArray(keyValue)) {
                // Sprawdzamy, czy którykolwiek element tablicy zaczyna się od searchValue
                return keyValue.some(value => value.toLowerCase().startsWith(searchValue));
            } else if (typeof keyValue === "string") {
                // Normalne sprawdzenie dla stringów
                return keyValue.toLowerCase().startsWith(searchValue);
            }
            return false;
        })
        .map(fiszka => fiszka[searchKey]);
showMatchingButtons();
    matchingKeysB = [...matchingKeys];

    console.log("Pasujące słowa:", matchingKeys);
    console.log("Pasujące słowa2:", matchingKeysB);
}

function findLessonsForWords(fiszki, searchKey) {
    let lessonIds = new Set();

    fiszki.forEach(fiszka => {
        if (!fiszka[searchKey] || !fiszka.id) return;
        if (matchingKeys.includes(fiszka[searchKey])) {
            lessonIds.add(fiszka.id[1]);
        }
    });

    console.log("Lekcje zawierające szukane słowo:", Array.from(lessonIds));
    return Array.from(lessonIds);
}

function findLessonsForWordsB(fiszki, searchKey) {
    let lessonIdsB = new Set();

    fiszki.forEach(fiszka => {
        if (!fiszka[searchKey] || !fiszka.id) return;
        if (matchingKeysB.includes(fiszka[searchKey])) {
            lessonIdsB.add(fiszka.id[0]);
        }
    });
    console.log("Wybrany rodzaj555: ", matchingKeysB);
    console.log("Ustawienia fiszek5:", Array.from(lessonIdsB));
    return Array.from(lessonIdsB);
}

let isSearching = false;
let isSearching2 = false;
let tablica40 = [];
let tablica41 = [];
let staraTablica40 = null;

polskiButton.addEventListener("click", function () {
    searchInput.placeholder = "przykład"; 
});

angielskiButton.addEventListener("click", function () {
    searchInput.placeholder = "example"; 
});
searchInput.placeholder = "example"; 
searchInput?.addEventListener("input", (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    if (!searchTerm) {
        console.log("Pusty input - przerywamy");
        matchingKeys = [];
        tablica40 = [];
        return;
    }

    findMatchingKeys(fiszki, searchTerm, searchKey);
    matchingLessons5 = findLessonsForWords(fiszki, searchKey);
    matchingLessons5b = findLessonsForWordsB(fiszki, searchKey);

    let nowaTablica40 = Array.isArray(matchingLessons5b) ? matchingLessons5b.flat() : [];

    if (tablica40.length > 0) {
        staraTablica40 = [...tablica40];
        console.log('Stara tablica (zanim zmienimy):', staraTablica40);
    }

    tablica40 = [...nowaTablica40];
    let pominiete = (staraTablica40 || []).filter(num => !nowaTablica40.includes(num));
    console.log('Pominięte numery:', pominiete);

    if (searchTerm.length === 1) {
        isSearching = true;
        console.log("Rozpoczęto wyszukiwanie:", isSearching);
    }
    if (searchTerm.length === 0) {
        isSearching = false;
        if (isSearching2) {
        przekazArgument0(tablica3[2], '', false, '', true, true, tablica3[1], tablica3[4], false, null, null, false, staraTablica40);
        }
        console.log("Pusty input - przerywamy");
        matchingKeys = [];
        tablica40 = []; // Resetujemy tablicę
        przekazArgument0(tablica3[2], '', false, 'fiszki', true, true, tablica3[1], tablica3[4], false, '', '');
        return;
    }
    document.getElementById("singleSentenceBtn")?.addEventListener("click", () => {
        tablica3[0] = 'zdania';
        przekazArgument0(tablica7[0], tablica3[2], '', false, 'zdania', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
    });

    document.getElementById("threeSentencesBtn")?.addEventListener("click", () => {
        tablica3[0] = 'fiszki';
        przekazArgument0(tablica7[0], tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
    });
polskiButton.addEventListener("click", function () {
przekazArgument0(tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
});
    przekazArgument0(tablica7[0], tablica3[2], '', false, tablica3[0], false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40, '100', '', '');
});
function displayKey3ForKey(word, container) {
    // Szukamy fiszki, której właściwość 'key' lub 'key2' odpowiada podanemu słowu.
    const foundFiszka = fiszki10.find(fiszka =>
        fiszka.key === word || fiszka.key2 === word
    );

    if (!foundFiszka) {
        container.textContent = "Nie znaleziono fiszki";
        return;
    }

    let keyList, headerText, englishMode = false;
    
    // Jeśli użytkownik wpisał słówko angielskie (czyli znajduje się w key)
    if (foundFiszka.key === word && Array.isArray(foundFiszka.key3)) {
        keyList = foundFiszka.key3;
        headerText = foundFiszka.key2; // wyświetlamy angielskie słówko jako nagłówek
        englishMode = true;
    }
    // Jeśli użytkownik wpisał (lub funkcja jest wywołana z) polskie słówko – czyli key2
    else if (foundFiszka.key2 === word && Array.isArray(foundFiszka.key4)) {
        keyList = foundFiszka.key4;
        headerText = foundFiszka.key; // nagłówek to polskie słówko
                englishMode = false;
    } else {
        container.textContent = "Brak dodatkowych słów";
        return;
    }
    
    // Czyścimy zawartość kontenera i ustawiamy klasę
    container.innerHTML = "";
    container.classList.add("fiszka-container");
    
    // Nagłówek – główne słówko (tryb angielski: key; tryb polski: key2)
    const headerDiv = document.createElement("div");
    headerDiv.textContent = headerText;
    headerDiv.className = "fiszka-word";
    container.appendChild(headerDiv);
    
    // Kontener na przyciski synonimów (dla angielskiego: key3, dla polskiego: key4)
    const rowDiv = document.createElement("div");
    rowDiv.style.display = "flex";
    rowDiv.style.justifyContent = "space-between";
    rowDiv.style.marginTop = "10px";

    // Lewa kolumna – przyciski synonimów
    const leftColumn = document.createElement("div");
    leftColumn.style.display = "flex";
    leftColumn.style.flexWrap = "wrap";
    leftColumn.style.alignItems = "center";
    
    keyList.forEach(item => {
        const btn = document.createElement("button");
        btn.textContent = item;
        btn.className = "matching-button";
        btn.style.margin = "2px";
        btn.addEventListener("click", () => {
            console.log("Kliknięto:", item);
        });
        leftColumn.appendChild(btn);
    });
    
    rowDiv.appendChild(leftColumn);

    // W trybie angielskim dodajemy dodatkowy przycisk,
    // który przełącza widok tak, jakby użytkownik wpisał słówko po polsku
    if (englishMode) {
        const rightColumn = document.createElement("div");
        rightColumn.style.display = "flex";
        rightColumn.style.flexDirection = "column";
        rightColumn.style.alignItems = "stretch";

        const showPolishButton = document.createElement("button");
        showPolishButton.textContent = "pokaż słówko po polsku";
        showPolishButton.className = "fiszka-button";
        showPolishButton.style.marginBottom = "5px";
        showPolishButton.style.width = "150px";

        // Po kliknięciu wywołujemy funkcję ponownie, przekazując wartość key2 jako argument.
        showPolishButton.addEventListener("click", () => {
            displayKey3ForKey(foundFiszka.key2, container);
        });

        rightColumn.appendChild(showPolishButton);
        rowDiv.appendChild(rightColumn);
    }
    
    container.appendChild(rowDiv);
}

function showMatchingButtons() {
    const container = document.getElementById("matchingButtonsContainer");
    if (!container) {
        console.warn("Brak kontenera #matchingButtonsContainer w HTML");
        return;
    }

    container.innerHTML = "";

    for (let i = 0; i < matchingKeys.length; i++) {
        const key = matchingKeys[i];
        const key2 = matchingKeysB[i];
console.log("Kliknięto key2:", key2);
        // GŁÓWNY WSPÓLNY kontener - jedna linia: key + synonimy
        const rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        rowDiv.style.flexWrap = "wrap";
        rowDiv.style.alignItems = "center";
        rowDiv.style.marginBottom = "10px";

        // Przycisk główny (key)
        const keyBtn = document.createElement("button");
        keyBtn.textContent = key;
        keyBtn.className = "matching-button";
        keyBtn.style.margin = "5px";
        keyBtn.addEventListener("click", () => {
            console.log("Kliknięto key2:", key2);
        });
        rowDiv.appendChild(keyBtn);

        // Kontener na synonimy key3 / key4
        const key3Container = document.createElement("div");
        key3Container.style.display = "flex";
        key3Container.style.flexWrap = "wrap";
        key3Container.style.gap = "5px";
        key3Container.style.marginLeft = "10px";

        // Dodajemy do wspólnego kontenera
        rowDiv.appendChild(key3Container);
        container.appendChild(rowDiv);

        // Wypełniamy synonimami
        displayKey3ForKey(key, key3Container);
    }

    if (matchingKeys.length === 0) {
        container.innerHTML = "<p>Brak wyników</p>";
    }
}

// Przykładowe wywołanie funkcji
showMatchingButtons();
// Przykładowe wywołanie

document.getElementById("singleWordBtn").addEventListener("click", function() {
    console.log("Kliknięto singleWordBtn");
isSearching2 = true;

    console.log("Wyświetlam zawartość tablica40 (tylko raz):", tablica40);

    function showFiszkiForLesson5dd(tablica40, tablica41, fiszki) {
        console.log("Wybrany rodzaj: ", tablica40);

        setTimeout(() => {
            let matchingFiszki122 = [];

            tablica40.forEach(t40 => {
                fiszki.forEach(fiszka => {
                    if (fiszka.id[0] === t40) {
                        matchingFiszki122.push(fiszka); // Zapisujemy cały obiekt, nie tylko fiszka.id
                    }
                });
            });

            console.log("Wyświetlam:", matchingFiszki122);

            // Przykładowe użycie funkcji generateFiszkaBlock3
            matchingFiszki122.forEach(fiszka => {
                generateFiszkaBlock3(fiszka, "lessonId2"); // Przekazujemy cały obiekt fiszka
            });

        }, 1000);
    }

    setTimeout(() => {
        showFiszkiForLesson5dd(tablica40, tablica41, fiszki);
    }, 1000);
});



    // Dodanie zdarzenia kliknięcia do przycisku
document.getElementById("singleSentenceBtn").addEventListener("click", () => {
    searching1 = true;
    function showFiszkiForLesson5ddb(tablica40, tablica41, fiszki) {
    console.log("Wybrany rodzaj: ", tablica40);

    setTimeout(() => {
        let idFiszki = [];

        // Pobieranie id pasujących do tablica40
        tablica40.forEach(t40 => {
            fiszki.forEach(fiszka => {
                if (fiszka.id[0] === t40) {
                    idFiszki.push(fiszka.id); // Zapisujemy cały obiekt
                }
            });
        });

        console.log("Wyświetlam4:", idFiszki);

        // Podział na mniejsze grupy po 3 elementy
        let chunkedIdFiszki = [];
        for (let i = 0; i < idFiszki.length; i += 3) {
            chunkedIdFiszki.push(idFiszki.slice(i, i + 3));
        }

        console.log("Podzielone grupy ID:", chunkedIdFiszki);

        // Usuwanie każdej grupy osobno
        chunkedIdFiszki.forEach(group => {
            removeFiszka(group);
        });

    }, 0);
}

function removeFiszka(idFiszkiGroup) {
    idFiszkiGroup.forEach(singleId => {
        // Jeśli singleId jest tablicą, łączymy jej elementy separatorem ','
        let idString = Array.isArray(singleId) ? singleId.join(',') : singleId;
        const className = `fiszka5 fiszka-${idString}`;
        
        // Escape'owanie przecinków w selektorze CSS
        const selector = `.${className.replace(/,/g, '\\,').replace(/\s+/g, '.')}`; 

        console.log("Wyświetlam4b:", selector);
    
        const $fiszkaToRemove = $('.grid-container').find(selector);
        if ($fiszkaToRemove.length) {
            console.log('Element znaleziony po opóźnieniu, usuwam...');
            $fiszkaToRemove.remove();
        } else {
            console.log('Element nadal nie znaleziony.');
        }
    });
}

        setTimeout(() => {
        showFiszkiForLesson5ddb(tablica40, tablica41, fiszki);
    }, 0);
        tablica3[0] = 'zdania';
        przekazArgument0(tablica7[0], tablica3[2], '', false, 'zdania', true, true, tablica3[1], tablica3[4], false, '', '');
    });
        // Dodanie zdarzenia kliknięcia do przycisku
document.getElementById("threeSentencesBtn").addEventListener("click", () => {
searching2 = true;
function showFiszkiForLesson5ddb(tablica40, tablica41, fiszki) {
    console.log("Wybrany rodzaj: ", tablica40);

    setTimeout(() => {
        let idFiszki = [];

        // Pobieranie id pasujących do tablica40
        tablica40.forEach(t40 => {
            fiszki.forEach(fiszka => {
                if (fiszka.id[0] === t40) {
                    idFiszki.push(fiszka.id); // Zapisujemy cały obiekt
                }
            });
        });
        console.log("Wyświetlam4:", idFiszki);

        // Podział na mniejsze grupy po 3 elementy
        let chunkedIdFiszki = [];
        for (let i = 0; i < idFiszki.length; i += 3) {
            chunkedIdFiszki.push(idFiszki.slice(i, i + 3));
        }

        console.log("Podzielone grupy ID:", chunkedIdFiszki);

        // Usuwanie każdej grupy osobno
        chunkedIdFiszki.forEach(group => {
            removeFiszka(group);
        });

    }, 0);
}

function removeFiszka(idFiszkiGroup) {
    idFiszkiGroup.forEach(singleId => {
        // Jeśli singleId jest tablicą, łączymy jej elementy separatorem ','
        let idString = Array.isArray(singleId) ? singleId.join(',') : singleId;
        const className = `fiszka5 fiszka-${idString}`;
        
        // Escape'owanie przecinków w selektorze CSS
        const selector = `.${className.replace(/,/g, '\\,').replace(/\s+/g, '.')}`; 

        console.log("Wyświetlam4b:", selector);
    
        const $fiszkaToRemove = $('.grid-container').find(selector);
        if ($fiszkaToRemove.length) {
            console.log('Element znaleziony po opóźnieniu, usuwam...');
            $fiszkaToRemove.remove();
        } else {
            console.log('Element nadal nie znaleziony.');
        }
    });
}

        setTimeout(() => {
        showFiszkiForLesson5ddb(tablica40, tablica41, fiszki);
    }, 0);

        tablica3[0] = 'fiszki';
    przekazArgument0(tablica7[0], tablica3[2], '', false, 'fiszki', true, true, tablica3[1], tablica3[4], false, '', '');
    });