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
                width: 150px;
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
                height: 170px;
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
                height: 170px;
                margin-bottom: 0px;
                align-items: center;
                font-size: 20px;
                margin-top: 20px;
                order: -1; /* Kolejność odwrotna - spycha w dół */
            }

            .sentence {
                margin-bottom: 10px;
                color: white;
            }

            .flashcard-container {
                width: 1200px;
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
                left: 600px;
                margin-top: 500px;
            }
            #buttoncreate {
                background-color: blue;
            }
            #buttoncreate.active {
                background-color: #2ecc71;
            }

            .grid-containera {
                width: 0px;
                height: 100px;
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
                gap: 10px;
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
.highlighted-sentence {
    background-color: rgba(255, 255, 0, 0.5); /* Kolor tła z opacity */
}
.yellow {
    color: yellow;
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
                <button onclick="showVideos('set3')" id="button2">PODEJŚCIE AGRESYWNE - ZAAWANSOWANY</button>
            </div>
            <div class="horizontal-bar" id="horizontalBar2">
                <button onclick="showVideos('set2')" id="button3">LEKCJA 15 MINUTOWA(30 SŁÓW)</button>
                <button onclick="showVideos('set3')" id="button4">LEKCJA 7 MINUTOWA(12 SŁÓW)</button>
                <button onclick="showVideos('set4')" id="button5">WSZYSTKIE</button>
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
                        <div class="image-container2" id="buttoncreate">Generowanie fiszki<button onclick="addFlashcardContainer();">START</button>
                        </div>
                        <div class="image-container2">Kartkówka<button onclick="showImages('set1')">START</button>
                        </div>
                        <div class="image-container2">Tłumacz tekst<button onclick="showImages('set1')">START</button>
                        </div>
                    </div>

                    <div class="grid-container">
                        <div class="image-container3" style="display: none;"></div>
                        <div class="image-container">
                            <a href="demo.html">
                                <video id="player" width="640" height="360" controls muted id="mojeVideo">
                                    <source src="voice/Project3.mp4" type="video/mp4">
                                </video>
                            </a>
                            <span class="caption">Nauka/Emocje/Zwierzęta/Impreza</span>
                        </div>
                        <div class="image-container">
                            <a href="demob.html">
                                <video id="player" width="640" height="360" controls muted>
                                    <source src="voice/Project4.mp4" type="video/mp4">
                                </video>
                            </a>
                            <span class="caption">Świętowanie/Sport/Zawód/Czynności</span>
                        </div>
                        <div class="image-container">
                            <video id="player" width="640" height="360" controls muted>
                                <source src="voice/music.mp4" type="video/mp4">
                            </video>
                            <span class="caption">Muzyka</span>
                        </div>
                        <div class="image-container">
                            <video id="player" width="640" height="360" controls muted>
                                <source src="voice/bike.mp4" type="video/mp4">
                            </video>
                            <span class="caption">Transport</span>
                        </div>
                        <div class="image-container">
                            <video id="player" width="640" height="360" controls autoplay muted>
                                <source src="voice/bike.mp4" type="video/mp4">
                            </video>
                            <span class="caption">Transport</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/1f.jpg" alt="Obraz 6">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/2a.jpg" alt="Obraz 7">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/2b.jpg" alt="Obraz 8">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/2c.jpg" alt="Obraz 1">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/2d.jpg" alt="Obraz 2">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/2e.jpg" alt="Obraz 3">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/2f.jpg" alt="Obraz 4">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/3a.jpg" alt="Obraz 5">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/3b.jpg" alt="Obraz 6">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/3c.jpg" alt="Obraz 7">
                            <span class="caption">Podpis 1</span>
                        </div>
                        <div>
                            <img class="image" src="img/fiszki1/3d.jpg" alt="Obraz 8">
                            <span class="caption">Podpis 1</span>
                        </div>
                    </div>
                </div>
            </div>
            <a id="linkDoStrony" href="demo5.html" onclick="wybierzRodzaj('osoby')">Osoby</a>
            <script>
                let videosArray = []; // Tablica przechowująca filmy
                let currentVideoIndex = 0; // Indeks bieżącego filmu do odtworzenia

                // Funkcja odtwarzająca losowy film
                function playRandomVideo() {
                    const randomIndex = Math.floor(Math.random() * videosArray.length);
                    const randomVideo = videosArray[randomIndex];

                    randomVideo.style.display = 'block'; // Wyświetl wylosowany film
                    randomVideo.currentTime = 0; // Przewiń film do początku przed odtworzeniem
                    randomVideo.play();
                }

                // Funkcja obsługująca zdarzenie zakończenia odtwarzania filmu
                function videoEndedHandler() {
                    currentVideoIndex = (currentVideoIndex + 1) % videosArray.length; // Przejście do następnego filmu
                    playRandomVideo(); // Odtwórz kolejny losowy film
                }

                // Funkcja wyświetlająca filmy z wybranego zestawu
                function showVideos(set) {
                    const videoContainer = document.querySelector('.grid-container');
                    videoContainer.innerHTML = ''; // Wyczyść poprzednie filmy

                    videosArray = []; // Wyczyść tablicę filmów

                    let selectedVideos = [];

                    // Wybierz zestaw filmów w zależności od wybranego setu
                    switch (set) {
                        case 'set2':
                            selectedVideos = [
                                {
                                    videoSrc: "voice/Project3.mp4",
                                    caption: "Nauka/Emocje/Zwierzęta/Impreza",
                                    link: "demo.html"
                                },
                                {
                                    videoSrc: "voice/Project4.mp4",
                                    caption: "Świętowanie/Sport/Zawód/Czynności",
                                    link: "demo.html"
                                }
                                        // Dodaj kolejne filmy dla set1
                            ];
                            break;
                        case 'set3':
                            selectedVideos = [
                                {
                                    videoSrc: "voice/bike.mp4",
                                    caption: "Sport/Transport",
                                    link: "demo.html"
                                },
                                {
                                    videoSrc: "voice/music.mp4",
                                    caption: "Muzyka/Rozrywka",
                                    link: "demo.html"
                                }
                                        // Dodaj kolejne filmy dla set1
                            ];
                            break;
                        case 'set4':
                            selectedVideos = [
                                {
                                    videoSrc: "voice/bike.mp4",
                                    caption: "Sport/Transport",
                                    link: "demo.html"
                                },
                                {
                                    videoSrc: "voice/music.mp4",
                                    caption: "Muzyka/Rozrywka",
                                    link: "demo.html"
                                },
                                {
                                    videoSrc: "voice/Project3.mp4",
                                    caption: "Nauka/Emocje/Zwierzęta/Impreza",
                                    link: "demo.html"
                                },
                                {
                                    videoSrc: "voice/Project4.mp4",
                                    caption: "Świętowanie/Sport/Zawód/Czynności",
                                    link: "demo.html"
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
                        const videoLink = document.createElement('a');
                        videoLink.href = videoData.link || '#';

                        const videoContainer = document.createElement('div');
                        videoContainer.classList.add('image-container');

                        const videoElement = document.createElement('video');
                        videoElement.setAttribute('width', '640');
                        videoElement.setAttribute('height', '360');
                        videoElement.setAttribute('controls', '');
                        videoElement.muted = true;
                        videoElement.controls = false;

                        videoElement.innerHTML = `<source src="${videoData.videoSrc}" type="video/mp4">`;
                        videoElement.addEventListener('ended', videoEndedHandler);

                        videoLink.appendChild(videoElement); // Umieść film wewnątrz linku

                        videoContainer.appendChild(videoLink); // Umieść link w kontenerze obrazu

                        const captionSpan = document.createElement('span');
                        captionSpan.classList.add('caption');
                        captionSpan.textContent = videoData.caption;

                        videoContainer.appendChild(captionSpan);

                        document.querySelector('.grid-container').appendChild(videoContainer);
                        videosArray.push(videoElement); // Dodaj filmy do tablicy
                    });

                    playRandomVideo();
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
                    var flashcardContainer = document.createElement("div");
                    flashcardContainer.className = "flashcard-container";
                    buttoncreate.classList.add('active');

                    // Dodaj buttony do diva
                    flashcardContainer.innerHTML += `
 <div>
            <h2>Rodzaj Słownictwa</h2>
<button onclick="przekazArgument('osoby')" class="rodzaj-button" data-rodzaj="osoby">Osoby</button>
        <button onclick="przekazArgument('osoby+czas')" class="rodzaj-button" data-rodzaj="osoby">Osoby + czas</button>
<button onclick="wybierzRodzaj('zaimki')" class="rodzaj-button" data-rodzaj="zaimki">Spójniki</button>
<button onclick="wybierzRodzaj('kolory')" class="rodzaj-button" data-rodzaj="kolory">Kolory</button>
<button onclick="wybierzRodzaj('zwierzeta')" class="rodzaj-button" data-rodzaj="zwierzeta">Zwierzęta</button>
<button onclick="wybierzCharakter('zdania')" class="charakter-button">5 MINUT(JEDNO ZDANIE)</button>
<button onclick="wybierzCharakter('fiszki')" class="charakter-button">10 MINUT(3 ZDANIA)</button>
        </div>

            <div>
                <h2>Charakter Zdania</h2>
                <button onclick="wybierzCharakter('krotkie')">Krótkie</button>
                <button onclick="wybierzCharakter('dlugie')">Długie(złożone)</button>
                <button onclick="wybierzCharakter('dowolne')">Dowolne</button>
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
        `;

                    // Dodaj do konsoli informację o próbie dodania diva
                    console.log("Próba dodania diva");


                    // Znajdź kontener, do którego chcesz dodać .flashcard-container
                    var targetContainer = document.querySelector('.grid-containera'); // Możesz zmienić na odpowiednią klasę lub id

                    // Dodaj div do znalezionego kontenera
                    targetContainer.appendChild(flashcardContainer);

                    var gridContainer = document.querySelector('.grid-container');
                    var flashcardContainerHeight = flashcardContainer.offsetHeight;
                    gridContainer.style.marginTop = flashcardContainerHeight + 70 + 'px';

                    // Dodaj zieloną ramkę po kliknięciu na przycisk
// Dodaj zieloną ramkę po kliknięciu na przycisk rodzaju słownictwa
                    flashcardContainer.querySelectorAll('.rodzaj-button').forEach(button => {
                        button.addEventListener('click', function () {
                            // Usuń zieloną ramkę z poprzednio zaznaczonego przycisku rodzaju słownictwa
                            var currentlySelectedRodzaj = flashcardContainer.querySelector('.zaznaczony-rodzaj');
                            if (currentlySelectedRodzaj) {
                                currentlySelectedRodzaj.classList.remove('zaznaczony-rodzaj');
                            }
                            // Dodaj zieloną ramkę do aktualnie klikniętego przycisku rodzaju słownictwa
                            button.classList.add('zaznaczony-rodzaj');
                        });
                    });

// Dodaj zieloną ramkę po kliknięciu na przycisk charakteru
                    flashcardContainer.querySelectorAll('.charakter-button').forEach(button => {
                        button.addEventListener('click', function () {
                            // Usuń zieloną ramkę z poprzednio zaznaczonego przycisku charakteru
                            var currentlySelectedCharakter = flashcardContainer.querySelector('.zaznaczony-charakter');
                            if (currentlySelectedCharakter) {
                                currentlySelectedCharakter.classList.remove('zaznaczony-charakter');
                            }
                            // Dodaj zieloną ramkę do aktualnie klikniętego przycisku charakteru
                            button.classList.add('zaznaczony-charakter');
                        });
                    });
                }

                var globalCategory;
                var czasv2;

                function przekazArgument(category) {
                    // Przypisz wartość do zmiennej globalnej
                    globalCategory = category;

                    // Wywołaj funkcję wybierzRodzaj
                    wybierzRodzaj();
                }

                function wybierzCharakter(czas) {
                    czasv2 = czas;
                    wybierzRodzaj(category, czas);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut
                }

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
                    return matchingIndexes;
                }

// Przykładowe użycie:
                const categoryToFind = "osoby"; // Kategoria do znalezienia
                const categoryToFind2 = "spójniki";
                const matchingIndexes = findXForMatchingFiszka(categoryToFind, fiszki);
                const matchingIndexes2 = findXForMatchingFiszka(categoryToFind2, fiszki);
                console.log("Indeksy dla kategorii", categoryToFind, "to", matchingIndexes);
// Wywołaj funkcję z otrzymaną wartością
// Wywołaj funkcję z otrzymaną wartością
// Wywołaj funkcję z otrzymaną wartością
                function wybierzRodzaj(category, czas) {
                    category = category || globalCategory;
                    czasv2 = czas;
                    console.log("Wybrany rodzaj słownictwa: " + category);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut

                    const matchingLessons = new Set(); // Użyj obiektu Set do przechowywania unikalnych wartości

                    // Iteracja przez fiszki
                    for (const fiszka of fiszki) {
                        // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                        const matchingFiszka = fiszka.category2.includes(category);

                        // Jeśli znaleziono pasującą fiszkę, dodaj numer lekcji do zestawu matchingLessons
                        if (matchingFiszka) {
                            matchingLessons.add(fiszka.id[1]);
                            console.log('hej8', matchingLessons);
                        }
                    }

                    // Konwertuj zestaw z powrotem na tablicę, jeśli to konieczne
                    const uniqueMatchingLessons = Array.from(matchingLessons);

                    // Usuń załadowane kontenery o klasie 'image-container3'
                    const loadedContainers = document.querySelectorAll('.image-container3');
                    loadedContainers.forEach(container => {
                        container.parentNode.removeChild(container);
                    });

if (czas === 'fiszki') {
    const sentence1 = '';
    const sentence2 = '';
    if (uniqueMatchingLessons.length > 1) {
        // Wyświetl fiszki dla każdej znalezionej pary lekcji
        let startIndex = 0; // Zainicjuj startIndex poza pętlą
        for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
            const lessonId1 = uniqueMatchingLessons[i];
            const lessonId2 = uniqueMatchingLessons[i + 1];
            const lessonId3 = uniqueMatchingLessons[i + 2];
            // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
            startIndex = i * 6;
            console.log('hej40', startIndex); // Wyświetl wartość startIndex
            showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex);
        }
    }
}

                    if (czas === 'zdania') {
                        // Wyświetl pojedyncze zdania dla znalezionych lekcji
                        uniqueMatchingLessons.forEach(lessonId => {
                            showCombinedSentenceForLesson2(lessonId, fiszki);
                        });
                    }

                    // Ustaw wartość globalCategory
                    globalCategory = category;

                    // Aktualizuj atrybut href linku z użyciem JavaScript
                    var link = document.getElementById('linkDoStrony');
                    link.href = 'demo5.html?category=' + encodeURIComponent(globalCategory);
                }

