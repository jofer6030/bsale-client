import "./assets/style/style.scss";
import { activeLink } from "./helpers/activeLink";
import { clearProducList, searchProduct } from "./helpers/searchProduct";
import { totalPages } from "./helpers/status";
import { router } from "./routes/index.routes";

router(window.location.hash);
activeLink(window.location.hash);

if (!window.location.hash) {
  window.location.hash = "#/product";
}

window.addEventListener("hashchange", () => {
  localStorage.clear();
  router(window.location.hash);
  const links = document.querySelectorAll("li");
  links.forEach((link) => {
    link.classList.remove("active");
  });

  activeLink(window.location.hash);
});

/* search */
const inputSearch = document.getElementById("search");
inputSearch.addEventListener("input", searchProduct);
inputSearch.addEventListener("blur", clearProducList);

/* Pagination buttons */
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
    if (!["#/product"].includes(window.location.hash)) {
      router(window.location.hash);
      return;
    }
    router("#/product");
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
    if (!["#/product"].includes(window.location.hash)) {
      router(window.location.hash);
      return;
    }
    router("#/product");
  });
});

/* Filter products by attributes */

const filterForAttributes = document.getElementById("select-attribute");
const deleteAttribute = document.getElementById("delete-attribute");

filterForAttributes.value = localStorage.getItem("order") || "";
if (filterForAttributes.value !== "") {
  deleteAttribute.classList.add("active");
}

filterForAttributes.addEventListener("change", (e) => {
  deleteAttribute.classList.add("active");
  localStorage.setItem("order", e.target.value);
  if (!["#/product"].includes(window.location.hash)) {
    router(window.location.hash);
    return;
  }
  router("#/product");
});

deleteAttribute.addEventListener("click", () => {
  filterForAttributes.value = "";
  deleteAttribute.classList.remove("active");
  localStorage.setItem("order", "");
  if (!["#/product"].includes(window.location.hash)) {
    router(window.location.hash);
    return;
  }
  router("#/product");
});
