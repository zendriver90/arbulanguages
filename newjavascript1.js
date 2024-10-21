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