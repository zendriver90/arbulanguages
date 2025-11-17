const fiszki10 = [
  ...fiszki10_part1,
  ...fiszki10_part5,
    ...fiszki10_part6,
      ...fiszki10_part7,
            ...fiszki10_part8
];
let totalTrainingFiszkaCount = 0;
  let trainingFiszkaCount = 0;
  let badgeProgressCount = 0;
  let badgeLevel = 1;
  const maxBadgeLevel = 5;
  let badgeAlreadyGiven = false;

  function getCurrentBadgeLimit(){ return 4; }

  function updateFloatingCounter(){
    const lim = getCurrentBadgeLimit();
    $('#floatingCounter').text(`${trainingFiszkaCount}/${lim}`);
  }
function updateBadgeOverlayText() {
  const lim = getCurrentBadgeLimit();

  if (badgeLevel >= 4) {
    $('#badgeOverlayText').hide(); // 🔒 Ukryj tekst dla poziomu 4+
    return;
  }

  console.log('[DBG] badgeProgressCount=', badgeProgressCount, '/', lim);
  $('#badgeOverlayText').text(`${badgeProgressCount}/${lim}`);
  $('#badgeOverlayText').show(); // Upewnij się, że jest widoczny poniżej 4
}
function addEarnedBadge(level) {
    if (level > 3) return; // 🔒 NIE dodawaj odznak poziomu >3
  const badgeName = getBadgeName(level);
  const progressText = `${getCurrentBadgeLimit()}/${getCurrentBadgeLimit()}`;

  const badgeElement = $(`
    <div class="earned-badge-wrapper" style="
      position: relative; 
      display: inline-block; 
      width: 100px; 
      height: 100px; 
      margin: 5px;
      overflow: hidden;
      border-radius: 6px;
    ">
      <img src="img/songo${level}.jpg" class="earned-badge" style="
        width: 100%; 
        height: 100%; 
        object-fit: cover; 
        border-radius: 6px;
        display: block;
      ">
      <div style="
        position: absolute;
        bottom: 0;
        width: 100%;
        background: rgba(0,0,0,0.6);
        color: #fff;
        font-size: 11px;
        text-align: center;
        padding: 2px 4px;
        box-sizing: border-box;
        line-height: 1.2;
      ">
        <div style="font-weight: bold;">${badgeName}</div>
        <div>${progressText}</div>
      </div>
    </div>
  `);

  $('#earnedBadgesContainer').append(badgeElement);
}
function restoreBadgeState(){
  totalTrainingFiszkaCount = parseInt(localStorage.getItem('totalTrainingFiszkaCount')) || 0;
  trainingFiszkaCount = parseInt(localStorage.getItem('trainingFiszkaCount')) || 0;
  badgeProgressCount   = parseInt(localStorage.getItem('badgeProgressCount'))   || 0;
  badgeLevel           = parseInt(localStorage.getItem('badgeLevel'))           || 1;

for (let i = 1; i < badgeLevel && i < 4; i++) {
  addEarnedBadge(i);
}

  $('#currentBadgeContainer').show();
  $('#floatingCounter').show();

  updateFloatingCounter();
  updateBadgeOverlayText();
  updateMainCounter();
}


  function updateLearningNotification() {
    const złWartość = totalTrainingFiszkaCount * 2;
    const progressPercent = Math.min(100, Math.round((totalTrainingFiszkaCount / 18) * 100));

    $('#learningNotification').html(`
      <div style="background: #ffffff; color: black; padding: 6px; border-radius: 6px;">
        📚 Każde słowo = <strong>2 zł</strong> wartości nauki.<br>
        🧩 Postęp lekcji: <strong>${progressPercent}%</strong> (${totalTrainingFiszkaCount}/18) – wartość: <strong>${złWartość} zł</strong>
      </div>
    `);

    console.log('[DBG] Notyfikacja:', totalTrainingFiszkaCount);
  }

  // Ważne: poczekaj na załadowanie DOM
  $(document).ready(function() {
    updateLearningNotification();
  });
function giveBadge(){
    if (badgeLevel >= 4) return; // 🔒 NIE pozwól wejść na poziom 4+
  badgeAlreadyGiven = true;
  setTimeout(() => {
    const previousLevel = badgeLevel;
    badgeLevel++; // zwiększ najpierw poziom
    addEarnedBadge(previousLevel); // dodaj odznakę za poprzedni poziom

    badgeProgressCount = 0;
    trainingFiszkaCount = 0;

    updateFloatingCounter();
    updateBadgeOverlayText();
    updateBadgeImage();

    localStorage.setItem('trainingFiszkaCount', trainingFiszkaCount);
    localStorage.setItem('badgeProgressCount', badgeProgressCount);
    localStorage.setItem('badgeLevel', badgeLevel);

    badgeAlreadyGiven = false;
  }, 1000);
}

function addToTrainingList(id){
  trainingFiszkaCount++;
  totalTrainingFiszkaCount++;
  badgeProgressCount++;

  localStorage.setItem('totalTrainingFiszkaCount', totalTrainingFiszkaCount);
  localStorage.setItem('trainingFiszkaCount', trainingFiszkaCount);
  localStorage.setItem('badgeProgressCount', badgeProgressCount);

  updateMainCounter();
  updateFloatingCounter();
  updateBadgeOverlayText();
  updateLearningNotification(); // <- to tu

  if(badgeProgressCount >= getCurrentBadgeLimit() && !badgeAlreadyGiven){
    giveBadge();
  }
}

  // symulacja Twojego activateFiszka:
  function activateFiszka(id, znam){
    if(!znam) addToTrainingList(id);
  }
  
function updateMainCounter(){
  $('#totalValue').text(totalTrainingFiszkaCount);
}
$(function(){
  restoreBadgeState();
  updateBadgeImage(); // ← to jest ważne
  $('.train-btn').on('click', ()=> activateFiszka('f1', false));
});
function getBadgeName(level) {
  switch(level) {
    case 1: return 'Mistrz Pamięci';
    case 2: return 'Eksploracja Świata Arbu';
    case 3: return 'Intensywna Nauka';
    default: return ''; // lub np. return null;
  }
}

function updateBadgeImage() {
  if (badgeLevel >= 4) {
    $('#badgeImage').hide();            // Ukryj grafikę
    $('#badgeOverlayText').hide();      // Ukryj overlay z punktami
    $('#currentBadgeName').hide();      // Ukryj nazwę odznaki, jeśli masz ten element
    return;
  }

  const clampedLevel = Math.min(badgeLevel, maxBadgeLevel);
  $('#badgeImage').attr('src', `img/songo${clampedLevel}.jpg`).show();
  $('#badgeOverlayText').show();
  $('#currentBadgeName').text(getBadgeName(clampedLevel)).show();
}
function activateFiszka(idFiszki, znam) {
    let id = idFiszki;
    let parametr = '';

    if (Array.isArray(idFiszki)) {
        id = idFiszki.slice(0, 3).join(',');
        parametr = idFiszki.length > 3 ? idFiszki[3] : '';
    }

    const className = `fiszka-${id}${parametr ? '\\,' + parametr : ''}`;
    const selector = `.${className.replace(/,/g, '\\,')}`;

    if (znam) {
        if ($(selector).hasClass('active2')) {
            $(selector).removeClass('active2').addClass('active');
            updateLearnedClass(className, 'active');
        } else {
            $(selector).addClass('active');
            saveLearnedClass(className, 'active');
        }
        setAsLearned(id);
    } else {
        $(selector).removeClass('active').addClass('active2');
        saveLearnedClass(className, 'active2');
        addToTrainingList(id);
    }
}

function incrementBadgeProgress() {
    badgeProgressCount++;
    trainingFiszkaCount++;

    updateFloatingCounter();
    updateBadgeOverlayText();

    localStorage.setItem('trainingFiszkaCount', trainingFiszkaCount);
    localStorage.setItem('badgeProgressCount', badgeProgressCount);

    const currentLimit = getCurrentBadgeLimit();
    if (badgeProgressCount >= currentLimit && !badgeAlreadyGiven) {
        giveBadge();
    }
}
// Funkcja do zapisywania klasy w Local Storage
function saveLearnedClass(className, classToAdd) {
    let learnedClasses = getLearned2();
    const existingEntryIndex = learnedClasses.findIndex(entry => entry.className === className);

    if (existingEntryIndex !== -1) {
        // Jeśli już istnieje, zaktualizuj klasę
        learnedClasses[existingEntryIndex].classToAdd = classToAdd;
    } else {
        // W przeciwnym razie dodaj nowy wpis
        learnedClasses.push({className, classToAdd});
    }

    localStorage.setItem('ColorClass', JSON.stringify(learnedClasses));
    console.log('ColorClass', learnedClasses);
}

// Funkcja do aktualizacji klasy 'active' w Local  Storage
function updateLearnedClass(className, classToUpdate) {
    let learnedClasses = getLearned2();
    const existingEntryIndex = learnedClasses.findIndex(entry => entry.className === className);

    if (existingEntryIndex !== -1) {
        // Jeśli już istnieje, zaktualizuj klasę
        learnedClasses[existingEntryIndex].classToAdd = classToUpdate;
        localStorage.setItem('ColorClass', JSON.stringify(learnedClasses));
        console.log('ColorClass', learnedClasses);
    }
}
function getLearned2() {
    const stored = localStorage.getItem('ColorClass');
    return stored ? JSON.parse(stored) : [];
}

function restoreLearnedClasses() {
    const learnedClasses = getLearned2();

    learnedClasses.forEach(entry => {
        const selector = '.' + entry.className.replace(/,/g, '\\,'); // lub '\\\\,'
        console.log('Przywracam:', selector, '->', entry.classToAdd);

        $(selector).addClass(entry.classToAdd);
    });
}

// Wywołanie po załadowaniu DOM
document.addEventListener("DOMContentLoaded", function() {
    restoreLearnedClasses();
});

// Wywołanie klas po odświeżeniu strony
$(document).ready(function () {
    const learnedClasses = getLearned2();
    learnedClasses.forEach(function (entry) {
        $(`.${entry.className}`).addClass(entry.classToAdd);
    });
});
let lessons2b = {};

// Funkcja do zapisywania danych do localStorage
function saveToLocalStorage(data) {
    localStorage.setItem('wylosowaneLekcje', JSON.stringify(data));
}

// Funkcja do wczytywania danych z localStorage
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('wylosowaneLekcje');
    return storedData ? JSON.parse(storedData) : null;
}

const storedLessons = loadFromLocalStorage();



// Sprawdzanie zawartości lessons2b po załadowaniu danych
function printLessons2b() {
    console.log('hej555', lessons2b[2]);
}

// Wywołaj tę funkcję, gdy masz pewność, że dane zostały załadowane
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(printLessons2b, 1000);  // Opóźnienie dla pewności
});

