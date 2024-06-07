              if (tablica10.length <= 3 || tablica10.length === 0) {
                                    if () {
                                        
                                    console.log('wykonuje się 8');
                                    console.log('hej18', tablica10);
                                showCombinedSentenceForLesson(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                            }
                            } else if (newIndex === 0 || (tablica10.length <= 3 && tablica10.length !== 0)) {
                                console.log('wykonuje się 10');
                                    console.log('hej22', tablica10);
                        showCombinedSentenceForLesson3(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                            }
                        }

function showCombinedSentenceForLesson(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray) {
       
        const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                    const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                    const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);

                    if (matchingFiszki1.length > 0 && matchingFiszki2.length > 0 && matchingFiszki3.length > 0) {
                            const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
    $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
    $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

    // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
    $container.attr('data-lesson', indexDiv);

    $('.grid-container').append($container);
tablica10.push(srcWords);
                        console.log('hej6', tablica10);
                        
                                            }
          // Deklaracja tablicy, która będzie zawierać wszystkie tablice
                }