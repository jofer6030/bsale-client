import "./assets/style/style.scss";
import { totalPages } from "./helpers/status";
import { router } from "./routes/index.routes";

router(window.location.hash);

if (window.location.hash === "") {
  window.location.hash = "#/product";
}

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

const btnsNext = document.querySelectorAll(".next");
const btnsPrev = document.querySelectorAll(".previous");

btnsNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = Number(localStorage.getItem("offset"));
    btnsPrev.forEach((btnP) => {
      btnP.disabled = false;
      btnP.classList.remove("disabled");
      btnP.classList.add("active");
    });
    const page = offset / 10 + 1;
    if (page >= totalPages) {
      return;
    }
    localStorage.setItem("offset", offset + 10);
    router("#/product", offset + 10);
  });
});

btnsPrev.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = Number(localStorage.getItem("offset"));
    btnsNext.forEach((btnN) => {
      btnN.disabled = false;
      btnN.classList.remove("disabled");
      btnN.classList.add("active");
    });
    if (offset <= 0) {
      return;
    }
    localStorage.setItem("offset", offset - 10);
    router("#/product", offset - 10);
  });
});
