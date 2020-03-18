/* Set the width of the side navigation to 250px */
const openNav = () => {
    document.getElementById("overlayMenu").classList.add("active");
    const menuSize = window.innerWidth > 768 ? "559px" : "100%";
    document.getElementById("menuMobile").style.width = menuSize;
}

/* Set the width of the side navigation to 0 */
const closeNav = () => {
    document.getElementById("menuMobile").style.width = "0";
    document.getElementById("overlayMenu").classList.remove("active");
}

const toggleIdiomas = () => {
    document.querySelector('.seletor-idiomas').classList.toggle('active');
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/sw.js').then(
        function () {
            console.log('register sw')
        }
    );
}