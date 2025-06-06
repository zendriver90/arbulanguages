<!DOCTYPE html>
<html>
    <head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-N1YHS2Y62J"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N1YHS2Y62J');
</script>

        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <link rel="stylesheet" type="text/css" href="css/alert.css">
        <link rel="stylesheet" type="text/css" href="css/lista.css">
                <link rel="stylesheet" type="text/css" href="js/fiszki.css">
        <link rel="stylesheet" type="text/css" href="css/styl7.css">
        <link rel="stylesheet" type="text/css" href="js/audioaudio.css">
        <link rel="stylesheet" type="text/css" href="css/1nowe-pc.css">
        <script src="js/story.js"></script>
        <script src="js/storage.js"></script>
        <script src="start\testowyb10.js"></script>
                <script src="js/lista.js"></script>
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            @media (min-width: 999px) {
                .matching-button {
    padding: 6px 12px;
    background-color: #d1e7dd;
    border: 1px solid #bcd0c7;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}
.matching-button:hover {
    background-color: #bcd0c7;
}
                .hidden-link {
    position: absolute;
    left: -9999px;
    visibility: hidden;
}
                .search-container {
    display: flex;
    align-items: center;
    gap: 0px; /* Odstęp między elementami */
}
                .search-wrapper {
  display: flex;
  width: 300px;
  flex-direction: column;
  gap: 20px;
}

.button-container {
    position: relative;
    gap: 0px;
    top: 96px;
}

input {
  font-size: 1rem;
}

.user-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: .25rem;
  margin-top: 1rem;
}

.card {
  border: 1px solid black;
  background-color: white;
  padding: .5rem;
}

.card > .header {
  margin-bottom: .25rem;
}

.card > .body {
  font-size: .8rem;
  color: #777;
}

.hide {
  display: none;
}
                .sentence-container {
                    display: flex; /* Użyj flexboxa dla wyrównania w linii */
                    align-items: center; /* Wyrównaj pionowo do środka */
                }
.sentence-container {
    display: inline-block; /* Pozwala zachować układ inline, ale z kontrolą nad pozycjonowaniem */
    position: relative; /* Kontener, który pozwala na absolutne pozycjonowanie categoryHTML */
}

.category-container {
    font-size: 10px;
    position: absolute; /* Pozycjonowanie absolutne */
    left: 200px;
    top: 0px; /* Wyrównanie w pionie na środek */
    margin-top: 0px;
    left: -120px; /* Ustawienie na lewo od zdania, dostosuj wartość, aby pasowało */
    transform: translateY(-50%); /* Centrowanie w pionie */
    z-index: 10; /* Zapewnia, że categoryHTML będzie na wierzchu */
}

.left-button {
    position: relative; /* Pozostaje w normalnym przepływie */
}
.left-button2 {
    position: relative; /* Pozostaje w normalnym przepływie */
    height: 25px;
    width: 25px;
    background-color: blue;
    border-radius: 8px;
}
span.highlight {
    margin-left: 200px;
}
                .nav-button {
                    font-size: 0.8em; /* Dostosuj rozmiar czcionki przycisków */
                    margin: 0 5px; /* Marginesy między przyciskami a tekstem */
                }
                                .next-button {
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
                    max-width: 100%;
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
                    height: 80px;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 20px;
                }

                .image-container3 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    width: 100%;
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
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    width: 100%;
                    position: relative;
                    min-height: 100px;
                    min-width: 330px;
                    height: auto;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 20px;
                    margin-top: 10px;
                    order: -1; /* Kolejność odwrotna - spycha w dół */
                }
                #wordDisplay {
    position: absolute;
    bottom: 0px;
    cursor: pointer;
    font-size: 22px;
    right: -140px;
    width: 130px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: black;
    z-index: 101;
    background-color: lightgray;
    border-radius: 8px;
    border: 2px solid black;
}
                .image-container5 {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    background-color: blue;
                    width: 100%;
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
                    position: absolute;
                    z-index: 1000;
                    white-space: nowrap; /* Zapobiega zawijaniu tekstu */
                    bottom: 10px;
                    right: 10px;
                    width: 18px;
                    height: 18px;
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
                    top: 165px;
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
                                                .dynamic-div2 {
                    position: absolute;
                    bottom: 5px; /* Ustawienie w dowolnym miejscu w kontenerze */
                    left: 10px;
                    font-size: 15px;
                    width: 150px; /* Szerokość dynamicznego div-a */
                    height: 20px; /* Wysokość dynamicznego div-a */
                    background-color: rgba(0, 0, 255, 0.5); /* Przezroczyste niebieskie tło */
                    color: white;
                    z-index: 1000; /* Wyższy z-index, aby był nad overlay */
                    display: none; /* Początkowo ukryty */
                    font-size: 10px;
                }
                                               .dynamic-div3 {
                    position: absolute;
                    bottom: 5px; /* Ustawienie w dowolnym miejscu w kontenerze */
                    left: 10px;
                    font-size: 15px;
                    width: 150px; /* Szerokość dynamicznego div-a */
                    height: 20px; /* Wysokość dynamicznego div-a */
                    background-color: orange; /* Przezroczyste niebieskie tło */
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
                    font-size: 15px;
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
                    margin-right: 0px;
                    top: 0px;
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
                    height: 10px; /* Wysokość paska postępu */
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
                                .search-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -100px;
}

input {
  font-size: 1rem;
}

.user-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: .25rem;
  margin-top: 1rem;
}

.card {
  border: 1px solid black;
  background-color: white;
  padding: .5rem;
}

.card > .header {
  margin-bottom: .25rem;
}

.card > .body {
  font-size: .8rem;
  color: #777;
}

