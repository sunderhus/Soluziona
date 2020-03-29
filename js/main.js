/* Set the width of the side navigation to 250px */
const openNav = () => {
  document.getElementById("overlayMenu").classList.add("active");
  const menuSize = window.innerWidth > 768 ? "559px" : "100%";
  document.getElementById("menuMobile").style.width = menuSize;
};

/* Set the width of the side navigation to 0 */
const closeNav = () => {
  document.getElementById("menuMobile").style.width = "0";
  document.getElementById("overlayMenu").classList.remove("active");
};

const toggleIdiomas = () => {
  document.querySelector(".seletor-idiomas").classList.toggle("active");
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("js/sw.js").then(function () {
    console.log("%c register sw", "color:yellow; background-color:black;");
  });
}
/* Toggle  accordion */
const toggleAccordion = item => {
  item.classList.toggle("active");
  let descricao = item.nextElementSibling;
  descricao.classList.toggle("active");
};
const accordionElements = document.querySelectorAll(".accordion-titulo");
accordionElements.forEach(item => {
  item.addEventListener("click", () => {
    toggleAccordion(item);
  });
});

/* animate footer detail*/
let detailFooter = document.querySelector(".detalhe-footer img");
window.addEventListener("deviceorientation", event => {
  let orientation = window.screen.orientation;
  if (orientation.type === "landscape-primary") {
    detailFooter.style.transform = `translateX(${Math.floor(event.beta) *
      -3.5}px)`;
  } else {
    detailFooter.style.transform = `translateX(${Math.floor(event.gamma) *
      -2.5}px)`;
  }
});