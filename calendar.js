console.log("calendar.js działa");

// Sprawdzenie danych
if (!window.fiszki10_part1) {
  throw new Error("BRAK fiszki10_part1 – sprawdź fiszki10_part1");
}

const calendarEl = document.getElementById("calendar");

// --- Konfiguracja miesięcy kwiecień 2025 → grudzień 2025 ---
const monthsPL = [
  "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec",
  "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
];

const startYear = 2025;
const startMonth = 3; // kwiecień
const endMonth = 11;  // grudzień

// --- Zliczamy wpisy na dni ---
const dayCounts = {};
fiszki10_part1.forEach(item => {
  const raw = item.data[0]; // np. "15 kwiecień"
  dayCounts[raw] = (dayCounts[raw] || 0) + 1; // pełna data jako klucz
});

// --- Tworzenie miesięcy ---
const monthsToAdd = [];

for (let m = startMonth; m <= endMonth; m++) {
  const monthDiv = document.createElement("div");
  monthDiv.className = "month";
  monthDiv.innerHTML = `<h3>${monthsPL[m]} ${startYear}</h3>`;

  // --- Tworzenie dni w tygodniach ---
  const daysInMonth = new Date(startYear, m + 1, 0).getDate(); // liczba dni w miesiącu
  const firstDayWeekday = new Date(startYear, m, 1).getDay(); // 0 = niedziela

  const weeks = [];
  let dayNum = 1;
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      if ((w === 0 && d < firstDayWeekday) || dayNum > daysInMonth) {
        week.push(null);
      } else {
        week.push(dayNum++);
      }
    }
    weeks.push(week);
  }

  // --- Render dni ---
  weeks.forEach(weekDays => {
    const week = document.createElement("div");
    week.className = "week";

    weekDays.forEach(day => {
      const dayEl = document.createElement("div");
      dayEl.className = "day";

      if (!day) {
        dayEl.classList.add("empty");
      } else {
        const dateKey = `${day} ${monthsPL[m]}`;
        dayEl.textContent = day;
        if (dayCounts[dateKey]) {
          dayEl.style.cursor = "pointer";

          const count = document.createElement("div");
          count.className = "day-count";
          count.textContent = dayCounts[dateKey];
          dayEl.appendChild(count);

          // Kliknięcie na dzień
          dayEl.addEventListener("click", () => {
            showEntriesForDay(day, monthsPL[m]);
          });
        }
      }

      week.appendChild(dayEl);
    });

    monthDiv.appendChild(week);
  });

  monthsToAdd.push(monthDiv);
}

// --- Dodanie miesięcy do kalendarza w kolejności, aby grudzień 2025 był po prawej ---
monthsToAdd.forEach(monthDiv => {
  calendarEl.appendChild(monthDiv);
});

// --- Przewinięcie do prawej strony (najnowszy miesiąc) ---
const calendarScroll = document.getElementById("calendar-scroll");
calendarScroll.scrollLeft = calendarScroll.scrollWidth;

// --- Funkcja wyświetlania wpisów ---
function showEntriesForDay(dayNum, monthName) {
  const container = document.getElementById("day-content");
  container.innerHTML = ""; // czyścimy poprzednie wpisy

  const entries = fiszki10_part1.filter(item => {
    const raw = item.data[0]; // np. "15 kwiecień"
    const d = parseInt(raw, 10);
    const m = raw.split(" ")[1];
    return d === dayNum && m === monthName;
  });

  if (entries.length === 0) {
    container.textContent = "Brak wpisów dla danego dnia";
    return;
  }

  entries.forEach(item => {
    const post = document.createElement("div");
    post.className = "post";
    post.style.display = "block";

    const shortText = `📌 ${item.data[0]}`;
    const fullText = item.textPL?.[0] || "(brak tekstu)";

    post.innerHTML = `
      <p><strong>Paweł Babik napisał:</strong></p>
      <div class="tags">
        <button class="tag">#zmysły</button>
        <button class="tag">#mindset</button>
      </div>
      <div class="short-text">${shortText}</div>
      <div class="full-text" style="display: none; margin-top: 10px;">${fullText}</div>
      <button class="toggle-btn" style="margin: 10px 0px; display: inline-block;">Zobacz wpis</button>
    `;

    container.appendChild(post);

    const btn = post.querySelector(".toggle-btn");
    const fullTextEl = post.querySelector(".full-text");
    btn.addEventListener("click", () => {
      if (fullTextEl.style.display === "none") {
        fullTextEl.style.display = "block";
        btn.textContent = "Ukryj wpis";
      } else {
        fullTextEl.style.display = "none";
        btn.textContent = "Zobacz wpis";
      }
    });
  });
}