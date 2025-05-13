                        const tablica15 = [];
                                    let isVideoPlaying = false;
            const tablica11b = [];
            let tablica13a = [];
            let tablica12b = [];
            let clickedIndex5 = [];
            let tablica12bu = [];
            let tablica15a = [];
            const fiszkaobject = {
                data: [] // Inicjalizacja tablicy wewnątrz obiektu
            };
            let tablica24 = [];
            function showCombinedSentenceForLesson2(selectedCategory, polski, index50, matchingIndexes, lessonIdToShow1, newIndex, indexDiv, lesson1PartLength) {
                                console.log('hej55bbv', selectedCategory);
                                                            let tablica61 = [];
                // Tutaj reszta kodu funkcji
                const matchingFiszki1 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                const matchingFiszki10 = fiszki.filter(fiszka => fiszka.id[1] === lessonIdToShow1);
                console.log('hej10', matchingFiszki10);
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
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
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bbab">${sentence1bbab}</div>
</div>
`);
                                const startRange2 = 1;
const endRange2 = 6;
let previousTrojkiJSON = '';
function updateButtonColors() {
    tablica61.length = 0;
    document.querySelectorAll('.sentence-block, .sentence-blockB').forEach(block => {
        const dataName = parseInt(block.getAttribute('data-name'), 10);
        tablica61.push(dataName);
        if (dataName >= startRange2 && dataName <= endRange2) {
            const button = block.querySelector('button.left-button, button.left-buttonb, button.left-buttonbb');
            if (button) {
                button.style.backgroundColor = 'blue';
                button.style.color = 'white';
            }
        }
    });

    // Podział na trójki
    const trojki = [];
    for (let i = 0; i < tablica61.length; i += 1) {
        trojki.push(tablica61.slice(i, i + 1));
    }

    const currentTrojkiJSON = JSON.stringify(trojki);
    if (currentTrojkiJSON !== previousTrojkiJSON) {
        previousTrojkiJSON = currentTrojkiJSON;

        console.log('Nowe trójki:', trojki);

        // Usuń stare linki
        $('.hidden-link').remove();
        console.log('Usunięto stare linki');

        // Wygeneruj nowe linki (dla pierwszych dwóch trójek, jeśli istnieją)
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
            <a href="${link1}" class="hidden-link lesson-link-1b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
            <a href="${link2}" class="hidden-link lesson-link-2b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
        <a href="${link3}" class="hidden-link lesson-link-3b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
                    <a href="${link4}" class="hidden-link lesson-link-4b" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
            <a href="${link5}" class="hidden-link lesson-link-5" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
        <a href="${link6}" class="hidden-link lesson-link-6" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
                    <a href="${link7}" class="hidden-link lesson-link-7" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
            <a href="${link8}" class="hidden-link lesson-link-8" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
        <a href="${link9}" class="hidden-link lesson-link-9" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
                    <a href="${link10}" class="hidden-link lesson-link-10" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
            <a href="${link11}" class="hidden-link lesson-link-11" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
        <a href="${link12}" class="hidden-link lesson-link-12" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
                    <a href="${link13}" class="hidden-link lesson-link-13" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
            <a href="${link14}" class="hidden-link lesson-link-14" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
        <a href="${link15}" class="hidden-link lesson-link-15" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
                    <a href="${link16}" class="hidden-link lesson-link-16" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 1</a>
            <a href="${link17}" class="hidden-link lesson-link-17" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 2</a>
        <a href="${link18}" class="hidden-link lesson-link-18" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
                <a href="${link19}" class="hidden-link lesson-link-19" target="_blank" rel="noopener noreferrer">Przejdź do lekcji 3</a>
        `;

        $('body').append(linksHTML);
        console.log('Dodano linki:', link1, link2);
    }
}