function generateFiszkaBlock(fiszka, lessonId2, category) {

    var currentStoryButtonName = ''; // Zmienna lokalna
    console.log(`Generating fiszka block for ID100`, category);

    // Tworzenie kontenera fiszki

    $(document).ready(function () {

        function initAudio(fiszkaId) {
            var audioId = 'music' + fiszkaId;
            var pButtonId = 'pButton' + fiszkaId;

            var music = document.getElementById(audioId);
            var pButton = document.getElementById(pButtonId);
            // Dodajemy style bezpośrednio w kodzie JavaScript
            if (window.matchMedia("(max-width: 999px)").matches) {
                pButton.style.height = '100px';  // Zwiększenie wysokości
                pButton.style.width = '100px';   // Zwiększenie szerokości
            } else {
                pButton.style.height = '60px';  // Zwiększenie wysokości
                pButton.style.width = '60px';   // Zwiększenie szerokości
            }
            pButton.style.border = 'none';   // Usunięcie ramki
            pButton.style.backgroundSize = '80%';  // Rozmiar obrazka tła
            pButton.style.backgroundRepeat = 'no-repeat';
            pButton.style.backgroundPosition = 'center';
            pButton.style.borderRadius = '8px';   // Zaokrąglenie rogów
            pButton.style.outline = 'none';       // Usunięcie obramowania
            pButton.style.display = 'flex';       // Wyśrodkowanie zawartości
            pButton.style.alignItems = 'center';
            pButton.style.justifyContent = 'center';
            pButton.style.overflow = 'hidden';    // Ukrycie nadmiarowego kontentu
            console.log('Initialized audio element with ID:', audioId);
            console.log('Initialized play/pause button with ID:', pButtonId);

            // Play and Pause
            function playb() {
                // start music
                if (music.paused) {
                    music.play();
                    // remove play, add pause
                    pButton.classList.remove("play");
                    pButton.classList.add("pause");
                } else { // pause music
                    music.pause();
                    // remove pause, add play
                    pButton.classList.remove("pause");
                    pButton.classList.add("play");
                }
                console.log('Audio playback status:', music.paused ? 'Paused' : 'Playing');
            }

            // Gets audio file duration
            music.addEventListener("canplaythrough", function () {
                var duration = music.duration;
                console.log('Audio duration:', duration);
            }, false);

            // Dodajemy event listener do przycisku play/pause
            pButton.addEventListener('click', playb);

            console.log('Audio initialization completed.');
        }

// TWORZENIE KONTENERA FISZKI
        let fiszkaContainer = $('<div>').addClass('fiszka fiszka-' + fiszka.id);
console.log('Hej4442', fiszkaContainer);

const imgContainer = $('<div>').addClass('fiszka_img_container');
        fiszka.entries.forEach(entry => {
            // Tworzymy kontener dla zdjęć

            // Sprawdzamy, czy img to tablica (może być więcej niż jedno zdjęcie)
            if (Array.isArray(entry.img)) {
                entry.img.forEach((imgObj, index) => {
                    const imgElement = $('<img class="fiszka_img">')
                        .attr('src', imgObj.src)  // Dodanie URL obrazka
                        .attr('alt', imgObj.alt); // Dodanie ALT
                    imgContainer.append(imgElement);
                    if (index > 0) {
                        imgElement.hide(); // Ukrywanie dodatkowych zdjęć
                    }
                });
            } else if (typeof entry.img === 'object' && entry.img !== null) {
                // Jeśli img to pojedynczy obiekt
                const imgElement = $('<img class="fiszka_img">')
                    .attr('src', entry.img.src)
                    .attr('alt', entry.img.alt);
                imgContainer.append(imgElement);
            }

            // Tworzymy kontener dla historii
            const storyContainer = $('<div>').addClass('story').html(entry.story.text);

            // Dodajemy kontener obrazków i historii do kontenera fiszki
            const fiszkaContainer = $('<div>').addClass('fiszka');

        });
            fiszkaContainer.append(imgContainer);
        const selectedLikes = [];
        console.log('hej10', selectedLikes);

// Funkcja do obsługi kliknięcia na przycisk "likeButton"
        function handleLikeButtonClick(index) {
            const likeButton = $(this);
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            const selectedLike = likeButton.text();
            console.log('Zaktualizowano przycisk dla indeksu:', index);
            console.log('Aktualne wartości selectedLikes:', selectedLikes);
        }
        const likeButton = $('<a>').addClass('like').attr('href', '#');
        const likeText = $('<span>').text('Śmieszna historia');
        likeButton.append(likeText);
        fiszkaContainer.append(likeButton);

        // Tworzymy kontener opcji "like" i dodajemy opcje do kontenera
        const likeOptionsContainer = $('<div>').attr('id', 'likeOptionsContainer');
        const likeOption1 = createLikeOption('thumbsUp', '👍 Śmieszne');
        const likeOption2 = createLikeOption('heart', '❤️ Miłe');
        const likeOption3 = createLikeOption('star', '⭐ Pamiętliwe');
        likeOptionsContainer.append(likeOption1, likeOption2, likeOption3);

        // Dodajemy kontener opcji "like" do docelowego kontenera
        likeButton.append(likeOptionsContainer);

        // Ukrywamy kontener opcji "like"
        likeOptionsContainer.hide();

        // Obsługa zdarzenia hover na przycisku "like"
        likeButton.hover(function () {
            const buttonPosition = likeButton.offset();
            const buttonWidth = likeButton.outerWidth();

            // Pozycjonujemy kontener opcji "like" nad przyciskiem
            likeOptionsContainer.css({
                top: buttonPosition.top - likeOptionsContainer.outerHeight() - 10,
                left: buttonPosition.left + (buttonWidth / 2) - (likeOptionsContainer.outerWidth() / 2),
                backgroundColor: '#f0f0f0', // Dodajemy szary kolor tła
            }).fadeIn('fast');
        }, function () {
            // Ukrywamy kontener opcji "like" po zjechaniu z przycisku
            likeOptionsContainer.fadeOut('fast');
        });

// Funkcja do umieszczania ikony obok przycisku "story_button" w odpowiedniej fiszce
        function addLikeIconToStoryButton(index, like) {
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            if (storyButton.length === 0) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }

            // Tworzymy kontener dla ikony i dodajemy ikonę
            const iconContainer = $('<div>').addClass('likeIconContainer');
            const likeIcon = getLikeIcon(like);
            iconContainer.append(likeIcon);

            // Usuwamy wcześniej dodaną ikonę, jeśli istnieje
            storyButton.find('.likeIconContainer').remove();

            // Dodajemy kontener z ikoną do przycisku "story_button"
            storyButton.append(iconContainer);
        }

        function createLikeOption(like, text) {
            const likeOption = $('<div>').addClass('likeOption').attr('data-like', like).text(text);

            // Dodajemy efekt zmiany koloru na lekko ciemniejszy szary po najechaniu myszką na pojedynczą opcję "like"
            likeOption.hover(
                    function () {
                        likeOption.css('background-color', '#dcdcdc'); // Lekko ciemniejszy szary kolor tła dla opcji "like"
                    },
                    function () {
                        likeOption.css('background-color', ''); // Usuwamy styl, aby wrócić do domyślnego tła opcji "like"
                    }
            );

            let likeCounter = 0; // Dodajemy licznik polubień dla każdej opcji "like"

            const counterDiv = $('<div>').addClass('likeCounterDiv'); // Nowy div na licznik

            // Dodajemy ikonę do licznika
            const likeIcon = getLikeIcon(like);
            const iconContainer = $('<span>').addClass('likeIconContainer').append(likeIcon);
            counterDiv.append(iconContainer);

            const likeCounterSpan = $('<span>').addClass('likeCounter').text(` ${likeCounter} `);
            counterDiv.append(likeCounterSpan); // Licznik jest dodany po ikonie

            imgContainer.append(counterDiv); // Dodajemy licznik na zewnątrz kontenera przycisków

            likeOption.click(function (event) {
                event.preventDefault(); // Zapobiegamy domyślnej akcji przycisku

                // Inkrementujemy licznik polubień za każdym razem, gdy opcja "like" zostanie wybrana
                likeCounter++;
                likeCounterSpan.text(` ${likeCounter} `);

                const selectedLike = $(this).data('like');
                const selectedIcon = getLikeIcon(selectedLike);
                likeText.text(text);
                likeButton.removeClass('liked');
                addLikeIconToStoryButton(lastClickedIndex, selectedLike); // Dodaj ikonę do story_button na podstawie wybranej opcji "like"

                // Sprawdź, czy index już istnieje w tablicy
                const existingIndex = selectedLikes.findIndex(item => item.index === lastClickedIndex);
                if (existingIndex !== -1) {
                    // Jeśli index istnieje, zaktualizuj wartość
                    selectedLikes[existingIndex].like = selectedLike;
                } else {
                    // Jeśli index nie istnieje, dodaj nowy wpis
                    selectedLikes.push({index: lastClickedIndex, like: text}); // Dodaj tylko nazwę "like"
                }

                likeOptionsContainer.fadeOut('fast');
                saveSelectedLike(selectedLike, text); // Przekazujemy nazwę "like" i tekst do funkcji saveSelectedLike
            });

            return likeOption;
        }

// Funkcja do zapisywania wybranego "like"
        function saveSelectedLike(selectedLike, text) {
            // Tutaj możesz zapisać wybrany "like" w odpowiednim kontekście, np. wysłać go na serwer, zapisać w lokalnym magazynie itp.
            console.log('Wybrany like:', text);
            console.log('Tekst:', text);
            // Jeśli chcesz użyć go w innych miejscach, możesz przekazać go jako argument do innych funkcji lub zmiennych.
        }

        // Funkcja do pobierania ikony dla wybranego "like"
        function getLikeIcon(like) {
            let icon;
            switch (like) {
                case 'thumbsUp':
                    icon = $('<span class="likeIcon">👍</span>');
                    break;
                case 'heart':
                    icon = $('<span class="likeIcon">❤️</span>');
                    break;
                case 'star':
                    icon = $('<span class="likeIcon">⭐</span>');
                    break;
                default:
                    icon = $('<span class="likeIcon">👍</span>');
            }
            return icon;
        }

        const hashtagContainer = $('<a>').addClass('hashtag-container').attr('href', '#');
        fiszkaContainer.append(hashtagContainer);

// Funkcja showStory z obsługą id.fiszki
function showStory(idFiszki) {
    console.log('Wywołano showStory:', idFiszki);

    const currentFiszka = fiszkaContainer;
    console.log('Aktualny kontener:', currentFiszka);

    // Ukrywamy wszystkie historie i obrazy w tej konkretnej fiszce
    currentFiszka.find('.fiszka_img').hide();

    // Pobieramy odpowiednią fiszkę z tablicy fiszki na podstawie idFiszki
    const currentEntry = fiszka.entries[idFiszki];
    
    if (!currentEntry) {
        console.error("Nie znaleziono fiszki dla id:", idFiszki);
        return;
    }

    console.log("Wybrana fiszka:", currentEntry);

    let imgIndex = 0; // Domyślny indeks, jeśli coś pójdzie nie tak

    if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
        // Wybór losowego indeksu dla obrazka
        imgIndex = Math.floor(Math.random() * fiszka.entries.length);
        console.log("Wylosowany indeks obrazka:", imgIndex);
    }

    // Pobieramy wylosowany obrazek
    const selectedImg = currentEntry.img;
    
    if (selectedImg) {
        // Ustawiamy obrazek, który ma być widoczny
        currentFiszka.find('.fiszka_img').each(function() {
            if ($(this).attr('src') === selectedImg.src) {
                $(this).show(); // Pokazujemy wybrany obrazek
            }
        });
        
        // Ustawienie specificLesson2Ref z pełnymi danymi
        specificLesson2Ref = {
            src: selectedImg.src,
            alt: selectedImg.alt
        };

        console.log("Losowy obrazek:", specificLesson2Ref);
    } else {
        console.warn("Brak obrazka w fiszce:", currentEntry);
    }

    // Obsługa `story`, jeśli istnieje
    if (currentEntry.story) {
        const storyText = currentEntry.story.text;
        const storyElement = $('<div>').addClass('fiszka_story story-' + imgIndex).html(storyText);

        // Usunięcie starych historii i dodanie nowej
        currentFiszka.find('.fiszka_story').remove();
        currentFiszka.append(storyElement);
        storyElement.show();
    }

    lastClickedIndex = idFiszki;

    return imgIndex;
}

        function selectLikeButton(index) {
            console.log("Wybór likeButton dla indeksu:", index);
            const storyButton = $('.story_button').eq(index);
            if (!storyButton.length) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }

            const likeButton = storyButton.find('.like');
            likeText.find('span').remove();
            likeText.text('Śmieszna historia');

            // Sprawdź, czy index jest zawarty w tablicy selectedLikes
            const selectedLike = selectedLikes.find(item => item.index === index);
            if (selectedLike) {
                // Jeśli index istnieje w tablicy, ustaw ikonę przycisku na wartość z tablicy
                console.log("Wybrano like dla indeksu:", index, "- Like:", selectedLike.like);
                const selectedIcon = getLikeIcon(selectedLike.like); // Przekazujemy tylko nazwę ikony
                console.log('hej5', selectedIcon);
                likeText.html(selectedLike.like); // Ustawiamy ikonę
            } else {
                // Jeśli index nie istnieje, ustaw domyślny tekst
                console.log("Brak wyboru like dla indeksu:", index, "- Ustawianie domyślnego tekstu");
                likeButton.text('Śmieszna historia');
            }
        }
        // NIEZNACZĄCE WYJAŚNIENIE SŁOWA
        const sentenceDiv = $('<div>').attr('id', 'part');
        fiszka.sentence.forEach(word => {
            sentenceDiv.append($('<button>').text(word));
        });
        // Dodanie diva z przyciskami do kontenera fiszki
        fiszkaContainer.append(sentenceDiv);

        console.log('Przed utworzeniem wordDiv');
        const wordDiv = $('<div>').attr('id', 'word');
        const button = $('<button>').attr('id', 'storyone').html('<b>' + fiszka.desc + '</b>');
        const audio = $('<audio>').attr({
            id: 'music' + fiszka.id,
            preload: 'true'
        });
        const source = $('<source>').attr('src', fiszka.word);
        audio.append(source);
        const audioplayerDiv = $('<div>').attr('id', 'audioplayer' + fiszka.id).addClass('audioplayer'); // Dodano klasę 'audioplayer'
        const pButton = $('<button>').attr('id', 'pButton' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

        pButton.css({
            height: '60px',
            width: '60px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            float: 'left',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        });

        audioplayerDiv.append(pButton);
        wordDiv.append(button);
        wordDiv.append(audio);
        wordDiv.append(audioplayerDiv);
        fiszkaContainer.append(wordDiv);
        console.log('Po utworzeniu wordDiv');

// DODANIE MNEMOTECHNIKI
if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
            // Jeśli story jest tablicą, iterujemy przez wszystkie jej elementy
    fiszka.entries.forEach((story, index) => {
                const storyContainer = $('<div>').addClass('fiszka_story story-' + index).html(index);
                fiszkaContainer.append(storyContainer);
                console.log("Dodano story: ", index);  // Debugowanie
            });
        }
        console.log('Przed utworzeniem wordDiv');

// Utworzenie reszty elementów zgodnie z istniejącym kodem
        const wordDiv2 = $('<div>').attr('id', 'word2');
        const audio2 = $('<audio>').attr({
            id: 'music2' + fiszka.id,
            preload: 'true'
        });
        const source2 = $('<source>').attr('src', fiszka.word);
        audio2.append(source2);
        const audioplayerDiv2 = $('<div>').attr('id', 'audioplayer2' + fiszka.id).addClass('audioplayer2'); // Dodano klasę 'audioplayer'
        const pButton2 = $('<button>').attr('id', 'pButton2' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

// Utworzenie elementów za pomocą jQuery
        const timelineDiv = $('<div>').attr('id', 'timeline' + fiszka.id);
        const playheadDiv = $('<div>').attr('id', 'playhead' + fiszka.id);

// Dodanie playhead do timeline
        timelineDiv.append(playheadDiv);

// Dodanie elementów do odpowiednich kontenerów
        audioplayerDiv.append(pButton2);
        wordDiv2.append(audio2);
        wordDiv2.append(audioplayerDiv2);
        wordDiv2.append(timelineDiv); // Dodano timeline do wordDiv
        fiszkaContainer.append(wordDiv2);

        console.log('Po utworzeniu wordDiv');
    let initialSpecificLesson2Ref;
    let specificLesson2Ref;
    let lastClickedIndex = null;
    let lastApprovedIndex = null;
    let approvedIndexes = [];
    let approvedColors = [];

    let index10 = [];

    if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
        console.log("Znaleziono fiszki, liczba wpisów:", fiszka.entries.length);

        const storyButtonContainer = $('<div>');
        let lastClickedButton;

        // Wybór indeksów na podstawie kategorii
        let selectedIndexes = [];

        if (category === "sport") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("sport"))
                .slice(0, 7)
                .map(obj => obj.index);
        } else if (category === "natura") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("natura"))
                .slice(0, 7)
                .map(obj => obj.index);
        } else if (category === "nauka") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("nauka"))
                .slice(0, 7)
                .map(obj => obj.index);
        } else if (category === 'czarny humor' || category === 'czarnyhumor') {
    selectedIndexes = fiszka.entries
        .map((entry, index) => ({ entry, index }))
        .filter(({ entry }) => 
            entry.category.includes('czarnyhumor') || 
            entry.category.includes('czarny humor')
        )
        .slice(0, 7)
        .map(obj => obj.index);
        } else if (category === "zwiazki") {
            selectedIndexes = fiszka.entries
                .map((entry, index) => ({ entry, index }))
                .filter(({ entry }) => entry.category.includes("zwiazki"))
                .slice(0, 7)
                .map(obj => obj.index);
} else if (category === "all") {
            // Losowo wybieramy do 3 unikalnych indeksów
            const allIndexes = [...Array(fiszka.entries.length).keys()];
            selectedIndexes = allIndexes
                .sort(() => 0.5 - Math.random()) // losowe przetasowanie
                .slice(0, 7);
        } else {
            // Losowo wybieramy do 3 unikalnych indeksów
            const allIndexes = [...Array(fiszka.entries.length).keys()];
            selectedIndexes = allIndexes
                .sort(() => 0.5 - Math.random()) // losowe przetasowanie
                .slice(0, 7);
        }

        const randomButtonIndex = selectedIndexes[0] || 0;
        index10.push(randomButtonIndex);

        fiszka.entries.forEach((entry, index) => {
            const displayText = entry.category.join(", ");
            const isIncluded = selectedIndexes.includes(index);

            const storyButton = $('<button>')
                .text(displayText)
                .addClass('story_button');

            if (isIncluded) {
                storyButton.click(function () {
                    console.log("Kliknięto przycisk dla fiszki nr:", index);

                    const idFiszki = entry.id || index;

                    showStory(index, idFiszki);
                    lastClickedIndex = index;

                    if (lastClickedButton) {
                        lastClickedButton.removeClass('green-button');
                    }

                    $('.story_button').removeClass((index, className) => (className.match(/imgIndex-\d+/g) || []).join(' '));
                    $('.fiszka').addClass('imgIndexNull').removeClass('imgIndex-0 imgIndex-1 imgIndex-2 imgIndex-3 imgIndex-4 ');

                    $(this).addClass('green-button');
                    $('.story_button').removeClass('active-button');
                    $(this).addClass('active-button');

                    $('.story_button').each(function () {
                        if ($(this).hasClass('orange-button')) {
                            $(this).removeClass('green-button').addClass('orange-button');
                        }
                    });

                    if (approvedIndexes.includes(lastClickedIndex)) {
                        fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
                    }

                    lastClickedButton = $(this);
                    handleLikeButtonClick();
                });

                // Domyślnie pierwszy z zaznaczonych ma zielony kolor
                if (index === randomButtonIndex) {
                    specificLesson2Ref = entry.img[index];
                    console.log('Zaktualizowano specificLesson2Ref:', specificLesson2Ref);
                    storyButton.addClass('green-button');
                    lastClickedButton = storyButton;
                    lastApprovedIndex = index;
                }
            }

            storyButtonContainer.append(storyButton);
        });

        fiszkaContainer.append(storyButtonContainer);

        const idFiszki = fiszka.entries[randomButtonIndex].id || randomButtonIndex;
        showStory(index10, idFiszki);
        console.log(`Wywołano showStory dla przycisku: ${randomButtonIndex} z id.fiszki: ${idFiszki}`);
} else if (Array.isArray(fiszka.entries) && fiszka.entries.length > 0) {
            // Jeśli fiszka.category1 nie jest tablicą
            newImgIndex = 0; // Przypisanie domyślnego indeksu dla pojedynczego obrazka
            specificLesson2Ref = fiszka.img; // Przypisanie pojedynczej wartości do specificLesson2Ref
            initialSpecificLesson2Ref = specificLesson2Ref;
            console.log('Hej7', specificLesson2Ref);

            // Stwórz pojedynczy przycisk dla pojedynczej wartości category1
            const displayText = `${fiszka.category1} #${fiszka.category1}`;
            const storyButton = $('<button>')
                    .text(displayText)
                    .addClass('story_button2 green-button') // Od razu przypisz zieloną klasę
                    .click(function () {
                        showStory(0); // Przekazujemy 0 jako indeks, ponieważ jest to pojedyncza wartość
                        lastClickedIndex = 0;

                        // Zapisujemy ostatnio kliknięty przycisk
                        lastClickedButton = $(this);
                        handleLikeButtonClick();
                    });

            fiszkaContainer.append(storyButton);
            lastClickedButton = storyButton;
            lastApprovedIndex = 0; // Ustaw ostatnio zatwierdzony indeks na 0

            // WYWOŁANIE POJEDYNCZEJ HISTORII
            showStory(0);
            console.log("Pojedyncza wartość dla category1, specificLesson2Ref:", specificLesson2Ref);
        }
        $('.fiszka_button_trening').click(function () {
            // Dodaj klasę pomarańczową tylko dla przycisku zatwierdzonego
            $('.story_button').each(function (index) {
                if ($(this).hasClass('green-button')) {
                    $(this).removeClass('green-button');
                    $(this).addClass('orange-button');
                }
            });
        });
        console.log('hej555ax', lessons2b[2]);
