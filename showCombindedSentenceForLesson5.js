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
                            przekazArgument0(tablica7[0], tablica3[2], index55, true, tablica3[0], true, true, tablica3[1], tablica3[4], false, '', '', '', '');
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
