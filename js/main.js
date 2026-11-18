
/* =========================================
   REBOOT CLUB - MAIN JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // MENÚ PARA MÓVILES

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });


    // CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach((item) => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");

        });

    });


    // EFECTO AL HACER SCROLL

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    // AÑO AUTOMÁTICO DEL FOOTER

    const footerText = document.querySelector(".footer p");

    if (footerText) {
        footerText.innerHTML =
            `INDEPENDENT GAME STUDIO<br>
            © ${new Date().getFullYear()} REBOOT CLUB. TODOS LOS DERECHOS RESERVADOS.`;
    }


    console.log("Reboot Club website initialized.");

});
