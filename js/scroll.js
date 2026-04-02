window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.pageYOffset > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");
    backToTopButton.style.display = "none";
});