// Uruchom na początku
updateButtonColors();

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
            let sentenceHtml = $sentence10.html();
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = sentenceHtml;
            // Usuń przycisk z tekstu
            $(tempDiv).find('button').remove();
            $(tempDiv).find('.sentence1bba').remove(); // usuń dolną część zdania

            let pureText = tempDiv.innerText.trim();
            let words = pureText.split(' ');

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

                // Wstaw wszystko z powrotem
                $sentence10.html(`
                    <button class="left-button first-button">+<br></button>
                    ${button1}
                    <span class="word-span" style="cursor: pointer;">${highlightedSpan}</span>
                    <span class="word-span" style="cursor: pointer;">${secondWord}</span>
                    <span class="word-span" style="cursor: pointer;">${thirdWord}</span>
                    <span class="word-span" style="cursor: pointer;">${forthWord}</span>
                    <span class="word-span" style="cursor: pointer;">${fifthWord}</span>
                    <span class="word-span" style="cursor: pointer;">${sixthWord}</span>
                    ${button2}
                    <br>
                    <div class="sentence1bba">${$sentence1bba.html()}</div>
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


function updateHighlight(indexDiv, $sentence10, index5b, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord) {
    console.log('updateHighlight - start');
    console.log('Aktualne wartości:', { indexDiv, index, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord });

    const words = [firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord];
    console.log('Tablica words:', words);

    // Generuj podświetlone słowa
    const highlightedWords = words.map((word, i) => {
        const isHighlighted = i === index5b;
        console.log(`Generuję słowo: "${word}", indeks: ${i}, podświetlone: ${isHighlighted}`);
        return isHighlighted
            ? `<span class="highlighted word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`
            : `<span class="word-span" data-index="${i}" style="cursor: pointer;">${word}</span>`;
    });

    // Zaktualizuj HTML dla $sentence10
    console.log('Aktualizuję HTML $sentence10');
    $sentence10.html(`
        <button class="prev-button" id="prev-button">&lt;</button>
        ${highlightedWords.join(' ')}
        <button class="next-button" id="next-button">&gt;</button>
    `);

    // Obsługa zdarzeń kliknięcia słów
    console.log('Dodaję event listener do słów (word-span)');
    $sentence10.find('.word-span').off('click').on('click', function () {
        
        const clickedIndex = $(this).data('index');
        console.log('Kliknięto słowo:', { clickedIndex });
clickedIndex5.push(clickedIndex);
        // Wywołanie funkcji obsługi kliknięcia
        handleWordClick(clickedIndex, indexDiv, matchingFiszki1);
        // Ponowne zaktualizowanie podświetlenia
        console.log('Ponowne wywołanie updateHighlight po kliknięciu');
        updateHighlight(indexDiv, $sentence10, clickedIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
            function updateWordDisplay(indeks5b, indexDiv) {
        const fiszka = matchingFiszki1[indeks5b];
        console.log('hej11d', fiszka);
        if (fiszka && fiszka.sentence1) {
            const currentWord = fiszka.sentence1[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        } else if (fiszka && fiszka.sentence2) {
            const currentWord = fiszka.sentence2[currentWordIndex] || "";
            $currentWordDisplay.text(currentWord); // Aktualizujemy tylko tekst w osobnym elemencie
        }
    }
            let indeks5b = clickedIndex5[clickedIndex5.length - 1];
                                                        updateWordDisplay(indeks5b, indexDiv);
                                                        
    });

    console.log('updateHighlight - koniec');
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
if (clickedIndex5.length > 0 && clickedIndex5[clickedIndex5.length - 1] !== null) {
    // Zwiększanie clickedIndex5 o 1 i dodanie do tablicy
    clickedIndex5.push(clickedIndex5[clickedIndex5.length - 1] - 1);

    // Pobranie ostatniego elementu z clickedIndex5
    let indeks5b = clickedIndex5[clickedIndex5.length - 1];
    handleNextClick(indexDiv, $sentence10, indeks5b, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
} else {
    tablica12b.push(currentFiszkaIndex);
    handleNextClick(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
}
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
                                                    
if (clickedIndex5.length > 0 && clickedIndex5[clickedIndex5.length - 1] !== null) {
    // Zwiększanie clickedIndex5 o 1 i dodanie do tablicy
    clickedIndex5.push(clickedIndex5[clickedIndex5.length - 1] + 1);

    // Pobranie ostatniego elementu z clickedIndex5
    let indeks5b = clickedIndex5[clickedIndex5.length - 1];
    handleNextClick(indexDiv, $sentence10, indeks5b, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
} else {
    tablica12b.push(currentFiszkaIndex);
    handleNextClick(indexDiv, $sentence10, currentFiszkaIndex, firstWord, secondWord, thirdWord, forthWord, fifthWord, sixthWord);
}
                                setTimeout(() => {
                                                        wybierzRodzaj2('all', currentFiszkaIndex, matchingFiszki1, indexDiv);
                                }, 800);

                                                                                                                console.log('hej68cx', currentFiszkaIndex);
                                                                                                                console.log("indexDiv2y", currentWordIndex);
    let indeks5b = clickedIndex5[clickedIndex5.length - 1];
                                                        updateWordDisplay(indeks5b, indexDiv);
                                                        // Wywołaj funkcję, przekazując zaktualizowany indeks

                                                    } else {
                                                        console.log('Koniec fiszek!'); // Informacja o końcu fiszek
                                                    }
                                                });

    function updateWordDisplay(indeks5b, indexDiv) {
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
                            const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
$sentenceDivB.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bbab">${sentence1bbab}</div>
</div>
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
                            // Pobieramy nazwy (id[1]) do atrybutów
    const id1 = matchingFiszki1[0]?.id[1] || 'unknown1';
$sentenceDiv.html(`
<div class="sentence-block" data-name="${id1}">
    <button class="left-button first-button">+<br></button>
    ${sentence10}${sentence11}<br>
    <div class="sentence1bba">${sentence1bba}</div>
    <div class="sentence1bbab">${sentence1bbab}</div>
</div>
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