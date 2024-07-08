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

                function wybierzRodzaj(category, czas, matchingIndexes) {
                    category = category || globalCategory;
                    czasv2 = czas;
                    console.log("Wybrany rodzaj słownictwa: " + category);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut
                    console.log('hej755', matchingIndexes); // Dodano logowanie matchingIndexes

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
                    console.log('hejxxxxxxxxxxxxxxxxx', uniqueMatchingLessons);
                    // Usuń załadowane kontenery o klasie 'image-container3'

                    console.log('hejxxxxxxxxxxxxxxxxx');


                    if (czas === 'fiszki' && czas !== "zdania") {
                        console.log('Warunek czas === "fiszki" jest spełniony');
                        if (uniqueMatchingLessons.length > 1) {
                            // Inicjuj flagę dla wystąpienia zera
                            let zeroWylosowane = false;
                            // Losowy indeks, w którym pojawi się zero
                            const zeroIndex = Math.floor(Math.random() * (uniqueMatchingLessons.length / 3));

                            let indexDiv = 0;
                            // Wyświetl fiszki dla każdej znalezionej pary lekcji
                            let startIndex = 0; // Zainicjuj startIndex poza pętlą

                            for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
                                indexDiv++;
                                const lessonId1 = uniqueMatchingLessons[i];
                                const lessonId2 = uniqueMatchingLessons[i + 1];
                                const lessonId3 = uniqueMatchingLessons[i + 2];
                                let losowyIndex;

                                // Sprawdź, czy zero nie zostało jeszcze wylosowane i czy obecny indeks jest równy zeroIndex
                                if (!zeroWylosowane && i / 3 === zeroIndex) {
                                    losowyIndex = 0;
                                    zeroWylosowane = true;
                                } else {
                                    // Losuj losowy indeks z zakresu od 1 do długości / 3 - 1
                                    losowyIndex = Math.floor(Math.random() * (uniqueMatchingLessons.length / 3 - 1)) + 1;
                                }

                                const newIndex = losowyIndex;

                                // Tworzenie obiektu reprezentującego lekcję
                                const lessonObject = {
                                    lessonId1: lessonId1,
                                    lessonId2: lessonId2,
                                    lessonId3: lessonId3,
                                    newIndex: newIndex
                                            // Tutaj możesz dodać więcej danych, jeśli są potrzebne
                                            // np. sentence1, sentence2 itp.
                                };
                                // Dodawanie obiektu do tablicy lekcji
                                lessonsArray.push(lessonObject);
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
                                if (tablica10.length <= 3 || tablica10.length === 0) {
                                    console.log('wykonuje się 8');
                                    console.log('hej18', tablica10);
                                    showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);

                                } else if ((newIndex === 0 && tablica10.length !== 0) || (tablica10.length <= 3 && tablica10.length !== 0)) {
                                    console.log('wykonuje się 10');
                                    console.log('hej22', tablica10);
                                    showCombinedSentenceForLesson3(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                                }
                            }
                            console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
// Sprawdź, czy dodano odpowiednią liczbę divów
                            const numberOfContainers = $('.image-container3').length;
                            console.log('Liczba dodanych divów:', numberOfContainers);
                        }
                    }
                    
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

            .sentence {
                margin-bottom: 10px;
                color: white;
            }
            .sentence1bb3,
            .sentence1bb3a,
            .sentence1bb2,
            .sentence1bb2a,
            .sentence1bba,
            .sentence1bb {
                margin-bottom: 5px;
                font-size: 15px;
                color: white;
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
                        <div class="image-container2" id="buttoncreate">Generowanie fiszki<button onclick="addFlashcardContainer()">START</button>
                        </div>
                        <div class="image-container2">Kartkówka<button onclick="showImages('set1')">START</button>
                        </div>
                        <div class="image-container2">Tłumacz tekst<button onclick="showImages('set1')">START</button>
                        </div>
                    </div>

                    <div class="grid-container">
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


                // Funkcja odtwarzająca losowy film
                function playRandomVideo() {
                    const randomIndex = Math.floor(Math.random() * videosArray.length);
                    const randomVideo = videosArray[randomIndex];

                    randomVideo.style.display = 'block'; // Wyświetl wylosowany film
                    randomVideo.currentTime = 0; // Przewiń film do początku przed odtworzeniem
                    randomVideo.play();
                }

                // Funkcja obsługująca zdarzenie zakończenia odtwarzania filmu
                function videoEndedHandler2() {
                    currentVideoIndex = (currentVideoIndex + 1) % imageContainer3Array.length; // Przejście do następnego filmu
                    playRandomImageContainer3(); // Odtwórz kolejny losowy film
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
 <div id="konsola" style="width: 500px;">
            <h2>Rodzaj Słownictwa</h2>
<button id="osoby" onclick="przekazArgument('osoby')" class="rodzaj-button" data-rodzaj="osoby">Osoby</button>
        <button onclick="przekazArgument2('osoby+czas')" class="rodzaj-button" data-rodzaj="osoby">Osoby + czas</button>
<button onclick="przekazArgument('podmiot+czas')" class="rodzaj-button" data-rodzaj="osoby">Podmiot + czas</button>
<button onclick="wybierzRodzaj('zaimki')" class="rodzaj-button" data-rodzaj="zaimki">Spójniki</button>
<button onclick="wybierzRodzaj('kolory')" class="rodzaj-button" data-rodzaj="kolory">Kolory</button>
<button onclick="wybierzRodzaj('zwierzeta')" class="rodzaj-button" data-rodzaj="zwierzeta">Zwierzęta</button><br>
<button onclick="wybierzCharakter('zdania')" class="czas">5 MINUT(JEDNO ZDANIE)</button>
<button id="fiszki" onclick="wybierzCharakter('fiszki')" class="czas">10 MINUT(3 ZDANIA)-OPCJONALNIE</button><br>
        <br>
<button id="english" onclick="wybierzCharakter('zdania')" class="charakter-button">TYLKO PO ANGIELSKU</button>
<button id="mix" onclick="wybierzCharakter('fiszki')" class="charakter-button">TŁUMACZ-OPCJONALNIE</button>
<button id="polski" onclick="wybierzCharakter('fiszki')" class="charakter-button">TYLKO PO POLSKU</button>
        </div>

            <div>
                <h2>Charakter Zdania</h2>
                <button onclick="wybierzCharakter('krotkie')">Krótkie</button>
                <button onclick="wybierzCharakter('dlugie')">Długie(złożone)</button>
                <button id="dowolne" onclick="wybierzCharakter('dowolne')">Dowolne</button>
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
                    gridContainer.style.marginTop = flashcardContainerHeight + 110 + 'px';



                    flashcardContainer.querySelectorAll('#osoby, #fiszki, #english, #dowolne').forEach(button => {
                        button.style.border = '2px solid blue';
                    });
// Funkcja dodająca czerwone obramowanie do określonego przycisku
                    function addBlueBorder(button) {
                        const category = button.classList[0]; // Pobierz klasę kategorii przycisku (rodzaj-button, charakter-button, czas)

                        // Usuń poprzednie zaznaczenia z danej kategorii
                        document.querySelectorAll('.' + category).forEach(btn => {
                            btn.style.border = '1px solid black';
                        });

                        // Następnie dodaj obramowanie do aktualnie klikniętego przycisku
                        button.style.border = '2px solid blue';
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
                    document.querySelectorAll('.rodzaj-button').forEach(button => {
                        button.addEventListener('click', handleRodzajButtonClick);
                    });

// Dodaj zdarzenia do przycisków charakter-button
                    document.querySelectorAll('.charakter-button').forEach(button => {
                        button.addEventListener('click', handleCharakterButtonClick);
                    });

// Dodaj zdarzenia do przycisków czas
                    document.querySelectorAll('.czas').forEach(button => {
                        button.addEventListener('click', handleCzasButtonClick);
                    });

// Dodaj zdarzenie do przycisku addFlashContainer, które wywoła funkcję dodającą obramowanie
                    document.querySelector('#buttoncreate').addEventListener('click', addBlueBorder);
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
                    przekazArgument('osoby');
                }

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
                function przekazArgument2(category) {
                    $('.grid-container .image-container3').remove();
                    if (!category) {
                        category = 'osoby+czas';
                    }
                    // Przypisz wartość do zmiennej globalnej
                    globalCategory = category;

                    // Wywołaj funkcję wybierzCharakter
                    tablica10.length = 0;
                    console.log('wykonuje się5');
                    wybierzCharakter();
                    console.log('hej100', tablica10);


                }
                function przekazArgument(category) {
                    $('.grid-container .image-container3').remove();
                    if (!category) {
                        category = 'osoby';
                    }
                    przyciskKlikniety = true;
                    // Przypisz wartość do zmiennej globalnej
                    globalCategory = category;
                    tablica10.length = 0;
                    // Wywołaj funkcję wybierzCharakter
                    wybierzCharakter();
                }

// Funkcja wybierająca charakter
                function wybierzCharakter(czas) {
                    if (!czas) {
                        czas = 'fiszki';
                    }

                    // Aktualizuj matchingIndexes na podstawie nowej kategorii
                    matchingIndexes = findXForMatchingFiszka(globalCategory, fiszki);

                    wybierzRodzaj(globalCategory, czas, matchingIndexes);
                    // Wyświetl na konsoli zaktualizowane matchingIndexes
                    console.log("Zaktualizowane matchingIndexes:", matchingIndexes);
                    console.log("wykonuje sie");
                    czasv2 = czas;
                    console.log('hej5', czas);
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

        // Jeśli identyfikator y nie jest jeszcze w mapie, dodaj go z początkowymi długościami
        if (!idToLengthsMap.has(y)) { 
            idToLengthsMap.set(y, { secondPartLength: 0, lastSentence: fiszka.sentence });
        }

        const lengths = idToLengthsMap.get(y);
        let lastSentence = lengths.lastSentence;
        let uniqueWords = new Set();
        let repeatedWords = 0;
        let startIdx = 0;

        fiszka.sentence.forEach((word, idx) => {
            if (startIdx < lastSentence.length && word === lastSentence[startIdx]) {
                repeatedWords++;
                startIdx++;
            } else {
                uniqueWords.add(word);
                                startIdx++;
            }
        });

        const newLength = fiszka.sentence.length - repeatedWords;

        // Oblicz długości pierwszej i drugiej części zdania
        lengths.secondPartLength += newLength;    // Druga część to nowe słowa

        // Update last sentence for next iteration
        idToLengthsMap.get(y).lastSentence = fiszka.sentence;
                        console.log('hej400', newLength);
    });
    // Konwersja mapy na tablicę wynikową
    const result = [];
    idToLengthsMap.forEach((lengths, id) => {
        result.push({ id: id, ...lengths });
    });

    return result;
}

