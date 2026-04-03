window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.pageYOffset > 100) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");
    backToTopButton.classList.remove("visible");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const images = document.querySelectorAll('.strucFormImg');
    images.forEach(image => {
        imageObserver.observe(image);
    });
});
