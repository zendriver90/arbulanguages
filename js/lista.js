// Początkowy kod, inne deklaracje, itp.

// Sprawdzenie, czy fiszki zostały załadowane
console.log("Dane z fiszka.js:", fiszki);

// Reszta kodu w pliku lista.js
function aktywujPustePole(container, indexElementu) {
    const pustePole = document.createElement('div');
    pustePole.classList.add('puste-pole');

    const element = document.createElement('img');
    element.src = 'obrazek1.jpg'; // Zmień to na rzeczywistą nazwę obrazka
    element.style.width = '100%';
    element.style.height = '100%';

    pustePole.appendChild(element);

    container.insertBefore(pustePole, container.children[0]);
    setTimeout(() => {
        pustePole.classList.add('rozwiniete');
    }, 1000);
}
function aktywujPustePole2(container, indexElementu) {

    const pustePole = document.createElement('div');
    pustePole.classList.add('puste-pole');

    const element = document.createElement('img');
    element.src = 'obrazek2.jpg'; // Zmień to na rzeczywistą nazwę obrazka
    element.style.width = '100%';
    element.style.height = '100%';

    const word = document.createElement('span');
    word.className = 'word';
    word.textContent = expectedWordshej[indexElementu];

    pustePole.appendChild(word);
    pustePole.appendChild(element);

    container.insertBefore(pustePole, container.children[3]);
    setTimeout(() => {
        pustePole.classList.add('rozwiniete');
    }, 1000);
}

function aktywujPustePole3(container, indexElementu) {
    const pustePole = document.createElement('div');
    pustePole.classList.add('puste-pole');

    const element = document.createElement('img');
    element.src = 'obrazek2.jpg'; // Zmień to na rzeczywistą nazwę obrazka
    element.style.width = '100%';
    element.style.height = '100%';

    pustePole.appendChild(element);

    container.insertBefore(pustePole, container.children[0]);
    setTimeout(() => {
        pustePole.classList.add('rozwiniete');
    }, 1000);
}

function aktywujPustePole4(container, indexElementu) {
    const pustePole = document.createElement('div');
    pustePole.classList.add('puste-pole');

    const element = document.createElement('img');
    element.src = 'obrazek3.jpg'; // Zmień to na rzeczywistą nazwę obrazka
    element.style.width = '100%';
    element.style.height = '100%';

    pustePole.appendChild(element);

    container.insertBefore(pustePole, container.children[0]);
    setTimeout(() => {
        pustePole.classList.add('rozwiniete');
    }, 1000);
}

function migotanieKropki(orangeDot) {
    setTimeout(() => {
        orangeDot.style.display = 'none';
    }, 150);
    setTimeout(() => {
        orangeDot.style.display = 'block';
    }, 300);
    setTimeout(() => {
        orangeDot.style.display = 'none';
    }, 450);
    setTimeout(() => {
        orangeDot.style.display = 'block';
    }, 600);
    setTimeout(() => {
        orangeDot.style.display = 'none';
    }, 750);
}

const obrazki = [
    'obrazek1.jpg',
    'obrazek2.jpg',
    'obrazek3.jpg',
    'obrazek4.jpg',
    'obrazek5.jpg',
    'obrazek6.jpg',
    'obrazekb1.jpg',
    'obrazekb2.jpg',
    'obrazekb3.jpg',
    'obrazekb4.jpg',
    'obrazekb5.jpg',
    'obrazekb6.jpg'
];

var clickObrazek = 0;
var clickText = 0;

function aktywujObrazek2(lessonIdParam, indexElementu, czyObrazek) {
    console.log('hej:', indexElementu);

    let nazwaKontenera;

    if (lessonIdParam == 1) {
        nazwaKontenera = 'obrazek-container1';
    } else if (lessonIdParam == 2) {
        nazwaKontenera = 'obrazek-container2';
    } else if (lessonIdParam == 3) {
        nazwaKontenera = 'obrazek-container3';
    } else {
        // Obsługa innych przypadków, jeśli jest to konieczne
        console.log('Nieznany lessonId2:', lessonIdParam);
        return; // Zakończ funkcję w przypadku nieznanej wartości lessonIdParam
    }

    console.log('hej:', indexElementu);

    const container = document.getElementById(nazwaKontenera);

    if (indexElementu) {
        const element = czyObrazek ? document.createElement('img') : document.createElement('div');

        if (czyObrazek) { // sprawdzenie czy ładować obrazek czy słowo
            console.log('hej:', indexElementu);
            element.src = indexElementu;
            element.style.width = '100px';
            element.style.height = 'auto';
            clickObrazek++;
        }
        container.appendChild(element);
    } 
}

