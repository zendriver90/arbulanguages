let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                        let sentence11 = "";
                        let sentence12 = " / ";
                        let sentence1bb1d = "";
                        let sentence1bb1d2 = "";
                        function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1PartLength) {
                            sentence10 = "";
                            sentence11 = "";
                            sentence12 = " / ";
                            sentence1bb1d = "";
                            sentence1bb1d2 = "";
                            console.log('działa');
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
                                            console.log('działa2', i + cumulativeFirstPartLength1 + 1);
                                            const spanElement = document.createElement('span');
                                            spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                            if (!spanElement.classList.contains('highlighted-sentence')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            sentencePart = spanElement.outerHTML;
                                            let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb1d += sentencePart1 + " ";
                                            let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb1d2 += sentencePart1a + " ";
                                            console.log('hej45', sentencePart1);
                                            // Dodaj element do DOM, jeśli jeszcze go nie ma
                                            if ($sentenceDiv.find('.sentence1bb1d').length === 0) {
                                                $sentenceDiv.append('<div class="sentence1bb1d2"></div>');
                                            }
                                            if ($sentenceDiv.find('.sentence1bb1d2').length === 0) {
                                                $sentenceDiv.append('<div class="sentence1bb1d2"></div>');
                                            }
                                            let $sentence1bb1d = $sentenceDiv.find('.sentence1bb1d');
                                            let $sentence1bb1d2 = $sentenceDiv.find('.sentence1bb1d2');
                                            // Ustawienie widoczności i stylu dla .sentence1bb
                                            // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                            if (!sentence1bVisible) {
                                                $sentence1bb1d.css({
                                                    'display': 'block',
                                                    'margin-bottom': '50px',
                                                    'top': '20px',
                                                    'position': 'relative'
                                                });
                                                console.log('sentence1bb style set to visible');
                                            }
                                            $sentence1bb1d.html(sentence1bb1d);
                                            $sentence1bb1d2.html(sentence1bb1d2);
                                            if (!sentence1bVisible) {
                                                // Pokazujemy zdanie .sentence1bba
                                                $sentence1bb1d2.css('display', 'block');
                                                $sentence1bb1d2.css({
                                                    'margin-bottom': '-0px',
                                                    'top': '0px',
                                                    'position': 'relative'
                                                });
                                            }
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
                                        if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
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
                            // Dodaj sentence1bb tutaj
                            console.log('final sentence11:', sentence11);
                            $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br><div class="sentence1bb1d">${sentence1bb1d}</div><div class="sentence1bb1d2">${sentence1bb1d2}</div><br> ${sentence20}${sentence22}<br><div class="sentence1bb1b">${sentence1bb1b}</div><div class="sentence1bb1b2">${sentence1bb1b2}</div><br> ${sentence30}${sentence33}<div class="sentence1bb1c">${sentence1bb1c}</div><div class="sentence1bb1c2">${sentence1bb1c2}</div>`);
                            $('#insertSlashButton').on('click', function () {
                                if (!isSlashInserted) {
                                    $('#sentence12').show();
                                    $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                    isSlashInserted = true;
                                }
                            });
                                    setTimeout(() => {
                                        if (isSlashInserted) {
                                            $('#sentence12').show();
                                            $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                        }
                                    }, 10);
                        }
                        let sentence1b = "";
                        let sentence1b2 = "";
                        let sentence1bb1 = "";
                        let sentence1bb1a = "";
                        function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength) {
                            $(document).ready(function () {

                                sentence1b = "";
                                sentence1b2 = "";
                                sentence1bb1 = "";
                                sentence1bb1a = "";

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

                                        sentence1b += sentencePart + " ";
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
                                        sentence1b2 += sentencePart2 + " ";
                                    }
                                }

                                let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                sentence1bb1 += sentencePart1 + " ";
                                let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                sentence1bb1a += sentencePart1a + " ";
                                $sentenceDiv.html(
                                        '<br><button class="left-button first-button">+<br></button>' +
                                        '<span class="sentence1b">' + sentence1b + '<span class="sentence1b2">' + sentence1b2 + '</span>' +
                                        '<span class="sentence1bb1" style="position:relative; display:none;">' + sentence1bb1 + '</span>' +
                                        '<span class="sentence1bb1a" style="position:relative; display:none;">' + sentence1bb1a + '</span>' +
                                        '<br><button class="left-buttonb second-button">+<br></button>' +
                                        '<span class="sentence2b">' + sentence2b + '<span class="sentence2b2">' + sentence2b2 + '</span>' +
                                        '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                        '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                        '<br><button class="left-buttonbb third-button">+<br></button>' +
                                        '<span class="sentence3b">' + sentence3b + '<span class="sentence3b2">' + sentence3b2 + '</span>' +
                                        '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                        '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                        '<br>'
                                        );

                                // Ustawienie stylu dla przycisków .left-button
                                $('.left-button').css('position', 'relative');
                                $('.left-buttonb').css('position', 'relative');
                                $('.left-buttonbb').css('position', 'relative');
                                let $sentence1bb1 = $sentenceDiv.find('.sentence1bb1');
                                let $sentence1bb1a = $sentenceDiv.find('.sentence1bb1a');
                                // Ustawienie widoczności i stylu dla .sentence1bb
                                // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                if (sentence1bVisible) {
                                    $sentence1bb1.css({
                                        'display': 'block',
                                        'margin-bottom': '-0px',
                                        'top': '0px',
                                        'position': 'relative'
                                    });
                                }
                                if (sentence1bVisible) {
                                    // Pokazujemy zdanie .sentence1bba
                                    $sentence1bb1a.css('display', 'block');
                                    $sentence1bb1a.css({
                                        'margin-bottom': '-0px',
                                        'top': '0px',
                                        'position': 'relative'
                                    });
                                }
                                // Obsługa kliknięcia przycisku
                                    $sentenceDiv.on('click', '.left-button', function () {
                                        // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                        if (sentence1bb1 === "") {
                                            let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb1 += sentencePart1 + " ";
                                        }
                                        if (sentence1bb1a === "") {
                                            let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb1a += sentencePart1a + " ";
                                        }
                                        // Dodanie treści do diva wraz z przyciskiem
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '<span class="sentence1b2">' + sentence1b2 + '</span>' +
                                                '<span class="sentence1bb1" style="position:relative; display:none;">' + sentence1bb1 + '</span>' +
                                                '<span class="sentence1bb1a" style="position:relative; display:none;">' + sentence1bb1a + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '<span class="sentence2b2">' + sentence2b2 + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '<span class="sentence3b2">' + sentence3b2 + '</span>' +
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
                                        let $sentence1bb1a = $sentenceDiv.find('.sentence1bb1a');
                                        let $sentence1bb1 = $sentenceDiv.find('.sentence1bb1');
                                        if ($sentence1bb1.css('display') === 'none' || sentence1bVisible) {
                                            sentence1bVisible = true;
                                            sentence1baVisible = false;
                                            console.log('hej15', sentence1bVisible);
                                            // Pokazujemy zdanie .sentence1bb
                                            $sentence1bb1.css('display', 'block');
                                            $sentence1bb1.css({
                                                'margin-bottom': '-20px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                        }

                                        if ($sentence1bb1a.css('display') === 'none' || sentence1bVisible) {
                                            // Pokazujemy zdanie .sentence1bba
                                            $sentence1bb1a.css('display', 'block');
                                            $sentence1bb1a.css({
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
                            });
                        }

                        let sentence20 = ""; // Deklaracja zmiennej sentence20 na poziomie lokalnym
                        let sentence22 = "";
                        let sentence1bb1b = "";
                        let sentence1bb1b2 = "";

                        function addBackgroundToText2(matchingFiszki2, matchingIndexes, currentIndexValue, aktualny, lesson2PartLength) {
                            sentence20 = "";
                            sentence22 = "";
                            sentence1bb1b = "";
                            sentence1bb1b2 = "";

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
                                            if (!spanElement.classList.contains('yellow')) {
                                                spanElement.classList.add('yellow');
                                                spanElement.classList.add('highlighted-sentence');
                                            }
                                            // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                            sentencePart = spanElement.outerHTML;
                                            let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb1b += sentencePart1 + " ";
                                            let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb1b2 += sentencePart1a + " ";
                                            console.log('hej45', sentencePart1);
                                            // Dodaj element do DOM, jeśli jeszcze go nie ma
                                            if ($sentenceDiv.find('.sentence1bb1b').length === 0) {
                                                $sentenceDiv.append('<div class="sentence1bb1b"></div>');
                                            }
                                            // Dodaj element do DOM, jeśli jeszcze go nie ma
                                            if ($sentenceDiv.find('.sentence1bb1b2').length === 0) {
                                                $sentenceDiv.append('<div class="sentence1bb1b2"></div>');
                                            }
                                            let $sentence1bb1b = $sentenceDiv.find('.sentence1bb1b');
                                            let $sentence1bb1b2 = $sentenceDiv.find('.sentence1bb1b2');
                                            // Ustawienie widoczności i stylu dla .sentence1bb
                                            // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                            if (!sentence1bVisible) {
                                                $sentence1bb1b.css({
                                                    'display': 'block',
                                                    'margin-bottom': '0px',
                                                    'top': '20px',
                                                    'position': 'relative'
                                                });
                                                console.log('sentence1bb style set to visible');
                                            }
                                            $sentence1bb1b2.html(sentence1bb1b2);
                                            $sentence1bb1b.html(sentence1bb1b);
                                            if (!sentence1bVisible) {
                                                // Pokazujemy zdanie .sentence1bba
                                                $sentence1bb1b2.css('display', 'block');
                                                $sentence1bb1b2.css({
                                                    'margin-bottom': '-0px',
                                                    'top': '0px',
                                                    'position': 'relative'
                                                });
                                            }
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

                            $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br><div class="sentence1bb1d">${sentence1bb1d}</div><div class="sentence1bb1d2">${sentence1bb1d2}</div><br> ${sentence20}${sentence22}<br><div class="sentence1bb1b">${sentence1bb1b}</div><div class="sentence1bb1b2">${sentence1bb1b2}</div><br> ${sentence30}${sentence33}<div class="sentence1bb1c">${sentence1bb1c}</div><div class="sentence1bb1c2">${sentence1bb1c2}</div>`);
                            $('#insertSlashButton').on('click', function () {
                                if (!isSlashInserted) {
                                    $('#sentence12').show();
                                    $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                    isSlashInserted = true;
                                }
                            });
                            setTimeout(() => {
                                if (isSlashInserted) {
                                    $('#sentence12').show();
                                    $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                }
                            }, 10);
                        }

                        let sentence2b = "";
                        let sentence2b2 = "";
                        let sentence1bb2 = "";
                        let sentence1bb2a = "";
                        function addBackgroundToText2b(matchingFiszki2, matchingIndexes, aktualny, lesson2PartLength) {
                            $(document).ready(function () {
                                sentence2b = "";
                                sentence2b2 = "";
                                sentence1bb2 = "";
                                sentence1bb2a = "";

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
                                        sentence2b += sentencePart + " ";
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
                                        sentence2b2 += sentencePart2 + " ";
                                    }
                                }
                                    $sentenceDiv.on('click', '.left-buttonb', function () {
                                        // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                        if (sentence1bb2 === "") {
                                            let sentencePart2 = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb1 += sentencePart2 + " ";
                                        }
                                        if (sentence1bb2a === "") {
                                            let sentencePart2a = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb1a += sentencePart2a + " ";
                                        }
                                        // Dodanie treści do diva wraz z przyciskiem
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '<span class="sentence1b2">' + sentence1b2 + '</span>' +
                                                '<span class="sentence1bb1" style="position:relative; display:none;">' + sentence1bb1 + '</span>' +
                                                '<span class="sentence1bb1a" style="position:relative; display:none;">' + sentence1bb1a + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '<span class="sentence2b2">' + sentence2b2 + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '<span class="sentence3b2">' + sentence3b2 + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                '<br>'
                                                );
                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let sentencePart2 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                        let sentencePart2a = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                        // Obsługa kliknięcia przycisku
                                        console.log('Kliknięto przycisk');
                                        let $sentence1bb2 = $sentenceDiv.find('.sentence1bb2');
                                        let $sentence1bb2a = $sentenceDiv.find('.sentence1bb2a');
                                        let $sentence1bb1 = $sentenceDiv.find('.sentence1bb1');
                                        let $sentence1bb1a = $sentenceDiv.find('.sentence1bb1a');

                                        if ($sentence1bb2.css('display') === 'none') {
                                            sentence1bVisible = false;
                                            sentence1baVisible = true;
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb2.css('display', 'block');
                                            $sentence1bb2.css({
                                                'margin-top': '-25px',
                                                'top': '24px',
                                                'position': 'relative'
                                            });
                                        }
                                        if ($sentence1bb2a.css('display') === 'none') {
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb2a.css('display', 'block');
                                            $sentence1bb2a.css({
                                                'margin-top': '0px',
                                                'top': '23px',
                                                'position': 'relative'
                                            });
                                        }
                                        $sentence1bb1.html('');
                                        $sentence1bb1.empty();
                                        $sentence1bb1a.html('');
                                        $sentence1bb1a.empty();
                                    });
                                    let sentencePart1 = fiszka.translateb ? fiszka.translateb : "";
                                    sentence1bb2 += sentencePart1 + " ";
                                    let sentencePart1a = fiszka.translate ? fiszka.translate : "";
                                    sentence1bb2a += sentencePart1a + " ";
                                    $sentenceDiv.html(
                                            '<br><button class="left-button first-button">+<br></button>' +
                                            '<span class="sentence1b">' + sentence1b + '<span class="sentence1b2">' + sentence1b2 + '</span>' +
                                            '<span class="sentence1bb1" style="position:relative; display:none;">' + sentence1bb1 + '</span>' +
                                            '<span class="sentence1bb1a" style="position:relative; display:none;">' + sentence1bb1a + '</span>' +
                                            '<br><button class="left-buttonb second-button">+<br></button>' +
                                            '<span class="sentence2b">' + sentence2b + '<span class="sentence2b2">' + sentence2b2 + '</span>' +
                                            '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                            '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                            '<br><button class="left-buttonbb third-button">+<br></button>' +
                                            '<span class="sentence3b">' + sentence3b + '<span class="sentence3b2">' + sentence3b2 + '</span>' +
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
                                            'margin-bottom': '0px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                        console.log('sentence1bb style set to visible');
                                    }
                                    if (sentence1baVisible) {
                                        // Pokazujemy zdanie .sentence1bba
                                        $sentence1bb2a.css('display', 'block');
                                        $sentence1bb2a.css({
                                            'margin-bottom': '0px',
                                            'top': '-0px',
                                            'position': 'relative'
                                        });
                                    }
                            });
                        }

                        let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                        let sentence33 = "";
                        let sentence1bb1c = "";
                        let sentence1bb1c2 = "";
                        function addBackgroundToText3(matchingFiszki3, matchingIndexes, currentIndexValue, aktualny, lesson3PartLength) {
                            sentence30 = "";
                            sentence33 = "";
                            sentence1bb1c = "";
                            sentence1bb1c2 = "";
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
                                            sentencePart = spanElement.outerHTML;
                                            let sentencePart1 = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb1c += sentencePart1 + " ";
                                            let sentencePart1a = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb1c2 += sentencePart1a + " ";
                                            console.log('hej45', sentencePart1);
                                            // Dodaj element do DOM, jeśli jeszcze go nie ma
                                            if ($sentenceDiv.find('.sentence1bb1c').length === 0) {
                                                $sentenceDiv.append('<div class="sentence1bb1c"></div>');
                                            }
                                            // Dodaj element do DOM, jeśli jeszcze go nie ma
                                            if ($sentenceDiv.find('.sentence1bb1c2').length === 0) {
                                                $sentenceDiv.append('<div class="sentence1bb1c2"></div>');
                                            }
                                            let $sentence1bb1c = $sentenceDiv.find('.sentence1bb1c');
                                            let $sentence1bb1c2 = $sentenceDiv.find('.sentence1bb1c2');
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
                                            $sentence1bb1c.html(sentence1bb1c);
                                            $sentence1bb1c2.html(sentence1bb1c2);
                                            if (!sentence1bVisible) {
                                                // Pokazujemy zdanie .sentence1bba
                                                $sentence1bb1c2.css('display', 'block');
                                                $sentence1bb1c2.css({
                                                    'margin-bottom': '-0px',
                                                    'top': '0px',
                                                    'position': 'relative'
                                                });
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


                            $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br><div class="sentence1bb1d">${sentence1bb1d}</div><div class="sentence1bb1d2">${sentence1bb1d2}</div><br> ${sentence20}${sentence22}<br><div class="sentence1bb1b">${sentence1bb1b}</div><div class="sentence1bb1b2">${sentence1bb1b2}</div><br> ${sentence30}${sentence33}<div class="sentence1bb1c">${sentence1bb1c}</div><div class="sentence1bb1c2">${sentence1bb1c2}</div>`);
                            $('#insertSlashButton').on('click', function () {
                                if (!isSlashInserted) {
                                    $('#sentence12').show();
                                    $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                    isSlashInserted = true;
                                }
                            });
                            setTimeout(() => {
                                if (isSlashInserted) {
                                    $('#sentence12').show();
                                    $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                }
                            }, 10);
                        }


                        let sentence3b = "";
                        let sentence3b2 = "";
                        let sentence1bb3 = "";
                        let sentence1bb3a = "";
                        function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength) {
                            $(document).ready(function () {
                                sentence3b = "";
                                sentence3b2 = "";
                                sentence1bb3 = "";
                                sentence1bb3a = "";

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

                                        sentence3b += sentencePart + " ";

                                    }
                                }
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
                                            if (matchingIndexes.includes(indexToCheck)) {
                                                // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                                const spanElement = document.createElement('span');
                                                spanElement.textContent = sentencePart2;
                                                spanElement.classList.add('yellow');
                                                // Zaktualizuj sentencePart, aby zawierał utworzony element span
                                                sentencePart2 = spanElement.outerHTML;
                                            }
                                        }

                                        sentence3b2 += sentencePart2 + " ";
                                    }
                                }
                                    $sentenceDiv.on('click', '.left-buttonbb', function () {
                                        // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                        if (sentence1bb3 === "") {
                                            let sentencePart3 = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb3 += sentencePart3 + " ";
                                        }
                                        if (sentence1bb3a === "") {
                                            let sentencePart3a = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb3a += sentencePart3a + " ";
                                        }
                                        // Dodanie treści do diva wraz z przyciskiem
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '<span class="sentence1b2">' + sentence1b2 + '</span>' +
                                                '<span class="sentence1bb1" style="position:relative; display:none;">' + sentence1bb1 + '</span>' +
                                                '<span class="sentence1bb1a" style="position:relative; display:none;">' + sentence1bb1a + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '<span class="sentence2b2">' + sentence2b2 + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '<span class="sentence3b2">' + sentence3b2 + '</span>' +
                                                '<span class="sentence1bb3" style="position:relative; display:none;">' + sentence1bb3 + '</span>' +
                                                '<span class="sentence1bb3a" style="position:relative; display:none;">' + sentence1bb3a + '</span>' +
                                                '<br>'
                                                );
                                        // Ustawienie stylu dla przycisków .left-button
                                        $('.left-button').css('position', 'relative');
                                        $('.left-buttonb').css('position', 'relative');
                                        $('.left-buttonbb').css('position', 'relative');
                                        let sentencePart3 = fiszka.translateb ? fiszka.translateb : ""; // Sprawdź, czy translate istnieje
                                        let sentencePart3a = fiszka.translate ? fiszka.translate : ""; // Sprawdź, czy translate istnieje
                                        // Obsługa kliknięcia przycisku
                                        console.log('Kliknięto przycisk');
                                        let $sentence1bb3 = $sentenceDiv.find('.sentence1bb3');
                                        let $sentence1bb3a = $sentenceDiv.find('.sentence1bb3a');
                                        let $sentence1bb1 = $sentenceDiv.find('.sentence1bb1');
                                        let $sentence1bb1a = $sentenceDiv.find('.sentence1bb1a');

                                        if ($sentence1bb3.css('display') === 'none') {
                                            sentence1bVisible = false;
                                            sentence1b3aVisible = true;
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb3.css('display', 'block');
                                            $sentence1bb3.css({
                                                'display': 'block',
                                                'margin-bottom': '-25px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                        }
                                        if ($sentence1bb3a.css('display') === 'none') {
                                            // Pokazujemy zdanie .sentence1b
                                            $sentence1bb3a.css('display', 'block');
                                            $sentence1bb3a.css({
                                                'margin-top': '-0px',
                                                'top': '23px',
                                                'position': 'relative'
                                            });
                                        }
                                        $sentence1bb1.html('');
                                        $sentence1bb1.empty();
                                        $sentence1bb1a.html('');
                                        $sentence1bb1a.empty();
                                    });
                                    let sentencePart3 = fiszka.translateb ? fiszka.translateb : "";
                                    sentence1bb3 += sentencePart3 + " ";
                                    let sentencePart3a = fiszka.translate ? fiszka.translate : "";
                                    sentence1bb3a += sentencePart3a + " ";
                                    $sentenceDiv.html(
                                            '<br><button class="left-button first-button">+<br></button>' +
                                            '<span class="sentence1b">' + sentence1b + '<span class="sentence1b2">' + sentence1b2 + '</span>' +
                                            '<span class="sentence1bb1" style="position:relative; display:none;">' + sentence1bb1 + '</span>' +
                                            '<span class="sentence1bb1a" style="position:relative; display:none;">' + sentence1bb1a + '</span>' +
                                            '<br><button class="left-buttonb second-button">+<br></button>' +
                                            '<span class="sentence2b">' + sentence2b + '<span class="sentence2b2">' + sentence2b2 + '</span>' +
                                            '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                            '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                            '<br><button class="left-buttonbb third-button">+<br></button>' +
                                            '<span class="sentence3b">' + sentence3b + '<span class="sentence3b2">' + sentence3b2 + '</span>' +
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
                                            'margin-bottom': '-0px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                        console.log('sentence1bb style set to visible');
                                    }
                                    if (sentence1b3aVisible) {
                                        // Pokazujemy zdanie .sentence1bba
                                        $sentence1bb3a.css('display', 'block');
                                        $sentence1bb3a.css({
                                            'margin-bottom': '-0px',
                                            'top': '0px',
                                            'position': 'relative'
                                        });
                                    }
                            });

                        }


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
                                
                                        const containerToInsertBefore = document.querySelector(`.image-container3[data-lesson="${zeroIndex + 2}"]`);
        const newContainer = document.querySelector(`.image-container3[data-lesson="${zeroIndex + 1}"]`);

        console.log('hej17', newContainer);
        console.log('hej18', containerToInsertBefore);

        // Upewnij się, że znaleziono oba kontenery
        if (newContainer && containerToInsertBefore) {
            containerToInsertBefore.parentNode.insertBefore(newContainer, containerToInsertBefore);
            console.log('newContainer inserted before containerToInsertBefore');
        } else {
            console.error('Nie można znaleźć kontenera, przed którym należy wstawić nowy kontener lub kontener do wstawienia nie istnieje.');
        }
        
        
                const containerToRemove = $(`.image-container3[data-lesson="${zeroIndex + 1}"]`);
        console.log('hej14', containerToRemove);
        if (containerToRemove.length > 0) {
            containerToRemove.remove();
            console.log('containerToRemove removed');
        }
        
                                                                        if (buttonindex) {
                                showCombinedSentenceForLesson4(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                                console.log('wykonano'); 
                    }
                    
const $button = $('<button></button>');
$button.addClass('run-button');
$button.text('Uruchom'); // Ustawiamy tekst przycisku na 'Uruchom'

// Dodajemy atrybut 'data-index' z wartością indexDiv do przycisku
$button.attr('data-index', indexDiv);

$button.on('click', function() {
    buttonindex = true;
            const index55 = $button.attr('data-index');
            console.log('hej5', zeroIndex);
            console.log('hej6', index55);
                console.log('Kliknięto przycisk o indeksie:', index55);
            przekazArgument();
        // Usunięcie kontenera po wstawieniu nowego

});

$button.css({
    'position': 'absolute',
    'left': '50%', // Przykładowa wartość odstępu od lewej krawędzi
    'top': '10px',
    'z-index': '10' // Ustawienie z-index dla buttona większe niż dla sentenceDiv
});         
                        $container.append($button);

else {
                            function addVideo2(index) {
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
                                addBackgroundToText1b(matchingFiszki1, lessonIdToShow1, matchingIndexes, true);
                                addBackgroundToText2b(matchingFiszki2, lessonIdToShow2, matchingIndexes, true);
                                addBackgroundToText3b(matchingFiszki3, lessonIdToShow3, matchingIndexes, true);
                            }
                            addVideo2(0);

                        }
                        
                                    .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(128, 0, 128, 0.3); /* Czarne tło z przezroczystością 50% */
                z-index: 1;
                opacity: 0;
                transition: opacity 0.3s ease; /* Płynne przejście */
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
            
            const lengthDividedByThree = uniqueMatchingLessons.length / 3;

// Tworzenie tablicy indeksów od 1 do uniqueMatchingLessons.length / 3
let indices = [];
for (let i = 1; i <= lengthDividedByThree; i++) {
    indices.push(i);
}

// Wylosowanie indeksu, który będzie miał wartość 0
const zeroIndex = Math.floor(Math.random() * lengthDividedByThree);

// Wstawienie 0 na wylosowane miejsce
indices[zeroIndex] = 0;
                            for (let i = 0; i < uniqueMatchingLessons.length; i += 3) {
                                indexDiv++;
                                const lessonId1 = uniqueMatchingLessons[i];
                                const lessonId2 = uniqueMatchingLessons[i + 1];
                                const lessonId3 = uniqueMatchingLessons[i + 2];
const newIndex = indices[Math.floor(i / 3)];
console.log('hej16', zeroIndex);


index55 == newIndex

                                if (index55 !== 0) {
                                    console.log('hej126', index55);
    buttonindex = true;
}
console.log('hej155', buttonindex);
console.log('hej323', newIndex);
                                
                                                                                                        if (buttonindex && (tablica10.length <= 4 || tablica15.length === 0)) {
                                                                                                            console.log('wykonano5');
                                                                                                            console.log('hej37', index55);
                                showCombinedSentenceForLesson4(index55, lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                        console.log('wykonano');
                    }


 else if ((newIndex === 0 && tablica10.length !== 0) || (tablica10.length <= 4 && tablica10.length !== 0) && !buttonindex) {
                                    console.log('wykonuje się 10');
                                    console.log('hej22', tablica10);
                                    showCombinedSentenceForLesson3(lessonId1, lessonId2, lessonId3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray);
                                }
                                
$sentenceDiv.on('click', '.left-button', function () {
                                        // Dodawanie zdania tylko jeśli sentence1bb2 jest puste
                                        if (sentence1bb1 === "") {
                                            let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                            sentence1bb1 += sentencePart1 + " ";
                                        }
                                        if (sentence1bb1a === "") {
                                            let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                            sentence1bb1a += sentencePart1a + " ";
                                        }
                                        // Dodanie treści do diva wraz z przyciskiem
                                        $sentenceDiv.html(
                                                '<br><button class="left-button first-button">+<br></button>' +
                                                '<span class="sentence1b">' + sentence1b + '<span class="sentence1b2">' + sentence1b2 + '</span>' +
                                                '<span class="sentence1bb1" style="position:relative; display:none;">' + sentence1bb1 + '</span>' +
                                                '<span class="sentence1bb1a" style="position:relative; display:none;">' + sentence1bb1a + '</span>' +
                                                '<br><button class="left-buttonb second-button">+<br></button>' +
                                                '<span class="sentence2b">' + sentence2b + '<span class="sentence2b2">' + sentence2b2 + '</span>' +
                                                '<span class="sentence1bb2" style="position:relative; display:none;">' + sentence1bb2 + '</span>' +
                                                '<span class="sentence1bb2a" style="position:relative; display:none;">' + sentence1bb2a + '</span>' +
                                                '<br><button class="left-buttonbb third-button">+<br></button>' +
                                                '<span class="sentence3b">' + sentence3b + '<span class="sentence3b2">' + sentence3b2 + '</span>' +
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
                                        let $sentence1bb1a = $sentenceDiv.find('.sentence1bb1a');
                                        let $sentence1bb1 = $sentenceDiv.find('.sentence1bb1');
                                        if ($sentence1bb1.css('display') === 'none' || sentence1bVisible) {
                                            sentence1bVisible = true;
                                            sentence1baVisible = false;
                                            console.log('hej15', sentence1bVisible);
                                            // Pokazujemy zdanie .sentence1bb
                                            $sentence1bb1.css('display', 'block');
                                            $sentence1bb1.css({
                                                'margin-bottom': '-20px',
                                                'top': '0px',
                                                'position': 'relative'
                                            });
                                        }

                                        if ($sentence1bb1a.css('display') === 'none' || sentence1bVisible) {
                                            // Pokazujemy zdanie .sentence1bba
                                            $sentence1bb1a.css('display', 'block');
                                            $sentence1bb1a.css({
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
                                    
                                    function przekazArgument0(category, index55, buttonindex) {
    $('.grid-container .image-container3').remove();

    przyciskKlikniety = true;
    tablica10.length = 0;
    tablica15.length = 0;

    // Zbierz wszystkie unikalne kategorie z category2
    const allCategories = new Set();
    fiszki.forEach(fiszka => {
        if (Array.isArray(fiszka.category2)) {
            fiszka.category2.forEach(cat => {
                if (cat) allCategories.add(cat);
            });
        } else if (fiszka.category2) {
            allCategories.add(fiszka.category2);
        }
    });

    // Iteracja przez wszystkie unikalne kategorie
    allCategories.forEach(currentCategory => {
        globalCategory = currentCategory;
        wybierzCharakter(currentCategory, index55, buttonindex);
    });
}

// Przykład użycia funkcji
przekazArgument0(null, 55, 1);

                                function przekazArgument0(category, index55, buttonindex) {
                    $('.grid-container .image-container3').remove();
                    przyciskKlikniety = true;
                    // Przypisz wartość do zmiennej globalnej
                    globalCategory = category;
                    tablica10.length = 0;
                    tablica15.length = 0;
                    // Wywołaj funkcję wybierzCharakter
                    wybierzCharakter(undefined, index55, buttonindex);
                }
                                function wybierzCharakter(czas, index55, buttonindex) {
                    console.log('hej223', index55);
                    if (!czas) {
                        czas = 'fiszki';
                    }

                    // Aktualizuj matchingIndexes na podstawie nowej kategorii
                    matchingIndexes = findXForMatchingFiszka(globalCategory, fiszki);

                    wybierzRodzaj(globalCategory, czas, matchingIndexes, index55, buttonindex);
                    // Wyświetl na konsoli zaktualizowane matchingIndexes
                    console.log("Zaktualizowane matchingIndexes:", matchingIndexes);
                    console.log("wykonuje sie");
                    czasv2 = czas;
                    console.log('hej5', czas);
                }
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
                function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex) {
                    console.log('hej224', category);
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
                    
                                                                                        losuj = true;
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
                                        console.log("wykonuje się");
                                        funkcjaWywolana = true;
                                        
                                                                uniqueMatchingLessons.forEach(lessonId => {
                            showCombinedSentenceForLesson2(lessonId, fiszki);
                        });
                        
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
                                        console.log('hej38', fiszka);
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
                                        $sentenceDiv.html(`${sentence10}${sentence11}<br> ${sentence20}${sentence22}<br> ${sentence30}${sentence33}`);
                                        $('#insertSlashButton').on('click', function () {
                                if (!isSlashInserted) {
                                $('#sentence12').show();
                                        $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                        isSlashInserted = true;
                                }
                                });
                                        setTimeout(() => {
                                        if (isSlashInserted) {
                                        $('#sentence12').show();
                                                $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                        }
                                        }, 10);
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
                                        $sentenceDiv.html(`${sentence10}${sentence11}<br> ${sentence20}${sentence22}<br> ${sentence30}${sentence33}`);
                                        $('#insertSlashButton').on('click', function () {
                                if (!isSlashInserted) {
                                $('#sentence12').show();
                                        $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                        isSlashInserted = true;
                                }
                                });
                                        setTimeout(() => {
                                        if (isSlashInserted) {
                                        $('#sentence12').show();
                                                $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                        }
                                        }, 10);
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
                                        $sentenceDiv.html(`${sentence10}${sentence11}<br> ${sentence20}${sentence22}<br> ${sentence30}${sentence33}`);
                                        $('#insertSlashButton').on('click', function () {
                                if (!isSlashInserted) {
                                $('#sentence12').show();
                                        $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                        isSlashInserted = true;
                                }
                                });
                                        setTimeout(() => {
                                        if (isSlashInserted) {
                                        $('#sentence12').show();
                                                $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                        }
                                        }, 10);
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

                        if (index50 === 0) {
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
                        
                        function showCombinedSentenceForLesson4(lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, index50) {
                        console.log('załadowane2');
                                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                                const matchingFiszki2 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow2);
                                const matchingFiszki3 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow3);
                                setTimeout(() => {
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

                                let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                                        function addBackgroundToText11(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, aktualny) {
                                        sentence1 = "";
                                                console.log('działa1');
                                                console.log('hej1', matchingFiszki1);
                                                console.log('hej2', lessonIdToShow1);
                                                console.log('hej3', matchingIndexes);
                                                console.log('hej4', sentence1); // Użycie zmiennej sentence1
                                                console.log('hej5', currentIndexValue);
                                                for (let i = 0; i < matchingFiszki1.length; i++) {
                                        const fiszka = matchingFiszki1[i];
                                                console.log('hej38', fiszka);
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

                                        sentence10 += sentencePart + " ";
                                        }
                                        console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                                                $sentenceDiv.html(`${sentence10}<br> ${sentence20}<br> ${sentence30}`);
                                        }

                                let sentence20 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                                        function addBackgroundToText22(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, aktualny) {
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

                                        sentence20 += sentencePart + " ";
                                        }
                                        console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                                                $sentenceDiv.html(`${sentence10}<br> ${sentence20}<br> ${sentence30}`);
                                        }

                                let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym

                                        function addBackgroundToText33(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, aktualny) {
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

                                        sentence30 += sentencePart + " ";
                                        }
                                        console.log('Zawartość zmiennej sentence1:', sentence1); // Wyświetlenie zawartości zmiennej sentence1
                                                $sentenceDiv.html(`${sentence10}<br> ${sentence20}<br> ${sentence30}`);
                                        }

                                const srcWordsb = [srcWord1, srcWord2, srcWord3];
                                        let videoDurations = [];
                                        let totalDuration = 0;
                                        for (let i = 0; i < srcWordsb.length; i++) {
                                const video = document.createElement('video');
                                        video.src = srcWordsb[i];
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

                                if (index50 === 0) {
                                console.log('hej2000');
                                        // Znajdź kontener, przed którym chcesz wstawić nowy kontener
                                        const containerToInsertBefore = document.querySelector(`.image-container3[data-lesson="${indexDiv + 1}"]`);
                                        const newContainer = document.querySelector(`.image-container3[data-lesson="${indexDiv}"]`);
// Wstaw nowy kontener przed kontenerem znalezionym w poprzednim kroku
                                        if (containerToInsertBefore) {
                                containerToInsertBefore.parentNode.insertBefore(newContainer, containerToInsertBefore);
                                } else {
                                console.error('Nie można znaleźć kontenera, przed którym należy wstawić nowy kontener.');
                                }
                                console.log('Adres URL pierwszego filmu:', srcWordsb[0]);
                                        let funkcjaWywolana = false;
                                        function addVideo8(index) {
                                        console.log('hej78', index);
                                                // Sprawdź, czy jesteśmy poza zakresem tablicy

                                                if (index >= srcWordsb.length && !funkcjaWywolana) {
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
                                        'src': srcWordsb[index], // Poprawne użycie interpolacji
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
                                                        addBackgroundToText11(matchingFiszki1, lessonIdToShow1, matchingIndexes, currentIndexValue, true);
                                                                addBackgroundToText22(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                                                addBackgroundToText33(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                                        }
                                                        if (currentIndexValue[0] === 1 || currentIndexValue[0] === 2) {
                                                        addBackgroundToText22(matchingFiszki2, lessonIdToShow2, matchingIndexes, currentIndexValue, true);
                                                                addBackgroundToText33(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                                        }
                                                        if (currentIndexValue[0] === 2 || currentIndexValue[0] === 3) {
                                                        addBackgroundToText33(matchingFiszki3, lessonIdToShow3, matchingIndexes, currentIndexValue, true);
                                                        }
                                                        }

                                                        // Sprawdź, czy wideo zostało zakończone
                                                        if ($videoElement[0].duration - $videoElement[0].currentTime < 1) {
                                                        console.log('Wideo zakończone, uruchamiam następne.');
                                                                // Odtwórz następne wideo po zakończeniu poprzedniego
                                                                addVideo8(index + 1);
                                                                updateProgress2(0);
                                                        }
                                                        });
                                                });
                                                // Dodaj div z wideo do tła kontenera
                                                $vidDiv.appendTo($container);
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
                                addVideo8(0);
                                } else {
                                function setFirstFrame2() {
                                // Tworzenie nowego wideo
                                const video = document.createElement('video');
                                        video.src = srcWordsb[0]; // Ustawienie pierwszego filmu
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
                                console.log('hej555', indexDiv);
                                        function addVideo22(index) {
                                        // Sprawdź, czy jesteśmy poza zakresem tablicy
                                        console.log('hej787', index);
                                                const $vidDiv = $('<div>').addClass('background-video');
// Utwórz element <video> i ustaw atrybuty
                                                const $videoElement = $('<video>').attr({
                                        'muted': true, // Wyciszenie dźwięku wideo
                                                'loop': true      // Zapętlenie wideo
                                        });
                                                // Zatrzymaj odtwarzanie wideo


// Utwórz element <source> dla wideo i ustaw atrybuty
                                                const $sourceElement = $('<source>').attr({
                                        'src': srcWordsb[index], // Poprawne użycie interpolacji
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
                                                        addVideo22(index + 1);
                                                }
                                                });
                                                // Dodaj div z wideo do tła kontenera
                                                $vidDiv.appendTo($container);
                                                // Jeśli kontener nie został jeszcze wybrany, wybierz losowy kontener

                                        }
                                addVideo22(0);
                                }

                                // Pobierz pierwszy element .image-container
                                var $sentenceDiv = $('<div></div>'); // Utwórz nowy element div za pomocą jQuery
                                        $sentenceDiv.addClass('sentence');
                                        $sentenceDiv.html(`${sentence10}<br> ${sentence20}<br> ${sentence30}`);
                                        $sentenceDiv.css({
                                        'position': 'absolute',
                                                'font-size': '18px',
                                                'bottom': '0',
                                                'text-align': 'center',
                                                'z-index': '1'
                                        });
                                        // Dodaj div z zdaniem do kontenera
                                        $sentenceDiv.appendTo($container);
                                        tablica15.push(srcWords);
                                        console.log('hej51', tablica15);
                                }
                                }, 0);
                                // Deklaracja tablicy, która będzie zawierać wszystkie tablice
                        }
                        
                        let sentence10 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                        let sentence11 = "";
                        let sentence12 = " / ";
                        let sentence1bb1 = "";
                        function addBackgroundToText(matchingFiszki10, matchingIndexes, currentIndexValue, aktualny, lesson1PartLength) {
                                    console.log('hej111');
                        sentence10 = "";
                                sentence1bb1 = "";
                                console.log('hej10');
                                console.log('Rozpoczęcie funkcji addBackgroundToText');
                                console.log('matchingFiszki1:', matchingFiszki10);
                                console.log('lessonIdToShow1:', lessonIdToShow1);
                                console.log('matchingIndexes:', matchingIndexes);
                                console.log('currentIndexValue:', currentIndexValue);
                                console.log('aktualny:', aktualny);
                                for (let i = 0; i < matchingFiszki10.length; i++) {
                        const fiszka = matchingFiszki10[i];
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
                                let sentencePart1 = fiszka.translate ? fiszka.translate : "";
                                sentence1bb1 += sentencePart1 + " ";
                                let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                sentence1bba += sentencePart1a + " ";
                                console.log('hej45', sentencePart1);
                                // Dodaj element do DOM, jeśli jeszcze go nie ma
                                if ($sentenceDiv.find('.sentence1bb1').length === 0) {
                        $sentenceDiv.append('<div class="sentence1bb1"></div>');
                        }
                        let $sentence1bb1 = $sentenceDiv.find('.sentence1bb1');
                                let $sentence1bba = $sentenceDiv.find('.sentence1bba');
                                // Ustawienie widoczności i stylu dla .sentence1bb
                                // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany
                                if (!sentence1bVisible) {
                        $sentence1bb1.css({
                        'display': 'block',
                                'margin-bottom': '50px',
                                'top': '20px',
                                'position': 'relative'
                        });
                                console.log('sentence1bb style set to visible');
                        }
                        $sentence1bb1.html(sentence1bb1);
                                if (!sentence1bVisible) {
                        // Pokazujemy zdanie .sentence1bba
                        $sentence1bba.css('display', 'block');
                                $sentence1bba.css({
                                'margin-bottom': '-0px',
                                        'top': '0px',
                                        'position': 'relative'
                                });
                        }
                        } else if (matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
                        console.log('działa255', matchingIndexes.includes(indexToCheck));
                                const spanElement = document.createElement('span');
                                spanElement.innerHTML = sentencePart; // Użyj innerHTML zamiast textContent
                                if (!spanElement.classList.contains('highlighted-sentence')) {
                        spanElement.classList.add('yellow');
                                spanElement.classList.add('highlighted-sentence');
                        }
                        sentencePart = spanElement.outerHTML;
                                                        if ($sentenceDiv.find('.sentence1bba').length === 0) {
                        $sentenceDiv.append('<div class="sentence1bba"></div>');
                        }
                                let sentencePart1a = fiszka.translateb ? fiszka.translateb : "";
                                sentence1bba += sentencePart1a + " ";
                                                        console.log('hej1515', sentence1bba);
                                // Dodaj element do DOM, jeśli jeszcze go nie ma
                                let $sentence1bba = $sentenceDiv.find('.sentence1bba');
                                // Ustawienie widoczności i stylu dla .sentence1bb
                                // Spróbuj ustawić styl po pewnym czasie, aby upewnić się, że element jest w pełni renderowany


                        // Pokazujemy zdanie .sentence1bba
                        $sentence1bba.css({
                        'display': 'block',
                                'margin-bottom': '-0px',
                                        'top': '0px',
                                        'position': 'relative'
                                });
                                                                                        $sentence1bba.html(sentence1bba);
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

                                sentence11 = "";
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
                        // Dodaj sentence1bb tutaj
                        console.log('final sentence11:', sentence11);
                                $sentenceDiv.html(`<button class="left-button first-button">+<br></button>${sentence10}${sentence12}${sentence11}<br><div class="sentence1bba">${sentence1bba}</div><br><button class="left-buttonb second-button">+<br></button>${sentence20}${sentence22}<br><div class="sentence1bb1b">${sentence1bb1b}</div><br> ${sentence30}${sentence33}<br><span class="sentence1bb3>' + sentence1bb3 + '</span><div class="sentence1bb1c">${sentence1bb1c}</div>`);
                                $('#insertSlashButton').on('click', function () {
                        if (!isSlashInserted) {
                        $('#sentence12').show();
                                $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                isSlashInserted = true;
                        }
                        });
                                setTimeout(() => {
                                if (isSlashInserted) {
                                $('#sentence12').show();
                                        $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                }
                                }, 10);
                        }
                        
                                                var $sentenceDiv = $('<div></div>');
                                $sentenceDiv.addClass('sentence'); // Dodanie klasy 'sentence'
                                $sentenceDiv.html(`<button class="left-button first-button">+<br></button>${sentence10}${sentence12}${sentence11}<br><div class="sentence1bba">${sentence1bba}</div><br> <button class="left-button second-button">+<br></button>${sentence20}${sentence22}<br><div class="sentence1bb1b">${sentence1bb1b}</div><br> ${sentence30}${sentence33}<br><span class="sentence1bb3>' + sentence1bb3 + '</span><div class="sentence1bb1c">${sentence1bb1c}</div>`);
                                $sentenceDiv.css({
                                'position': 'absolute',
                                        'font-size': '18px',
                                        'bottom': '0',
                                        'text-align': 'center',
                                        'z-index': '5'
                                });
                                
                                                                $container.append($sentenceDiv);
                                                                
                                                                                                            $sentence1bb1.html(sentence1bb1);
                                                                                                            
                                                                                                                                        $('#insertSlashButton').on('click', function () {
                                if (!isSlashInserted) {
                                    $('#sentence12').show();
                                    $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                    isSlashInserted = true;
                                }
                            });
                            setTimeout(() => {
                                if (isSlashInserted) {
                                    $('#sentence12').show();
                                    $sentenceDiv.html(`${sentence10}${sentence12}${sentence11}<br>${sentence20}${sentence12}${sentence22}<br>${sentence30}${sentence12}${sentence33}`);
                                }
                            }, 10);
                            
                            let sentence1b2 = "";
                        let sentence1b22 = "";
                        let sentence1bb1b = "";
                        function addBackgroundToText2(matchingFiszki2, matchingIndexes, currentIndexValue, aktualny, lesson2FirstPartLength, lesson2PartLength) {
                            sentence20 = "";
                            sentence22 = "";
                            sentence1b2 = "";
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
                                sentence1b2 += sentencePart333 + " ";
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
                            if (sentence1b2 === "") {
                                let sentencePart333 = fiszka.translateb ? fiszka.translateb : "";
                                sentence1b2 += sentencePart333 + " ";
                            }
                            if (sentence1b22 === "") {
                                let sentencePart444 = fiszka.translate ? fiszka.translate : "";
                                sentence1b22 += sentencePart444 + " ";
                            }
                            console.log('hej20', sentence1bba);
                            // Dodanie treści do diva wraz z przyciskiem
                            $sentenceDivB.html(`
    ${sentence10}${sentence12}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    ${sentence20}${sentence22}<br>
    <div class="sentence1b2">${sentence1b2}</div>
    <div class="sentence1b22">${sentence1b22}</div>
    ${sentence30}${sentence33}<br>
    <span class="sentence1bb3">${sentence1bb3}</span>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
`);
                            if (currentIndexValue == 1) {
                                sentence1bVisible = true;
                                sentence1baVisible = false;
                                console.log('hej15', sentence1bVisible);
                                // Pokazujemy zdanie .sentence1bb
                                $sentence1b2.css('display', 'block');
                                $sentence1b2.css({
                                    'margin-bottom': '-20px',
                                    'top': '0px',
                                    'position': 'relative'
                                });
                            }
                            if (currentIndexValue == 1) {
                                console.log('hej15', sentence1bVisible);
                                // Pokazujemy zdanie .sentence1bb
                                $sentence1b22.css('display', 'block');
                                $sentence1b22.css({
                                    'margin-bottom': '-20px',
                                    'top': '0px',
                                    'position': 'relative'
                                });
                            }
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
    <button class="left-button first-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <span class="sentence1bb3">${sentence1bb3}</span>
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
    <button class="left-button first-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <span class="sentence1bb3">${sentence1bb3}</span>
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
                                }, 0);
                            });
                        }

                        let sentence30 = ""; // Deklaracja zmiennej sentence1 na poziomie lokalnym
                        let sentence33 = "";
                        let sentence1bb1c = "";
                        function addBackgroundToText3(matchingFiszki3, matchingIndexes, currentIndexValue, aktualny, lesson3FirstPartLength, lesson3PartLength) {
                            sentence30 = "";
                            sentence33 = "";
                            sentence1bb1c = "";
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
    ${sentence10}${sentence12}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
    ${sentence30}${sentence33}<br>
    <span class="sentence1bb3">${sentence1bb3}</span>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
`);
                        }


                        let sentence3b = "";
                        let sentence3b2 = "";
                        let sentence1bb3 = "";
                        function addBackgroundToText3b(matchingFiszki3, matchingIndexes, aktualny, lesson3PartLength) {
                            $(document).ready(function () {

                                sentence3b = "";
                                sentence3b2 = "";
                                sentence1bb3 = "";
                                setTimeout(() => {
                                    for (let l = 0; l < matchingFiszki3.length; l++) {
                                        const fiszka = matchingFiszki3[l];
                                        console.log('fiszka:', fiszka);
                                        if (!fiszka.sentence1 || fiszka.sentence1.length === 0) {
                                            console.log('fiszka.sentence11 is undefined or empty');
                                            continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                        }
                                        // Iteracja przez elementy sentence1
                                        for (let lm = 0; lm < fiszka.sentence1.length; lm++) {
                                            let sentencePart = fiszka.sentence1[lm];
                                            console.log('sentencePart55:', sentencePart);
                                            const indexToCheck = l + lesson3PartLength + 1;
                                            console.log('indexToCheck55:', indexToCheck);
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

                                            sentence30 += sentencePart + " ";
                                            console.log('hej18', sentence3b);
                                        }
                                    }
                                    for (let lmm = 0; lmm < matchingFiszki3.length; lmm++) {
                                        const fiszka = matchingFiszki3[lmm];
                                        console.log('fiszka2:', fiszka);
                                        if (!fiszka.sentence2 || fiszka.sentence2.length === 0) {
                                            console.log('fiszka.sentence22 is undefined or empty');
                                            continue;
                                        }
                                        // Iteracja przez elementy sentence2
                                        for (let lmn = 0; lmn < fiszka.sentence2.length; lmn++) {
                                            let sentencePart2 = fiszka.sentence2[lmn];
                                            const indexToCheck = lmm + lesson3PartLength + 1;
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

                                            sentence33 += sentencePart2 + " ";
                                            console.log('hej18b', sentence3b2);
                                        }
                                    }
                                    for (let li = 0; li < matchingFiszki3.length; li++) {
                                        const fiszka = matchingFiszki3[li];
                                        console.log('fiszka:', fiszka);
                                        let sentencePart3 = fiszka.translateb;
                                        console.log('sentencePart3:', sentencePart3);
                                        if (aktualny) {
                                            // Sprawdzenie, czy indeks bieżącej fiszki znajduje się w tablicy matchingIndexes
                                            const spanElement = document.createElement('span');
                                            spanElement.textContent = sentencePart3;
                                            sentencePart3 = spanElement.outerHTML;

                                        }
                                        sentence1bb3 = sentencePart3 + " ";
                                    }
                                    $sentenceDiv.html(`
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence12}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <button class="left-buttonb second-button">+<br></button>
    ${sentence20}${sentence22}<br>
    <div class="sentence1bb1b">${sentence1bb1b}</div>
    <div class="sentence1bba2">${sentence1bba2}</div>
    <button class="left-button first-button">+<br></button>
    ${sentence30}${sentence33}<br>
    <span class="sentence1bb3">${sentence1bb3}</span>
    <div class="sentence1bb1c">${sentence1bb1c}</div>
