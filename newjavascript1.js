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
  
  
  
  
                              if (index55b2 === 1) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo1espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 2) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo2espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 3) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo3espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 4) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo4espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 5) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo5espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 6) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo6espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 7) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo7espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 8) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo8espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 9) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo9espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            
                            
                            
                                                    setTimeout(() => {
                            console.log('hej554', index55b2);
                                                          if (index55b2 === 1) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo1espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 2) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo2espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 3) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo3espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 4) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo4espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 5) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo5espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 6) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo6espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 7) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo7espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 8) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo8espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 9) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo9espb.html?category=' + encodeURIComponent(globalCategory);
                            }
                        }, 1000);
                        
                                                        setTimeout(() => {
                                    console.log('hej554', index55b2);
    if (index55b2 === 1) { // Porównaj jako liczby
        // Bezpośrednio przekierowujemy użytkownika do strony
        window.location.href = 'demo1esp.html?category=' + encodeURIComponent(globalCategory);
    }
    if (index55b2 === 2) { // Porównaj jako liczby
        // Bezpośrednio przekierowujemy użytkownika do strony
        window.location.href = 'demo2esp.html?category=' + encodeURIComponent(globalCategory);
    }
    if (index55b2 === 3) { // Porównaj jako liczby
        // Bezpośrednio przekierowujemy użytkownika do strony
        window.location.href = 'demo3esp.html?category=' + encodeURIComponent(globalCategory);
    }
                                }, 100);
                                
                                $flashcardContainer.append(`
<div id="konsola">
    <div id="title">WIDOK</div>
<button class="rodzaj-button" data-rodzaj="osoby">SPOŁECZNOŚCIOWY</button>        
    <button class="rodzaj-button" data-rodzaj="osoby">WYGENEROWANY JEDNORAZOWO</button>
            <div id="title">RODZAJ SŁOWNICTWA</div>
                    <button class="rodzaj-button" data-rodzaj="osoby">KOGNATY</button>
    <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '', tablica3[1])">Wszystkie</button>
    <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('osoby', '', '', '', '', '', tablica3[1])">Osoby</button>
    <button class="rodzaj-button" data-rodzaj="zaimki osobowe" onclick="przekazArgument0('zaimkiosobowe', '', '', '', '', '', tablica3[1])">Zaimki osobowe</button>
    <button id="inne" onclick="przekazArgument0('emocje', '', '', '', '', '', tablica3[1])">Emocje</button>
    <button class="rodzaj-button" data-rodzaj="zaimki" onclick="przekazArgument0('spojniki', '', '', '', '', '', tablica3[1])">Spójniki</button>
    <button id="inne" onclick="przekazArgument0('kolory', '', '', '', '', '', tablica3[1])">Kolory</button>
    <button id="inne" class="rodzaj-button" data-rodzaj="zwierzeta" onclick="przekazArgument0('zwierzeta', '', '', '', '', '', tablica3[1])">Zwierzęta</button>
    <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument0('czasownik', '', '', '', '', '', tablica3[1])">Czasowniki</button>
    <br>ILOŚĆ MATERIAŁU NA LEKCJE<br>
<button class="czas" onclick="ustawTryb('zdania', undefined); przekazArgument0(globalCategory, '', '', 'zdania', false, false, tablica3[1])">5 MINUT (JEDNO ZDANIE)</button>
<button id="english" class="czas" onclick="ustawTryb('fiszki', undefined); przekazArgument0(globalCategory, '', '', 'fiszki', true, true, tablica3[1])">10 MINUT (3 ZDANIA) - OPCJONALNIE</button>
<br>TRYB LEKCJI<br>
<button id="english" class="czas" onclick="ustawTryb(tablica3[0], ''); przekazArgument0(globalCategory, '', '', tablica3[0], false, false, tablica3[1])">ZDANIA</button>
<button class="czas" onclick="ustawTryb(tablica3[0], 'frazy'); przekazArgument0(globalCategory, '', '', tablica3[0], true, true, tablica3[1])">FRAZY</button>
    <button id="inne" class="czas">POJEDYŃCZE SŁOWA</button>
    <br>DOSTĘPNE WERSJE TŁUMACZENIA<br>
    <button id="english" class="charakter-button" onclick="wybierzCharakter()">NA ŻADANIE-OPCJONALNIE</button>
    <button id="inne" class="charakter-button" onclick="wybierzCharakter('fiszki')">TYLKO PO ANGIELSKU</button>
    <button id="inne" class="charakter-button" onclick="przekazArgument0('', '', '', 'zdania', true)">TYLKO PO POLSKU</button>
</div>
<div id="konsola">
            <div id="title">CZASY</div>
<button class="charakter-button" onclick="przekazArgument0('PresentSimple', '', '', '', '', '', tablica3[1])">OZNACZ CZAS</button>
<br>
    <button class="charakter-button" onclick="przekazArgument0('PresentSimple', '', '', '', '', '', tablica3[1])">PRESENT SIMPLE</button>
    <button id="inne">PAST SIMPLE</button>
    <br>
    <div id="title">OPCJE ZDANIA</div>
    <button id="inne" class="charakter-button">PODZIEL ZDANIA NA CZĘŚCI</button>
    <button id="inne" class="czas">WYSUŃ JEDNOCZEŚNIE W DANEJ LEKCJI</button>
    <br>
    <div id="title">CHARAKTER ZDANIA</div>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'krotkie')">Krótkie</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'dlugie')">Długie(złożone)</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, '')">Dowolne</button>
    <div id="title">PRIORYTETY LINGWISTYCZNE</div>
    <button id="inne" onclick="wybierzCharakter('krotkie')">Wymowa</button>
<button class="charakter-button" onclick="wybierzCharakter('krotkie')">Pisownia</button>
<button id="inne" onclick="wybierzCharakter('krotkie')">Sens zdania</button>
    <button id="dowolne" onclick="wybierzCharakter('dowolne')">WSZYSTKIE</button>
</div>
<div id="konsola2">
            <div id="title">ULUBIONA TEMATYKA FISZEK</div>
    <button onclick="wybierzTematyke('nauka')">Nauka</button>
    <button onclick="wybierzTematyke('podroze')">Podróże</button>
    <button onclick="wybierzTematyke('historia')">Historia</button>
    <button onclick="wybierzTematyke('sztuka')">Sztuka</button>
    <button onclick="wybierzTematyke('technologia')">Technologia</button>
</div>
<div id="konsola3">
    <h2>Ulubione Fiszki</h2>
    <button onclick="wplecUlubioneFiszki()">Ulubione Fiszki</button>
</div>
<div id="konsola4">
    <h2>Generuj intuicyjnie z pokrewną tematyką</h2>
    <button onclick="wybierzTematyke('nauka')">Podobne</button>
    <button onclick="wybierzTematyke('podroze')">Eksporuj moją nową pasje</button>
    <button onclick="wybierzTematyke('podroze')">Odkryj moją nową pasje</button>
</div>
</div>
`);
    
                "Ada jest nastolatką i denerwuje się na dorosłych. Odreagowuje sportem, potrafi robić jak dorośli salto"
                
                                story: [
            "<u><b>Bi</u></b>egam dobrze i podczas biegania odczuwam całkowicie inny stan <u><b>bycia</u></b>",
            "Jestestwo lisa <u><b>Bi</u></b>ll i łabędzia <u><b>Bi</u></b>anka polega na jedzeniu bigosu. Lisek mówi do Bianki: ja lubie <u><b>być</u></b> smakoszem bigosu",
            "<u><b>Bi</u></b>ologia jest taką dziedziną, w której warto jako badacz <u><b>być</u></b> zaangażowanym",
            "<u><b>Bi</u></b>egnę w zawodach i chcę <u><b>być</u></b> najlepszy, ale natrafiłem na słupa i wybiłem jedynkę",
            "<u><b>Być</u></b> <u><b>bi</u></b>ednym to nie to samo co być początkującym milionerem",
            "<u><b>Bi</u></b>lion dollarów musi <u><b>być</u></b> dużą kwotą"
        ],
                
                    $('.grid-container .image-container4').each(function (index) {
        const containerRect = this.getBoundingClientRect();
        const isVisible = (
            containerRect.top >= 0 &&
            containerRect.left >= 0 &&
            containerRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            containerRect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    });
    
    function showFiszkiForLesson(lessonIdToShow, fiszki) {
    const matchingFiszki = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow);

    if (matchingFiszki.length > 0) {
        console.log(`Fiszki dla lekcji ${lessonIdToShow}:`);

        // Zmieniamy tutaj, aby przetworzyć tylko pierwszą fiszkę
        const fiszka = matchingFiszki[0]; // Wybieramy pierwszą fiszkę
        console.log(`Processing fiszka with ID: [${fiszka.id.join(', ')}]`);
        generateFiszkaBlock(fiszka, lessonIdToShow); // Upewnij się, że funkcja generateFiszkaBlock() jest zdefiniowana
        console.log(`Generated fiszka with ID: [${fiszka.id.join(', ')}]`);
    } else {
        console.log(`No fiszki found for Lesson ${lessonIdToShow}.`);
    }
}


let aktualnyObraz = true; // Zmienna do śledzenia aktualnego stanu obrazu

function zmienLupke() {
    const lupkaImage = document.getElementById('lupkaImage');
    const obrazPierwszy = 'img/lupki3fa.png'; // Ścieżka do pierwszego obrazka
    const obrazDrugi = 'img/lupki3g3.png'; // Ścieżka do drugiego obrazka

    // Przełączanie obrazka
    if (aktualnyObraz) {
        lupkaImage.src = obrazDrugi; // Zmień na drugi obraz
        // Zmień klasy na grid-containerb oraz image-container3b
        $('.grid-container').removeClass('grid-container').addClass('grid-containerb');
        $('.image-container3').removeClass('image-container3').addClass('image-container3b');
    } else {
        lupkaImage.src = obrazPierwszy; // Zmień na pierwszy obraz
        // Zmień klasy z powrotem na grid-container oraz image-container3
        $('.grid-containerb').removeClass('grid-containerb').addClass('grid-container');
        $('.image-container3b').removeClass('image-container3b').addClass('image-container3');
    }

    // Zmień stan na przeciwny
    aktualnyObraz = !aktualnyObraz;
}
            // Funkcja do zmiany szerokości okna
            function simulateResize(width) {
                document.documentElement.style.setProperty('--viewport-width', width + 'px');
                window.dispatchEvent(new Event('resize'));
            }

            // Ustawienie szerokości na 768px dla widoku mobilnego
            simulateResize(768);
        </script>
        <script>
  
const bottomBar = document.getElementById('bottomBar');
const toggleButton = document.getElementById('toggleButton');
const arrow = document.getElementById('arrow');

// Pokaż pasek i strzałkę nad nim po załadowaniu strony
window.addEventListener('load', function() {
    bottomBar.classList.add('show'); // Pasek widoczny
    toggleButton.classList.add('show-toggle-button'); // Strzałka nad paskiem

    // Automatyczne schowanie paska po 3 sekundach
    setTimeout(function() {
        bottomBar.classList.remove('show');
        bottomBar.classList.add('hidden'); // Schowanie paska
        arrow.innerHTML = '&#9650;'; // Zmiana strzałki na skierowaną w górę
        toggleButton.classList.remove('show-toggle-button'); // Strzałka wraca na dół
    }, 3000); // 3000 ms = 3 sekundy
});

// Strzałka do ręcznego rozwijania i chowania paska
toggleButton.addEventListener('click', function() {
    if (bottomBar.classList.contains('show')) {
        bottomBar.classList.remove('show');
        bottomBar.classList.add('hidden');
        arrow.innerHTML = '&#9650;'; // Strzałka w górę (chowanie paska)
        toggleButton.classList.remove('show-toggle-button'); // Strzałka wraca na dół
    } else {
        bottomBar.classList.remove('hidden');
        bottomBar.classList.add('show');
        arrow.innerHTML = '&#9660;'; // Strzałka w dół (rozwijanie paska)
        toggleButton.classList.add('show-toggle-button'); // Strzałka nad paskiem
    }
});
            function blinkButton() {
                const button = document.getElementById('flashcardButton');
                let blinkCount = 0;

                const interval = setInterval(() => {
                    button.style.visibility = (button.style.visibility === 'hidden') ? 'visible' : 'hidden';
                    blinkCount++;

                    if (blinkCount === 4) { // 6 przełączeń widoczności (3 mignięcia)
                        clearInterval(interval);
                        button.style.visibility = 'visible'; // Upewnij się, że przycisk jest widoczny na końcu
                    }
                }, 200); // 300 ms przerwy pomiędzy mignięciami
            }

