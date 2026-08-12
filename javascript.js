/* =========================================
   HSE ZONA SUL
   SCRIPT.JS
========================================= */


/* ================= WHATSAPP ================= */

// COLOCA AQUI O NÚMERO QUE JÁ TESTASTE
// Formato: 244XXXXXXXXX
// Sem +, espaços ou hífens.

const whatsappNumber = "244972083912";


const whatsappMessage =
    "Olá! Gostaria de obter informações sobre as formações do Departamento HSE – Zona Sul.";


const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


/* ================= BOTÕES WHATSAPP ================= */

const whatsappButtons =
    document.querySelectorAll(
        ".btn-whatsapp, .whatsapp-floating"
    );


whatsappButtons.forEach(button => {

    button.href = whatsappLink;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

});


/* ================= MENU MOBILE ================= */

const menuToggle =
    document.getElementById("menuToggle");


const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle("active");

            const opened =
                mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                opened
            );

        }
    );


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}
/* =========================================
   WHATSAPP DOS CURSOS
========================================= */

const courseButtons =
    document.querySelectorAll(".course-whatsapp");


courseButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const course =
            this.getAttribute("data-course");

        const message =
            `Olá! Gostaria de obter informações sobre a formação "${course}" no Departamento HSE – Zona Sul.`;

        const link =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(link, "_blank");

    });

});