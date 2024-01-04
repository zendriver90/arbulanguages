$(document).ready(function() {
  var count1 = 0;
  var count2 = 0;
  var changedCount = 0;
  var isButton1Clicked = false;
  var isButton2Clicked = false;
  var isButton11Clicked = false;
  var isButton22Clicked = false;
  var isButton111Clicked = false;
  var isButton222Clicked = false;
  var isButton1111Clicked = false;
  var isButton2222Clicked = false;

  $('#jQueryColorChange2').click(function() {
    if (isButton2Clicked) {
      count1++;
      isButton2Clicked = true;
	  if (isButton1Clicked) {
      count1 -= 1;
	  count2--;
      changedCount++;
      isButton1Clicked = false;
    }
    }
    count1++;
    isButton2Clicked = true;
	isButton1Clicked = true;
    updateCounters();
  });
  $('#jQueryColorChange1').click(function() {
    count2++;
    isButton2Clicked = true;
    updateCounters();
  });
    $('#jQueryColorChange22').click(function() {
    if (isButton22Clicked) {
      count1++;
      isButton22Clicked = true;
	  if (isButton11Clicked) {
      count1 -= 1;
	  count2--;
      changedCount++;
      isButton11Clicked = false;
    }
    }
    count1++;
    isButton22Clicked = true;
	isButton11Clicked = true;
    updateCounters();
  });
  $('#jQueryColorChange11').click(function() {
    count2++;
    isButton22Clicked = true;
	isButton11Clicked = true;
    updateCounters();
  });
  function updateCounters() {
    $('#result1').text('ZNAM: ' + count1);
    $('#result2').text('UCZ\u0118 SI\u0118: ' + count2);
    $('#result3').text('NAUCZYŁEM SI\u0118: ' + changedCount);
	$('#result4').text('SKUTECZNOŚĆ: ' + changedCount/count1);
  }
});

  <script>
    function startScrolling() {
      const sections = document.querySelectorAll(".section");
      let currentIndex = 0;
      let intervalId;

      function scrollSections() {
        sections[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % sections.length;
        sections[currentIndex].classList.add("active");

        const scrollOffset = currentIndex * document.documentElement.offsetHeight;
        document.documentElement.scrollTop = scrollOffset;

        if (currentIndex === sections.length - 1) {
          clearInterval(intervalId);
        }
      }

      intervalId = setInterval(scrollSections, 750);
    }

    document.addEventListener("DOMContentLoaded", function() {
      const startButton = document.querySelector("#startButton");
      startButton.addEventListener("click", startScrolling);
    });
  </script>