// Pobierz parametr z adresu URL
                const urlParams = new URLSearchParams(window.location.search);
                const category = urlParams.get('category');

                wybierzRodzaj(category);
                
                function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
    const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
    return matchingFiszka ? matchingFiszka.srcWord : null;
}

                
                function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex) {
                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
console.log('111', lessonIdToShow1);
console.log('222', lessonIdToShow2);
console.log('333', lessonIdToShow3);
                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                        console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);
        const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
        const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
        const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
        console.log('Source word for lesson 1:', srcWord1);
        console.log('Source word for lesson 2:', srcWord2);
                console.log('Source word for lesson 2:', srcWord3);
function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
    const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
    return matchingFiszka ? matchingFiszka.srcWord : null;
}
                        const srcWord = fiszki[0].srcWord[0];
                        console.log('hej50', srcWord);
                        // Budowanie zdania dla pierwszego zestawu fiszek
                        let sentence1 = "";
                        for (let i = 0; i < matchingFiszki1.length; i++) {
                            const fiszka = matchingFiszki1[i];
                            let sentencePart = fiszka.sentence[i % 3]; // Domyślnie używaj zdania bez zmian
                            console.log('hej30', sentencePart);
function addBackgroundToText(index) {
    // Sprawdź, czy indeks jest równy 0
    if (matchingIndexes.includes(i + (lessonIdToShow1 - 1) * 6 + 1)) {
        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
        const spanElement = document.createElement('span');
        spanElement.textContent = sentencePart;
        if (!spanElement.classList.contains('highlighted-sentence')) {
            spanElement.classList.add('yellow');
            spanElement.classList.add('highlighted-sentence');
        }
        // Zaktualizuj sentencePart, aby zawierał utworzony element span
        sentencePart = spanElement.outerHTML;
        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
    } else if (index === 0) {
        const spanElement = document.createElement('span');
        spanElement.textContent = sentencePart;
        spanElement.classList.add('highlighted-sentence');
        // Zaktualizuj sentencePart, aby zawierał utworzony element span
        sentencePart = spanElement.outerHTML;
        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
    }  else if (index !== 0) {
            const spanElement = document.createElement('span');
        spanElement.textContent = sentencePart;
        spanElement.classList.remove('highlighted-sentence');
        // Zaktualizuj sentencePart, aby zawierał utworzony element span
        sentencePart = spanElement.outerHTML;
        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
}
}
addBackgroundToText(0);
                            sentence1 += sentencePart + " ";
                        }

                        // Budowanie zdania dla drugiego zestawu fiszek
                        let sentence2 = "";
                        for (let j = 0; j < matchingFiszki2.length; j++) {
                            const fiszka = matchingFiszki2[j];
                            let sentencePart = fiszka.sentence[j % 3]; // Domyślnie używaj zdania bez zmian

                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                            if (matchingIndexes.includes((lessonIdToShow2 - 1) * 6 + j + 1)) {
                                sentencePart = `<span style="color: yellow;">${fiszka.sentence[j % 3]}</span>`;
                                console.log(`Zaznaczono słowo ${(lessonIdToShow2 - 1) * 6 + j + 1} w drugim zestawie fiszek.`);
                                console.log((lessonIdToShow2 - 1) * 6 + j + 1);
                            }

                            sentence2 += sentencePart + " ";
                        }
                        
                                                // Budowanie zdania dla drugiego zestawu fiszek
                        let sentence3 = "";
                        for (let k = 0; k < matchingFiszki3.length; k++) {
                            const fiszka = matchingFiszki3[k];
                            let sentencePart3 = fiszka.sentence[k % 3]; // Domyślnie używaj zdania bez zmian
                                console.log('hej15', startIndex);
                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                            if (matchingIndexes.includes((lessonIdToShow3 - 1) * 6 + k + 1)) {
                                sentencePart3 = `<span style="color: yellow;">${fiszka.sentence[k % 3]}</span>`;
                                console.log(`Zaznaczono słowo ${(lessonIdToShow3 - 1) * 6 + k + 1} w trzecim zestawie fiszek.`);
                            }

                            sentence3 += sentencePart3 + " ";
                        }

