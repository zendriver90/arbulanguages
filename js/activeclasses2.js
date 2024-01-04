$(document).ready(function() {
  const dbPromise = window.indexedDB.open('MyDatabase', 1);

  dbPromise.onupgradeneeded = function(event) {
    const db = event.target.result;

    // Utworzenie obiektu składowego "ActiveClasses", jeśli nie istnieje
    if (!db.objectStoreNames.contains('ActiveClasses')) {
      db.createObjectStore('ActiveClasses');
    }
  };

  dbPromise.onsuccess = function(event) {
    console.log('Baza danych IndexedDB utworzona lub już istnieje.');

    const db = event.target.result;
    const transaction = db.transaction(['ActiveClasses'], 'readonly');
    const store = transaction.objectStore('ActiveClasses');
    const request = store.get('itemitem');

    request.onsuccess = function() {
      const activeClasses = request.result;

      if (activeClasses) {
        // Ustawienie aktywnych klas w elemencie #itemitem
        if (activeClasses.includes('bordered')) {
          $('#itemitem').removeClass('bordered');
        }
        if (activeClasses.includes('transform')) {
          $('#itemitem').removeClass('transform');
        }
        if (activeClasses.includes('hideBefore')) {
          $('#itemitem').removeClass('hideBefore');
        }
	
	if (activeClasses.includes('bordered')) {
          $('#itemitem2').addClass('bordered');
        }
        if (activeClasses.includes('transform')) {
          $('#itemitem2').addClass('transform');
        }
        if (activeClasses.includes('hideBefore')) {
          $('#itemitem2').addClass('hideBefore');
        }
	
	if (activeClasses.includes('bordered')) {
          $('#itemitem2').removeClass('bordered');
        }
        if (activeClasses.includes('transform')) {
          $('#itemitem2').removeClass('transform');
        }
        if (activeClasses.includes('hideBefore')) {
          $('#itemitem2').removeClass('hideBefore');
        }
	
	if (activeClasses.includes('bordered')) {
          $('#itemitem3').addClass('bordered');
        }
        if (activeClasses.includes('transform')) {
          $('#itemitem3').addClass('transform');
        }
        if (activeClasses.includes('hideBefore')) {
          $('#itemitem3').addClass('hideBefore');
        }
	
	if ($('#itemitem2').hasClass('bordered')) {
          console.log('Klasa "bordered" jest ustawiona w elemencie #itemitem2.');
        } else {
          console.log('Klasa "bordered" nie jest zapisana w elemencie #itemitem2.');
        }
      }
    };

    request.onerror = function() {
      console.error('Błąd podczas odczytu z IndexedDB.');
    };

    transaction.oncomplete = function() {
      db.close();
    };
  };

  dbPromise.onerror = function() {
    console.error('Błąd podczas otwierania bazy danych IndexedDB.');
  };
});