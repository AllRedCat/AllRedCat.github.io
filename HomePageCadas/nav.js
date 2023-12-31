const primaryNav = document.querySelector(".nav-links");
const navToggle = document.querySelector(".mobile-nav-toggle");
// const primaryNav = document.releasePointerCapture(".nav-links");
// const navToggle = document.releasePointerCapture(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded",true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded",false);
    }
})