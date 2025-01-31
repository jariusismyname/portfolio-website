document.addEventListener("DOMContentLoaded", function () {
    const timelineContainers = document.querySelectorAll(".timeline-container");

    function revealOnScroll() {
        timelineContainers.forEach((container) => {
            const containerTop = container.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (containerTop < windowHeight - 50) {
                container.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run initially to check visible elements
});
