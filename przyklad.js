if (newIndex === 0) {
                            function addVideo(index) {
                                                            console.log('hej78', index);
                                // Sprawdź, czy jesteśmy poza zakresem tablicy
                                if (index >= 3) {
                                    przekazArgument('osoby');
                                    console.log("wykonuje się 5");
                                }
                                // Usuń poprzednie wideo
                                removePreviousVideo();
                                                            console.log('hej79', index);
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
                                videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Obsługa zdarzenia timeupdate
                                
                                videoElement.ontimeupdate = function () {
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
                                    if (videoElement.duration - videoElement.currentTime < 1) {
                                        console.log('Wideo zakończone, uruchamiam następne.');

                                        // Odtwórz następne wideo po zakończeniu poprzedniego
                                        addVideo(index + 1);
                                    }
                                };

                                // Dodaj element <video> do diva z wideo
                                vidDiv.appendChild(videoElement);

                                // Dodaj div z wideo do tła kontenera
                                container.appendChild(vidDiv);

                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener

                        }
                    } else {
                                              function addVideo2(index) {
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
                                // Zatrzymaj odtwarzanie wideo
                                if (videoElement && !videoElement.paused) {
                                    videoElement.pause();
                                }
                                videoElement.muted = true; // Wyciszenie dźwięku wideo
                                videoElement.setAttribute('loop', ''); // Zapętlenie wideo

                                // Utwórz element <source> dla wideo
                                const sourceElement = document.createElement('source');
                                sourceElement.setAttribute('src', `${srcWords[index]}`); // Poprawne użycie interpolacji
                                sourceElement.setAttribute('type', 'video/mp4'); // Typ pliku wideo

                                // Dodaj element <source> do elementu <video>
                                videoElement.appendChild(sourceElement);

                                // Obsługa błędu ładowania wideo
                                videoElement.onerror = function () {
                                    console.error('Nie można załadować pliku wideo.');
                                };
                                let currentIndexValue = [];
                                // Obsługa zdarzenia timeupdate
                                videoElement.ontimeupdate = function () {
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

                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener

                            }
                            }

                            // Zamiast ręcznie tworzyć tablicę imageContainers, możemy wykorzystać metodę document.querySelectorAll()
                                                addVideo(0);