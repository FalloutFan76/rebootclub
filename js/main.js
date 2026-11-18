
/* ============================================
   REBOOT CLUB
   FUNCIONALIDADES DE LA WEB
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTOS PRINCIPALES

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const header = document.querySelector(".header");


    // MENÚ DE NAVEGACIÓN

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

        });


        // CERRAR MENÚ AL SELECCIONAR UN APARTADO

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");

            });

        });

    }


    // CAMBIO DE CABECERA AL DESPLAZARSE

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


    // AÑO AUTOMÁTICO

    document.querySelectorAll(".year").forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    // ANIMACIONES DE APARICIÓN

    const animatedElements = document.querySelectorAll(
        ".section-heading, .intro-grid, .projects-title, " +
        ".project-feature, .projects-footer, .heritage-grid, " +
        ".values-heading, .value-card, .team-intro, " +
        ".member-card, .collaboration-content, .contact-inner"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    obs.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12
        });


        animatedElements.forEach(element => {

            element.classList.add("reveal");
            observer.observe(element);

        });

    }


    // MENSAJE DE INICIALIZACIÓN

    console.log("Reboot Club: web inicializada correctamente.");

});
