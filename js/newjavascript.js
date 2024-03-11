        // Zawsze wywołaj migotanieKropki, niezależnie od tego, czy element istnieje czy jest dodawany
        const alwaysExistingDot = document.querySelector(`#${nazwaKontenera} .orange-dot`);
        if (alwaysExistingDot) {
            migotanieKropki(alwaysExistingDot);
        }
        console.log('obrazek:', clickObrazek);
        console.log('text:', clickText);
        
         else {
                element.textContent = fiszka.key;
                element.style.height = '30px';
                element.style.backgroundColor = 'green';
                element.style.fontSize = '18px'; // Ustawiamy rozmiar tekstu
                element.style.textAlign = 'center'; // Wycentrowanie tekstu
                element.style.margin = '3px'; // Wycentrowanie tekstu
                clickText++;
            }