// Uruchomienie mignięcia po załadowaniu strony
            window.onload = function () {
                blinkButton();
            };
            document.getElementById('myButton').addEventListener('click', function () {
                window.location.href = 'https://arbu-1dcc9.web.app/matrix.html';
            });
            document.getElementById('myButton2').addEventListener('click', function () {
                window.location.href = 'https://arbu-1dcc9.web.app/matrix2.html';
            });

            function showVideos(set) {
                const videoContainer = document.querySelector('.grid-container');
                switch (set) {
                    case 'set2':
                        selectedVideos = [
                            {
                            }
                            // Dodaj kolejne filmy dla set1
                        ];
                        break;
                        // Dodaj pozostałe przypadki dla innych zestawów
                    default:
                        break;
                }
                // Wyświetl filmy dla wybranego zestawu
                selectedVideos.forEach(function (videoData) {
                    const videoContainer = document.createElement('div');
                    videoContainer.classList.add('image-container3');
                    document.querySelector('.grid-container').appendChild(videoContainer);
                });
            }
            showVideos('set2');


            function highlightButton(buttonId, horizontalBarId) {
                // Reset all buttons in the specified horizontal bar to default style
                document.querySelectorAll(`#${horizontalBarId} button`).forEach(button => {
                    button.classList.remove('green-button');
                });

                // Highlight the clicked button
                document.getElementById(buttonId).classList.add('green-button');
            }

            // Add event listeners to buttons in the first horizontal bar
            document.getElementById('myButton').addEventListener('click', function () {
                showVideos('set2');
                highlightButton('myButton', 'horizontalBar1');
            });

            document.getElementById('myButton2').addEventListener('click', function () {
                showVideos('set3');
                highlightButton('myButton2', 'horizontalBar1');
            });

            function addFlashcardContainer() {
                var $flashcardContainer = $('<div>', {class: 'flashcard-container'});
                $('#buttoncreate').addClass('active');

                // Dodaj buttony do diva
                $flashcardContainer.append(`
<div id="konsola">
    <div id="title">WIDOK</div>
<button class="rodzaj-button" data-rodzaj="osoby">SPOŁECZNOŚCIOWY</button>        
    <button class="rodzaj-button" data-rodzaj="osoby">WYGENEROWANY JEDNORAZOWO</button>
            <div id="title">RODZAJ SŁOWNICTWA</div>
                    <button class="rodzaj-button" data-rodzaj="osoby">KOGNATY</button>
    <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '', tablica3[1])">Wszystkie</button>
    <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('osoby', '', '', '', '', '', tablica3[1], 'other')">Osoby</button>
    <button class="rodzaj-button" data-rodzaj="zaimki osobowe" onclick="przekazArgument0('zaimkiosobowe', '', '', '', '', '', tablica3[1], 'other')">Zaimki osobowe</button>
    <button id="inne" onclick="przekazArgument0('emocje', '', '', '', '', '', tablica3[1])">Emocje</button>
    <button class="rodzaj-button" data-rodzaj="zaimki" onclick="przekazArgument0('spojniki', '', '', '', '', '', tablica3[1])">Spójniki</button>
    <button id="inne" onclick="przekazArgument0('kolory', '', '', '', '', '', tablica3[1])">Kolory</button>
    <button id="inne" class="rodzaj-button" data-rodzaj="zwierzeta" onclick="przekazArgument0('zwierzeta', '', '', '', '', '', tablica3[1])">Zwierzęta</button>
    <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument0('czasownik', '', '', '', '', '', tablica3[1])">Czasowniki</button>
    <br>ILOŚĆ MATERIAŁU NA LEKCJE<br>
<button class="czas" onclick="ustawTryb('zdania', undefined); przekazArgument0(globalCategory, '', '', 'zdania', false, false, tablica3[1])">5 MINUT (JEDNO ZDANIE)</button>
<button id="english" class="czas" onclick="ustawTryb('fiszki', undefined); przekazArgument0(globalCategory, '', '', 'fiszki', true, true, tablica3[1])">10 MINUT (3 ZDANIA) - OPCJONALNIE</button>
<br>TRYB LEKCJI<br>
<button id="english" class="czas" onclick="ustawTryb(tablica3[0], ''); przekazArgument0(globalCategory, '', '', tablica3[0], false, false, tablica3[1])">ZDANIA</button>
<button class="czas" onclick="ustawTryb(tablica3[0], 'frazy'); przekazArgument0(globalCategory, '', '', tablica3[0], true, true, tablica3[1])">FRAZY</button>
    <button id="inne" class="czas">POJEDYŃCZE SŁOWA</button>
    <br>DOSTĘPNE WERSJE TŁUMACZENIA<br>
    <button id="english" class="charakter-button" onclick="wybierzCharakter()">NA ŻADANIE-OPCJONALNIE</button>
    <button id="inne" class="charakter-button" onclick="wybierzCharakter('fiszki')">TYLKO PO ANGIELSKU</button>
    <button id="inne" class="charakter-button" onclick="przekazArgument0('', '', '', 'zdania', true)">TYLKO PO POLSKU</button>
</div>
<div id="konsola">
            <div id="title">CZASY</div>
<button class="charakter-button" onclick="przekazArgument0(globalCategory, '', '', '', '', '', tablica3[1], 'play')">OZNACZ CZAS</button>
<br>
    <button class="charakter-button" onclick="przekazArgument0('PresentSimple', '', '', '', '', '', tablica3[1], 'play')">PRESENT SIMPLE</button>
            <button class="charakter-button" onclick="przekazArgument0('PresentContinous', '', '', '', '', '', tablica3[1], 'other')">PRESENT CONTINOUS</button>
                    <button class="charakter-button" onclick="przekazArgument0('PastSimple', '', '', '', '', '', tablica3[1])">PAST SIMPLE</button>
    <button id="inne">PAST SIMPLE</button>
    <br>
    <div id="title">OPCJE ZDANIA</div>
    <button id="inne" class="charakter-button">PODZIEL ZDANIA NA CZĘŚCI</button>
    <button id="inne" class="czas">WYSUŃ JEDNOCZEŚNIE W DANEJ LEKCJI</button>
    <br>
    <div id="title">CHARAKTER ZDANIA</div>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'krotkie')">Krótkie</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'dlugie')">Długie(złożone)</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, '')">Dowolne</button>
    <div id="title">PRIORYTETY LINGWISTYCZNE</div>
    <button id="inne" onclick="wybierzCharakter('krotkie')">Wymowa</button>
<button class="charakter-button" onclick="wybierzCharakter('krotkie')">Pisownia</button>
<button id="inne" onclick="wybierzCharakter('krotkie')">Sens zdania</button>
    <button id="dowolne" onclick="wybierzCharakter('dowolne')">WSZYSTKIE</button>
</div>
<div id="konsola2">
            <div id="title">ULUBIONA TEMATYKA FISZEK</div>
    <button onclick="wybierzTematyke('nauka')">Nauka</button>
    <button onclick="wybierzTematyke('podroze')">Podróże</button>
    <button onclick="wybierzTematyke('historia')">Historia</button>
    <button onclick="wybierzTematyke('sztuka')">Sztuka</button>
    <button onclick="wybierzTematyke('technologia')">Technologia</button>
</div>
<div id="konsola3">
    <h2>Ulubione Fiszki</h2>
    <button onclick="wplecUlubioneFiszki()">Ulubione Fiszki</button>
</div>
<div id="konsola4">
    <h2>Generuj intuicyjnie z pokrewną tematyką</h2>
    <button onclick="wybierzTematyke('nauka')">Podobne</button>
    <button onclick="wybierzTematyke('podroze')">Eksporuj moją nową pasje</button>
    <button onclick="wybierzTematyke('podroze')">Odkryj moją nową pasje</button>
</div>
</div>
`);
                $flashcardContainer.find('#osoby, #fiszki, #english').css('border', '2px solid blue');
                $flashcardContainer.find('#inne').css('background-color', 'gray');
                // Dodaj do konsoli informację o próbie dodania diva
                console.log("Próba dodania diva");

                // Znajdź kontener, do którego chcesz dodać .flashcard-container
                var $targetContainer = $('.grid-containera');

                // Dodaj div do znalezionego kontenera
                $targetContainer.append($flashcardContainer);

                var $gridContainer = $('.grid-container');
                var flashcardContainerHeight = $flashcardContainer.height();
                $gridContainer.css('margin-top', flashcardContainerHeight + 110 + 'px');


                function addBlueBorder(button) {
                    var category = $(button).attr('class').split(' ')[0]; // Pobierz klasę kategorii przycisku (rodzaj-button, charakter-button, czas)

                    // Usuń poprzednie zaznaczenia z danej kategorii
                    $('.' + category).css('border', '1px solid black');

                    // Następnie dodaj obramowanie do aktualnie klikniętego przycisku
                    $(button).css('border', '2px solid blue');
                }

                // Funkcja obsługująca kliknięcie w przyciski rodzaj-button
                function handleRodzajButtonClick() {
                    addBlueBorder(this);
                }

                // Funkcja obsługująca kliknięcie w przyciski charakter-button
                function handleCharakterButtonClick() {
                    addBlueBorder(this);
                }

                // Funkcja obsługująca kliknięcie w przyciski czas
                function handleCzasButtonClick() {
                    addBlueBorder(this);
                }

                // Dodaj zdarzenia do przycisków rodzaj-button
                $flashcardContainer.find('.rodzaj-button').on('click', handleRodzajButtonClick);

                // Dodaj zdarzenia do przycisków charakter-button
                $flashcardContainer.find('.charakter-button').on('click', handleCharakterButtonClick);

                // Dodaj zdarzenia do przycisków czas
                $flashcardContainer.find('.czas').on('click', handleCzasButtonClick);

                // Przekazanie argumentu 0

            }
            idpolski = false;
            let indexes = [];
            let pulpitstartowy = false;
            var czasv2;

            // Definicja zmiennej globalnej globalCategory
            var przyciskKlikniety = false;
            // Definicja zmiennej matchingIndexes
            let matchingIndexes = [];
            let tablica7 = [];
            let pierwszyFilmURL = '';
            function zapiszPierwszyFilmURL(url) {
                if (pierwszyFilmURL === '') {
                    pierwszyFilmURL = url;
                }
            }
            var globalCategory = '';
            // Funkcja przekazująca argument


            var tablica3 = [];
            tablica3[0] = 'fiszki'; // Domyślny tryb
            tablica3[1] = null; // Domyślny tryb
            tablica3[2] = 'all'; // Domyślny tryb
            tablica3[4] = null;
            function przekazArgument0(category, index55, buttonindex, czas, idpolski, idtranslate, id, rodzaj) {
                $('.grid-container .image-container3').remove();
                $('.grid-container .image-container4').remove();
                tablica3[1] = id;
                tablica3[2] = category;
                tablica3[4] = rodzaj;
                console.log('hej55b', rodzaj);
                console.log('hej321b', idtranslate);
                console.log('hej453', buttonindex);
                console.log('hej453', czas);
                console.log('hej453', idpolski);
                pulpitstartowy = true;
                przyciskKlikniety = true;
                // Przypisz wartość do zmiennej globalnej
                globalCategory = category;
                tablica10.length = 0;
                tablica15.length = 0;
                globalIdTranslate = idtranslate;
                // Wywołaj funkcję wybierzCharakter na podstawie trybu
                wybierzCharakter(category, tablica3[0], index55, buttonindex, tablica3[1], tablica3[3], rodzaj);
            }

            function ustawTryb(tryb, frazy) {
                // Zaktualizuj pierwszą wartość w tablicy lub dodaj, jeśli jest pusta
                tablica3[0] = tryb;
                tablica3[3] = frazy;
            }
            console.log('hej33bb', tablica3);
            // Funkcja wybierająca charakter
            function wybierzCharakter(category, czas, index55, buttonindex, idpolski, frazyid, rodzaj) {
                console.log('hej223', czas, category, frazyid);

                pulpitstartowy = false;
                console.log('hej555', czas);
                // Aktualizuj matchingIndexes na podstawie nowej kategorii
                matchingIndexes = findXForMatchingFiszka(globalCategory, fiszki);
                matchingIndexes2 = findXForMatchingFiszka2(globalCategory, fiszki);
                matchingIndexes3 = findXForMatchingFiszka3(globalCategory, fiszki);

                wybierzRodzaj(globalCategory, czas, matchingIndexes, index55, buttonindex, idpolski, frazyid, matchingIndexes2, rodzaj, matchingIndexes3);
                // Wyświetl na konsoli zaktualizowane matchingIndexes
                console.log("Zaktualizowane matchingIndexes:", matchingIndexes);
                console.log("wykonuje sie hej", matchingIndexes2);
                czasv2 = czas;
                console.log('hej5', dlugosc);
            }

            // Funkcja znajdująca indeksy dla pasujących "fiszek"
            function findXForMatchingFiszka(category, fiszki) {
                const matchingIndexes = [];
                const matchingIndexes2 = [];
                // Iteruj przez tablicę fiszki
                console.log('hej234', category);
                for (let i = 0; i < fiszki.length; i++) {
                    // Upewnij się, że fiszki[i] oraz fiszki[i].category3 są zdefiniowane
                    if (fiszki[i].category2.includes(category)) {
                        // Jeśli warunek jest spełniony, dodajemy indeks "fiszki" do tablicy
                        matchingIndexes.push(i + 1);
                        console.log('hej7', matchingIndexes);
                    }
                }
                // Zwracamy tablicę indeksów pasujących "fiszek"
                console.log('wykonuje się 6', matchingIndexes2);
                return matchingIndexes;
            }
                        // Funkcja znajdująca indeksy dla pasujących "fiszek"
            function findXForMatchingFiszka2(category, fiszki) {
                const matchingIndexes2 = [];
                // Iteruj przez tablicę fiszki
                console.log('hej234', category);
                for (let i = 0; i < fiszki.length; i++) {
                    // Upewnij się, że fiszki[i] oraz fiszki[i].category3 są zdefiniowane
                        if (fiszki[i] && fiszki[i].category3 && fiszki[i].category3.includes("PresentSimplePodmiot")) {
                        matchingIndexes2.push(i + 1);
                        console.log('hej7xxv', matchingIndexes2);
                    }
                }
                // Zwracamy tablicę indeksów pasujących "fiszek"
                console.log('wykonuje się 6bb', matchingIndexes2);
                return matchingIndexes2;
            }
                        function findXForMatchingFiszka3(category, fiszki) {
                const matchingIndexes3 = [];
                // Iteruj przez tablicę fiszki
                console.log('hej234', category);
                for (let i = 0; i < fiszki.length; i++) {
                    // Upewnij się, że fiszki[i] oraz fiszki[i].category3 są zdefiniowane
                        if (fiszki[i] && fiszki[i].category3 && fiszki[i].category3.includes("PresentSimpleCzasownik")) {
                        matchingIndexes3.push(i + 1);
                        console.log('hej7xxv', matchingIndexes3);
                    }
                }
                // Zwracamy tablicę indeksów pasujących "fiszek"
                console.log('wykonuje się 6bb', matchingIndexes3);
                return matchingIndexes3;
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

            function calculatePartLengths(fiszki) {
                const idToLengthsMap = new Map(); // Mapa dla długości części zdania dla każdego identyfikatora y

                fiszki.forEach(fiszka => {
                    const y = fiszka.id[1];

                    if (!fiszka.sentence2)
                        return; // Zabezpieczenie przed obiektami fiszki, które nie mają właściwości sentence2

                    // Jeśli identyfikator y nie jest jeszcze w mapie, dodaj go z początkowymi długościami i licznikiem
                    if (!idToLengthsMap.has(y)) {
                        const secondPartLength = fiszka.sentence2.length;

                        idToLengthsMap.set(y, {
                            totalLength: secondPartLength,
                            count: 1
                        });
                    } else {
                        // Jeśli identyfikator y już jest w mapie, zaktualizuj długości i licznik
                        const lengths = idToLengthsMap.get(y);
                        lengths.totalLength += fiszka.sentence2.length;
                        lengths.count += 1;
                        idToLengthsMap.set(y, lengths);
                    }
                });

                // Konwersja mapy na tablicę wynikową
                const result = [];
                idToLengthsMap.forEach((lengths, id) => {
                    result.push({id: id, ...lengths});
                });

                return result;
            }



            const partLengths = calculatePartLengths(fiszki);
            console.log('Part lengths:', partLengths);



            function calculatePartLengths1(fiszki) {
                const idToLengthsMap = new Map(); // Mapa dla długości części zdania dla każdego identyfikatora y

                fiszki.forEach(fiszka => {
                    const y = fiszka.id[1];

                    if (!fiszka.sentence1)
                        return; // Zabezpieczenie przed obiektami fiszki, które nie mają właściwości sentence1

                    // Jeśli identyfikator y nie jest jeszcze w mapie, dodaj go z początkowymi długościami i licznikiem
                    if (!idToLengthsMap.has(y)) {
                        const secondPartLength = fiszka.sentence1.length;

                        idToLengthsMap.set(y, {
                            count2: 1
                        });
                    } else {
                        // Jeśli identyfikator y już jest w mapie, zwiększ licznik
                        const lengths = idToLengthsMap.get(y);
                        lengths.count2 += 1;
                        idToLengthsMap.set(y, lengths);
                    }
                });

                // Konwersja mapy na tablicę wynikową
                const result = [];
                idToLengthsMap.forEach((lengths, id) => {
                    result.push({id: id, ...lengths});
                });

                return result;
            }

            const partLengths1 = calculatePartLengths1(fiszki);
            console.log('Part lengths1:', partLengths1);
            function calculatePartLengths2(fiszki) {
                const idToLengthsMap = new Map(); // Mapa dla długości części zdania dla każdego identyfikatora y

                fiszki.forEach(fiszka => {
                    const y = fiszka.id[1];

                    if (!fiszka.sentence2)
                        return; // Zabezpieczenie przed obiektami fiszki, które nie mają właściwości sentence1

                    // Jeśli identyfikator y nie jest jeszcze w mapie, dodaj go z początkowymi długościami i licznikiem
                    if (!idToLengthsMap.has(y)) {
                        const secondPartLength = fiszka.sentence2.length;

                        idToLengthsMap.set(y, {
                            count2: 1
                        });
                    } else {
                        // Jeśli identyfikator y już jest w mapie, zwiększ licznik
                        const lengths = idToLengthsMap.get(y);
                        lengths.count2 += 1;
                        idToLengthsMap.set(y, lengths);
                    }
                });

                // Konwersja mapy na tablicę wynikową
                const result = [];
                idToLengthsMap.forEach((lengths, id) => {
                    result.push({id: id, ...lengths});
                });

                return result;
            }

            const partLengths2 = calculatePartLengths2(fiszki);
            console.log('Part lengths2:', partLengths2);


            function calculatePartLengths3(fiszki) {
                const idToLengthsMap = new Map(); // Mapa dla długości części zdania dla każdego identyfikatora y

                // Pierwsza iteracja: zliczanie długości zdań dla każdego identyfikatora y
                fiszki.forEach(fiszka => {
                    const y = fiszka.id[1];
                    const totalLength = (fiszka.sentence1 ? fiszka.sentence1.length : 0) + (fiszka.sentence2 ? fiszka.sentence2.length : 0);

                    if (!idToLengthsMap.has(y)) {
                        idToLengthsMap.set(y, {
                            totalLength: totalLength,
                            count: 1
                        });
                    } else {
                        const lengths = idToLengthsMap.get(y);
                        lengths.totalLength += totalLength;
                        lengths.count += 1;
                        idToLengthsMap.set(y, lengths);
                    }
                });

                // Druga iteracja: tworzenie wynikowej tablicy ze skumulowanymi wartościami
                const result = [];
                let cumulativeCount = 0; // Zmienna do śledzenia sumy count

                idToLengthsMap.forEach((lengths, id) => {
                    result.push({id: id, cumulativeCount: cumulativeCount}); // Pierwsza wartość wynosi 0
                    cumulativeCount += lengths.count; // Odejmowanie aktualnej wartości count od sumy
                });

                return result;
            }


            const partLengths3 = calculatePartLengths3(fiszki);
            console.log('Cumulative counts:', partLengths3);



            const lessonsArray = [];
            const lessonsArrayA = [];
            const lessonsArrayB = [];
            console.log('hej45', lessonsArray);
            // Wyświetlenie wyniku
            // Funkcja odtwarzająca losowy kontener image-container3
            // Funkcja odtwarzająca losowy kontener image-container3
            let imageContainer3Array = [];
            console.log('hej44', imageContainer3Array);
            let currentVideoIndex = 0; // Indeks bieżącego filmu do odtworzenia

            // Funkcja obsługująca zdarzenie zakończenia odtwarzania filmu
            function videoEndedHandler() {
                currentVideoIndex = (currentVideoIndex + 1) % imageContainer3Array.length; // Przejście do następnego filmu
                playRandomImageContainer3(); // Odtwórz kolejny losowy film
            }
            console.log("Matching indexes:", matchingIndexes);
            let polski = false;
let losowaniaCounter = 0; // Zmienna licznika losowań
let losowaniaCounter2 = 0; // Zmienna licznika losowań
            let tablica33 = [];
            let tablica33b = [];
            function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex, idpolski, frazyid, matchingIndexes2, rodzaj, matchingIndexes3) {
                category = category || globalCategory;
                czasv2 = czas;
                console.log("Wybrany rodzaj słownictwa: ", buttonindex);
                console.log('hej5b', index55);
                console.log('hej755', matchingIndexes2);

                const matchingLessons = new Set();
                const matchingLessons2 = new Set();
// Iteracja przez fiszki
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
                console.log('Unikalne dopasowane lekcje:', uniqueMatchingLessons);

                let myVariable = uniqueMatchingLessons;

                if (idpolski === 'dlugie') {
                    console.log('Dane correlationsCount:', correlationsCount);

                    const validLessons = myVariable.filter(lessonId => {
                        const lessonEntry = correlationsCount.find(item => item[0] === lessonId) || [lessonId, 0];
                        console.log('Sprawdzanie lessonId:', lessonId, 'lessonEntry:', lessonEntry);
                        const lessonSentences = lessonEntry[1];
                        return lessonSentences > 6;
                    });

                    myVariable = validLessons;
                }
                if (idpolski === 'krotkie') {
                    console.log('Dane correlationsCount:', correlationsCount);

                    const validLessons = myVariable.filter(lessonId => {
                        const lessonEntry = correlationsCount.find(item => item[0] === lessonId) || [lessonId, 0];
                        console.log('Sprawdzanie lessonId:', lessonId, 'lessonEntry:', lessonEntry);
                        const lessonSentences = lessonEntry[1];
                        return lessonSentences < 6;
                    });

                    myVariable = validLessons;
                }
                if (frazyid === 'frazy') {
                    console.log('Warunek czas === "fiszki" jest spełniony');
                    $('.grid-container .image-container4').remove();
                    $('.grid-container .image-container3').remove();

                    if (uniqueMatchingLessons2.length > 1) {
                        let zeroWylosowane = false;
                        let indexDiv = 0;

                        let previousCumulativeFirstPartLength3 = 0;
                        let cumulativeFirstPartLength1 = 0;
                        let cumulativeFirstPartLength2 = 0;
                        let cumulativeFirstPartLength3 = 0;

                        let startIndex = 0;
                        const lengthDividedByThree = uniqueMatchingLessons2.length;

                        let indices = Array.from({length: lengthDividedByThree}, (_, i) => i + 1);
                        let indices2 = [];
                        for (let i = 1; i <= lengthDividedByThree; i++) {
                            indices2.push(i);
                        }

                        console.log('hej12b', indices);

                        const zeroIndex = Math.floor(Math.random() * lengthDividedByThree);
                        const zeroIndex2 = index55 - 1;
                        indices[zeroIndex] = 0;
                        indices2[zeroIndex2] = 0;
                        let useFirstPartLength = true;
                        for (let i = 0; i < uniqueMatchingLessons2.length; i += 1) {
                            indexDiv++;
                            const lessonId1 = uniqueMatchingLessons2[i];
                            const newIndex = indices[Math.floor(i)];
                            const index50 = indices2[Math.floor(i)];
                            console.log('hej16f', uniqueMatchingLessons2[i]);
                            console.log('hej127');
                            const lesson1SecondPartLength = partLengths2.find(item => item.id === lessonId1)?.count2 || 0;

                            const lesson1FirstPartLength = partLengths1.find(item => item.id === lessonId1)?.count2 || 0;
                            // Wybór odpowiedniej wartości w zależności od zmiennej useFirstPartLength
                            const lessonLength = useFirstPartLength ? lesson1FirstPartLength : lesson1SecondPartLength;

                            const lessonObjectB = {
                                lessonId1: lessonId1,
                                index50: index50,
                                newIndex: newIndex,
                                indexDiv: indexDiv,
                                lessonLength: lessonLength
                            };
                            useFirstPartLength = !useFirstPartLength;
                            lessonsArrayB.push(lessonObjectB);
                            console.log('hej34b', lessonObjectB);

                            console.log('hej556b', lessonsArrayB);
                            console.log('hej77', tablica20);

                            if (tablica20.length <= 70 || tablica20.length === 0) {
                                console.log('wykonuje się 8');
                                console.log('hej32', newIndex);
                                console.log('hej18b', tablica20);
                                showCombinedSentenceForLesson5(index50, lessonId1, newIndex, indexDiv, buttonindex, lessonLength);
                            }
                        }
                        console.log('Aktualna zawartość tablicy lessonsArrayb:', lessonsArrayB);
                        const numberOfContainers = $('.image-container3').length;
                        console.log('Liczba dodanych divów:', numberOfContainers);
                    }
                }

let powiadomienieCounter = 0; // Licznik wyświetleń powiadomień

if (czas === 'fiszki' && czas !== "zdania") {
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

            if (tablica10.length <= 14 || tablica10.length === 0) {
                console.log('wykonuje się 8');
                console.log('hej32', newIndex);
                console.log('hej18', tablica10);
                showCombinedSentenceForLesson(matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3);
            }
            
        }

        console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
        const numberOfContainers = $('.image-container3').length;
        console.log('Liczba dodanych divów:', numberOfContainers);
    }
}

                if (czas === 'zdania' && czas !== 'fiszki') {
                    $('.grid-container .image-container3').remove();
                    $('.grid-container .image-container5').remove();
                    // Wyświetl pojedyncze zdania dla znalezionych lekcji
                    console.log('Warunek czas === "fiszki" jest spełniony');

                    if (myVariable.length > 1) {
                        // Inicjuj flagę dla wystąpienia zera
                        let zeroWylosowane = false;
                        // Losowy indeks, w którym pojawi się zero
                        let indexDiv = 0;
                        // Zmienna do kumulowania długości zdań
                        let previousCumulativeFirstPartLength3 = 0;  // Przechowywanie poprzedniej kumulacji dla lesson3
                        let cumulativeFirstPartLength1 = 0;
                        let cumulativeFirstPartLength2 = 0;
                        let cumulativeFirstPartLength3 = 0;

                        // Wyświetl fiszki dla każdej znalezionej pary lekcji
                        let startIndex = 0; // Zainicjuj startIndex poza pętlą
                        const lengthDividedByThree = myVariable.length;
                        let indices2 = [];
                        for (let i = 1; i <= lengthDividedByThree; i++) {
                            indices2.push(i);
                        }
                        let indices = [];
                        for (let i = 1; i <= lengthDividedByThree; i++) {
                            indices.push(i);
                        }
// Losowanie indeksu, który będzie miał wartość 0
                        const zeroIndex = Math.floor(Math.random() * (indexes.length)); // +1 aby uwzględnić dodanie zera na końcu
                        indexes[zeroIndex] = 0;

// Sprawdź czy tablica indexes zawiera zero

                        let shouldInsertNumbers = indexes.includes(0);

                        if (shouldInsertNumbers) {
                            let firstValue = indexes.length > 0 ? indexes[0] : 0;

                            // Utworzenie tablicy do wstawienia przed indexes, jeśli obie wartości nie są zerami
                            if (firstValue !== 0) {
                                let numbersToInsert = [];
                                for (let i = 1; i < firstValue; i++) {
                                    numbersToInsert.push(i);
                                }

                                // Wstawienie numbersToInsert przed indexes
                                indexes = [...numbersToInsert, ...indexes];
                            }
                        }

// Wyświetlenie zaktualizowanej tablicy indexes
                        console.log('Aktualizowane indeksy:', indexes);

                        const zeroIndex2 = index55 - 1;
                        // Wstawienie 0 na wylosowane miejsce
                        indices2[zeroIndex2] = 0;
                        console.log('hej166');
                        let indices3 = [];
                        // Inicjalizacja tablicy indices2 jako pustej tablicy
                        if (idpolski) {
                            for (let i = 1; i <= lengthDividedByThree; i++) {
                                // Dodawanie wartości true do tablicy indices2 dla każdej iteracji
                                indices3.push(true);
                            }
                            console.log('indices3:', indices3);
                        }
                            losowaniaCounter++; // Inkrementuj licznik przy każdym wywołaniu
    tablica33b.push(losowaniaCounter2); // Dodaj zaktualizowany licznik do tablicy
    console.log('hej1113', tablica33b); // Wyświetl zawartość tablicy
                        for (let i = 0; i < myVariable.length; i += 1) {
                            indexDiv++;
                            const lessonId1 = myVariable[i];
                            const newIndex = indexes[Math.floor(i)];
                            const index50 = indices2[Math.floor(i)];
                            const polski = idpolski ? indices3[i % indices3.length] : false;
                            console.log(`Iteration ${i}: polski =`, polski);

                            console.log('hej16d', myVariable[i]);
                            // Dodanie wartości true dla każdego lessonId w polski


                            // Znajdź długości drugiej części zdania dla każdej lekcji
                            const lesson1PartLength = partLengths3.find(item => item.id === lessonId1)?.cumulativeCount || 0;

                            // Obliczanie skumulowanych długości
                            cumulativeFirstPartLength1 += lesson1PartLength;

                            const cumulativeTotalFirstPartLength1 = cumulativeFirstPartLength1;

                            // Aktualizacja poprzedniej wartości skumulowanej dla następnej iteracji
                            previousCumulativeFirstPartLength3 = cumulativeFirstPartLength3;

                            const lessonObjectA = {
                                lessonId1: lessonId1,
                                index50: index50,
                                newIndex: newIndex,
                                lesson1PartLength: lesson1PartLength,
                                indexDiv: indexDiv,
                                polski: polski
                            };

                            // Dodawanie obiektu do tablicy lekcji
                            lessonsArrayA.push(lessonObjectA);
                            console.log('hej3334', lessonObjectA);


                            // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                            console.log('hej558', lessonsArrayA);
                            console.log('hej40', newIndex); // Wyświetl wartość startIndex
                            console.log('wykonuje się 7');
                            console.log('hej323', index55);

                            console.log('hej344');
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
                            if ((tablica15.length <= 39 || tablica15.length === 0)) {
                                console.log('wykonuje się 8');

                                showCombinedSentenceForLesson2(polski, index50, matchingIndexes, lessonId1, newIndex, indexDiv, lesson1PartLength);
                                console.log('hej321', polski);
                            }
                        }
                    }
                }

                // Ustaw wartość globalCategory
                globalCategory = category;

                // Aktualizuj atrybut href linku z użyciem JavaScript
                var link = document.getElementById('linkDoStrony');
                link.href = 'demo5.html?category=' + encodeURIComponent(globalCategory);

            }
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category');
            const tablica10 = [];
            const tablica15 = [];
            const tablica20 = [];
            console.log('hej55', tablica10);
            console.log('hej51', tablica15);
            let sentence1bVisible = false;
            let sentence1baVisible = false;
            let sentence1b3aVisible = false;
            let buttonindex = false;

            function showCombinedSentenceForLesson(matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3) {
                console.log('hej55bb', rodzaj);
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej450b', matchingIndexes2);
                console.log('hej444', newIndex);
                if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                    const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                    function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[0] : null;
                    }
                    function pobierzSrcWordDlaLekcji3(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
                    }
                    function pobierzSrcWordDlaLekcji2(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);

                    let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence11 = "";
                    let sentence20 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence22 = "";
                    let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence33 = "";
                    let sentence12 = " / ";
                    let sentence1b = " / ";
                    let sentence1b2 = " / ";
                    let sentence1b2a = "";
                    let sentence1b22 = "";
                    let sentence1c2a = "";
                    let sentence1c22 = "";
                    function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1FirstPartLength, lesson1PartLength) {
                        setTimeout(function () {
                            sentence10 = "";
                            sentence11 = "";
                            sentence20 = "";
                            sentence22 = "";
                           sentence30 = "";
                            sentence33 = "";
                            sentence1b = "";
                            sentence1b2 = "";
                            sentence1b2a = "";
                            sentence1b22 = "";
                            sentence1c2a = "";
                            sentence1c22 = "";

                            console.log('Rozpoczęcie funkcji addBackgroundToText');
                            console.log('matchingFiszki1:', matchingFiszki1);
                            console.log('lessonIdToShow1:', lessonIdToShow1);
                            console.log('matchingIndexes:', matchingIndexes);
                            console.log('currentIndexValue:', currentIndexValue);
                            console.log('aktualny:', aktualny);
                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                const fiszka = matchingFiszki1[i];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                }

                                // Iteracja przez elementy sentence1
                                for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                    let sentencePart = fiszka.sentence1[ki];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = i + lesson1PartLength + 1;
                                    console.log('indexToCheck5:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                        } else if (currentIndexValue == 0) {

                            if (sentence1b === "") {
                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                sentence1b += sentencePart333 + " ";
                            }

                            if (sentence1b2 === "") {
                                let sentencePart333 = fiszka.translate ? fiszka.translate : "";
                                sentence1b2 += sentencePart333 + " ";
                            }
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    console.log('sentencePart po przetworzeniu:', sentencePart); // Dodaj log po przetworzeniu
                                    sentence10 += sentencePart + " ";
                                }
                            }
                            console.log('final sentence10:', sentence10); // Dodaj log dla ostatecznego wyniku


                            for (let ii = 0; ii < matchingFiszki1.length; ii++) {
                                const fiszka = matchingFiszki1[ii];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }

                                // Iteracja przez elementy sentence1
                                for (let kii = 0; kii < fiszka.sentence2.length; kii++) {
                                    let sentencePart2 = fiszka.sentence2[kii];
                                    console.log('sentencePart5:', sentencePart2);
                                    const indexToCheck = ii + lesson1PartLength + 1;
                                    console.log('indexToCheck77:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                        } else if (currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    console.log('sentencePart2 po przetworzeniu:', sentencePart2);
                                    sentence11 += sentencePart2 + " ";
                                }
                            }
                            // Iteracja przez matchingFiszki2 dla sentence1
                            for (let j = 0; j < matchingFiszki2.length; j++) {
                                const fiszka = matchingFiszki2[j];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                }

                                // Iteracja przez elementy sentence1
                                for (let k = 0; k < fiszka.sentence1.length; k++) {
                                    let sentencePart = fiszka.sentence1[k];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = j + lesson2PartLength + 1;
                                    console.log('indexToCheck5:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                        } else if (currentIndexValue == 1) {

                            if (sentence1b2a === "") {
                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                sentence1b2a += sentencePart333 + " ";
                            }
                            if (sentence1b22 === "") {
                                let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                sentence1b22 += sentencePart444 + " ";
                            }
                            $('.sentence1b').html('');
                            $('.sentence1b2').html('');
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    sentence20 += sentencePart + " ";
                                }
                            }

                            // Iteracja przez matchingFiszki2 dla sentence2
                            for (let jj = 0; jj < matchingFiszki2.length; jj++) {
                                const fiszka = matchingFiszki2[jj];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }

                                // Iteracja przez elementy sentence2
                                for (let kk = 0; kk < fiszka.sentence2.length; kk++) {
                                    let sentencePart2 = fiszka.sentence2[kk];
                                    console.log('sentencePart2 przed przetworzeniem:', sentencePart2);
                                    const indexToCheck = jj + lesson2PartLength + 1;
                                    console.log('indexToCheck3:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    sentence22 += sentencePart2 + " ";
                                }
                            }

                            for (let l = 0; l < matchingFiszki3.length; l++) {
                                const fiszka = matchingFiszki3[l];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                }
                                // Iteracja przez elementy sentence1
                                for (let lm = 0; lm < fiszka.sentence1.length; lm++) {
                                    let sentencePart = fiszka.sentence1[lm];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = l + lesson3PartLength + 1;
                                    console.log('indexToCheck55:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2) {
                                                                        if (sentence1c2a === "") {
                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                sentence1c2a += sentencePart333 + " ";
                            }
                            if (sentence1c22 === "") {
                                let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                sentence1c22 += sentencePart444 + " ";
                            }
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    sentence30 += sentencePart + " ";
                                }
                            }
                            // Iteracja przez matchingFiszki2 dla sentence2
                            for (let lmm = 0; lmm < matchingFiszki3.length; lmm++) {
                                const fiszka = matchingFiszki3[lmm];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }

                                // Iteracja przez elementy sentence2
                                for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                    let sentencePart2 = fiszka.sentence2[lmn];
                                    console.log('sentencePart2 przed przetworzeniem:', sentencePart2);
                                    const indexToCheck = lmm + lesson3PartLength + 1;
                                    console.log('indexToCheck3:', indexToCheck);
                                    if (aktualny) {
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 1) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 2) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 2) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    sentence33 += sentencePart2 + " ";
                                }
                            }

                            // Dodanie treści do diva wraz z przyciskiem
                            $sentenceDivB.html(`
${sentence10}${sentence11}<br>
<div class="sentence1b">${sentence1b}</div>
        <div class="sentence1b2">${sentence1b2}</div>
${sentence20}${sentence22}<br>
<div class="sentence1b2a">${sentence1b2a}</div>
<div class="sentence1b22">${sentence1b22}</div>
${sentence30}${sentence33}<br>
<div class="sentence1c2a">${sentence1c2a}</div>
<div class="sentence1c22">${sentence1c22}</div>
`);

                        }, 0);

                    }
 // Zmienna do liczenia wystąpień indexToCheck
                    let sentence1bba = "";
                    let sentence1bbab = "";
                    function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3) {
                        $(document).ready(function () {

console.log('hejkh', matchingIndexes2);
                            sentence1bba = "";
                            sentence1bbab = "";
                            setTimeout(() => {
                                for (let i = 0; i < matchingFiszki1.length; i++) {
                                    const fiszka = matchingFiszki1[i];
                                    console.log('fiszka:', fiszka);
                                    if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                        console.log('fiszka.sentence2 is undefined or empty');
                                        continue;
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                        let sentencePart = fiszka.sentence1[ki];
                                        console.log('sentencePart5bz:', i);
                    const indexToCheck = i + lesson1PartLength + 1;
                    const indexToCheck2 = i + lesson1PartLength + 1;
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
                                    console.log('fiszka2:', fiszka);
                                    if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                        console.log('fiszka.sentence2 is undefined or empty');
                                        continue;
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let kii = 0; kii < fiszka.sentence2.length; kii++) {
                                        let sentencePart2 = fiszka.sentence2[kii];
                                        console.log('sentencePart5:', ii);
                                        const indexToCheck = ii + lesson1PartLength + 1;
                    const indexToCheck2 = ii + lesson1PartLength + 1;
                                        console.log('indexToCheck77:', indexToCheck);
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
console.log('Suma wystąpień5:', occurrences2);
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
                                    console.log('fiszka:', fiszka);
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
                                    console.log('fiszka:', fiszka);
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

                                console.log('hej20', sentence1bba);
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
                                    console.log('hej20', sentence1bba);

                                    // Dodanie treści do diva wraz z przyciskiem
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
                        console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                    }


                    let sentence1bb1b = "";
                    let sentence1bba2 = "";
                    function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3) {

                        $(document).ready(function () {
                            setTimeout(() => {
                                sentence1bb1b = "";
                                sentence1bba2 = "";
                                // Iteracja przez matchingFiszki2 dla sentence1
                                for (let j = 0; j < matchingFiszki2.length; j++) {
                                    const fiszka = matchingFiszki2[j];
                                    console.log('fiszka:', fiszka);
                                    if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                        console.log('fiszka.sentence1 is undefined or empty');
                                        continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let k = 0; k < fiszka.sentence1.length; k++) {
                                        let sentencePart = fiszka.sentence1[k];
                                        console.log('sentencePart5:', sentencePart);
                                        const indexToCheck = j + lesson2PartLength + 1;
                                        const indexToCheck2 = j + lesson2PartLength + 1;
                                        console.log('indexToCheck5:', indexToCheck);
                                        console.log('hej31', sentencePart);
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
function countCategoryInFiszki2(matchingFiszki2, category) {
    // Zmienna do przechowywania sumy wystąpień
    let totalCount = 0;

    // Iteracja przez wszystkie fiszki
    for (let j = 0; j < matchingFiszki2.length; j++) {
        const fiszka = matchingFiszki2[j];

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
const occurrences = countCategoryInFiszki2(matchingFiszki2, categoryToCount);
const occurrences2 = countCategoryInFiszki2(matchingFiszki2, categoryToCount2);
// Wypisywanie wyników
console.log('Suma wystąpień:', occurrences2);
    // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
        // Po zakończeniu iteracji przez fiszkę, sprawdź occurrences
        // Flaga sprawdzająca, czy podmiot został już dodany

if (aktualny && rodzaj === "play" && matchingIndexes2.includes(indexToCheck2)) {
    console.log('hej123', occurrences);
    // Sprawdź, czy to jest pierwsze słowo
    if (j === 0 && occurrences[0] === 2) {
        console.log('Podświetlono pierwsze słowo:', fiszka.sentence1[j]);
        const firstWordElement = document.createElement('span');
        firstWordElement.textContent = sentencePart;
        firstWordElement.classList.add('green'); // Dodaj klasę, która podświetla słowo na zielono
        sentencePart = firstWordElement.outerHTML; // Zamień pierwsze słowo na jego wersję z "span"
    }
    // Dodaj podmiot po drugim słowie, jeśli occurrences wynosi 2
    if (j === 1 && occurrences[0] === 2) {
        console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[j]);
        const podmiotElement = document.createElement('span');
        podmiotElement.textContent = sentencePart;
    podmiotElement.classList.add('green');
    sentencePart = podmiotElement.outerHTML;
        podmiotElement.textContent = "(podmiot)";

        // Rozdziel zdanie na słowa
        let words = sentencePart.split(' ');
        words.splice(2, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
        sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

    } else if (j === 0 && occurrences[0] === 1) {
        console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[j]);
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
    
       if (j === 2 && occurrences2[0] === 2) {
        console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[j]);
        const podmiotElement = document.createElement('span');
        podmiotElement.textContent = sentencePart;
    podmiotElement.classList.add('blue');
    sentencePart = podmiotElement.outerHTML;
        podmiotElement.textContent = "(czasownik)";

        // Rozdziel zdanie na słowa
        let words = sentencePart.split(' ');
        words.splice(2, 1, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
        sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

    } else if (j === 2 && occurrences2[0] === 1) {
        console.log('Dodano "podmiot" po drugim słowie:', fiszka.sentence1[j]);
        const podmiotElement = document.createElement('span');
        podmiotElement.textContent = sentencePart;
    podmiotElement.classList.add('blue');
    sentencePart = podmiotElement.outerHTML;
        podmiotElement.textContent = "(czasownik)";

        // Rozdziel zdanie na słowa
        let words = sentencePart.split(' ');
        words.splice(3, 0, podmiotElement.outerHTML); // Dodaj podmiot po drugim słowie
        sentencePart = words.join(' '); // Połącz z powrotem w jedno zdanie

    } else if (j === 1 && occurrences2[0] === 1) {
        console.log('Dodano "podmiot" po pierwszym słowie:', fiszka.sentence1[j]);
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
        sentence20 += sentencePart + " ";
                                        
                                    }
                                
                            }
                                // Iteracja przez matchingFiszki2 dla sentence2
                                for (let jj = 0; jj < matchingFiszki2.length; jj++) {
                                    const fiszka = matchingFiszki2[jj];
                                    console.log('fiszka2:', fiszka);
                                    if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                        console.log('fiszka.sentence2 is undefined or empty');
                                        continue;
                                    }

                                    // Iteracja przez elementy sentence2
                                    for (let kk = 0; kk < fiszka.sentence2.length; kk++) {
                                        let sentencePart2 = fiszka.sentence2[kk];
                                        console.log('sentencePart2 przed przetworzeniem:', sentencePart2);
                                        const indexToCheck = jj + lesson2PartLength + 1;
                                        console.log('indexToCheck3:', indexToCheck);
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
                                        sentence22 += sentencePart2 + " ";
                                    }
                                }
                                for (let li = 0; li < matchingFiszki2.length; li++) {
                                    const fiszka = matchingFiszki2[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart33 = fiszka.translateb;
                                    console.log('sentencePart3:', sentencePart33);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart33;
                                        sentencePart33 = spanElement.outerHTML;

                                    }
                                    sentence1bb1b += sentencePart33 + " ";
                                }
                                for (let li = 0; li < matchingFiszki2.length; li++) {
                                    const fiszka = matchingFiszki2[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart333 = fiszka.translate;
                                    console.log('sentencePart3:', sentencePart333);
                                    if (aktualny) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart333;
                                        sentencePart333 = spanElement.outerHTML;

                                    }
                                    sentence1bba2 += sentencePart333 + " ";
                                }

                                console.log('hej20', sentence1bb1b);
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
                            }, 0);
                        });
                    }







                    let sentence1bb3 = "";
                    let sentence1bb1c = "";

                    function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength) {
                        $(document).ready(function () {

                            sentence1bb3 = "";
                            sentence1bb1c = "";

                            for (let l = 0; l < matchingFiszki3.length; l++) {
                                const fiszka = matchingFiszki3[l];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue;
                                }
                                for (let lm = 0; lm < fiszka.sentence1.length; lm++) {
                                    let sentencePart = fiszka.sentence1[lm];
                                    console.log('sentencePart:', sentencePart);
                                    const indexToCheck = l + lesson3PartLength + 1;
                                    console.log('indexToCheck:', indexToCheck);
                                    if (aktualny && matchingIndexes.includes(indexToCheck)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.add('yellow');
                                        sentencePart = spanElement.outerHTML;
                                    }
                                    sentence30 += sentencePart + " ";
                                }
                            }

                            for (let lmm = 0; lmm < matchingFiszki3.length; lmm++) {
                                const fiszka = matchingFiszki3[lmm];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }
                                for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                    let sentencePart2 = fiszka.sentence2[lmn];
                                    const indexToCheck = lmm + lesson3PartLength + 1;
                                    if (aktualny && matchingIndexes.includes(indexToCheck)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart2;
                                        spanElement.classList.add('yellow');
                                        sentencePart2 = spanElement.outerHTML;
                                    }
                                    sentence33 += sentencePart2 + " ";
                                }
                            }

                            for (let z = 0; z < matchingFiszki3.length; z++) {
                                const fiszka = matchingFiszki3[z];
                                let sentencePart444b = fiszka.translateb ? fiszka.translateb : "";
                                const spanElement = document.createElement('span');
                                spanElement.textContent = sentencePart444b;
                                sentencePart444b = spanElement.outerHTML;
                                sentence1bb3 += sentencePart444b + " ";
                                console.log('hej59', sentencePart444b);
                            }

                            for (let zi = 0; zi < matchingFiszki3.length; zi++) {
                                const fiszka = matchingFiszki3[zi];
                                let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                if (aktualny) {
                                    const spanElement = document.createElement('span');
                                    spanElement.textContent = sentencePart444;
                                    sentencePart444 = spanElement.outerHTML;
                                }
                                sentence1bb1c += sentencePart444 + " ";
                            }

                            $sentenceDiv.html(`
        <button class="left-button first-button">+<br></button>
        ${sentence10}${sentence12}${sentence11}<br>
        <div class="sentence1bba">${sentence1bba}</div>
        <div class="sentence1bbab">${sentence1bbab}</div>
        <button class="left-buttonb second-button">+<br></button>
        ${sentence20}${sentence22}<br>
        <div class="sentence1bb1b">${sentence1bb1b}</div>
        <div class="sentence1bba2">${sentence1bba2}</div>
        <button class="left-buttonbb third-button">+<br></button>
        ${sentence30}${sentence33}<br>
        <div class="sentence1bb3" style="display: none;">${sentence1bb3}</div>
        <div class="sentence1bb1c" style="display: none;">${sentence1bb1c}</div>
    `);

                            $('.sentence1bb3').html('');
                            $('.sentence1bb1c').html('');

                            $sentenceDiv.on('click', '.left-buttonbb', function () {
                                console.log('hej55');

                                $('.sentence1bba').html('');
                                if (sentence1bb3 === "") {
                                    let sentencePart444b = fiszka.translateb ? fiszka.translateb : "";
                                    sentence1bb3 += sentencePart444b + " ";
                                }
                                if (sentence1bb1c === "") {
                                    let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                    sentence1bb1c += sentencePart444 + " ";
                                }

                                $sentenceDiv.html(`
                <button class="left-button first-button">+<br></button>
                ${sentence10}${sentence12}${sentence11}<br>
                <div class="sentence1bba">${sentence1bba}</div>
                <div class="sentence1bbab">${sentence1bbab}</div>
                <button class="left-buttonb second-button">+<br></button>
                ${sentence20}${sentence22}<br>
                <div class="sentence1bb1b">${sentence1bb1b}</div>
                <div class="sentence1bba2">${sentence1bba2}</div>
                <button class="left-buttonbb third-button">+<br></button>
                ${sentence30}${sentence33}<br>
                <div class="sentence1bb3">${sentence1bb3}</div>
                <div class="sentence1bb1c">${sentence1bb1c}</div>
            `);

                                $('.sentence1bba').html('');
                                $('.sentence1bbab').html('');
                                $('.sentence1bb1b').html('');
                                $('.sentence1bba2').html('');

                                $('.left-button').css('position', 'relative');
                                $('.left-buttonb').css('position', 'relative');
                                $('.left-buttonbb').css('position', 'relative');

                                console.log('Kliknięto przycisk');

                                let $sentence1bb3 = $sentenceDiv.find('.sentence1bb3');
                                if ($sentence1bb3.css('display') === 'none') {
                                    $sentence1bb3.css('display', 'block');
                                    $sentence1bb3.css({
                                        'margin-top': '-25px',
                                        'top': '24px',
                                        'position': 'relative'
                                    });
                                }

                                let $sentence1bb1c = $sentenceDiv.find('.sentence1bb1c');
                                if ($sentence1bb1c.css('display') === 'none') {
                                    $sentence1bb1c.css('display', 'block');
                                    $sentence1bb1c.css({
                                        'margin-top': '0px',
                                        'top': '23px',
                                        'position': 'relative'
                                    });
                                }

                                $sentence1bb1b.html('');
                                $sentence1bb1b.empty();

                            });

                            $sentence1bb1b.html('');
                            $sentence1bb1b.empty();
                        });
                    }


                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    $('.grid-container').append($container);

                    const srcWords = [srcWord1, srcWord2, srcWord3];
                    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];
                    const srcWordimage = [srcWord10];
                    console.log('hej155', srcWords2);
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

                    if (newIndex === 0 && !buttonindex) {
                        console.log('hej33b', buttonindex);
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                        function addVideo1(index) {
                            console.log('hej80', index);
                            // Sprawdź, czy jesteśmy poza zakresem tablicy
                            if (index >= srcWords.length && !funkcjaWywolana) {
                                przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                console.log("wykonuje się");
                                funkcjaWywolana = true;
                            }
                            // Usuń poprzednie wideo
                            removePreviousVideo();

                            console.log('hej78', index);
                            
                            // Dodaj div z wideo do tła kontenera
                            const $vidDiv = $('<div>').addClass('background-video').css({
                                'position': 'absolute',
                                'z-index': '1' // Ustaw z-index dla wideo na niższy
                            });
                            
                            const $videoElement = $('<video>').attr({
                                'autoplay': true,
                                'muted': true,
                                'loop': true
                            }).css({
                                'z-index': '1' // Ustaw z-index dla wideo na niższy
                            });
            if (window.matchMedia("(min-width: 999px)").matches) {
        // Dodaj klasę CSS zależnie od indeksu wideo
        if (index === 0) {
            $videoElement.addClass('scaled-video');
        } else {
            $videoElement.addClass('next-video');
        }
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
                                        if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                            addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength);
                                        }
                                    }

                                    // Sprawdź, czy wideo zostało zakończone
                                    if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');
                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo1(index + 1);
                                        updateProgress(0);
                                    }
                                });
                            });
                            addScenes(index);
                            // Dodaj div z wideo do tła kontenera
                            $vidDiv.appendTo($container);
                            function updateProgress(progress) {
                                // Aktualizuj pasek postępu na dole kontenera
                                $('.progress-bar').css('width', progress + '%');
                            }

                            // Inicjalizacja paska postępu
                            const $progressBar = $('<div>').addClass('progress-bar');
                                        if (window.matchMedia("(min-width: 999px)").matches) {
        $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0',
            'left': '0',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
            'margin-bottom': '-2%',
            'margin-left': '-4%',
            'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
        });
                                        } else {
                                                    $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0px',
            'left': '0px',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
        });
                                        }
                            $progressBar.appendTo($container);