// Utwórz kontener i dodaj zdanie do niego
const container = document.createElement('div');
container.classList.add('image-container3');
container.style.position = 'relative'; // Ustawienie pozycji na relative

// Tworzenie tablicy linków do wideo
const srcWords = [srcWord1, srcWord2, srcWord3];

// Funkcja do usuwania poprzedniego wideo z kontenera
function removePreviousVideo() {
    const previousVideo = container.querySelector('video');
    if (previousVideo) {
        previousVideo.parentNode.removeChild(previousVideo);
    }
}

// Funkcja do tworzenia i dodawania wideo do kontenera
function addVideo(index) {
    // Sprawdź, czy jesteśmy poza zakresem tablicy
    if (index >= srcWords.length) {
        // Jeśli tak, ustaw index na początkowy indeks (0)
        index = 0;
    }

    // Usuń poprzednie wideo
    removePreviousVideo();

    // Utwórz div dla wideo
    const vidDiv = document.createElement('div');
    vidDiv.classList.add('background-video');

    // Utwórz element <video>
    const videoElement = document.createElement('video');
    videoElement.setAttribute('autoplay', ''); // Automatyczne odtwarzanie wideo
    videoElement.muted = true; // Wyciszenie dźwięku wideo
    videoElement.setAttribute('loop', ''); // Zapętlenie wideo

    // Utwórz element <source> dla wideo
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', `${srcWords[index]}`); // Poprawne użycie interpolacji
    sourceElement.setAttribute('type', 'video/mp4'); // Typ pliku wideo

    // Dodaj element <source> do elementu <video>
    videoElement.appendChild(sourceElement);

    // Obsługa błędu ładowania wideo
    videoElement.onerror = function() {
        console.error('Nie można załadować pliku wideo.');
    };

    // Obsługa zdarzenia timeupdate
    videoElement.ontimeupdate = function() {
        
        // Sprawdź, czy wideo zostało zakończone
        if (videoElement.duration - videoElement.currentTime < 0.5) {
            console.log('Wideo zakończone, uruchamiam następne.');
            // Odtwórz następne wideo po zakończeniu poprzedniego
            addVideo(index + 1);
        }
    };

    // Dodaj element <video> do diva z wideo
    vidDiv.appendChild(videoElement);

    // Dodaj div z wideo do tła kontenera
    container.appendChild(vidDiv);
    // Dodaj tło do tekstu
        if (index === 0) {
    addBackgroundToText();
        }
                if (index === 1) {
    addBackgroundToText2();
        }
}
addVideo(0);
// Rozpocznij od dodania pierwszego wideo
// Wywołanie funkcji addVideo z callbackiem



