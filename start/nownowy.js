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

                    if (selectedCategory === "all") {
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
    src: 'https://localhost/arbulanguage.com/img/play.png',
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
        src: 'https://localhost/arbulanguage.com/img/music2.png', // Ikona play
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

                                    console.log('hej10a', tablica12ab2[0]);
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

                                                tablica12ab2.push(videoDuration);
                                                console.log('hej15b', tablica12ab2[0]);
                                                // Obsługa postępu w trakcie odtwarzania wideo

                                            });
                                        }
                                        addVideo2bd0(0);
                                    }
                                    setTimeout(function () {
                                        console.log('hej24bc', tablica12ab2[0]);
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
                                                tablica12abc2[0] = tablica12ab2[0] + tablica12ad2[0];
                                                // Obsługa postępu w trakcie odtwarzania wideo

                                            });
                                        }
                                        addVideo2bd0(1);
                                    }

                                    console.log('hej24bci', tablica12ad2[0]);
                                    console.log('hej24bcl', tablica12abc2[0]);
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
                                                    let startPosition = tablica12ab2[0];  // Przykład: start na określonej wartości
                                                    let startPositionPercentage = (startPosition / totalDuration) * 100; // Przeliczenie na procent
                                                    console.log('hej24b2', startPositionPercentage);
                                                    updateProgress2(startPositionPercentage, adjustedProgress);
                                                }, 800); // Opóźnienie w milisekundach
                                            }
                                            if (idx === 2) {
                                                let startPosition = tablica12abc2[0];  // Przykład: start na określonej wartości
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
                                                .attr('src', 'https://localhost/arbulanguage.com/img/stopok2.png')
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
                                                            $stopButton.attr('src', 'https://localhost/arbulanguage.com/img/play.png');
                                                        } else {
                                                            video.play();
                                                            // Zmień obrazek z powrotem na "Stop"
                                                            $stopButton.attr('src', 'https://localhost/arbulanguage.com/img/stopok2.png');
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
                                'src': 'https://localhost/arbulanguage.com/img/startsystem.png',
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


                            // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener
                            addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                            addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
                        }
                        setTimeout(function () {
                            addVideo3(0);
                        }, 1000);
                    }
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

                                        // Dodaj sentencePart do sentence10
                                        sentence11 += sentencePart2 + " ";

                                    }
                                }


                                console.log('hej20', sentence1bba);
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

                                $('.sentence1bba').html('');
                            }, 0);
                        });                          
                    }
                    
            let tablica12ab2 = [];
            let tablica12ad2 = [];
            let tablica12abc2 = [];
            const kliknieciaHistoria = []; // [przedostatnie, ostatnie]
        function showCombinedSentenceForLesson22b(
            selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2,
            buttonindex, index55, index77, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes,
            startIndex, newIndex, indexDiv,
            lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength,
            lesson1Sentences, lesson2Sentences, lesson3Sentences,
            lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength,
            lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength,
            cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3,
            lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching
        ) {

                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                console.log('hej444', newIndex);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
    const id2 = matchingFiszki2[0]?.id[1] || 'unknown2';
    const id3 = matchingFiszki3[0]?.id[1] || 'unknown3';
                if (matchingFiszki1.length > 0 || matchingFiszki2.length > 0 || matchingFiszki3.length > 0) {

                    const srcWord1 = pobierzSrcWordDlaLekcji(lessonIdToShow1, fiszki);
                                        const srcWord1a = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
                    const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                    const srcWord1d = pobierzSrcWordDlaLekcji4(lessonIdToShow1, fiszki);
                                        const srcWord1f = pobierzSrcWordDlaLekcji5(lessonIdToShow1, fiszki);
                                                                                const srcWord1v = pobierzSrcWordDlaLekcji6(lessonIdToShow1, fiszki);
                    const srcWord2 = pobierzSrcWordDlaLekcji(lessonIdToShow2, fiszki);
                    const srcWord2a = pobierzSrcWordDlaLekcji2(lessonIdToShow2, fiszki);
                    const srcWord2b = pobierzSrcWordDlaLekcji3(lessonIdToShow2, fiszki);
                    const srcWord2d = pobierzSrcWordDlaLekcji4(lessonIdToShow2, fiszki);
                                        const srcWord2f = pobierzSrcWordDlaLekcji5(lessonIdToShow2, fiszki);
                                        const srcWord2v = pobierzSrcWordDlaLekcji6(lessonIdToShow2, fiszki);
                    const srcWord3 = pobierzSrcWordDlaLekcji(lessonIdToShow3, fiszki);
                    const srcWord3a = pobierzSrcWordDlaLekcji2(lessonIdToShow3, fiszki);
                    const srcWord3b = pobierzSrcWordDlaLekcji3(lessonIdToShow3, fiszki);
                    const srcWord3d = pobierzSrcWordDlaLekcji4(lessonIdToShow3, fiszki);
                                        const srcWord3f = pobierzSrcWordDlaLekcji5(lessonIdToShow3, fiszki);
                                        const srcWord3v = pobierzSrcWordDlaLekcji6(lessonIdToShow3, fiszki);
                    const srcWord10 = pobierzSrcWordDlaLekcji2(lessonIdToShow1, fiszki);
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
                    function pobierzSrcWordDlaLekcji4(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.opis : null;
                    }
                                        function pobierzSrcWordDlaLekcji5(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.translate : null;
                    }
                                                            function pobierzSrcWordDlaLekcji6(lessonId, fiszki) {
                        const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
                        return matchingFiszka ? matchingFiszka.translateb3 : null;
                    }
                    console.log(`Fiszki dla lekcji ${lessonIdToShow1}, ${lessonIdToShow2} i ${lessonIdToShow3}:`);
                    // Zmienna do liczenia wystąpień indexToCheck
                                        function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
    sentence10 = "";
    sentence11 = "";
    sentence1bba = "";
    sentence1bbab = "";

    for (let i = 0; i < matchingFiszki1.length; i++) {
        const fiszka = matchingFiszki1[i];
        if (!fiszka.sentence1) continue;

        for (let ki = 0; ki < fiszka.sentence1.length; ki++) {
            let sentencePart = fiszka.sentence1[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence10 += sentencePart + " ";
        }
    }

    for (let i = 0; i < matchingFiszki1.length; i++) {
        const fiszka = matchingFiszki1[i];
        if (!fiszka.sentence2) continue;

        for (let ki = 0; ki < fiszka.sentence2.length; ki++) {
            let sentencePart2 = fiszka.sentence2[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence11 += sentencePart2 + " ";
        }
    }
}


                    function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
    sentence20 = "";
    sentence22 = "";

    for (let j = 0; j < matchingFiszki2.length; j++) {
        const fiszka = matchingFiszki2[j];
        if (!fiszka.sentence1) continue;

        for (let k = 0; k < fiszka.sentence1.length; k++) {
            let sentencePart = fiszka.sentence1[k];
            const indexToCheck = j + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence20 += sentencePart + " ";
        }
    }

    for (let i = 0; i < matchingFiszki2.length; i++) {
        const fiszka = matchingFiszki2[i];
        if (!fiszka.sentence2) continue;

        for (let ki = 0; ki < fiszka.sentence2.length; ki++) {
            let sentencePart2 = fiszka.sentence2[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence22 += sentencePart2 + " ";
        }
    }
}

                                        function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b) {
    sentence30 = "";
    sentence33 = "";

    for (let j = 0; j < matchingFiszki3.length; j++) {
        const fiszka = matchingFiszki3[j];
        if (!fiszka.sentence1) continue;

        for (let k = 0; k < fiszka.sentence1.length; k++) {
            let sentencePart = fiszka.sentence1[k];
            const indexToCheck = j + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart = `<span class="yellow">${sentencePart}</span>`;
            }

            sentence30 += sentencePart + " ";
        }
    }

    for (let i = 0; i < matchingFiszki3.length; i++) {
        const fiszka = matchingFiszki3[i];
        if (!fiszka.sentence2) continue;

        for (let ki = 0; ki < fiszka.sentence2.length; ki++) {
            let sentencePart2 = fiszka.sentence2[ki];
            const indexToCheck = i + lesson1PartLength + 1;

            if (matchingIndexes.includes(indexToCheck) && matchingIndexes !== null) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            if (matchingLessons5b.includes(indexToCheck) && matchingIndexes.length === 0) {
                sentencePart2 = `<span class="yellow">${sentencePart2}</span>`;
            }

            sentence33 += sentencePart2 + " ";
        }
    }
}
                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                    $container.addClass('image-container3b'); // Dodajemy klasę do nowego diva
                    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                    $container.attr('data-lesson', indexDiv);
                    $('.grid-container').append($container);

function renderLesson() {
    $container.empty();

    // --- Bezpieczne domyślne ustawienia currentTriplet ---
    if (!Array.isArray(currentTriplet) || currentTriplet.length === 0) {
        if (trojkiGlobal.length > 0) {
            currentTriplet = trojkiGlobal[0].slice();
            currentPos = 0;
        } else {
            currentTriplet = miniaturka.map((_, i) => i);
            currentPos = 0;
        }
    }

    if (currentPos < 0 || currentPos >= currentTriplet.length) currentPos = 0;

    const currentDataName = currentTriplet[currentPos];

    // --- Dopasowanie fiszek do trójki ---
    const id1 = currentTriplet[0];
    const id2 = currentTriplet[1];
    const id3 = currentTriplet[2];

    const matchingFiszki1 = fiszki.filter(f => f.id[1] === id1);
    const matchingFiszki2 = fiszki.filter(f => f.id[1] === id2);
    const matchingFiszki3 = fiszki.filter(f => f.id[1] === id3);

    const matchingIndexes = [];
    const matchingIndexes2 = [];
    const matchingIndexes3 = [];
    const matchingLessons5b = [];

    const fiszka = sentences[currentPos] || {};

    // --- Duża miniaturka / wideo ---
    const $mediaContainer = $('<div>').addClass('media-container');
    let $media;
    const previewImgSrc = miniaturka[currentPos];
    const videoSrc = srcWords[currentPos];

    if (videoVisible && videoSrc) {
        $media = $('<video>')
            .attr({ src: videoSrc, controls: true, autoplay: true })
            .css({ width: '100%', borderRadius: '15px', display: 'block' })
            .on('ended', () => { videoVisible = false; renderLesson(); });
    } else {
        $media = $('<img>').addClass('preview-img');
        setImgSrcForce($media, previewImgSrc);
        $media.off('click.preview').on('click.preview', () => { videoVisible = true; renderLesson(); });
    }
    $mediaContainer.append($media);

    // --- Pasek miniatur ---
    const $thumbContainer = $('<div>').addClass('thumb-row');
    currentTriplet.forEach((dataName, pos) => {
        const $item = $('<div>').addClass('thumb-item');
        if (pos === currentPos) $item.addClass('activeItem');

        const $img = $('<img>').addClass('thumb-img').attr('data-pos', pos);
        setImgSrcForce($img, miniaturka[pos]);
        $img.off('click.thumb').on('click.thumb', function () {
            const p = Number($(this).attr('data-pos'));
            if (!Number.isNaN(p)) { currentPos = p; videoVisible = false; renderLesson(); }
        });

        const $desc = $('<div>').addClass('thumb-desc').text(thumbDescriptions[pos] || '');

        const linkForThumb = linkMap[dataName] || `demo1angielski.html?category=${selectedCategory}&data=${dataName}`;
        const $link = $('<a>').attr({ href: linkForThumb, target: '_blank' }).addClass('thumb-link').text('Otwórz pojedyńczą lekcję');

        $item.append($img, $desc, $link);
        $thumbContainer.append($item);
    });
    $mediaContainer.append($thumbContainer);

    // --- Tekst / fiszka ---
    const $textContainer = $('<div>').addClass('text-block');
    let currentSentenceHtml = "";

    try {
        if (currentPos === 0 && typeof addBackgroundToText1b === 'function') {
            const { sentence10, sentence11 } = addBackgroundToText1b(matchingFiszki1, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
            currentSentenceHtml = (sentence10 || "") + (sentence11 || "");
        } else if (currentPos === 1 && typeof addBackgroundToText2b === 'function') {
            const { sentence20, sentence22 } = addBackgroundToText2b(matchingFiszki2, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
            currentSentenceHtml = (sentence20 || "") + (sentence22 || "");
        } else if (currentPos === 2 && typeof addBackgroundToText3b === 'function') {
            const { sentence30, sentence33 } = addBackgroundToText3b(matchingFiszki3, matchingIndexes, currentPos, 0, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
            currentSentenceHtml = (sentence30 || "") + (sentence33 || "");
        } else {
            if (fiszka && (fiszka.sentence1 || fiszka.sentence2)) {
                currentSentenceHtml = (Array.isArray(fiszka.sentence1) ? fiszka.sentence1.join(' ') + ' ' : '') +
                                      (Array.isArray(fiszka.sentence2) ? fiszka.sentence2.join(' ') : '');
            }
        }
    } catch (e) {
        console.error('Błąd podczas generowania zdań:', e);
    }

    const $sentenceDiv = $('<div>').addClass('sentence-block').html(currentSentenceHtml);
    $textContainer.append($sentenceDiv);

    // --- Linki do lekcji ---
    const singleLink = `demo1angielski.html?category=${selectedCategory}&data=${currentDataName}`;
    let tripletLink = linkMap[currentDataName] || null;
    if (!tripletLink && Array.isArray(trojkiGlobal) && trojkiGlobal.length) {
        const found = trojkiGlobal.find(t => Array.isArray(t) && t.indexOf(currentDataName) !== -1);
        if (found) tripletLink = `demo1angielski.html?category=${selectedCategory}&data=${found.join(',')}`;
    }
    if (!tripletLink && Array.isArray(currentTriplet) && currentTriplet.length) {
        tripletLink = `demo1angielski.html?category=${selectedCategory}&data=${currentTriplet.join(',')}`;
    }
    if (!tripletLink) tripletLink = singleLink;

    const $singleLinkA = $('<a>').attr({ href: singleLink, target: '_blank', rel: 'noopener noreferrer' }).addClass('text-link').text('➡ Otwórz lekcję z wybranym zdaniem');
    const $tripletLinkA = $('<a>').attr({ href: tripletLink, target: '_blank', rel: 'noopener noreferrer' }).addClass('text-link').text('➡ Otwórz całą lekcję (3 zdania)');
    $textContainer.append($singleLinkA, $tripletLinkA);

    // --- Nawigacja w obrębie trójki ---
    const $nav = $('<div>').addClass('nav-buttons');
    const $left = $('<button>').text('←').on('click', () => {
        currentPos = (currentPos - 1 + currentTriplet.length) % currentTriplet.length;
        videoVisible = false;
        renderLesson();
    });
    const $right = $('<button>').text('→').on('click', () => {
        currentPos = (currentPos + 1) % currentTriplet.length;
        videoVisible = false;
        renderLesson();
    });
    $nav.append($left, $right);

    $container.append($mediaContainer, $textContainer, $nav);
}