// Funkcja dodająca nowe elementy <div>
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
            }
        }


// Tworzenie przycisku "Stop"
if (!stopButtonAdded) {
    const $stopButton = $('<img>')
        .attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png')
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
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/play.png');
                } else {
                    video.play();
                    // Zmień obrazek z powrotem na "Stop"
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png');
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
                                setTimeout(function () {
                                    addVideo1(0);
                                }, 0);
    } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                                function addVideo1b(index) {
                            console.log('hej80', index);
                            // Sprawdź, czy jesteśmy poza zakresem tablicy
                            if (index >= srcWords.length && !funkcjaWywolana) {
                                przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                console.log("wykonuje się");
                                funkcjaWywolana = true;
                            }
                            // Usuń poprzednie wideo
                            removePreviousVideo();

                            console.log('hej78', index);
                            
                            // Dodaj div z wideo do tła kontenera
                            const $vidDiv = $('<div>').addClass('background-video22').css({
                                'position': 'absolute',
                                'z-index': '1' // Ustaw z-index dla wideo na niższy
                            });
                            
                            const $videoElement = $('<video>').attr({
                                'autoplay': true,
                                'muted': true,
                                'loop': true
                            }).css({
                                'z-index': '1' // Ustaw z-index dla wideo na niższy
                            });
            if (window.matchMedia("(min-width: 999px)").matches) {
        // Dodaj klasę CSS zależnie od indeksu wideo
        if (index === 0) {
            $videoElement.addClass('scaled-video');
        } else {
            $videoElement.addClass('next-video');
        }
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
                                        if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                            addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength);
                                        }
                                    }

                                    // Sprawdź, czy wideo zostało zakończone
                                    if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');
                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo1b(index + 1);
                                        updateProgress(0);
                                    }
                                });
                            });
                            addScenes(index);
                            // Dodaj div z wideo do tła kontenera
                            $vidDiv.appendTo($container);
                            function updateProgress(progress) {
                                // Aktualizuj pasek postępu na dole kontenera
                                $('.progress-bar').css('width', progress + '%');
                            }

                            // Inicjalizacja paska postępu
                            const $progressBar = $('<div>').addClass('progress-bar');