function aktywujObrazek(lessonIdParam, indexElementu, listaId, czyObrazek, fiszka, img) {
    console.log('hej:', indexElementu);

    let nazwaKontenera;

    if (lessonIdParam == 1) {
        nazwaKontenera = 'obrazek-container1';
    } else if (lessonIdParam == 2) {
        nazwaKontenera = 'obrazek-container2';
    } else if (lessonIdParam == 3) {
        nazwaKontenera = 'obrazek-container3';
    } else {
        // Obsługa innych przypadków, jeśli jest to konieczne
        console.log('Nieznany lessonId2:', lessonIdParam);
        return; // Zakończ funkcję w przypadku nieznanej wartości lessonIdParam
    }
    console.log('0 - funkcja odtwarza sie za dużo razy tylko do tego miejsca');

    const container = document.getElementById(nazwaKontenera);
    console.log('0-1 - funkcja odtwarza sie za dużo razy tylko do tego miejsca');

    console.log('indexElementu:', indexElementu);
    console.log('fiszka.img:', fiszka);
    console.log('fiszka:', img);
const fiszkaImgElement = fiszka.img;
    if (indexElementu) {
        console.log('skrypt dotarł tutaj - 1');
        // Sprawdzamy, czy istnieje jakiś element związany z tą fiszką w kontenerze
        console.log('Przed querySelector');
const existingElement = document.querySelector(`#${nazwaKontenera} [data-fiszka="${fiszka.id.join(', ')}"]`);

        if (existingElement) {
            console.log('skrypt dotarł tutaj - 2');
            // Odczytujemy istniejące dane z localStorage
            let storedData = JSON.parse(localStorage.getItem('wybraneElementy')) || [];

            console.log('Dane z localStorage przed aktualizacją:', storedData);

            // Usuwamy poprzedni element, jeśli istnieje
            storedData = storedData.filter((item) => item.indexElementu !== existingElement.src);

            // Jeśli element już istnieje, aktualizujemy tylko obrazek
            if (czyObrazek) {
                // AKTUALIZOWANIE OBRAZKA
                existingElement.src = indexElementu;

                // Sprawdzamy, czy element już istnieje w tablicy
                const isElementExist = storedData.some((item) => item.indexElementu === indexElementu);

                console.log('Czy element już istnieje:', isElementExist);

                // Jeśli nie istnieje, dodajemy nowy element do tablicy
                if (!isElementExist) {
                    storedData.push({indexElementu, lessonIdParam});

                    console.log('Dodano nowy element:', {indexElementu});

                    // Zapisujemy zaktualizowane dane z powrotem do localStorage
                    localStorage.setItem('wybraneElementy', JSON.stringify(storedData));

                    console.log('Zaktualizowane dane w localStorage:', storedData);
                }
            }
        } else {
            console.log('skrypt dotarł tutaj - 3');
            // Jeśli element nie istnieje, tworzymy nowy//DODAWANIE NOWEGO OBRAZKA
            const element = czyObrazek ? document.createElement('img') : document.createElement('div');
            element.setAttribute('data-fiszka', fiszka.id.join(', '));

            if (czyObrazek) {
                console.log('skrypt dotarł tutaj - 4');
                console.log('hej:', indexElementu);
                element.src = indexElementu;
                element.style.width = '100px';
                element.style.height = 'auto';
                clickObrazek++;
            }

            if (czyObrazek) {
                const orangeDot = document.createElement('div');
                orangeDot.className = 'orange-dot';

                container.appendChild(orangeDot);

                orangeDot.style.display = 'block';
                migotanieKropki(orangeDot);

                const word = document.createElement('span');
                word.className = 'word';
                word.textContent = fiszka.key;
                container.appendChild(word);
                ostatniElementWord = word;
                ostatniElementDot = orangeDot;
            }

            // Aktualizujemy obrazek
            while (element.firstChild) {
                element.removeChild(container.firstChild);
            }

            // Dodajemy nowy element do kontenera
            container.appendChild(element);

            // Odczytujemy istniejące dane z localStorage
            let storedData = JSON.parse(localStorage.getItem('wybraneElementy')) || [];

            console.log('Dane z localStorage przed aktualizacją:', storedData);

            // SprtoredData.some((item) => item.indexElementu === indexElementu)awdzamy, czy element już istnieje w tablicy
            const isElementExist = storedData.some((item) => item.indexElementu === indexElementu);

            console.log('Czy element już istnieje:', isElementExist);

            // Jeśli nie istnieje, dodajemy nowy element do tablicy
            if (!isElementExist) {
                storedData.push({indexElementu, lessonIdParam});

                console.log('Dodano nowy element:', {indexElementu, lessonIdParam});

                // Zapisujemy zaktualizowane dane z powrotem do localStorage
                localStorage.setItem('wybraneElementy', JSON.stringify(storedData));

                console.log('Zaktualizowane dane w localStorage:', storedData);
            }
        }
    } else {
        alert('Błędny indeks obrazka!');
    }
}
window.addEventListener('load', function () {
    const storedData = JSON.parse(localStorage.getItem('wybraneElementy')) || [];

    // Wykorzystaj te dane do odtworzenia wcześniej wybranych elementów
    storedData.forEach(({ indexElementu, lessonIdParam }) => {
        console.log(`Próba odtworzenia elementu o  indeksie ${indexElementu}...`);
        aktywujObrazek2(lessonIdParam, indexElementu, true);
    });
});