const partLengths = calculatePartLengths(fiszki);
console.log('Part lengths:', partLengths);

function calculatePartLengths2(fiszki) {
    const idToLengthsMap = new Map(); // Mapa dla długości części zdania dla każdego identyfikatora y

    fiszki.forEach(fiszka => {
        const y = fiszka.id[1];

        // Jeśli identyfikator y nie jest jeszcze w mapie, dodaj go z początkowymi długościami
        if (!idToLengthsMap.has(y)) {
            const uniqueWords = new Set();
            let repeatedWords = 0;

            fiszka.sentence.forEach(word => {
                if (uniqueWords.has(word)) {
                    repeatedWords++;
                } else {
                    uniqueWords.add(word);
                }
            });

            const firstPartLength = fiszka.sentence.length - repeatedWords;

            idToLengthsMap.set(y, {
                firstPartLength: firstPartLength
            });
        }
    });

    // Konwersja mapy na tablicę wynikową
    const result = [];
    idToLengthsMap.forEach((lengths, id) => {
        result.push({ id: id, ...lengths });
    });

    return result;
}

const partLengths2 = calculatePartLengths2(fiszki);
console.log('Part lengths:', partLengths2);


// Przykładowe użycie:
// Ustalanie kategorii na podstawie globalCategory
                const categoryToFind = (globalCategory === 'osoby') ? 'osoby+czas' : 'osoby';
                if (globalCategory === 'osoby+czas') {
                    const categoryToFind = (globalCategory === 'osoby+czas') ? 'osoby' : 'osoby+czas';
                }
