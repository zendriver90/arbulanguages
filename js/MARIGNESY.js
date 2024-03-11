        // Pobierz istniejące wartości z localStorage (jeśli istnieją)
        const savedMarginTop = localStorage.getItem('marginTop');
        const savedMarginBottom = localStorage.getItem('marginBottom');

        console.log('Saved values from localStorage:', savedMarginTop, savedMarginBottom);

        // Ustaw domyślne wartości lub skorzystaj z zapisanych wartości z localStorage
        let marginTop = savedMarginTop !== null ? JSON.parse(savedMarginTop) : {};
        let marginBottom = savedMarginBottom !== null ? JSON.parse(savedMarginBottom) : {};

        console.log('Calculated values:', marginTop, marginBottom);

        // Utwórz lub pobierz unikalne wartości marginesów dla danej fiszki
        const fiszkaId = fiszka.id.join('-');

        // Ustaw margines na zero dla pierwszej fiszki
        marginTop[fiszkaId] = marginTop[fiszkaId] !== undefined ? marginTop[fiszkaId] : fiszkaId === '1' ? 0 : Math.floor(Math.random() * 160);
        marginBottom[fiszkaId] = marginBottom[fiszkaId] !== undefined ? marginBottom[fiszkaId] : fiszkaId === '1' ? 0 : Math.floor(Math.random() * 80);

        // Zapisz wartości marginesów do localStorage
        localStorage.setItem('marginTop', JSON.stringify(marginTop));
        localStorage.setItem('marginBottom', JSON.stringify(marginBottom));

        console.log('Values after saving to localStorage:', marginTop, marginBottom);

        // Tworzenie kontenera fiszki
        const fiszkaContainer = $('<div>').addClass('fiszka fiszka-' + fiszka.id);

        // Ustaw marginesy w elemencie fiszkaContainer
        fiszkaContainer.css({
            'margin-top': `${fiszka.id[0] % 2 === 0 ? -marginTop[fiszkaId] + 170 : -marginTop[fiszkaId] + 40}px`,
            'margin-bottom': `${fiszka.id[0] % 2 !== 0 ? marginBottom[fiszkaId] + 70 : -marginBottom[fiszkaId] + 50}px`,
        });