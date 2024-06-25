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