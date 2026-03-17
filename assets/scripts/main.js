// header 
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
}

hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        document.body.classList.remove("menu-open");
    });
});





const texts = ["Full Stack Developer", "React Developer", "Laravel Developer", "Problem Solver"];
let i = 0,
    charIdx = 0,
    deleting = false;
const el = document.getElementById("typed-text");

function type() {
    const current = texts[i];
    if (!deleting) {
        el.textContent = current.slice(0, charIdx++);
        if (charIdx > current.length) {
            deleting = true;
            setTimeout(type, 1800);
            return;
        }
    } else {
        el.textContent = current.slice(0, charIdx--);
        if (charIdx < 0) {
            deleting = false;
            i = (i + 1) % texts.length;
            charIdx = 0;
            setTimeout(type, 400);
            return;
        }
    }
    setTimeout(type, deleting ? 60 : 90);
}
type();

// Smooth scroll nav
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
    });
});
