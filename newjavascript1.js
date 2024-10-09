                        var $sentenceDiv = $('<div></div>');
                        $sentenceDiv.addClass('sentence'); // Dodanie klasy 'sentence'
                        $sentenceDiv.html(`
<button class="left-button first-button">+<br></button>
${sentence10}${sentence12}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bba">${sentence1bbab}</div>
<button class="left-buttonb second-button">+<br></button>
${sentence20}${sentence22}<br>
<div class="sentence1bb1b">${sentence1bb1b}</div>
<div class="sentence1bba2">${sentence1bba2}</div>
<button class="left-buttonbb third-button">+<br></button>
${sentence30}${sentence33}<br>
        <div class="sentence1bb3" style="display: none;">${sentence1bb3}</div>
        <div class="sentence1bb1c" style="display: none;">${sentence1bb1c}</div>
`);
                        
                        // Sprawdź, czy kontener ma odpowiedni z-index i position
$container.css({
    'position': 'relative', // Upewnij się, że kontener ma ustawione 'position'
    'z-index': '99999999999' // Możesz ustawić niższy z-index dla kontenera, jeśli inne elementy mają wyższy
});

// Ustal szerokość przycisku startsystem
const startSystemWidth = 30; // Szerokość startsystem
const quickLessonWidth = 90; // Szerokość przycisku "Szybka lekcja"

// Obsługa kliknięcia przycisku overlay
$buttonb.on('click', function () {
    console.log('Button clicked');

    // Utwórz nowy przycisk "Szybka lekcja"
    const $loadButton = $('<button>').text('Szybka lekcja').addClass('slide-button');
    $loadButton.css({
        'position': 'absolute',
        'bottom': '10px',
        'right': `-${quickLessonWidth}px`, // Początkowa pozycja przycisku obok startsystem
        'width': quickLessonWidth + 'px', // Szerokość przycisku
        'height': '30px',
        'cursor': 'pointer',
        'border-radius': '8px',
        'background-color': 'green', // Kolor przycisku
        'color': 'white',
        'display': 'block', // Pokazuje przycisk od razu
        'z-index': '1000000' // Z-index większy niż startsystem
    }).appendTo($container); // Dodaj do kontenera
$container.css({
    'position': 'relative', // Upewnij się, że kontener ma ustawione 'position'
    'z-index': '99999999999' // Możesz ustawić niższy z-index dla kontenera, jeśli inne elementy mają wyższy
});
    // Animacja: przesunięcie przycisku "Szybka lekcja" w lewo
    $loadButton.animate({
        right: `${startSystemWidth}px` // Przesunięcie do pozycji, gdzie znika za startsystem
    }, {
        duration: 1000,
        step: function(now) {
            // Efekt wciągania
            $(this).css('opacity', 0 - (now / startSystemWidth)); // Zmniejsza przezroczystość
        },
        complete: function () {
            // Usunięcie przycisku po zakończeniu animacji
            $loadButton.remove(); // Kasuje przycisk całkowicie
            console.log('Szybka lekcja button removed');

            // Utwórz nowy przycisk "Wybierz i załaduj"
            const $newButton = $('<button>').text('Wybierz i załaduj').addClass('slide-button');
            $newButton.css({
                'position': 'absolute',
                'bottom': '10px',
                'right': '30px', // Początkowa pozycja przycisku
                'width': '120px',
                'height': '30px',
                'cursor': 'pointer',
                'border-radius': '8px',
                'background-color': 'blue',
                'color': 'white',
                'display': 'block', // Pokazuje przycisk od razu
                'z-index': '99999999999'
            }).appendTo($container); // Dodaj do kontenera

            // Animacja: chowanie przycisku "Wybierz i załaduj"
            $newButton.animate({
                right: '-110px' // Przesunięcie w lewo
            }, 1000, function () {
                console.log('Wybierz i załaduj button hidden');
            });
            $container.css({
    'position': 'relative', // Upewnij się, że kontener ma ustawione 'position'
    'z-index': '99999999999' // Możesz ustawić niższy z-index dla kontenera, jeśli inne elementy mają wyższy
});
        }
    });
});

chcę, aby po kliknięciu wysuwał się przycisk wybierz i załaduj, a potem podkreślało się pierwsze słowo ze zdania z danego id lekcji, czyli id lekcji to z mojej tablicy id: [a, b, c] więc wszystkie wartości b o takiej samej liczbie są moją lekcją i obok mojego zdania, czyli tego:
function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength) {
gdzie poszczególne słowa występują w dwóch częściach, czyli sentence10 to pierwsze trzy słowa, sentence11 to następne 3 słowa:
        to moj kod, który jest osadzony tutaj:
        else {
                        function addVideo3(index) {
                            // Utwórz element <video> i ustaw atrybuty
                            const $videoElement = $('<video>').attr({
                                'muted': true, // Wyciszenie dźwięku wideo
                                'loop': true, // Zapętlenie wideo
                                'style': 'z-index: 0',
                                'poster': srcWordimage[index] // Dodanie plakatu do wideo
                            });
                            // Utwórz element <div> dla nakładki
                            const $overlay = $('<div>').addClass('overlay');
                            // Dodaj element video do diva dla wideo
                            $videoElement.appendTo($container);
                            // Dodaj nakładkę do kontenera, po dodaniu wideo
                            $overlay.appendTo($container);
                            // Dodaj funkcję hover do kontenera
                            if (indexDiv < 12) {
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
                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength);
                            addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength);
                            addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength);
                        }
                        setTimeout(function () {
                            addVideo3(0);
                        }, 100);
                    }
  Chcę, aby po wybraniu przycisku załaduj, pierwsze słowo mrugało na zielono, a obok mojego zdania na początku i na końcu były przyciski - na początku ze znakiem ten <, a na końcu ze znakiem ten > i gdy klikne na znak ten: > to mrugające zielone podświetlenie ma przesuwać się do drugiego słowa. Podziel zadanie na części, pomyśl i podaj rozwiązanie