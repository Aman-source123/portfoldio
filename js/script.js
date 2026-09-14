// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// ==============================
// ACTIVE NAVBAR
// ==============================

let currentPage =
    window.location.pathname.split("/").pop();

if (currentPage === "") {
    currentPage = "index.html";
}

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// ==============================
// CLOSE MOBILE MENU
// ==============================

const allNavLinks =
    document.querySelectorAll(".nav-links a");

allNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const email =
                document.getElementById("email").value;

            const subject =
                document.getElementById("subject").value;

            const message =
                document.getElementById("message").value;


            const body =
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message;


            const mailtoLink =
                "mailto:ak787149261202@gmail.com" +
                "?subject=" +
                encodeURIComponent(subject) +
                "&body=" +
                encodeURIComponent(body);


            window.location.href =
                mailtoLink;

        }
    );

}