// Utwórz div zawierający zdanie
const sentenceDiv = document.createElement('div');
sentenceDiv.classList.add('sentence');
sentenceDiv.innerHTML = `${sentence1}<br> ${sentence2}<br> ${sentence3}`;
sentenceDiv.style.position = 'absolute'; // Ustawienie pozycji na absolute
sentenceDiv.style.fontSize = '18px'; // Ustawienie rozmiaru czcionki na 12 pikseli
sentenceDiv.style.bottom = '0'; // Przyleganie do dolnej krawędzi kontenera
sentenceDiv.style.textAlign = 'center'; // Wyśrodkowanie tekstu w poziomie

// Ustawienie z-index dla sentenceDiv większego niż z-index dla vidDiv
sentenceDiv.style.zIndex = '1';

// Dodaj div z zdaniem do kontenera
container.appendChild(sentenceDiv);

                        // Pobierz pierwszy element .image-container
                        const firstImageContainer = document.querySelector('.image-container');

                        // Wstaw .image-container3 przed pierwszym .image-container
                        firstImageContainer.parentNode.insertBefore(container, firstImageContainer);
                    } else {
                        console.log(`Brak fiszek dla lekcji ${lessonIdToShow1} lub ${lessonIdToShow2}.`);
                    }
                }

                function showCombinedSentenceForLesson2(lessonIdToShow, fiszki) {
                    const matchingFiszki = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow);
                    console.log('hej10', matchingFiszki);
                    if (matchingFiszki.length > 0) {
                        console.log(`Fiszki dla lekcji ${lessonIdToShow}:`);

                        // Zbuduj zdanie z pierwszego zdania z pierwszych trzech fiszek oraz pierwszego zdania z trzech kolejnych
                        const firstword = matchingFiszki.slice(0, 1).map(fiszka => fiszka.sentence[0]);
                        const nextword = matchingFiszki.slice(0, 1).map(fiszka => fiszka.sentence[1]);
                        const thirdword = matchingFiszki.slice(0, 1).map(fiszka => fiszka.sentence[2]);
                        const forthword = matchingFiszki.slice(3, 4).map(fiszka => fiszka.sentence[0]);
                        const fifthword = matchingFiszki.slice(4, 5).map(fiszka => fiszka.sentence[1]);
                        const sixthword = matchingFiszki.slice(5, 6).map(fiszka => fiszka.sentence[2]);
                        const sentence = `${firstword.join(" ")} ${nextword.join(" ")} ${thirdword.join(" ")} ${forthword.join(" ")} ${fifthword.join(" ")} ${sixthword.join(" ")}`;

                        // Utwórz kontener i dodaj zdanie do niego
                        const container = document.createElement('div');
                        container.classList.add('image-container3');
                        container.innerHTML = `<div class="sentence">${sentence}</div>`;

                        // Pobierz pierwszy element .image-container
                        const firstImageContainer = document.querySelector('.image-container');

                        // Wstaw .image-container3 przed pierwszym .image-container
                        firstImageContainer.parentNode.insertBefore(container, firstImageContainer);
                    } else {
                        console.log(`No fiszki found for Lesson ${lessonIdToShow}.`);
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
            </script>
            <script id="demoScript" data-category=""></script>
        </body>
    </html>