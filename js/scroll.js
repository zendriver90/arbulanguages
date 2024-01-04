function scrollToNextSection() {
  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  const endIndex = 4;
  const innerContainers = document.querySelectorAll('.inner-container');

  // Znajdujemy indeks aktualnej sekcji
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].classList.contains("active")) {
      currentIndex = i;
	  break;
    }
  }
  
    // Znajdujemy indeks aktualnej sekcji
  for (let i = 0; i < sections.length; i++) {
    if (innerContainers[i].classList.contains("active")) {
      currentIndex = i;
	  break;
    }
  }

  // Ustaw pierwszy kontener jako aktywny na początku
  // Ustawiamy pierwszy aktywny kontener z odpowiednią transformacją
  const firstActiveContainer = innerContainers[currentIndex];
  const activeImg = firstActiveContainer.querySelector('img');
  activeImg.style.transform = 'rotateX(28deg) rotateY(7deg)';

  document.addEventListener('scroll', () => {
    const scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    innerContainers.forEach((innerContainer, index) => {
      innerContainer.classList.remove('active');
      const inactiveImg = innerContainer.querySelector('img');
      inactiveImg.style.transform = ''; // Przywróć pierwotny format dla nieaktywnych elementów
	  
      if (scrollPercentage >= index / 5 && scrollPercentage < (index + 1) / 5) {
        innerContainer.classList.add('active');
        const activeImg = innerContainer.querySelector('img');
        activeImg.style.transform = 'rotateX(28deg) rotateY(7deg)'; // Add the desired transform here
      }
    });
  });
  // Usuwamy klasę "active" z aktualnej sekcji
  sections[currentIndex].classList.remove("active");

  // Przesuwamy się do następnej sekcji lub zostajemy na ostatniej
  currentIndex = (currentIndex + 1) % sections.length;

  // Dodajemy klasę "active" do nowej aktualnej sekcji
  sections[currentIndex].classList.add("active");

  // Przesuwamy widok do nowej aktualnej sekcji
  const scrollOffset = currentIndex * document.documentElement.offsetHeight;
  document.documentElement.scrollTop = scrollOffset;
}

function scrollToPreviousSection() {
  const sections = document.querySelectorAll(".section");
  let currentIndex = 0;
  const innerContainers = document.querySelectorAll('.inner-container');

  // Znajdujemy indeks aktualnej sekcji
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].classList.contains("active")) {
      currentIndex = i;
      break;
    }
  }
  
      // Znajdujemy indeks aktualnej sekcji
  for (let i = 0; i < sections.length; i++) {
    if (innerContainers[i].classList.contains("active")) {
      currentIndex = i;
      break;
    }
  }

  // Ustaw pierwszy kontener jako aktywny na początku
  innerContainers[0].classList.add('active');
  // Ustawiamy pierwszy aktywny kontener z odpowiednią transformacją
  const firstActiveContainer = innerContainers[currentIndex];
  const activeImg = firstActiveContainer.querySelector('img');
  activeImg.style.transform = 'rotateX(28deg) rotateY(7deg)';

  document.addEventListener('scroll', () => {
    const scrollPercentage = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    innerContainers.forEach((innerContainer, index) => {
      if (scrollPercentage >= index / innerContainers.length && scrollPercentage < (index + 1) / innerContainers.length) {
        innerContainer.classList.add('active');
        // Apply transformation to the active img inside the active container
        const activeImg = innerContainer.querySelector('img');
        activeImg.style.transform = 'rotateX(28deg) rotateY(7deg)'; // Add the desired transform here
      } else {
        innerContainer.classList.remove('active'); // Usuń klasę 'active' dla nieaktywnych elementów
        const inactiveImg = innerContainer.querySelector('img');
        inactiveImg.style.transform = ''; // Przywróć pierwotny format dla nieaktywnych elementów
      }
    });

    // Odblokuj przycisk "Dalej" po cofnięciu się do pierwszego kontenera
    if (scrollPercentage <= 0.01) {
      document.getElementById('scrollToNextSection').disabled = false;
    }
  });

  // Usuwamy klasę "active" z aktualnej sekcji
  sections[currentIndex].classList.remove("active");

  // Przesuwamy się do poprzedniej sekcji lub zostajemy na pierwszej
  currentIndex = (currentIndex - 1 + sections.length) % sections.length;

  // Dodajemy klasę "active" do nowej aktualnej sekcji
  sections[currentIndex].classList.add("active");

  // Przesuwamy widok do nowej aktualnej sekcji
  const scrollOffset = currentIndex * document.documentElement.offsetHeight;
  document.documentElement.scrollTop = scrollOffset;
}

    document.addEventListener("DOMContentLoaded", function() {
		scrollToNextSection();
		scrollToPreviousSection();
      const startButton3 = document.querySelector("#startButton3");
	  const startButton2 = document.querySelector("#startButton2");
      const container = document.querySelector(".container");

  // Set the first container as active on page load
  const innerContainers = document.querySelectorAll('.inner-container');
  innerContainers[0].classList.add('active');
    // Ustawiamy transformację na pierwszym aktywnym elemencie
  const activeImg = innerContainers[0].querySelector('img');
  activeImg.style.transform = 'rotateX(28deg) rotateY(7deg)';

      startButton3.addEventListener("click", scrollToNextSection);
	  startButton2.addEventListener("click", scrollToNextSection1);

      container.addEventListener("scroll", updateLastVisibleSection);
    });