if (window.matchMedia("(min-width: 999px)").matches) {
        $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0',
            'left': '0',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
            'margin-bottom': '-2%',
            'margin-left': '-4%',
            'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
        });
                                        } else {
                                                    $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0px',
            'left': '0px',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
        });
                                        }
                            $progressBar.appendTo($container);
// Funkcja dodająca nowe elementy <div>
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
            }
        }


// Tworzenie przycisku "Stop"
if (!stopButtonAdded) {
    const $stopButton = $('<img>')
        .attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png')
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
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/play.png');
                } else {
                    video.play();
                    // Zmień obrazek z powrotem na "Stop"
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png');
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
                                setTimeout(function () {
                                    addVideo1b(0);
                                }, 0);
    }
                    } else if (index50 === 0 && buttonindex) {
                        let stopButtonAdded = false;
    console.log('hej3338', newIndex);
    let funkcjaWywolana = false;
if (indexDiv % 2 === 0) {
    function addVideo2(index) {
        console.log('hej80', index);

        // Sprawdź, czy jesteśmy poza zakresem tablicy
        if (index >= srcWords.length && !funkcjaWywolana) {
            setTimeout(function () {
                $('.progress-bar').remove();
            }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
            przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
            console.log("wykonuje się");
            funkcjaWywolana = true;
        }

        // Usuń poprzednie wideo
        removePreviousVideo();
        console.log('hej78', index);

        // Dodaj div z wideo do tła kontenera
        const $vidDiv = $('<div>').addClass('background-video');
        
        // Utwórz element <video> i ustaw atrybuty
        const $videoElement = $('<video>').attr({
            'autoplay': true, // Automatyczne odtwarzanie wideo
            'muted': true, // Wyciszenie dźwięku wideo
            'loop': true // Zapętlenie wideo
        });
            if (window.matchMedia("(min-width: 999px)").matches) {
        // Dodaj klasę CSS zależnie od indeksu wideo
        if (index === 0) {
            $videoElement.addClass('scaled-video');
        } else {
            $videoElement.addClass('next-video');
        }
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
                    if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                        addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength);
                    }
                }

                // Sprawdź, czy wideo zostało zakończone
                if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                    console.log('Wideo zakończone, uruchamiam następne.');
                    // Odtwórz następne wideo po zakończeniu poprzedniego
                    addVideo2(index + 1);
                    updateProgress(0);
                }
            });
        });

        addScenes(index);
        // Dodaj wideo do kontenera
        $vidDiv.appendTo($container);

        function updateProgress(progress) {
            // Aktualizuj pasek postępu na dole kontenera
            $('.progress-bar').css('width', progress + '%');
        }

        // Inicjalizacja paska postępu
        const $progressBar = $('<div>').addClass('progress-bar');
                                        if (window.matchMedia("(min-width: 999px)").matches) {
        $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0',
            'left': '0',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
            'margin-bottom': '-2%',
            'margin-left': '-4%',
            'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
        });
                                        } else {
                                                    $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0px',
            'left': '0px',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
        });
                                        }
        $progressBar.appendTo($container);

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
        .attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png')
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
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/play.png');
                } else {
                    video.play();
                    // Zmień obrazek z powrotem na "Stop"
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png');
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

    addVideo2(0);
    } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
            function addVideo2b(index) {
        console.log('hej80', index);

        // Sprawdź, czy jesteśmy poza zakresem tablicy
        if (index >= srcWords.length && !funkcjaWywolana) {
            setTimeout(function () {
                $('.progress-bar').remove();
            }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
            przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
            console.log("wykonuje się");
            funkcjaWywolana = true;
        }

        // Usuń poprzednie wideo
        removePreviousVideo();
        console.log('hej78', index);

        // Dodaj div z wideo do tła kontenera
        const $vidDiv = $('<div>').addClass('background-video22');
        
        // Utwórz element <video> i ustaw atrybuty
        const $videoElement = $('<video>').attr({
            'autoplay': true, // Automatyczne odtwarzanie wideo
            'muted': true, // Wyciszenie dźwięku wideo
            'loop': true // Zapętlenie wideo
        });
            if (window.matchMedia("(min-width: 999px)").matches) {
        // Dodaj klasę CSS zależnie od indeksu wideo
        if (index === 0) {
            $videoElement.addClass('scaled-video');
        } else {
            $videoElement.addClass('next-video');
        }
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
                    if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                        addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength);
                    }
                }

                // Sprawdź, czy wideo zostało zakończone
                if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                    console.log('Wideo zakończone, uruchamiam następne.');
                    // Odtwórz następne wideo po zakończeniu poprzedniego
                    addVideo2b(index + 1);
                    updateProgress(0);
                }
            });
        });

        addScenes(index);
        // Dodaj wideo do kontenera
        $vidDiv.appendTo($container);

        function updateProgress(progress) {
            // Aktualizuj pasek postępu na dole kontenera
            $('.progress-bar').css('width', progress + '%');
        }

        // Inicjalizacja paska postępu
        const $progressBar = $('<div>').addClass('progress-bar');
                                        if (window.matchMedia("(min-width: 999px)").matches) {
        $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0',
            'left': '0',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '140%', // Delikatne powiększenie paska postępu o 2% w każdym kierunku
            'margin-bottom': '-2%',
            'margin-left': '-4%',
            'margin-right': '-4%' // Zapewnienie równowagi dla powiększenia paska postępu
        });
                                        } else {
                                                    $progressBar.css({
            'position': 'absolute',
            'z-index': '2',
            'bottom': '0px',
            'left': '0px',
            'height': '7px', // Wysokość paska postępu
            'background-color': 'green', // Kolor paska postępu
            'width': '100%' // Delikatne powiększenie paska postępu o 2% w każdym kierunku
        });
                                        }
        $progressBar.appendTo($container);

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
        .attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png')
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
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/play.png');
                } else {
                    video.play();
                    // Zmień obrazek z powrotem na "Stop"
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png');
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

    addVideo2b(0);
    }
} else {
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
                            if (indexDiv < 14) {
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
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3);
                            addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3);
                            addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength);
                        }
                        setTimeout(function () {
                            addVideo3(0);
                        }, 100);
                    }
                    // Stwórz przycisk za pomocą jQuery
                    // Tworzenie nowego elementu div za pomocą jQuery


                    if ((index50 === 0 && buttonindex) || (newIndex === 0 && !buttonindex)) {
                        var $sentenceDivB = $('<div></div>');
                        $sentenceDivB.addClass('sentenceBA'); // Dodanie klasy 'sentence'
                        $sentenceDivB.html(`
${sentence10}${sentence11}<br>
<div class="sentence1b">${sentence1b}</div>
        <div class="sentence1b2">${sentence1b2}</div>
${sentence20}${sentence22}<br>
<div class="sentence1b2a">${sentence1b2a}</div>
<div class="sentence1b22">${sentence1b22}</div>
${sentence30}${sentence33}<br>
        <div class="sentence1c2a">${sentence1c2a}</div>
<div class="sentence1c22">${sentence1c22}</div>
`);
$sentenceDivB.css({
    'position': 'absolute',
    'margin-top': '40px',
    'text-align': 'center',
    'z-index': '100'
});
                    } else {
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
                        $sentenceDiv.css({
                            'position': 'absolute',
                            'margin-top': '-50px',
                            'text-align': 'center',
                            'z-index': '5'
                        });
                    }
                    const $button = $('<button></button>');
                    $button.addClass('run-button');
                    $button.text('Uruchom'); // Ustawiamy tekst przycisku na 'Uruchom'
                    $button.attr('data-index', indexDiv);
                    $button.on('click', function () {

                        const index5 = $button.attr('data-index');
                        const index55 = parseInt(index5, 10); // Zamieniamy index55 na liczbę
                        // Alternatywnie można użyć Number(index55)
                        // const numericIndex = Number(index55);

                        setTimeout(() => {
                            console.log('Kliknięto przycisk o indeksie:', index55);
                            przekazArgument0(tablica3[2], index55, true, tablica3[0], true, true, tablica3[1], tablica3[4]);
                        }, 100);
                        // Usunięcie kontenera po wstawieniu nowego
                    });
                    $button.css({
                        'position': 'absolute',
                        'right': '-200px', // Przykładowa wartość odstępu od lewej krawędzi
                        'top': '5px',
                        'font-size': '10px',
                        'height': '30px',
                        'width': '170px',
                        'color': 'blue',
                        'background-color': 'white',
                        'z-index': '999999' // Ustawienie z-index dla buttona większe niż dla sentenceDiv
                    });
                    
                    $container.append($button);
                    const $buttonb2 = $('<button></button>');
                    $buttonb2.addClass('run-button3');
                    $buttonb2.text('Otwórz lekcję w nowym oknie'); // Ustawiamy tekst przycisku na 'Uruchom'
                    // Dodajemy atrybut 'data-index' z wartością indexDiv do przycisku

                    $buttonb2.attr('data-index2', indexDiv);
                    $buttonb2.on('click', function () {
                        const $clickedContainer = $container; // Przypisz kliknięty kontener do zmiennej

// Dodaj tło do nieklikniętych kontenerów
                        $('.image-container3').not($clickedContainer).each(function () {
                            const $container = $(this);

                            // Dodaj tło, jeśli jeszcze nie istnieje
                            if ($container.find('.background-overlay').length === 0) {
                                $('<div>')
                                        .addClass('background-overlay')
                                        .css({
                                            'position': 'absolute',
                                            'top': '0',
                                            'left': '0',
                                            'width': '100%',
                                            'height': '100%',
                                            'background-color': 'blue',
                                            'opacity': '0.35',
                                            'z-index': '1000' // Wyższy z-index dla tła, aby było na wierzchu
                                        })
                                        .appendTo($container);
                            }
                        });
                        // Usuń klasę .background-overlay po powrocie na stronę
                        $(window).on('pageshow', function () {
                            $('.background-overlay').remove();  // Usuwa wszystkie elementy z klasą .background-overlay
                            $clickedContainer = null; // Zresetuj kliknięty kontener
                        });

                        const index5b2 = $buttonb2.attr('data-index2');
                        const index55b2 = parseInt(index5b2, 10); // Zamieniamy index55 na liczbę
                        // Alternatywnie można użyć Number(index55)
                        // const numericIndex = Number(index55);

                        setTimeout(() => {
                            console.log('hej554', index55b2);
                            if (index55b2 === 1) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo1angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 2) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo2angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 3) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo3angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 4) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo4angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 5) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo5angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 6) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo6angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 7) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo7angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 8) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo8angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 9) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo9angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 10) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo10angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 11) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo11angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 12) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo12angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 13) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo13angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                        }, 1000);
                        // Usunięcie kontenera po wstawieniu nowego
                    });
                    $buttonb2.css({
                        'position': 'absolute', // Przykładowa wartość odstępu od lewej krawędzi
                        'margin-bottom': '-108px',
                        'font-size': '10px',
                        'height': '25px',
                        'color': 'blue',
                        'background-color': 'white',
                        'width': '170px',
                        'z-index': '9999999'
                    });
                    $container.append($buttonb2);
                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDiv);
                    $container.append($sentenceDivB);
                    tablica10.push(srcWords);
                    console.log('hej6', tablica10);

                }

                // Deklaracja tablicy, która będzie zawierać wszystkie tablice
            }
let isVideoPlaying = false;
            function showCombinedSentenceForLesson2(polski, index50, matchingIndexes, lessonIdToShow1, newIndex, indexDiv, lesson1PartLength) {
                // Tutaj reszta kodu funkcji
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki10 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                console.log('hej10', matchingFiszki10);

                if (matchingFiszki10.length > 0) {
                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                    const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[0] : null;
                    }
                    function pobierzSrcWordDlaLekcji2(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    function pobierzSrcWordDlaLekcji3(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
                    }
                    let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence11 = "";
                    let sentence1b = "";
                    let sentence1b2 = "";
                    function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1PartLength, polski) {
                        setTimeout(function () {
                            sentence10 = "";
                            sentence11 = "";
                            sentence1b = "";
                            sentence1b2 = "";
                            console.log('hej22', polski);
                            console.log('Rozpoczęcie funkcji addBackgroundToText');
                            console.log('matchingFiszki1:', matchingFiszki1);
                            console.log('lessonIdToShow1:', lessonIdToShow1);
                            console.log('matchingIndexes:', matchingIndexes);
                            console.log('currentIndexValue:', currentIndexValue);
                            console.log('aktualny:', aktualny);
                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                const fiszka = matchingFiszki1[i];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                }

                                // Iteracja przez elementy sentence1
                                for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                    let sentencePart = fiszka.sentence1[ki];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = i + lesson1PartLength + 1;
                                    console.log('indexToCheck5:', indexToCheck);
                                    if (aktualny) {
                                        if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            console.log('działa255', matchingIndexes.includes(indexToCheck));
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            if (!spanElement.classList.contains('highlighted-sentence')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            spanElement.classList.add('highlighted-sentence');
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    console.log('sentencePart po przetworzeniu:', sentencePart); // Dodaj log po przetworzeniu
                                    sentence10 += sentencePart + " ";
                                }
                            }
                            console.log('final sentence10:', sentence10); // Dodaj log dla ostatecznego wyniku


                            for (let ii = 0; ii < matchingFiszki1.length; ii++) {
                                const fiszka = matchingFiszki1[ii];
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }

                                // Iteracja przez elementy sentence1
                                for (let kii = 0; kii < fiszka.sentence2.length; kii++) {
                                    let sentencePart2 = fiszka.sentence2[kii];
                                    console.log('sentencePart5:', sentencePart2);
                                    const indexToCheck = ii + lesson1PartLength + 1;
                                    console.log('indexToCheck77:', indexToCheck);
                                    if (aktualny) {
                                        if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            console.log('hej678', pulpitstartowy);
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart2; // Użyj innerHTML zamiast textContent
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            console.log('działa22', indexToCheck);
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart2;
                                            if (!spanElement.classList.contains('highlighted-sentence')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart2;
                                            spanElement.classList.add('highlighted-sentence');
                                            sentencePart2 = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart2;
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            sentencePart2 = spanElement.outerHTML;
                                        }
                                    }

                                    console.log('sentencePart2 po przetworzeniu:', sentencePart2);
                                    sentence11 += sentencePart2 + " ";
                                }
                            }
                            // Iteracja przez elementy sentence1

                            // Iteracja przez matchingFiszki2 dla sentence2

                            for (let li = 0; li < matchingFiszki1.length; li++) {
                                const fiszka = matchingFiszki1[li];
                                console.log('fiszka:', fiszka);
                                let sentencePart333 = fiszka.translateb;
                                console.log('sentencePart333:', sentencePart333);
                                if (aktualny) {
                                    // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                    const spanElement = document.createElement('span');
                                    spanElement.textContent = sentencePart333;
                                    sentencePart333 = spanElement.outerHTML;
                                }
                                sentence1b += sentencePart333 + " ";
                            }
                            if (sentence1b === "") {
                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                sentence1b += sentencePart333 + " ";
                            }
                            for (let li = 0; li < matchingFiszki1.length; li++) {
                                const fiszka = matchingFiszki1[li];
                                console.log('fiszka:', fiszka);
                                let sentencePart333B = fiszka.translate;
                                console.log('sentencePart333:', sentencePart333B);
                                if (aktualny) {
                                    // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                    const spanElement = document.createElement('span');
                                    spanElement.textContent = sentencePart333B;
                                    sentencePart333B = spanElement.outerHTML;
                                }
                                sentence1b2 += sentencePart333B + " ";
                            }
                            if (sentence1b2 === "") {
                                let sentencePart333B = fiszka.translate ? fiszka.translate : "";
                                sentence1b2 += sentencePart333B + " ";
                            }
                            // Dodanie treści do diva wraz z przyciskiem

                            $sentenceDivB.html(`
${sentence10}${sentence11}<br>
<div class="sentence1b">${sentence1b}</div>
<div class="sentence1b2">${sentence1b2}</div>
`);

                            if ($sentence1b.css('display') === 'none') {
                                // Pokazujemy zdanie .sentence1bb
                                $sentence1b.css('display', 'block');
                                $sentence1b.css({
                                    'position': 'relative'
                                });
                            }
                        }, 0);
                    }

                    let sentence1bba = "";
                    let sentence1bbab = "";
                    function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, polski) {
                        console.log('hejkk10', indexDiv);
                        $(document).ready(function () {
                            sentence1bba = "";
                            sentence1bbab = "";
                            setTimeout(() => {
                                for (let i = 0; i < matchingFiszki1.length; i++) {
                                    const fiszka = matchingFiszki1[i];
                                    console.log('fiszka:', fiszka);
                                    if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                        console.log('fiszka.sentence1 is undefined or empty');
                                        continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                        let sentencePart = fiszka.sentence1[ki];
                                        console.log('sentencePart5:', sentencePart);
                                        const indexToCheck = i + lesson1PartLength + 1;
                                        console.log('indexToCheck5:', indexToCheck);
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

                                        sentence10 += sentencePart + " ";
                                    }
                                }
                                for (let ii = 0; ii < matchingFiszki1.length; ii++) {
                                    const fiszka = matchingFiszki1[ii];
                                    console.log('fiszka2:', fiszka);
                                    if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                        console.log('fiszka.sentence2 is undefined or empty');
                                        continue;
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let kii = 0; kii < fiszka.sentence2.length; kii++) {
                                        let sentencePart2 = fiszka.sentence2[kii];
                                        console.log('sentencePart5:', sentencePart2);
                                        const indexToCheck = ii + lesson1PartLength + 1;
                                        console.log('indexToCheck77:', indexToCheck);
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
                                        sentence11 += sentencePart2 + " ";
                                    }
                                }
                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    console.log('fiszka:', fiszka);
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
                                    console.log('fiszka:', fiszka);
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

                                console.log('hej20', sentence1bba);

                                $sentenceDiv.html(`
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bbab">${sentence1bbab}</div>
`);

                                    console.log('hej465', polski);
                                    $sentence1bba.css({
                                        'top': '0px',
                                        'position': 'relative'
                                    });
                                    $sentence1bbab.css({
                                        'top': '40px',
                                        'position': 'relative'
                                    });
                                
                            }, 300);
                        });
                        console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                    }



                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container4'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    $('.grid-container').append($container);
                    const srcWords = [srcWord1];
                    console.log('hej2', srcWords);
                    const srcWords2 = [srcWord1b];
                    console.log('hej2', srcWords2);
                    const srcWordimage = [srcWord10];
                    console.log('hej2', srcWordimage);
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
                    console.log('hej');
                    console.log('tablica11', videoDurations);
                    function removePreviousVideo() {
                        const previousVideo = $container.find('video'); // Poprawne odwołanie do poprzedniego wideo
                        if (previousVideo.length > 0) {
                            previousVideo.remove(); // Usunięcie poprzedniego wideo z kontenera
                        }
                    }