// Wywołanie funkcji findXForMatchingFiszka() dla odpowiedniej kategorii
                matchingIndexes = findXForMatchingFiszka(categoryToFind, fiszki);

                const lessonsArray = [];
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
                function wybierzRodzaj(category, czas, matchingIndexes) {
                    category = category || globalCategory;
                    czasv2 = czas;
                    console.log("Wybrany rodzaj słownictwa: " + category);
                    console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut
                    console.log('hej755', matchingIndexes); // Dodano logowanie matchingIndexes

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
                    console.log('hejxxxxxxxxxxxxxxxxx', uniqueMatchingLessons);
                    // Usuń załadowane kontenery o klasie 'image-container3'

                    console.log('hejxxxxxxxxxxxxxxxxx');


                    if (czas === 'fiszki' && czas !== "zdania") {
                        console.log('Warunek czas === "fiszki" jest spełniony');
                        if (uniqueMatchingLessons.length > 1) {
                            // Inicjuj flagę dla wystąpienia zera
                            let zeroWylosowane = false;
                            // Losowy indeks, w którym pojawi się zero
                            const zeroIndex = Math.floor(Math.random() * (uniqueMatchingLessons.length / 3));

                            let indexDiv = 0;
                            // Wyświetl fiszki dla każdej znalezionej pary lekcji
                            let startIndex = 0; // Zainicjuj startIndex poza pętlą

                            for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
                                indexDiv++;
                                const lessonId1 = uniqueMatchingLessons[i];
                                const lessonId2 = uniqueMatchingLessons[i + 1];
                                const lessonId3 = uniqueMatchingLessons[i + 2];
                                let losowyIndex;

                                // Sprawdź, czy zero nie zostało jeszcze wylosowane i czy obecny indeks jest równy zeroIndex
                                if (!zeroWylosowane && i / 3 === zeroIndex) {
                                    losowyIndex = 0;
                                    zeroWylosowane = true;
                                } else {
                                    // Losuj losowy indeks z zakresu od 1 do długości / 3 - 1
                                    losowyIndex = Math.floor(Math.random() * (uniqueMatchingLessons.length / 3 - 1)) + 1;
                                }

                                const newIndex = losowyIndex;
                                
                                                // Dodanie długości zdań
                // Znajdź długości zdań dla każdej lekcji
                const lesson1Sentences = correlationsCount.find(item => item[0] === lessonId1) || [lessonId1, 0];
                const lesson2Sentences = correlationsCount.find(item => item[0] === lessonId2) || [lessonId2, 0];
                const lesson3Sentences = correlationsCount.find(item => item[0] === lessonId3) || [lessonId3, 0];

// Znajdź długości drugiej części zdania dla każdej lekcji
const lesson1SecondPartLength = partLengths.find(item => item.id === lessonId1)?.secondPartLength || 0;
const lesson2SecondPartLength = partLengths.find(item => item.id === lessonId2)?.secondPartLength || 0;
const lesson3SecondPartLength = partLengths.find(item => item.id === lessonId3)?.secondPartLength || 0;

// Znajdź długości drugiej części zdania dla każdej lekcji
const lesson1FirstPartLength = partLengths2.find(item => item.id === lessonId1)?.firstPartLength || 0;
const lesson2FirstPartLength = partLengths2.find(item => item.id === lessonId2)?.firstPartLength || 0;
const lesson3FirstPartLength = partLengths2.find(item => item.id === lessonId3)?.firstPartLength || 0;

                const lessonObject = {
                    lessonId1: lessonId1,
                    lessonId2: lessonId2,
                    lessonId3: lessonId3,
                    newIndex: newIndex,
                    lesson1Sentences: lesson1Sentences,
                    lesson2Sentences: lesson2Sentences,
                    lesson3Sentences: lesson3Sentences,
                    lesson1FirstPartLength: lesson1FirstPartLength,
                    lesson2FirstPartLength: lesson2FirstPartLength,
                    lesson3FirstPartLength: lesson3FirstPartLength,
                    lesson1SecondPartLength: lesson1SecondPartLength,
                    lesson2SecondPartLength: lesson2SecondPartLength,
                    lesson3SecondPartLength: lesson3SecondPartLength
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
                                if (tablica10.length <= 3 || tablica10.length === 0) {
                                    console.log('wykonuje się 8');
                                    console.log('hej18', tablica10);
                                    showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, lesson1Sentences, lesson2Sentences, lesson3Sentences, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);

                                } else if ((newIndex === 0 && tablica10.length !== 0) || (tablica10.length <= 3 && tablica10.length !== 0)) {
                                    console.log('wykonuje się 10');
                                    console.log('hej22', tablica10);
                                    showCombinedSentenceForLesson3(lessonId1, lessonId2, lessonId3, lesson1Sentences, lesson2Sentences, lesson3Sentences, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                                }
                            }
                            console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
// Sprawdź, czy dodano odpowiednią liczbę divów
                            const numberOfContainers = $('.image-container3').length;
                            console.log('Liczba dodanych divów:', numberOfContainers);
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
                const tablica10 = [];
                console.log('hej55', tablica10);
                let sentence1bVisible = false;
                let sentence1baVisible = false;
                let sentence1b3aVisible = false;
                function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, lesson1Sentences, lesson2Sentences, lesson3Sentences, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray) {

                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);

                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                        const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                        const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                        const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);

                        function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                            return matchingFiszka ? matchingFiszka.srcWord : null;
                        }
                        console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);

                        let sentence1 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, aktualny, lesson1Sentences) {
                            sentence1 = "";

                            console.log('działa1');
                            console.log('hej1', matchingFiszki1);
                            console.log('hej2', lessonIdToShow1);
                            console.log('hej3', matchingIndexes);
                            console.log('hej4', sentence1); // Użycie zmiennej sentence1
                            console.log('hej5', currentIndexValue);


                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                const fiszka = matchingFiszki1[i];
                                let combinedSentence = fiszka.sentence[i % 3]; // Domyślnie używaj zdania bez zmian
                                console.log('hej30', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(i + (lessonIdToShow1 - 1) * lesson1Sentences[1] + 1) && currentIndexValue == 0) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        if (!spanElement.classList.contains('highlighted-sentence')) {
                                            spanElement.classList.add('yellow');
                                            spanElement.classList.add('highlighted-sentence');
                                        }
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (currentIndexValue == 0) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.add('highlighted-sentence');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (currentIndexValue == 1 && matchingIndexes.includes(i + (lessonIdToShow1 - 1) * 6 + 1)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    }
                                }

                                sentence1 += combinedSentence + " ";

                            }
                            console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                            // Dodanie treści do diva wraz z przyciskiem
                            $sentenceDiv.html('<span class="sentence1">' + sentence1 + '</span><br>' + '<span class="sentence2">' + sentence2 + '</span><br>' + '<span class="sentence3" style="position:relative;">' + sentence3 + '</span><br>');

                            // Ustawienie stylu dla przycisków .left-button
                            $('.left-button').css('position', 'relative');
                            $('.left-buttonb').css('position', 'relative');
                            $('.left-buttonbb').css('position', 'relative');
                        }
                        let sentence1b = "";
                        let sentence1bb = "";
                        let sentence1bba = "";
                        function addBackgroundToText1b(matchingFiszki1, lessonIdToShow1, matchingIndexes, aktualny) {
                            $(document).ready(function () {

                                sentence1b = "";
                                sentence1bb = "";
                                sentence1bba = "";
                                setTimeout(() => {
                                    for (let i = 0; i < matchingFiszki1.length; i++) {
                                        const fiszka = matchingFiszki1[i];
                                        let sentencePart = fiszka.sentence[i % 3]; // Domyślnie używaj zdania bez zmian

                                        console.log('hej31', sentencePart);
                                        // Sprawdź, czy indeks jest równy 0
                                        if (aktualny) {
                                            if (matchingIndexes.includes(i + (lessonIdToShow1 - 1) * 6 + 1)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
                                                console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                            }
                                        }

                                        sentence1b += sentencePart + " ";
                                        let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bb += sentencePart1 + " ";
                                        let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bba += sentencePart1a + " ";
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '</span>' +
                                                '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                '<br>'
                                                );

                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let $sentence1bb = $sentenceDiv.find('.sentence1bb');
                                        let $sentence1bba = $sentenceDiv.find('.sentence1bba');
                                        console.log('hej20', $sentence1bb); // Upewnij się, że ta linia wyświetla poprawne elementy
                                        // Ustawienie widoczności i stylu dla .sentence1bb
                                        // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                        if (sentence1bVisible) {
                                            $sentence1bb.css({
                                                'display': 'block',
                                                'margin-bottom': '-20px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                            console.log('sentence1bb style set to visible');
                                        }
                                        if (sentence1bVisible) {
                                            // Pokazujemy zdanie .sentence1bba
                                            $sentence1bba.css('display', 'block');
                                            $sentence1bba.css({
                                                'margin-bottom': '-0px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                        }

                                        // Dodatkowe logowanie stylów po ich ustawieniu
                                        console.log('Final display style for .sentence1bb:', $sentence1bb.css('display'));
                                        // Obsługa kliknięcia przycisku
                                        $sentenceDiv.on('click', '.left-button', function () {
                                            // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                            if (sentence1bb === "") {
                                                let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                                sentence1bb += sentencePart1 + " ";
                                            }
                                            if (sentence1bba === "") {
                                                let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                                sentence1bba += sentencePart1a + " ";
                                            }
                                            // Dodanie treści do diva wraz z przyciskiem
                                            $sentenceDiv.html(
                                                    '<br><button class="left-button first-button">+<br></button>' +
                                                    '<span class="sentence1b">' + sentence1b + '</span>' +
                                                    '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                    '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                    '<br><button class="left-buttonb second-button">+<br></button>' +
                                                    '<span class="sentence2b">' + sentence2b + '</span>' +
                                                    '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                    '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                    '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                    '<span class="sentence3b">' + sentence3b + '</span>' +
                                                    '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                    '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                    '<br>'
                                                    );

                                            // Ustawienie stylu dla przycisków .left-button
                                            $('.left-button').css('position', 'relative');
                                            $('.left-buttonb').css('position', 'relative');
                                            $('.left-buttonbb').css('position', 'relative');
                                            let sentencePart1 = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                            let sentencePart1a = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                            console.log('Kliknięto przycisk');
                                            let $sentence1bb2 = $sentenceDiv.find('.sentence1bb2');
                                            let $sentence1bb = $sentenceDiv.find('.sentence1bb');
                                            let $sentence1bba = $sentenceDiv.find('.sentence1bba');
                                            if ($sentence1bb.css('display') === 'none' || sentence1bVisible) {
                                                sentence1bVisible = true;
                                                sentence1baVisible = false;
                                                console.log('hej15', sentence1bVisible);
                                                // Pokazujemy zdanie .sentence1bb
                                                $sentence1bb.css('display', 'block');
                                                $sentence1bb.css({
                                                    'margin-bottom': '-20px',
                                                    'top': '0px',
                                                    'position': 'relative'
                                                });
                                            }

                                            if ($sentence1bba.css('display') === 'none' || sentence1bVisible) {
                                                // Pokazujemy zdanie .sentence1bba
                                                $sentence1bba.css('display', 'block');
                                                $sentence1bba.css({
                                                    'margin-bottom': '-0px',
                                                    'top': '0px',
                                                    'position': 'relative'
                                                });
                                            }
                                            $sentence1bb2.html('');
                                            $sentence1bb2.empty();
                                            $sentence1bb2a.html('');
                                            $sentence1bb2a.empty();
                                        });
                                    }
                                    ;
                                }, 100);
                            });


                            console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                        }

                        let sentence2 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, aktualny, lesson2Sentences) {
                            sentence2 = "";

                            for (let j = 0; j < matchingFiszki2.length; j++) {
                                const fiszka = matchingFiszki2[j];
                                let combinedSentence = fiszka.sentence[j % 3]; // Domyślnie używaj zdania bez zmian

                                console.log('hej30', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(j + (lessonIdToShow2 - 1) * lesson2Sentences[1] + 1) && currentIndexValue == 0) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (matchingIndexes.includes(j + (lessonIdToShow2 - 1) * 6 + 1) && currentIndexValue == 1) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        if (!spanElement.classList.contains('yellow')) {
                                            spanElement.classList.add('yellow');
                                            spanElement.classList.add('highlighted-sentence');
                                        }
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (currentIndexValue == 1) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.add('highlighted-sentence');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (currentIndexValue == 2 && matchingIndexes.includes(j + (lessonIdToShow1 - 1) * 6 + 1)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    }
                                }

                                sentence2 += combinedSentence + " ";

                            }
                            console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1

                        }

                        let sentence2b = "";
                        let sentence1bb2 = "";
                        let sentence1bb2a = "";
                        function addBackgroundToText2b(matchingFiszki2, lessonIdToShow2, matchingIndexes, aktualny) {

                            $(document).ready(function () {
                                                                                                                            setTimeout(() => {
                                sentence2b = "";
                                sentence1bb2 = "";
                                sentence1bb2a = "";

                                for (let j = 0; j < matchingFiszki2.length; j++) {
                                    const fiszka = matchingFiszki2[j];
                                    let sentencePart = fiszka.sentence[j % 3]; // Domyślnie używaj zdania bez zmian

                                    console.log('hej31', sentencePart);
                                    // Sprawdź, czy indeks jest równy 0
                                    if (aktualny) {
                                        if (matchingIndexes.includes(j + (lessonIdToShow2 - 1) * 6 + 1)) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart;
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                            console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                        }
                                    }
                                    sentence2b += sentencePart + " ";
                                    
                                    console.log('Zawartość zmiennej sentence1:', sentence2b); // Wyświetlenie zawartości zmiennej sentence1
                                    $sentenceDiv.on('click', '.left-buttonb', function () {
                                        // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                        if (sentence1bb2 === "") {
                                            let sentencePart2 = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb2 += sentencePart2 + " ";
                                        }
                                        if (sentence1bb2a === "") {
                                            let sentencePart2a = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb2a += sentencePart2a + " ";
                                        }
                                        // Dodanie treści do diva wraz z przyciskiem
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '</span>' +
                                                '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                '<br>'
                                                );
                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let sentencePart2 = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                        let sentencePart2a = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                        // Obsługa kliknięcia przycisku
                                        console.log('Kliknięto przycisk');
                                        let $sentence1bb2 = $sentenceDiv.find('.sentence1bb2');
                                        let $sentence1bb2a = $sentenceDiv.find('.sentence1bb2a');
                                        let $sentence1bb = $sentenceDiv.find('.sentence1bb');
                                        let $sentence1bba = $sentenceDiv.find('.sentence1bba');

                                        if ($sentence1bb2.css('display') === 'none') {
                                            sentence1bVisible = false;
                                            sentence1baVisible = true;
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb2.css('display', 'block');
                                            $sentence1bb2.css({
                                                'margin-top': '-10px',
                                                'top': '25px',
                                                'position': 'relative'
                                            });
                                        }
                                        if ($sentence1bb2a.css('display') === 'none') {
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb2a.css('display', 'block');
                                            $sentence1bb2a.css({
                                                'margin-top': '-20px',
                                                'top': '5px',
                                                'position': 'relative'
                                            });
                                        }
                                        $sentence1bb.html('');
                                        $sentence1bb.empty();
                                        $sentence1bba.html('');
                                        $sentence1bba.empty();
                                    });
                                    let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bb2 += sentencePart1 + " ";
                                        let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bb2a += sentencePart1a + " ";
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '</span>' +
                                                '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                
                                                '<br>'
                                                );

                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let $sentence1bb2 = $sentenceDiv.find('.sentence1bb2');
                                        let $sentence1bb2a = $sentenceDiv.find('.sentence1bb2a');
                                        console.log('hej20', $sentence1bb2); // Upewnij się, że ta linia wyświetla poprawne elementy
                                        // Ustawienie widoczności i stylu dla .sentence1bb
                                        // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                                                                    console.log('hej46', sentence1baVisible);
                                        if (sentence1baVisible) {

                                            $sentence1bb2.css('display', 'block');
                                            $sentence1bb2.css({
                                                'display': 'block',
                                                'margin-bottom': '-20px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                            console.log('sentence1bb style set to visible');
                                        }
                                        if (sentence1baVisible) {
                                            // Pokazujemy zdanie .sentence1bba
                                            $sentence1bb2a.css('display', 'block');
                                            $sentence1bb2a.css({
                                                'margin-bottom': '-0px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                        };
                                };
                                
                        }, 100);
                            });

                        }
                        let sentence3 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, aktualny, lesson3Sentences) {
                            sentence3 = "";

                            for (let k = 0; k < matchingFiszki3.length; k++) {
                                const fiszka = matchingFiszki3[k];
                                let combinedSentence = fiszka.sentence[k % 3]; // Domyślnie używaj zdania bez zmian
                                console.log('hej30', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(k + (lessonIdToShow3 - 1) * lesson3Sentences[1] + 1) && currentIndexValue == 1) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                    } else if (matchingIndexes.includes(k + (lessonIdToShow3 - 1) * 6 + 1) && currentIndexValue == 2) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        if (!spanElement.classList.contains('yellow')) {
                                            spanElement.classList.add('yellow');
                                            spanElement.classList.add('highlighted-sentence');
                                        }
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                    } else if (currentIndexValue == 2) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.add('highlighted-sentence');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                    } else if (currentIndexValue == 0 && matchingIndexes.includes(k + (lessonIdToShow3 - 1) * 6 + 1)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = combinedSentence;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        combinedSentence = spanElement.outerHTML;
                                    }
                                }

                                sentence3 += combinedSentence + " ";
                            }
                            console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                            // Dodanie treści do diva wraz z przyciskiem
                            $sentenceDiv.html('<span class="sentence1" style="position:relative;">' + sentence1 + '</span><br>' + '<span class="sentence2" style="position:relative;">' + sentence2 + '</span><br>' + '<span class="sentence3" style="position:relative;">' + sentence3 + '</span><br>');

                        }

                        let sentence3b = "";
                        let sentence1bb3 = "";
                        let sentence1bb3a = "";
                        function addBackgroundToText3b(matchingFiszki3, lessonIdToShow3, matchingIndexes, aktualny, lesson3Sentences) {
                                                        $(document).ready(function () {

                            sentence3b = "";
                            sentence1bb3 = "";
                            sentence1bb3a = "";

                            for (let k = 0; k < matchingFiszki3.length; k++) {
                                const fiszka = matchingFiszki3[k];
                                let sentencePart = fiszka.sentence[k % 3]; // Domyślnie używaj zdania bez zmian
                                console.log('hej31', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(k + (lessonIdToShow3 - 1) * lesson3Sentences[1] + 1)) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${k + (lessonIdToShow3 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    }
                                }

                                sentence3b += sentencePart + " ";
                                                                                                                    setTimeout(() => {
                            $sentenceDiv.on('click', '.left-buttonbb', function () {
                                        // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                        if (sentence1bb3 === "") {
                                            let sentencePart3 = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb3 += sentencePart3 + " ";
                                        }
                                        if (sentence1bb3a === "") {
                                            let sentencePart3a = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb3a += sentencePart3a + " ";
                                        }
                                        // Dodanie treści do diva wraz z przyciskiem
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '</span>' +
                                                '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                '<br>'
                                                );
                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let sentencePart3 = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                        let sentencePart3a = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                        // Obsługa kliknięcia przycisku
                                        console.log('Kliknięto przycisk');
                                        let $sentence1bb3 = $sentenceDiv.find('.sentence1bb3');
                                        let $sentence1bb3a = $sentenceDiv.find('.sentence1bb3a');
                                        let $sentence1bb = $sentenceDiv.find('.sentence1bb');
                                        let $sentence1bba = $sentenceDiv.find('.sentence1bba');

                                        if ($sentence1bb3.css('display') === 'none') {
                                            sentence1bVisible = false;
                                            sentence1b3aVisible = true;
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb3.css('display', 'block');
                                            $sentence1bb3.css({
                                                'display': 'block',
                                                'margin-bottom': '-40px',
                                                'top': '8px',
                                                'position': 'relative'
                                            });
                                        }
                                        if ($sentence1bb3a.css('display') === 'none') {
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb3a.css('display', 'block');
                                            $sentence1bb3a.css({
                                                'margin-top': '-0px',
                                                'top': '18px',
                                                'position': 'relative'
                                            });
                                        }
                                        $sentence1bb.html('');
                                        $sentence1bb.empty();
                                        $sentence1bba.html('');
                                        $sentence1bba.empty();
                                    });
                                    let sentencePart3 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bb3 += sentencePart3 + " ";
                                        let sentencePart3a = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bb3a += sentencePart3a + " ";
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '</span>' +
                                                '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                
                                                '<br>'
                                                );

                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let $sentence1bb3 = $sentenceDiv.find('.sentence1bb3');
                                        let $sentence1bb3a = $sentenceDiv.find('.sentence1bb3a');
                                        console.log('hej20', sentence1b3aVisible); // Upewnij się, że ta linia wyświetla poprawne elementy
                                        // Ustawienie widoczności i stylu dla .sentence1bb
                                        // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                                                                    console.log('hej46', sentence1baVisible);
                                        if (sentence1b3aVisible) {

                                            $sentence1bb3.css('display', 'block');
                                            $sentence1bb3.css({
                                                'display': 'block',
                                                'margin-bottom': '-40px',
                                                'top': '8px',
                                                'position': 'relative'
                                            });
                                            console.log('sentence1bb style set to visible');
                                        }
                                        if (sentence1b3aVisible) {
                                            // Pokazujemy zdanie .sentence1bba
                                            $sentence1bb3a.css('display', 'block');
                                            $sentence1bb3a.css({
                                                'margin-bottom': '-0px',
                                                'top': '18px',
                                                'position': 'relative'
                                            });
                                        };
                                                                                                    }, 100);
                                    
                                        };

                            });
                            
                        }
                        const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                        $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                        $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                        // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                        $container.attr('data-lesson', indexDiv);

                        $('.grid-container').append($container);

                        const srcWords = [srcWord1, srcWord2, srcWord3];
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

                        if (newIndex === 0) {
                            let funkcjaWywolana = false;
                            function addVideo(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    setTimeout(function () {
                                        $('.progress-bar').remove();
                                    }, 200); // Opóźnienie w milisekundach (tu: 1 sekunda)
                                    setFirstFrame();
                                    przekazArgument();
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
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1) {
                                                addBackgroundToText(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, true, lesson1Sentences);
                                                addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true, lesson2Sentences);
                                                addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true, lesson3Sentences);
                                            }
                                            if (currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true, lesson2Sentences);
                                                addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true, lesson3Sentences);
                                            }
                                            if (currentIndexValue[0] === 2 || currentIndexValue[0] === 3) {
                                                addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true, lesson3Sentences);
                                            }
                                        }

                                        // Sprawdź, czy wideo zostało zakończone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakończone, uruchamiam następne.');
                                            // Odtwórz następne wideo po zakończeniu poprzedniego
                                            addVideo(index + 1);
                                            updateProgress(0);
                                        }
                                    });
                                });
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
                            }
                            addVideo(0);

                        } else {
                            function addVideo2(index) {

                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                console.log('hej90', index);

                                const $vidDiv = $('<div>').addClass('background-video');

// Utwórz element <video> i ustaw atrybuty
                                const $videoElement = $('<video>').attr({
                                    'muted': true, // Wyciszenie dźwięku wideo
                                    'loop': true, // Zapętlenie wideo
                                    'style': 'z-index: 0'
                                });
                                // Zatrzymaj odtwarzanie wideo


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
                                // Obsługa zdarzenia timeupdate


                                // Dodaj div z wideo do tła kontenera
                                $vidDiv.appendTo($container);

                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                                addBackgroundToText1b(matchingFiszki1, lessonIdToShow1, matchingIndexes, true, lesson1Sentences);
                                addBackgroundToText2b(matchingFiszki2, lessonIdToShow2, matchingIndexes, true, lesson2Sentences);
                                addBackgroundToText3b(matchingFiszki3, lessonIdToShow3, matchingIndexes, true, lesson3Sentences);
                            }
                            addVideo2(0);

                        }
                        // Stwórz przycisk za pomocą jQuery
