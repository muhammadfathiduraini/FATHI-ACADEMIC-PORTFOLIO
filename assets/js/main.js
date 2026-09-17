/* =========================================================
   MUHAMMAD FATHI DURAINI BIN SAHAIMI
   ACADEMIC PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuButton = document.getElementById("menuButton");
    const mobileNavigation = document.getElementById("mobileNavigation");

    if (menuButton && mobileNavigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                mobileNavigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen.toString()
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        /* Close menu after clicking a link */

        const mobileLinks =
            mobileNavigation.querySelectorAll("a");

        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileNavigation.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            });

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU WITH ESCAPE
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }

        if (
            mobileNavigation &&
            mobileNavigation.classList.contains("open")
        ) {

            mobileNavigation.classList.remove("open");

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            document.body.classList.remove(
                "menu-open"
            );

        }

    });


    /* =====================================================
       SIMPLE SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-title, .section-content, " +
            ".education-entry, .experience-entry, " +
            ".interest-item, .work-card, " +
            ".development-row"
        );


    /*
       If the browser does not support IntersectionObserver,
       the content remains visible normally.
    */

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -40px 0px"
                }
            );


        revealElements.forEach((element) => {

            element.classList.add("reveal-element");

            observer.observe(element);

        });

    }


    /* =====================================================
       LANGUAGE BUTTON
    ===================================================== */

    const languageButton =
        document.querySelector(".language-button");


    /*
       The language architecture is intentionally prepared
       for future localisation.

       Current primary language:
       EN = English

       Future languages:
       MS, FR, AR, DE, IT, RU, ZH, KO, HI

       For now the button does not redirect anywhere.
    */

    if (languageButton) {

        languageButton.addEventListener(
            "click",
            () => {

                languageButton.classList.toggle(
                    "language-active"
                );

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.querySelector(
            ".current-year"
        );

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

  /* =========================================================
   22. SCROLL REVEAL
========================================================= */

.reveal-element {
    opacity: 0;
    transform: translateY(24px);

    transition:
        opacity 700ms ease,
        transform 700ms cubic-bezier(.2, .7, .2, 1);
}

.reveal-element.is-visible {
    opacity: 1;
    transform: translateY(0);
}


/* Slight stagger for work cards */

.work-card:nth-child(2) {
    transition-delay: 70ms;
}

.work-card:nth-child(3) {
    transition-delay: 140ms;
}

.work-card:nth-child(4) {
    transition-delay: 210ms;
}


/* Slight stagger for research interests */

.interest-item:nth-child(2) {
    transition-delay: 60ms;
}

.interest-item:nth-child(3) {
    transition-delay: 120ms;
}

.interest-item:nth-child(4) {
    transition-delay: 180ms;
}


/* =========================================================
   LANGUAGE BUTTON
========================================================= */

.language-button {
    transition:
        color 200ms ease,
        transform 200ms ease;
}

.language-button:hover {
    color: var(--accent);
}

.language-button.language-active {
    color: var(--accent);
    transform: translateY(-1px);
}


/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

.menu-button[aria-expanded="true"] span:first-child {
    transform: translateY(3.5px) rotate(45deg);
}

.menu-button[aria-expanded="true"] span:last-child {
    transform: translateY(-3.5px) rotate(-45deg);
}
    }

});