.hide {
  display: none;
}
                /* Stylizacja modala */
                #part {
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
                                        max-width: 100%;
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
                    background-color: blue;
                    width: 100%;
                    position: relative;
                    min-height: 100px;
                    height: auto;
                    margin-bottom: 0px;
                    align-items: center;
                    font-size: 20px;
                    margin-top: 10px;
                    order: -1; /* Kolejność odwrotna - spycha w dół */
                }
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
                    min-height: 100px;
                    min-width: 100%;
                    position: absolute;
                    border-left: 3px solid orange;
                    border-top: 3px solid orange;
                    border-right: 3px solid orange;
                    border-bottom: 3px solid orange;
                    z-index: 1; /* Wideo, ustaw na niższy z-index */
                }
                .background-video22 {
                    min-height: 100px;
                    min-width: 100%;
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
                    font-size: 20px;
                    margin-top: 10px;
                    order: -1; /* Kolejność odwrotna - spycha w dół */
                }
                                                                .image-container4:hover {
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
                    font-size: 20px;
                    margin-top: 10px;
                    order: -1; /* Kolejność odwrotna - spycha w dół */
                    z-index: 110;
                }
                                #wordDisplay {
    position: absolute;
    bottom: -20px;
    cursor: pointer;
    font-size: 18px;
    left: 20px;
    width: 130px;
    height: 27px;
    text-align: center;
    line-height: 30px;
    color: black;
    z-index: 101;
    background-color: lightgray;
    border-radius: 8px;
    border: 2px solid black;
}
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
                    z-index: 1000;
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
                    z-index: 1000;
                    white-space: nowrap; /* Zapobiega zawijaniu tekstu */
                }
                .overlay-button {
                    position: absolute;
                    z-index: 1000000;
                    bottom: 10px;
                    right: -70px;
                    width: 18px;
                    height: 18px;
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
                    margin-bottom: -140px;
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
                                .dynamic-div2 {
                    position: absolute;
                    top: 10px; /* Ustawienie w dowolnym miejscu w kontenerze */
                    left: 10px;
                    font-size: 10px;
                    width: 70px; /* Szerokość dynamicznego div-a */
                    height: 20px; /* Wysokość dynamicznego div-a */
                    background-color: rgba(0, 0, 255, 0.5);
                    color: white;
                    z-index: 1000; /* Wyższy z-index, aby był nad overlay */
                    display: none; /* Początkowo ukryty */
                }
                                               .dynamic-div3 {
                    position: absolute;
                    bottom: 5px; /* Ustawienie w dowolnym miejscu w kontenerze */
                    left: 10px;
                    font-size: 15px;
                    width: 150px; /* Szerokość dynamicznego div-a */
                    height: 20px; /* Wysokość dynamicznego div-a */
                    background-color: orange; /* Przezroczyste niebieskie tło */
                    color: white;
                    z-index: 1000; /* Wyższy z-index, aby był nad overlay */
                    display: none; /* Początkowo ukryty */
                    font-size: 10px;
                }
                                .image-container4:hover .run-button {
                                    z-index: 105;
                    display: block; /* Wyświetlenie przycisku na hover */
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
        max-width: 100%;
        height: 470px;
        background-color: #2ecc71;
        display: flex
;
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
        display: block;
        width: 100%;
        max-width: 100%; /* Zapobiega wychodzeniu poza ekran */
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        overflow-x: hidden; /* Wymusza brak poziomego przesunięcia */
    }
    .flashcard-container #konsola2 {
        display: block;
        width: 100%;
        max-width: 100%; /* Zapobiega wychodzeniu poza ekran */
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        overflow-x: hidden; /* Wymusza brak poziomego przesunięcia */
    }
                .flashcard-container #konsola3 {
                    display: none;
        width: 100%;
        max-width: 100%; /* Zapobiega wychodzeniu poza ekran */
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        overflow-x: hidden; /* Wymusza brak poziomego przesunięcia */
                }
                .flashcard-container #konsola4 {
                    display: none;
        width: 100%;
        max-width: 100%; /* Zapobiega wychodzeniu poza ekran */
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        overflow-x: hidden; /* Wymusza brak poziomego przesunięcia */
                }
                .word-span.current {
                    background-color: yellow; /* lub inny kolor */
                    font-weight: bold;
                }
    .word-span {
        font-size: 9px;
        height: 9px; /* Ustaw stałą wysokość */
        line-height: 9px; /* Dopasuj do wysokości */
        text-align: center;
        color: yellow;
        cursor: pointer;
        display: inline-block;
        padding: 5px;
        margin: 3px;
        background-color: blue;
        border-radius: 5px;
    }

                .word-span:hover {
                    cursor: pointer; /* Zmiana kursora na pointer */
                    background-color: #007BFF; /* Zmiana koloru tła po najechaniu */
                    color: white; /* Zmiana koloru tekstu po najechaniu */
                }
                /* Styl dla podświetlonego słowa */
                .highlighted {
                    cursor: pointer; /* Zmiana kursora na pointer */
                    background-color: green; /* Kolor podświetlenia */
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
                    max-width: 100%;
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
                    max-width: 100%; /* Zapewnienie, że kontener zajmuje 100% szerokości */
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
                    max-width: 100%;
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
                    max-width: 100%;
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
        </style>
    </head>
    <body>
        <a href="demo1angielski.html?category=all" class="hidden-link lesson-link-1" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
<a href="demo2angielski.html?category=all" class="hidden-link lesson-link-2" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
<a href="demo3angielski.html?category=all" class="hidden-link lesson-link-3" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
<a href="demo4angielski.html?category=all" class="hidden-link lesson-link-4" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 4</a>
<a href="demo5angielski.html?category=all" class="hidden-link lesson-link-5" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 5</a>
<a href="demo6angielski.html?category=all" class="hidden-link lesson-link-6" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 6</a>
<a href="demo7angielski.html?category=all" class="hidden-link lesson-link-7" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 7</a>
<a href="demo8angielski.html?category=all" class="hidden-link lesson-link-8" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 8</a>
<a href="demo9angielski.html?category=all" class="hidden-link lesson-link-9" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 9</a>
<a href="demo10angielski.html?category=all" class="hidden-link lesson-link-10" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 10</a>
<a href="demo11angielski.html?category=all" class="hidden-link lesson-link-11" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 11</a>
<a href="demo12angielski.html?category=all" class="hidden-link lesson-link-12" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 12</a>
<a href="demo13angielski.html?category=all" class="hidden-link lesson-link-13" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 13</a>
<a href="demo14angielski.html?category=all" class="hidden-link lesson-link-14" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 14</a>
<a href="demo15angielski.html?category=all" class="hidden-link lesson-link-15" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 15</a>
<a href="demo16angielski.html?category=all" class="hidden-link lesson-link-16" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 16</a>
<a href="demo17angielski.html?category=all" class="hidden-link lesson-link-17" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 17</a>
<a href="demo18angielski.html?category=all" class="hidden-link lesson-link-18" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 18</a>

        <a href="demo1angielskib.html?category=all" class="hidden-link lesson-link-1b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
<a href="demo2angielskib.html?category=all" class="hidden-link lesson-link-2b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
<a href="demo3angielskib.html?category=all" class="hidden-link lesson-link-3b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
<a href="demo4angielskib.html?category=all" class="hidden-link lesson-link-4b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 4</a>
<a href="demo5angielskib.html?category=all" class="hidden-link lesson-link-5b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 5</a>
<a href="demo6angielskib.html?category=all" class="hidden-link lesson-link-6b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 6</a>
<a href="demo7angielskib.html?category=all" class="hidden-link lesson-link-7b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 7</a>
<a href="demo8angielskib.html?category=all" class="hidden-link lesson-link-8b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 8</a>
<a href="demo9angielskib.html?category=all" class="hidden-link lesson-link-9b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 9</a>
<a href="demo10angielskib.html?category=all" class="hidden-link lesson-link-10b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 10</a>
<a href="demo11angielskib.html?category=all" class="hidden-link lesson-link-11b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 11</a>
<a href="demo12angielskib.html?category=all" class="hidden-link lesson-link-12b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 12</a>
<a href="demo13angielskib.html?category=all" class="hidden-link lesson-link-13b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 13</a>
<a href="demo14angielskib.html?category=all" class="hidden-link lesson-link-14b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 14</a>
<a href="demo15angielskib.html?category=all" class="hidden-link lesson-link-15b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 15</a>
<a href="demo16angielskib.html?category=all" class="hidden-link lesson-link-16b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 16</a>
<a href="demo17angielskib.html?category=all" class="hidden-link lesson-link-17b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 17</a>
<a href="demo18angielskib.html?category=all" class="hidden-link lesson-link-18b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 18</a>
<a href="demo19angielskib.html?category=all" class="hidden-link lesson-link-19b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 19</a>
<a href="demo20angielskib.html?category=all" class="hidden-link lesson-link-20b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 20</a>
<a href="demo21angielskib.html?category=all" class="hidden-link lesson-link-21b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 21</a>
<a href="demo22angielskib.html?category=all" class="hidden-link lesson-link-22b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 22</a>
<a href="demo23angielskib.html?category=all" class="hidden-link lesson-link-23b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 23</a>
<a href="demo24angielskib.html?category=all" class="hidden-link lesson-link-24b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 24</a>
<a href="demo25angielskib.html?category=all" class="hidden-link lesson-link-25b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 25</a>
<a href="demo26angielskib.html?category=all" class="hidden-link lesson-link-26b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 26</a>
<a href="demo27angielskib.html?category=all" class="hidden-link lesson-link-27b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 27</a>
<a href="demo28angielskib.html?category=all" class="hidden-link lesson-link-28b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 28</a>
<a href="demo29angielskib.html?category=all" class="hidden-link lesson-link-29b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 29</a>
<a href="demo30angielskib.html?category=all" class="hidden-link lesson-link-30b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 30</a>
<a href="demo31angielskib.html?category=all" class="hidden-link lesson-link-31b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 31</a>
<a href="demo32angielskib.html?category=all" class="hidden-link lesson-link-32b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 32</a>
<a href="demo33angielskib.html?category=all" class="hidden-link lesson-link-33b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 33</a>
<a href="demo34angielskib.html?category=all" class="hidden-link lesson-link-34b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 34</a>
<a href="demo35angielskib.html?category=all" class="hidden-link lesson-link-35b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 35</a>
<a href="demo36angielskib.html?category=all" class="hidden-link lesson-link-36b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 36</a>
<a href="demo37angielskib.html?category=all" class="hidden-link lesson-link-37b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 37</a>
<a href="demo38angielskib.html?category=all" class="hidden-link lesson-link-38b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 38</a>
<a href="demo39angielskib.html?category=all" class="hidden-link lesson-link-39b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 39</a>
<a href="demo40angielskib.html?category=all" class="hidden-link lesson-link-40b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 40</a>
<a href="demo41angielskib.html?category=all" class="hidden-link lesson-link-41b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 41</a>
<a href="demo42angielskib.html?category=all" class="hidden-link lesson-link-42b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 42</a>
<a href="demo43angielskib.html?category=all" class="hidden-link lesson-link-43b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 43</a>
<a href="demo44angielskib.html?category=all" class="hidden-link lesson-link-44b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 44</a>
<a href="demo45angielskib.html?category=all" class="hidden-link lesson-link-45b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 45</a>
<a href="demo46angielskib.html?category=all" class="hidden-link lesson-link-46b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 46</a>
<a href="demo47angielskib.html?category=all" class="hidden-link lesson-link-47b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 47</a>
<a href="demo48angielskib.html?category=all" class="hidden-link lesson-link-48b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 48</a>
<a href="demo49angielskib.html?category=all" class="hidden-link lesson-link-49b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 49</a>
<a href="demo50angielskib.html?category=all" class="hidden-link lesson-link-50b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 50</a>
<a href="demo51angielskib.html?category=all" class="hidden-link lesson-link-51b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 51</a>
<a href="demo52angielskib.html?category=all" class="hidden-link lesson-link-52b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 52</a>
        <div class="horizontal-bar" id="horizontalBar1">
            <button id="myButton">ANGIELSKI</button>
            <button id="myButton2">HISZPAŃSKI</button>
        </div>
        <div class="horizontal-bar" id="horizontalBar2">
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
                    <div class="image-container2">Standard<button onclick="showImages('set1')"> LOSUJ LEKCJE</button>
                    </div>
                    <div class="image-container2" id="buttoncreate">Generowanie fiszki<button id="flashcardButton" onclick="addFlashcardContainer()">OTWÓRZ KONSOLE</button>
                    </div>
                    <div class="image-container2">Kartkówka<button onclick="showImages('set1')">START</button>
                    </div>
                    <div class="image-container2">Tłumacz tekst<button onclick="showImages('set1')">START</button>
                    </div>
                </div>
<div class="search-container">
    <div class="search-wrapper">
        <label for="search">Search Word</label>
        <input type="search" id="search" data-search>
    </div>
    <div class="button-container">
        <button id="polski" class="rodzaj-button2">Polski</button>
        <button id="angielski" class="rodzaj-button2">Angielski</button>
    </div>
</div>
                <div>
    <button id="singleSentenceBtn" class="rodzaj-button">Jedno zdanie</button>
    <button id="threeSentencesBtn" class="rodzaj-button">Trzy zdania</button>
    <button id="singleWordBtn" class="rodzaj-button">Pojedyncze słowo</button>
                </div><br>
                <div id="matchingButtonsContainer" style="margin-top: 10px;"></div>
                <p id="key3Result"></p>
                <button class="left-button2">+<br></button>TE LEKCJE MAJĄ DOSTĘPNE SKOJARZENIA W WIĘKSZYM ZAKRESIE TEMATÓW
<div class="user-cards" data-user-cards-container></div>

<template data-user-template>
    <div class="card">
        <div class="header" data-header></div>
        <div class="body" data-body></div>
    </div>
</template>

                <div class="grid-container">
                </div>
            </div>
        </div>
        <div class="bottom-bar" id="bottomBar">
            <button class="bottom-button" onclick="ustawTryb('zdania', undefined); przekazArgument0(globalCategory, '', '', 'zdania', false, false, tablica3[1])">1 ZDANIE / LEKCJA</button>
            <button class="bottom-button" onclick="ustawTryb('fiszki', undefined); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, tablica3[1])">3 ZDANIA / LEKCJA</button>
            <button class="bottom-button" onclick="ustawTryb(tablica3[0], 'frazy'); przekazArgument0(globalCategory, '', '', tablica3[0], true, true, tablica3[1])">FRAZY</button>
            <button class="bottom-button">SŁOWA</button>
            <button id="searchButton" class="bottom-button2" onclick="zmienLupke()">
                <img src="img/lupki3fa.png" alt="Szukaj" class="lupka" id="lupkaImage">
            </button>
        </div>
          
        <div class="toggle-button" id="toggleButton">
            <span id="arrow">&#9660;</span> <!-- Strzałka skierowana w dół -->
        </div>
        <script>


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

    przekazArgument0(tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
});

angielskiButton.addEventListener("click", function () {
    searchKey = "key"; // Przełączamy na polski
    console.log("Przełączono na polski, używam klucza:", searchKey);
    isSearching = true;

    findMatchingKeys(fiszki, document.getElementById("search")?.value.toLowerCase().trim(), searchKey);
    matchingLessons5 = findLessonsForWords(fiszki, searchKey);
    matchingLessons5b = findLessonsForWordsB(fiszki, searchKey);

    przekazArgument0(tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
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
displayKey3ForMatchingLessons();
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
        przekazArgument0(tablica3[2], '', false, 'zdania', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
    });

    document.getElementById("threeSentencesBtn")?.addEventListener("click", () => {
        tablica3[0] = 'fiszki';
        przekazArgument0(tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
    });
polskiButton.addEventListener("click", function () {
przekazArgument0(tablica3[2], '', false, 'fiszki', false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, false);
});
    przekazArgument0(tablica3[2], '', false, tablica3[0], false, false, tablica3[1], tablica3[4], true, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40);
});
function showMatchingButtons() {
    const container = document.getElementById("matchingButtonsContainer");
    if (!container) {
        console.warn("Brak kontenera #matchingButtonsContainer w HTML");
        return;
    }

    container.innerHTML = "";

    matchingKeys.forEach(word => {
        const btn = document.createElement("button");
        btn.textContent = word;
        btn.className = "matching-button";
        btn.style.margin = "5px";
        btn.addEventListener("click", () => {
            console.log("Kliknięto słowo:", word);
        });
        container.appendChild(btn);
    });

    if (matchingKeys.length === 0) {
        container.innerHTML = "<p>Brak wyników</p>";
    }
    matchingLessons5b = findLessonsForWordsB(fiszki, searchKey);
    console.log("Wybrany rodzaj5555: ", matchingLessons5b);
}

showMatchingButtons();
function displayKey3ForMatchingLessons() {
    matchingLessons5b.forEach(lessonId => {
        // Znajdź fiszkę o id odpowiadającym lessonId
        const foundFiszka = fiszki10.find(fiszka => fiszka.id[0] === lessonId);

        if (foundFiszka) {
            console.log("Fiszka o id", lessonId, "ma key3:", foundFiszka.key3);
            // Możesz również wyświetlić to w HTML:
            const result = document.getElementById("key3Result");
            if (result) {
                result.textContent = "key3 dla fiszki o id " + lessonId + ": " + foundFiszka.key3.join(", ");
            }
        } else {
            console.log("Nie znaleziono fiszki dla id:", lessonId);
        }
    });
}

// Przykładowe wywołanie
displayKey3ForMatchingLessons();
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
        przekazArgument0(tablica3[2], '', false, 'zdania', true, true, tablica3[1], tablica3[4], false, '', '');
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
    przekazArgument0(tablica3[2], '', false, 'fiszki', true, true, tablica3[1], tablica3[4], false, '', '');
    });
    

        document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.czas40').forEach(btn => btn.style.border = '1px solid black');

    // Pobierz pierwszy przycisk z klasą 'czas40' i zaznacz go domyślnie
    const firstButton = document.querySelector('#threeSentencesBtn');
    const secondButton = document.querySelector('#angielski');
    if (firstButton || secondButton) {
        firstButton.style.border = '2px solid blue';
        secondButton.style.border = '2px solid blue';
    }
        document.querySelectorAll('.rodzaj-button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.rodzaj-button').forEach(btn => btn.style.border = '1px solid black');
                this.style.border = '2px solid blue';
            });
        });
                document.querySelectorAll('.rodzaj-button2').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.rodzaj-button2').forEach(btn => btn.style.border = '1px solid black');
                this.style.border = '2px solid blue';
            });
        });
    });
    
function showFiszkiForLesson5d(matchingFiszki1v, tablica41) {
    if (tablica41.length > 0) {
    matchingFiszki1v.forEach((fiszka, index) => {
        let id = fiszka; // Pobranie id z matchingFiszki
        let parametr = tablica41[index] || ''; // Pobranie odpowiadającej wartości z tablica41

        if (Array.isArray(fiszka)) {
            // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
            id = fiszka.slice(0, 3).join(',');
            // Obsługa dodatkowego parametru (np. czwartego elementu w tablicy)
            parametr = fiszka.length > 3 ? fiszka[3] : parametr;
        }

        // Tworzenie klasy CSS dla fiszki
        const className = `fiszka-${id}${parametr ? '\\,' + parametr : ''}`;
        console.log(`Tworzę fiszkę z klasą: ${className}`);

        generateFiszkaBlock3(id, parametr);
    });
}
}
            var tablica3 = [];


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
            window.addEventListener('load', function () {
                bottomBar.classList.add('show'); // Pasek widoczny
                toggleButton.classList.add('show-toggle-button'); // Strzałka nad paskiem

                // Automatyczne schowanie paska po 3 sekundach
                setTimeout(function () {
                    bottomBar.classList.remove('show');
                    bottomBar.classList.add('hidden'); // Schowanie paska
                    arrow.innerHTML = '&#9650;'; // Zmiana strzałki na skierowaną w górę
                    toggleButton.classList.remove('show-toggle-button'); // Strzałka wraca na dół
                }, 3000); // 3000 ms = 3 sekundy
            });

