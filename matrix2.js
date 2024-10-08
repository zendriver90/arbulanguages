<!DOCTYPE html>
<html>
    <head>
        <script src="js/storage.js"></script>
        <script src="js/testowy.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ARBULANGUAGES.COM<br>DOSTĘPNYCH 150 SŁÓW</title>
        <style>
            /* Styl dla głównego kontenera */
            .container {
                position: relative;
                display: flex;
                align-items: flex-start; /* Ustawienie wyrównania elementów wertykalnie */
                justify-content: space-between;
            }
            .content-container {
                position: relative;
            }
            /* Styl dla menu pionowego */
            .side-menu {
                width: 118px;
                margin-right: 20px;
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
            .sentence1b,
            .sentence1b2,
            .sentence2b,
            .sentence2b2,
            .sentence3b,
            .sentence3b2 {
                z-index: 9999;
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
                height: auto;
                margin-bottom: 0px;
                align-items: center;
                font-size: 20px;
                margin-top: 10px;
                order: -1; /* Kolejność odwrotna - spycha w dół */
            }
            .image-container4 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: blue;
                width: 330px;
                position: relative;
                height: auto;
                margin-bottom: 0px;
                align-items: center;
                font-size: 20px;
                margin-top: 10px;
                order: -1; /* Kolejność odwrotna - spycha w dół */
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
            position: absolute;
            z-index: 1000000;
            bottom: 10px;
            right: 10px;
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
                transform: translate(-50%, -50%);
                display: none; /* Ukrycie przycisku */
                z-index: 2; /* Wyższy z-index, aby przycisk był na wierzchu */
            }

            .image-container3:hover .run-button {
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
            .dynamic-div {
    position: absolute;
    top: 10px; /* Ustawienie w dowolnym miejscu w kontenerze */
    left: 10px;
    font-size: 15px;
    width: 100px; /* Szerokość dynamicznego div-a */
    height: 50px; /* Wysokość dynamicznego div-a */
    background-color: rgba(255, 0, 0, 0.5); /* Przezroczyste tło */
    color: white;
    z-index: 1000; /* Wyższy z-index, aby był nad overlay */
    display: none; /* Początkowo ukryty */
}

            .image-container4:hover .run-button2 {
                display: block; /* Wyświetlenie przycisku na hover */
            }
            .sentence1b,
            .sentence1b2,
            .sentence1b22,
            .sentence1b2a {
                font-size: 16px;
                margin-bottom: 0px;
                z-index: 9999;
            }

            .sentence {
                margin-bottom: -60px;
                color: white;
                z-index: 9999;
            }

            .sentenceB {
                margin-top: 80px;
                color: white;
                z-index: 9999;
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

            .highlighted-sentence {
                background-color: rgba(255, 255, 0, 0.5); /* Kolor tła z opacity */
            }
            .yellow {
                color: yellow;
            }
            .flashcard-container {
                width: 1300px;
                height: 250px;
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
                left: 650px;
                margin-top: 500px;
            }
            #buttoncreate {
                background-color: blue;
            }
            #buttoncreate.active {
                background-color: #2ecc71;
            }

            .flashcard-container #konsola {
                width: 500px;
                padding: 10px;
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
                gap: 20px;
                position: relative;
                margin-top: 90px;
                margin-left: 0px;
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

            @media (max-width: 999px) {
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 10px;
                    text-align: center;
                    position: relative; /* Ustawienie pozycji dla podpisów */
                }
                /* Styl dla menu pionowego */
                .side-menu {
                    width: 0px;
                    margin-right: 0px;
                }

                .side-menu button {
                    display: none;
                }
            </style>
        </head>
        <body>
            <div class="horizontal-bar" id="horizontalBar1">
                <button onclick="showVideos('set2')" id="button1">PODEJŚCIE POCZĄTKUJĄCEGO</button>
                <button onclick="updateScripts()" id="button2">PODEJŚCIE AGRESYWNE - ZAAWANSOWANY</button>
                <button id="myButton">Kliknij mnie</button>
            </div>
            <div class="horizontal-bar" id="horizontalBar2">
                <button id="button3">LEKCJA 15 MINUTOWA(30 SŁÓW)</button>
                <button id="button4">LEKCJA 7 MINUTOWA(12 SŁÓW)</button>
                <button id="button5">WSZYSTKIE</button>
            </div>

            <div class="container">
                <div class="side-menu">
                    <button onclick="showImages('set1')">PRZEBYTE LEKCJE</button>
                    <button onclick="showImages('set2')">LEKCJE STWORZONE INDYWIDUALNIE</button>
                    <button onclick="showImages('set3')">SŁÓWKA KTÓRE ZNAM</button>
                    <button onclick="showImages('set4')">SŁÓWKA TRENING</button>
                    <button onclick="showImages('set2')">SŁÓWKA NAUCZONE</button>
                    <button onclick="showImages('set1')">POLUBIONE SŁOWKA</button>
                    <button onclick="showImages('set2')">SŁÓWKA TEMATYCZNE</button>
                </div>
                <div class="content-container">
                    <div class="grid-containera">
                        <div class="image-container2">Standard<button onclick="showImages('set1')"> WŁĄCZONE</button>
                        </div>
                        <div class="image-container2" id="buttoncreate">Generowanie fiszki<button onclick="addFlashcardContainer()">START</button>
                        </div>
                        <div class="image-container2">Kartkówka<button onclick="showImages('set1')">START</button>
                        </div>
                        <div class="image-container2">Tłumacz tekst<button onclick="showImages('set1')">START</button>
                        </div>
                    </div>
                    <div class="grid-container">
                    </div>
                </div>
                <a id="linkDoStrony" href="demo5.html" onclick="wybierzRodzaj('osoby')">Osoby</a>
                <script>



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
                    document.getElementById('button1').addEventListener('click', function () {
                        showVideos('set2');
                        highlightButton('button1', 'horizontalBar1');
                    });

                    document.getElementById('button2').addEventListener('click', function () {
                        showVideos('set3');
                        highlightButton('button2', 'horizontalBar1');
                    });

                    // Add event listeners to buttons in the second horizontal bar
                    document.getElementById('button3').addEventListener('click', function () {
                        showVideos('set2');
                        highlightButton('button3', 'horizontalBar2');
                    });

                    document.getElementById('button4').addEventListener('click', function () {
                        showVideos('set3');
                        highlightButton('button4', 'horizontalBar2');
                    });

                    document.getElementById('button5').addEventListener('click', function () {
                        showVideos('set4');
                        highlightButton('button5', 'horizontalBar2');
                    });
