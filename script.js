function showProjectImage(imageId) {
    const image = document.getElementById(imageId);

    if (!image) return;

    image.style.display =
        image.style.display === "none" ? "block" : "none";
}



const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    function updateThemeButton() {
        const isLightMode =
            document.body.classList.contains("light-mode");

        themeToggle.textContent = isLightMode ? "☾" : "☀";
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        updateThemeButton();

    });

    updateThemeButton();
}


const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}



const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeMessage) {
    welcomeMessage.addEventListener("click", function () {

        alert("Thanks for visiting my portfolio!");

    });
}



function updateDateTime() {
    const dateTime = document.getElementById("dateTime");

    if (dateTime) {
        dateTime.textContent = new Date().toLocaleString();
    }
}

updateDateTime();

setInterval(updateDateTime, 1000);