// Tworzenie nowego elementu div za pomocą jQuery
                        var $sentenceDiv = $('<div></div>');
                        $sentenceDiv.addClass('sentence'); // Dodanie klasy 'sentence'
                        $sentenceDiv.html(`${sentence1}<br>${sentence2}<br>${sentence3}`); // Dodanie treści do diva
                        $sentenceDiv.css({
                            'position': 'absolute',
                            'font-size': '18px',
                            'bottom': '0',
                            'text-align': 'center',
                            'z-index': '5'
                        });

// Dodanie diva z zdaniem do kontenera
                        $container.append($sentenceDiv);

                        function updateSentenceDiv2() {
                            var $sentenceDiv = $('<div></div>'); // Utwórz nowy element div za pomocą jQuery
                            $sentenceDiv.addClass('sentence');
                            $sentenceDiv.html(`<br> ${sentence1b} <br>`);
                            $sentenceDiv.css({
                                'position': 'absolute',
                                'font-size': '18px',
                                'bottom': '0', // Ustawienie odstępu od dolnej krawędzi dla pierwszego diva
                                'text-align': 'center',
                                'z-index': '1'
                            });

                            // Dodaj div z zdaniem do kontenera
                            $sentenceDiv.appendTo($container);
                        }

                        function updateSentenceDiv2b() {
                            var $sentenceDiv = $('<div></div>'); // Utwórz nowy element div za pomocą jQuery
                            $sentenceDiv.addClass('sentence');
                            $sentenceDiv.html(`${sentence2b} <br>`);
                            $sentenceDiv.css({
                                'position': 'absolute',
                                'font-size': '18px',
                                'bottom': '20px', // Ustawienie odstępu od dolnej krawędzi dla drugiego diva
                                'text-align': 'center',
                                'z-index': '2'
                            });

                            // Dodaj div z zdaniem do kontenera
                            $sentenceDiv.appendTo($container);
                        }

                        function updateSentenceDiv2c() {
                            var $sentenceDiv = $('<div></div>'); // Utwórz nowy element div za pomocą jQuery
                            $sentenceDiv.addClass('sentence');
                            $sentenceDiv.html(`<br> ${sentence3b} <br>`);
                            $sentenceDiv.css({
                                'position': 'absolute',
                                'font-size': '18px',
                                'bottom': '40px', // Ustawienie odstępu od dolnej krawędzi dla trzeciego diva
                                'text-align': 'center',
                                'z-index': '3'
                            });

                            // Dodaj div z zdaniem do kontenera
                            $sentenceDiv.appendTo($container);
                        }


                        tablica10.push(srcWords);
                        console.log('hej6', tablica10);

                    }
                    // Deklaracja tablicy, która będzie zawierać wszystkie tablice
                }

                function showCombinedSentenceForLesson3(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, lesson1Sentences, lesson2Sentences, lesson3Sentences, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray) {
                    console.log('załadowane');
                    const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);

                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                        const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                        $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                        $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                        // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                        $container.attr('data-lesson', indexDiv);

                        // Dodajemy nowy div do istniejącego kontenera .grid-container
                        $('.grid-container').append($container);


                        const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                        const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                        const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);

                        function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                            const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                            return matchingFiszka ? matchingFiszka.srcWord : null;
                        }

                        let sentence1 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, aktualny) {
                            sentence1 = "";
                            console.log('działa1');
                            console.log('hej1', matchingFiszki1);
                            console.log('hej2', lessonIdToShow1);
                            console.log('hej3', matchingIndexes);
                            console.log('hej4', sentence1); // Użycie zmiennej sentence1
                            console.log('hej5', currentIndexValue);

                            for (let i = 0; i < matchingFiszki1.length; i++) {
                                const fiszka = matchingFiszki1[i];
                                let sentencePart = fiszka.sentence[i % 3]; // Domyślnie używaj zdania bez zmian
                                console.log('hej30', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(i + (lessonIdToShow1 - 1) * 6 + 1) && currentIndexValue == 0) {
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
                                    } else if (currentIndexValue == 0) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.add('highlighted-sentence');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (currentIndexValue == 1 && matchingIndexes.includes(i + (lessonIdToShow1 - 1) * 6 + 1)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${i + (lessonIdToShow1 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    }
                                }

                                sentence1 += sentencePart + " ";
                            }
                            console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                            $sentenceDiv.html(`${sentence1}<br> ${sentence2}<br> ${sentence3}`);
                        }

                        let sentence2 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, aktualny) {
                            sentence2 = "";
                            console.log('działa1');
                            console.log('hej1', matchingFiszki1);
                            console.log('hej2', lessonIdToShow1);
                            console.log('hej3', matchingIndexes);
                            console.log('hej4', sentence1); // Użycie zmiennej sentence1
                            console.log('hej5', currentIndexValue);

                            for (let j = 0; j < matchingFiszki2.length; j++) {
                                const fiszka = matchingFiszki2[j];
                                let sentencePart = fiszka.sentence[j % 3]; // Domyślnie używaj zdania bez zmian
                                console.log('hej30', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(j + (lessonIdToShow2 - 1) * 6 + 1) && currentIndexValue == 0) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (matchingIndexes.includes(j + (lessonIdToShow2 - 1) * 6 + 1) && currentIndexValue == 1) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        if (!spanElement.classList.contains('yellow')) {
                                            spanElement.classList.add('yellow');
                                            spanElement.classList.add('highlighted-sentence');
                                        }
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (currentIndexValue == 1) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.add('highlighted-sentence');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    } else if (currentIndexValue == 2 && matchingIndexes.includes(j + (lessonIdToShow1 - 1) * 6 + 1)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                        console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                    }
                                }

                                sentence2 += sentencePart + " ";
                            }
                            console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                            $sentenceDiv.html(`${sentence1}<br> ${sentence2}<br> ${sentence3}`);
                        }

                        let sentence3 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                        function addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, aktualny) {
                            sentence3 = "";
                            console.log('działa1');
                            console.log('hej1', matchingFiszki1);
                            console.log('hej2', lessonIdToShow1);
                            console.log('hej3', matchingIndexes);
                            console.log('hej4', sentence1); // Użycie zmiennej sentence1
                            console.log('hej5', currentIndexValue);

                            for (let k = 0; k < matchingFiszki3.length; k++) {
                                const fiszka = matchingFiszki3[k];
                                let sentencePart = fiszka.sentence[k % 3]; // Domyślnie używaj zdania bez zmian
                                console.log('hej30', sentencePart);
                                // Sprawdź, czy indeks jest równy 0
                                if (aktualny) {
                                    if (matchingIndexes.includes(k + (lessonIdToShow3 - 1) * 6 + 1) && currentIndexValue == 1) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                    } else if (matchingIndexes.includes(k + (lessonIdToShow3 - 1) * 6 + 1) && currentIndexValue == 2) {
                                        // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        if (!spanElement.classList.contains('yellow')) {
                                            spanElement.classList.add('yellow');
                                            spanElement.classList.add('highlighted-sentence');
                                        }
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                    } else if (currentIndexValue == 2) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.add('highlighted-sentence');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                    } else if (currentIndexValue == 0 && matchingIndexes.includes(k + (lessonIdToShow3 - 1) * 6 + 1)) {
                                        const spanElement = document.createElement('span');
                                        spanElement.textContent = sentencePart;
                                        spanElement.classList.remove('highlighted-sentence');
                                        spanElement.classList.add('yellow');
                                        // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                        sentencePart = spanElement.outerHTML;
                                    }
                                }

                                sentence3 += sentencePart + " ";
                            }
                            console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                            $sentenceDiv.html(`${sentence1}<br> ${sentence2}<br> ${sentence3}`);
                        }

                        const srcWords = [srcWord1, srcWord2, srcWord3];

                        let videoDurations = [];

                        let totalDuration = 0;
                        for (let i = 0; i < srcWords.length; i++) {
                            const video = document.createElement('video');
                            video.src = srcWords[i];
                            video.addEventListener('loadedmetadata', function () {
                                totalDuration += this.duration;
                                console.log('tablica8', totalDuration);
                            });
                        }
                        console.log('tablica11', videoDurations);
                        function removePreviousVideo() {
                            const previousVideo = $container.find('video'); // Poprawne odwołanie do poprzedniego wideo
                            if (previousVideo.length > 0) {
                                previousVideo.remove(); // Usunięcie poprzedniego wideo z kontenera
                            }
                        }

                        if (newIndex === 0) {
                            // Znajdź kontener, przed którym chcesz wstawić nowy kontener
                            const containerToInsertBefore = document.querySelector(`.image-container3[data-lesson="${indexDiv + 1}"]`);

                            const newContainer = document.querySelector(`.image-container3[data-lesson="${indexDiv}"]`);

// Wstaw nowy kontener przed kontenerem znalezionym w poprzednim kroku
                            if (containerToInsertBefore) {
                                containerToInsertBefore.parentNode.insertBefore(newContainer, containerToInsertBefore);
                            } else {
                                console.error('Nie można znaleźć kontenera, przed którym należy wstawić nowy kontener.');
                            }
                            console.log('Adres URL pierwszego filmu:', srcWords[0]);

                            let funkcjaWywolana = false;
                            function addVideo(index) {
                                console.log('hej78', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy

                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    // Ustawienie pierwszego filmu jako tła kontenera
                                    setTimeout(function () {
                                        $('.progress-bar2').remove();
                                    }, 200); // Opóźnienie w milisekundach (tu: 1 sekunda)
                                    setFirstFrame2();
                                    przekazArgument();
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
                                    'loop': true      // Zapętlenie wideo
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
                                $videoElement.on('loadedmetadata', function () {
                                    const videoDuration = this.duration;
                                    videoDurations[index] = videoDuration;
                                    console.log('tablica7', totalDuration);
                                    $videoElement.on('timeupdate', function () {
                                        let adjustedProgress = 0;
                                        for (let i = 0; i < index; i++) {
                                            adjustedProgress += (videoDurations[i] / totalDuration) * 100;
                                        }
                                        adjustedProgress += (this.currentTime / videoDuration) * (videoDurations[index] / totalDuration) * 100;

                                        updateProgress2(adjustedProgress);
                                        console.log('funkcja tutaj dociera');
                                        console.log('hej77', index);
                                        // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                        if (!currentIndexValue.includes(index)) {
                                            // Dodaj index do tablicy currentIndex
                                            currentIndexValue.push(index);
                                            console.log('hej7', currentIndexValue);
                                            // Wywołaj funkcję addBackgroundToText tylko raz
                                            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1) {
                                                addBackgroundToText(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, true);
                                                addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                                addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                            }
                                            if (currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                                addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                            }
                                            if (currentIndexValue[0] === 2 || currentIndexValue[0] === 3) {
                                                addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                            }
                                        }

                                        // Sprawdź, czy wideo zostało zakończone
                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                            console.log('Wideo zakończone, uruchamiam następne.');

                                            // Odtwórz następne wideo po zakończeniu poprzedniego
                                            addVideo(index + 1);
                                            updateProgress2(0);
                                        }
                                    });
                                });
                                // Dodaj div z wideo do tła kontenera
                                $vidDiv.appendTo($container);
                                function setFirstFrame2() {
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
                                function updateProgress2(progress) {
                                    // Aktualizuj pasek postępu na dole kontenera
                                    $('.progress-bar2').css('width', progress + '%');
                                }

// Inicjalizacja paska postępu
                                const $progressBar2 = $('<div>').addClass('progress-bar2');
                                $progressBar2.css({
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
                                $progressBar2.appendTo($container);
                            }
                            addVideo(0);
                        } else {
                            function addVideo2(index) {
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                console.log('hej78', index);

                                const $vidDiv = $('<div>').addClass('background-video');

// Utwórz element <video> i ustaw atrybuty
                                const $videoElement = $('<video>').attr({
                                    'muted': true, // Wyciszenie dźwięku wideo
                                    'loop': true      // Zapętlenie wideo
                                });
                                // Zatrzymaj odtwarzanie wideo


// Utwórz element <source> dla wideo i ustaw atrybuty
                                const $sourceElement = $('<source>').attr({
                                    'src': srcWords[index], // Poprawne użycie interpolacji
                                    'type': 'video/mp4'     // Typ pliku wideo
                                });

// Dodaj element source do elementu video
                                $sourceElement.appendTo($videoElement);

// Dodaj element video do diva dla wideo
                                $videoElement.appendTo($vidDiv);

                                if ($videoElement && !$videoElement.paused) {
                                    $videoElement.pause();
                                }
                                // Dodaj element <source> do elementu <video>

                                // Obsługa błędu ładowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Obsługa zdarzenia timeupdate
                                $videoElement.on('timeupdate', function () {
                                    console.log('hej77', index);
                                    // Sprawdź, czy wartość index nie została jeszcze dodana do tablicy currentIndex
                                    if (!currentIndexValue.includes(index)) {
                                        // Dodaj index do tablicy currentIndex
                                        currentIndexValue.push(index);
                                        console.log('hej70', currentIndexValue);
                                        // Wywołaj funkcję addBackgroundToText tylko raz
                                        if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1) {
                                            addBackgroundToText(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, true);
                                            addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                            addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                        }
                                        if (currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                            addBackgroundToText2(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                            addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                        }
                                        if (currentIndexValue[0] === 2 || currentIndexValue[0] === 3) {
                                            addBackgroundToText3(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                        }
                                    }

                                    // Sprawdź, czy wideo zostało zakończone
                                    if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');

                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo(index + 1);
                                    }
                                });

                                // Dodaj div z wideo do tła kontenera
                                $vidDiv.appendTo($container);

                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener

                            }
                            addVideo2(0);
                        }
                        // Pobierz pierwszy element .image-container
                        var $sentenceDiv = $('<div></div>'); // Utwórz nowy element div za pomocą jQuery
                        $sentenceDiv.addClass('sentence');
                        $sentenceDiv.html(`${sentence1}<br> ${sentence2}<br> ${sentence3}`);
                        $sentenceDiv.css({
                            'position': 'absolute',
                            'font-size': '18px',
                            'bottom': '0',
                            'text-align': 'center',
                            'z-index': '1'
                        });

                        // Dodaj div z zdaniem do kontenera
                        $sentenceDiv.appendTo($container);



                        tablica10.push(srcWords);
                        console.log('hej6', tablica10);

                    }
                    // Deklaracja tablicy, która będzie zawierać wszystkie tablice
                }
                // Funkcja, która zapisuje adres URL pierwszej klatki pierwszego filmu
