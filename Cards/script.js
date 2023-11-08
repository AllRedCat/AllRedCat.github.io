const primaryNav = document.querySelector(".nav-links");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navClose = document.querySelector(".close-botton");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded",true);
    }
})

navClose.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "true"){
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded",false);
    }
})