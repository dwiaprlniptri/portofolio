document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer untuk animasi saat section terlihat
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });

    // Fungsi untuk Hamburger Menu
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    menuToggle.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
            nav.style.opacity = "0";
            nav.style.transform = "translateY(-10px)";
            setTimeout(() => {
                nav.classList.remove("open");
            }, 300);
        } else {
            nav.classList.add("open");
            setTimeout(() => {
                nav.style.opacity = "1";
                nav.style.transform = "translateY(0)";
            }, 0);
        }
    });
});
