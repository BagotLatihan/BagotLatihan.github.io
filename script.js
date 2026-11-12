
/* =================================
   1. TAHUN OTOMATIS
================================= */

const openingFooter = document.querySelector(".opening-footer");

if (openingFooter) {
    const currentYear = new Date().getFullYear();

    openingFooter.textContent =
        "© " + currentYear + " Kopi Street Sawah";
}


/* =================================
   2. NAVIGASI MOBILE
================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}