`);
                                }, 0);
                            });
                        }
                        
                        
                                                if (czas === 'zdania' && czas !== 'fiszki') {
                            // Wyświetl pojedyncze zdania dla znalezionych lekcji
                            console.log('Warunek czas === "fiszki" jest spełniony');
                            $('.grid-container .image-container3').remove();
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
                                console.log('hej166');

                                for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = indices[Math.floor(i)];
                                    const index50 = indices2[Math.floor(i)];
                                    console.log('hej166', index50);


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
                                        indexDiv: indexDiv
                                    };

                                    // Dodawanie obiektu do tablicy lekcji
                                    lessonsArrayA.push(lessonObjectA);
                                    console.log('hej333', lessonObjectA);
                                    if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                        const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                        if (containerToRemove.length > 0) {
                                            containerToRemove.remove();
                                        }
                                    }


                                    // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                    console.log('hej558', lessonsArrayA);
                                    console.log('hej40', newIndex); // Wyświetl wartość startIndex
                                    console.log('hej79', tablica15);
                                    console.log('wykonuje się 7');
                                    console.log('hej155', buttonindex);
                                    console.log('hej323', index55);

                                    console.log('hej344');
                                    if ((tablica15.length <= 30 || tablica15.length === 0)) {
                                        console.log('wykonuje się 8');
                                        console.log('hej32', newIndex);
                                        console.log('hej188', tablica15);
                                        showCombinedSentenceForLesson2(index50, lessonId1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength);

                                    }
                                }
                                            function showCombinedSentenceForLesson2(index50, lessonIdToShow1, lessonIdToShow2, lessonIdToShow3, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArray, lesson1PartLength, lesson2PartLength, lesson3PartLength, lesson1Sentences, lesson2Sentences, lesson3Sentences, lesson1FirstPartLength, lesson2FirstPartLength, lesson3FirstPartLength, lesson1SecondPartLength, lesson2SecondPartLength, lesson3SecondPartLength, cumulativeFirstPartLength1, cumulativeFirstPartLength2, cumulativeFirstPartLength3) {

                        
                        
                                                    const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                            $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                            $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                            // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                            $container.attr('data-lesson', indexDiv);
                            $('.grid-container').append($container);
                            return countVisibleContainers();
                            
                                                            const lengthDividedByThree = uniqueMatchingLessons.length;
    // Tworzenie tablicy indeksów od 1 do uniqueMatchingLessons.length / 3
                                let indices = [];
                                for (let i = 1; i <= lengthDividedByThree; i++) {
                                    indices.push(i);
                                }
                                console.log('hej12', indices2);
    // Wylosowanie indeksu, który będzie miał wartość 0
                                const zeroIndex = Math.floor(Math.random() * lengthDividedByThree);
    // Wstawienie 0 na wylosowane miejsce
                                indices[zeroIndex] = 0;
                                console.log('hej166');

                                for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = indices[Math.floor(i)];
                                    
                                    function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex) {
                        console.log('hej224', czas);
                        category = category || globalCategory;
                        czasv2 = czas;
                        console.log("Wybrany rodzaj słownictwa: " + category);
                        console.log('hej5', czas); // Wybierz 'fiszki' dla 10 minut
                        console.log('hej755', matchingIndexes); // Dodano logowanie matchingIndexes

                        const matchingLessons = new Set(); // Użyj obiektu Set do przechowywania unikalnych wartości
                        // Iteracja przez fiszki
                        for (const fiszka of fiszki) {
                            // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                            let matchingFiszka;
                            // Sprawdzenie, czy wybrano wszystkie kategorie
                            if (category === 'all' || !category) {
                                matchingFiszka = true;
                            } else {
                                // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                                matchingFiszka = fiszka.category2.includes(category);
                            }
                            console.log('hej28', category);
                            // Jeśli znaleziono pasującą fiszkę, dodaj numer lekcji do zestawu matchingLessons
                            if (matchingFiszka) {
                                matchingLessons.add(fiszka.id[1]);
                                console.log('hej8', matchingLessons);
                            }
                        }
                        const uniqueMatchingLessons = Array.from(matchingLessons);
                        console.log('hejxxxxxxxxxxxxxxxxx', uniqueMatchingLessons);

                        if (czas === 'zdania' && czas !== 'fiszki') {
                            // Wyświetl pojedyncze zdania dla znalezionych lekcji
                            console.log('Warunek czas === "fiszki" jest spełniony');
                            $('.grid-container .image-container3').remove();
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
    // Tworzenie tablicy indeksów od 1 do uniqueMatchingLessons.length / 3

                                let indices = [];
                                for (let i = 1; i <= lengthDividedByThree; i++) {
                                    indices.push(i);
                                }
                                console.log('hej24', indices);

// Tworzenie tablicy visibleIndexes jako klon indices
let visibleIndexes = [];
console.log('hej2222', visibleIndexes);
console.log('visibleIndexes after copying indices:', visibleIndexes);

// Wylosowanie indeksu, który będzie miał wartość 0 (z zakresu od 0 do visibleIndexes.length - 1)
const zeroIndex = Math.floor(Math.random() * visibleIndexes.length);

// Wstawienie 0 na wylosowane miejsce w visibleIndexes
visibleIndexes.splice(zeroIndex, 0, 0);
                                const zeroIndex2 = index55 - 1;
    // Wstawienie 0 na wylosowane miejsce
                                indices2[zeroIndex2] = 0;
                                console.log('hej166');

                                for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = visibleIndexes[i];
                                    const index50 = indices2[Math.floor(i)];
                                    console.log('hej166', newIndex);


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
                                        indexDiv: indexDiv
                                    };

                                    // Dodawanie obiektu do tablicy lekcji
                                    lessonsArrayA.push(lessonObjectA);
                                    console.log('hej3334', lessonObjectA);
                                    if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                        const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                        if (containerToRemove.length > 0) {
                                            containerToRemove.remove();
                                        }
                                    }


                                    // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                    console.log('hej558', lessonsArrayA);
                                    console.log('hej40', newIndex); // Wyświetl wartość startIndex
                                    console.log('hej79', tablica15);
                                    console.log('wykonuje się 7');
                                    console.log('hej155', buttonindex);
                                    console.log('hej323', index55);

                                    console.log('hej344');
                                    if ((tablica15.length <= 30 || tablica15.length === 0)) {
                                        console.log('wykonuje się 8');
                                        console.log('hej321', newIndex);
                                        console.log('hej188', tablica15);
                                        showCombinedSentenceForLesson2(index50, lessonId1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength);
                                    }
                                }
                                console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
    // Sprawdź, czy dodano odpowiednią liczbę divów
                                const numberOfContainers = $('.image-container3').length;
                                console.log('Liczba dodanych divów:', numberOfContainers);
                            }
                        }
                                // Dodaj log do sprawdzenia, czy widoczne indeksy są zbierane poprawnie
        console.log('Visible indexes:', visibleIndexes);
        
        function countVisibleContainers() {
    // Resetowanie globalnej tablicy przed dodaniem nowych wartości
    let visibleIndexes = [];

    // Pobierz wszystkie kontenery z klasą 'image-container4'
    const $containers = $('.grid-container .image-container4');

    // Iteruj przez kontenery
    $containers.each(function(index) {
        const containerRect = this.getBoundingClientRect();
        const isVisible = (
            containerRect.top >= 0 &&
            containerRect.left >= 0 &&
            containerRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            containerRect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        // Dodaj tymczasowe logowanie, aby sprawdzić isVisible
        console.log(`Kontener ${index} jest widoczny:`, isVisible);

        // Jeśli kontener jest widoczny, dodaj jego indeks do globalnej tablicy
        if (isVisible) {
            visibleIndexes.push(index);
            
            // Jeśli dodano 4 nowe widoczne indeksy, wywołaj inną funkcję
            if (visibleIndexes.length % 4 === 0) {
                otherFunction(visibleIndexes);
            }
        }
    });
                    console.log('Visible indexes:', visibleIndexes);
}


// Funkcja otherFunction z przekazanymi indeksami
function otherFunction(indexes) {
    const czas = 'zdania';
    console.log('Przekazane indeksy do otherFunction:', indexes);
    przekazArgument0(category, undefined, true, czas);
}
                    function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex) {

if (czas === 'zdania' && czas !== 'fiszki') {
                            // Wyświetl pojedyncze zdania dla znalezionych lekcji
                            console.log('Warunek czas === "fiszki" jest spełniony');
                            $('.grid-container .image-container3').remove();
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
                                // Funkcja countVisibleContainers zwraca tablicę widocznych indeksów

                                    // Tworzenie tablicy indeksów od 1 do uniqueMatchingLessons.length / 3
const zeroIndex = Math.floor(Math.random() * visibleIndexes.length);
indices[zeroIndex] = 0;
                                const zeroIndex2 = index55 - 1;
    // Wstawienie 0 na wylosowane miejsce
                                indices2[zeroIndex2] = 0;
                                console.log('hej166');

                                for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = indices[Math.floor(i)];
                                    const index50 = indices2[Math.floor(i)];
                                    console.log('hej166', newIndex);


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
                                        indexDiv: indexDiv
                                    };

                                    // Dodawanie obiektu do tablicy lekcji
                                    lessonsArrayA.push(lessonObjectA);
                                    console.log('hej3334', lessonObjectA);
                                    if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                        const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                        if (containerToRemove.length > 0) {
                                            containerToRemove.remove();
                                        }
                                    }


                                    // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                    console.log('hej558', lessonsArrayA);
                                    console.log('hej40', newIndex); // Wyświetl wartość startIndex
                                    console.log('hej79', tablica15);
                                    console.log('wykonuje się 7');
                                    console.log('hej155', buttonindex);
                                    console.log('hej323', index55);

                                    console.log('hej344');
                                    if ((tablica15.length <= 30 || tablica15.length === 0)) {
                                        console.log('wykonuje się 8');
                                        console.log('hej321', newIndex);
                                        console.log('hej188', tablica15);
                                        showCombinedSentenceForLesson2(index50, lessonId1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength);
                                    }
                                }
                                console.log('Aktualna zawartość tablicy lessonsArray:', lessonsArray);
    // Sprawdź, czy dodano odpowiednią liczbę divów
                                const numberOfContainers = $('.image-container3').length;
                                console.log('Liczba dodanych divów:', numberOfContainers);
                            }
                        }
                    }
                    
                                                    let indices2 = [];
                                for (let i = 1; i <= lengthDividedByThree; i++) {
                                    indices2.push(i);
                                }
                                                                const zeroIndex2 = index55 - 1;
    // Wstawienie 0 na wylosowane miejsce
                                indices2[zeroIndex2] = 0;
                                console.log('hej166');
                                
function showCombinedSentenceForLesson2(index50, lessonIdToShow1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength) {
             
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
                                }
                                addVideo1(0);
                            } else if
                            
                                                        const srcWord1b = pobierzSrcWordDlaLekcji3(lessonIdToShow1, fiszki);
                                                        
                                                                                    function pobierzSrcWordDlaLekcji3(lessonId, fiszki) {
    const matchingFiszka = fiszki.find(fiszka => fiszka.id[1] === lessonId);
    return matchingFiszka ? matchingFiszka.srcWord[1] : null; // Zwracamy srcWord[1] zamiast srcWord
}

                            const $container = $('<div></div>'); // Tworzymy nowy element div za pomocą jQuery
                            $container.addClass('image-container3'); // Dodajemy klasę do nowego diva
                            $container.css('position', 'relative'); // Ustawiamy pozycję diva na relative

                            // Możesz również dodać dodatkowe atrybuty, takie jak 'data-lesson'
                            $container.attr('data-lesson', indexDiv);
                            $('.grid-container').append($container);
                            
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

                            if (newIndex === 0 && !buttonindex && newIndex !== undefined && newIndex !== null) {
                                
                                
                                let previousVisibleIndexes = [];
let indexes = [];
let timeoutId = null;
let lastChangeTime = 0;
let isFirstCall = true;
function countVisibleContainers() {
    indexes = [];

    $('.grid-container .image-container4').each(function(index) {
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
    if (indexes.length >= 8 && !timeoutId) {
        // Sprawdź czy 4 kontenery są widoczne przez co najmniej 500ms z rzędu
        if (elapsedTime >= 800) {
            // Ustaw timeout na 300ms po spełnieniu warunku
            timeoutId = setTimeout(() => {
                previousVisibleIndexes = [...indexes]; // kopiowanie tablicy indexes do previousVisibleIndexes
                console.log('Aktualne widoczne indeksy:', indexes);
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
                            }
                            
                                {
        id: [
            11,
            2
        ],
        img: [
            "http://localhost/arbulanguage.com/img/fiszki1/1e.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/1e2.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/1e3.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/1e4.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/1e5.jpg"
        ],
        word: [
            "http://localhost/arbulanguage.com/src/science.wav"
        ],
        story: [
            "Ma<u><b>sa</u></b>j wedle <u><b>nauk</u></b> - uczy w jaki sposób zwiększyć szanse sportowca i wpłynąć na jego s<u><b>ens</u></b>orykę",
            "<u><b>Sa</u></b>m idę przez las i przygotowuję się do obrony doktoratu. Dla potrzeb <u><b>nauki</u></b> <u><b>j</u></b>eszcze muszę w<u><b>ensz</u></b>yć za odpowiednimi zdjęciami",
            "Badacz <u><b>naukowy</u></b> nie ma <u><b>saj</b></u>gonu w dziedzinie nauki i ma s<u><b>ens</b></u> tego co robi",
            "<u><b>Saj</u></b>gon jest w pracy, ten dzień nie ma sensu, a jeszcze muszę się uczyć na zaoczne z tematu badań <u><b>naukowych</u></b>",
            "Najlepiej nie mieć <u><b>saj</u></b>gonu jako <u><b>naukowiec</u></b>, a także być s<u><b>ens</u></b>ualnym kochankiem"
        ],
        desc: "science[sajens] - nauka(dziedzina badawcza:nauka)",
        sentence2: [
            "science"
        ],
        sentence: [
            "to",
            "science",
            "procedure"
        ],
        key: "science",
        category1: [
            "sport", "sztuki walki",
            "natura", "",
            "nauka", "samodyscyplina",
            "czarny humor", "planowanie",
            "związki", "planowanie"
        ],
        category2: ["dziedziny"]
    },
            
                {
        id: [
            24,
            4
        ],
        img: [
            "http://localhost/arbulanguage.com/img/fiszki1/4f.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/4f.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/4f.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/4f.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/4f.jpg"
        ],
        story: [
            "</u></b>Der<u><b>ek <u><b>odważył się </u></b> zrobić salto",
            "<u><b>Der</u></b>matolog przestrzega, aby nie zdobywać się na <u><b>odwagę</u></b> chodzić do dżungli",
            "Na</u></b>der<u><b> oczywiste jest, że <u><b>odwaga</u></b> w głoszeniu poglądów jest dla naukowca bardzo ważna",
            "</u></b>Der<u><b>by tych klubów spowodowały zadymy na meczu, każdy był <u><b>odważny</u></b>",
            "Pewien imprezowicz <u><b>odważył się</u></b> wejść na duże wia<u><b>der</u></b>ko i kręci bio<u><b>der</u></b>kami"
        ],
        desc: "daring[dering] - odważył się",
        sentence2: [
            "dare"
        ],
        sentence: [
            "but",
            "sometimes",
            "daring"
        ],
        key: "dare",
        category1: [
            "sport", "gimnastyka",
            "natura", "medycyna",
            "nauka", "cechy charakteru",
            "czarny humor", "kibic",
            "związki", "impreza"
        ],
        category2: ""
    },
                {
        id: [
            30,
            5
        ],
        img: [
            "http://localhost/arbulanguage.com/img/fiszki1/3f.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/3f2.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/3f3.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/3f4.jpg",
            "http://localhost/arbulanguage.com/img/fiszki1/3f5.jpg"
        ],
        story: [
            "",
            "Ludzie powiedzieli, że jeżeli pewien gociu wspiął się na szczyt to <u><b>Him</u></b>alaje są <u><b>jego</u></b>",
            "",
            "Henek wybiera się w <u><b>Him</u></b>alaje a wszyscy wiedzą, że <u><b>jego</u></b> doświadczenie pomoże mu przeżyć",
            "Koleżanka Joa<u><b>him</u></b>a wspiera <u><b>jego</u></b> projekt"
        ],
        desc: "him[him] - jego",
        sentence2: [
            "it"
        ],
        sentence: [
            "and",
            "hugs",
            "it"
        ],
        key: "him",
        category1: [
            "sport", "",
            "natura", "osiągnięcia",
            "nauka", "",
            "czarny humor", "wspinaczka",
            "związki", "wsparcie"
        ],
        category2: ["zaimkiosobowe"]
    },
                {
        id: [
            39,
            7
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/7c.jpg",
        story: "<b><u>Start</b></u>uje z udawaniem węża.. <b><u>ssssss</b></u>",
        desc: "starts[starts] - zacząć",
        sentence1: [
            "starts"
        ],
        sentence: [
            "My",
            "company",
            "starts"
        ],
        key: "starts",
        category1: "natura",
        category2: ["podmiot+czas", "czasownik"]
    },
                    id: [
            51,
            9
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/9c.jpg",
        story: "Ten <b><u>sel</b></u>er łatwo jest <b><u>sprzedać</b></u> na targu",
        desc: "sell[sel] - sprzedać",
        sentence1: [
            "sell"
        ],
        sentence: [
            "My",
            "neighbours",
            "are",
            "selling"
        ],
        key: "sell",
        category1: "związki",
        category2: ["podmiot+czas", "czasownik"]
    },
                {
        id: [
            90,
            15
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/15f.jpg",
        story: "Ośrodek <b><u>WORD</b></u> to Wojewódzki Ośrodek Ruchu Drogowego - taka <b><u>s</b></u>zkoła",
        desc: "words[łords] - słowa/słów",
        sentence2: [
            "words"
        ],
        sentence: [
            "range",
            "of",
            "words"
        ],
        key: "words",
        category1: "nauka",
        category2: "transport, "
    },
                {
        id: [
            93,
            16
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/16d.jpg",
        story: "Suczce <b><u>K</b></u>alina nie wolno sa<b><u>mej</b></u> ściągac jedzenia ze stołu, nie wolno jej tego <b><u>robić</b></u>",
        desc: "make[mejk] - zrobić",
        sentence2: [
            "make"
        ],
        sentence: [
            "to",
            "approach",
            "her"
        ],
        key: "make",
        category1: "nauka",
        category2: ["czasownik"]
    },
                {
        id: [
            95,
            16
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/16f.jpg",
        story: [
            "<u><b>Dla</u></b> spor<u><b>tu</b></u> przeszedłem się pieszo z domu do pracy",
            "<b><u>Tu</b></u> na tym polu, Totalnie nie brakuje mi nic do mistrza",
            "<b><u>Tu</b></u> w Egipcie Totem Faraona to pamiątka <u><b>dla</u></b> podróżników",
            "Aaaa.. <b><u>tu</b></u> to jest, to dla mojego kolegi"
        ],
        desc: "to[tu] - do",
        sentence2: [
            "to"
        ],
        sentence: [
            "make",
            "approach",
            "to",
            "her"
        ],
        key: "to",
        category1: "nauka",
        category2: "transport, "
    },
                {
        id: [
            96,
            16
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/16g.jpg",
        story: "<u><b>Jej</u></b> <u><b>her</u></b>batka jest bardzo słodka",
        desc: "her[her] - jej/niej",
        sentence2: [
            "her"
        ],
        sentence: [
            "make",
            "approach",
            "to",
            "her"
        ],
        key: "her",
        category1: "nauka",
        category2: ["zaimkiosobowe"]
    },
                {
        id: [
            146,
            24
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/25i.jpg",
        story: "<b><u>H</b></u>umanizm to cecha <b><u>człowieka</b></u>, który już nie myśli tylko o sobie. To taka <b><u>men</b></u>talność",
        desc: "human[hjumen] - człowiek",
        sentence2: [
            "human"
        ],
        sentence: [
            "is",
            "my",
            "human",
            "face"
        ],
        key: "human",
        category1: "nauka",
        category2: "transport, "
    },
    {
        id: [
            147,
            24
        ],
        img: "http://localhost/arbulanguage.com/img/fiszki1/25j.jpg",
        story: "<b><u>Fejs</b></u>buk to inaczej książka <b><u>twarzy</b></u>",
        desc: "face[fejs] - twarz",
        sentence2: [
            "face"
        ],
        sentence: [
            "is",
            "my",
            "human",
            "face"
        ],
        key: "face",
        category1: "nauka",
        category2: ["body"]
    },
            
                                function addBackgroundToText22(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1PartLength) {
                                setTimeout(function () {
                                        sentence10 = "";
                                    sentence11 = "";
                                                    for (let i = 0; i < matchingFiszki1.length; i++) {
                                        const fiszka = matchingFiszki1[i];
                                        console.log('fiszka:', fiszka);
                                        if (!fiszka.sentence1b || fiszka.sentence1b.length === 0) {
                                            console.log('fiszka.sentence1 is undefined or empty');
                                            continue; // Jeśli sentence1 nie istnieje lub jest puste, przejdź do następnej fiszki
                                        }

                                        // Iteracja przez elementy sentence1
                                        for (let ki = 0; ki < fiszka.sentence1b.length; ki++) {
                                            let sentencePart = fiszka.sentence1b[ki];
                                            console.log('sentencePart5:', sentencePart);
                                            const indexToCheck = i + lesson1PartLength + 1;
                                            console.log('indexToCheck5:', indexToCheck);
                                            if (aktualny) {
                                                if (!matchingIndexes.includes(indexToCheck) && currentIndexValue == 0) {
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
                                        if (!fiszka.sentence2b || fiszka.sentence2b.length === 0) {
                                            console.log('fiszka.sentence2 is undefined or empty');
                                            continue;
                                        }

                                        // Iteracja przez elementy sentence1
                                        for (let kii = 0; kii < fiszka.sentence2b.length; kii++) {
                                            let sentencePart2 = fiszka.sentence2b[kii];
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

                                            console.log('sentencePart2b po przetworzeniu:', sentencePart2);
                                            sentence11 += sentencePart2 + " ";
                                        }
                                    }

                                                $sentenceDivB.html(`
        ${sentence10}${sentence11}<br>
    `);
                                }, 0);
                            
                        }
                        
                        function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex, polski) {
                            
                                                            for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = indexes[Math.floor(i)];
                                    const index50 = indices2[Math.floor(i)];
                                    console.log('hej166', newIndex);


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
                                        indexDiv: indexDiv
                                    };

                                    // Dodawanie obiektu do tablicy lekcji
                                    lessonsArrayA.push(lessonObjectA);
                                    console.log('hej3334', lessonObjectA);
                                    if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                        const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                        if (containerToRemove.length > 0) {
                                            containerToRemove.remove();
                                        }
                                    }


                                    // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                    console.log('hej558', lessonsArrayA);
                                    console.log('hej40', newIndex); // Wyświetl wartość startIndex
                                    console.log('hej79', tablica15);
                                    console.log('wykonuje się 7');
                                    console.log('hej155', buttonindex);
                                    console.log('hej323', index55);

                                    console.log('hej344');
                                    if ((tablica15.length <= 30 || tablica15.length === 0)) {
                                        console.log('wykonuje się 8');
                                        console.log('hej321', newIndex);
                                        console.log('hej188', polski);
                                        console.log('hej4444', polski);
                                        showCombinedSentenceForLesson2(polski, index50, lessonId1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength);
                                    
                    }
                                }
                        }
                        
                                                if (czas === 'zdania' && czas !== 'fiszki') {
                            // Wyświetl pojedyncze zdania dla znalezionych lekcji
                            console.log('hej3335', polski);
                            console.log('Warunek czas === "fiszki" jest spełniony');
                            $('.grid-container .image-container3').remove();
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
// Sprawdź czy tablica indexes nie jest pusta i czy istnieje poprzednie zero do skasowania
if (indexes.length > 0 && indexes.includes(0)) {
    // Znajdź indeks poprzedniego zera
    const previousZeroIndex = indexes.findIndex(value => value === 0);
    // Skasuj poprzednie zero
    indexes.splice(previousZeroIndex, 1);
}

// Losowanie nowego indeksu dla zera
const newZeroIndex = Math.floor(Math.random() * indexes.length);

// Wstawienie zera na nowe wylosowane miejsce
indexes.splice(newZeroIndex, 0, 0);

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

                                for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = indexes[Math.floor(i)];
                                    const index50 = indices2[Math.floor(i)];
                                    console.log('hej166', newIndex);


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
                                        indexDiv: indexDiv
                                    };

                                    // Dodawanie obiektu do tablicy lekcji
                                    lessonsArrayA.push(lessonObjectA);
                                    console.log('hej3334', lessonObjectA);
                                    if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                        const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                        if (containerToRemove.length > 0) {
                                            containerToRemove.remove();
                                        }
                                    }


                                    // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                    console.log('hej558', lessonsArrayA);
                                    console.log('hej40', newIndex); // Wyświetl wartość startIndex
                                    console.log('hej79', tablica15);
                                    console.log('wykonuje się 7');
                                    console.log('hej155', buttonindex);
                                    console.log('hej323', index55);

                                    console.log('hej344');
                                    if ((tablica15.length <= 30 || tablica15.length === 0)) {
                                        console.log('wykonuje się 8');
                                        console.log('hej321', newIndex);
                                        console.log('hej188', polski);
                                        console.log('hej4444', polski);
                                        showCombinedSentenceForLesson2(polski, index50, lessonId1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength);
                                    
                    }
                                }
                                                    function showCombinedSentenceForLesson2(polski, index50, lessonIdToShow1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength) {
              console.log('hej2345', polski);
        const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                        const matchingFiszki10 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                        console.log('hej10', matchingFiszki10);
                        console.log('hej10', lessonsArrayA);
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
                            function addBackgroundToText(matchingFiszki1, matchingIndexes, currentIndexValue, aktualny, lesson1PartLength) {
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
if (!polski) {
                                    $sentenceDivB.html(`
        ${sentence10}${sentence11}<br>
        <div class="sentence1b">${sentence1b}</div>
        <div class="sentence1b2">${sentence1b2}</div>
    `);
} else if (polski) {
    console.log('hej111', polski);
    $sentenceDiv.html(`
        <div class="sentence1b2">${sentence1b2}</div>
        ${sentence10}${sentence11}<br>
        <div class="sentence1b">${sentence1b}</div>
    `);
}

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
                                console.log('hej888', polski);
                    }

                            
                            let sentence1bba = "";
                            let sentence1bbab = "";
                            function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength) {
                                $(document).ready(function () {
                                    console.log('hej544', polski);
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

if (!polski) {
    console.log('hej111', polski);
                                    $sentenceDiv.html(`
        ${sentence10}${sentence11}<br>
        <div class="sentence1bba">${sentence1bba}</div>
        <div class="sentence1bbab">${sentence1bbab}</div>
    `);
} else if (polski) {
    console.log('hej111', polski);
    $sentenceDiv.html(`
        <div class="sentence1bbab">${sentence1bbab}</div>
        ${sentence10}${sentence11}<br>
        <div class="sentence1bba">${sentence1bba}</div>
    `);
}
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
                                            przekazArgument0(category, undefined, false, czas);  // Upewnij się, że category jest zdefiniowana
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
                                        let czas = "zdania";
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
                            } else if (!polski) {
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
                            } else if (polski) {
                                                                var $sentenceDiv = $('<div></div>');
                                $sentenceDiv.addClass('sentence'); // Dodanie klasy 'sentence'
                                                        $sentenceDiv.html(`
        <div class="sentence1bbab">${sentence1bbab}</div>
        ${sentence10}${sentence11}<br>
        <div class="sentence1bba">${sentence1bba}</div>
    `);
                            }

                            
                            
                            const $button2 = $('<button></button>');
                            $button2.addClass('run-button2');
                            $button2.text('Uruchom'); // Ustawiamy tekst przycisku na 'Uruchom'

    // Dodajemy atrybut 'data-index' z wartością indexDiv do przycisku
                            $button2.attr('data-index', indexDiv);
                            $button2.on('click', function () {


                                const index5 = $button2.attr('data-index');
                                const index55 = parseInt(index5, 10); // Zamieniamy index55 na liczbę
                                // Alternatywnie można użyć Number(index55)
                                // const numericIndex = Number(index55);
                                buttonindex = true;
                                setTimeout(() => {
                                    console.log('Kliknięto przycisk o indeksie:', index55);
                                    if (button0) {
                                        let czas = "zdania";
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
                            $button2.css({
                                'position': 'absolute',
                                'left': '50%', // Przykładowa wartość odstępu od lewej krawędzi
                                'top': '10px',
                                'z-index': '10' // Ustawienie z-index dla buttona większe niż dla sentenceDiv
                            });
                            $container.append($button2);
    // Dodanie diva z zdaniem do kontenera
                            $container.append($sentenceDiv);
                            $container.append($sentenceDivB);
                            $container.append($sentenceDivC);
                            tablica15.push(srcWords);
                            console.log('hej6', tablica15);
                        }
                    }
                                        function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex, polski) {
                    if (czas === 'zdania' && czas !== 'fiszki') {
                                if (polski) {
                                $('.grid-container .image-container4').remove();
                            }
                            // Wyświetl pojedyncze zdania dla znalezionych lekcji
                            console.log('Warunek czas === "fiszki" jest spełniony');
                            $('.grid-container .image-container3').remove();
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
const zeroIndex = Math.floor(Math.random() * (indexes.length + 1)); // +1 aby uwzględnić dodanie zera na końcu

// Wstawienie 0 na wylosowane miejsce, jeśli tablica indexes nie jest pusta
if (indexes.length > 0) {
    indexes[zeroIndex] = 0;
}

// Sprawdź czy tablica indexes zawiera zero
let shouldInsertNumbers = indexes.includes(0);

// Jeśli tablica indexes zawiera zero, wstaw liczby od 1 do wartości przed pierwszymi dwiema liczbami w indexes
if (shouldInsertNumbers) {
    let firstValue = indexes.length > 0 ? indexes[0] : 1;
    let secondValue = indexes.length > 1 ? indexes[1] : firstValue + 1;

    // Utworzenie tablicy do wstawienia przed indexes
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

// Wyświetlenie zaktualizowanej tablicy indexes
console.log('Aktualizowane indeksy:', indexes);

                                const zeroIndex2 = index55 - 1;
    // Wstawienie 0 na wylosowane miejsce
                                indices2[zeroIndex2] = 0;
                                console.log('hej166');

                                for (let i = 0; i < uniqueMatchingLessons.length; i += 1) {
                                    indexDiv++;
                                    if (polski) {
                                        polski2 = true;
                                    }
                                    const lessonId1 = uniqueMatchingLessons[i];
                                    const newIndex = indexes[Math.floor(i)];
                                    const index50 = indices2[Math.floor(i)];
                                    console.log('hej166', newIndex);


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
                                        indexDiv: indexDiv
                                    };

                                    // Dodawanie obiektu do tablicy lekcji
                                    lessonsArrayA.push(lessonObjectA);
                                    console.log('hej3334', lessonObjectA);
                                    if (newIndex === 0 && indexDiv >= 1 && indexDiv <= 4) {
                                        const containerToRemove = $(`.image-container3[data-lesson="${indexDiv}"]`);
                                        if (containerToRemove.length > 0) {
                                            containerToRemove.remove();
                                        }
                                    }


                                    // Zwiększ startIndex o 7 za każdym razem, gdy funkcja iteruje
                                    console.log('hej558', lessonsArrayA);
                                    console.log('hej40', newIndex); // Wyświetl wartość startIndex
                                    console.log('hej79', tablica15);
                                    console.log('wykonuje się 7');
                                    console.log('hej155', buttonindex);
                                    console.log('hej323', index55);

                                    console.log('hej344');
                                    if ((tablica15.length <= 30 || tablica15.length === 0)) {
                                        console.log('wykonuje się 8');
                                        console.log('hej321', newIndex);
                                        console.log('hej188', tablica15);
                                        showCombinedSentenceForLesson2(polski2, index50, lessonId1, fiszki, matchingIndexes, startIndex, newIndex, indexDiv, lessonsArrayA, lesson1PartLength);
                                    }
                                }
                                
                                                    function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex, idpolski) {
                                                        if (czas === 'zdania' && czas !== 'fiszki') {
    $('.grid-container .image-container3').remove();
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
                                    const polski = indices3[i % indices3.length];
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

                                        showCombinedSentenceForLesson2(polski, index50, lessonId1, matchingIndexes, newIndex, indexDiv, lesson1PartLength);
                                                                                console.log('hej321', polski);
                                        }
                                }
                            }
                        }
                                                    }
                                                    
                                                    
                                                    
function showCombinedSentenceForLesson2(polski, index50, lessonIdToShow1, matchingIndexes, newIndex, indexDiv, lesson1PartLength) {
              console.log('hej564', polski);
        const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                        const matchingFiszki10 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                        console.log('hej10', matchingFiszki10);
                        console.log('hej10', lessonsArrayA);
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
                            }
                            
                            let sentence1bba = "";
                            let sentence1bbab = "";
                            function addBackgroundToText1b(matchingFiszki1, matchingIndexes, aktualny, lesson1PartLength, polski) {
                        
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
                            
    // Dodanie diva z zdaniem do kontenera
                            $container.append($sentenceDiv);
                            $container.append($sentenceDivB);
                            tablica15.push(srcWords);
                            console.log('hej6', tablica15);
                        }
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
                                    }
                                    }, 300);
                                });
                                console.log('Zawartość zmiennej sentence1:', sentence1b); // Wyświetlenie zawartości zmiennej sentence1                          
                            }
                    
                    
                                                } else if (category = 'PresentSimple') {
            // Sprawdzenie, czy fiszka.category3 jest zdefiniowana oraz czy zawiera kategorię
            matchingFiszka = fiszka.category3 && fiszka.category3.includes(category);
        }
        
            // Dodaj buttony do diva
    $flashcardContainer.append(`
        <div id="konsola" style="width: 700px;">
            <div id="title">RODZAJ SŁOWNICTWA</div>
            <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '')">Wszystkie</button>
            <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument('osoby', '', '', '', '', '')">Osoby</button>
            <br>TRYB LEKCJI<br>
  <button class="czas" onclick="ustawTryb('zdania', undefined); przekazArgument0(globalCategory, '', '', 'zdania', false, false)">5 MINUT (JEDNO ZDANIE)</button>