// Strzałka do ręcznego rozwijania i chowania paska
            toggleButton.addEventListener('click', function () {
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
                window.location.href = 'https://www.arbulang.com/matrix.html';
            });
            document.getElementById('myButton2').addEventListener('click', function () {
                window.location.href = 'https://www.arbulang.com/matrix2.html';
            });




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
<button id="inne" class="rodzaj-button" data-rodzaj="osoby">SPOŁECZNOŚCIOWY</button>        
        <button class="charakter-button" onclick="ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false, 'losowyuklad')">WYGENEROWANY JEDNORAZOWO</button>
            <div id="title">RODZAJ SŁOWNICTWA</div>
                    <button id="inne" class="rodzaj-button" data-rodzaj="osoby">KOGNATY</button>
    <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '', tablica3[1], 'other', false, '', '')">Wszystkie</button>
    <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('osoby', '', '', '', '', '', tablica3[1], 'other', false, '', '')">Osoby</button>
    <button class="rodzaj-button" data-rodzaj="zaimki osobowe" onclick="przekazArgument0('zaimkiosobowe', '', '', '', '', '', tablica3[1], 'other', false, '', '')">Zaimki osobowe</button>
    <button id="inne" onclick="przekazArgument0('emocje', '', '', '', '', '', tablica3[1])">Emocje</button>
    <button class="rodzaj-button" data-rodzaj="zaimki" onclick="przekazArgument0('spojniki', '', '', '', '', '', tablica3[1], 'OTHER', false, '', '')">Spójniki</button>
    <button id="inne" onclick="przekazArgument0('kolory', '', '', '', '', '', tablica3[1])">Kolory</button>
    <button class="rodzaj-button" data-rodzaj="zwierzeta" onclick="przekazArgument0('zwierzeta', '', '', '', '', '', tablica3[1], false, '', '')">Zwierzęta</button>
    <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument0('czasownik', '', '', '', '', '', tablica3[1], false, '', '')">Czasowniki</button>
            <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument0('czas', '', '', '', '', '', tablica3[1], false, '', '')">Czas</button>
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
<button id="inne" class="charakter-button" onclick="wybierzCharakter('krotkie')">Pisownia</button>
<button id="inne" onclick="wybierzCharakter('krotkie')">Sens zdania</button>
    <button id="inne" id="dowolne" onclick="wybierzCharakter('dowolne')">WSZYSTKIE</button>
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
                var $gridContainer2 = $('.search-container');
                                                            $gridContainer.css({
                                                'top': '-350px'
                                            });
                var flashcardContainerHeight = $flashcardContainer.height();
                $gridContainer.css('margin-top', flashcardContainerHeight + 110 + 'px');
