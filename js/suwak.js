document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("#jQueryColorChange111111");
    var elementToScroll = document.getElementById("#itemitemj");

    scrollButton.addEventListener("click", function() {
        elementToScroll.scrollIntoView({ behavior: "smooth" });
    });
});