        var buttonCounter1 = 0; // Licznik przycisków dla pierwszej kolejki

        function dodajPrzycisk(buttonId) {
            var button = document.createElement("button");
            button.innerText = "Przycisk " + buttonId;

            var container = document.createElement("div");
            container.className = "button-container";
            container.appendChild(button);

            var buttonContainer;
			
			if (buttonId <= 16) {
				buttonContainer = document.getElementById("button-container");
				buttonCounter1++;
			}

            buttonContainer.appendChild(container);

            setTimeout(function() {
                buttonContainer.classList.add("active");
            }, 100);
			
			setTimeout(function() {
        buttonContainer.classList.add("active");

				var buttons = buttonContainer.getElementsByTagName("button");
				if (buttons.length === 4 || buttons.length === 8 || buttons.length === 12 || buttons.length === 16) {
					for (var i = 0; i < buttons.length; i++) {
						buttons[i].classList.add("four-buttons");
					}
				}
			}, 100);
        }
		
		var buttonCounter2 = 0; // Licznik przycisków dla drugiej kolejki

        function dodajPrzycisk2(buttonId) {
            var button = document.createElement("button");
            button.innerText = "Przycisk " + buttonId;

            var container = document.createElement("div");
            container.className = "button-container2";
            container.appendChild(button);

            var buttonContainer;
			
			if (buttonId <= 16) {
				buttonContainer = document.getElementById("button-container2");
				buttonCounter2++;
			}

            buttonContainer.appendChild(container);

            setTimeout(function() {
                buttonContainer.classList.add("active");
            }, 100);
			
			setTimeout(function() {
        buttonContainer.classList.add("active");

				var buttons = buttonContainer.getElementsByTagName("button");
				if (buttons.length === 4 || buttons.length === 8 || buttons.length === 12 || buttons.length === 16) {
					for (var i = 0; i < buttons.length; i++) {
						buttons[i].classList.add("four-buttons2");
					}
				}
			}, 100);
			
        }
		
		// Funkcja wywoływana po załadowaniu strony
    window.onload = function() {
        // Wywołanie funkcji dodajPrzycisk dla wcześniej zapisanych wartości z localStorage
        for (var i = 1; i <= localStorage.getItem("buttonCounter1"); i++) {
            dodajPrzycisk(i);
        }

        for (var i = 1; i <= localStorage.getItem("buttonCounter2"); i++) {
            dodajPrzycisk2(i);
        }
    };
