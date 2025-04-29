let initialSpecificLesson2Ref;
let specificLesson2Ref;
let lastClickedIndex = null;
let lastApprovedIndex = null;
let approvedIndexes = [];
let approvedColors = [];

let index10 = [];

if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
    console.log("Znaleziono fiszki, liczba wpisów:", fiszka.entries.length);

    let filteredEntries = fiszka.entries;

    // Sprawdzamy czy w ogóle występują wpisy z kategorią "sport"
    const containsSport = fiszka.entries.some(entry => entry.category.includes("sport"));

    if (containsSport) {
        // Jeśli tak, to ograniczamy listę do pierwszych 3 wpisów
        filteredEntries = fiszka.entries
            .filter(entry => entry.category.includes("sport"))
            .slice(0, 3); // tylko pierwsze 3
    }

    const storyButtonContainer = $('<div>');
    let lastClickedButton;

    const randomButtonIndex = 0; // Zawsze pierwszy, bo nie losujemy
    console.log("Wybrany indeks przycisku:", randomButtonIndex);
    index10.push(randomButtonIndex);

    filteredEntries.forEach((entry, index) => {
        console.log(`Przetwarzanie fiszki nr ${index}:`, entry);

        const displayText = entry.category.join(", ");

        const storyButton = $('<button>')
            .text(displayText)
            .addClass('story_button')
            .click(function () {
                console.log("Kliknięto przycisk dla fiszki nr:", index);

                const idFiszki = entry.id || index;

                showStory(index, idFiszki);
                lastClickedIndex = index;

                if (lastClickedButton) {
                    lastClickedButton.removeClass('green-button');
                }

                $('.story_button').removeClass((index, className) => (className.match(/imgIndex-\d+/g) || []).join(' '));
                $('.fiszka').addClass('imgIndexNull').removeClass('imgIndex-0 imgIndex-1 imgIndex-2 imgIndex-3 imgIndex-4 ');

                $(this).addClass('green-button');
                $('.story_button').removeClass('active-button');
                $(this).addClass('active-button');

                $('.story_button').each(function (index) {
                    if ($(this).hasClass('orange-button')) {
                        $(this).removeClass('green-button');
                        $(this).addClass('orange-button');
                    }
                });

                if (approvedIndexes.includes(lastClickedIndex)) {
                    fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
                }

                lastClickedButton = $(this);
                handleLikeButtonClick();
            });

        if (index === randomButtonIndex) {
            specificLesson2Ref = entry.img[index];
            console.log('Zaktualizowano specificLesson2Ref:', specificLesson2Ref);
            storyButton.addClass('green-button');
            lastClickedButton = storyButton;
            lastApprovedIndex = index;
        }

        storyButtonContainer.append(storyButton);
        console.log(`Dodano przycisk do kontenera dla fiszki nr ${index}`);
    });

    fiszkaContainer.append(storyButtonContainer);
    console.log("Przyciski zostały dodane do kontenera");

    const idFiszki = filteredEntries[randomButtonIndex].id || randomButtonIndex;
    showStory(index10, idFiszki);
    console.log(`Wywołano showStory dla przycisku: ${randomButtonIndex} z id.fiszki: ${idFiszki}`);
}

// Wywołaj funkcję z otrzymaną wartością
function wybierzRodzaj(category, parametr) {
    console.log("Wybrany rodzaj słownictwa: " + category);

    const matchingLessons = [];

    // Sprawdzenie, czy kategoria to 'all'
    if (category === 'all') {
        // Dodaj wszystkie lekcje do matchingLessons
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
            // Sprawdzanie, czy fiszka ma poprawne id
            if (fiszka.id && fiszka.id[1]) {
                // Sprawdzanie, czy id już jest w matchingLessons, aby uniknąć duplikatów
                if (!matchingLessons.includes(fiszka.id[1])) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    } else {
    // Iteracja przez fiszki
    for (const fiszka of fiszki) {
        console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
if (fiszka.category !== 'all') {
        // Sprawdzenie, czy kategoria fiszki nie jest równa 'all'
        if (fiszka.category !== 'all') {
            // Sprawdzenie, czy fiszka pasuje do zadanej kategorii
            const isInCategory2 = fiszka.category2 && fiszka.category2.includes(category);
            const isInCategory3 = fiszka.category3 && fiszka.category3.includes(category);

            // Jeśli fiszka pasuje do zadanej kategorii, dodaj numer lekcji do tablicy matchingLessons
            if (isInCategory2 || isInCategory3) {
                console.log(`Znaleziono fiszkę z kategorią "${category}" w lekcji ${JSON.stringify(fiszka)}`);
                if (fiszka.id && fiszka.id[1]) {
                    matchingLessons.push(fiszka.id[1]);
                }
            }
        }
    }
}
    }

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(parametr, parametr+1);
        // Wyświetl fiszki dla każdej znalezionej lekcji
        // Wyświetl fiszki dla kolejnych 3 lekcji
        console.log('Wyświetlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson(lessonId, fiszki, category);
        });
        localStorage.setItem('wylosowaneLekcje', JSON.stringify(nextThreeLessons));
    } else {
        console.log(`Nie znaleziono fiszek z kategorią "${category}".`);
    }
}

                                                                                    if (indexDiv < 18 && indexDiv >= 17) {
                                // Jeśli indexDiv < 5, dodajemy hover z dynamicznym napisem
                                $container.hover(function () {
                                    $('.overlay', this).css('transform', 'translateX(0)');

                                    // Twórz nowy dynamiczny div z napisem
                                    const $dynamicDiv2 = $('<div>').addClass('dynamic-div3').text('Nowa lekcja - w przygotowaniu');
                                    // Dodaj dynamiczny div do kontenera
                                    $dynamicDiv2.appendTo($(this)).fadeIn(300);
                                }, function () {
                                    $('.overlay', this).css('transform', 'translateX(100%)');

                                    // Usuń dynamiczny div po zakończeniu hovera
                                    $('.dynamic-div3', this).fadeOut(300, function () {
                                        $(this).remove();
                                    });
                                });
                            }
                            
                            console.log("hej1001", $sentenceBlock);