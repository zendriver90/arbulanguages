function startScrolling() {
  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  let targetIndex = 1;
  let intervalId;

  function scrollSections() {
    sections[currentIndex].classList.remove("active");

    if (targetIndex < sections.length) {
      sections[targetIndex].classList.add("active");

      sections[targetIndex].scrollIntoView({
        behavior: "smooth", // Płynne przewijanie
        block: "start" // Przewijaj tak, aby górny krawędź sekcji była widoczna
      });

      currentIndex = targetIndex;
      targetIndex++;
    } else {
      clearInterval(intervalId);
    }
  }

  intervalId = setInterval(scrollSections, 750);
}

    document.addEventListener("DOMContentLoaded", function() {
      const startButton = document.querySelector("#startButton");
      startButton.addEventListener("click", startScrolling);
    });
	function startScrolling2() {
  const sections = document.querySelectorAll(".section");
  const targetIndex = 3; // Indeks docelowej sekcji

  sections[targetIndex].scrollIntoView({
    behavior: "smooth", // Płynne przewijanie
    block: "start" // Przewijaj tak, aby górny krawędź sekcji był widoczny
  });
}

	function startScrolling22() {
  const sections = document.querySelectorAll(".section");
  const targetIndex = 2; // Indeks docelowej sekcji

  sections[targetIndex].scrollIntoView({
    behavior: "smooth", // Płynne przewijanie
    block: "start" // Przewijaj tak, aby górny krawędź sekcji był widoczny
  });
}

	function startScrollingall() {
  const sections = document.querySelectorAll(".section");
  const targetIndex = 4; // Indeks docelowej sekcji

  sections[targetIndex].scrollIntoView({
    behavior: "smooth", // Płynne przewijanie
    block: "start" // Przewijaj tak, aby górny krawędź sekcji był widoczny
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const startButton5 = document.querySelector("#startButton5");
  startButton5.addEventListener("click", startScrollingall);
});
document.addEventListener("DOMContentLoaded", function() {
  const startButton7 = document.querySelector("#startButton7");
  startButton7.addEventListener("click", startScrolling);
});

document.addEventListener("DOMContentLoaded", function() {
  const startButton1 = document.querySelector("#jQueryColorChange111111");
  const startButton2 = document.querySelector("#jQueryColorChange222222");
  startButton1.addEventListener("click", startScrolling2);
  startButton2.addEventListener("click", startScrolling2);
});
document.addEventListener("DOMContentLoaded", function() {
  const startButton1 = document.querySelector("#jQueryColorChange111111i");
  const startButton2 = document.querySelector("#jQueryColorChange222222i");
  startButton1.addEventListener("click", startScrolling22);
  startButton2.addEventListener("click", startScrolling22);
});