// DODANIE PRZYCISKU TRENING
        fiszkaContainer.append($('<button>').text('TRENING').addClass('fiszka_button fiszka_button_trening').click(function () {

            activateFiszka(fiszka.id, false);

            let id = fiszka.id;
            let parametr = '';

            // Sprawdzenie, czy idFiszki jest tablicą
            if (Array.isArray(fiszka.id)) {
                id = fiszka.id[0];         // Pierwszy element tablicy jako id
                parametr = fiszka.id[1] || ''; // Drugi element tablicy jako parametr, jeśli istnieje
            }

            // Tworzenie selektora na podstawie id i parametru
            const className = `fiszka-${id}\\,${parametr}`;
            const selector = `.${className}`;
            console.log('hej201', parametr);
            let first = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[0]) {
                first = true;
                console.log('hej200', first);

            }
            let second = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[1]) {
                second = true;
                console.log('hej200', second);

            }
            let third = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[2]) {
                third = true;
                console.log('hej200', third);

            }

            console.log("Trening clicked on fiszka nr " + fiszka.id);
            console.log("lessonId2:", lessonId2);
            console.log("nazwa", lessons2b[2]);
            // Wyswietlenie danej wartości img dla danej fiszka.id
            const specificLesson2 = specificLesson2Ref || initialSpecificLesson2Ref;
            console.log("img dla fiszki o id", fiszka.id, ":", specificLesson2);
            specificLesson2Ref = fiszka.img;
            // Znajdź indeks dla danej fiszki w tablicy lessons2[lessonId2]
            console.log('story55', specificLesson2Ref);
            // Używamy lastClickedIndex zamiast index
            imgIndex = showStory(lastClickedIndex); // Wywołanie funkcji showStory i zapisanie zwróconego indeksu obrazka
            console.log('działa', specificLesson2Ref);
            aktywujObrazek(first, second, third, specificLesson2, 'obrazek-container2b', true, fiszka, imgIndex); // Przekazanie imgIndex do funkcji aktywujObrazek
            // Dodajemy zatwierdzony indeks do tablicy
            approvedIndexes.push(lastClickedIndex);
            console.log(approvedIndexes);

            // Dodanie zatwierdzonej klasy imgIndex do fiszkaContainer po kliknięciu przycisku "TRENING"
            fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
        }));

        fiszkaContainer.append($('<button>').text('ZNAM').addClass('fiszka_button fiszka_button_znam').click(function () {
            console.log("Znam clicked on fiszka nr " + fiszka.id);
            activateFiszka(fiszka.id, true);
        }));

        // WYWOŁANIE HASHTAGU
        function updateButtonName(buttonName, fiszkaContainer) {
            // Usuń poprzednią nazwę, jeśli istnieje
            fiszkaContainer.find('.fiszka_button_name').remove();

            // Ustaw nazwę w prawym dolnym rogu fiszki
            const fiszkaButtonNameContainer = $('<div>').addClass('fiszka_button_name').text(buttonName);
            fiszkaContainer.append(fiszkaButtonNameContainer);
        }
        // Dodanie kontenera fiszki do body
        $('.grid-containerb').append(fiszkaContainer);
        console.log(`Generated fiszka block for ID: [${fiszka.id.join(', ')}]`);
        initAudio(fiszka.id);
        restoreLearnedClasses();
    });
}
function generateFiszkaBlock2(fiszka, lessonId2) {
    console.log('hej555xxv', fiszka);
    var currentStoryButtonName = ''; // Zmienna lokalna
    console.log(`Generating fiszka block for ID: [${fiszka.id.join(', ')}]`);

    // Tworzenie kontenera fiszki

    $(document).ready(function () {

        function initAudio(fiszkaId) {
            var audioId = 'music' + fiszkaId;
            var pButtonId = 'pButton' + fiszkaId;

            var music = document.getElementById(audioId);
            var pButton = document.getElementById(pButtonId);
            // Dodajemy style bezpośrednio w kodzie JavaScript
            if (window.matchMedia("(max-width: 999px)").matches) {
                pButton.style.height = '100px';  // Zwiększenie wysokości
                pButton.style.width = '100px';   // Zwiększenie szerokości
            } else {
                pButton.style.height = '60px';  // Zwiększenie wysokości
                pButton.style.width = '60px';   // Zwiększenie szerokości
            }
            pButton.style.border = 'none';   // Usunięcie ramki
            pButton.style.backgroundSize = '80%';  // Rozmiar obrazka tła
            pButton.style.backgroundRepeat = 'no-repeat';
            pButton.style.backgroundPosition = 'center';
            pButton.style.borderRadius = '8px';   // Zaokrąglenie rogów
            pButton.style.outline = 'none';       // Usunięcie obramowania
            pButton.style.display = 'flex';       // Wyśrodkowanie zawartości
            pButton.style.alignItems = 'center';
            pButton.style.justifyContent = 'center';
            pButton.style.overflow = 'hidden';    // Ukrycie nadmiarowego kontentu
            console.log('Initialized audio element with ID:', audioId);
            console.log('Initialized play/pause button with ID:', pButtonId);

            // Play and Pause
            function playb() {
                // start music
                if (music.paused) {
                    music.play();
                    // remove play, add pause
                    pButton.classList.remove("play");
                    pButton.classList.add("pause");
                } else { // pause music
                    music.pause();
                    // remove pause, add play
                    pButton.classList.remove("pause");
                    pButton.classList.add("play");
                }
                console.log('Audio playback status:', music.paused ? 'Paused' : 'Playing');
            }

            // Gets audio file duration
            music.addEventListener("canplaythrough", function () {
                var duration = music.duration;
                console.log('Audio duration:', duration);
            }, false);

            // Dodajemy event listener do przycisku play/pause
            pButton.addEventListener('click', playb);

            console.log('Audio initialization completed.');
        }

// TWORZENIE KONTENERA FISZKI
        let fiszkaContainer = $('<div>').addClass('fiszka fiszka-' + fiszka.id);
    // Dodanie klasy parzysta, jeśli warunki są spełnione
    if (window.matchMedia("(max-width: 999px)").matches && lessonId2 % 2 === 0) {
        fiszkaContainer.addClass('parzysta');
    }
    // Tworzenie ikony krzyżyka
    let closeIcon = $('<span>')
        .addClass('close-icon')
    .html('&times;') // HTML kod krzyżyka
    .css({
        position: 'absolute',
        top: 'px', // Możesz dostosować pozycję
        right: '5px',
        width: '30px', // Szerokość kontenera
        height: '30px', // Wysokość kontenera (równa szerokości)
        cursor: 'pointer',
        color: 'red',
        fontSize: '40px', // Rozmiar fontu (zmniejszony dla lepszej czytelności)
        background: 'grey',
        border: '2px solid black',
        textAlign: 'center', // Wyrównanie tekstu w poziomie
        lineHeight: '30px', // Wyrównanie tekstu w pionie (równe wysokości kontenera)
        zIndex: 1000000
    });

    // Zdarzenie kliknięcia na krzyżyk
    closeIcon.on('click', function () {
        setTimeout(function () {
        removeFiszka(fiszka.id, lessonId2);
        }, 1000); // Opóźnienie w milisekundach (tu: 1 sekunda)
    });

    // Dodanie krzyżyka do fiszki
    fiszkaContainer.append(closeIcon);

        // DODANIE OBRAZKA
        const imgContainer = $('<div>').addClass('fiszka_img_container');
        if (Array.isArray(fiszka.img) && fiszka.img.length > 0) {
            fiszka.img.forEach((imgSrc, index) => {
                const imgElement = $('<img class="fiszka_img">').attr('src', imgSrc);
                imgContainer.append(imgElement);
                if (index > 0) {
                    imgElement.hide();
                }
            });
        } else if (typeof fiszka.img === 'string') {
            // Jeśli jest tylko jedno zdjęcie, dodajemy je do imgContainer dla każdej fiszki
            const imgElement = $('<img class="fiszka_img">').attr('src', fiszka.img);
            imgContainer.append(imgElement);
        }
        fiszkaContainer.append(imgContainer); //DODANIE OBRAZKA

        const selectedLikes = [];
        console.log('hej10', selectedLikes);

// Funkcja do obsługi kliknięcia na przycisk "likeButton"
        function handleLikeButtonClick(index) {
            const likeButton = $(this);
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            const selectedLike = likeButton.text();
            console.log('Zaktualizowano przycisk dla indeksu:', index);
            console.log('Aktualne wartości selectedLikes:', selectedLikes);
        }
        const likeButton = $('<a>').addClass('like').attr('href', '#');
        const likeText = $('<span>').text('Śmieszna historia');
        likeButton.append(likeText);
        fiszkaContainer.append(likeButton);

        // Tworzymy kontener opcji "like" i dodajemy opcje do kontenera
        const likeOptionsContainer = $('<div>').attr('id', 'likeOptionsContainer');
        const likeOption1 = createLikeOption('thumbsUp', '👍 Śmieszne');
        const likeOption2 = createLikeOption('heart', '❤️ Miłe');
        const likeOption3 = createLikeOption('star', '⭐ Pamiętliwe');
        likeOptionsContainer.append(likeOption1, likeOption2, likeOption3);

        // Dodajemy kontener opcji "like" do docelowego kontenera
        likeButton.append(likeOptionsContainer);

        // Ukrywamy kontener opcji "like"
        likeOptionsContainer.hide();

        // Obsługa zdarzenia hover na przycisku "like"
        likeButton.hover(function () {
            const buttonPosition = likeButton.offset();
            const buttonWidth = likeButton.outerWidth();

            // Pozycjonujemy kontener opcji "like" nad przyciskiem
            likeOptionsContainer.css({
                top: buttonPosition.top - likeOptionsContainer.outerHeight() - 10,
                left: buttonPosition.left + (buttonWidth / 2) - (likeOptionsContainer.outerWidth() / 2),
                backgroundColor: '#f0f0f0', // Dodajemy szary kolor tła
            }).fadeIn('fast');
        }, function () {
            // Ukrywamy kontener opcji "like" po zjechaniu z przycisku
            likeOptionsContainer.fadeOut('fast');
        });

// Funkcja do umieszczania ikony obok przycisku "story_button" w odpowiedniej fiszce
        function addLikeIconToStoryButton(index, like) {
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            if (storyButton.length === 0) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }

            // Tworzymy kontener dla ikony i dodajemy ikonę
            const iconContainer = $('<div>').addClass('likeIconContainer');
            const likeIcon = getLikeIcon(like);
            iconContainer.append(likeIcon);

            // Usuwamy wcześniej dodaną ikonę, jeśli istnieje
            storyButton.find('.likeIconContainer').remove();

            // Dodajemy kontener z ikoną do przycisku "story_button"
            storyButton.append(iconContainer);
        }

        function createLikeOption(like, text) {
            const likeOption = $('<div>').addClass('likeOption').attr('data-like', like).text(text);

            // Dodajemy efekt zmiany koloru na lekko ciemniejszy szary po najechaniu myszką na pojedynczą opcję "like"
            likeOption.hover(
                    function () {
                        likeOption.css('background-color', '#dcdcdc'); // Lekko ciemniejszy szary kolor tła dla opcji "like"
                    },
                    function () {
                        likeOption.css('background-color', ''); // Usuwamy styl, aby wrócić do domyślnego tła opcji "like"
                    }
            );

            let likeCounter = 0; // Dodajemy licznik polubień dla każdej opcji "like"

            const counterDiv = $('<div>').addClass('likeCounterDiv'); // Nowy div na licznik

            // Dodajemy ikonę do licznika
            const likeIcon = getLikeIcon(like);
            const iconContainer = $('<span>').addClass('likeIconContainer').append(likeIcon);
            counterDiv.append(iconContainer);

            const likeCounterSpan = $('<span>').addClass('likeCounter').text(` ${likeCounter} `);
            counterDiv.append(likeCounterSpan); // Licznik jest dodany po ikonie

            imgContainer.append(counterDiv); // Dodajemy licznik na zewnątrz kontenera przycisków

            likeOption.click(function (event) {
                event.preventDefault(); // Zapobiegamy domyślnej akcji przycisku

                // Inkrementujemy licznik polubień za każdym razem, gdy opcja "like" zostanie wybrana
                likeCounter++;
                likeCounterSpan.text(` ${likeCounter} `);

                const selectedLike = $(this).data('like');
                const selectedIcon = getLikeIcon(selectedLike);
                likeText.text(text);
                likeButton.removeClass('liked');
                addLikeIconToStoryButton(lastClickedIndex, selectedLike); // Dodaj ikonę do story_button na podstawie wybranej opcji "like"

                // Sprawdź, czy index już istnieje w tablicy
                const existingIndex = selectedLikes.findIndex(item => item.index === lastClickedIndex);
                if (existingIndex !== -1) {
                    // Jeśli index istnieje, zaktualizuj wartość
                    selectedLikes[existingIndex].like = selectedLike;
                } else {
                    // Jeśli index nie istnieje, dodaj nowy wpis
                    selectedLikes.push({index: lastClickedIndex, like: text}); // Dodaj tylko nazwę "like"
                }

                likeOptionsContainer.fadeOut('fast');
                saveSelectedLike(selectedLike, text); // Przekazujemy nazwę "like" i tekst do funkcji saveSelectedLike
            });

            return likeOption;
        }

// Funkcja do zapisywania wybranego "like"
        function saveSelectedLike(selectedLike, text) {
            // Tutaj możesz zapisać wybrany "like" w odpowiednim kontekście, np. wysłać go na serwer, zapisać w lokalnym magazynie itp.
            console.log('Wybrany like:', text);
            console.log('Tekst:', text);
            // Jeśli chcesz użyć go w innych miejscach, możesz przekazać go jako argument do innych funkcji lub zmiennych.
        }

        // Funkcja do pobierania ikony dla wybranego "like"
        function getLikeIcon(like) {
            let icon;
            switch (like) {
                case 'thumbsUp':
                    icon = $('<span class="likeIcon">👍</span>');
                    break;
                case 'heart':
                    icon = $('<span class="likeIcon">❤️</span>');
                    break;
                case 'star':
                    icon = $('<span class="likeIcon">⭐</span>');
                    break;
                default:
                    icon = $('<span class="likeIcon">👍</span>');
            }
            return icon;
        }

        const hashtagContainer = $('<a>').addClass('hashtag-container').attr('href', '#');
        fiszkaContainer.append(hashtagContainer);

        function showStory(index) {
            const currentFiszka = fiszkaContainer;

            // Ukrywamy wszystkie historie w tej konkretnej fiszce
            currentFiszka.find('.fiszka_story').hide();

            // Obsługa mnemoniki
            if (Array.isArray(fiszka.story)) {
                if (index >= 0 && index < fiszka.story.length) {
                    currentFiszka.find('.story-' + index).show();
                }
            } else if (fiszka.story) {
                currentFiszka.find('.story-0').show();
            }

            // Ukrywamy wszystkie obrazy
            currentFiszka.find('.fiszka_img').hide();

            // Obsługa obrazów
            let imgIndex; // Zmienna do przechowywania indeksu obrazka

            if (Array.isArray(fiszka.img)) {
                imgIndex = Math.min(index, fiszka.img.length - 1);
                currentFiszka.find('.fiszka_img').eq(imgIndex).show();
                specificLesson2Ref = fiszka.img[imgIndex];
                console.log("Index obrazka:", imgIndex);
            } else {
                imgIndex = 0; // Ustawienie imgIndex na 0, gdy fiszka.img nie jest tablicą
                currentFiszka.find('.fiszka_img').eq(imgIndex).show();
                specificLesson2Ref = fiszka.img;
                console.log("Index obrazka:", imgIndex);
            }

            lastClickedIndex = index;

            // Obsługa hashtagów
            const selectedCategoryIndex = index * 2;
            const value = fiszka.category1[selectedCategoryIndex];
            const hashtag = fiszka.category1[selectedCategoryIndex + 1];

            hashtagContainer.empty();
            hashtagContainer.text(`${value} #${hashtag}`);

            console.log('Calculated imgIndex:', imgIndex);

            return imgIndex;
        }

        function selectLikeButton(index) {
            console.log("Wybór likeButton dla indeksu:", index);
            const storyButton = $('.story_button').eq(index);
            if (!storyButton.length) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }

            const likeButton = storyButton.find('.like');
            likeText.find('span').remove();
            likeText.text('Śmieszna historia');

            // Sprawdź, czy index jest zawarty w tablicy selectedLikes
            const selectedLike = selectedLikes.find(item => item.index === index);
            if (selectedLike) {
                // Jeśli index istnieje w tablicy, ustaw ikonę przycisku na wartość z tablicy
                console.log("Wybrano like dla indeksu:", index, "- Like:", selectedLike.like);
                const selectedIcon = getLikeIcon(selectedLike.like); // Przekazujemy tylko nazwę ikony
                console.log('hej5', selectedIcon);
                likeText.html(selectedLike.like); // Ustawiamy ikonę
            } else {
                // Jeśli index nie istnieje, ustaw domyślny tekst
                console.log("Brak wyboru like dla indeksu:", index, "- Ustawianie domyślnego tekstu");
                likeButton.text('Śmieszna historia');
            }
        }
        // NIEZNACZĄCE WYJAŚNIENIE SŁOWA
        const sentenceDiv = $('<div>').attr('id', 'part');
        fiszka.sentence.forEach(word => {
            sentenceDiv.append($('<button>').text(word));
        });
        // Dodanie diva z przyciskami do kontenera fiszki
        fiszkaContainer.append(sentenceDiv);

        console.log('Przed utworzeniem wordDiv');
        const wordDiv = $('<div>').attr('id', 'word');
        const button = $('<button>').attr('id', 'storyone').html('<b>' + fiszka.desc + '</b>');
        const audio = $('<audio>').attr({
            id: 'music' + fiszka.id,
            preload: 'true'
        });
        const source = $('<source>').attr('src', fiszka.word);
        audio.append(source);
        const audioplayerDiv = $('<div>').attr('id', 'audioplayer' + fiszka.id).addClass('audioplayer'); // Dodano klasę 'audioplayer'
        const pButton = $('<button>').attr('id', 'pButton' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

        pButton.css({
            height: '60px',
            width: '60px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            float: 'left',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        });

        audioplayerDiv.append(pButton);
        wordDiv.append(button);
        wordDiv.append(audio);
        wordDiv.append(audioplayerDiv);
        fiszkaContainer.append(wordDiv);
        console.log('Po utworzeniu wordDiv');

// DODANIE MNEMOTECHNIKI
        if (Array.isArray(fiszka.story)) {
            // Jeśli story jest tablicą, iterujemy przez wszystkie jej elementy
            fiszka.story.forEach((story, index) => {
                const storyContainer = $('<div>').addClass('fiszka_story story-' + index).html(story);
                fiszkaContainer.append(storyContainer);
                console.log("Dodano story: ", story);  // Debugowanie
            });
        } else if (fiszka.story) {
            // Jeśli story jest pojedynczym stringiem, dodajemy go bezpośrednio
            const storyContainer = $('<div>').addClass('fiszka_story story-0').html(fiszka.story);
            fiszkaContainer.append(storyContainer);
            console.log("Dodano story: ", fiszka.story);  // Debugowanie
        }
        console.log('Przed utworzeniem wordDiv');

// Utworzenie reszty elementów zgodnie z istniejącym kodem
        const wordDiv2 = $('<div>').attr('id', 'word2');
        const audio2 = $('<audio>').attr({
            id: 'music2' + fiszka.id,
            preload: 'true'
        });
        const source2 = $('<source>').attr('src', fiszka.word);
        audio2.append(source2);
        const audioplayerDiv2 = $('<div>').attr('id', 'audioplayer2' + fiszka.id).addClass('audioplayer2'); // Dodano klasę 'audioplayer'
        const pButton2 = $('<button>').attr('id', 'pButton2' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

// Utworzenie elementów za pomocą jQuery
        const timelineDiv = $('<div>').attr('id', 'timeline' + fiszka.id);
        const playheadDiv = $('<div>').attr('id', 'playhead' + fiszka.id);

// Dodanie playhead do timeline
        timelineDiv.append(playheadDiv);

// Dodanie elementów do odpowiednich kontenerów
        audioplayerDiv.append(pButton2);
        wordDiv2.append(audio2);
        wordDiv2.append(audioplayerDiv2);
        wordDiv2.append(timelineDiv); // Dodano timeline do wordDiv
        fiszkaContainer.append(wordDiv2);

        console.log('Po utworzeniu wordDiv');
        // Zdefiniuj zmienną początkową na poziomie wyższym
        let initialSpecificLesson2Ref;
        let specificLesson2Ref;
        let lastClickedIndex = null;
        let lastApprovedIndex = null; // Zmienna do przechowywania ostatnio zatwierdzonego indeksu
        let approvedIndexes = []; // Tablica przechowująca zatwierdzone indeksy
        let approvedColors = [];

// DODANIE PRZYCISKÓW
        if (Array.isArray(fiszka.category1)) {
            const storyButtonContainer = $('<div>'); // Kontener na przyciski
            const randomIndex = Math.floor(Math.random() * fiszka.category1.length / 2);
            let lastClickedButton; // Zmienna do przechowywania ostatnio klikniętego przycisku w danej fiszce

            fiszka.category1.slice(0, 5).forEach((category1, index) => {
                const valueIndex = index * 2; // Indeks wartości w tablicy, zaczynając od 0
                const hashtagIndex = valueIndex + 1; // Indeks hashtagu w tablicy

                const value = fiszka.category1[valueIndex];
                const hashtag = fiszka.category1[hashtagIndex];

                const displayText = `${value} #${hashtag}`;

                const storyButton = $('<button>')
                        .text(displayText)
                        .addClass('story_button')
                        .click(function () {
                            showStory(index);
                            lastClickedIndex = index;

                            // Usuwamy zieloną klasę tylko z poprzedniego przycisku w danej fiszce
                            if (lastClickedButton) {
                                lastClickedButton.removeClass('green-button');
                            }

                            // Usuwamy klasę imgIndex z poprzedniego przycisku w danej fiszce
                            $('.story_button').removeClass((index, className) => (className.match(/imgIndex-\d+/g) || []).join(' '));
                            // Dodajemy klasę imgIndexNull do przycisków, które nie zostały jeszcze zatwierdzone
                            $('.fiszka').addClass('imgIndexNull').removeClass('imgIndex-0 imgIndex-1 imgIndex-2 imgIndex-3 imgIndex-4 ');

                            // Dodajemy zieloną klasę tylko dla aktualnie klikniętego przycisku w danej fiszce
                            $(this).addClass('green-button');
                            $('.story_button').removeClass('active-button');
                            $(this).addClass('active-button');
                            $('.story_button').each(function (index) {
                                if ($(this).hasClass('orange-button')) {
                                    $(this).removeClass('green-button');
                                    $(this).addClass('orange-button');
                                }
                            });

                            // Jeśli przycisk został wcześniej zatwierdzony, przywróć jego zatwierdzoną klasę
                            if (approvedIndexes.includes(lastClickedIndex)) {
                                fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
                            }

                            // Zapisujemy ostatnio kliknięty przycisk w danej fiszce
                            lastClickedButton = $(this);
                            handleLikeButtonClick();
                        });

                if (index === randomIndex) {
                    // Sprawdzamy, czy fiszka.img jest tablicą czy pojedynczą wartością
                    if (Array.isArray(fiszka.img)) {
                        newImgIndex = Math.min(index, fiszka.img.length - 1); // Aktualizacja zmiennej globalnej imgIndex
                        specificLesson2Ref = fiszka.img[newImgIndex];
                        console.log('hej432', specificLesson2Ref);
                    } else if (fiszka.img) {
                        newImgIndex = 0; // Przypisanie domyślnego indeksu dla pojedynczego obrazka
                        specificLesson2Ref = fiszka.img; // Przypisanie pojedynczej wartości do specificLesson2Ref
                        console.log('hej432', specificLesson2Ref);
                    }
                    initialSpecificLesson2Ref = specificLesson2Ref;
                    console.log('Hej7', specificLesson2Ref);
                    storyButton.addClass('green-button');
                    lastClickedButton = storyButton;
                    lastApprovedIndex = index; // Ustaw ostatnio zatwierdzony indeks na indeks losowego przycisku
                }

                // Dodaj typ "like" dla tej fiszki do tablicy
                storyButtonContainer.append(storyButton);
            });

            fiszkaContainer.append(storyButtonContainer);

            // WYWOŁANIE TABLICY
            showStory(randomIndex);
            console.log(randomIndex);

            // Użycie specificLesson2Ref po załadowaniu strony
            console.log("Początkowy specificLesson2Ref:", initialSpecificLesson2Ref);

        } else if (fiszka.category1) {
            // Jeśli fiszka.category1 nie jest tablicą
            newImgIndex = 0; // Przypisanie domyślnego indeksu dla pojedynczego obrazka
            specificLesson2Ref = fiszka.img; // Przypisanie pojedynczej wartości do specificLesson2Ref
            initialSpecificLesson2Ref = specificLesson2Ref;
            console.log('Hej7', specificLesson2Ref);

            // Stwórz pojedynczy przycisk dla pojedynczej wartości category1
            const displayText = `${fiszka.category1} #${fiszka.category1}`;
            const storyButton = $('<button>')
                    .text(displayText)
                    .addClass('story_button2 green-button') // Od razu przypisz zieloną klasę
                    .click(function () {
                        showStory(0); // Przekazujemy 0 jako indeks, ponieważ jest to pojedyncza wartość
                        lastClickedIndex = 0;

                        // Zapisujemy ostatnio kliknięty przycisk
                        lastClickedButton = $(this);
                        handleLikeButtonClick();
                    });

            fiszkaContainer.append(storyButton);
            lastClickedButton = storyButton;
            lastApprovedIndex = 0; // Ustaw ostatnio zatwierdzony indeks na 0

            // WYWOŁANIE POJEDYNCZEJ HISTORII
            showStory(0);
            console.log("Pojedyncza wartość dla category1, specificLesson2Ref:", specificLesson2Ref);
        }
        $('.fiszka_button_trening').click(function () {
            // Dodaj klasę pomarańczową tylko dla przycisku zatwierdzonego
            $('.story_button').each(function (index) {
                if ($(this).hasClass('green-button')) {
                    $(this).removeClass('green-button');
                    $(this).addClass('orange-button');
                }
            });
        });
        console.log('hej555ax', lessons2b[2]);
// DODANIE PRZYCISKU TRENING
        fiszkaContainer.append($('<button>').text('TRENING').addClass('fiszka_button fiszka_button_trening').click(function () {

            activateFiszka(fiszka.id, false);

            let id = fiszka.id;
            let parametr = '';

            // Sprawdzenie, czy idFiszki jest tablicą
            if (Array.isArray(fiszka.id)) {
                id = fiszka.id[0];         // Pierwszy element tablicy jako id
                parametr = fiszka.id[1] || ''; // Drugi element tablicy jako parametr, jeśli istnieje
            }

            // Tworzenie selektora na podstawie id i parametru
            const className = `fiszka-${id}\\,${parametr}`;
            const selector = `.${className}`;
            console.log('hej201', parametr);
            let first = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[0]) {
                first = true;
                console.log('hej200', first);

            }
            let second = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[1]) {
                second = true;
                console.log('hej200', second);

            }
            let third = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[2]) {
                third = true;
                console.log('hej200', third);

            }

            console.log("Trening clicked on fiszka nr " + fiszka.id);
            console.log("lessonId2:", lessonId2);
            console.log("nazwa", lessons2b[2]);
            // Wyswietlenie danej wartości img dla danej fiszka.id
            const specificLesson2 = specificLesson2Ref || initialSpecificLesson2Ref;
            console.log("img dla fiszki o id", fiszka.id, ":", specificLesson2);
            specificLesson2Ref = fiszka.img;
            // Znajdź indeks dla danej fiszki w tablicy lessons2[lessonId2]
            console.log('story55', specificLesson2Ref);
            // Używamy lastClickedIndex zamiast index
            imgIndex = showStory(lastClickedIndex); // Wywołanie funkcji showStory i zapisanie zwróconego indeksu obrazka
            console.log('działa', specificLesson2Ref);
            aktywujObrazek(first, second, third, specificLesson2, 'obrazek-container2b', true, fiszka, imgIndex); // Przekazanie imgIndex do funkcji aktywujObrazek
            // Dodajemy zatwierdzony indeks do tablicy
            approvedIndexes.push(lastClickedIndex);
            console.log(approvedIndexes);

            // Dodanie zatwierdzonej klasy imgIndex do fiszkaContainer po kliknięciu przycisku "TRENING"
            fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
        }));

        fiszkaContainer.append($('<button>').text('ZNAM').addClass('fiszka_button fiszka_button_znam').click(function () {
            console.log("Znam clicked on fiszka nr " + fiszka.id);
            activateFiszka(fiszka.id, true);
        }));

        // WYWOŁANIE HASHTAGU
        function updateButtonName(buttonName, fiszkaContainer) {
            // Usuń poprzednią nazwę, jeśli istnieje
            fiszkaContainer.find('.fiszka_button_name').remove();

            // Ustaw nazwę w prawym dolnym rogu fiszki
            const fiszkaButtonNameContainer = $('<div>').addClass('fiszka_button_name').text(buttonName);
            fiszkaContainer.append(fiszkaButtonNameContainer);
        }
        // Dodanie kontenera fiszki do body
        $(`.image-container4[data-lesson="${lessonId2}"]`).append(fiszkaContainer);
        console.log(`Generated fiszka block for ID: [${fiszka.id.join(', ')}]`);
        initAudio(fiszka.id);
    });
}
function generateFiszkaBlock3(fiszka, lessonId2) {
    console.log('hej555x', fiszka.id);
$('.grid-container .image-container3').remove();
$('.grid-container .image-container4').remove();
    console.log(`Generating: [${fiszka}]`);

    // Tworzenie kontenera fiszki

    $(document).ready(function () {

        function initAudio(fiszkaId) {
            var audioId = 'music' + fiszkaId;
            var pButtonId = 'pButton' + fiszkaId;

            var music = document.getElementById(audioId);
            var pButton = document.getElementById(pButtonId);
            // Dodajemy style bezpośrednio w kodzie JavaScript
            if (window.matchMedia("(max-width: 999px)").matches) {
                pButton.style.height = '100px';  // Zwiększenie wysokości
                pButton.style.width = '100px';   // Zwiększenie szerokości
            } else {
                pButton.style.height = '60px';  // Zwiększenie wysokości
                pButton.style.width = '60px';   // Zwiększenie szerokości
            }
            pButton.style.border = 'none';   // Usunięcie ramki
            pButton.style.backgroundSize = '80%';  // Rozmiar obrazka tła
            pButton.style.backgroundRepeat = 'no-repeat';
            pButton.style.backgroundPosition = 'center';
            pButton.style.borderRadius = '8px';   // Zaokrąglenie rogów
            pButton.style.outline = 'none';       // Usunięcie obramowania
            pButton.style.display = 'flex';       // Wyśrodkowanie zawartości
            pButton.style.alignItems = 'center';
            pButton.style.justifyContent = 'center';
            pButton.style.overflow = 'hidden';    // Ukrycie nadmiarowego kontentu
            console.log('Initialized audio element with ID:', audioId);
            console.log('Initialized play/pause button with ID:', pButtonId);

            // Play and Pause
            function playb() {
                // start music
                if (music.paused) {
                    music.play();
                    // remove play, add pause
                    pButton.classList.remove("play");
                    pButton.classList.add("pause");
                } else { // pause music
                    music.pause();
                    // remove pause, add play
                    pButton.classList.remove("pause");
                    pButton.classList.add("play");
                }
                console.log('Audio playback status:', music.paused ? 'Paused' : 'Playing');
            }

            // Gets audio file duration
            music.addEventListener("canplaythrough", function () {
                var duration = music.duration;
                console.log('Audio duration:', duration);
            }, false);

            // Dodajemy event listener do przycisku play/pause
            pButton.addEventListener('click', playb);

            console.log('Audio initialization completed.');
        }
// TWORZENIE KONTENERA FISZKI
        let fiszkaContainer = $('<div>').addClass('fiszka5 fiszka-' + fiszka.id);


console.log('Hej4442', fiszkaContainer);
        // DODANIE OBRAZKA
        const imgContainer = $('<div>').addClass('fiszka_img_container');
        if (Array.isArray(fiszka.img) && fiszka.img.length > 0) {
            fiszka.img.forEach((imgSrc, index) => {
                const imgElement = $('<img class="fiszka_img">').attr('src', imgSrc);
                imgContainer.append(imgElement);
                if (index > 0) {
                    imgElement.hide();
                }
            });
        } else if (typeof fiszka.img === 'string') {
            // Jeśli jest tylko jedno zdjęcie, dodajemy je do imgContainer dla każdej fiszki
            const imgElement = $('<img class="fiszka_img">').attr('src', fiszka.img);
            imgContainer.append(imgElement);
        }
        fiszkaContainer.append(imgContainer); //DODANIE OBRAZKA

        const selectedLikes = [];
        console.log('hej10', selectedLikes);

// Funkcja do obsługi kliknięcia na przycisk "likeButton"
        function handleLikeButtonClick(index) {
            const likeButton = $(this);
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            const selectedLike = likeButton.text();
            console.log('Zaktualizowano przycisk dla indeksu:', index);
            console.log('Aktualne wartości selectedLikes:', selectedLikes);
        }
        const likeButton = $('<a>').addClass('like').attr('href', '#');
        const likeText = $('<span>').text('Śmieszna historia');
        likeButton.append(likeText);
        fiszkaContainer.append(likeButton);

        // Tworzymy kontener opcji "like" i dodajemy opcje do kontenera
        const likeOptionsContainer = $('<div>').attr('id', 'likeOptionsContainer');
        const likeOption1 = createLikeOption('thumbsUp', '👍 Śmieszne');
        const likeOption2 = createLikeOption('heart', '❤️ Miłe');
        const likeOption3 = createLikeOption('star', '⭐ Pamiętliwe');
        likeOptionsContainer.append(likeOption1, likeOption2, likeOption3);

        // Dodajemy kontener opcji "like" do docelowego kontenera
        likeButton.append(likeOptionsContainer);

        // Ukrywamy kontener opcji "like"
        likeOptionsContainer.hide();

        // Obsługa zdarzenia hover na przycisku "like"
        likeButton.hover(function () {
            const buttonPosition = likeButton.offset();
            const buttonWidth = likeButton.outerWidth();

            // Pozycjonujemy kontener opcji "like" nad przyciskiem
            likeOptionsContainer.css({
                top: buttonPosition.top - likeOptionsContainer.outerHeight() - 10,
                left: buttonPosition.left + (buttonWidth / 2) - (likeOptionsContainer.outerWidth() / 2),
                backgroundColor: '#f0f0f0', // Dodajemy szary kolor tła
            }).fadeIn('fast');
        }, function () {
            // Ukrywamy kontener opcji "like" po zjechaniu z przycisku
            likeOptionsContainer.fadeOut('fast');
        });

// Funkcja do umieszczania ikony obok przycisku "story_button" w odpowiedniej fiszce
        function addLikeIconToStoryButton(index, like) {
            const storyButton = fiszkaContainer.find('.story_button').eq(index);
            if (storyButton.length === 0) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }

            // Tworzymy kontener dla ikony i dodajemy ikonę
            const iconContainer = $('<div>').addClass('likeIconContainer');
            const likeIcon = getLikeIcon(like);
            iconContainer.append(likeIcon);

            // Usuwamy wcześniej dodaną ikonę, jeśli istnieje
            storyButton.find('.likeIconContainer').remove();

            // Dodajemy kontener z ikoną do przycisku "story_button"
            storyButton.append(iconContainer);
        }

        function createLikeOption(like, text) {
            const likeOption = $('<div>').addClass('likeOption').attr('data-like', like).text(text);

            // Dodajemy efekt zmiany koloru na lekko ciemniejszy szary po najechaniu myszką na pojedynczą opcję "like"
            likeOption.hover(
                    function () {
                        likeOption.css('background-color', '#dcdcdc'); // Lekko ciemniejszy szary kolor tła dla opcji "like"
                    },
                    function () {
                        likeOption.css('background-color', ''); // Usuwamy styl, aby wrócić do domyślnego tła opcji "like"
                    }
            );

            let likeCounter = 0; // Dodajemy licznik polubień dla każdej opcji "like"

            const counterDiv = $('<div>').addClass('likeCounterDiv'); // Nowy div na licznik

            // Dodajemy ikonę do licznika
            const likeIcon = getLikeIcon(like);
            const iconContainer = $('<span>').addClass('likeIconContainer').append(likeIcon);
            counterDiv.append(iconContainer);

            const likeCounterSpan = $('<span>').addClass('likeCounter').text(` ${likeCounter} `);
            counterDiv.append(likeCounterSpan); // Licznik jest dodany po ikonie

            imgContainer.append(counterDiv); // Dodajemy licznik na zewnątrz kontenera przycisków

            likeOption.click(function (event) {
                event.preventDefault(); // Zapobiegamy domyślnej akcji przycisku

                // Inkrementujemy licznik polubień za każdym razem, gdy opcja "like" zostanie wybrana
                likeCounter++;
                likeCounterSpan.text(` ${likeCounter} `);

                const selectedLike = $(this).data('like');
                const selectedIcon = getLikeIcon(selectedLike);
                likeText.text(text);
                likeButton.removeClass('liked');
                addLikeIconToStoryButton(lastClickedIndex, selectedLike); // Dodaj ikonę do story_button na podstawie wybranej opcji "like"

                // Sprawdź, czy index już istnieje w tablicy
                const existingIndex = selectedLikes.findIndex(item => item.index === lastClickedIndex);
                if (existingIndex !== -1) {
                    // Jeśli index istnieje, zaktualizuj wartość
                    selectedLikes[existingIndex].like = selectedLike;
                } else {
                    // Jeśli index nie istnieje, dodaj nowy wpis
                    selectedLikes.push({index: lastClickedIndex, like: text}); // Dodaj tylko nazwę "like"
                }

                likeOptionsContainer.fadeOut('fast');
                saveSelectedLike(selectedLike, text); // Przekazujemy nazwę "like" i tekst do funkcji saveSelectedLike
            });

            return likeOption;
        }

// Funkcja do zapisywania wybranego "like"
        function saveSelectedLike(selectedLike, text) {
            // Tutaj możesz zapisać wybrany "like" w odpowiednim kontekście, np. wysłać go na serwer, zapisać w lokalnym magazynie itp.
            console.log('Wybrany like:', text);
            console.log('Tekst:', text);
            // Jeśli chcesz użyć go w innych miejscach, możesz przekazać go jako argument do innych funkcji lub zmiennych.
        }

        // Funkcja do pobierania ikony dla wybranego "like"
        function getLikeIcon(like) {
            let icon;
            switch (like) {
                case 'thumbsUp':
                    icon = $('<span class="likeIcon">👍</span>');
                    break;
                case 'heart':
                    icon = $('<span class="likeIcon">❤️</span>');
                    break;
                case 'star':
                    icon = $('<span class="likeIcon">⭐</span>');
                    break;
                default:
                    icon = $('<span class="likeIcon">👍</span>');
            }
            return icon;
        }

        const hashtagContainer = $('<a>').addClass('hashtag-container').attr('href', '#');
        fiszkaContainer.append(hashtagContainer);

        function showStory(index) {
            const currentFiszka = fiszkaContainer;

            // Ukrywamy wszystkie historie w tej konkretnej fiszce
            currentFiszka.find('.fiszka_story').hide();

            // Obsługa mnemoniki
            if (Array.isArray(fiszka.story)) {
                if (index >= 0 && index < fiszka.story.length) {
                    currentFiszka.find('.story-' + index).show();
                }
            } else if (fiszka.story) {
                currentFiszka.find('.story-0').show();
            }

            // Ukrywamy wszystkie obrazy
            currentFiszka.find('.fiszka_img').hide();

            // Obsługa obrazów
            let imgIndex; // Zmienna do przechowywania indeksu obrazka

            if (Array.isArray(fiszka.img)) {
                imgIndex = Math.min(index, fiszka.img.length - 1);
                currentFiszka.find('.fiszka_img').eq(imgIndex).show();
                specificLesson2Ref = fiszka.img[imgIndex];
                console.log("Index obrazka:", imgIndex);
            } else {
                imgIndex = 0; // Ustawienie imgIndex na 0, gdy fiszka.img nie jest tablicą
                currentFiszka.find('.fiszka_img').eq(imgIndex).show();
                specificLesson2Ref = fiszka.img;
                console.log("Index obrazka:", imgIndex);
            }

            lastClickedIndex = index;

            // Obsługa hashtagów
            const selectedCategoryIndex = index * 2;
            const value = fiszka.category1[selectedCategoryIndex];
            const hashtag = fiszka.category1[selectedCategoryIndex + 1];

            hashtagContainer.empty();
            hashtagContainer.text(`${value} #${hashtag}`);

            console.log('Calculated imgIndex:', imgIndex);

            return imgIndex;
        }

        function selectLikeButton(index) {
            console.log("Wybór likeButton dla indeksu:", index);
            const storyButton = $('.story_button').eq(index);
            if (!storyButton.length) {
                console.error('Nie znaleziono przycisku dla indeksu:', index);
                return;
            }

            const likeButton = storyButton.find('.like');
            likeText.find('span').remove();
            likeText.text('Śmieszna historia');

            // Sprawdź, czy index jest zawarty w tablicy selectedLikes
            const selectedLike = selectedLikes.find(item => item.index === index);
            if (selectedLike) {
                // Jeśli index istnieje w tablicy, ustaw ikonę przycisku na wartość z tablicy
                console.log("Wybrano like dla indeksu:", index, "- Like:", selectedLike.like);
                const selectedIcon = getLikeIcon(selectedLike.like); // Przekazujemy tylko nazwę ikony
                console.log('hej5', selectedIcon);
                likeText.html(selectedLike.like); // Ustawiamy ikonę
            } else {
                // Jeśli index nie istnieje, ustaw domyślny tekst
                console.log("Brak wyboru like dla indeksu:", index, "- Ustawianie domyślnego tekstu");
                likeButton.text('Śmieszna historia');
            }
        }
        // NIEZNACZĄCE WYJAŚNIENIE SŁOWA
        const sentenceDiv = $('<div>').attr('id', 'part');
        fiszka.sentence.forEach(word => {
            sentenceDiv.append($('<button>').text(word));
        });
        // Dodanie diva z przyciskami do kontenera fiszki
        fiszkaContainer.append(sentenceDiv);

        console.log('Przed utworzeniem wordDiv');
        const wordDiv = $('<div>').attr('id', 'word');
        const button = $('<button>').attr('id', 'storyone').html('<b>' + fiszka.desc + '</b>');
        const audio = $('<audio>').attr({
            id: 'music' + fiszka.id,
            preload: 'true'
        });
        const source = $('<source>').attr('src', fiszka.word);
        audio.append(source);
        const audioplayerDiv = $('<div>').attr('id', 'audioplayer' + fiszka.id).addClass('audioplayer'); // Dodano klasę 'audioplayer'
        const pButton = $('<button>').attr('id', 'pButton' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

        pButton.css({
            height: '60px',
            width: '60px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            float: 'left',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        });

        audioplayerDiv.append(pButton);
        wordDiv.append(button);
        wordDiv.append(audio);
        wordDiv.append(audioplayerDiv);
        fiszkaContainer.append(wordDiv);
        console.log('Po utworzeniu wordDiv');

// DODANIE MNEMOTECHNIKI
        if (Array.isArray(fiszka.story)) {
            // Jeśli story jest tablicą, iterujemy przez wszystkie jej elementy
            fiszka.story.forEach((story, index) => {
                const storyContainer = $('<div>').addClass('fiszka_story story-' + index).html(story);
                fiszkaContainer.append(storyContainer);
                console.log("Dodano story: ", story);  // Debugowanie
            });
        } else if (fiszka.story) {
            // Jeśli story jest pojedynczym stringiem, dodajemy go bezpośrednio
            const storyContainer = $('<div>').addClass('fiszka_story story-0').html(fiszka.story);
            fiszkaContainer.append(storyContainer);
            console.log("Dodano story: ", fiszka.story);  // Debugowanie
        }
        console.log('Przed utworzeniem wordDiv');

// Utworzenie reszty elementów zgodnie z istniejącym kodem
        const wordDiv2 = $('<div>').attr('id', 'word2');
        const audio2 = $('<audio>').attr({
            id: 'music2' + fiszka.id,
            preload: 'true'
        });
        const source2 = $('<source>').attr('src', fiszka.word);
        audio2.append(source2);
        const audioplayerDiv2 = $('<div>').attr('id', 'audioplayer2' + fiszka.id).addClass('audioplayer2'); // Dodano klasę 'audioplayer'
        const pButton2 = $('<button>').attr('id', 'pButton2' + fiszka.id).addClass('pButton play').click(function () {
            console.log('playb called for fiszka.id:', fiszka.id);
            window['playb' + fiszka.id]();
        });

// Utworzenie elementów za pomocą jQuery
        const timelineDiv = $('<div>').attr('id', 'timeline' + fiszka.id);
        const playheadDiv = $('<div>').attr('id', 'playhead' + fiszka.id);

// Dodanie playhead do timeline
        timelineDiv.append(playheadDiv);

// Dodanie elementów do odpowiednich kontenerów
        audioplayerDiv.append(pButton2);
        wordDiv2.append(audio2);
        wordDiv2.append(audioplayerDiv2);
        wordDiv2.append(timelineDiv); // Dodano timeline do wordDiv
        fiszkaContainer.append(wordDiv2);

        console.log('Po utworzeniu wordDiv');
        // Zdefiniuj zmienną początkową na poziomie wyższym
        let initialSpecificLesson2Ref;
        let specificLesson2Ref;
        let lastClickedIndex = null;
        let lastApprovedIndex = null; // Zmienna do przechowywania ostatnio zatwierdzonego indeksu
        let approvedIndexes = []; // Tablica przechowująca zatwierdzone indeksy
        let approvedColors = [];

// DODANIE PRZYCISKÓW
        if (Array.isArray(fiszka.category1)) {
            const storyButtonContainer = $('<div>'); // Kontener na przyciski
            const randomIndex = Math.floor(Math.random() * fiszka.category1.length / 2);
            let lastClickedButton; // Zmienna do przechowywania ostatnio klikniętego przycisku w danej fiszce

            fiszka.category1.slice(0, 5).forEach((category1, index) => {
                const valueIndex = index * 2; // Indeks wartości w tablicy, zaczynając od 0
                const hashtagIndex = valueIndex + 1; // Indeks hashtagu w tablicy

                const value = fiszka.category1[valueIndex];
                const hashtag = fiszka.category1[hashtagIndex];

                const displayText = `${value} #${hashtag}`;

                const storyButton = $('<button>')
                        .text(displayText)
                        .addClass('story_button')
                        .click(function () {
                            showStory(index);
                            lastClickedIndex = index;

                            // Usuwamy zieloną klasę tylko z poprzedniego przycisku w danej fiszce
                            if (lastClickedButton) {
                                lastClickedButton.removeClass('green-button');
                            }

                            // Usuwamy klasę imgIndex z poprzedniego przycisku w danej fiszce
                            $('.story_button').removeClass((index, className) => (className.match(/imgIndex-\d+/g) || []).join(' '));
                            // Dodajemy klasę imgIndexNull do przycisków, które nie zostały jeszcze zatwierdzone
                            $('.fiszka').addClass('imgIndexNull').removeClass('imgIndex-0 imgIndex-1 imgIndex-2 imgIndex-3 imgIndex-4 ');

                            // Dodajemy zieloną klasę tylko dla aktualnie klikniętego przycisku w danej fiszce
                            $(this).addClass('green-button');
                            $('.story_button').removeClass('active-button');
                            $(this).addClass('active-button');
                            $('.story_button').each(function (index) {
                                if ($(this).hasClass('orange-button')) {
                                    $(this).removeClass('green-button');
                                    $(this).addClass('orange-button');
                                }
                            });

                            // Jeśli przycisk został wcześniej zatwierdzony, przywróć jego zatwierdzoną klasę
                            if (approvedIndexes.includes(lastClickedIndex)) {
                                fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
                            }

                            // Zapisujemy ostatnio kliknięty przycisk w danej fiszce
                            lastClickedButton = $(this);
                            handleLikeButtonClick();
                        });

                if (index === randomIndex) {
                    // Sprawdzamy, czy fiszka.img jest tablicą czy pojedynczą wartością
                    if (Array.isArray(fiszka.img)) {
                        newImgIndex = Math.min(index, fiszka.img.length - 1); // Aktualizacja zmiennej globalnej imgIndex
                        specificLesson2Ref = fiszka.img[newImgIndex];
                        console.log('hej432', specificLesson2Ref);
                    } else if (fiszka.img) {
                        newImgIndex = 0; // Przypisanie domyślnego indeksu dla pojedynczego obrazka
                        specificLesson2Ref = fiszka.img; // Przypisanie pojedynczej wartości do specificLesson2Ref
                        console.log('hej432', specificLesson2Ref);
                    }
                    initialSpecificLesson2Ref = specificLesson2Ref;
                    console.log('Hej7', specificLesson2Ref);
                    storyButton.addClass('green-button');
                    lastClickedButton = storyButton;
                    lastApprovedIndex = index; // Ustaw ostatnio zatwierdzony indeks na indeks losowego przycisku
                }

                // Dodaj typ "like" dla tej fiszki do tablicy
                storyButtonContainer.append(storyButton);
            });

            fiszkaContainer.append(storyButtonContainer);

            // WYWOŁANIE TABLICY
            showStory(randomIndex);
            console.log(randomIndex);

            // Użycie specificLesson2Ref po załadowaniu strony
            console.log("Początkowy specificLesson2Ref:", initialSpecificLesson2Ref);

        } else if (fiszka.category1) {
            // Jeśli fiszka.category1 nie jest tablicą
            newImgIndex = 0; // Przypisanie domyślnego indeksu dla pojedynczego obrazka
            specificLesson2Ref = fiszka.img; // Przypisanie pojedynczej wartości do specificLesson2Ref
            initialSpecificLesson2Ref = specificLesson2Ref;
            console.log('Hej7', specificLesson2Ref);

            // Stwórz pojedynczy przycisk dla pojedynczej wartości category1
            const displayText = `${fiszka.category1} #${fiszka.category1}`;
            const storyButton = $('<button>')
                    .text(displayText)
                    .addClass('story_button2 green-button') // Od razu przypisz zieloną klasę
                    .click(function () {
                        showStory(0); // Przekazujemy 0 jako indeks, ponieważ jest to pojedyncza wartość
                        lastClickedIndex = 0;

                        // Zapisujemy ostatnio kliknięty przycisk
                        lastClickedButton = $(this);
                        handleLikeButtonClick();
                    });

            fiszkaContainer.append(storyButton);
            lastClickedButton = storyButton;
            lastApprovedIndex = 0; // Ustaw ostatnio zatwierdzony indeks na 0

            // WYWOŁANIE POJEDYNCZEJ HISTORII
            showStory(0);
            console.log("Pojedyncza wartość dla category1, specificLesson2Ref:", specificLesson2Ref);
        }
        $('.fiszka_button_trening').click(function () {
            // Dodaj klasę pomarańczową tylko dla przycisku zatwierdzonego
            $('.story_button').each(function (index) {
                if ($(this).hasClass('green-button')) {
                    $(this).removeClass('green-button');
                    $(this).addClass('orange-button');
                }
            });
        });
        console.log('hej555ax', lessons2b[2]);
// DODANIE PRZYCISKU TRENING
        fiszkaContainer.append($('<button>').text('TRENING').addClass('fiszka_button fiszka_button_trening').click(function () {

            activateFiszka(fiszka.id, false);

            let id = fiszka.id;
            let parametr = '';

            // Sprawdzenie, czy idFiszki jest tablicą
            if (Array.isArray(fiszka.id)) {
                id = fiszka.id[0];         // Pierwszy element tablicy jako id
                parametr = fiszka.id[1] || ''; // Drugi element tablicy jako parametr, jeśli istnieje
            }

            // Tworzenie selektora na podstawie id i parametru
            const className = `fiszka-${id}\\,${parametr}`;
            const selector = `.${className}`;
            console.log('hej201', parametr);
            let first = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[0]) {
                first = true;
                console.log('hej200', first);

            }
            let second = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[1]) {
                second = true;
                console.log('hej200', second);

            }
            let third = false;
            // Jeśli parametr jest równy lessons2b[0], uruchom aktywujObrazek
            if (parametr === lessons2b[2]) {
                third = true;
                console.log('hej200', third);

            }

            console.log("Trening clicked on fiszka nr " + fiszka.id);
            console.log("lessonId2:", lessonId2);
            console.log("nazwa", lessons2b[2]);
            // Wyswietlenie danej wartości img dla danej fiszka.id
            const specificLesson2 = specificLesson2Ref || initialSpecificLesson2Ref;
            console.log("img dla fiszki o id", fiszka.id, ":", specificLesson2);
            specificLesson2Ref = fiszka.img;
            // Znajdź indeks dla danej fiszki w tablicy lessons2[lessonId2]
            console.log('story55', specificLesson2Ref);
            // Używamy lastClickedIndex zamiast index
            imgIndex = showStory(lastClickedIndex); // Wywołanie funkcji showStory i zapisanie zwróconego indeksu obrazka
            console.log('działa', specificLesson2Ref);
            aktywujObrazek(first, second, third, specificLesson2, 'obrazek-container2b', true, fiszka, imgIndex); // Przekazanie imgIndex do funkcji aktywujObrazek
            // Dodajemy zatwierdzony indeks do tablicy
            approvedIndexes.push(lastClickedIndex);
            console.log(approvedIndexes);

            // Dodanie zatwierdzonej klasy imgIndex do fiszkaContainer po kliknięciu przycisku "TRENING"
            fiszkaContainer.addClass('imgIndex-' + lastClickedIndex);
        }));

        fiszkaContainer.append($('<button>').text('ZNAM').addClass('fiszka_button fiszka_button_znam').click(function () {
            console.log("Znam clicked on fiszka nr " + fiszka.id);
            activateFiszka(fiszka.id, true);
        }));

        // Dodanie kontenera fiszki do body
        $('.grid-container').append(fiszkaContainer);
        console.log(`Generated2: [${fiszka}]`);
        initAudio(fiszka.id);
    });
}