let currentVideoElement = null;
                    if (newIndex === 0 && !buttonindex) {
                        isVideoPlaying = true;
                        console.log('hej3331', buttonindex);
                        let stopButtonAdded = false;
                        let funkcjaWywolana = false;
                            // Definiowanie funkcji do sprawdzania widoczności wideo
    function isVideoVisible(videoElement) {
        const containerRect = videoElement.getBoundingClientRect();
        return (
            containerRect.top >= 0 &&
            containerRect.left >= 0 &&
            containerRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            containerRect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
                        function addVideo1(index) {
                            // Sprawdź, czy jesteśmy poza zakresem tablicy
                            if (index >= srcWords.length && !funkcjaWywolana) {
                                isVideoPlaying = false;
                                countVisibleContainers();
                                funkcjaWywolana = true;
                                przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                console.log("wykonuje się");
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
                            currentVideoElement = $videoElement[0]; // Zapisz element wideo
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
                                // Uruchomienie funkcji countVisibleContainers co 2 sekundy

                                $videoElement.on('timeupdate', function () {

                                    let adjustedProgress = 0;
                                    for (let i = 0; i < index; i++) {
                                        adjustedProgress += (videoDurations[i] / totalDuration) * 100;
                                    }
                                    adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[index] / totalDuration) * 100;
                                    updateProgress(adjustedProgress);
                                    console.log('hej786', index);
                                    // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                    if (!currentIndexValue.includes(index)) {
                                        // Dodaj index do tablicy currentIndex
                                        currentIndexValue.push(index);
                                        console.log('hej70', currentIndexValue);
                                        // Wywołaj funkcję addBackgroundToText tylko raz
                                        if (currentIndexValue[0] === 0) {
                                            addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1PartLength, polski);
                                        }
                                    }
                                    

                                    // Sprawdź, czy wideo zostało zakończone
                                    if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');
                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo1(index + 1);
                                        updateProgress(0);
                                      }
                                });
                            });
                            addScenes(index);
                            // Dodaj div z wideo do tła kontenera
                            $vidDiv.appendTo($container);
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
// Funkcja dodająca nowe elementy <div>
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
                            }
                            // Tworzenie przycisku "Stop"
if (!stopButtonAdded) {
    const $stopButton = $('<img>')
        .attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png')
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
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/play.png');
                } else {
                    video.play();
                    // Zmień obrazek z powrotem na "Stop"
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png');
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
                                setTimeout(function () {
                                    addVideo1(0);
                                }, 0);
                    } else if (index50 === 0 && buttonindex) {
                        let stopButtonAdded = false;
                        console.log('hej3331', buttonindex);
                        let funkcjaWywolana2 = false;
                        function addVideo2(index) {
                            console.log('hej80', index);
                            // Sprawdź, czy jesteśmy poza zakresem tablicy
                            if (index >= srcWords.length && !funkcjaWywolana2) {
                                setTimeout(function () {
                                    $('.progress-bar').remove();
                                }, 200); // Opóźnienie w milisekundach (tu: 1 sekunda)
                                buttonindex = false;
                                przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                console.log("wykonuje się");
                                funkcjaWywolana2 = true;
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
                                        if (currentIndexValue[0] === 0) {
                                            setTimeout(() => {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1PartLength, polski);
                                            }, 300);
                                        }
                                    }

                                    // Sprawdź, czy wideo zostało zakończone
                                    if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');
                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo2(index + 1);
                                        updateProgress(0);
                                    }
                                });
                            });
                            // Dodaj div z wideo do tła kontenera
                            $vidDiv.appendTo($container);
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
                            // Tworzenie przycisku "Stop"