<button id="english" class="czas" onclick="ustawTryb('fiszki', undefined); przekazArgument0(globalCategory, '', '', 'fiszki', true, true)">10 MINUT (3 ZDANIA) - OPCJONALNIE</button>
            <button class="czas">FRAZY</button>
            <button class="czas">POJEDYŃCZE SŁOWA</button>
        <div id="konsola" style="width: 600px;">
            <div id="title">CHARAKTER ZDANIA</div>
            <button onclick="wybierzCharakter('krotkie')">Krótkie</button>
            <button onclick="ustawTryb(undefined, 'dlugie'); przekazArgument0(globalCategory, '', '', 'zdania', false, false)">Długie(złożone)</button>
        </div>
        <div>
        
        
            // Dodaj buttony do diva
    $flashcardContainer.append(`
        <div id="konsola" style="width: 700px;">
            <div id="title">RODZAJ SŁOWNICTWA</div>
            <button id="osoby" class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument0('all', '', '', '', '', '')">Wszystkie</button>
            <button class="rodzaj-button" data-rodzaj="osoby" onclick="przekazArgument('osoby', '', '', '', '', '')">Osoby</button>
            <button class="rodzaj-button" data-rodzaj="zaimki osobowe" onclick="przekazArgument2('zaimkiosobowe')">Zaimki osobowe</button>
            <button class="rodzaj-button" data-rodzaj="kolory" onclick="przekazArgument5('emocje')">Emocje</button>
            <button class="rodzaj-button" data-rodzaj="zaimki" onclick="przekazArgument6('spojniki')">Spójniki</button>
            <button class="rodzaj-button" data-rodzaj="kolory" onclick="przekazArgument7('kolory')">Kolory</button>
            <button class="rodzaj-button" data-rodzaj="zwierzeta" onclick="przekazArgument8('zwierzeta')">Zwierzęta</button>
            <button class="rodzaj-button" data-rodzaj="czasownik" onclick="przekazArgument9('czasownik')">Czasowniki</button>
            <br>TRYB LEKCJI<br>
  <button class="czas" onclick="ustawTryb('zdania')"; onclick="przekazArgument0(globalCategory, '', '', 'zdania', false, false)">5 MINUT (JEDNO ZDANIE)</button>
<button id="english" class="czas" onclick="ustawTryb('fiszki')"; onclick="przekazArgument0(globalCategory, '', '', 'fiszki', true, true)">10 MINUT (3 ZDANIA) - OPCJONALNIE</button>
            <button class="czas">FRAZY</button>
            <button class="czas">POJEDYŃCZE SŁOWA</button>
            <br>---------------------------<br>
            <button id="english" class="charakter-button" onclick="wybierzCharakter()">TŁUMACZ NA ŻADANIE-OPCJONALNIE</button>
            <button id="mix" class="charakter-button" onclick="wybierzCharakter('fiszki')">TYLKO PO ANGIELSKU</button>
            <button id="polski" class="charakter-button" onclick="przekazArgument0('', '', '', 'zdania', true)">TYLKO PO POLSKU</button>
        </div>
        <div id="konsola" style="width: 600px;">
                    <div id="title">CZASY</div>
            <button class="charakter-button" id="myButton33" onclick="przekazArgument3('PresentSimple', '', '', '', '', '')">PRESENT SIMPLE</button>
            <button class="charakter-button">PAST SIMPLE</button>
            <br>
            <div id="title">OPCJE ZDANIA</div>
            <button class="charakter-button">PODZIEL ZDANIA NA CZĘŚCI</button>
            <button class="czas">WYSUŃ JEDNOCZEŚNIE W DANEJ LEKCJI</button>
            <br>
            <div id="title">CHARAKTER ZDANIA</div>
            <button onclick="wybierzCharakter('krotkie')">Krótkie</button>
            <button onclick="ustawTryb2('dlugie', id); ustawTryb(tablica3[0]); przekazArgument0(globalCategory, '', '', 'fiszki', false, false);">Długie(złożone)</button>
            <button id="dowolne" onclick="wybierzCharakter('dowolne')">Dowolne</button>
            <div id="title">PRIORYTETY LINGWISTYCZNE</div>
            <button onclick="wybierzCharakter('krotkie')">Wymowa</button>
            <button onclick="wybierzCharakter('dlugie')">Zrozumienie sensu zdania</button>
            <button id="dowolne" onclick="wybierzCharakter('dowolne')">WSZYSTKIE</button>
        </div>
        <div>
        <div id="konsola" style="width: 100px;">
                    <div id="title">ULUBIONA TEMATYKA FISZEK</div>
            <button onclick="wybierzTematyke('nauka')">Nauka</button>
            <button onclick="wybierzTematyke('podroze')">Podróże</button>
            <button onclick="wybierzTematyke('historia')">Historia</button>
            <button onclick="wybierzTematyke('sztuka')">Sztuka</button>
            <button onclick="wybierzTematyke('technologia')">Technologia</button>
        </div>
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


let currentMode = '';   // Inicjalizuj zmienną currentMode
        let currentMode2 = '';  // Inicjalizuj zmienną currentMode2
                        function przekazArgument3(category, index55, buttonindex, czas, idpolski, idtranslate) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'PresentSimple';
                        }
                            console.log('hej321b', idtranslate);
    console.log('hej453', buttonindex);
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
    // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if (currentMode === 'zdania') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (currentMode === 'fiszki') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    }
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
    // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if (currentMode === 'zdania') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (currentMode === 'fiszki') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    }
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
                        globalIdTranslate = idtranslate;
                        console.log('hej321bc', idtranslate);
                        // Wywołaj funkcję wybierzCharakter
    // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if (currentMode === 'zdania') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (currentMode === 'fiszki') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    }
                    }


function przekazArgument0(category, index55, buttonindex, czas, idpolski, idtranslate) {
    $('.grid-container .image-container3').remove();
    $('.grid-container .image-container4').remove();


    console.log('hej321b', idtranslate);
    console.log('hej453', buttonindex);

    pulpitstartowy = true;
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

    // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if ((currentMode === 'zdania' || currentMode === undefined) && currentMode2 === 'dlugie') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if ((currentMode === 'fiszki' || currentMode === undefined) && currentMode2 === 'dlugie') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false, true);
        console.log('Ładowanie fiszek dla kategorii:', category);
    } else if (currentMode === 'zdania' && (currentMode2 === undefined || currentMode2 === '')) {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true, false);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (currentMode === 'fiszki' && (currentMode2 === undefined || currentMode2 === '')) {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    }
}
let tablica3 = [];

function ustawTryb(tryb) {
    // Zaktualizuj pierwszą wartość w tablicy lub dodaj, jeśli jest pusta
    tablica3[0] = tryb;
    console.log('hej55b', tablica3);
    console.log('hej244', tryb);

    if (tablica3[0] === 'fiszki') {
        ustawTryb2('dlugie', true);
    } else if (tablica3[0] === 'zdania') {
        ustawTryb2('dlugie', false);
    }
}
function ustawTryb2(tryb2, id) {
    currentMode2 = tryb2;
    console.log('hej244b', id);
    if (id && currentMode2 === 'dlugie') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, true, true);
    } else if (!id && currentMode2 !== 'dlugie') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true, false);
    }
}

function wybierzRodzaj(category, czas, matchingIndexes, index55, buttonindex, idpolski, dlugosc) {
                        console.log('hej154', dlugosc);
                        category = category || globalCategory;
                        czasv2 = czas;
                        console.log("Wybrany rodzaj słownictwa: " + czas);
                        console.log('hej5b', index55); // Wybierz 'fiszki' dla 10 minut
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
                            } else if (category != 'PresentSimple') {
                                // Sprawdzenie, czy istnieje fiszka w zadanej kategorii
                                matchingFiszka = fiszka.category2.includes(category);
                            } else if (category = 'PresentSimple') {
            // Sprawdzenie, czy fiszka.category3 jest zdefiniowana oraz czy zawiera kategorię
            matchingFiszka = fiszka.category3 && fiszka.category3.includes(category);
        }
                            console.log('hej28', category);
                            // Jeśli znaleziono pasującą fiszkę, dodaj numer lekcji do zestawu matchingLessons
                            if (matchingFiszka) {
                                matchingLessons.add(fiszka.id[1]);
                                console.log('hej866', matchingLessons);
                            }
                        }
                        let myVariable = Array.from(matchingLessons);
                        console.log('hejxxxxxxxxxxxxxxxxx', myVariable);
                                            if (dlugosc) {
                console.log('Dane correlationsCount:', correlationsCount);

                const validLessons = myVariable.filter(lessonId => {
                    const lessonEntry = correlationsCount.find(item => item[0] === lessonId) || [lessonId, 0];
                    console.log('Sprawdzanie lessonId:', lessonId, 'lessonEntry:', lessonEntry);
                    const lessonSentences = lessonEntry[1];
                    return lessonSentences > 6;
                });

                myVariable = validLessons;
                                for (let i = 0; i < validLessons.length; i += 3) {
                                    const lessonId1 = myVariable[i];
                                    const lessonId2 = myVariable[i + 1];
                                    const lessonId3 = myVariable[i + 2];
                                    
                                    const lessonObject5 = {
                                        lessonId1: lessonId1,
                                        lessonId2: lessonId2,
                                        lessonId3: lessonId3
                                    };
                                console.log('Valid Lessons:', lessonObject5);
            }
        }
            console.log('hej5555', myVariable);
                        if (czas === 'fiszki' && czas !== "zdania") {
                            console.log('Warunek czas === "fiszki" jest spełniony');
                            $('.grid-container .image-container4').remove();
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
                                const lengthDividedByThree = myVariable.length / 3;

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
                                for (let i = 0; i < myVariable.length; i += 3) {
                                    indexDiv++;
                                    const lessonId1 = myVariable[i];
                                    const lessonId2 = myVariable[i + 1];
                                    const lessonId3 = myVariable[i + 2];
                                    const newIndex = indices[Math.floor(i / 3)];
                                    const index50 = indices2[Math.floor(i / 3)];
                                    console.log('hej16', index50);

                const lesson1Entry = correlationsCount.find(item => item[0] === lessonId1) || [lessonId1, 0];
                const lesson2Entry = correlationsCount.find(item => item[0] === lessonId2) || [lessonId2, 0];
                const lesson3Entry = correlationsCount.find(item => item[0] === lessonId3) || [lessonId3, 0];

                const lesson1Sentences = lesson1Entry[1];
                const lesson2Sentences = lesson2Entry[1];
                const lesson3Sentences = lesson3Entry[1];



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
                        
                            // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if (tablica3[0] === 'zdania' && tablica3[1] !== 'dlugie') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (tablica3[0] === 'fiszki' && tablica3[1] !== 'dlugie') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    } else if (tablica3[0] === 'zdania' && tablica3[1] === 'dlugie') {
                console.log('Działa');
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
}  else if (tablica3[0] === 'fiszki' && tablica3[1] === 'dlugie') {
                    console.log('Działa');
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
}
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
                    

                                                            var tablica3 = [];

                        function przekazArgument3(category, index55, buttonindex, czas, idpolski, idtranslate) {
                        $('.grid-container .image-container3').remove();
                        if (!category) {
                            category = 'PresentSimple';
                        }
                            console.log('hej321b', idtranslate);
    console.log('hej453', buttonindex);
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
    // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if (currentMode === 'zdania') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (currentMode === 'fiszki') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    }
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
    // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if (currentMode === 'zdania') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (currentMode === 'fiszki') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    }
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
                        globalIdTranslate = idtranslate;
                        console.log('hej321bc', idtranslate);
                        // Wywołaj funkcję wybierzCharakter
    // Wywołaj funkcję wybierzCharakter na podstawie trybu
    if (tablica3[0] === 'zdania') {
        wybierzCharakter(category, 'zdania', index55, buttonindex, true);
        console.log('Ładowanie zdań dla kategorii:', category);
    } else if (tablica3[0] === 'fiszki') {
        wybierzCharakter(category, 'fiszki', index55, buttonindex, false);
        console.log('Ładowanie fiszek dla kategorii:', category);
    }
                    }

                            if (newIndex === 0 && !buttonindex) {
                                console.log('hej3331', newIndex);
                                let funkcjaWywolana = false;
                                function addVideo1(index) {
                                    console.log('hej80', newIndex);
                                    // Sprawdź, czy jesteśmy poza zakresem tablicy
                                    if (index >= srcWords.length && !funkcjaWywolana) {
                                        funkcjaWywolana = true;
                                        countVisibleContainers();
                                    przekazArgument0(tablica3[2], undefined, false, tablica3[0], true, true, tablica3[1]);
                                        console.log("wykonuje się");
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