// Funkcja, która zapisuje adres URL pierwszego filmu



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
    function addBackgroundToText2b(matchingFiszki2, lessonIdToShow2, matchingIndexes, aktualny) {

                            $(document).ready(function () {
                                                                                                                            setTimeout(() => {
                                sentence2b = "";
                                sentence1bb2 = "";
                                sentence1bb2a = "";

                                for (let j = 0; j < matchingFiszki2.length; j++) {
                                const fiszka = matchingFiszki2[j];
                                const sentence1 = fiszka.sentence1.join(" "); // Łączy trzy słowa w jedno zdanie
    // Deklaracja zmiennej sentence2 na zewnątrz pętli forEach
    let sentence2 = '';

    // Używanie forEach do przetwarzania sentence2
    matchingFiszki2.forEach(f => {
        if (f.sentence2) {
            console.log('Sentence2:', f.sentence2.join(" "));
            sentence2 = f.sentence2.join(" ");
            console.log('hej43', sentence2);
        } else {
            console.log('Sentence2 nie istnieje lub jest puste');
        }
    });

    // Tworzenie combinedSentence po przetworzeniu sentence2
    let combinedSentence = sentence1 + " " + sentence2;
    console.log('hej27', combinedSentence);
                                    // Sprawdź, czy indeks jest równy 0
                                    if (aktualny) {
                                        if (matchingIndexes.includes(j + (lessonIdToShow2 - 1) * 6 + 1)) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = combinedSentence;
                                            spanElement.classList.add('yellow');
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            combinedSentence = spanElement.outerHTML;
                                            console.log(`Zaznaczono słowo ${j + (lessonIdToShow2 - 1) * 6 + 1} w pierwszym zestawie fiszek.`);
                                        }
                                    }
                                    sentence2b += combinedSentence + " ";
                                    
                                    console.log('Zawartość zmiennej sentence1:', sentence2b); // Wyświetlenie zawartości zmiennej sentence1
                                    $sentenceDiv.on('click', '.left-buttonb', function () {
                                        // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                        if (sentence1bb2 === "") {
                                            let sentencePart2 = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb2 += sentencePart2 + " ";
                                        }
                                        if (sentence1bb2a === "") {
                                            let sentencePart2a = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb2a += sentencePart2a + " ";
                                        }
                                        // Dodanie treści do diva wraz z przyciskiem
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '</span>' +
                                                '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                '<br>'
                                                );
                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let sentencePart2 = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                        let sentencePart2a = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                        // Obsługa kliknięcia przycisku
                                        console.log('Kliknięto przycisk');
                                        let $sentence1bb2 = $sentenceDiv.find('.sentence1bb2');
                                        let $sentence1bb2a = $sentenceDiv.find('.sentence1bb2a');
                                        let $sentence1bb = $sentenceDiv.find('.sentence1bb');
                                        let $sentence1bba = $sentenceDiv.find('.sentence1bba');

                                        if ($sentence1bb2.css('display') === 'none') {
                                            sentence1bVisible = false;
                                            sentence1baVisible = true;
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb2.css('display', 'block');
                                            $sentence1bb2.css({
                                                'margin-top': '-10px',
                                                'top': '25px',
                                                'position': 'relative'
                                            });
                                        }
                                        if ($sentence1bb2a.css('display') === 'none') {
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb2a.css('display', 'block');
                                            $sentence1bb2a.css({
                                                'margin-top': '-20px',
                                                'top': '5px',
                                                'position': 'relative'
                                            });
                                        }
                                        $sentence1bb.html('');
                                        $sentence1bb.empty();
                                        $sentence1bba.html('');
                                        $sentence1bba.empty();
                                    });
                                    let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                        sentence1bb2 += sentencePart1 + " ";
                                        let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                        sentence1bb2a += sentencePart1a + " ";
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '</span>' +
                                                '<span class="sentence1bba" style="position:relative; display:none;">' + sentence1bba + '</span>' +
                                                '<span class="sentence1bb" style="position:relative; display:none;">' + sentence1bb + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                
                                                '<br>'
                                                );

                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let $sentence1bb2 = $sentenceDiv.find('.sentence1bb2');
                                        let $sentence1bb2a = $sentenceDiv.find('.sentence1bb2a');
                                        console.log('hej20', $sentence1bb2); // Upewnij się, że ta linia wyświetla poprawne elementy
                                        // Ustawienie widoczności i stylu dla .sentence1bb
                                        // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                                                                    console.log('hej46', sentence1baVisible);
                                        if (sentence1baVisible) {

                                            $sentence1bb2.css('display', 'block');
                                            $sentence1bb2.css({
                                                'display': 'block',
                                                'margin-bottom': '-20px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                            console.log('sentence1bb style set to visible');
                                        }
                                        if (sentence1baVisible) {
                                            // Pokazujemy zdanie .sentence1bba
                                            $sentence1bb2a.css('display', 'block');
                                            $sentence1bb2a.css({
                                                'margin-bottom': '-0px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                        };
                                };
                                
                        }, 100);
                            });

                        }
                        
                                        let videosArray = []; // Tablica przechowująca filmy


                // Funkcja odtwarzająca losowy film
                function playRandomVideo() {
                    const randomIndex = Math.floor(Math.random() * videosArray.length);
                    const randomVideo = videosArray[randomIndex];

                    randomVideo.style.display = 'block'; // Wyświetl wylosowany film
                    randomVideo.currentTime = 0; // Przewiń film do początku przed odtworzeniem
                    randomVideo.play();
                }

                // Funkcja obsługująca zdarzenie zakończenia odtwarzania filmu
                function videoEndedHandler2() {
                    currentVideoIndex = (currentVideoIndex + 1) % imageContainer3Array.length; // Przejście do następnego filmu
                    playRandomImageContainer3(); // Odtwórz kolejny losowy film
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
                
                                    function showCombinedSentenceForLesson2(index50, lessonIdToShow1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength) {
                        const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                        const matchingFiszki10 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                        console.log('hej10', matchingFiszki10);
                        console.log('hej10', lessonsArrayA);
                        if (matchingFiszki10.length > 0) {
                            const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                            const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                            function pobierzSrcWordDlaLekcji(lessonId, fiszki) {
                                const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                                return matchingFiszka ? matchingFiszka.srcWord : null;
                            }
                            function pobierzSrcWordDlaLekcji2(lessonId, fiszki) {
                                const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                                return matchingFiszka ? matchingFiszka.srcWordimage : null;
                            }
                            let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                            let sentence11 = "";
                            let sentence1b = "";
                            let sentence1b2 = "";
                            function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1PartLength) {
                                setTimeout(function () {
                                });
                            }
                            
                            let sentence1bba = "";
                            let sentence1bbab = "";
                            function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength) {
                                $(document).ready(function () {
                                });                         
                            }



                            const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                            $container.addClass('image-container4'); // Dodajemy klasę do nowego diva
                            $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                            // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                            $container.attr('data-lesson', indexDiv);
                            $('.grid-container').append($container);
                            const srcWords = [srcWord1];
                            console.log('hej2', srcWords);
                            const srcWordimage = [srcWord10];
                            // Zmienna globalna przechowująca łączny czas trwania wszystkich wideo
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
                                console.log('hej333');
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
                                                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1PartLength);
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
                                addVideo1(0);
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
                                                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1PartLength);
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
                                        'style': 'z-index: 0',
                                        'poster': srcWordimage[index] // Dodanie plakatu do wideo
                                    });
                                    // Utwórz element <div> dla nakładki
                                    const $overlay = $('<div>').addClass('overlay');
    // Dodaj element video do diva dla wideo
                                    $videoElement.appendTo($container);
                                    // Dodaj nakładkę do kontenera, po dodaniu wideo
                                    $overlay.appendTo($container);
                                    addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength);
                                    // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontenerh);
                                }
                                addVideo3(0);
                            }
                            if ((index50 === 0 && buttonindex) || (newIndex === 0 && !buttonindex)) {
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
                        // Deklaracja tablicy, która będzie zawierać wszystkie tablice
                        
return countVisibleContainers();
                    }