if (!stopButtonAdded) {
    const $stopButton = $('<img>')
        .attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png')
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
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/play.png');
                } else {
                    video.play();
                    // Zmień obrazek z powrotem na "Stop"
                    $stopButton.attr('src', 'http://arbu-1dcc9.web.app/img/stopok2.png');
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
                                setTimeout(function () {
                                    addVideo2(0);
                                }, 0);
                    } else {
                        function addVideo3(index) {
                            // Utwórz element <video> i ustaw atrybuty
                            const $videoElement = $('<video>').attr({
                                'muted': true, // Wyciszenie dźwięku wideo
                                'loop': true, // Zapętlenie wideo
                                'style': 'z-index: 1',
                                'poster': srcWordimage[index] // Dodanie plakatu do wideo
                            });
                            // Utwórz element <div> dla nakładki
                            const $overlay = $('<div>').addClass('overlay');
                            const $buttonb = $('<img>').attr({
                                'src': 'http://arbu-1dcc9.web.app/img/startsystem.png', // Względna ścieżka do pliku PNG
                                'class': 'overlay-button' // Klasa dla stylów CSS
                            }).css({
                                'position': 'absolute',
                                'z-index': '1000002',
                                'bottom': '10px',
                                'right': '10px',
                                'width': '30px',
                                'height': '30px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                            });
                            // Dodaj element video do diva dla wideo
                            $videoElement.appendTo($container);
                            // Dodaj nakładkę do kontenera, po dodaniu wideo
                            $overlay.appendTo($container);
                            // Dodaj przycisk do nakładki
                            $buttonb.appendTo($container);

                            if (indexDiv < 34) {
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
// Ustal szerokości przycisków
const startSystemWidth = 30; // Szerokość startsystem
const quickLessonWidth = 95; // Szerokość przycisku "Szybka lekcja"

// Obsługa kliknięcia przycisku overlay
$buttonb.on('click', function () {
                                
    console.log('Button clicked');

    // Utwórz nowy przycisk "Szybka lekcja"
    const $loadButton = $('<button>').text('Szybka lekcja').addClass('slide-button');
    $loadButton.css({
        'position': 'absolute',
        'bottom': '10px',
        'right': '30px', // Początkowa pozycja przycisku na prawo od kontenera
        'width': '120px', // Szerokość przycisku
        'height': '30px',
        'cursor': 'pointer',
        'border-radius': '8px',
        'background-color': 'green', // Kolor przycisku
        'color': 'white',
        'display': 'block', // Pokazuje przycisk od razu
        'z-index': '1000001', // Z-index większy niż startsystem
        'text-align': 'left', // Wyrównanie tekstu do lewej (jeśli to potrzebne)
        'overflow': 'hidden' // Ukrywa nadmiar tekstu
    }).appendTo($container); // Dodaj do kontenera

    // Animacja: zwijanie przycisku "Szybka lekcja" w lewo
    $loadButton.animate({
        width: '0px', // Zmniejszenie szerokości do 0
        right: '10px'
    }, {
        duration: 1500, // Czas trwania animacji
        complete: function () {
            $(this).remove(); // Opcjonalnie: usuń przycisk po zakończeniu animacji
        }
    });
    // Utwórz nowy przycisk "Szybka lekcja"
            const $newButton = $('<button>').text('Wybierz słowo').addClass('slide-button');
            $newButton.css({
                'position': 'absolute',
                'bottom': '10px',
                'right': '30px',
                'width': '120px',
                'height': '30px',
                'cursor': 'pointer',
                'border-radius': '8px',
                'background-color': 'blue',
                'color': 'white',
                'display': 'block',
                'z-index': '1000000' // Bardzo wysoki z-index, aby był nad innymi elementami
            });
            $newButton.appendTo($container);
            
            // Animacja: chowanie przycisku "Szybka lekcja" w lewo
            $newButton.animate({
                right: '-110px'
            }, 500, function () {
                console.log('Szybka lekcja button hidden');
            });
                        // Sprawdź, czy kontener ma odpowiedni z-index i position
            $container.css({
                'position': 'relative', // Ustawienie position na relative, aby z-index działał
                'z-index': '1000003'
            });


                        highlightFirstWord();
        showFiszkiForLesson5(lessonIdToShow, fiszki);

});

function highlightFirstWord() {

    // Wybierz kontener na podstawie indexDiv
    const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);

    // Sprawdź, czy kontener istnieje
    if (matchingFiszki1.length > 0) {


        console.log('tablicaFiszki:', matchingFiszki1);
        // Zlokalizuj elementy z tekstem (np. div z klasą sentenceBB)
        const $sentence10 = $container.find('.sentenceBB');
        const $sentence11 = $container.find('.sentence11');

        // Sprawdź, czy element sentence10 istnieje
        if ($sentence10.length > 0 || sentence11.length > 0) {
            // Pobierz tekst z sentence10
            let sentenceText = $sentence10.html(); // Użyj html() zamiast text(), aby zachować znaczniki
            console.log('sentenceText:', sentenceText);

            // Podziel tekst na słowa, usuwając dodatkowe znaczniki HTML
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = sentenceText;
            let words = tempDiv.innerText.split(' '); // Użyj innerText, aby uzyskać tekst bez znaczników

            if (words.length > 0) {
                // Pobierz pierwsze, drugie i trzecie słowo
                let firstWord = words[0];
                let secondWord = words[1] || ''; // Upewnij się, że drugi wyraz istnieje
                let thirdWord = words[2] || ''; // Upewnij się, że trzeci wyraz istnieje
                let forthWord = words[3] || '';
                let fifthWord = words[4] || ''; // Upewnij się, że drugi wyraz istnieje
                let sixthWord = words[5] || ''; // Upewnij się, że trzeci wyraz istnieje
                
                // Utwórz nowe spany dla każdego słowa
                let highlightedSpan = `<span class="highlighted">${firstWord}</span>`;
                let highlightedSpan2 = `<span class="highlighted" style="display:none;">${secondWord}</span>`;
                let highlightedSpan3 = `<span class="highlighted" style="display:none;">${thirdWord}</span>`;
                let highlightedSpan4 = `<span class="highlighted" style="display:none;">${forthWord}</span>`;
                let highlightedSpan5 = `<span class="highlighted" style="display:none;">${fifthWord}</span>`;
                let highlightedSpan6 = `<span class="highlighted" style="display:none;">${sixthWord}</span>`;
                
                // Tworzymy przyciski z klasą CSS
                let button1 = `<button class="nav-button" id="prev-button">&lt;</button>`;
                let button2 = `<button class="next-button" id="nextbutton">&gt;</button>`;

                // Użyj html(), aby zachować znaczniki i odstępy
                $sentence10.html(`
                    ${button1} 
                    ${highlightedSpan} ${secondWord} ${thirdWord} ${forthWord} ${fifthWord} ${sixthWord}
                    ${button2}
                    <br>
                    <div class="sentence1b">${sentence1bba}</div>
                    <div class="sentence1b2">${sentence1bbab}</div>
                `); // Dodaj przyciski w odpowiednich miejscach

                let currentHighlightIndex = 0; // Zmienna do przechowywania aktualnego indeksu podświetlenia
                const currentWordIndex = 0; // Indeks aktualnej fiszki
                // Dodaj zdarzenie kliknięcia do button2
// Definicja funkcji, która obsługuje logikę podświetlenia
$(document).on('click', '.next-button', function() {
    // Ukryj bieżące podświetlenie i przełącz na następne
    if (currentHighlightIndex === 0) {
        // Zastąp highlightedSpan przez firstWord i aktywuj highlightedSpan2
        $sentence10.html(`
            ${button1} 
            ${firstWord} ${highlightedSpan2} ${thirdWord} ${forthWord} ${fifthWord} ${sixthWord}
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
        $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 1; // Przejdź do następnego indeksu
displayWords(1);
    } else if (currentHighlightIndex === 1) {
        // Zastąp highlightedSpan2 przez secondWord i aktywuj highlightedSpan3
        $sentence10.html(`
            ${button1} 
            ${firstWord} ${secondWord} ${highlightedSpan3} ${forthWord} ${fifthWord} ${sixthWord}
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
        $sentence10.find('.highlighted').eq(1).hide(); // Ukryj highlightedSpan2
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan3
        currentHighlightIndex = 2; // Przejdź do następnego indeksu
displayWords(2);
    } else if (currentHighlightIndex === 2) {
        console.log('Zmieniam podświetlenie z pierwszego na czwarte słowo.');
        $sentence10.html(`
            ${button1} 
            ${firstWord} ${secondWord} ${thirdWord} ${highlightedSpan4} ${fifthWord} ${sixthWord}
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
                    $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 3;
displayWords(3);
    } else if (currentHighlightIndex === 3) {
        console.log('Zmieniam podświetlenie z pierwszego na piąte słowo.');
        $sentence10.html(`
            ${button1} 
            ${firstWord} ${secondWord} ${thirdWord} ${forthWord} ${highlightedSpan5} ${sixthWord}
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
                    $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 4;
        displayWords(4);
    } else if (currentHighlightIndex === 4) {
        console.log('Zmieniam podświetlenie z pierwszego na szóste słowo.');
        $sentence10.html(`
            ${button1} 
            ${firstWord} ${secondWord} ${thirdWord} ${forthWord} ${fifthWord} ${highlightedSpan6}
            ${button2}
            <br>
            <div class="sentence1b">${sentence1bba}</div>
            <div class="sentence1b2">${sentence1bbab}</div>
        `);
                    $sentence10.find('.highlighted').first().hide(); // Ukryj highlightedSpan
        $sentence10.find('.highlighted').last().show(); // Pokaż highlightedSpan2
        currentHighlightIndex = 5;
        displayWords(5);
    }
        // Obsługa kliknięcia na "next" - przechodzenie do kolejnych słów

});

                // Funkcja displayWords przyjmuje teraz currentWordIndex
                function displayWords(nowy) {
                    console.log('hej4433', currentWordIndex);
                        const $wordContainer = $('<div>').attr('id', 'wordDisplay').css({
                            'position': 'absolute',
                            'bottom': '-20px',
                            'font-size': '22px',
                            'right': '-140px',
                            'width': '130px',
                            'height': '30px',
                            'text-align': 'center',
                            'line-height': '30px',
                            'color': 'black',
                            'background-color': 'lightgray',
    'border-radius': '8px',
    'border': '2px solid black',  // Dodaj obramowanie
                            'z-index': '1000000'
                        }).appendTo($container);
                        const $wordContainer2 = $('<div>').attr('id', 'wordDisplay2').css({
                            'position': 'absolute',
                            'bottom': '-280px',
                            'font-size': '22px',
                            'right': '-230px',
                            'width': '300px',
                            'height': '280px',
                            'text-align': 'center',
                            'line-height': '30px',
                            'border': '2px',
                            'color': 'black',
                            'background-color': 'lightgray',
                            'border-radius': '8px',
                            'z-index': '99999'
                        }).appendTo($container);
                        const $currentWordDisplay = $('<span>').appendTo($wordContainer);
                        const $currentWordDisplay2 = $('<span>').appendTo($wordContainer2);

                        let currentFiszkaIndex = nowy;

                        const $prevButton = $('<button>').text('<').css({
                            'position': 'absolute',
                            'left': '-20px',
                            'width': '30px',
                            'height': '30px',
                            'cursor': 'pointer',
                            'z-index': '1000001'
                        }).appendTo($wordContainer);

                        const $nextButton = $('<button>')
                            .text('>')
                            .attr('id', 'next-button') 
                            .addClass('next-button')
                            .css({
                                'position': 'absolute',
                                'right': '-20px',
                                'width': '30px',
                                'height': '30px',
                                'cursor': 'pointer',
                                'z-index': '1000001'
                            }).appendTo($wordContainer);

                        $prevButton.on('click', function() {
                            if (currentFiszkaIndex > 0) {
                                currentFiszkaIndex--;
                                console.log('Moving to previous fiszka, currentFiszkaIndex:', currentFiszkaIndex);
                                updateWordDisplay(currentWordIndex); 
                            }
                        });

                        $nextButton.on('click', function() {
                            if (currentFiszkaIndex < matchingFiszki1.length - 1) {
                                currentFiszkaIndex++;
                                currentWordIndex = nowy; 
                                console.log('Moving to next fiszka:', currentFiszkaIndex);
                                updateWordDisplay(currentWordIndex); 
                            }
                        });

    function updateWordDisplay() {
        const fiszka = matchingFiszki1[currentFiszkaIndex];
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
    
                        updateWordDisplay(currentWordIndex);
                        if (matchingFiszki1.length > 0) {
    matchingFiszki1.forEach(fiszka => {
        console.log('Przetwarzanie fiszki:', fiszka);
        // Tu możesz wywołać funkcję, która np. wyświetla fiszkę
        showFiszkiForLesson5(lessonIdToShow, fiszki);
    });
} else {
    console.log(`Nie znaleziono fiszek z kategorią "${category}".`);
}
                        function showFiszkiForLesson5(lessonIdToShow, fiszki) {
                            const matchingFiszki1b = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow);
console.log('hej55d', lessonIdToShow);
    if (matchingFiszki1b && matchingFiszki1b.length > 0) {
        console.log('hej55d', matchingFiszki1b[0]);
        const fiszka = matchingFiszki1b[0]; // Wybieramy pierwszą fiszkę
        matchingFiszki1b.forEach(fiszka => {
            const fiszkaBlock = generateFiszkaBlock(fiszka, lessonIdToShow); // Upewnij się, że funkcja generateFiszkaBlock zwraca element
            fiszkaBlock.appendTo($wordContainer2);
        });
    }
}
                }
                displayWords(currentWordIndex); // Wywołanie z indeksem
                showFiszkiForLesson5(lessonId, fiszki);
                
                // Dostosuj rozmiar czcionki
                updateWordDisplay(currentWordIndex);
                adjustFontSize($sentence10);
            } else {
                console.log('Nie znaleziono słów w sentence10.');
            }
        } else {
            console.log('Nie znaleziono elementu .sentence10 w kontenerze.');
        }
    } else {
        console.log('Nie znaleziono kontenera o data-lesson = ' + indexDiv);
    }
}


highlightFirstWord();

// Funkcja dostosowująca rozmiar czcionki
function adjustFontSize($sentence10) {
    const $sentenceContainer = $sentence10.closest('.image-container4');

    // Ustal początkowy rozmiar czcionki
    let fontSize = parseFloat($sentenceContainer.css('font-size'));
    console.log('Początkowy rozmiar czcionki:', fontSize);

    // Sprawdzenie, czy fontSize nie jest NaN
    if (isNaN(fontSize)) {
        console.error('Nie udało się pobrać rozmiaru czcionki.');
        return; // Zakończ funkcję, jeśli fontSize jest NaN
    }

    // Funkcja do obliczania, czy tekst mieści się w jednej linii
    const isTextOverflowing = () => {
        const textWidth = $sentenceContainer[0].scrollWidth; 
        const containerWidth = $sentenceContainer[0].clientWidth; 
        const overflowing = textWidth > containerWidth; 
        console.log('Szerokość tekstu:', textWidth, 'Szerokość kontenera:', containerWidth);
        console.log('Tekst przekracza szerokość jednej linii:', overflowing);
        return overflowing; // Zwróć informację, czy tekst przekracza szerokość
    };

    // Zmniejszaj rozmiar czcionki, aż tekst się zmieści w jednej linii
    while (isTextOverflowing() && fontSize > 8) { // Ustaw minimalny rozmiar czcionki
        console.log('Zmniejszanie rozmiaru czcionki z:', fontSize);
        fontSize -= 1; // Zmniejsz rozmiar czcionki
        $sentenceContainer.css('font-size', `${fontSize}px`);
        console.log('Nowy rozmiar czcionki:', fontSize);
    }

    if (fontSize <= 8) {
        console.log('Osiągnięto minimalny rozmiar czcionki.');
    }
}



                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, polski);
                        }
                        addVideo3(0);
                    }
                    let videoNotVisibleFlag = false;
                    // Funkcja do sprawdzania widoczności co określony czas
// Ustawienie interwału
const checkVideoVisibility = setInterval(() => {
    if (currentVideoElement && isVideoPlaying) {
        if (!isVideoVisible(currentVideoElement)) {
            if (!videoNotVisibleFlag) { // Sprawdź, czy funkcja już była wywołana
                console.log("Wideo jest niewidoczne, losowanie nowej tablicy...");
                isVideoPlaying = false;
                countVisibleContainers(); // Wywołaj funkcję losującą nowe tablice
                videoNotVisibleFlag = true; // Ustaw flagę, aby uniknąć kolejnych wywołań
            }
        }
    }
}, 1200); // Sprawdzaj co 1 sekundę

if ((index50 === 0) || (newIndex === 0)) {
                        var $sentenceDivB = $('<div></div>');
                        $sentenceDivB.addClass('sentenceBC'); // Dodanie klasy 'sentence'
                        $sentenceDivB.html(`
    ${sentence10}${sentence11}<br>
    <div class="sentence1b">${sentence1b}</div>
    <div class="sentence1b2">${sentence1b2}</div>
`);
                        $sentenceDivB.css({
                            'position': 'absolute',
                            'font-size': '18px',
                            'margin-top': '80px',
                            'text-align': 'center',
                            'z-index': '999'
                        });
                    } else {
                        var $sentenceDiv = $('<div></div>');
                        $sentenceDiv.addClass('sentenceBB'); // Dodanie klasy 'sentence'
                        $sentenceDiv.html(`
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bbab">${sentence1bbab}</div>
`);
                        $sentenceDiv.css({
                            'position': 'absolute',
                            'font-size': '18px',
                            'margin-top': '-10px',
                            'text-align': 'center',
                            'z-index': '5'
                        });
                    }

                    const $button = $('<button></button>');
                    $button.addClass('run-button2');
                    $button.text('Uruchom'); // Ustawiamy tekst przycisku na 'Uruchom'

                    // Dodajemy atrybut 'data-index' z wartością indexDiv do przycisku
                    $button.attr('data-index', indexDiv);
                    $button.on('click', function () {


                        const index5 = $button.attr('data-index');
                        const index55 = parseInt(index5, 10); // Zamieniamy index55 na liczbę
                        // Alternatywnie można użyć Number(index55)
                        // const numericIndex = Number(index55);
                        buttonindex = true;
                        setTimeout(() => {
                            console.log('Kliknięto przycisk o indeksie:', index55);
                            przekazArgument0(tablica3[2], index55, true, tablica3[0], true, true, tablica3[1], tablica3[4]);
                            console.log('hej26', czas);
                        }, 100);
                        // Usunięcie kontenera po wstawieniu nowego
                    });
                    $button.css({
                        'position': 'absolute',
                        'right': '-200px', // Przykładowa wartość odstępu od lewej krawędzi
                        'top': '5px',
                        'font-size': '10px',
                        'height': '30px',
                        'width': '170px',
                        'color': 'blue',
                        'background-color': 'white',
                        'z-index': '12' // Ustawienie z-index dla buttona większe niż dla sentenceDiv
                    });
                    $container.append($button);

                    const $buttonb2 = $('<button></button>');
                    $buttonb2.addClass('run-button3');
                    $buttonb2.text('Otwórz lekcję w nowym oknie'); // Ustawiamy tekst przycisku na 'Uruchom'
                    // Dodajemy atrybut 'data-index' z wartością indexDiv do przycisku
                    $buttonb2.attr('data-index2', indexDiv);
                    $buttonb2.on('click', function () {

                        const index5b2 = $buttonb2.attr('data-index2');
                        const index55b2 = parseInt(index5b2, 10); // Zamieniamy index55 na liczbę
                        // Alternatywnie można użyć Number(index55)
                        // const numericIndex = Number(index55);

                        setTimeout(() => {
                            console.log('hej554', index55b2);
                            if (index55b2 === 1) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo1angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 2) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo2angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 3) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo3angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 4) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo4angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 5) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo5angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 6) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo6angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 7) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo7angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 8) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo8angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 9) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo9angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 10) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo10angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 11) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo11angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 12) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo12angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 13) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo13angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 14) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo14angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 15) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo15angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 16) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo16angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 17) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo17angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 18) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo18angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 19) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo19angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 20) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo20angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 21) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo21angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 22) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo22angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 23) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo23angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 24) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo24angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 25) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo25angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 26) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo26angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 27) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo27angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 28) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo28angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 29) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo29angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 30) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo30angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 31) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo31angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 32) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo32angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 33) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo33angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                        }, 1000);
                        // Usunięcie kontenera po wstawieniu nowego
                    });
                    $buttonb2.css({
                        'position': 'absolute', // Przykładowa wartość odstępu od lewej krawędzi
                        'margin-bottom': '-108px',
                        'font-size': '10px',
                        'height': '25px',
                        'color': 'blue',
                        'background-color': 'white',
                        'width': '170px',
                        'z-index': '9999999'
                    });
                    $container.append($buttonb2);
                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDiv);
                    $container.append($sentenceDivB);
                    tablica15.push(srcWords);
                    console.log('hej6', tablica15);
                }
            }
            function showCombinedSentenceForLesson5(index50, lessonIdToShow1, newIndex, indexDiv, buttonindex, lessonLength) {
                // Tutaj reszta kodu funkcji
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[2] === lessonIdToShow1);
                const matchingFiszki10 = fiszki.filter(fiszka => fiszka.id[2] === lessonIdToShow1);
                console.log('hej10', matchingFiszki1);

                if (matchingFiszki10.length > 0) {
                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                    const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[2] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord2[0] : null;
                    }
                    function pobierzSrcWordDlaLekcji2(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    function pobierzSrcWordDlaLekcji3(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
                    }
                    let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence1b = "";
                    let sentence1b2 = "";
                    function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny) {
                        setTimeout(function () {
                            sentence10 = "";
                            sentence1b = "";
                            sentence1b2 = "";
                            console.log('hej22', polski);
                            console.log('Rozpoczęcie funkcji addBackgroundToText');
                            console.log('matchingFiszki1:', matchingFiszki1);
                            console.log('lessonIdToShow1:', lessonIdToShow1);
                            console.log('matchingIndexes:', matchingIndexes);
                            console.log('currentIndexValue:', currentIndexValue);
                            console.log('aktualny:', aktualny);
                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                const fiszka = matchingFiszki1[i];
                                console.log('fiszka:', fiszka);
                                if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                    console.log('fiszka.sentence1 is undefined or empty');
                                    continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                }

                                // Iteracja przez elementy sentence1
                                for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
                                    let sentencePart = fiszka.sentence1[ki];
                                    console.log('sentencePart5:', sentencePart);
                                    const indexToCheck = i + lesson1FirstPartLength + 1;
                                    console.log('indexToCheck5:', indexToCheck);
                                    if (aktualny) {
                                        if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            sentencePart = spanElement.outerHTML;
                                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                                            console.log('działa255', matchingIndexes.includes(indexToCheck));
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            if (!spanElement.classList.contains('highlighted-sentence')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 0) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            spanElement.classList.add('highlighted-sentence');
                                            sentencePart = spanElement.outerHTML;
                                        } else if (currentIndexValue == 1 && matchingIndexes.includes(indexToCheck)) {
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            spanElement.classList.remove('highlighted-sentence');
                                            spanElement.classList.add('yellow');
                                            sentencePart = spanElement.outerHTML;
                                        }
                                    }

                                    console.log('sentencePart po przetworzeniu:', sentencePart); // Dodaj log po przetworzeniu
                                    sentence10 += sentencePart + " ";
                                }
                            }
                            console.log('final sentence10:', sentence10); // Dodaj log dla ostatecznego wyniku
                            // Iteracja przez elementy sentence1

                            // Iteracja przez matchingFiszki2 dla sentence2

                            for (let li = 0; li < matchingFiszki1.length; li++) {
                                const fiszka = matchingFiszki1[li];
                                console.log('fiszka:', fiszka);
                                let sentencePart333 = fiszka.translateb;
                                console.log('sentencePart333:', sentencePart333);
                                if (aktualny) {
                                    // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                    const spanElement = document.createElement('span');
                                    spanElement.textContent = sentencePart333;
                                    sentencePart333 = spanElement.outerHTML;
                                }
                                sentence1b += sentencePart333 + " ";
                            }
                            if (sentence1b === "") {
                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                sentence1b += sentencePart333 + " ";
                            }
                            for (let li = 0; li < matchingFiszki1.length; li++) {
                                const fiszka = matchingFiszki1[li];
                                console.log('fiszka:', fiszka);
                                let sentencePart333 = fiszka.translate;
                                console.log('sentencePart333:', sentencePart333);
                                if (aktualny) {
                                    // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                    const spanElement = document.createElement('span');
                                    spanElement.textContent = sentencePart333;
                                    sentencePart333 = spanElement.outerHTML;
                                }
                                sentence1b2 += sentencePart333 + " ";
                            }
                            if (sentence1b2 === "") {
                                let sentencePart333 = fiszka.translate ? fiszka.translate : "";
                                sentence1b2 += sentencePart333 + " ";
                            }
                            // Dodanie treści do diva wraz z przyciskiem

                            $sentenceDivB.html(`
${sentence10}<br>
<div class="sentence1b">${sentence1b}</div>
<div class="sentence1b2">${sentence1b2}</div>
`);

                            if ($sentence1b.css('display') === 'none') {
                                // Pokazujemy zdanie .sentence1bb
                                $sentence1b.css('display', 'block');
                                $sentence1b.css({
                                    'margin-bottom': '0px',
                                    'top': '0px',
                                    'position': 'relative'
                                });
                            }
                        }, 0);
                    }

                    let sentence1bba = "";
                    let sentence1bbab = "";
                    function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lessonLength) {
                        $(document).ready(function () {
                            sentence1bba = "";
                            sentence1bbab = "";
                            setTimeout(() => {
                                for (let i = 0; i < matchingFiszki1.length; i++) {
                                    const fiszka = matchingFiszki1[i];
                                    console.log('fiszka:', fiszka);
                                    if (!fiszka.sentence || fiszka.sentence.length === 0) {
                                        console.log('fiszka.sentence1 is undefined or empty');
                                        continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                    }

                                    // Iteracja przez elementy sentence1
                                    for (let ki = 0; ki < fiszka.sentence.length; ki++) {
                                        let sentencePart = fiszka.sentence[ki];
                                        console.log('sentencePart5:', sentencePart);
                                        const indexToCheck = i + lessonLength + 1;
                                        console.log('indexToCheck5:', indexToCheck);
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

                                        sentence10 += sentencePart + " ";
                                    }
                                    break; // Zakończ pętlę po pierwszym przetworzeniu fiszki
                                }
                                for (let li = 0; li < matchingFiszki1.length; li++) {
                                    const fiszka = matchingFiszki1[li];
                                    console.log('fiszka:', fiszka);
                                    let sentencePart3 = fiszka.translateb2;
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
                                    console.log('fiszka:', fiszka);
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

                                console.log('hej20', sentence1bba);

                                $sentenceDiv.html(`
${sentence10}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bbab">${sentence1bbab}</div>
`);
                                if ($sentence1bba.css('display') === 'none') {
                                    // Pokazujemy zdanie .sentence1bb
                                    $sentence1bba.css('display', 'block');
                                    $sentence1bba.css({
                                        'margin-bottom': '-20px',
                                        'top': '0px',
                                        'position': 'relative'
                                    });
                                }
                            }, 300);
                        });
                        console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                    }



                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container5'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    $('.grid-container').append($container);
                    const srcWords = [srcWord1];
                    console.log('hej2', srcWords);
                    const srcWords2 = [srcWord1b];
                    console.log('hej2', srcWords2);
                    const srcWordimage = [srcWord10];
                    console.log('hej2', srcWordimage);
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
                    console.log('hej');
                    console.log('tablica11', videoDurations);
                    function removePreviousVideo() {
                        const previousVideo = $container.find('video'); // Poprawne odwołanie do poprzedniego wideo
                        if (previousVideo.length > 0) {
                            previousVideo.remove(); // Usunięcie poprzedniego wideo z kontenera
                        }
                    }

                    if (newIndex === 0 && !buttonindex) {
                        console.log('hej3331', buttonindex);
                        let funkcjaWywolana = false;
                        function addVideo1(index) {
                            // Sprawdź, czy jesteśmy poza zakresem tablicy
                            if (index >= srcWords.length && !funkcjaWywolana) {
                                funkcjaWywolana = true;
                                countVisibleContainers();
                                przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                console.log("wykonuje się");
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
                                // Uruchomienie funkcji countVisibleContainers co 2 sekundy

                                $videoElement.on('timeupdate', function () {
                                    let adjustedProgress = 0;
                                    for (let i = 0; i < index; i++) {
                                        adjustedProgress += (videoDurations[i] / totalDuration) * 100;
                                    }
                                    adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[index] / totalDuration) * 100;
                                    updateProgress(adjustedProgress);
                                    console.log('hej786', index);
                                    // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                    if (!currentIndexValue.includes(index)) {
                                        // Dodaj index do tablicy currentIndex
                                        currentIndexValue.push(index);
                                        console.log('hej70', currentIndexValue);
                                        // Wywołaj funkcję addBackgroundToText tylko raz
                                        if (currentIndexValue[0] === 0) {
                                            addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true);
                                        }
                                    }

                                    // Sprawdź, czy wideo zostało zakończone
                                    if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');
                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo1(index + 1);
                                        updateProgress(0);
                                    }
                                });
                            });
                            addScenes(index);
                            // Dodaj div z wideo do tła kontenera
                            $vidDiv.appendTo($container);
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
// Funkcja dodająca nowe elementy <div>
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
                            }
                        }
                        addVideo1(0);
                    } else if (index50 === 0 && buttonindex) {
                        console.log('hej3331', buttonindex);
                        let funkcjaWywolana2 = false;
                        function addVideo2(index) {
                            console.log('hej80', index);
                            // Sprawdź, czy jesteśmy poza zakresem tablicy
                            if (index >= srcWords.length && !funkcjaWywolana2) {
                                setTimeout(function () {
                                    $('.progress-bar').remove();
                                }, 200); // Opóźnienie w milisekundach (tu: 1 sekunda)
                                buttonindex = false;
                                przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4]);
                                console.log("wykonuje się");
                                funkcjaWywolana2 = true;
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
                                        if (currentIndexValue[0] === 0) {
                                            setTimeout(() => {
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true);
                                            }, 300);
                                        }
                                    }

                                    // Sprawdź, czy wideo zostało zakończone
                                    if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');
                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo2(index + 1);
                                        updateProgress(0);
                                    }
                                });
                            });
                            // Dodaj div z wideo do tła kontenera
                            $vidDiv.appendTo($container);
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
                        addVideo2(0);
                    } else {
                        function addVideo3(index) {
                            // Utwórz element <video> i ustaw atrybuty
                            const $videoElement = $('<video>').attr({
                                'muted': true, // Wyciszenie dźwięku wideo
                                'loop': true, // Zapętlenie wideo
                                'style': 'z-index: 1',
                                'poster': srcWordimage[index] // Dodanie plakatu do wideo
                            });
                            // Utwórz element <div> dla nakładki
                            const $overlay = $('<div>').addClass('overlay');
                            const $buttonb = $('<img>').attr({
                                'src': 'http://arbu-1dcc9.web.app/img/startsystem.png', // Względna ścieżka do pliku PNG
                                'class': 'overlay-button' // Klasa dla stylów CSS
                            }).css({
                                'position': 'absolute',
                                'z-index': '1000000',
                                'bottom': '10px',
                                'right': '10px',
                                'width': '30px',
                                'height': '30px',
                                'cursor': 'pointer',
                                'border-radius': '8px'
                            });
                            // Dodaj element video do diva dla wideo
                            $videoElement.appendTo($container);
                            // Dodaj nakładkę do kontenera, po dodaniu wideo
                            $overlay.appendTo($container);
                            // Dodaj przycisk do nakładki
                            $buttonb.appendTo($container);

                            // Dodaj funkcję hover do kontenera
                            $container.hover(function () {
                                $('.overlay', this).css('transform', 'translateX(0)');

                                // Twórz nowy dynamiczny div
                                const $dynamicDiv = $('<div>').addClass('dynamic-div').text('Szybka lekcja - kliknij');
                                // Dodaj dynamiczny div do kontenera
                                $dynamicDiv.appendTo($(this)).fadeIn(300);
                            }, function () {
                                $('.overlay', this).css('transform', 'translateX(100%)');

                                // Usuń dynamiczny div po zakończeniu hovera
                                $('.dynamic-div', this).fadeOut(300, function () {
                                    $(this).remove();
                                });
                            });
                            // Set up the click handler for the overlay button
                            $buttonb.on('click', function () {
                                console.log('Button clicked');

                                const $newButton = $('<button>').text('Szybka lekcja').addClass('slide-button');
                                $newButton.appendTo($container); // Append to container

                                console.log('New button added');

                                // Ensure button is visible before animating
                                $newButton.show();
                                console.log('Button should be visible');

                                $newButton.animate({
                                    right: '10px' // Move to visible position within the container
                                }, 500, function () {
                                    console.log('Animation complete');
                                });
                            });

                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lessonLength);
                        }
                        addVideo3(0);
                    }
                    if ((index50 === 0) || (newIndex === 0)) {
                        var $sentenceDivB = $('<div></div>');
                        $sentenceDivB.addClass('sentenceB'); // Dodanie klasy 'sentence'
                        $sentenceDivB.html(`
    ${sentence10}<br>
    <div class="sentence1b">${sentence1b}</div>
    <div class="sentence1b2">${sentence1b2}</div>
`);
                        $sentenceDivB.css({
                            'position': 'absolute',
                            'font-size': '18px',
                            'margin-top': '80px',
                            'text-align': 'center',
                            'z-index': '999'
                        });
                    } else {
                        var $sentenceDiv = $('<div></div>');
                        $sentenceDiv.addClass('sentence'); // Dodanie klasy 'sentence'
                        $sentenceDiv.html(`
    ${sentence10}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bbab">${sentence1bbab}</div>
`);
                        $sentenceDiv.css({
                            'position': 'absolute',
                            'font-size': '28px',
                            'margin-top': '-80px',
                            'text-align': 'center',
                            'z-index': '5'
                        });
                    }

                    const $button = $('<button></button>');
                    $button.addClass('run-button2');
                    $button.text('Uruchom'); // Ustawiamy tekst przycisku na 'Uruchom'

                    // Dodajemy atrybut 'data-index' z wartością indexDiv do przycisku
                    $button.attr('data-index', indexDiv);
                    $button.on('click', function () {


                        const index5 = $button.attr('data-index');
                        const index55 = parseInt(index5, 10); // Zamieniamy index55 na liczbę
                        // Alternatywnie można użyć Number(index55)
                        // const numericIndex = Number(index55);
                        buttonindex = true;
                        setTimeout(() => {
                            console.log('Kliknięto przycisk o indeksie:', index55);
                            przekazArgument0(tablica3[2], index55, true, tablica3[0], true, true, tablica3[1], tablica3[4]);
                            console.log('hej26', czas);
                        }, 100);
                        // Usunięcie kontenera po wstawieniu nowego
                    });
                    $button.css({
                        'position': 'absolute',
                        'left': '50%', // Przykładowa wartość odstępu od lewej krawędzi
                        'top': '10px',
                        'z-index': '10' // Ustawienie z-index dla buttona większe niż dla sentenceDiv
                    });
                    $container.append($button);
                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDiv);
                    $container.append($sentenceDivB);
                    tablica20.push(srcWords);
                    console.log('hej6', tablica20);
                }
            }



            function wybierzTematyke(tematyka) {
                console.log("Wybrana ulubiona tematyka fiszek: " + tematyka);
                // Dodaj logikę lub akcje związane z wyborem tematyki fiszek.
            }

            function wplecUlubioneFiszki() {
                console.log("Wpływaj ulubione fiszki!");
                // Dodaj logikę lub akcje związane z wpleceniem ulubionych fiszek.
            }
let visibleIndexes = [];
let previousVisibleIndexes = [];
let countVisibleContainersCalled = false;
let timeoutId = null;
let scrollTimeoutId = null;  // Nowy timeout dla scrollowania
let lastChangeTime = 0;
let isFirstCall = true;


function countVisibleContainers() {
    console.log('hej124', isVideoPlaying);
        // Sprawdź, czy wideo jest odtwarzane i widoczne
    if (isVideoPlaying && currentVideoElement && isVideoVisible(currentVideoElement)) {
        return; // Nie wykonuj nic, jeśli wideo jest odtwarzane i widoczne
    }
    indexes = [];

    $('.grid-container .image-container4').each(function (index) {
        
        const containerRect = this.getBoundingClientRect();
        const isVisible = (
            containerRect.top >= 0 &&
            containerRect.left >= 0 &&
            containerRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            containerRect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isVisible) {
            indexes.push(index + 1); // Dodanie +1, aby indeksy zaczynały się od 1
        }
    });

    // Jeśli to pierwsze wywołanie, uruchom od razu
    if (isFirstCall && indexes.length) {
        isFirstCall = false;
        console.log('Aktualne widoczne indeksy:', indexes);
        otherFunction(indexes);
    }

    // Obliczenie czasu od ostatniej zmiany
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastChangeTime;

    // Zresetuj losowanie previousVisibleIndexes przy każdym scrollowaniu, ale losuj tylko raz
    if (!scrollTimeoutId) {
        previousVisibleIndexes = [...indexes]; // Losowanie once
    }

    // Jeśli warunek jest spełniony i poprzedni timeout nie istnieje
if (indexes.length >= 8 && !hasPreviousIndexesBeenSet) {
        if (timeoutId) {
            clearTimeout(timeoutId); // Wyczyść poprzedni timeout, jeśli istnieje
        }
        // Ustaw timeout na 2 sekundy po zatrzymaniu scrollowania
        timeoutId = setTimeout(() => {
            previousVisibleIndexes = [...indexes]; // Losowanie
            hasPreviousIndexesBeenSet = true;
            console.log('Aktualne widoczne indeksy:', indexes);
            otherFunction(indexes);
            timeoutId = null; // Resetuj timeoutId po wykonaniu funkcji
        }, 200); // Czekaj 2 sekundy od ostatniego scrollowania
    }

    // Aktualizacja czasu ostatniej zmiany
    lastChangeTime = currentTime;
}

            let debounceTimer;

            $(window).on('scroll', function () {
                // Jeśli istnieje aktywny timer, anuluj go
                clearTimeout(debounceTimer);
hasPreviousIndexesBeenSet = false;
                // Ustaw nowy timer
                debounceTimer = setTimeout(function () {
                                                            console.log('hej5432');
                    // Wywołanie funkcji po zakończeniu przewijania

                }, 1000); // Czas w milisekundach, po którym funkcja zostanie wywołana
            });

