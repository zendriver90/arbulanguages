// Utwórz lub otwórz bazę danych IndexedDB
const request = indexedDB.open('licznikiDB', 1);
let db, buttonCounters;

request.onupgradeneeded = function(event) {
  db = event.target.result;

  // Utwórz obiekt przechowujący liczniki
  const objectStore = db.createObjectStore('liczniki', { keyPath: 'id' });

  // Dodaj początkowe liczniki dla przycisków
  objectStore.add({ id: 'jQueryColorChange', count: 0 });
  objectStore.add({ id: 'jQueryColorChange11', count: 0 });
  objectStore.add({ id: 'jQueryColorChange111', count: 0 });
  objectStore.add({ id: 'jQueryColorChange2', count: 0 });
  objectStore.add({ id: 'jQueryColorChange22', count: 0 });
  objectStore.add({ id: 'jQueryColorChange222', count: 0 });
};

request.onsuccess = function(event) {
  db = event.target.result;

  // Pobierz liczniki z bazy danych
  const transaction = db.transaction(['liczniki'], 'readwrite');
  const objectStore = transaction.objectStore('liczniki');
  buttonCounters = {};

  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      buttonCounters[cursor.value.id] = cursor.value.count;
      cursor.continue();
    } else {
      // Zainicjuj przyciski
      initializeButtons();
    }
  };
};

function initializeButtons() {
  const buttons = document.querySelectorAll('button');

  // Przypisz funkcje obsługujące kliknięcia przycisków
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      const buttonId = button.id;

      // Zwiększ licznik przycisku
      buttonCounters[buttonId]++;

      // Zaktualizuj wyniki na stronie
      updateResults();
    });
  });
}

// Zapisz wartości liczników przed opuszczeniem strony
window.addEventListener('beforeunload', function() {
  saveCounters();
});

// Przywróć wartości liczników po załadowaniu strony
window.addEventListener('load', function() {
  restoreCounters();
});

// Funkcja zapisująca wartości liczników
function saveCounters() {
  const transaction = db.transaction(['liczniki'], 'readwrite');
  const objectStore = transaction.objectStore('liczniki');

  objectStore.put({ id: 'jQueryColorChange', count: buttonCounters['jQueryColorChange'] });
  objectStore.put({ id: 'jQueryColorChange11', count: buttonCounters['jQueryColorChange11'] });
  objectStore.put({ id: 'jQueryColorChange111', count: buttonCounters['jQueryColorChange111'] });
  objectStore.put({ id: 'jQueryColorChange2', count: buttonCounters['jQueryColorChange2'] });
  objectStore.put({ id: 'jQueryColorChange22', count: buttonCounters['jQueryColorChange22'] });
  objectStore.put({ id: 'jQueryColorChange222', count: buttonCounters['jQueryColorChange222'] });
}

// Funkcja przywracająca wartości liczników
function restoreCounters() {
  const transaction = db.transaction(['liczniki'], 'readwrite');
  const objectStore = transaction.objectStore('liczniki');
  buttonCounters = {};

  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      buttonCounters[cursor.value.id] = cursor.value.count;
      cursor.continue();
    } else {
      // Zaktualizuj wyniki na stronie
      updateResults();
    }
  };
}

function updateResults() {
  const result1 = buttonCounters['jQueryColorChange'] + buttonCounters['jQueryColorChange11'] + buttonCounters['jQueryColorChange111'];
  const result2 = buttonCounters['jQueryColorChange2'] + buttonCounters['jQueryColorChange22'] + buttonCounters['jQueryColorChange222'];

  // Wyświetl wyniki
  document.getElementById('result1').textContent = 'UCZ\u0118 SI\u0118 ' + result1;
  document.getElementById('result2').textContent = 'ZNAM ' + result2;

  // Zapisz zmiany w bazie danych
  const transaction = db.transaction(['liczniki'], 'readwrite');
  const objectStore = transaction.objectStore('liczniki');

  objectStore.put({ id: 'jQueryColorChange', count: buttonCounters['jQueryColorChange'] });
  objectStore.put({ id: 'jQueryColorChange11', count: buttonCounters['jQueryColorChange11'] });
  objectStore.put({ id: 'jQueryColorChange111', count: buttonCounters['jQueryColorChange111'] });
  objectStore.put({ id: 'jQueryColorChange2', count: buttonCounters['jQueryColorChange2'] });
  objectStore.put({ id: 'jQueryColorChange22', count: buttonCounters['jQueryColorChange22'] });
  objectStore.put({ id: 'jQueryColorChange222', count: buttonCounters['jQueryColorChange222'] });
}

// Inicjalizacja wyników na stronie
document.getElementById('result1').textContent = 'UCZ\u0118 SI\u0118 ' + (buttonCounters['jQueryColorChange'] + buttonCounters['jQueryColorChange11'] + buttonCounters['jQueryColorChange111']);
document.getElementById('result2').textContent = 'ZNAM ' + (buttonCounters['jQueryColorChange2'] + buttonCounters['jQueryColorChange22'] + buttonCounters['jQueryColorChange222']);

// Obsługa zmiany wartości liczników przez inną część aplikacji
function updateCounter(buttonId, count) {
buttonCounters[buttonId] = count;
updateResults();
}