function addFlashcardContainer() {
    var $flashcardContainer = $('<div>', { class: 'flashcard-container' });
    $('#buttoncreate').addClass('active');

    // Dodaj buttony do diva
    $flashcardContainer.append(`
        <div id="konsola" style="width: 850px;">
            <div id="title">RODZAJ SŁOWNICTWA</div>
            <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '')">Wszystkie</button>
            <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument('osoby', '', '', '', '', '')">Osoby</button>
            <button class="rodzaj-button" data-rodzaj="zaimki osobowe" onclick="przekazArgument2('zaimkiosobowe')">Zaimki osobowe</button>
            <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument3('osoby+czas')">Osoby + czas</button>
            <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument4('podmiot+czas')">Czasy</button>
            <button class="rodzaj-button" data-rodzaj="kolory" onclick="przekazArgument5('emocje')">Emocje</button>
            <button class="rodzaj-button" data-rodzaj="zaimki" onclick="przekazArgument6('spojniki')">Spójniki</button>
            <button class="rodzaj-button" data-rodzaj="kolory" onclick="przekazArgument7('kolory')">Kolory</button>
            <button class="rodzaj-button" data-rodzaj="zwierzeta" onclick="przekazArgument8('zwierzeta')">Zwierzęta</button>
            <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument9('czasownik')">Czasowniki</button>
            <br>---------------------------<br>
            <button class="czas" onclick="przekazArgument0('', '', '', 'zdania', false, false)">5 MINUT(JEDNO ZDANIE)</button>
            <button id="fiszki" class="czas" onclick="przekazArgument0('', '', '', 'fiszki', true, true)">10 MINUT(3 ZDANIA)-OPCJONALNIE</button>
            <br>---------------------------<br>
            <button id="english" class="charakter-button" onclick="wybierzCharakter()">TŁUMACZ NA ŻADANIE-OPCJONALNIE</button>
            <button id="mix" class="charakter-button" onclick="wybierzCharakter('fiszki')">TYLKO PO ANGIELSKU</button>
            <button id="polski" class="charakter-button" onclick="przekazArgument0('', '', '', 'zdania', true)">TYLKO PO POLSKU</button>
        </div>
        <div id="konsola" style="width: 600px;">
            <div id="title">OPCJE ZDANIA</div>
            <button class="charakter-button">PODZIEL ZDANIA NA CZĘŚCI</button>
            <button class="czas">WYSUŃ JEDNOCZEŚNIE W DANEJ LEKCJI</button>
            <br>
            <div id="title">CHARAKTER ZDANIA</div>
            <button onclick="wybierzCharakter('krotkie')">Krótkie</button>
            <button onclick="wybierzCharakter('dlugie')">Długie(złożone)</button>
            <button id="dowolne" onclick="wybierzCharakter('dowolne')">Dowolne</button>
            <div id="title">PRIORYTETY LINGWISTYCZNE</div>
            <button onclick="wybierzCharakter('krotkie')">Wymowa</button>
            <button onclick="wybierzCharakter('dlugie')">Zrozumienie sensu zdania</button>
            <button id="dowolne" onclick="wybierzCharakter('dowolne')">WSZYSTKIE</button>
        </div>
        <div>
            <h2>Ulubiona Tematyka Fiszek</h2>
            <button onclick="wybierzTematyke('nauka')">Nauka</button>
            <button onclick="wybierzTematyke('podroze')">Podróże</button>
            <button onclick="wybierzTematyke('historia')">Historia</button>
            <button onclick="wybierzTematyke('sztuka')">Sztuka</button>
            <button onclick="wybierzTematyke('technologia')">Technologia</button>
        </div>
        <div>
            <h2>Ulubione Fiszki</h2>
            <button onclick="wplecUlubioneFiszki()">Ulubione Fiszki</button>
        </div>
        <div>
            <h2>Generuj intuicyjnie z pokrewną tematyką</h2>
            <button onclick="wybierzTematyke('nauka')">Podobne</button>
            <button onclick="wybierzTematyke('podroze')">Eksporuj moją nową pasje</button>
            <button onclick="wybierzTematyke('podroze')">Odkryj moją nową pasje</button>
        </div>
    `);

    // Dodaj do konsoli informację o próbie dodania diva
    console.log("Próba dodania diva");

    // Znajdź kontener, do którego chcesz dodać .flashcard-container
    var $targetContainer = $('.grid-containera');

    // Dodaj div do znalezionego kontenera
    $targetContainer.append($flashcardContainer);

    var $gridContainer = $('.grid-container');
    var flashcardContainerHeight = $flashcardContainer.height();
    $gridContainer.css('margin-top', flashcardContainerHeight + 110 + 'px');

    $flashcardContainer.find('#osoby, #fiszki, #english, #dowolne').css('border', '2px solid blue');

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

function waitForTrueThenWybierzCharakter() {
    console.log("Funkcja waitForTrueThenWybierzCharakter() została wywołana");
    var isTrue = true; // Tutaj umieść rzeczywisty warunek do sprawdzenia

    if (isTrue) {
        console.log("Warunek został spełniony, wykonuję funkcję wybierzCharakter()");
        wybierzCharakter('', 'zdania', undefined, undefined, true);
    } else {
        console.log("Warunek nie został spełniony, nic nie robię");
    }
}

    // Dodaj zdarzenia do przycisków rodzaj-button
    $flashcardContainer.find('.rodzaj-button').on('click', handleRodzajButtonClick);

    // Dodaj zdarzenia do przycisków charakter-button
    $flashcardContainer.find('.charakter-button').on('click', handleCharakterButtonClick);

    // Dodaj zdarzenia do przycisków czas
    $flashcardContainer.find('.czas').on('click', handleCzasButtonClick);

    // Przekazanie argumentu 0
    przekazArgument0('all', '', '', 'fiszki', true, true);
}
                    idpolski = false;
                    let indexes = [];
                    let button0 = false;
                    let button = false;
                    let button2 = false;
                    let button3 = false;
                    let button4 = false;
                    let button5 = false;
                    let button8 = false;
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
                    let globalCategory = '';
                    // Funkcja przekazująca argument
                    console.log('hej33', tablica7);
                    function przekazArgument9(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'czasownik';
                        }
                        button9 = true;
                        button0 = false;
                        button = false;
                        button2 = false;
                        button3 = false;
                        button4 = false;
                        button5 = false;
                        button6 = false;
                        button7 = false;
                        button8 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    function przekazArgument8(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'animals';
                        }
                        button8 = true;
                        button0 = false;
                        button = false;
                        button2 = false;
                        button3 = false;
                        button4 = false;
                        button5 = false;
                        button6 = false;
                        button7 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    function przekazArgument7(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'kolory';
                        }
                        button7 = true;
                        button0 = false;
                        button = false;
                        button2 = false;
                        button3 = false;
                        button4 = false;
                        button5 = false;
                        button6 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    function przekazArgument6(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'spojniki';
                        }
                        button6 = true;
                        button0 = false;
                        button = false;
                        button2 = false;
                        button3 = false;
                        button4 = false;
                        button5 = false;
                        button7 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    function przekazArgument5(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'emocje';
                        }
                        button5 = true;
                        button0 = false;
                        button = false;
                        button2 = false;
                        button3 = false;
                        button4 = false;
                        button6 = false;
                        button7 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    function przekazArgument4(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'podmiot+czas';
                        }
                        button4 = true;
                        button0 = false;
                        button = false;
                        button2 = false;
                        button3 = false;
                        button5 = false;
                        button6 = false;
                        button7 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    function przekazArgument3(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'osoby+czas';
                        }
                        button3 = true;
                        button0 = false;
                        button = false;
                        button2 = false;
                        button4 = false;
                        button5 = false;
                        button6 = false;
                        button7 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    function przekazArgument2(category, index55, buttonindex) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'zaimkiosobowe';
                        }
                        pulpitstartowy = false;
                        button2 = true;
                        button0 = false;
                        button = false;
                        button3 = false;
                        button4 = false;
                        button5 = false;
                        button6 = false;
                        button7 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        // Wywołaj funkcję wybierzCharakter
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('wykonuje się5');
                        wybierzCharakter(undefined, index55, buttonindex);
                        console.log('hej100', tablica10);
                    }
                    var globalIdTranslate = false;
                    function przekazArgument(category, index55, buttonindex, czas, idpolski, idtranslate) {
                        $('.grid-container .image-container3').remove();
                            category = 'osoby';
                        pulpitstartowy = false;
                        przyciskKlikniety = true;
                        button = true;
                        button0 = false;
                        button2 = false;
                        button3 = false;
                        button4 = false;
                        button5 = false;
                        button6 = false;
                        button7 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        tablica10.length = 0;
                        tablica15.length = 0;
                        console.log('hej321bc', idtranslate);
                        // Wywołaj funkcję wybierzCharakter
                            if (!globalIdTranslate) {
        wybierzCharakter(category, 'zdania', undefined, undefined, true);
        console.log('hej454', category);
    } else if (globalIdTranslate) {
        wybierzCharakter(category, 'fiszki', undefined, undefined, false);
        console.log('hej454', czas);
    }
                    }
                    function przekazArgument0(category, index55, buttonindex, czas, idpolski, idtranslate) {
                        $('.grid-container .image-container3').remove();
                        $('.grid-container .image-container4').remove();
    if (!category && globalCategory) {
        category = globalCategory;  // Użyj globalOsoby, jeśli category nie jest podane
    } else if (!category) {
        category = 'all';
    }
                        if (!czas) {
                            czas = 'fiszki';
                        }
                        console.log('hej321b', idtranslate);
                        console.log('hej453', buttonindex);
                        pulpitstartowy = true;
                        console.log('hej22', idpolski);
                        przyciskKlikniety = true;
                        button0 = true;
                        button = false;
                        button2 = false;
                        button3 = false;
                        button4 = false;
                        button5 = false;
                        button6 = false;
                        button7 = false;
                        button8 = false;
                        button9 = false;
                        // Przypisz wartość do zmiennej globalnej
                        globalCategory = category;
                        tablica10.length = 0;
                        tablica15.length = 0;
                        globalIdTranslate = idtranslate;
                        // Wywołaj funkcję wybierzCharakter
                            if (!globalIdTranslate) {
        wybierzCharakter(category, 'zdania', undefined, undefined, true);
        console.log('hej454', category);
    } else if (globalIdTranslate) {
        wybierzCharakter(category, 'fiszki', undefined, undefined, false);
        console.log('hej454', czas);
    }
                    }
                    // Funkcja wybierająca charakter
                    function wybierzCharakter(category, czas, index55, buttonindex, idpolski) {
                        console.log('hej223', czas, category, idpolski);
                        
                        buttonindex = false;
                        pulpitstartowy = false;
                        console.log('hej555', idpolski);
                        // Aktualizuj matchingIndexes na podstawie nowej kategorii
                        matchingIndexes = findXForMatchingFiszka(globalCategory, fiszki);

                        wybierzRodzaj(globalCategory, czas, matchingIndexes, index55, buttonindex, idpolski);
                        // Wyświetl na konsoli zaktualizowane matchingIndexes
                        console.log("Zaktualizowane matchingIndexes:", matchingIndexes);
                        console.log("wykonuje sie", indexes);
                        czasv2 = czas;
                        console.log('hej5', indexes);
                    }

                    // Funkcja znajdująca indeksy dla pasujących "fiszek"
                    function findXForMatchingFiszka(category, fiszki) {
                        const matchingIndexes = [];
                        // Iteruj przez tablicę fiszki
                        for (let i = 0; i < fiszki.length; i++) {
                            // Sprawdzamy, czy category2 w fiszce zawiera podaną kategorię
                            if (fiszki[i].category2.includes(category)) {
                                // Jeśli warunek jest spełniony, dodajemy indeks "fiszki" do tablicy
                                matchingIndexes.push(i + 1);
                                console.log('hej7', matchingIndexes);
                            }
                        }
                        // Zwracamy tablicę indeksów pasujących "fiszek"
                        console.log('wykonuje się 6', matchingIndexes);
                        return matchingIndexes;
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

                    // Przykładowe użycie:
                    // Ustalanie kategorii na podstawie globalCategory
                    const categoryToFind = (globalCategory === 'osoby') ? 'osoby+czas' : 'osoby';
                    if (globalCategory === 'osoby+czas') {
                        const categoryToFind = (globalCategory === 'osoby+czas') ? 'osoby' : 'osoby+czas';
                    }
                    // Wywołanie funkcji findXForMatchingFiszka() dla odpowiedniej kategorii
                    matchingIndexes = findXForMatchingFiszka(categoryToFind, fiszki);

                    const lessonsArray = [];
                    const lessonsArrayA = [];
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
                    function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex, idpolski) {
                        category = category || globalCategory;
                        czasv2 = czas;
                        console.log("Wybrany rodzaj słownictwa: " + czas);
                        console.log('hej5b', idpolski); // Wybierz 'fiszki' dla 10 minut
                        console.log('hej755', matchingIndexes); // Dodano logowanie matchingIndexes

                        const matchingLessons = new Set(); // Użyj obiektu Set do przechowywania unikalnych wartości
                        // Iteracja przez fiszki
                        for (const fiszka of fiszki) {
                            // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                            let matchingFiszka;
                            // Sprawdzenie, czy wybrano wszystkie kategorie
                            if (category === 'all' || !category) {
                                matchingFiszka = true;
                                console.log('hej877', matchingFiszka);
                            } else {
                                // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                                matchingFiszka = fiszka.category2.includes(category);
                            }
                            console.log('hej28', category);
                            // Jeśli znaleziono pasującą fiszkę, dodaj numer lekcji do zestawu matchingLessons
                            if (matchingFiszka) {
                                matchingLessons.add(fiszka.id[1]);
                                console.log('hej866', matchingLessons);
                            }
                        }
                        const uniqueMatchingLessons = Array.from(matchingLessons);
                        console.log('hejxxxxxxxxxxxxxxxxx', uniqueMatchingLessons);

                        if (czas === 'fiszki' && czas !== "zdania") {
                            console.log('Warunek czas === "fiszki" jest spełniony');
                            $('.grid-container .image-container4').remove();
                            if (uniqueMatchingLessons.length > 1) {
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
                                const lengthDividedByThree = uniqueMatchingLessons.length / 3;

                                // Tworzenie tablicy indeksów od 1 do uniqueMatchingLessons.length / 3
                                let indices = [];
                                for (let i = 1; i <= lengthDividedByThree; i++) {
                                    indices.push(i);
                                }
                                let indices2 = [];
                                for (let i = 1; i <= lengthDividedByThree; i++) {
                                    indices2.push(i);
                                }
                                console.log('hej12', indices2);
                                // Wylosowanie indeksu, który będzie miał wartość 0
                                const zeroIndex = Math.floor(Math.random() * lengthDividedByThree);
                                const zeroIndex2 = index55 - 1;
                                // Wstawienie 0 na wylosowane miejsce
                                indices[zeroIndex] = 0;
                                indices2[zeroIndex2] = 0;
                                for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const lessonId2 = uniqueMatchingLessons[i + 1];
                                    const lessonId3 = uniqueMatchingLessons[i + 2];
                                    const newIndex = indices[Math.floor(i / 3)];
                                    const index50 = indices2[Math.floor(i / 3)];
                                    console.log('hej16', newIndex);

                                    // Dodanie długości zdań
                                    // Znajdź długości zdań dla każdej lekcji
                                    const lesson1Sentences = correlationsCount.find(item => item[0] === lessonId1) || [lessonId1, 0];
                                    const lesson2Sentences = correlationsCount.find(item => item[0] === lessonId2) || [lessonId2, 0];
                                    const lesson3Sentences = correlationsCount.find(item => item[0] === lessonId3) || [lessonId3, 0];



                                    // Znajdź długości drugiej części zdania dla każdej lekcji
                                    const lesson1SecondPartLength = partLengths2.find(item => item.id === lessonId1)?.count2 || 0;
                                    const lesson2SecondPartLength = partLengths2.find(item => item.id === lessonId2)?.count2 || 0;
                                    const lesson3SecondPartLength = partLengths2.find(item => item.id === lessonId3)?.count2 || 0;

                                    // Znajdź długości drugiej części zdania dla każdej lekcji
                                    const lesson1FirstPartLength = partLengths.find(item => item.id === lessonId1)?.totalLength || 0;
                                    const lesson2FirstPartLength = partLengths.find(item => item.id === lessonId2)?.totalLength || 0;
                                    const lesson3FirstPartLength = partLengths.find(item => item.id === lessonId3)?.totalLength || 0;

                                    // Znajdź długości drugiej części zdania dla każdej lekcji
                                    const lesson1PartLength = partLengths3.find(item => item.id === lessonId1)?.cumulativeCount || 0;
                                    const lesson2PartLength = partLengths3.find(item => item.id === lessonId2)?.cumulativeCount || 0;
                                    const lesson3PartLength = partLengths3.find(item => item.id === lessonId3)?.cumulativeCount || 0;

                                    // Obliczanie skumulowanych długości
                                    cumulativeFirstPartLength1 += lesson1PartLength;
                                    cumulativeFirstPartLength2 += lesson2PartLength;
                                    cumulativeFirstPartLength3 += lesson3PartLength;

                                    const cumulativeTotalFirstPartLength1 = cumulativeFirstPartLength1;
                                    const cumulativeTotalFirstPartLength2 = cumulativeFirstPartLength2;
                                    const cumulativeTotalFirstPartLength3 = cumulativeFirstPartLength3;

                                    // Aktualizacja poprzedniej wartości skumulowanej dla następnej iteracji
                                    previousCumulativeFirstPartLength3 = cumulativeFirstPartLength3;


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

                                    // Dodawanie obiektu do tablicy lekcji
                                    lessonsArray.push(lessonObject);
                                    console.log('hej34', lessonObject);
                                    if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                        const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                        if (containerToRemove.length > 0) {
                                            containerToRemove.remove();
                                        }
                                    }


                                    // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                    console.log('hej556', lessonsArray);
                                    console.log('hej40', startIndex); // Wyświetl wartość startIndex
                                    console.log('hej77', tablica10);
                                    console.log('wykonuje się 7');
                                    console.log('hej155', buttonindex);
                                    console.log('hej323', index55);


                                    if ((tablica10.length <= 10 || tablica10.length === 0)) {
                                        console.log('wykonuje się 8');
                                        console.log('hej32', newIndex);
                                        console.log('hej18', tablica10);
                                        showCombinedSentenceForLesson(buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3);
                                    }
                                }
                                console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
                                // Sprawdź, czy dodano odpowiednią liczbę divów
                                const numberOfContainers = $('.image-container3').length;
                                console.log('Liczba dodanych divów:', numberOfContainers);
                            }
                        }

                        if (czas === 'zdania' && czas !== 'fiszki') {
                            $('.grid-container .image-container3').remove();
                            $('.grid-container .image-container4').remove();
                            // Wyświetl pojedyncze zdania dla znalezionych lekcji
                            console.log('Warunek czas === "fiszki" jest spełniony');

                            if (uniqueMatchingLessons.length > 1) {
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
                                const lengthDividedByThree = uniqueMatchingLessons.length;
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
                                    let secondValue = indexes.length > 1 ? indexes[1] : firstValue + 1;

                                    // Utworzenie tablicy do wstawienia przed indexes, jeśli obie wartości nie są zerami
                                    if (firstValue !== 0 && secondValue !== 0) {
                                        let numbersToInsert = [];
                                        for (let i = 1; i < firstValue; i++) {
                                            numbersToInsert.push(i);
                                        }
                                        for (let i = firstValue; i < secondValue; i++) {
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
                                for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = indexes[Math.floor(i)];
                                    const index50 = indices2[Math.floor(i)];
                                    const polski = idpolski ? indices3[i % indices3.length] : false;
                                    console.log(`Iteration ${i}: polski =`, polski);

                                    console.log('hej166', polski);
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

                                    if ((tablica15.length <= 30 || tablica15.length === 0)) {
                                        console.log('wykonuje się 8');

                                        showCombinedSentenceForLesson2(polski, index50, lessonId1, newIndex, indexDiv, lesson1PartLength);
                                        console.log('hej321', polski);
                                    }
                                }
                            }
                        }
                        // Funkcja do znajdowania grup fiszek spełniających warunki
                        function znajdzGrupyFiszekZRosnacymiX(fiszki) {
                            // Obiekt do przechowywania grup fiszek pogrupowanych według y
                            const grupyFiszek = [];

                            // Obiekt do przechowywania sum x dla danego y
                            const sumyX = {};

                            // Grupowanie fiszek według y i obliczenie sumy x
                            fiszki.forEach(fiszka => {
                                const y = fiszka.id[1];
                                if (!sumyX[y]) {
                                    sumyX[y] = 0;
                                }
                                sumyX[y] += fiszka.id[0];
                            });

                            // Iteracja po obliczonych sumach x
                            Object.keys(sumyX).forEach(y => {
                                const sumaX = sumyX[y];

                                // Warunek: suma x dla danego y musi być większa niż 6
                                if (sumaX > 6) {
                                    // Znaleziono grupę fiszek spełniających warunki
                                    const grupaFiszek = fiszki.filter(fiszka => fiszka.id[1] === parseInt(y));
                                    grupyFiszek.push(grupaFiszek);
                                }
                            });

                            return grupyFiszek;
                        }
                        // Znalezienie fiszek gdzie x > 6 dla danej pary x,y
                        const fiszkiSumaWiekszaNiz6 = znajdzGrupyFiszekZRosnacymiX(fiszki);
                        console.log("Fiszki gdzie x > 6 dla danej pary x,y:", fiszkiSumaWiekszaNiz6);
                        console.log(fiszkiSumaWiekszaNiz6);

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
                    console.log('hej55', tablica10);
                    console.log('hej51', tablica15);
                    let sentence1bVisible = false;
                    let sentence1baVisible = false;
                    let sentence1b3aVisible = false;
                    let buttonindex = false;

                    function showCombinedSentenceForLesson(buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3) {
                        let isSlashInserted = false;

                        const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                        const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                        const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                        console.log('hej450', matchingIndexes);
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
                            let sentence12 = " / ";
                            let sentence1b = " / ";
                            let sentence1b2 = " / ";
                            function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1FirstPartLength, lesson1PartLength) {
                                setTimeout(function () {
                                    sentence10 = "";
                                    sentence11 = "";
                                    sentence1b = "";
                                    sentence1b2 = "";

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
                                                if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0 && pulpitstartowy) {
                                                    console.log('hej67', pulpitstartowy);
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
                                                if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0 && pulpitstartowy) {
                                                    console.log('hej678', pulpitstartowy);
                                                    const spanElement = document.createElement('span');
                                                    spanElement.innerHTML = sentencePart2; // Użyj innerHTML zamiast textContent
                                                    sentencePart2 = spanElement.outerHTML;
                                                } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0 && !pulpitstartowy) {
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
                                                    let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                                    sentence1bb1c += sentencePart1 + " ";
                                                    console.log('hej45', sentencePart1);
                                                    // Dodaj element do DOM, jeśli jeszcze go nie ma
                                                    if ($sentenceDiv.find('.sentence1bb1c').length === 0) {
                                                        $sentenceDiv.append('<div class="sentence1bb1c"></div>');
                                                    }
                                                    let $sentence1bb1c = $sentenceDiv.find('.sentence1bb1c');
                                                    $sentence1bb1c.html(sentence1bb1c);
                                                    // Ustawienie widoczności i stylu dla .sentence1bb
                                                    // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                                    if (!sentence1bVisible) {
                                                        $sentence1bb1c.css({
                                                            'display': 'block',
                                                            'margin-bottom': '0px',
                                                            'top': '20px',
                                                            'position': 'relative'
                                                        });
                                                        console.log('sentence1bb style set to visible');
                                                    }


                                                } else if (currentIndexValue == 2) {
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
        ${sentence10}${sentence11}<br>
        <div class="sentence1b">${sentence1b}</div>
                <div class="sentence1b2">${sentence1b2}</div>
        ${sentence20}${sentence22}<br>
        <div class="sentence1b2a">${sentence1b2a}</div>
        <div class="sentence1b22">${sentence1b22}</div>
        ${sentence30}${sentence33}<br>
    `);

                                    if ($sentence1b.css('display') === 'none') {
                                        // Pokazujemy zdanie .sentence1bb
                                        $sentence1b.css('display', 'block');
                                        $sentence1b.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }

                                }, 0);

                            }

                            let sentence1bba = "";
                            let sentence1bbab = "";
                            function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength) {
                                $(document).ready(function () {

                                    sentence1b = "";
                                    sentence1b2 = "";
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
                                            $sentence1bb1b.html('');
                                            $sentence1bb1b.empty();
                                        });
                                        $sentence1bb1b.html('');
                                        $sentence1bb1b.empty();
                                    }, 0);
                                });
                                console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                            }

                            let sentence20 = ""; // Deklaracja zmiennej sentence20 na poziomie lokalnym
                            let sentence22 = "";
                            let sentence1b2a = "";
                            let sentence1b22 = "";
                            let sentence1bb1b = "";
                            function addBackgroundToText2(matchingFiszki2, matchingIndexes, currentIndexValue, aktualny, lesson2FirstPartLength, lesson2PartLength) {
                                setTimeout(function () {

                                    sentence20 = "";
                                    sentence22 = "";
                                    sentence1b2a = "";
                                    sentence1b22 = "";
                                    sentence1bb1b = "";
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
                                    for (let li = 0; li < matchingFiszki2.length; li++) {
                                        const fiszka = matchingFiszki2[li];
                                        console.log('fiszka:', fiszka);
                                        let sentencePart333 = fiszka.translateb;
                                        console.log('sentencePart333:', sentencePart333);
                                        if (aktualny) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart333;
                                            sentencePart333 = spanElement.outerHTML;
                                        }
                                        sentence1b2a += sentencePart333 + " ";
                                    }
                                    for (let li = 0; li < matchingFiszki2.length; li++) {
                                        const fiszka = matchingFiszki2[li];
                                        console.log('fiszka:', fiszka);
                                        let sentencePart444 = fiszka.translate;
                                        if (aktualny) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart444;
                                            sentencePart444 = spanElement.outerHTML;
                                        }
                                        sentence1b22 += sentencePart444 + " ";
                                    }
                                    if (sentence1b2a === "") {
                                        let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1b2a += sentencePart333 + " ";
                                    }
                                    if (sentence1b22 === "") {
                                        let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                        sentence1b22 += sentencePart444 + " ";
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
    `);
                                    $('.sentence1b').html('');

                                    if ($sentence1b2.css('display') === 'none') {
                                        $sentence1b2.css('display', 'block');
                                        $sentence1b2.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                                    if ($sentence1b22.css('display') === 'none') {
                                        $sentence1b22.css('display', 'block');
                                        $sentence1b22.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                                }, 0);
                            }

                            let sentence2b = "";
                            let sentence2b2 = "";
                            let sentence1bb2 = "";
                            let sentence1bba2 = "";
                            function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson2PartLength) {

                                $(document).ready(function () {
                                    setTimeout(() => {
                                        sentence2b = "";
                                        sentence2b2 = "";
                                        sentence1bb2 = "";
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
                                                sentence20 += sentencePart + " ";
                                                console.log('hej17', sentence2b);
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

                            let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                            let sentence33 = "";
                            function addBackgroundToText3(matchingFiszki3, matchingIndexes, currentIndexValue, aktualny, lesson3FirstPartLength, lesson3PartLength) {
                                sentence30 = "";
                                sentence33 = "";
                                // Iteracja przez matchingFiszki2 dla sentence1
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
                                                let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                                sentence1bb1c += sentencePart1 + " ";
                                                console.log('hej45', sentencePart1);
                                                // Dodaj element do DOM, jeśli jeszcze go nie ma
                                                if ($sentenceDiv.find('.sentence1bb1c').length === 0) {
                                                    $sentenceDiv.append('<div class="sentence1bb1c"></div>');
                                                }
                                                let $sentence1bb1c = $sentenceDiv.find('.sentence1bb1c');
                                                $sentence1bb1c.html(sentence1bb1c);
                                                // Ustawienie widoczności i stylu dla .sentence1bb
                                                // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                                if (!sentence1bVisible) {
                                                    $sentence1bb1c.css({
                                                        'display': 'block',
                                                        'margin-bottom': '0px',
                                                        'top': '20px',
                                                        'position': 'relative'
                                                    });
                                                    console.log('sentence1bb style set to visible');
                                                }


                                            } else if (currentIndexValue == 2) {
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
                                console.log('final sentence30:', sentence30);
                                console.log('final sentence33:', sentence33);
                                $sentenceDivB.html(`
        ${sentence10}${sentence11}<br>
        <div class="sentence1b">${sentence1b}</div>
                <div class="sentence1b2">${sentence1b2}</div>
        ${sentence20}${sentence22}<br>
        <div class="sentence1b2a">${sentence1b2a}</div>
        <div class="sentence1b22">${sentence1b22}</div>
        ${sentence30}${sentence33}<br>
    `);
                                $('.sentence1b2').html('');
                                $('.sentence1b22').html('');
                            }



                            let sentence1bb3 = "";
                            let sentence1bb1c = "";

                            function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength) {
                                $(document).ready(function () {

                                    sentence10 = "";
                                    sentence12 = "";
                                    sentence11 = "";
                                    sentence1bba = "";
                                    sentence1bbab = "";
                                    sentence20 = "";
                                    sentence22 = "";
                                    sentence1bb1b = "";
                                    sentence1bba2 = "";
                                    sentence30 = "";
                                    sentence33 = "";
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
                                console.log('hej33');
                                let funkcjaWywolana = false;
                                function addVideo1(index) {
                                    console.log('hej80', index);
                                    // Sprawdź, czy jesteśmy poza zakresem tablicy
                                    if (index >= srcWords.length && !funkcjaWywolana) {
                                        console.log('hej123', button0);
                                        if (button0) {
                                            let czas = "fiszki";
                                            przekazArgument0(category, undefined, false, czas);
                                            console.log('hej26');
                                        }
                                        if (button) {
                                            przekazArgument(category, undefined, true);
                                        }
                                        if (button2) {
                                            przekazArgument2(category, undefined, true);
                                        }
                                        if (button3) {
                                            przekazArgument3(category, undefined, true);
                                        }
                                        console.log("wykonuje się");
                                        funkcjaWywolana = true;
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
                                                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength);
                                                }

                                                if (currentIndexValue[0] === 1) {
                                                    addBackgroundToText2(matchingFiszki2, matchingIndexes, currentIndexValue, true, lesson2FirstPartLength, lesson2PartLength);
                                                }
                                                if (currentIndexValue[0] === 2) {
                                                    addBackgroundToText3(matchingFiszki3, matchingIndexes, currentIndexValue, true, lesson3FirstPartLength, lesson3PartLength);
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
                                    function setFirstFrame() {
                                        // Tworzenie nowego wideo
                                        const video = document.createElement('video');
                                        video.src = srcWords[0]; // Ustawienie pierwszego filmu
                                        video.muted = true;
                                        video.preload = 'metadata'; // Wczytanie metadanych filmu, ale nie całego filmu

                                        // Odczytanie pierwszej klatki wideo jako obraz
                                        video.addEventListener('loadeddata', function () {
                                            const canvas = document.createElement('canvas');
                                            canvas.width = this.videoWidth;
                                            canvas.height = this.videoHeight;
                                            const ctx = canvas.getContext('2d');
                                            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                                            // Ustawienie pierwszej klatki jako tło kontenera
                                            $container.css({
                                                'background-image': 'url(' + canvas.toDataURL() + ')',
                                                'background-size': 'cover',
                                                'background-position': 'center',
                                                'background-repeat': 'no-repeat'
                                            });
                                        });
                                        // Rozpoczęcie odtwarzania wideo, aby odczytać pierwszą klatkę
                                        video.play();
                                    }
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

                                        // Sprawdź, czy container jest podzielny przez 4
                                        if (indexDiv % 4 === 0) {
                                            // Zmień CSS paska napisu, aby wyświetlał się po lewej stronie kontenera
                                            $sceneDiv.css({
                                                'position': 'absolute',
                                                'left': '100',
                                                'text-align': 'left'
                                            });
                                        }
                                    }
                                }
                                setTimeout(function () {
                                    addVideo1(0);
                                }, 800);
                            } else if (index50 === 0 && buttonindex) {
                                let funkcjaWywolana = false;
                                function addVideo2(index) {
                                    console.log('hej80', index);
                                    console.log('hej123', button0);
                                    // Sprawdź, czy jesteśmy poza zakresem tablicy
                                    if (index >= srcWords.length && !funkcjaWywolana) {
                                        console.log('hej123', button0);
                                        setTimeout(function () {
                                            $('.progress-bar').remove();
                                        }, 200); // Opóźnienie w milisekundach (tu: 1 sekunda)
                                        if (button0) {
                                            buttonindex = false;
                                            let czas = "fiszki";
                                            przekazArgument0(category, undefined, false, czas);
                                            console.log('hej26');
                                        }
                                        if (button) {
                                            przekazArgument(category, undefined, true);
                                        }
                                        if (button2) {
                                            przekazArgument2(category, undefined, true);
                                        }
                                        if (button3) {
                                            przekazArgument3(category, undefined, true);
                                        }
                                        console.log("wykonuje się");
                                        funkcjaWywolana = true;
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
                                                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength);
                                                }

                                                if (currentIndexValue[0] === 1) {
                                                    addBackgroundToText2(matchingFiszki2, matchingIndexes, currentIndexValue, true, lesson2FirstPartLength, lesson2PartLength);
                                                }
                                                if (currentIndexValue[0] === 2) {
                                                    addBackgroundToText3(matchingFiszki3, matchingIndexes, currentIndexValue, true, lesson3FirstPartLength, lesson3PartLength);
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
                                    // Dodaj div z wideo do tła kontenera
                                    $vidDiv.appendTo($container);
                                    function setFirstFrame() {
                                        // Tworzenie nowego wideo
                                        const video = document.createElement('video');
                                        video.src = srcWords[0]; // Ustawienie pierwszego filmu
                                        video.muted = true;
                                        video.preload = 'metadata'; // Wczytanie metadanych filmu, ale nie całego filmu

                                        // Odczytanie pierwszej klatki wideo jako obraz
                                        video.addEventListener('loadeddata', function () {
                                            const canvas = document.createElement('canvas');
                                            canvas.width = this.videoWidth;
                                            canvas.height = this.videoHeight;
                                            const ctx = canvas.getContext('2d');
                                            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                                            // Ustawienie pierwszej klatki jako tło kontenera
                                            $container.css({
                                                'background-image': 'url(' + canvas.toDataURL() + ')',
                                                'background-size': 'cover',
                                                'background-position': 'center',
                                                'background-repeat': 'no-repeat'
                                            });
                                        });
                                        // Rozpoczęcie odtwarzania wideo, aby odczytać pierwszą klatkę
                                        video.play();
                                    }
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

                                        // Dodatkowe style, jeśli indexDiv jest podzielny przez 4
                                        if (indexDiv % 4 === 0) {
                                            // Dodaj klasę 'scene-description2' do $sceneDiv
                                            $sceneDiv.removeClass('scene-description');
                                            $sceneDiv.addClass('scene-description2');
                                        } else {
                                            // Upewnij się, że klasa 'scene-description2' jest usunięta, jeśli nie jest podzielna przez 4
                                            $sceneDiv.removeClass('scene-description2');
                                        }
                                    }

                                }
                                addVideo2(0);
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
                                    // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                                    addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength);
                                    addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength);
                                    addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength);
                                }
                                addVideo3(0);
                            }
                            // Stwórz przycisk za pomocą jQuery
                            // Tworzenie nowego elementu div za pomocą jQuery


                            if ((index50 === 0 && buttonindex) || (newIndex === 0 && !buttonindex)) {
                                var $sentenceDivB = $('<div></div>');
                                $sentenceDivB.addClass('sentenceB'); // Dodanie klasy 'sentence'
                                $sentenceDivB.html(`
        ${sentence10}${sentence11}<br>
        <div class="sentence1b">${sentence1b}</div>
                <div class="sentence1b2">${sentence1b2}</div>
        ${sentence20}${sentence22}<br>
        <div class="sentence1b2a">${sentence1b2a}</div>
        <div class="sentence1b22">${sentence1b22}</div>
        ${sentence30}${sentence33}<br>
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
                                    'font-size': '18px',
                                    'margin-top': '-10px',
                                    'text-align': 'center',
                                    'z-index': '5'
                                });
                            }
                            const $button = $('<button></button>');
                            $button.addClass('run-button');
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
                                    if (button0) {
                                        przekazArgument0(category, index55, true);
                                        console.log('hej26');
                                    }
                                    if (button) {
                                        przekazArgument(category, index55, true);
                                    }
                                    if (button2) {
                                        przekazArgument2(category, index55, true);
                                    }
                                    if (button3) {
                                        przekazArgument3(category, index55, true);
                                    }
                                    if (button4) {
                                        przekazArgument4(category, index55, true);
                                        console.log('hej26');
                                    }
                                    if (button5) {
                                        przekazArgument5(category, index55, true);
                                    }
                                    if (button6) {
                                        przekazArgument6(category, index55, true);
                                    }
                                    if (button7) {
                                        przekazArgument7(category, index55, true);
                                    }
                                    if (button8) {
                                        przekazArgument8(category, index55, true);
                                    }
                                    if (button9) {
                                        przekazArgument9(category, index55, true);
                                    }
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
                            tablica10.push(srcWords);
                            console.log('hej6', tablica10);

                        }

                        // Deklaracja tablicy, która będzie zawierać wszystkie tablice
                    }

                    function showCombinedSentenceForLesson2(polski, index50, lessonIdToShow1, newIndex, indexDiv, lesson1PartLength) {
                        console.log('Argumenty funkcji:', polski, index50, lessonIdToShow1, matchingIndexes, newIndex, indexDiv, lesson1PartLength);
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
                                                if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0 && pulpitstartowy) {
                                                    console.log('hej67', pulpitstartowy);
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
                                                if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0 && pulpitstartowy) {
                                                    console.log('hej678', pulpitstartowy);
                                                    const spanElement = document.createElement('span');
                                                    spanElement.innerHTML = sentencePart2; // Użyj innerHTML zamiast textContent
                                                    sentencePart2 = spanElement.outerHTML;
                                                } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0 && !pulpitstartowy) {
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
        ${sentence10}${sentence11}<br>
        <div class="sentence1b">${sentence1b}</div>
        <div class="sentence1b2">${sentence1b2}</div>
    `);

                                    if ($sentence1b.css('display') === 'none') {
                                        // Pokazujemy zdanie .sentence1bb
                                        $sentence1b.css('display', 'block');
                                        $sentence1b.css({
                                            'margin-bottom': '-20px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                                }, 0);
                            }

                            let sentence1bba = "";
                            let sentence1bbab = "";
                            function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, polski) {
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
                                        if (!polski) {
                                            $sentence1bba.css({
                                                'margin-bottom': '-20px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                            $sentence1bbab.css({
                                                'margin-bottom': '-20px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                        } else {
                                            console.log('hej465', polski);
                                            $sentence1bba.css({
                                                'margin-bottom': '-200px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                            $sentence1bbab.css({
                                                'margin-bottom': '-100px',
                                                'top': '40px',
                                                'position': 'relative'
                                            });
                                        }
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

                            if (newIndex === 0 && !buttonindex && newIndex !== undefined && newIndex !== null) {
                                console.log('hej3331', newIndex);
                                let funkcjaWywolana = false;
                                function addVideo1(index) {
                                    console.log('hej80', index);
                                    // Sprawdź, czy jesteśmy poza zakresem tablicy
                                    if (index >= srcWords.length && !funkcjaWywolana) {
                                        console.log('hej123', button0);
                                        if (button0) {
                                            const czas = 'zdania';  // Możesz rozważyć zmianę nazwy zmiennej na bardziej opisową, np. const tryb = 'fiszki';
                                            przekazArgument0(category, undefined, true, czas);  // Upewnij się, że category jest zdefiniowana
                                            console.log('hej222', czas);  // Upewnij się, że console.log jest odpowiedni w kontekście twojego kodu
                                        }
                                        if (button) {
                                            przekazArgument(category, undefined, true);
                                        }
                                        if (button2) {
                                            przekazArgument2(category, undefined, true);
                                        }
                                        if (button3) {
                                            przekazArgument3(category, undefined, true);
                                        }
                                        console.log("wykonuje się");
                                        funkcjaWywolana = true;
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
                                }
                                addVideo1(0);
                            } else if (index50 === 0 && buttonindex) {
                                console.log('hej3338', newIndex);
                                let funkcjaWywolana = false;
                                function addVideo2(index) {
                                    console.log('hej80', index);
                                    console.log('hej123', button0);
                                    // Sprawdź, czy jesteśmy poza zakresem tablicy
                                    if (index >= srcWords.length && !funkcjaWywolana) {
                                        console.log('hej123', button0);
                                        setTimeout(function () {
                                            $('.progress-bar').remove();
                                        }, 200); // Opóźnienie w milisekundach (tu: 1 sekunda)
                                        if (button0) {
                                            przekazArgument0(category, undefined, true);
                                            console.log('hej26');
                                        }
                                        if (button) {
                                            przekazArgument(category, undefined, true);
                                        }
                                        if (button2) {
                                            przekazArgument2(category, undefined, true);
                                        }
                                        if (button3) {
                                            przekazArgument3(category, undefined, true);
                                        }
                                        console.log("wykonuje się");
                                        funkcjaWywolana = true;
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
        'src': 'http://localhost/arbulanguage.com/img/startsystem.png', // Względna ścieżka do pliku PNG
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
        $container.hover(function() {
            $('.overlay', this).css('transform', 'translateX(0)');

            // Twórz nowy dynamiczny div
            const $dynamicDiv = $('<div>').addClass('dynamic-div').text('Szybka lekcja - kliknij');
            // Dodaj dynamiczny div do kontenera
            $dynamicDiv.appendTo($(this)).fadeIn(300);
        }, function() {
            $('.overlay', this).css('transform', 'translateX(100%)');

            // Usuń dynamiczny div po zakończeniu hovera
            $('.dynamic-div', this).fadeOut(300, function() {
                $(this).remove();
            });
        });
            // Set up the click handler for the overlay button
            $buttonb.on('click', function() {
                console.log('Button clicked');
                
                const $newButton = $('<button>').text('Szybka lekcja').addClass('slide-button');
                $newButton.appendTo($container); // Append to container
                
                console.log('New button added');
                
                // Ensure button is visible before animating
                $newButton.show();
                console.log('Button should be visible');
                
                $newButton.animate({
                    right: '10px' // Move to visible position within the container
                }, 500, function() {
                    console.log('Animation complete');
                });
            });

                                    // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                                    addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, polski);
                                }
                                addVideo3(0);
                            }
                            if ((index50 === 0) || (newIndex === 0)) {
                                var $sentenceDivB = $('<div></div>');
                                $sentenceDivB.addClass('sentenceB'); // Dodanie klasy 'sentence'
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
                                $sentenceDiv.addClass('sentence'); // Dodanie klasy 'sentence'
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
                                    if (button0) {
                                        let czas = "fiszki";
                                        przekazArgument0(category, index55, true, czas);
                                        console.log('hej26', czas);
                                    }
                                    if (button) {
                                        przekazArgument(category, index55, true);
                                    }
                                    if (button2) {
                                        przekazArgument2(category, index55, true);
                                    }
                                    if (button3) {
                                        przekazArgument3(category, index55, true);
                                    }
                                    if (button4) {
                                        przekazArgument4(category, index55, true);
                                        console.log('hej26');
                                    }
                                    if (button5) {
                                        przekazArgument5(category, index55, true);
                                    }
                                    if (button6) {
                                        przekazArgument6(category, index55, true);
                                    }
                                    if (button7) {
                                        przekazArgument7(category, index55, true);
                                    }
                                    if (button8) {
                                        przekazArgument8(category, index55, true);
                                    }
                                    if (button9) {
                                        przekazArgument9(category, index55, true);
                                    }
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
                            tablica15.push(srcWords);
                            console.log('hej6', tablica15);
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
                    // Dodaj nasłuchiwanie przewijania do okna
                    let visibleIndexes = [];
                    let previousVisibleIndexes = [];

                    let timeoutId = null;
                    let lastChangeTime = 0;
                    let isFirstCall = true;
                    function countVisibleContainers() {
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

                        // Jeśli warunek jest spełniony i poprzedni timeout nie istnieje
                        if (indexes.length >= 4 && !timeoutId) {
                            // Sprawdź czy 4 kontenery są widoczne przez co najmniej 500ms z rzędu
                            if (elapsedTime >= 600) {
                                // Ustaw timeout na 300ms po spełnieniu warunku
                                timeoutId = setTimeout(() => {
                                    previousVisibleIndexes = [...indexes]; // kopiowanie tablicy indexes do previousVisibleIndexes
                                    console.log('Aktualne widoczne indeksy2:', indexes);
                                    otherFunction(indexes);
                                    timeoutId = null; // Resetuj timeoutId po wykonaniu funkcji
                                }, 1000);
                            }
                        } else if (indexes.length < 4 && timeoutId) {
                            // Jeśli warunek nie jest spełniony, a timeout istnieje, wyczyść timeout
                            clearTimeout(timeoutId);
                            timeoutId = null;
                        }

                        // Aktualizacja czasu ostatniej zmiany
                        lastChangeTime = currentTime;

                        return indexes;
                    }

                    $(window).on('scroll', function () {
                        countVisibleContainers();
                    });

                    $(document).ready(function () {
                        countVisibleContainers(); // Wywołanie przy ładowaniu strony
                    });
// Funkcja otherFunction z przekazanymi indeksami
                    function otherFunction(indexes) {
                        const czas = 'zdania';
                        console.log('wywołana');
                        console.log('Przekazane indeksy do otherFunction:', indexes);
                        przekazArgument0(category, undefined, false, czas);
                    }
                </script>
                <script id="demoScript" data-category=""></script>
        </body>
    </html>