function getRandomFiszki(fiszkiArray, n) {
    const shuffledFiszki = fiszkiArray.sort(() => Math.random() - 0.5);
    return shuffledFiszki.slice(0, n);
}


function showFiszki() {
    const selectedFiszki = getRandomFiszki(fiszki, 18);
    // Wygeneruj bloki kodu dla wybranych fiszek
    selectedFiszki.forEach(fiszka => {
        console.log(fiszka);
        generateFiszkaBlock(fiszka);
    });
}
function removeFiszka(idFiszki, lessonId2) {
    let id = idFiszki;
    let parametr = '';

    if (Array.isArray(idFiszki)) {
        // Połącz wartości z tablicy id w jeden ciąg znaków oddzielony przecinkami
        id = idFiszki.slice(0, 3).join(',');
        // Obsługa ewentualnego dodatkowego parametru (np. czwartego elementu w tablicy)
        parametr = idFiszki.length > 3 ? idFiszki[3] : '';
    }

    // Tworzenie klasy CSS z odpowiednim formatowaniem (poprawione usunięcie przecinków w CSS)
    const className = `fiszka-${id}${parametr ? '\\,' + parametr : ''}`;
    const selector = `.${className.replace(/,/g, '\\,')}`;
    console.log(selector);
    const $fiszkaToRemove = $(selector);
    if ($fiszkaToRemove.length) {
        console.log('Element znaleziony po opóźnieniu, usuwam...');
        $fiszkaToRemove.remove();
    } else {
        console.log('Element nadal nie znaleziony.');
    }
}
// Dodajemy styl dla zielonego przycisku
$('<style>.green-button { background-color: green; color: white; }</style>').appendTo('head');
// Dodajemy styl dla aktywnego przycisku
$('<style>.active-button { border: 2px solid red; }</style>').appendTo('head');

window.fiszki = fiszki10;