$gridContainer2.css('margin-top', flashcardContainerHeight + 100 + 'px');

                function addBlueBorder(button) {
                    var category = $(button).attr('class').split(' ')[0]; // Pobierz klasę kategorii przycisku (rodzaj-button, charakter-button, czas)

                    // Usuń poprzednie zaznaczenia z danej kategorii
                    $('.' + category).css('border', '1px solid black');

                    // Następnie dodaj obramowanie do aktualnie klikniętego przycisku
                    $(button).css('border', '2px solid blue');
                }



                // Funkcja obsługująca kliknięcie w przyciski charakter-button
                function handleCharakterButtonClick() {
                    addBlueBorder(this);
                }

                // Funkcja obsługująca kliknięcie w przyciski czas
                function handleCzasButtonClick() {
                    addBlueBorder(this);
                }
                // Funkcja obsługująca kliknięcie w przyciski rodzaj-button
                function handleRodzajButtonClick() {
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


            tablica3[0] = 'fiszki'; // Domyślny tryb
            tablica3[1] = null; // Domyślny tryb
            tablica3[2] = 'all'; // Domyślny tryb
            tablica3[4] = null;
            function przekazArgument0(category, index55, buttonindex, czas, idpolski, idtranslate, id, rodzaj, isSearching, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40) {
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
                                console.log('nowy30', rodzaj);
                // Wywołaj funkcję wybierzCharakter na podstawie trybu
                wybierzCharakter(category, tablica3[0], index55, buttonindex, tablica3[1], tablica3[3], rodzaj, isSearching, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40);

            }

            function ustawTryb(tryb, frazy) {
                // Zaktualizuj pierwszą wartość w tablicy lub dodaj, jeśli jest pusta
                tablica3[0] = tryb;
                tablica3[3] = frazy;
            }
            console.log('hej33bb', tablica3);
            // Funkcja wybierająca charakter
            function wybierzCharakter(category, czas, index55, buttonindex, idpolski, frazyid, rodzaj, isSearching, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40) {
                console.log('hej223', czas, category, frazyid);

                pulpitstartowy = false;
                console.log('hej555', czas);
                // Aktualizuj matchingIndexes na podstawie nowej kategorii
                matchingIndexes = findXForMatchingFiszka(globalCategory, fiszki);
                matchingIndexes2 = findXForMatchingFiszka2(globalCategory, fiszki);
                matchingIndexes3 = findXForMatchingFiszka3(globalCategory, fiszki);

                wybierzRodzaj(globalCategory, czas, matchingIndexes, index55, buttonindex, idpolski, frazyid, matchingIndexes2, rodzaj, matchingIndexes3, isSearching, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40);
                // Wyświetl na konsoli zaktualizowane matchingIndexes
                console.log("Zaktualizowane matchingIndexes:", matchingIndexes);
                console.log("wykonuje sie hej", matchingIndexes2);
                czasv2 = czas;
            }

            // Funkcja znajdująca indeksy dla pasujących "fiszek"
            function findXForMatchingFiszka(category, fiszki) {
                const matchingIndexes = [];
                // Iteruj przez tablicę fiszki
                console.log('hej234', category);
                for (let i = 0; i < fiszki.length; i++) {
                    // Upewnij się, że fiszki[i] oraz fiszki[i].category3 są zdefiniowane
                    if (fiszki[i].category2.includes(category)) {
                        // Jeśli warunek jest spełniony, dodajemy indeks "fiszki" do tablicy
                        matchingIndexes.push(i + 1);
                        console.log('hej7vvv', matchingIndexes);
                    }
                }
                // Zwracamy tablicę indeksów pasujących "fiszek"
                console.log('wykonuje się 6', matchingIndexes);
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
            const lessonsArrayZ = [];
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
            function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex, idpolski, frazyid, matchingIndexes2, rodzaj, matchingIndexes3, isSearching, matchingLessons5, matchingLessons5b, isSearching2, staraTablica40) {
                category = category || globalCategory;
                czasv2 = czas;
                console.log("Wybrany rodzaj słownictwa: ", fiszki);
                console.log('hej5b', index55);
                console.log('hej755', matchingIndexes);

                const matchingLessons = new Set();
                const matchingLessons1b = new Set(matchingLessons5);
                const matchingLessons2 = new Set();
// Iteracja przez fiszki
console.log('hej755', matchingLessons1b);
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
                const uniqueMatchingLessons2b = Array.from(matchingLessons1b);
                    // Pobranie lekcji dla pasujących słów
                console.log('Unikalne dopasowane lekcjenn:', uniqueMatchingLessons2b);

                let myVariable;

                if (!isSearching) {
                    myVariable = uniqueMatchingLessons;
                } else if (isSearching) {
                    myVariable = uniqueMatchingLessons2b;
                    console.log('myVariable8:', uniqueMatchingLessons2b);
                }
                if (isSearching2) {
    console.log("Kliknięto singleWordBtn", staraTablica40);

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
    }, 100);
    function showFiszkiForLesson5ddb(staraTablica40, tablica41, fiszki) {
    console.log("Wybrany rodzaj4vv: ", staraTablica40);

    setTimeout(() => {
        let idFiszki = [];

        // Pobieranie id pasujących do tablica40
        staraTablica40.forEach(t40 => {
            fiszki.forEach(fiszka => {
                if (fiszka.id[0] === t40) {
                    idFiszki.push(fiszka.id); // Zapisujemy cały obiekt
                }
            });
        });

        console.log("Wyświetlam4vv:", idFiszki);

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

    }, 600);
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
        showFiszkiForLesson5ddb(staraTablica40, tablica41, fiszki);
    }, 0);
}
if (!isSearching2) {
    console.log('hej350');
    $('.grid-container .image-container3').remove();
        function showFiszkiForLesson5ddb(tablica40, tablica41, fiszki) {
    console.log("Wybrany rodzaj4vv: ", staraTablica40);

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

        console.log("Wyświetlam4vv:", idFiszki);

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

    }, 600);
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
}
                let powiadomienieCounter = 0; // Licznik wyświetleń powiadomień
                                if (czas === 'fiszki' && czas !== "zdania" && isSearching) {
                    console.log('Warunek czas === "fiszki" jest spełniony');
                    $('.grid-container .image-container4').remove();
                    $('.grid-container .image-container5').remove();

if (myVariable.length > 0) {
    let zeroWylosowane = false;
    let indexDiv = 0;
    let cumulativeFirstPartLength1 = 0;
    let cumulativeFirstPartLength2 = 0;
    let cumulativeFirstPartLength3 = 0;

    let startIndex = 0;
    const lengthDividedByThree = Math.floor(myVariable.length / 3);

    let indices = Array.from({ length: lengthDividedByThree }, (_, i) => i + 1);
    let indices2 = [...indices];

    console.log('hej12', indices2);

    let zeroIndex = Math.floor(Math.random() * lengthDividedByThree);
    let zeroIndex2 = zeroIndex;  // Assuming you want zeroIndex2 to mirror zeroIndex

    if (isSearching) {
        zeroIndex = undefined;
    } else {
        indices[zeroIndex] = 0; 
    }

    indices2[zeroIndex2] = 0;

                        tablica33.push(losowaniaCounter); // Dodaj zaktualizowany licznik do tablicy
                        console.log('hej1113', tablica33); // Wyświetl zawartość tablicy
                        for (let i = 0; i < myVariable.length; i += 3) {
                            indexDiv++;
                            const lessonId1 = myVariable[i];
                            const lessonId2 = myVariable[i + 1];
                            const lessonId3 = myVariable[i + 2];
                            const newIndex = indices[Math.floor(i / 3)];
                            const index50 = indices2[Math.floor(i / 3)];
                            console.log('hej16e', indexDiv);

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

                            const lessonObjectZ = {
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

                            lessonsArrayZ.push(lessonObjectZ);
                            console.log('hej3334vv', lessonObjectZ);

                            // Zwiększenie licznika losowań
                            console.log('Liczba losowań:', losowaniaCounter); // Dodano log licznika losowań



                            if (tablica10.length <= 17 || tablica10.length === 0) {
                                console.log('wykonuje się 8');
                                console.log('hej32', newIndex);
                                console.log('hej18vv', matchingLessons5b);
                                showCombinedSentenceForLesson(matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching);
                            }

                        }

                        console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
                        const numberOfContainers = $('.image-container3').length;
                        console.log('Liczba dodanych divów:', numberOfContainers);
                    }
                }
                if (czas === 'zdania' && czas !== 'fiszki' && isSearching) {
                    $('.grid-container .image-container3').remove();
                    $('.grid-container .image-container5').remove();
                    // Wyświetl pojedyncze zdania dla znalezionych lekcji
                    console.log('Warunek czas === "fiszki" jest spełniony');

                    if (myVariable.length > 0) {
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
                            console.log('hej3334vv', lessonObjectA);


                            // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                            console.log('hej558', lessonsArrayA);
                            console.log('hej40', newIndex); // Wyświetl wartość startIndex
                            console.log('wykonuje się 7');
                            console.log('hej323', index55);

                            console.log('hej344');
                            // Zwiększenie licznika losowań
                            console.log('Liczba losowań:', losowaniaCounter); // Dodano log licznika losowań


                            if ((tablica15.length <= 51 || tablica15.length === 0)) {
                                console.log('wykonuje się 8');

                                showCombinedSentenceForLesson2(polski, index50, matchingIndexes, lessonId1, newIndex, indexDiv, lesson1PartLength);
                                console.log('hej321', polski);
                            }
                        }
                    }
                }
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
                                if (idpolski === 'losowyuklad') {
    console.log('Warunek czas === "fiszki" jest spełniony');
                    $('.grid-container .image-container4').remove();
                    $('.grid-container .image-container5').remove();

    console.log('Zawartość myVariable:', myVariable);
    if (myVariable.length > 1) {
        let indexDiv = 0;
        let lessonsGroups = []; // Tablica do przechowywania grup lessonId
                        let startIndex = 0;
        for (let i = 0; i < myVariable.length; i += 3) {
            indexDiv++;
            const lessonId1 = myVariable[i];
            const lessonId2 = myVariable[i + 1];
            const lessonId3 = myVariable[i + 2];

            const lessonObject2 = {
                lessonId1: lessonId1,
                lessonId2: lessonId2,
                lessonId3: lessonId3,
                indexDiv: indexDiv
            };

            lessonsGroups.push(lessonObject2);
        }

        console.log('Utworzone grupy:', lessonsGroups);

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        shuffleArray(lessonsGroups);
        console.log('Grupy po tasowaniu:', lessonsGroups);

        lessonsGroups.forEach((group, index) => {
            console.log(`Grupa ${index}:`, group);

            const lesson1Sentences = correlationsCount.find(item => item[0] === group.lessonId1) || [group.lessonId1, 0];
            const lesson2Sentences = correlationsCount.find(item => item[0] === group.lessonId2) || [group.lessonId2, 0];
            const lesson3Sentences = correlationsCount.find(item => item[0] === group.lessonId3) || [group.lessonId3, 0];

            const lesson1SecondPartLength = partLengths2.find(item => item.id === group.lessonId1)?.count2 || 0;
            const lesson2SecondPartLength = partLengths2.find(item => item.id === group.lessonId2)?.count2 || 0;
            const lesson3SecondPartLength = partLengths2.find(item => item.id === group.lessonId3)?.count2 || 0;

            const lesson1FirstPartLength = partLengths1.find(item => item.id === group.lessonId1)?.count2 || 0;
            const lesson2FirstPartLength = partLengths1.find(item => item.id === group.lessonId2)?.count2 || 0;
            const lesson3FirstPartLength = partLengths1.find(item => item.id === group.lessonId3)?.count2 || 0;

            const lesson1PartLength = partLengths3.find(item => item.id === group.lessonId1)?.cumulativeCount || 0;
            const lesson2PartLength = partLengths3.find(item => item.id === group.lessonId2)?.cumulativeCount || 0;
            const lesson3PartLength = partLengths3.find(item => item.id === group.lessonId3)?.cumulativeCount || 0;

            console.log('Dane dla grupy:', {
                lesson1PartLength,
                lesson2PartLength,
                lesson3PartLength,
                lesson1Sentences,
                lesson2Sentences,
                lesson3Sentences
            });

    try {
        showCombinedSentenceForLesson(
            matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, group.indexDiv,
            group.lessonId1, group.lessonId2, group.lessonId3, fiszki, matchingIndexes,
            startIndex, index, lessonsGroups, lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength,
            lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength,
            lesson2SecondPartLength, lesson3SecondPartLength
        );
    } catch (error) {
        console.error("Błąd w showCombinedSentenceForLesson dla grupy:", group, "Błąd:", error);
    }
        });

        console.log('Zawartość lessonsGroups:', lessonsGroups);
        const numberOfContainers = $('.image-container3').length;
        console.log('Liczba dodanych divów:', numberOfContainers);
    }
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

                

                if (czas === 'fiszki' && czas !== "zdania" && !isSearching) {
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

                            if (tablica10.length <= 17 || tablica10.length === 0) {
                                console.log('wykonuje się 8');
                                console.log('hej32', newIndex);
                                console.log('hej18', tablica10);
                                showCombinedSentenceForLesson(matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching);
                            }

                        }

                        console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
                        const numberOfContainers = $('.image-container3').length;
                        console.log('Liczba dodanych divów:', numberOfContainers);
                    }
                }

                if (czas === 'zdania' && czas !== 'fiszki' && !isSearching) {
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
                            if ((tablica15.length <= 52 || tablica15.length === 0)) {
                                console.log('wykonuje się 8');

                                showCombinedSentenceForLesson2(polski, index50, matchingIndexes, lessonId1, newIndex, indexDiv, lesson1PartLength);
                                console.log('hej321', polski);
                            }
                        }
                    }
                }

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
            let tablica12ab = [];
            let tablica12ad = [];
            let tablica12abc = [];

                            function showCombinedSentenceForLesson(matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
                console.log('hej55bb', matchingIndexes);
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej450b', matchingFiszki1);
                console.log('hej444', newIndex);

                if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {

                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    const srcWord1d = pobierzSrcWordDlaLekcji4(lessonIdToShow1, fiszki);
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                    const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                    const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki);
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
                    function pobierzSrcWordDlaLekcji4(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);


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
                    function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b) {
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
                            console.log('matchingFiszki1:', fiszki);
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
                                        let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence11 = "";
                    let sentence1bba = "";
                    let sentence1bbab = "";
                    function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        $(document).ready(function () {

                            console.log('hejkh', lesson1PartLength);
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
                                        console.log('matchingIndexes1000:', matchingIndexes);
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
                                            if (matchingLessons5b.includes(indexToCheck2) && matchingIndexes.length === 0) {
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
                                            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                            if (matchingLessons5b.includes(indexToCheck2) && matchingIndexes.length === 0) {
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
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bba">${sentence1bbab}</div>
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
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
        <div class="sentence1bba">${sentence1bbab}</div>
<button class="left-buttonb second-button">+<br></button>
${sentence20}${sentence22}<br>
<div class="sentence1bb1b">${sentence1bb1b}</div>
<div class="sentence1bba2">${sentence1bba2}</div>
<button class="left-buttonbb third-button">+<br></button>
${sentence30}${sentence33}<br>
        <div class="sentence1bb3">${sentence1bb3}</div>
        <div class="sentence1bb1c">${sentence1bb1c}</div>
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
                    function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {

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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
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
                                        const indexToCheck2 = jj + lesson2PartLength + 1;
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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
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
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bba">${sentence1bbab}</div>
<button class="left-buttonb second-button">+<br></button>
${sentence20}${sentence22}<br>
<div class="sentence1bb1b">${sentence1bb1b}</div>
<div class="sentence1bba2">${sentence1bba2}</div>
<button class="left-buttonbb third-button">+<br></button>
${sentence30}${sentence33}<br>
        <div class="sentence1bb3">${sentence1bb3}</div>
        <div class="sentence1bb1c">${sentence1bb1c}</div>
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
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bba">${sentence1bbab}</div>
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

                    function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        $(document).ready(function () {
setTimeout(() => {
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
                                        console.log('sentencePart5:', sentencePart);
                                        const indexToCheck = l + lesson3PartLength + 1;
                                        const indexToCheck2 = l + lesson3PartLength + 1;
                                    console.log('indexToCheck:', indexToCheck);
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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
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
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }
                                for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                    let sentencePart3 = fiszka.sentence2[lmn];
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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart3;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart3 = spanElement.outerHTML;
                                            }
                                    sentence33 += sentencePart3 + " ";
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

                                $sentenceDiv.html(`
<button class="left-button first-button">+<br></button>
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bba">${sentence1bbab}</div>
<button class="left-buttonb second-button">+<br></button>
${sentence20}${sentence22}<br>
<div class="sentence1bb1b">${sentence1bb1b}</div>
<div class="sentence1bba2">${sentence1bba2}</div>
<button class="left-buttonbb third-button">+<br></button>
${sentence30}${sentence33}<br>
        <div class="sentence1bb3">${sentence1bb3}</div>
        <div class="sentence1bb1c">${sentence1bb1c}</div>
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
<button class="left-button first-button">+<br></button>
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bba">${sentence1bbab}</div>
<button class="left-buttonb second-button">+<br></button>
${sentence20}${sentence22}<br>
<div class="sentence1bb1b">${sentence1bb1b}</div>
<div class="sentence1bba2">${sentence1bba2}</div>
<button class="left-buttonbb third-button">+<br></button>
${sentence30}${sentence33}<br>
        <div class="sentence1bb3">${sentence1bb3}</div>
        <div class="sentence1bb1c">${sentence1bb1c}</div>
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
                            }, 0);
                        });
                    }
                    


                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    
                    $('.grid-container').append($container);

                    const srcWords = [srcWord1, srcWord2, srcWord3];
                    const srcWordsb = [srcWord1d, srcWord2d, srcWord3d];
                    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];
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

                    if (newIndex === 0 && !buttonindex && !isSearching) {
                        console.log('hej33b', buttonindex);
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo1(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video').css({
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
$videoElement.hide(); // Ukrycie wideo przed załadowaniem

$videoElement.on('loadedmetadata', function () {
    $videoElement.show(); // Pokaż wideo po załadowaniu metadanych

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

        if (!currentIndexValue.includes(index)) {
            currentIndexValue.push(index);
            console.log('hej70', currentIndexValue);
            if (currentIndexValue[0] === 0 || currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
            }
        }

        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
            console.log('Wideo zakończone, uruchamiam następne.');
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
                            setTimeout(function () {
                                addVideo1(0);
                            }, 200);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo1b(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video22').css({
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
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
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
                            setTimeout(function () {
                                addVideo1b(0);
                            }, 200);
                        }
                    } else if (index50 === 0 && buttonindex && !isSearching) {
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
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
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
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
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
                            setTimeout(function () {
                                addVideo2(0);
                            }, 700);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo2b(index) {
                                console.log('hej80', index);

                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    setTimeout(function () {
                                        $('.progress-bar').remove();
                                    }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
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
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
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
                            setTimeout(function () {
                                addVideo2b(0);
                            }, 700);
                        }
                    } else {
                        function addVideo3(index) {
                            console.log('index44b', indexDiv);

                            // Tworzymy element <video> z atrybutami
                            const $videoElement = $('<video>').attr({
                                'muted': true,
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
                                                        if (indexDiv < 17 && indexDiv > 13) {
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
                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                        }
                        setTimeout(function () {
                            addVideo3(0);
                        }, 1000);
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
${sentence10}${sentence11}<br>
<div class="sentence1bba">${sentence1bba}</div>
<div class="sentence1bba">${sentence1bbab}</div>
<button class="left-buttonb second-button">+<br></button>
${sentence20}${sentence22}<br>
<div class="sentence1bb1b">${sentence1bb1b}</div>
<div class="sentence1bba2">${sentence1bba2}</div>
<button class="left-buttonbb third-button">+<br></button>
${sentence30}${sentence33}<br>
        <div class="sentence1bb3">${sentence1bb3}</div>
        <div class="sentence1bb1c">${sentence1bb1c}</div>
`);
                        $sentenceDiv.css({
                            'position': 'absolute',
                            'margin-top': '-50px',
                            'text-align': 'center',
                            'z-index': '5'
                        });
                    }
const $buttonb2 = $('<button></button>');
$buttonb2.addClass('run-button3');
$buttonb2.text('Otwórz lekcję w nowym oknie');

// Dodajemy atrybut 'data-index2' z wartością indexDiv do przycisku
$buttonb2.attr('data-index2', indexDiv);
$buttonb2.on('click', function () {
    const $clickedContainer = $container; // Przypisz kliknięty kontener do zmiennej

    // Dodaj tło do nieklikniętych kontenerów
    $('.image-container3').not($clickedContainer).each(function () {
        const $container = $(this);
        if ($container.find('.background-overlay').length === 0) {
            $('<div>')
                .addClass('background-overlay')
                .css({
                    'position': 'absolute',
                    'top': '30',
                    'left': '0',
                    'width': '100%',
                    'height': '100%',
                    'background-color': 'blue',
                    'opacity': '0.35',
                    'z-index': '1000'
                })
                .appendTo($container);
        }
    });

    // Usuń klasę .background-overlay po powrocie na stronę
    $(window).on('pageshow', function () {
        $('.background-overlay').remove();
    });

    const index5b2 = $buttonb2.attr('data-index2');
    const index55b2 = parseInt(index5b2, 10);

    // Znajdź ukryty link i kliknij go
    let lessonLink = null;
    if (index55b2 === 1) {
        lessonLink = document.querySelector('.lesson-link-1');
    }
    if (index55b2 === 2) {
        lessonLink = document.querySelector('.lesson-link-2');
    }
        if (index55b2 === 3) {
        lessonLink = document.querySelector('.lesson-link-3');
    }
    if (index55b2 === 4) {
        lessonLink = document.querySelector('.lesson-link-4');
    }
        if (index55b2 === 5) {
        lessonLink = document.querySelector('.lesson-link-5');
    }
    if (index55b2 === 6) {
        lessonLink = document.querySelector('.lesson-link-6');
    }
        if (index55b2 === 7) {
        lessonLink = document.querySelector('.lesson-link-7');
    }
    if (index55b2 === 8) {
        lessonLink = document.querySelector('.lesson-link-8');
    }
        if (index55b2 === 9) {
        lessonLink = document.querySelector('.lesson-link-9');
    }
    if (index55b2 === 10) {
        lessonLink = document.querySelector('.lesson-link-10');
    }
        if (index55b2 === 11) {
        lessonLink = document.querySelector('.lesson-link-11');
    }
    if (index55b2 === 12) {
        lessonLink = document.querySelector('.lesson-link-12');
    }
            if (index55b2 === 13) {
        lessonLink = document.querySelector('.lesson-link-13');
    }
    if (index55b2 === 14) {
        lessonLink = document.querySelector('.lesson-link-14');
    }
        if (index55b2 === 15) {
        lessonLink = document.querySelector('.lesson-link-15');
    }
    if (index55b2 === 16) {
        lessonLink = document.querySelector('.lesson-link-16');
    }
            if (index55b2 === 17) {
        lessonLink = document.querySelector('.lesson-link-17');
    }
    if (index55b2 === 18) {
        lessonLink = document.querySelector('.lesson-link-18');
    }

    if (lessonLink) {
        lessonLink.click(); // Automatyczne kliknięcie ukrytego linka
    }
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
            const tablica11b = [];

            let tablica13a = [];
            let tablica12b = [];
            let tablica12bu = [];
            let tablica15a = [];
            const fiszkaobject = {
                data: [] // Inicjalizacja tablicy wewnątrz obiektu
            };
            let tablica24 = [];
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


                    let tablica11c = [];

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
                    const activeVideos = [];
                    let initialFiszkaContainer = null; // Zmienna przechowująca kontener fiszki
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
                            activeVideos.push($videoElement[0]);
                            console.log('hej121', activeVideos);

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
                        setTimeout(function () {
                            addVideo2(0);
                        }, 0);
                    } else {
                        function addVideo3(index) {
                            // Upewnij się, że istnieje tablica dla podanego indexDiv w obiekcie currentIndexFiszkaMap

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
                                'src': 'https://www.arbulang.com/img/startsystem.png', // Względna ścieżka do pliku PNG
                                'class': 'overlay-button' // Klasa dla stylów CSS
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
                                                                                    if (indexDiv < 51 && indexDiv > 48) {
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
// Ustal szerokości przycisków
                            const startSystemWidth = 30; // Szerokość startsystem
                            const quickLessonWidth = 95; // Szerokość przycisku "Szybka lekcja"

                            // Obsługa kliknięcia przycisku overlay
                            $buttonb.on('click', function () {
    $('.run-button3').css({
        'margin-top': '65px'
    });
                                // Dodaj kopię wartości indexDiv do tablicy
                                // Przykład nowej wartości indexDiv
                                let nowaWartosc = indexDiv;

                                // Sprawdź, czy wartość już nie istnieje w tablicy (opcjonalnie)
                                if (!tablica11b.includes(nowaWartosc)) {
                                    tablica11b.push(nowaWartosc); // Dodaj nową wartość na końcu tablicy
                                    console.log('Dodano wartość:', nowaWartosc);
                                    console.log('Dodano wartość:', tablica11b);
                                } else {
                                    console.log('Wartość już istnieje w tablicy:', nowaWartosc);
                                }

                                let ostatniElement2 = tablica11b[tablica11b.length - 2];

                                let ostatniElement3 = tablica12b[tablica12b.length - 1];
                                console.log('hej55h', ostatniElement3);
                                console.log('hej55h+', ostatniElement2);
                                setTimeout(() => {
                                    showFiszkiForLesson6(ostatniElement2, ostatniElement3);
                                }, 0);
                                $('video').each(function () {
                                    const video = this;
                                    if (!video.paused) {
                                        video.pause(); // Wstrzymaj wideo
                                        console.log('Wideo zatrzymane:', video);
                                    }
                                });
                                console.log('index44bc', indexDiv);
                                console.log('Button clicked');

                                // Utwórz nowy przycisk "Szybka lekcja"
                                const $loadButton = $('<button>')
                                        .text('Szybka lekcja')
                                        .addClass('slide-button')
                                        .on('click', function () {
                                            // Pętla po wszystkich elementach wideo i zatrzymywanie każdego z nich
                                            $('video').each(function () {
                                                const video = $(this).get(0); // Pobiera element wideo jako obiekt DOM
                                                if (video && !video.paused) {
                                                    video.pause();
                                                }
                                            });
                                        });
                                // Funkcja zatrzymująca wszystkie wideo w activeVideos

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
                                    'bottom': '35px',
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

                                highlightFirstWord(indexDiv);

                                console.log('hej44f', tablica24[tablica24.length - 1]);
                            });


                            function highlightFirstWord(indexDiv) {
    const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);
$(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego
    if (matchingFiszki1.length > 0) {
        const $sentence10 = $container.find('.sentenceBB');
        const $sentence11 = $container.find('.sentence11');
        const $sentence1bba = $container.find('.sentence1bba');
                                

        if ($sentence10.length > 0 || $sentence11.length > 0 || $sentence1bba.length > 0) {
            let sentenceText = $sentence10.html();
            let sentenceText2 = $sentence1bba.html();
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = sentenceText;
            let words = tempDiv.innerText.split(' ');

            if (words.length > 0) {
                let firstWord = words[0];
                let secondWord = words[1] || '';
                let thirdWord = words[2] || '';
                let forthWord = words[3] || '';
                let fifthWord = words[4] || '';
                let sixthWord = words[5] || '';

                let highlightedSpan = `<span class="highlighted">${firstWord}</span>`;
                let highlightedSpan2 = `<span class="highlighted" style="display:none;">${secondWord}</span>`;
                let highlightedSpan3 = `<span class="highlighted" style="display:none;">${thirdWord}</span>`;
                let highlightedSpan4 = `<span class="highlighted" style="display:none;">${forthWord}</span>`;
                let highlightedSpan5 = `<span class="highlighted" style="display:none;">${fifthWord}</span>`;
                let highlightedSpan6 = `<span class="highlighted" style="display:none;">${sixthWord}</span>`;

                let button1 = `<button class="prev-button" id="prev-button">&lt;</button>`;
                let button2 = `<button class="next-button" id="next-button">&gt;</button>`;

                $sentence10.html(`
                    ${button1} 
                    <span class="word-span" style="cursor: pointer;">${highlightedSpan}</span> 
                    <span class="word-span" style="cursor: pointer;">${secondWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${thirdWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${forthWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${fifthWord}</span> 
                    <span class="word-span" style="cursor: pointer;">${sixthWord}</span>
                    ${button2}
                    <br>
                    <div class="sentence1bba">${sentenceText2}</div>
                `);
$("<style>")
  .prop("type", "text/css")
  .html(".word-span:hover { background-color: #2ecc71; }")
  .appendTo("head");

                        let currentWordIndex = 0; // Indeks słowa, które ma być wyświetlane

// Funkcja obsługująca kliknięcia na słowa, przyjmująca clickedIndex
function handleWordClick(clickedIndex, indexDiv, matchingFiszki1) {
    console.log("Przekazano clickedIndex:", clickedIndex);

    // Podświetlenie klikniętego słowa na stałe
    $('.word-span').removeClass('highlighted');
    $('.word-span').eq(clickedIndex).addClass('highlighted'); // Podświetlenie według clickedIndex

    // Zaktualizuj currentHighlightIndex na clickedIndex
    currentHighlightIndex = clickedIndex;
    console.log("Aktualny indeks podświetlenia:", currentHighlightIndex);

    // Wywołaj funkcję wyświetlania fiszek
    showFiszkiForLesson5(indexDiv, fiszki, clickedIndex, matchingFiszki1);

}
                        const $wordContainer = $('<div>').attr('id', 'wordDisplay').css({
                        }).appendTo($container);
                        let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55', ostatniElement2);
    // Sprawdź, czy element 'wordDisplay' już istnieje
// Sprawdź, czy element 'wordDisplay' już istnieje w odpowiednim kontenerze
if (ostatniElement2) {
    // Znajdź kontener na podstawie data-lesson
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // Jeśli 'wordDisplay' istnieje, wykonaj coś z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay:', $wordContainer);
        
        // Tutaj możesz wykonać akcje na $wordContainer, np. przesunięcie
        $wordContainer.css({
            'right': '0px', // Przesuń w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
} else {
    console.log('Brak ostatniego elementu w tablica11b');
}

// Obsługa kliknięcia na indexDiv
$('.indexDiv').on('click', function () {
    const indexDiv = $(this).data('lesson'); // Pobierz atrybut data-lesson dla klikniętego indexDiv
    handleIndexDivClick(indexDiv); // Wywołaj funkcję przesuwania 'wordDisplay'
});
                        const $currentWordDisplay = $('<span>').appendTo($wordContainer);
    function updateWordDisplay2(currentWordIndex) {
        let fiszka = matchingFiszki1[currentFiszkaIndex];
        console.log('hej11', fiszka);
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
// Deklaracja clickedIndex jako zmiennej globalnej
let clickedIndex;

// Dodanie zdarzenia click
$(document).on('click', '.word-span', function() {
    const clickedWord = $(this).text();
    console.log("Kliknięto:", clickedWord);

    // Ustalanie clickedIndex dla klikniętego słowa
    clickedIndex = words.indexOf(clickedWord);
    console.log('hej341', clickedIndex);
    updateHighlight($sentence10, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    // Wywołanie handleWordClick z clickedIndex
    handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
});
function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ładuje się');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);

if (currentFiszkaIndex >= 0 && currentFiszkaIndex < matchingFiszki1.length) {

        // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
        const fiszka = matchingFiszki1[currentFiszkaIndex];
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
        

    }
    return fiszkaBlock;
}

let currentHighlightIndex = 0; // Indeks podświetlenia

let displayWordsIndex = 0; // Indeks do wyświetlania słów (można dostosować w zależności od wymagań)


// Obsługa kliknięcia na "next"
function handleNextClick(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // Sprawdź, czy możemy zwiększyć indeks podświetlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex++;

        }
function handleNextClick2(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    // Sprawdź, czy możemy zwiększyć indeks podświetlenia
        console.log('hej55d', currentFiszkaIndex);
        updateHighlight(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                currentFiszkaIndex--;

        }


function updateHighlight(indexDiv, $sentence10, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    const words = [firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord];

    // Generuj podświetlone słowa
    const highlightedWords = words.map((word, i) => {
        return i === index
            ? `<span class="highlighted word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`
            : `<span class="word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`;
    });

    // Zaktualizuj HTML dla $sentence10
    $sentence10.html(`
        <button class="prev-button" id="prev-button">&lt;</button>
        ${highlightedWords.join(' ')}
        <button class="next-button" id="next-button">&gt;</button>
    `);

    // Obsługa zdarzeń kliknięcia słów
    $sentence10.find('.word-span').off('click').on('click', function () {
        const clickedIndex = $(this).data('index');


        // Wywołanie funkcji obsługi kliknięcia
        handleWordClick(clickedIndex, indexDiv, matchingFiszki1);

        // Ponowne zaktualizowanie podświetlenia
        updateHighlight($sentence10, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
    });
}


                                                
                // Funkcja displayWords przyjmuje teraz currentWordIndex
                function displayWords(nowy, indexDiv) {
                                console.log('index66', indexDiv);
                    console.log('hej4433', currentWordIndex);
       let currentFiszkaIndex = 0;

currentFiszkaIndex = nowy;

                        const $prevButton = $('<button>')
                            .text('<')
                            .attr('id', 'prev-button') 
                            .addClass('prev-button')
                            .css({
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
    console.log('Aktualny index fiszki:', currentFiszkaIndex);
    console.log('Dostępne fiszki:', matchingFiszki1.length);

    if (currentFiszkaIndex <= matchingFiszki1.length - 1) {
        currentFiszkaIndex--; // Zwiększ indeks fiszki
        $(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego
                        let ostatniElement2 = tablica11b[tablica11b.length - 2];
console.log('hej55', ostatniElement2);
    // Sprawdź, czy element 'wordDisplay' już istnieje
// Sprawdź, czy element 'wordDisplay' już istnieje w odpowiednim kontenerze
if (ostatniElement2) {
    // Znajdź kontener na podstawie data-lesson
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // Jeśli 'wordDisplay' istnieje, wykonaj coś z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay:', $wordContainer);
        
        // Tutaj możesz wykonać akcje na $wordContainer, np. przesunięcie
        $wordContainer.css({
            'right': '0px', // Przesuń w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
} else {
    console.log('Brak ostatniego elementu w tablica11b');
}
                                                        tablica12b.push(currentFiszkaIndex);
                                                        console.log('hej68cx', fiszkaobject);
let indeks5; // Zainicjalizuj zmienną przed warunkami
if (currentFiszkaIndex < 4) {
    indeks5 = tablica12b[tablica12b.length - 2];
} else if (currentFiszkaIndex === 4) {
    indeks5 = 5;
}
                                                        console.log('hej555', indeks5);
                                                        handleNextClick2(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
                                                        wybierzRodzaj2b('all', indeks5, matchingFiszki1, indexDiv);
                                                        updateWordDisplay(currentWordIndex, indexDiv);
                                                        
console.log("indexDiv2", tablica12b);
        console.log('hej68c', currentFiszkaIndex);
    } else {
        console.log('Koniec fiszek!'); // Informacja o końcu fiszek
    }
                        });
                        if (currentFiszkaIndex === 0) {
                          tablica12b.push(0);  
                        }

                    console.log('hej26', tablica12b);
$nextButton.on('click', function () {
                                                    console.log('Aktualny index fiszki:', indexDiv);
                                                    console.log('Dostępne fiszki:', matchingFiszki1);
                                                                                                            
                                                    console.log('hej303b', fiszkaobject);
                                                    if (currentFiszkaIndex <= matchingFiszki1.length - 1) {
                                                        currentFiszkaIndex++; // Zwiększ indeks fiszki
$(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 102); // Podniesienie z-index tylko dla aktywnego

                                    console.log('Dodano wartość33:', tablica11b);
                                                                                                            // Sprawdź, czy `indexDiv` już istnieje w `fiszkaobject.data`
                                                    const existingIndex = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex !== -1) {
                                                        // Jeśli istnieje, zastąp wartość
                                                        fiszkaobject.data[existingIndex] = [indexDiv, currentFiszkaIndex];
                                                    } else {
                                                        // Jeśli nie istnieje, dodaj nową tablicę
                                                        fiszkaobject.data.push([indexDiv, currentFiszkaIndex]);
                                                    }

                                                    // Sprawdź, czy `indexDiv` już istnieje w `fiszkaobject.data`
                                                    const existingIndex2 = fiszkaobject.data.findIndex(
                                                            (entry) => entry[0] === indexDiv
                                                    );

                                                    if (existingIndex2 !== -1) {
                                                        // Jeśli istnieje, zaktualizuj `currentFiszkaIndex`
                                                        fiszkaobject.data[existingIndex2][1] = currentFiszkaIndex;
                                                        console.log('hej303bb', currentFiszkaIndex);

                                                        console.log('hej303bbx', fiszkaobject.data[existingIndex2][1]);
                                                    } else {
                                                        // Jeśli nie istnieje, dodaj nową tablicę
                                                        fiszkaobject.data.push([indexDiv, currentFiszkaIndex]);
                                                    }
                                                    tablica12b.push(currentFiszkaIndex);
                                setTimeout(() => {
                                                        wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki1, indexDiv);
                                }, 800);

                                                                                                                console.log('hej68cx', currentFiszkaIndex);
                                                        handleNextClick(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);

                                                        updateWordDisplay(currentWordIndex, indexDiv);
                                                        // Wywołaj funkcję, przekazując zaktualizowany indeks
                                                        console.log("indexDiv2", tablica12b);
                                                    } else {
                                                        console.log('Koniec fiszek!'); // Informacja o końcu fiszek
                                                    }
                                                });

    function updateWordDisplay(currentWordIndex) {
        const fiszka = matchingFiszki1[currentFiszkaIndex];
        console.log('hej11d', fiszka);
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
                                                                                            console.log('hej444b', currentFiszkaIndex);
                                                                                            setTimeout(() => {

                                                                                        if (currentFiszkaIndex === 0) {
console.log("indexDiv2x", currentFiszkaIndex);
                                                                                            let indeks55x; // Zainicjalizuj zmienną przed warunkami
if (currentFiszkaIndex === 0 || currentFiszkaIndex > 0) {
    indeks55x = currentFiszkaIndex;

                                                    wybierzRodzaj2c('all', indeks55x, matchingFiszki1, indexDiv);
                                                                            updateWordDisplay(currentWordIndex);
                                                                            }
                                                }
                                                                                }, 300);
                                                    updateWordDisplay(currentWordIndex);
                                                // Obsługa kliknięcia na `#wordDisplay`
$wordContainer.on('click', function () {
                const $container = $(`.image-container4[data-lesson="${indexDiv}"]`);
$(`.image-container4`).css('z-index', 100); // Reset z-index dla wszystkich
$container.css('z-index', 104); // Podniesienie z-index tylko dla aktywnego
                            let ostatniElement2 = tablica11b[tablica11b.length - 1];
console.log('hej55aa', ostatniElement2);
wybierzRodzaj2c('all', currentFiszkaIndex, matchingFiszki1, indexDiv);
    // Sprawdź, czy element 'wordDisplay' już istnieje
// Sprawdź, czy element 'wordDisplay' już istnieje w odpowiednim kontenerze
if (ostatniElement2 && indexDiv !== ostatniElement2) {
    // Znajdź kontener na podstawie data-lesson
    const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);
    
    // Szukamy 'wordDisplay' w tym kontenerze
    const $wordContainer = $container.find('#wordDisplay');
    
    // Jeśli 'wordDisplay' istnieje, wykonaj coś z tym elementem
    if ($wordContainer.length > 0) {
        console.log('Znaleziono wordDisplay5:', $wordContainer);
        
        // Tutaj możesz wykonać akcje na $wordContainer, np. przesunięcie
        $wordContainer.css({
            'right': '0px', // Przesuń w lewo
            'transition': 'right 0.5s ease' // Animacja
        });
    } else {
        console.log('wordDisplay nie znaleziono w kontenerze');
    }
}
});


// Wywołaj funkcję z podaną kategorią
function wybierzRodzaj2(category, currentFiszkaIndex, matchingFiszki1, indexDiv) {

    console.log("Wybrany rodzaj słownictwa: ", currentFiszkaIndex);

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
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
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
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('Wyświetlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategorią "${category}".`);
    }
}

// Wywołaj funkcję z podaną kategorią
function wybierzRodzaj2b(category, indeks5, matchingFiszki1, indexDiv) {

    console.log("Wybrany rodzaj słownictwa: ", currentFiszkaIndex);

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
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
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
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('Wyświetlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki1);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategorią "${category}".`);
    }
}
function wybierzRodzaj2c(category, indeks5, matchingFiszki1, indexDiv) {

    console.log("Wybrany rodzaj słownictwa: ", currentFiszkaIndex);

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
                console.log('hej134b', matchingLessons);
            }
        }
    } else {
        // Iteracja przez fiszki
        for (const fiszka of fiszki) {
            console.log(`Przetwarzanie fiszki: ${JSON.stringify(fiszka)}`);
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
    
    console.log('hej222', matchingLessons);

    if (matchingLessons.length > 0) {
        const nextThreeLessons = matchingLessons.slice(0, 1);
        console.log('Wyświetlanie kolejnych trzech lekcji:');
        nextThreeLessons.forEach(lessonId => {
            showFiszkiForLesson5c(indexDiv, fiszki, indeks5, matchingFiszki1);
            console.log('hej68ll', currentFiszkaIndex);
        });
    } else {
        console.log(`Nie znaleziono fiszek z kategorią "${category}".`);
    }
}

function showFiszkiForLesson5(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ładuje się');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex > 0 && currentFiszkaIndex < matchingFiszki1.length) {
        if (matchingFiszki1.length > 0) {
            let id = matchingFiszki1[currentFiszkaIndex - 1].id;
            console.log('hej2x', id);
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
const className = `fiszka-${id}${parametr ? ',' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;
console.log('Usuwam fiszkę o klasie5:', className);
// Znalezienie i usunięcie diva z klasą `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa cały div z DOM
}
                // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ładowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
} else if (currentFiszkaIndex === 0) {
    if (matchingFiszki1.length >= 0) {
                    // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ładowana fiszka5:', currentFiszkaIndex);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
}
}
}

function showFiszkiForLesson5b(indexDiv, fiszki, indeks5, matchingFiszki1) {
    console.log('Ładuje się');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

    if (currentFiszkaIndex >= 0 && currentFiszkaIndex <= matchingFiszki1.length) {
        if (matchingFiszki1.length >= 0) {
            let id = matchingFiszki1[currentFiszkaIndex + 1].id;
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
const className = `fiszka-${id}${parametr ? '-' + parametr : ''}`;
const selector = `.${className.replace(/,/g, '\\,')}`;
console.log('Usuwam fiszkę o klasie5:', className);
// Znalezienie i usunięcie diva z klasą `className`
let $divToRemove = $(selector);
if ($divToRemove.length) {  // Sprawdza, czy element istnieje
    $divToRemove.remove();   // Usuwa cały div z DOM
}
                // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ładowana fiszka:', selector);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
    }
}
}
function showFiszkiForLesson5c(indexDiv, fiszki, currentFiszkaIndex, matchingFiszki1) {
    console.log('Ładuje się');
    console.log('Obecny indeks fiszki:', currentFiszkaIndex);
        

if (currentFiszkaIndex === 0) {
    if (matchingFiszki1.length >= 0) {
                    // Pobierz jedną fiszkę na podstawie currentFiszkaIndex
            const fiszka = matchingFiszki1[currentFiszkaIndex];
            console.log('Ładowana fiszka5:', currentFiszkaIndex);
            const fiszkaBlock = generateFiszkaBlock2(fiszka, indexDiv);
            return fiszkaBlock;
}
}
}
        }

                displayWords(currentWordIndex, indexDiv); // Wywołanie z indeksem
                
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
                    function showFiszkiForLesson6(ostatniElement2, ostatniElement3) {

                        console.log('hej11z', ostatniElement2);
                        if (ostatniElement3 === undefined) {
                            ostatniElement3 = 0;
                        }
                        const $container = $(`.image-container4[data-lesson="${ostatniElement2}"]`);

                        console.log('ostatniElement2:', ostatniElement2);
                        console.log('ostatniElement3:', ostatniElement3);

                        console.log('hej22x', tablica12b);
                        console.log('hej64xxh', ostatniElement3);
                        if (matchingFiszki1.length > 0) {
                            tablica15a.push(matchingFiszki1);

                            console.log('hej64xx', tablica15a);
                            let ostatniElement4 = tablica15a[tablica15a.length - 2];
                            console.log('hej64xx', ostatniElement4);
                            if (ostatniElement3 >= 0 && ostatniElement3 < ostatniElement4.length) {

                                let id = ostatniElement4[ostatniElement3].id;
                                console.log('hej2dd', id);
                                let parametr = '';

                                // Sprawdź, czy id jest tablicą
                                if (Array.isArray(id)) {
                                    // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
                                    id = id.slice(0, 3).join(',');

                                    // Obsługa ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
                                    if (id.length > 3) {
                                        parametr = matchingFiszki1[ostatniElement3].id[3]; // Pobierz czwarty element z tablicy
                                    }
                                }
                                console.log('hej44', $container);

                                const className = `fiszka-${id}${parametr ? ',' + parametr : ''}`;
                                const selector = `.${className.replace(/,/g, '\\,')}`;
                                tablica13a.push(selector);
                                console.log('Generated selector:', tablica13a);
                                let selector2 = tablica13a[tablica13a.length - 1];
                                setTimeout(() => {
                                    // Znajdź element wewnątrz kontenera
                                    const $divToRemove = $container.find(selector2);
                                    console.log('Element to remove:', $divToRemove);

                                    if ($divToRemove.length) {
                                        $divToRemove.remove(); // Usunięcie elementu
                                        console.log('Removed:', $divToRemove);
                                    } else {
                                        console.log('Element not found within container:', selector);
                                    }
                                }, 500); // Opóźnienie

                            }
                            console.log('hej44d', $container);
                        }
                        console.log('Container found:', $container.length > 0 ? 'Yes' : 'No');
                        console.log('Container content:', $container.html());
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
                            przekazArgument0(tablica3[2], index55, true, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
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
$buttonb2.text('Otwórz lekcję w nowym oknie');

// Dodajemy atrybut 'data-index2' z wartością indexDiv do przycisku
$buttonb2.attr('data-index2', indexDiv);
$buttonb2.on('click', function () {
    const $clickedContainer = $container; // Przypisz kliknięty kontener do zmiennej

    // Dodaj tło do nieklikniętych kontenerów
    $('.image-container3').not($clickedContainer).each(function () {
        const $container = $(this);
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
                    'z-index': '1000'
                })
                .appendTo($container);
        }
    });

    // Usuń klasę .background-overlay po powrocie na stronę
    $(window).on('pageshow', function () {
        $('.background-overlay').remove();
    });

    const index5b2 = $buttonb2.attr('data-index2');
    const index55b2 = parseInt(index5b2, 10);

    // Znajdź ukryty link i kliknij go
    let lessonLink = null;
    if (index55b2 === 1) {
        lessonLink = document.querySelector('.lesson-link-1b');
    }
    if (index55b2 === 2) {
        lessonLink = document.querySelector('.lesson-link-2b');
    }
        if (index55b2 === 3) {
        lessonLink = document.querySelector('.lesson-link-3b');
    }
        if (index55b2 === 4) {
        lessonLink = document.querySelector('.lesson-link-4b');
    }
    if (index55b2 === 5) {
        lessonLink = document.querySelector('.lesson-link-5b');
    }
        if (index55b2 === 6) {
        lessonLink = document.querySelector('.lesson-link-6b');
    }
        if (index55b2 === 7) {
        lessonLink = document.querySelector('.lesson-link-7b');
    }
        if (index55b2 === 8) {
        lessonLink = document.querySelector('.lesson-link-8b');
    }
        if (index55b2 === 9) {
        lessonLink = document.querySelector('.lesson-link-9b');
    }
        if (index55b2 === 10) {
        lessonLink = document.querySelector('.lesson-link-10b');
    }
            if (index55b2 === 11) {
        lessonLink = document.querySelector('.lesson-link-11b');
    }
        if (index55b2 === 12) {
        lessonLink = document.querySelector('.lesson-link-12b');
    }
        if (index55b2 === 13) {
        lessonLink = document.querySelector('.lesson-link-13b');
    }
    if (index55b2 === 14) {
        lessonLink = document.querySelector('.lesson-link-14b');
    }
        if (index55b2 === 15) {
        lessonLink = document.querySelector('.lesson-link-15b');
    }
        if (index55b2 === 16) {
        lessonLink = document.querySelector('.lesson-link-16b');
    }
    if (index55b2 === 17) {
        lessonLink = document.querySelector('.lesson-link-17b');
    }
        if (index55b2 === 18) {
        lessonLink = document.querySelector('.lesson-link-18b');
    }
        if (index55b2 === 19) {
        lessonLink = document.querySelector('.lesson-link-19b');
    }
        if (index55b2 === 20) {
        lessonLink = document.querySelector('.lesson-link-20b');
    }
        if (index55b2 === 21) {
        lessonLink = document.querySelector('.lesson-link-21');
    }
        if (index55b2 === 22) {
        lessonLink = document.querySelector('.lesson-link-22b');
    }
            if (index55b2 === 23) {
        lessonLink = document.querySelector('.lesson-link-23b');
    }
        if (index55b2 === 24) {
        lessonLink = document.querySelector('.lesson-link-24b');
    }
    if (lessonLink) {
        lessonLink.click(); // Automatyczne kliknięcie ukrytego linka
    }
});
                    $buttonb2.css({
                        'position': 'absolute', // Przykładowa wartość odstępu od lewej krawędzi
                        'margin-bottom': '-105px',
                        'font-size': '10px',
                        'height': '25px',
                        'color': 'blue',
                        'background-color': 'white',
                        'width': '170px',
                        'z-index': '999999'
                    });
                    $container.append($buttonb2);
                    // Dodanie diva z zdaniem do kontenera
                    $container.append($sentenceDiv);
                    $container.append($sentenceDivB);
                    tablica15.push(srcWords);
                    console.log('hej6', tablica15);
                    $('.image-container4').on('click', function () {
    // Zresetuj z-index dla wszystkich kontenerów .image-container4
    $('.image-container4').css('z-index', 1); 

    // Podnieś z-index dla klikniętego kontenera
    $(this).css('z-index', 1000); 
});
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
                                'src': 'https://www.arbulang.com/img/startsystem.png', // Względna ścieżka do pliku PNG
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
                            przekazArgument0(tablica3[2], index55, true, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
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
if (window.matchMedia("(min-width: 999px)").matches) {
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
                } else if (window.matchMedia("(max-width: 999px)").matches) {
                                    // Jeśli warunek jest spełniony i poprzedni timeout nie istnieje
                if (indexes.length >= 10 && !hasPreviousIndexesBeenSet) {
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
            ustawTryb('fiszki');
            przekazArgument0(tablica3[2], '', false, 'fiszki', true, true, tablica3[1], tablica3[4], false, '', '');


        </script>

        <script id="demoScript" data-category=""></script>
    </body>
</html>

        story: "<b><u>As</b></u>teroida, którą wykryliśmy prognozuje <b><u>nam</b></u> pewne trendy psychologi <b><u>as</b></u>trologicznej",
        
                story: "<u><b>Tu</u></b> razem pracujemy przy, żniwach.. Jest <u><b>ge</u></b>nialnie... Kombajnista ustwia h<u><b>eder</u></b> do koszenia zboża",
                
                
                
                if (newIndex === 0 && !buttonindex && !isSearching) {
                        console.log('hej33b', buttonindex);
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo1(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    przekazArgument0(tablica7[0], tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', indexDivRange);
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niższy
                                });

const video = document.createElement('video');
video.setAttribute('autoplay', '');
video.setAttribute('loop', '');
video.muted = true; // ← to jest kluczowe!
video.playsInline = true; // ← opcjonalne, ale przydatne na mobile

const source = document.createElement('source');
source.src = srcWords[index];
source.type = 'video/mp4';

video.appendChild(source);
const $videoElement = $(video);
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
$videoElement.attr('muted', true); // atrybut, nie .prop
                                // Obsługa błędu ładowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsługi zdarzenia loadedmetadata
$videoElement.hide(); // Ukrycie wideo przed załadowaniem
function ensureVideoStarts($videoElement, index) {
    let retryCount = 0;
    const maxRetries = 20;
    let started = false;

    function tryStart() {
        if (started) return;
        const el = $videoElement[0];
        const duration = el.duration;

        if (el.readyState < 3 || isNaN(duration) || duration === Infinity || duration === 0) {
            if (retryCount++ < maxRetries) {
                console.warn(`Wideo ${index} niegotowe (readyState=${el.readyState}), próba ${retryCount}`);
                return setTimeout(tryStart, 300);
            } else {
                console.error(`Wideo ${index} nie wystartowało`);
                return;
            }
        }

        started = true;
        $videoElement.show();
        videoDurations[index] = duration;

        $videoElement.off('timeupdate').on('timeupdate', function () {
            let adjustedProgress = 0;
            for (let i = 0; i < index; i++) {
                adjustedProgress += (videoDurations[i] / totalDuration) * 100;
            }
            adjustedProgress += (this.currentTime / duration) * (videoDurations[index] / totalDuration) * 100;
            updateProgress(adjustedProgress);

            if (!currentIndexValue.includes(index)) {
                currentIndexValue.push(index);
                if ([0, 1, 2].includes(currentIndexValue[0])) {
                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                }
            }

            if (duration - this.currentTime < 1) {
                addVideo1(index + 1);
                updateProgress(0);
            }
        });

        el.play().then(() => {
            console.log(`Wideo ${index} odtworzone`);
        }).catch(error => {
            console.warn(`Autoplay nie działa (index ${index}):`, error);
        });
    }

    // Jeśli nie zadziała 'canplaythrough', dodaj fallback na loadeddata
    $videoElement.one('canplaythrough loadeddata', tryStart);

    try {
        $videoElement[0].load();
    } catch (e) {
        console.warn('Błąd ładowania:', e);
    }
}

console.log('wykonuje się655');
                                addScenes(index);
                                // Dodaj div z wideo do tła kontenera
$vidDiv.appendTo($container);
window.addEventListener('pageshow', () => {
  const video = document.getElementById('myVideo');
  if (video) {
    video.play().catch((error) => {
      console.error('Error playing video:', error);
    });
  }
});
// Upewnij się, że wideo jest fizycznie w DOM, zanim zaczniesz ładowanie
requestAnimationFrame(() => {
    setTimeout(() => {
        ensureVideoStarts($videoElement, index);
    }, 200); // małe opóźnienie buforujące
});
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

                            }
                            setTimeout(function () {
                                addVideo1(0);
                            }, 200);
                            
                }
                
                            
            const tablica10 = [];
                        let sentence1bVisible = false;
            let sentence1baVisible = false;
            let sentence1b3aVisible = false;
                        let tablica12ab = [];
            let tablica12ad = [];
            let tablica12abc = [];
function showCombinedSentenceForLesson(selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
                console.log('hej55bbv', matchingIndexes);
                            let tablica60 = [];
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej450b', tablica60);
                console.log('hej444', newIndex);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';
                if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {

                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    const srcWord1d = pobierzSrcWordDlaLekcji4(lessonIdToShow1, fiszki);
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                    const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                    const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki);
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
                    function pobierzSrcWordDlaLekcji4(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.srcWordimage : null;
                    }
                    console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);


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
                    function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b) {
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
                            console.log('matchingFiszki1:', fiszki);
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

                        }, 0);

                    }
                    // Zmienna do liczenia wystąpień indexToCheck
                                        let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                    let sentence11 = "";
                    let sentence1bba = "";
                    let sentence1bbab = "";
                    function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        $(document).ready(function () {

                            console.log('hejkh', lesson1PartLength);
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
                                        console.log('matchingIndexes1000:', matchingIndexes);
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
                                            if (matchingLessons5b.includes(indexToCheck2) && matchingIndexes.length === 0) {
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
                                            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                            if (matchingLessons5b.includes(indexToCheck2) && matchingIndexes.length === 0) {
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
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bbab">${sentence1bbab}</div>
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
    'czarny humor': '#ffc107',  // Żółty
    'zwiazki': '#fd7e14',      // Pomarańczowy
    'all': '#800080'     
};

// Zakres pokolorowanych przycisków
const startRange2 = 1;
const endRange2 = 100;

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
let previousTrojkiJSON = '';
const tablica60 = [];
console.log('hej340', tablica60);
function updateButtonColors() {
    tablica60.length = 0; // wyczyść tablicę

    const color = colorMapping[selectedCategory] || '#800080';

    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataNameAttr = block.getAttribute('data-name');
        const dataName = parseInt(dataNameAttr, 10);

        const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');

        // Jeśli brak data-name albo nie jest liczbą – pomiń
        if (isNaN(dataName)) return;

        // dla "all" – dodaj wszystkie i koloruj wszystkie
        if (selectedCategory === 'wszystkie') {
            tablica60.push(dataName);
            if (button) {
                button.style.backgroundColor = color;
                button.style.color = 'white';
            }
        }
else if (dataName >= startRange2 && dataName <= endRange2) {
    tablica60.push(dataName);
    if (button) {
        if (dataName <= 6) {
            button.style.backgroundColor = color;
            button.style.color = 'white';
        } else {
            // pozostałe przyciski w zakresie 1–100 – bez kolorowania
            button.style.backgroundColor = '';
            button.style.color = '';
        }
    }
}
    });
    
    // PodziaĹ na trĂłjki
    const trojki = [];
    for (let i = 0; i < tablica60.length; i += 3) {
        trojki.push(tablica60.slice(i, i + 3));
    }

    const currentTrojkiJSON = JSON.stringify(trojki);
    if (currentTrojkiJSON !== previousTrojkiJSON) {
        previousTrojkiJSON = currentTrojkiJSON;

        console.log('Nowe trĂłjki:', trojki);

        // UsuĹ stare linki
        $('.hidden-link').remove();
        console.log('UsuniÄto stare linki');

        // Wygeneruj nowe linki (dla pierwszych dwĂłch trĂłjek, jeĹli istniejÄ)
        const firstTrojka = trojki[0] || [];
        const secondTrojka = trojki[1] || [];
        const thirdTrojka = trojki[2] || [];
        const cztery = trojki[3] || [];
        const piec = trojki[4] || [];
        const szesc = trojki[5] || [];
        const siedem = trojki[6] || [];
        const osiem = trojki[7] || [];
        const dziewiec = trojki[8] || [];
        const dziesiec = trojki[9] || [];
        const jedenascie = trojki[10] || [];
        const dwanascie = trojki[11] || [];
        const trzynascie = trojki[12] || [];
        const czternascie = trojki[13] || [];
        const pietnascie = trojki[14] || [];
        const szstnascie = trojki[15] || [];
        const siedemnascie = trojki[16] || [];
        const osiemnascie = trojki[17] || [];
                const dziewietnascie = trojki[18] || [];
        const link1 = `demo1angielski.html?category=${selectedCategory}&data=${firstTrojka.join(',')}`;
        const link2 = `demo1angielski.html?category=${selectedCategory}&data=${secondTrojka.join(',')}`;
        const link3 = `demo1angielski.html?category=${selectedCategory}&data=${thirdTrojka.join(',')}`;
        const link4 = `demo1angielski.html?category=${selectedCategory}&data=${cztery.join(',')}`;
        const link5 = `demo1angielski.html?category=${selectedCategory}&data=${piec.join(',')}`;
        const link6 = `demo1angielski.html?category=${selectedCategory}&data=${szesc.join(',')}`;
        const link7 = `demo1angielski.html?category=${selectedCategory}&data=${siedem.join(',')}`;
        const link8 = `demo1angielski.html?category=${selectedCategory}&data=${osiem.join(',')}`;
        const link9 = `demo1angielski.html?category=${selectedCategory}&data=${dziewiec.join(',')}`;
        const link10 = `demo1angielski.html?category=${selectedCategory}&data=${dziesiec.join(',')}`;
        const link11 = `demo1angielski.html?category=${selectedCategory}&data=${jedenascie.join(',')}`;
        const link12 = `demo1angielski.html?category=${selectedCategory}&data=${dwanascie.join(',')}`;
        const link13 = `demo1angielski.html?category=${selectedCategory}&data=${trzynascie.join(',')}`;
        const link14 = `demo1angielski.html?category=${selectedCategory}&data=${czternascie.join(',')}`;
        const link15 = `demo1angielski.html?category=${selectedCategory}&data=${pietnascie.join(',')}`;
        const link16 = `demo1angielski.html?category=${selectedCategory}&data=${szstnascie.join(',')}`;
        const link17 = `demo1angielski.html?category=${selectedCategory}&data=${siedemnascie.join(',')}`;
        const link18 = `demo1angielski.html?category=${selectedCategory}&data=${osiemnascie.join(',')}`;
        const link19 = `demo1angielski.html?category=${selectedCategory}&data=${dziewietnascie.join(',')}`;

        const linksHTML = `
            <a href="${link1}" class="hidden-link lesson-link-1" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link2}" class="hidden-link lesson-link-2" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link3}" class="hidden-link lesson-link-3" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link4}" class="hidden-link lesson-link-4" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link5}" class="hidden-link lesson-link-5" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link6}" class="hidden-link lesson-link-6" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link7}" class="hidden-link lesson-link-7" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link8}" class="hidden-link lesson-link-8" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link9}" class="hidden-link lesson-link-9" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link10}" class="hidden-link lesson-link-10" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link11}" class="hidden-link lesson-link-11" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link12}" class="hidden-link lesson-link-12" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link13}" class="hidden-link lesson-link-13" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link14}" class="hidden-link lesson-link-14" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link15}" class="hidden-link lesson-link-15" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                    <a href="${link16}" class="hidden-link lesson-link-16" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 1</a>
            <a href="${link17}" class="hidden-link lesson-link-17" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 2</a>
        <a href="${link18}" class="hidden-link lesson-link-18" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
                <a href="${link19}" class="hidden-link lesson-link-19" target="_blank" rel="noopener noreferrer">PrzejdĹş do lekcji 3</a>
        `;

        $('body').append(linksHTML);
        console.log('Dodano linki:', link1, link2);
    }
}
    setTimeout(() => {
// Uruchom na poczÄtku
updateButtonColors();
}, 0); // opóźnienie np. 100ms

                                $('.sentence1bba').html('');
                                                                $('.sentence1bbab').html('');
$sentenceDiv.on('click', '.left-button', function () {
    const $block = $(this).closest('.sentence-block'); // tylko ten kontener
    const $sentence1bba = $block.find('.sentence1bba');
    const $sentence1bbab = $block.find('.sentence1bbab');

if ($sentence1bba.html().trim() === '') {
    $sentence1bba.html(sentence1bba).css({
        display: 'block',
        marginBottom: '20px'
    });
}

if ($sentence1bbab.html().trim() === '') {
    $sentence1bbab.html(sentence1bbab).css({
        display: 'block',
        marginBottom: '20px'
    });
}

    // Ukryj pozostałe kontenery (opcjonalnie)
    $('.sentence-block').not($block).find('.sentence1bba, .sentence1bbab').hide();
});
                            }, 0);
                        });
                        console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                    }


                    let sentence1bb1b = "";
                    let sentence1bba2 = "";
                    function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {

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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
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
                                        const indexToCheck2 = jj + lesson2PartLength + 1;
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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
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
                                // Kliknięcie w kategorię
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
    <div class="sentence1bbab">${sentence1bbab}</div>
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
    const $block = $(this).closest('.sentence-block'); // tylko ten kontener
    const $sentence1bb1b = $block.find('.sentence1bb1b');
    const $sentence1bba2 = $block.find('.sentence1bba2');

if ($sentence1bb1b.html().trim() === '') {
    $sentence1bb1b.html(sentence1bb1b).css({
        display: 'block',
        marginBottom: '20px'
    });
}

if ($sentence1bba2.html().trim() === '') {
    $sentence1bba2.html(sentence1bba2).css({
        display: 'block',
        marginBottom: '20px'
    });
}

    // Ukryj pozostałe kontenery (opcjonalnie)
    $('.sentence-block').not($block).find('.sentence1bb1b, .sentence1bba2').hide();
});
                                $sentence1bb1a.html('');
                                $sentence1bb1a.empty();
                            }, 0);
                        });
                    }







                    let sentence1bb3 = "";
                    let sentence1bb1c = "";

                    function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
                        $(document).ready(function () {
setTimeout(() => {
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
                                        console.log('sentencePart5:', sentencePart);
                                        const indexToCheck = l + lesson3PartLength + 1;
                                        const indexToCheck2 = l + lesson3PartLength + 1;
                                    console.log('indexToCheck:', indexToCheck);
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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart = spanElement.outerHTML;
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
                                console.log('fiszka2:', fiszka);
                                if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                    console.log('fiszka.sentence2 is undefined or empty');
                                    continue;
                                }
                                for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                    let sentencePart3 = fiszka.sentence2[lmn];
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
                                        if (matchingLessons5b.includes(indexToCheck2) && matchingLessons5b !== null) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart3;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart3 = spanElement.outerHTML;
                                            }
                                    sentence33 += sentencePart3 + " ";
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
    <div class="sentence1bbab">${sentence1bbab}</div>
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
    <div class="sentence1bbab">${sentence1bbab}</div>
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
                            }, 0);
                        });
                    }
                    


                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    
                    $('.grid-container').append($container);

                    const srcWords = [srcWord1, srcWord2, srcWord3];
                    const srcWordsb = [srcWord1d, srcWord2d, srcWord3d];
                    const srcWords2 = [srcWord1b, srcWord2b, srcWord3b];
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

                    if (newIndex === 0 && !buttonindex && !isSearching) {
                        console.log('hej33b', buttonindex);
                        let funkcjaWywolana = false;
                        let stopButtonAdded = false;
                        if (indexDiv % 2 === 0) {
                            function addVideo1(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    przekazArgument0(tablica7[0], tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', '100');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video').css({
                                    'z-index': '1' // Ustaw z-index dla wideo na niższy
                                });

const video = document.createElement('video');
video.setAttribute('autoplay', '');
video.setAttribute('loop', '');
video.muted = true; // ← to jest kluczowe!
video.playsInline = true; // ← opcjonalne, ale przydatne na mobile

const source = document.createElement('source');
source.src = srcWords[index];
source.type = 'video/mp4';

video.appendChild(source);
const $videoElement = $(video);
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
$videoElement.attr('muted', true); // atrybut, nie .prop
                                // Obsługa błędu ładowania wideo
                                $videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Funkcja obsługi zdarzenia loadedmetadata
$videoElement.hide(); // Ukrycie wideo przed załadowaniem
function ensureVideoStarts($videoElement, index) {
    let retryCount = 0;
    const maxRetries = 20;
    let started = false;

    function tryStart() {
        if (started) return;
        const el = $videoElement[0];
        const duration = el.duration;

        if (el.readyState < 3 || isNaN(duration) || duration === Infinity || duration === 0) {
            if (retryCount++ < maxRetries) {
                console.warn(`Wideo ${index} niegotowe (readyState=${el.readyState}), próba ${retryCount}`);
                return setTimeout(tryStart, 300);
            } else {
                console.error(`Wideo ${index} nie wystartowało`);
                return;
            }
        }

        started = true;
        $videoElement.show();
        videoDurations[index] = duration;

        $videoElement.off('timeupdate').on('timeupdate', function () {
            let adjustedProgress = 0;
            for (let i = 0; i < index; i++) {
                adjustedProgress += (videoDurations[i] / totalDuration) * 100;
            }
            adjustedProgress += (this.currentTime / duration) * (videoDurations[index] / totalDuration) * 100;
            updateProgress(adjustedProgress);

            if (!currentIndexValue.includes(index)) {
                currentIndexValue.push(index);
                if ([0, 1, 2].includes(currentIndexValue[0])) {
                    addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
                }
            }

            if (duration - this.currentTime < 1) {
                addVideo1(index + 1);
                updateProgress(0);
            }
        });

        el.play().then(() => {
            console.log(`Wideo ${index} odtworzone`);
        }).catch(error => {
            console.warn(`Autoplay nie działa (index ${index}):`, error);
        });
    }

    // Jeśli nie zadziała 'canplaythrough', dodaj fallback na loadeddata
    $videoElement.one('canplaythrough loadeddata', tryStart);

    try {
        $videoElement[0].load();
    } catch (e) {
        console.warn('Błąd ładowania:', e);
    }
}

console.log('wykonuje się655');
                                addScenes(index);
                                // Dodaj div z wideo do tła kontenera
$vidDiv.appendTo($container);
window.addEventListener('pageshow', () => {
  const video = document.getElementById('myVideo');
  if (video) {
    video.play().catch((error) => {
      console.error('Error playing video:', error);
    });
  }
});
// Upewnij się, że wideo jest fizycznie w DOM, zanim zaczniesz ładowanie
requestAnimationFrame(() => {
    setTimeout(() => {
        ensureVideoStarts($videoElement, index);
    }, 200); // małe opóźnienie buforujące
});
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
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/stopok2.png');
                                                    } else {
                                                        video.play();
                                                        // Zmień obrazek z powrotem na "Stop"
                                                        $stopButton.attr('src', 'https://www.arbulang.com/img/play.png');
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
                            }, 200);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo1b(index) {
                                console.log('hej80', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
                                    console.log("wykonuje się");
                                    funkcjaWywolana = true;
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();

                                console.log('hej78', index);

                                // Dodaj div z wideo do tła kontenera
                                const $vidDiv = $('<div>').addClass('background-video22').css({
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
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
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
                            setTimeout(function () {
                                addVideo1b(0);
                            }, 200);
                        }
                    } else if (index50 === 0 && buttonindex && !isSearching) {
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
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
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
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
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
                            setTimeout(function () {
                                addVideo2(0);
                            }, 700);
                        } else if (indexDiv === 1 || indexDiv === 11 || indexDiv === 13 || indexDiv === 17 || indexDiv === 19 || indexDiv === 23 || indexDiv === 29 || indexDiv === 31 || indexDiv === 37 || indexDiv === 41 || indexDiv === 43 || indexDiv % 3 === 0 || indexDiv % 5 === 0 || indexDiv % 7 === 0) {
                            function addVideo2b(index) {
                                console.log('hej80', index);

                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= srcWords.length && !funkcjaWywolana) {
                                    setTimeout(function () {
                                        $('.progress-bar').remove();
                                    }, 200); // Opóźnienie w milisekundach (tu: 200 ms)
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
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
                                                addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, true, lesson1FirstPartLength, lesson1PartLength, matchingLessons5b);
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
                            setTimeout(function () {
                                addVideo2b(0);
                            }, 700);
                        }
                    } else {
                        function addVideo3(index) {
                            console.log('index44b', indexDiv);

                            // Tworzymy element <video> z atrybutami
                            const $videoElement = $('<video>').attr({
                                'muted': true,
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
                        setTimeout(function () {
                            addVideo3(0);
                        }, 1000);
                    }

                    // Stwórz przycisk za pomocą jQuery
                    // Tworzenie nowego elementu div za pomocą jQuery


                    if ((index50 === 0 && buttonindex) || (newIndex === 0 && !buttonindex)) {
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
                    } else {
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
const $button = $('<button></button>');
                    $button.addClass('run-button');
                    $button.text('Uruchom'); // Ustawiamy tekst przycisku na 'Uruchom'
                    $button.attr('data-index2', indexDiv);
                    $button.on('click', function () {

                        const index5 = $button.attr('data-index2');
                        const index55 = parseInt(index5, 10); // Zamieniamy index55 na liczbę
                        // Alternatywnie można użyć Number(index55)
                        // const numericIndex = Number(index55);

                        setTimeout(() => {
                            console.log('Kliknięto przycisk o indeksie:', index55);
                            przekazArgument0(tablica7[0], tablica3[2], index55, true, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '', indexDivRange);
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
$buttonb2.text('Otwórz lekcję w nowym oknie');

// Dodajemy atrybut 'data-index2' z wartością indexDiv do przycisku
$buttonb2.attr('data-index2', indexDiv);
$buttonb2.on('click', function () {
    const $clickedContainer = $container; // Przypisz kliknięty kontener do zmiennej

    // Dodaj tło do nieklikniętych kontenerów
    $('.image-container3').not($clickedContainer).each(function () {
        const $container = $(this);
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
                    'z-index': '1000'
                })
                .appendTo($container);
        }
    });

    // Usuń klasę .background-overlay po powrocie na stronę
    $(window).on('pageshow', function () {
        $('.background-overlay').remove();
    });

    const index5b2 = $buttonb2.attr('data-index2');
    const index55b2 = parseInt(index5b2, 10);

    // Znajdź ukryty link i kliknij go
    let lessonLink = null;
    if (index55b2 === 1) {
        lessonLink = document.querySelector('.lesson-link-1');
    }
    if (index55b2 === 2) {
        lessonLink = document.querySelector('.lesson-link-2');
    }
        if (index55b2 === 3) {
        lessonLink = document.querySelector('.lesson-link-3');
    }
        if (index55b2 === 4) {
        lessonLink = document.querySelector('.lesson-link-4');
    }
    if (index55b2 === 5) {
        lessonLink = document.querySelector('.lesson-link-5');
    }
        if (index55b2 === 6) {
        lessonLink = document.querySelector('.lesson-link-6');
    }
        if (index55b2 === 7) {
        lessonLink = document.querySelector('.lesson-link-7');
    }
        if (index55b2 === 8) {
        lessonLink = document.querySelector('.lesson-link-8');
    }
        if (index55b2 === 9) {
        lessonLink = document.querySelector('.lesson-link-9');
    }
        if (index55b2 === 10) {
        lessonLink = document.querySelector('.lesson-link-10');
    }
            if (index55b2 === 11) {
        lessonLink = document.querySelector('.lesson-link-11');
    }
        if (index55b2 === 12) {
        lessonLink = document.querySelector('.lesson-link-12');
    }
        if (index55b2 === 13) {
        lessonLink = document.querySelector('.lesson-link-13');
    }
    if (index55b2 === 14) {
        lessonLink = document.querySelector('.lesson-link-14');
    }
        if (index55b2 === 15) {
        lessonLink = document.querySelector('.lesson-link-15');
    }
        if (index55b2 === 16) {
        lessonLink = document.querySelector('.lesson-link-16');
    }
    if (index55b2 === 17) {
        lessonLink = document.querySelector('.lesson-link-17');
    }
        if (index55b2 === 18) {
        lessonLink = document.querySelector('.lesson-link-18');
    }
        if (index55b2 === 19) {
        lessonLink = document.querySelector('.lesson-link-19');
    }
    if (lessonLink) {
        lessonLink.click(); // Automatyczne kliknięcie ukrytego linka
    }
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