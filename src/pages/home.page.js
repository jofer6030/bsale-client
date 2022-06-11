import { baseURL } from "../config/url";

import { createCardProduct } from "../components/cardProduct";

const getProducts = async (offset = 0, limit, order = "", price = "") => {
  const response = await fetch(
    `${baseURL}/product/list?limit=${limit}&offset=${offset}&order=${order}&price=${price}`
  );
  const products = await response.json();
  return products;
};

export default async (limit = 10) => {
  const offsetFromLS = Number(localStorage.getItem("offset")) || 0;
  const orderFromLS = localStorage.getItem("order") || "";
  const priceFromLS = localStorage.getItem("price") || "";
  const productList = await getProducts(
    offsetFromLS,
    limit,
    orderFromLS,
    priceFromLS
  );
  const { count, products, offset } = productList;
  localStorage.setItem("offset", offset);
  localStorage.setItem("totalPages", Math.ceil(count / limit));

  const btnsNext = document.querySelectorAll(".next");
  const btnsPrev = document.querySelectorAll(".previous");

  btnsNext.forEach((btn) => {
    if (count <= 10 || offset + 10 >= count) {
      btn.classList.add("disabled");
      btn.classList.remove("active");
      btn.disabled = true;
    } else {
      btn.disabled = false;
      btn.classList.add("active");
    }
  });
  btnsPrev.forEach((btn) => {
    if (offset <= 0) {
      btn.classList.add("disabled");
      btn.classList.remove("active");
      btn.disabled = true;
    } else {
      btn.disabled = false;
      btn.classList.add("active");
    }
  });

  const productCardList = createCardProduct(products);

  return productCardList;
};
