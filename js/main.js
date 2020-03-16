/* Set the width of the side navigation to 250px */
function openNav() {
    let menuSize = window.innerWidth > 768 ? "559px" : "100%";
    document.getElementById("menuMobile").style.width = menuSize;
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("menuMobile").style.width = "0";
}

function toggleIdiomas() {
    document.querySelector('.seletor-idiomas').classList.toggle('active');
}