// Przykład użycia z opcjonalnymi parametrami
// alert("Tekst alertu", "Niestandardowy tytuł", "Zamknij");

// to napisuje domyślną funckcje "alert"
if ($('body').load) {
	window.alert = function (txt, title, buttonText) {
		createCustomAlert(txt, title, buttonText);
	}
}

function createCustomAlert(txt, title = "Alert", buttonText = "OK") {
	const documentElement = document.documentElement;

	// Sprawdź, czy modalContainer już istnieje
	if (document.getElementById("modalContainer")) {
		return;
	}

	// Stwórz element modalContainer
	const modalContainer = document.body.appendChild(document.createElement("div"));
	modalContainer.id = "modalContainer";
	modalContainer.style.height = documentElement.scrollHeight + "px";

	// Stwórz element alertBox
	const alertBox = modalContainer.appendChild(document.createElement("div"));
	alertBox.id = "alertBox";
	alertBox.style.top = documentElement.scrollTop + "px";
	alertBox.style.left = (documentElement.scrollWidth - alertBox.offsetWidth) / 2 + "px";
	alertBox.style.visibility = "visible";

	// Dodaj nagłówek
	const header = alertBox.appendChild(document.createElement("h1"));
	header.appendChild(document.createTextNode(title));

	// Dodaj treść alertu
	const message = alertBox.appendChild(document.createElement("p"));
	//message.appendChild(document.createTextNode(txt));
	message.innerHTML = txt;

	// Dodaj przycisk zamykający
	const closeButton = alertBox.appendChild(document.createElement("a"));
	closeButton.id = "closeBtn";
	closeButton.appendChild(document.createTextNode(buttonText));
	closeButton.href = "#";
	closeButton.focus();

	// Dodaj obsługę kliknięcia na przycisk zamykający
	closeButton.onclick = function () {
		removeCustomAlert();
		return false;
	};

	// Wyświetl alert
	alertBox.style.display = "block";
}

function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

function ful() {
	alert('Alert this pages');
}