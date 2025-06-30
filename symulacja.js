                   function showCombinedSentenceForLesson(number, selectedCategory, matchingIndexes3, rodzaj, matchingIndexes2, buttonindex, index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3, lessonsArrayZ, matchingLessons5, matchingLessons5b, isSearching) {
                console.log('hej55bbv', number);
                   if (newIndex === 0 && !buttonindex && !isSearching && !number) {
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
                            }
                        }
}
                   }
                   function addVideo3(index) {
    console.log('index44b', indexDiv);

    const containerId = `video-container-${index}`; // unikalny identyfikator kontenera
    let $container = $(`#${containerId}`);

    // Jeśli kontener jeszcze nie istnieje – utwórz go raz
    if ($container.length === 0) {
        $container = $('<div>').attr('id', containerId).addClass('video-wrapper').css({
            position: 'relative',
            width: '100%',
            height: '100%'
        });
        $('#main-video-holder').append($container); // dodaj do głównego kontenera
    } else {
        // Jeśli istnieje – usuń stare wideo z tego kontenera
        $container.find('video').remove();
    }

    // Stwórz nowe <video> z atrybutami
    const $videoElement = $('<video>').attr({
        'muted': true,
        'loop': true,
        'autoplay': true,
        'playsinline': true,
        'style': 'width: 100%; height: 100%; z-index: 1',
        'poster': srcWordimage[index]
    });

    // Miniaturki – dodawaj tylko raz
    if ($container.find('.thumbnail-container').length === 0) {
        const $thumbnailContainer = $('<div>').addClass('thumbnail-container').css({
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            top: '10px',
            left: '10px',
            width: '90%',
            zIndex: '2',
            pointerEvents: 'auto'
        });
        $container.append($thumbnailContainer);
    }

    // Dodaj <video> do kontenera
    $container.append($videoElement);

    // Dodaj overlay tylko jeśli go jeszcze nie ma
    if ($container.find('.overlay').length === 0) {
        const $overlay = $('<div>').addClass('overlay');
        const $buttonb = $('<img>').attr({
            'src': 'https://www.arbulang.com/img/startsystem.png',
            'class': 'overlay-button'
        });
        $container.append($overlay);
        $container.append($buttonb);
    }

    // Wstaw inne funkcje
    addBackgroundToText1b(matchingFiszki1, matchingIndexes, true, lesson1PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
    addBackgroundToText2b(matchingFiszki2, matchingIndexes, true, lesson2PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
    addBackgroundToText3b(matchingFiszki3, matchingIndexes, true, lesson3PartLength, matchingIndexes2, rodzaj, matchingIndexes3, matchingLessons5b);
}