// Funkcja otherFunction z przekazanymi indeksami
            function otherFunction(indexes) {

                console.log('Przekazane indeksy do otherFunction:', indexes);
                console.log('wywołana');
                przekazArgument0(tablica3[2], undefined, false, 'zdania', false, false, tablica3[1], tablica3[4]);
            }
            document.addEventListener("DOMContentLoaded", () => {
    // Pobierz userAgent przeglądarki
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Warunki sprawdzające czy aplikacja to Messenger lub Facebook
    const isFacebookMessenger = /FBAN|FBAV|Messenger/i.test(userAgent);

    // Jeśli wykryto, że strona jest otwierana z Messengera
    if (isFacebookMessenger) {
        alert("Wykryto, że przeglądasz stronę w Messengerze. Dla pełnej funkcjonalności zalecamy otwarcie strony w przeglądarce, np. Chrome.");

        // Dodanie sugestii z przyciskiem do otwarcia strony w przeglądarce
        const suggestion = document.createElement('div');
        suggestion.innerHTML = `
            <div style="position: fixed; top: 20px; left: 20px; right: 20px; background: rgba(255, 255, 255, 0.9); padding: 15px; border: 1px solid #ccc; z-index: 9999; border-radius: 5px;">
                <p style="font-size: 16px; color: #333;">Aby w pełni korzystać ze strony, otwórz ją w przeglądarce Chrome.</p>
                <button id="openInChrome" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Otwórz w Chrome</button>
            </div>
        `;
        document.body.appendChild(suggestion);

        // Obsługa kliknięcia przycisku
        document.getElementById('openInChrome').addEventListener('click', () => {
            // Otwórz stronę w zewnętrznej przeglądarce
            window.open(window.location.href, '_blank');
        });
    }
});

            @media (min-width: 999px) {
                .sentence-container {
    display: flex; /* Użyj flexboxa dla wyrównania w linii */
    align-items: center; /* Wyrównaj pionowo do środka */
}

.nav-button {
    font-size: 0.8em; /* Dostosuj rozmiar czcionki przycisków */
    margin: 0 5px; /* Marginesy między przyciskami a tekstem */
}

.highlighted {
    color: green; /* Kolor dla wyróżnionego słowa */
    font-weight: bold; /* Opcjonalnie: pogrubienie dla wyróżnionego słowa */
}

.blink {
    animation: blink-animation 1s steps(5, start) infinite; /* Przykład animacji mrugania */
}

@keyframes blink-animation {
    to {
        visibility: hidden;
    }
}
                .bottom-bar {
    display: none;
}

.show {
    transform: translateY(-60px); /* Pasek widoczny po załadowaniu */
}
.hidden {
    transform: translateY(100%); /* Schowanie paska poza ekran */
}
.bottom-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    font-size: 8px;
    border-radius: 5px;
    cursor: pointer;
}

.bottom-button:hover {
    background-color: #45a049;
}

.lupka {
    position: absolute;
    width: auto;
    height: 30px;
    cursor: pointer;
}

.toggle-button {
    display: none;
}

#arrow {
    font-size: 20px;
}

.show-toggle-button {
    bottom: 60px; /* Strzałka przesuwa się do góry gdy pasek jest widoczny */
}
                /* Styl dla głównego kontenera */
                .container {
                    position: relative;
                    display: flex;
                    align-items: flex-start; /* Ustawienie wyrównania elementów wertykalnie */
                    justify-content: space-between;
                    z-index: 99999999;
                }
                .content-container {
                    position: relative;
                }
                /* Styl dla menu pionowego */
                .side-menu {
                    width: 118px;
                    margin-right: 20px;
                }
                .left-button,
                .left-buttonb,
                .left-buttonbb{
                color: orange;
                border-radius: 5px;
                }
                .white-text {
                    color: white !important;
                }
                .side-menu button {
                    display: block;
                    margin-bottom: 10px;
                    width: 100%;
                    padding: 8px 15px;
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                }
                
                @keyframes blinkBackground {
                    0% {
                        background-color: yellow;
                    }
                    50% {
                        background-color: transparent;
                    }
                    100% {
                        background-color: yellow;
                    }
                }

                .blinking {
                    animation: blinkBackground 1s infinite;
                }
                .image-container {
                    width: 330px;
                    position: relative;
                    height: auto;
                    left: 0px;
                    margin-right: 0px;
                }

                .image-container2 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    width: 330px;
                    position: relative;
                    height: 100px;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 20px;
                }

            .image-container3 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: blue;
                width: 330px;
                position: relative;
                min-height: 100px;
                height: auto;
                margin-bottom: 0px;
                align-items: center;
                font-size: 20px;
                margin-top: 10px;
                order: -1; /* Kolejność odwrotna - spycha w dół */
            }
                .background-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: yellow;
                    opacity: 0.7;
                    z-index: 1000; /* Wysoki z-index, aby było na wierzchu */
                }

                .background-video {
                    position: absolute;
                    z-index: 1; /* Wideo, ustaw na niższy z-index */
                }
                .image-container4 {
                    display: flex;
                        white-space: nowrap; /* Wymusza jedną linię */
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    width: 330px;
                    position: relative;
                    height: auto;
                    min-height: 100px;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 20px;
                    margin-top: 10px;
                    order: -1; /* Kolejność odwrotna - spycha w dół */
                    z-index: 1; /* Tło kontenera, ustaw na większy z-index niż wideo */
                }
                .image-container5 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    width: 330px;
                    position: relative;
                    min-height: 100px;
                    height: auto;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 20px;
                    margin-top: 10px;
                    order: -1; /* Kolejność odwrotna - spycha w dół */
                    z-index: 10; /* Tło kontenera, ustaw na większy z-index niż wideo */
                }
            .scene-description {
                position: absolute;
                font-size: 15px;
                top: 10px; /* Odległość od górnej krawędzi kontenera */
                right: -120px; /* Przesunięcie w lewo o 120 pikseli, aby wystawał poza prawą krawędź */
                background-color: #000;
                color: #fff;
                padding: 5px 10px;
                z-index: 1000;
                white-space: nowrap; /* Zapobiega zawijaniu tekstu */
            }
            .scene-description2 {
                position: absolute;
                font-size: 15px;
                top: 10px; /* Odległość od górnej krawędzi kontenera */
                left: -100px; /* Odległość od górnej krawędzi kontenera */
                background-color: #000;
                color: #fff;
                padding: 5px 10px;
                z-index: 1000;
                white-space: nowrap; /* Zapobiega zawijaniu tekstu */
            }
                .overlay-button {
                    position: relative;
                    z-index: 1000;
                white-space: nowrap; /* Zapobiega zawijaniu tekstu */
                    bottom: 10px;
                    right: 10px;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    border-radius: 8px;
                }
                .slide-button {
                    position: relative; /* Position relative to the container */
                    bottom: 10px;
                    right: -40px; /* Start position off-screen */
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    border-radius: 8px;
                    background-color: blue;
                    color: white;
                    display: none; /* Hide initially */
                    z-index: 1000;
                white-space: nowrap; /* Zapobiega zawijaniu tekstu */
                }
                .container:hover .overlay {
                    transform: translateX(0); /* Przesuwanie div-a na swoje miejsce */
                }
                .image-container3:hover .overlay {
                    opacity: 1; /* Nakładka widoczna przy najechaniu */
                }

                .run-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: none; /* Ukrycie przycisku */
                    z-index: 2; /* Wyższy z-index, aby przycisk był na wierzchu */
                }

                .image-container3:hover .run-button {
                    display: block; /* Wyświetlenie przycisku na hover */
                }
                .image-container3:hover .run-button3 {
                    display: block; /* Wyświetlenie przycisku na hover */
                }
                .run-button2 {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: none; /* Ukrycie przycisku */
                    z-index: 2; /* Wyższy z-index, aby przycisk był na wierzchu */
                }
                .run-button3 {
                    position: absolute;
                    bottom: 105px;
                    right: 20px;
                    display: none; /* Ukrycie przycisku */
                    z-index: 99999; /* Wyższy z-index, aby przycisk był na wierzchu */
                }
                .dynamic-div {
                    position: absolute;
                    bottom: 5px; /* Ustawienie w dowolnym miejscu w kontenerze */
                    left: 10px;
                    font-size: 15px;
                    width: 150px; /* Szerokość dynamicznego div-a */
                    height: 20px; /* Wysokość dynamicznego div-a */
                    background-color: rgba(255, 0, 0, 0.5); /* Przezroczyste tło */
                    color: white;
                    z-index: 1000; /* Wyższy z-index, aby był nad overlay */
                    display: none; /* Początkowo ukryty */
                    font-size: 10px;
                }

                .image-container4:hover .run-button2 {
                    display: block; /* Wyświetlenie przycisku na hover */
                }
                .image-container4:hover .run-button3 {
                    display: block; /* Wyświetlenie przycisku na hover */
                }

                .sentence1bba,
                .sentence1bbab,
                sentence1bb1b,
                sentence1bba2,
                sentence1bb3,
                sentence1bb1c {
                    font-size: 16px;
                    margin-bottom: 0px;
                    z-index: 9999;
                    color: white;
                }
                .sentence1b,
                .sentence1b2,
                .sentence1b2a,
                .sentence1b22,
                .sentence1c2a,
                .sentence1c22 {
                    font-size: 16px;
                    margin-top: 0px;
                    z-index: 9999;
                    color: white;
                }
                .sentence {
                    margin-bottom: -90px;
                    color: white;
                    z-index: 9999;
                }

                .sentenceB {
                    margin-top: 80px;
                    color: white;
                    z-index: 9999;
                }
                .sentenceBA {
                    margin-top: 80px;
                    color: white;
                    z-index: 9999;
                    color: blue;
                }
                                .sentenceBB {
                    margin-top: 80px;
                    color: white;
                    z-index: 9999;
                }
                .sentenceBC {
                    margin-top: 80px;
                    z-index: 9999;
                    color: white;
                }
                .sentence10,
                .sentence11,
                .sentence20,
                .sentence22,
                .sentence30,
                .sentence33 {
                    margin-bottom: 20px;
                    font-size: 15px;
                    color: white;
                    z-index: 9999;
                }

                .button1,
                .button2 {
                    height: 0px;
                    width: 0px;
                }
                .highlighted-sentence {
                    background-color: rgba(255, 255, 0, 0.5); /* Kolor tła z opacity */
                    color: white;
                }
                                .highlighted-sentence1 {
                    background-color: rgba(255, 255, 0, 0.5); /* Kolor tła z opacity */
                    color: white;
                }
                .highlighted {
    background-color: #2ecc71;
    color: red; /* Lub dowolny styl */
}
                .yellow {
                    color: yellow;
                }
                                .green {
    background-color: rgba(0, 255, 0, 0.5);
                }
                                                .blue {
    background-color: rgba(0, 0, 255, 0.5);
                }
                .flashcard-container {
                    width: 1350px;
                    height: 260px;
                    background-color: #2ecc71; /* Zielony kolor, możesz dostosować według potrzeb */
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    gap: 10px;
                    padding: 10px;
                    box-sizing: border-box;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    left: 675px;
                    margin-top: 470px;
                }
                #buttoncreate {
                    background-color: blue;
                }
                #buttoncreate.active {
                    background-color: #2ecc71;
                }

                .flashcard-container #konsola {
                    width: 500px;
                    margin-left: -10px;
                    margin-right: -10px;
                }

                #konsola button {
                    border-radius: 8px; /* Tutaj możesz dostosować wielkość zaokrąglenia */
                    /* Dodatkowe style przycisków */
                    border: 1px solid black;
                    padding: 3px;
                    margin: 3px;
                    background-color: #2ecc71;
                    color: white;
                    cursor: pointer;
                }
                .grid-containera {
                    width: 0px;
                    height: 0px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                    text-align: center;
                    position: relative;
                    align-items: center;
                }

                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    margin-bottom: 20px;
                    gap: 20px;
                    position: relative;
                    margin-top: 90px;
                    margin-right: 0px;
                    top: 20px;
                }
                .spacer {
                    height: 20px; /* Dostosuj wysokość przestrzeni spacerowej */
                }

                .image {
                    position: relative;
                    width: 100%;
                    height: auto;
                }

                video {
                    position: relative;
                    width: 100%;
                    height: auto;
                }
                @keyframes scaleAnimation {
                    from {
                        transform: scale(1);
                    }
                    to {
                        transform: scale(1.1); /* Dostosuj poziom powiększenia według preferencji */
                    }
                }

                .scaled-video {
                    animation: scaleAnimation 2s ease-in-out forwards;
                }
                .next-video {
                    transform: scale(1.1);
                }
                .progress-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 5px; /* Wysokość paska postępu */
                    background-color: #007bff; /* Kolor paska postępu */
                }
                .progress-bar2 {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 5px; /* Wysokość paska postępu */
                    background-color: #007bff; /* Kolor paska postępu */
                }

                #mojeVideo::-webkit-media-controls {
                    /* Ukryj kontrolki dla przeglądarek opartych na silniku Chromium (np. Chrome) */
                    display: none !important;
                }

                #mojeVideo::-webkit-media-controls-enclosure {
                    /* Ukryj kontrolki dla przeglądarek opartych na silniku Chromium (np. Chrome) */
                    display: none !important;
                }

                #mojeVideo::-webkit-media-controls-panel {
                    /* Ukryj kontrolki dla przeglądarek opartych na silniku Chromium (np. Chrome) */
                    display: none !important;
                }

                #mojeVideo {
                    /* Ukryj kontrolki dla innych przeglądarek */
                    appearance: none;
                    outline: none;
                    width: 100%; /* Dostosuj szerokość wideo */
                    height: auto; /* Dostosuj wysokość wideo */
                }

                .caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size: 10px;
                    color: white;
                    width: 100%;
                    text-align: left;
                    box-sizing: border-box;
                    z-index: 1;
                }

                .image:hover .caption {
                    opacity: 1;
                }

                .image {
                    width: 100%;
                    height: auto;
                }

                .caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding-bottom: 8px;
                    font-size: 15px; /* Rozmiar czcionki */
                    font-family: Arial, sans-serif; /* Wybór czcionki */
                    color: white; /* Ustawienie koloru tekstu na biały */
                    -webkit-text-stroke: 1px blue; /* Obramowanie tekstu w przeglądarkach opartych na silniku WebKit */
                    text-stroke: 1px white; /* Obramowanie tekstu */
                    width: 100%;
                    text-align: left;
                    box-sizing: border-box;
                    z-index: 1;
                }

                .image-container:hover .caption {
                    opacity: 1;
                }

                /* Styl dla paska poziomego z tagami */
                .horizontal-bar {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    margin-bottom: 10px;
                }

                .horizontal-bar button {
                    padding: 8px 15px;
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                    border: solid;
                    border-radius: 8px;
                }
                .green-button {
                    background-color: green;
                    color: white;
                }
                .zaznaczony-rodzaj {
                    border: 3px solid green;
                }

                .zaznaczony-charakter {
                    border: 3px solid blue;
                }
            }
            @media (max-width: 999px) {
                /* Stylizacja modala */
                #part {
                    margin-bottom: 100px;
                    text-align: center;
                }
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

button123 {
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

button123:hover {
    background-color: #45a049;
}
                /* Styl dla głównego kontenera */
                .container {
                    display: flex;
                    max-width: 100%; /* Zapobiega przekroczeniu szerokości ekranu */
                    box-sizing: border-box;
                }
                .content-container {
                    position: relative;
                }
                /* Styl dla menu pionowego */
                .side-menu {
                    display: none;
                    width: 118px;
                    margin-right: 20px;
                }

                .side-menu button {
                    display: none;
                    margin-bottom: 10px;
                    width: 100%;
                    padding: 8px 15px;
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                }
                                .left-button,
                .left-buttonb,
                .left-buttonbb {
                    font-size: 7px;
                    width: 20px;
                    height: 20px;
                color: orange;
                border-radius: 5px;
                }
                @keyframes blinkBackground {
                    0% {
                        background-color: yellow;
                    }
                    50% {
                        background-color: transparent;
                    }
                    100% {
                        background-color: yellow;
                    }
                }

                .blinking {
                    animation: blinkBackground 1s infinite;
                }
                .image-container {
                    width: 330px;
                    position: relative;
                    height: auto;
                    left: 0px;
                    margin-right: 0px;
                }

                .image-container2 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    max-width: 100%; /* Zapobiega przekroczeniu szerokości ekranu */
                    position: relative;
                    height: 100px;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 20px;
                }

                .image-container3 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    min-height: 100px;
                    width: 100%;
                    box-sizing: border-box;
                    align-items: center;
                    font-size: 20px;
                    z-index: 999;
                }/* Tło */
                .image-container3b {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    position: relative;
                    height: 240px;
                    min-width: 330px;
                    box-sizing: border-box;
                    align-items: center;
                    font-size: 20px;
                    z-index: 999;
    order: 0; /* Domyślna kolejność */
    z-index: 1;
                }/* Tło */
                .background-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: yellow;
                    opacity: 0.7;
                    z-index: 1000; /* Wysoki z-index, aby było na wierzchu */
                }

                .background-video {
                                        height: 100%;
                    min-height: 100px;
                    width: 100%;
                    position: absolute;
                    border-left: 3px solid orange;
                    border-top: 3px solid orange;
                    border-right: 3px solid orange;
                    border-bottom: 3px solid orange;
                    z-index: 1; /* Wideo, ustaw na niższy z-index */
                }
                .background-video22 {
                                        height: 100%;
                    min-height: 100px;
                    width: 100%;
                    position: absolute;
                    border-left: 3px solid orange;
                    border-top: 3px solid orange;
                    border-right: 3px solid orange;
                    border-bottom: 3px solid orange;
                    z-index: 1; /* Wideo, ustaw na niższy z-index */
                }
                .image-container4 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    height: auto;
                    min-height: 100px;
                    width: 100%;
                    box-sizing: border-box;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 15px;
                    margin-top: 10px;
                    z-index: 9999;
                }/* Tło */
                .image-container5 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    position: relative;
                    height: auto;
                    min-height: 100px;
                    width: 100%;
                    box-sizing: border-box;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 15px;
                    margin-top: 10px;
                    order: -1; /* Kolejność odwrotna - spycha w dół */
                }/* Tło */
                .scene-description {
                    position: absolute;
                    font-size: 10px;
                    top: 5px; /* Odległość od górnej krawędzi kontenera */
                    right: -120px; /* Przesunięcie w lewo o 120 pikseli, aby wystawał poza prawą krawędź */
                    background-color: #000;
                    color: #fff;
                    padding: 5px 10px;
                    z-index: 99999999;
                    white-space: nowrap; /* Zapobiega zawijaniu tekstu */
                }
                .scene-description2 {
                    position: absolute;
                    font-size: 10px;
                    top: 5px; /* Odległość od górnej krawędzi kontenera */
                    left: -100px; /* Odległość od górnej krawędzi kontenera */
                    background-color: #000;
                    color: #fff;
                    padding: 5px 10px;
                    z-index: 999999999;
                    white-space: nowrap; /* Zapobiega zawijaniu tekstu */
                }
                .overlay-button {
                    position: absolute;
                    z-index: 1000000;
                    bottom: 10px;
                    right: -70px;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    border-radius: 8px;
                }
                .slide-button {
                    position: absolute; /* Position relative to the container */
                    bottom: 10px;
                    right: -40px; /* Start position off-screen */
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    border-radius: 8px;
                    background-color: blue;
                    color: white;
                    display: none; /* Hide initially */
                    z-index: 1000001; /* Ensure it's above other elements */
                }
                .container:hover .overlay {
                    transform: translateX(0); /* Przesuwanie div-a na swoje miejsce */
                }
                .image-container3:hover .overlay {
                    opacity: 1; /* Nakładka widoczna przy najechaniu */
                }

                .run-button {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 330px;
                    transform: translate(-50%, -50%);
                    display: none; /* Ukrycie przycisku */
                    z-index: 999999999; /* Wyższy z-index, aby przycisk był na wierzchu */
                }

                .image-container3:hover .run-button {
                    display: block; /* Wyświetlenie przycisku na hover */
                    z-index: 99999; /* Wyższy z-index na hover */
                }
                                .image-container3b:hover .run-button {
                    display: block; /* Wyświetlenie przycisku na hover */
                    z-index: 99999; /* Wyższy z-index na hover */
                }

                button.left-button.first-button:hover {
    z-index: 99999; /* Wyższy z-index na hover */
    display: block; /* Wyświetlenie przycisku na hover */
}
.image-container3:hover {
    z-index: 99999; /* Wyższy z-index na hover */
}

.image-container3 .run-button3 {
    display: none; /* Domyślnie ukryty przycisk */
}

.image-container3:hover .run-button3 {
    display: block; /* Pokazywanie przycisku na hover */
    z-index: 999999; /* Z-index wyższy niż inne elementy */
}
.image-container3b:hover {
    z-index: 99999; /* Wyższy z-index na hover */
}

.image-container3b .run-button3 {
    display: none; /* Domyślnie ukryty przycisk */
}

.image-container3b:hover .run-button3 {
    display: block; /* Pokazywanie przycisku na hover */
    z-index: 999999; /* Z-index wyższy niż inne elementy */
}
                .run-button2 {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: none; /* Ukrycie przycisku */
                    z-index: 2; /* Wyższy z-index, aby przycisk był na wierzchu */
                }
.run-button3 {
    display: none;
    position: absolute;
    margin-bottom: 100px;
    z-index: 9999999;
}
                .dynamic-div {
                    position: absolute;
                    top: 10px; /* Ustawienie w dowolnym miejscu w kontenerze */
                    left: 10px;
                    font-size: 10px;
                    width: 70px; /* Szerokość dynamicznego div-a */
                    height: 20px; /* Wysokość dynamicznego div-a */
                    background-color: rgba(255, 0, 0, 0.5); /* Przezroczyste tło */
                    color: white;
                    z-index: 1000; /* Wyższy z-index, aby był nad overlay */
                    display: none; /* Początkowo ukryty */
                }

                .image-container4:hover .run-button2 {
                    display: block; /* Wyświetlenie przycisku na hover */
                }
                .image-container4:hover .run-button3 {
                    display: block; /* Wyświetlenie przycisku na hover */
                }
                                .image-container4b:hover .run-button2 {
                    display: block; /* Wyświetlenie przycisku na hover */
                }
                .image-container4b:hover .run-button3 {
                    display: block; /* Wyświetlenie przycisku na hover */
                }
                .sentence1b,
                .sentence1b2,
                .sentence1b22,
                .sentence1b2a,
                .sentence1c22,
                .sentence1c2a {
                    font-size: 7px;
                    z-index: 99999999;
                    color: white;
                }
                .sentence1bba,
                .sentence1bbab {
                    font-size: 10px;
                    z-index: 9999;
                }

                .sentence {
                    font-size: 8px;
                    margin-bottom: -60px;
                    color: white;
                    z-index: 9999;
                }

                .sentenceBA {
                    font-size: 9px;
                    margin-top: 150px;
                    color: white;
                    z-index: 9999;
                }
                .sentenceBB {
                    font-size: 10px;
                    margin-bottom: -25px;
                    color: white;
                    z-index: 9999;
                }
                                .sentenceBC {
                    font-size: 12px;
                    margin-bottom: 60px;
                    color: white;
                    z-index: 9999;
                }

                .sentence10,
                .sentence11,
                .sentence20,
                .sentence22,
                .sentence30,
                .sentence33 {
                    font-size: 8px;
                    color: white;
                    z-index: 1;
                }

                .button1,
                .button2 {
                    height: 0px;
                    width: 0px;
                }
                .highlighted-sentence {
                    background-color: rgba(255, 255, 0, 0.5); /* Kolor tła z opacity */
                    color: white;
                }
                                .highlighted-sentence1 {
                    background-color: rgba(255, 255, 0, 0.5); /* Kolor tła z opacity */
                    color: white;
                }
                .yellow {
                    color: yellow;
                }
                                .green {
    background-color: green;
                }
                .flashcard-container {
                    width: 390px;
                    height: 470px;
                    background-color: #2ecc71; /* Zielony kolor, możesz dostosować według potrzeb */
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 10px;
                    box-sizing: border-box;
                    position: absolute;
                    margin-top: 770px;
                }
                #buttoncreate {
                    background-color: blue;
                }
                #buttoncreate.active {
                    background-color: #2ecc71;
                }

                .flashcard-container #konsola {
                    margin-left: -10px;
                    margin-right: -10px;
                }
                .flashcard-container #konsola2 {
                    display: none;
                    margin-left: -10px;
                    margin-right: -10px;
                }
                #konsola3 {
                    display: none;
                }
                #konsola4 {
                    display: none;
                }
                #konsola button {
                    border-radius: 8px; /* Tutaj możesz dostosować wielkość zaokrąglenia */
                    /* Dodatkowe style przycisków */
                    border: 1px solid black;
                    padding: 3px;
                    margin: 3px;
                    background-color: #2ecc71;
                    color: white;
                    cursor: pointer;
                }
                #konsola2 button {
                    display: none;
                    border-radius: 8px; /* Tutaj możesz dostosować wielkość zaokrąglenia */
                    /* Dodatkowe style przycisków */
                    border: 1px solid black;
                    padding: 3px;
                    margin: 3px;
                    background-color: #2ecc71;
                    color: white;
                    cursor: pointer;
                }
                .grid-containera {
                    display: grid;
                    width: 100%;
                    grid-template-columns: repeat(2, 1fr);
                    position: relative;
                    gap: 0px;
                    text-align: center;
                    align-items: center;
                    z-index: 1;
                }

                .grid-container {
                    display: grid;
                    box-sizing: border-box; /* Ustawienie box-sizing */
                    width: 100%; /* Zapewnienie, że kontener zajmuje 100% szerokości */
                    grid-template-columns: repeat(2, 1fr);
                    gap: 3px; /* Można dostosować zgodnie z potrzebami */
                    position: relative;
                    padding-top: 30px; /* Ustawienie marginesów zgodnie z potrzebami */
                    margin-bottom: 0; /* Ustawienie marginesów zgodnie z potrzebami */
                    z-index: 1;
                }
                                .grid-containerb {
                    display: grid;
                    box-sizing: border-box; /* Ustawienie box-sizing */
                    width: 100%; /* Zapewnienie, że kontener zajmuje 100% szerokości */
                    grid-template-columns: repeat(1, 1fr);
                    gap: 3px; /* Można dostosować zgodnie z potrzebami */
                    position: relative;
                    padding-top: 30px; /* Ustawienie marginesów zgodnie z potrzebami */
                    margin-right: 0; /* Ustawienie marginesów zgodnie z potrzebami */
                    overflow: hidden; /* Ukrywanie wszelkiego poziomego przewijania */
                    z-index: 1;
                }

                body {
                    overflow-x: hidden; /* Ukrywanie poziomego przewijania w body */
                }
                .spacer {
                    height: 20px; /* Dostosuj wysokość przestrzeni spacerowej */
                }

                .image {
                    position: relative;
                    width: 100%;
                    height: auto;
                }

                video {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    object-fit: cover;  /* Zapewnia wypełnienie całego kontenera bez luk */
                }
                @keyframes scaleAnimation {
                    from {
                        transform: scale(1);
                    }
                    to {
                        transform: scale(1.1); /* Dostosuj poziom powiększenia według preferencji */
                    }
                }

                .scaled-video {
                    animation: scaleAnimation 2s ease-in-out forwards;
                }
                .next-video {
                    transform: scale(1.1);
                }
                .progress-bar {
                    position: absolute;
                    bottom: 3px;
                    left: 0;
                    height: 4px; /* Wysokość paska postępu */
                    background-color: #007bff; /* Kolor paska postępu */
                }
                .progress-bar2 {
                    position: absolute;
                    bottom: 3px;
                    left: 0;
                    height: 4px; /* Wysokość paska postępu */
                    background-color: #007bff; /* Kolor paska postępu */
                }

                #mojeVideo::-webkit-media-controls {
                    /* Ukryj kontrolki dla przeglądarek opartych na silniku Chromium (np. Chrome) */
                    display: none !important;
                }

                #mojeVideo::-webkit-media-controls-enclosure {
                    /* Ukryj kontrolki dla przeglądarek opartych na silniku Chromium (np. Chrome) */
                    display: none !important;
                }

                #mojeVideo::-webkit-media-controls-panel {
                    /* Ukryj kontrolki dla przeglądarek opartych na silniku Chromium (np. Chrome) */
                    display: none !important;
                }

                #mojeVideo {
                    /* Ukryj kontrolki dla innych przeglądarek */
                    appearance: none;
                    outline: none;
                    width: 100%; /* Dostosuj szerokość wideo */
                    height: auto; /* Dostosuj wysokość wideo */
                }

                .caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size: 10px;
                    color: white;
                    width: 100%;
                    text-align: left;
                    box-sizing: border-box;
                    z-index: 1;
                }

                .image:hover .caption {
                    opacity: 1;
                }

                .image {
                    width: 100%;
                    height: auto;
                }

                .caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding-bottom: 8px;
                    font-size: 15px; /* Rozmiar czcionki */
                    font-family: Arial, sans-serif; /* Wybór czcionki */
                    color: white; /* Ustawienie koloru tekstu na biały */
                    -webkit-text-stroke: 1px blue; /* Obramowanie tekstu w przeglądarkach opartych na silniku WebKit */
                    text-stroke: 1px white; /* Obramowanie tekstu */
                    width: 100%;
                    text-align: left;
                    box-sizing: border-box;
                    z-index: 1;
                }

                .image-container:hover .caption {
                    opacity: 1;
                }

                /* Styl dla paska poziomego z tagami */
                .horizontal-bar {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    margin-bottom: 10px;
                }

                .horizontal-bar button {
                    padding: 8px 15px;
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                    border: solid;
                    border-radius: 8px;
                }
                .green-button {
                    background-color: green;
                    color: white;
                }
                .zaznaczony-rodzaj {
                    border: 3px solid green;
                }

                .zaznaczony-charakter {
                    border: 3px solid blue;
                }
.bottom-bar {
    position: fixed;
    bottom: -60px; /* Domyślnie schowany */
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: transform 0.3s ease;
}

.show {
    transform: translateY(-60px); /* Pasek widoczny po załadowaniu */
}
.hidden {
    transform: translateY(100%); /* Schowanie paska poza ekran */
}
.bottom-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    font-size: 8px;
    border-radius: 5px;
    cursor: pointer;
}
.bottom-button2 {
    width: 50px;                  /* Ustaw szerokość przycisku */
    height: 30px;                 /* Ustaw wysokość przycisku (opcjonalnie) */
    background-color: transparent; /* Tło przezroczyste */
    border: none;                 /* Usuwa obramowanie */
    cursor: pointer;              /* Ustawia kursor na wskaźnik */
    overflow: hidden;             /* Ukrywa wszelkie elementy wychodzące poza przycisk */
    padding: 0;                   /* Ustawia padding na 0 */
}
.bottom-button:hover {
    background-color: #45a049;
}

.lupka {
    position: absolute; /* Pozwala na pozycjonowanie w kontekście rodzica */
    width: 40px; /* Ustaw szerokość obrazka */
    height: 40px; /* Ustaw wysokość obrazka */
    cursor: pointer;
    background-color: green;
    border-radius: 8px;
    right: 10px; /* Dostosuj pozycjonowanie, aby był w prawym rogu */
    top: 10px; /* Ustaw odległość od dołu */
    right: 25px;
}

.toggle-button {
    position: fixed;
    bottom: 0;
    right: 20px;
    background-color: #333;
    color: white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1001;
    transition: bottom 0.3s ease;
}

#arrow {
    font-size: 20px;
}

.show-toggle-button {
    bottom: 60px; /* Strzałka przesuwa się do góry gdy pasek jest widoczny */
}
            }
            
            
        przekazArgument0(tablica3[2], '', false, 'fiszki', true, true, tablica3[1], tablica3[4]);
                    ustawTryb('fiszki');
                    
                    
                            ],
        // historia
        story: [
                "<u><b>Hola</u></b>lá, ez a <u><b>sát</u></b>or túl drága! Csak <u><b>halászatra</u></b> megyünk"
        ],
        // opis
        desc: "fishing[] - halászat",
        //zdanie
        sentence2: [
                "fishing"
        ],
        sentence: [
                "for",
                "fishing"
        ],
        
        
                // Dodaj buttony do diva
                $flashcardContainer.append(`
<div id="konsola">
    <div id="title">WIDOK</div>
<button class="rodzaj-button" data-rodzaj="osoby">SPOŁECZNOŚCIOWY</button>        
    <button class="rodzaj-button" data-rodzaj="osoby">WYGENEROWANY JEDNORAZOWO</button>
            <div id="title">RODZAJ SŁOWNICTWA</div>
                    <button class="rodzaj-button" data-rodzaj="osoby">KOGNATY</button>
    <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '', tablica3[1])">Wszystkie</button>
    <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('osoby', '', '', '', '', '', tablica3[1], 'other')">Osoby</button>
    <button class="rodzaj-button" data-rodzaj="zaimki osobowe" onclick="przekazArgument0('zaimkiosobowe', '', '', '', '', '', tablica3[1], 'other')">Zaimki osobowe</button>
    <button id="inne" onclick="przekazArgument0('emocje', '', '', '', '', '', tablica3[1])">Emocje</button>
    <button class="rodzaj-button" data-rodzaj="zaimki" onclick="przekazArgument0('spojniki', '', '', '', '', '', tablica3[1])">Spójniki</button>
    <button id="inne" onclick="przekazArgument0('kolory', '', '', '', '', '', tablica3[1])">Kolory</button>
    <button id="inne" class="rodzaj-button" data-rodzaj="zwierzeta" onclick="przekazArgument0('zwierzeta', '', '', '', '', '', tablica3[1])">Zwierzęta</button>
    <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument0('czasownik', '', '', '', '', '', tablica3[1])">Czasowniki</button>
    <br>ILOŚĆ MATERIAŁU NA LEKCJE<br>
<button class="czas" onclick="ustawTryb('zdania', undefined); przekazArgument0(globalCategory, '', '', 'zdania', false, false, tablica3[1])">5 MINUT (JEDNO ZDANIE)</button>
<button id="english" class="czas" onclick="ustawTryb('fiszki', undefined); przekazArgument0(globalCategory, '', '', 'fiszki', true, true, tablica3[1])">10 MINUT (3 ZDANIA) - OPCJONALNIE</button>
<br>TRYB LEKCJI<br>
<button id="english" class="czas" onclick="ustawTryb(tablica3[0], ''); przekazArgument0(globalCategory, '', '', tablica3[0], false, false, tablica3[1])">ZDANIA</button>
<button class="czas" onclick="ustawTryb(tablica3[0], 'frazy'); przekazArgument0(globalCategory, '', '', tablica3[0], true, true, tablica3[1])">FRAZY</button>
    <button id="inne" class="czas">POJEDYŃCZE SŁOWA</button>
    <br>DOSTĘPNE WERSJE TŁUMACZENIA<br>
    <button id="english" class="charakter-button" onclick="wybierzCharakter()">NA ŻADANIE-OPCJONALNIE</button>
    <button id="inne" class="charakter-button" onclick="wybierzCharakter('fiszki')">TYLKO PO ANGIELSKU</button>
    <button id="inne" class="charakter-button" onclick="przekazArgument0('', '', '', 'zdania', true)">TYLKO PO POLSKU</button>
</div>
<div id="konsola">
            <div id="title">CZASY</div>
<button class="charakter-button" onclick="przekazArgument0(globalCategory, '', '', '', '', '', tablica3[1], 'play')">OZNACZ CZAS</button>
<br>
    <button class="charakter-button" onclick="przekazArgument0('PresentSimple', '', '', '', '', '', tablica3[1], 'play')">PRESENT SIMPLE</button>
            <button class="charakter-button" onclick="przekazArgument0('PresentContinous', '', '', '', '', '', tablica3[1], 'other')">PRESENT CONTINOUS</button>
                    <button class="charakter-button" onclick="przekazArgument0('PastSimple', '', '', '', '', '', tablica3[1])">PAST SIMPLE</button>
    <button id="inne">PAST SIMPLE</button>
    <br>
    <div id="title">OPCJE ZDANIA</div>
    <button id="inne" class="charakter-button">PODZIEL ZDANIA NA CZĘŚCI</button>
    <button id="inne" class="czas">WYSUŃ JEDNOCZEŚNIE W DANEJ LEKCJI</button>
    <br>
    <div id="title">CHARAKTER ZDANIA</div>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'krotkie')">Krótkie</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'dlugie')">Długie(złożone)</button>
    <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, '')">Dowolne</button>
    <div id="title">PRIORYTETY LINGWISTYCZNE</div>
    <button id="inne" onclick="wybierzCharakter('krotkie')">Wymowa</button>
<button class="charakter-button" onclick="wybierzCharakter('krotkie')">Pisownia</button>
<button id="inne" onclick="wybierzCharakter('krotkie')">Sens zdania</button>
    <button id="dowolne" onclick="wybierzCharakter('dowolne')">WSZYSTKIE</button>
</div>
<div id="konsola2">
            <div id="title">ULUBIONA TEMATYKA FISZEK</div>
    <button onclick="wybierzTematyke('nauka')">Nauka</button>
    <button onclick="wybierzTematyke('podroze')">Podróże</button>
    <button onclick="wybierzTematyke('historia')">Historia</button>
    <button onclick="wybierzTematyke('sztuka')">Sztuka</button>
    <button onclick="wybierzTematyke('technologia')">Technologia</button>
</div>
<div id="konsola3">
    <h2>Ulubione Fiszki</h2>
    <button onclick="wplecUlubioneFiszki()">Ulubione Fiszki</button>
</div>
<div id="konsola4">
    <h2>Generuj intuicyjnie z pokrewną tematyką</h2>
    <button onclick="wybierzTematyke('nauka')">Podobne</button>
    <button onclick="wybierzTematyke('podroze')">Eksporuj moją nową pasje</button>
    <button onclick="wybierzTematyke('podroze')">Odkryj moją nową pasje</button>
</div>
</div>
`);

                        setTimeout(() => {
                            console.log('hej554', index55b2);
                            if (index55b2 === 1) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo1angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 2) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo2angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 3) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo3angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 4) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo4angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 5) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo5angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 6) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo6angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 7) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo7angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 8) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo8angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 9) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo9angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 10) { // Porównaj jako liczby
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo10angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 11) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo11angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 12) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo12angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 13) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo13angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 14) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo14angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 15) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo15angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 16) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo16angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 17) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo17angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 18) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo18angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 19) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo19angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 20) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo20angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 21) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo21angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 22) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo22angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 23) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo23angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 24) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo24angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 25) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo25angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 26) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo26angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 27) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo27angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 28) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo28angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 29) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo29angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 30) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo30angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 31) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo31angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 32) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo32angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 33) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo33angielskib.html?category=' + encodeURIComponent(globalCategory);
                            }
                        }, 1000);
                        // Usunięcie kontenera po wstawieniu nowego
                    });
                    
                                            setTimeout(() => {
                            console.log('hej554', index55b2);
    if (index55b2 === 1) {
        wybierzRodzaj2(category2); // Wywołanie funkcji bez przekierowania
    }
                            if (index55b2 === 2) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo2angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 3) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo3angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 4) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo4angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 5) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo5angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 6) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo6angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 7) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo7angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 8) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo8angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 9) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo9angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 10) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo10angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 11) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo11angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 12) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo12angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                            if (index55b2 === 13) {
                                // Bezpośrednio przekierowujemy użytkownika do strony
                                window.location.href = 'demo13angielski.html?category=' + encodeURIComponent(globalCategory);
                            }
                        }, 1000);
                        // Usunięcie kontenera po wstawieniu nowego
                    });
                    
                    
                            // Pobierz istniejące wartości z localStorage (jeśli istnieją)
        const savedMarginTop = localStorage.getItem('marginTop');
        const savedMarginBottom = localStorage.getItem('marginBottom');

        console.log('Saved values from localStorage:', savedMarginTop, savedMarginBottom);

        // Ustaw domyślne wartości lub skorzystaj z zapisanych wartości z localStorage
        let marginTop = savedMarginTop !== null ? JSON.parse(savedMarginTop) : {};
        let marginBottom = savedMarginBottom !== null ? JSON.parse(savedMarginBottom) : {};

        console.log('Calculated values:', marginTop, marginBottom);

        // Utwórz lub pobierz unikalne wartości marginesów dla danej fiszki
        const fiszkaId = fiszka.id.join('-');

        // Ustaw margines na zero dla pierwszej fiszki
        marginTop[fiszkaId] = marginTop[fiszkaId] !== undefined ? marginTop[fiszkaId] : fiszkaId === '1' ? 0 : Math.floor(Math.random() * 160);
        marginBottom[fiszkaId] = marginBottom[fiszkaId] !== undefined ? marginBottom[fiszkaId] : fiszkaId === '1' ? 0 : Math.floor(Math.random() * 80);

        // Zapisz wartości marginesów do localStorage
        localStorage.setItem('marginTop', JSON.stringify(marginTop));
        localStorage.setItem('marginBottom', JSON.stringify(marginBottom));

        console.log('Values after saving to localStorage:', marginTop, marginBottom);

        // Ustaw marginesy w elemencie fiszkaContainer
        fiszkaContainer.css({
            'margin-top': `${fiszka.id[0] % 2 === 0 ? -marginTop[fiszkaId] + 170 : -marginTop[fiszkaId] + 40}px`,
            'margin-bottom': `${fiszka.id[0] % 2 !== 0 ? marginBottom[fiszkaId] + 70 : -marginBottom[fiszkaId] + 50}px`
        });
        
        
        function showFiszkiForLesson6(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);
tablica11b.push(indexDiv);
console.log('hej64', tablica11b);
    if (matchingFiszki1.length > 0) {
                console.log('hej64xx', matchingFiszki1);
    if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki1.length) {

            let id = matchingFiszki1[currentFiszkaIndex - 1].id;
            console.log('hej2', id);
            let parametr = '';

            // Sprawdź, czy id jest tablicą
            if (Array.isArray(id)) {
                // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
                id = id.slice(0, 3).join(',');

                // Obsługa ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                if (id.length > 3) {
                    parametr = matchingFiszki1[currentFiszkaIndex].id[3]; // Pobierz czwarty element z tablicy
                }
            }

// Tworzenie klasy CSS
const className = `fiszka-${id}${parametr ? '\\,' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;

// Znalezienie i usunięcie diva z klasą `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa cały div z DOM
}
}
        console.log('hej44', $container);
                }
            }