import { baseURL } from "../config/url";

import { createCardProduct } from "../helpers/createProduct";

const getProducts = async (offset, limit) => {
  const response = await fetch(
    `${baseURL}/product/list?limit=${limit}&offset=${offset}`
  );
  const products = await response.json();
  return products;
};

export default async (off = 0, limit = 10) => {
  const offsetFromLS = Number(localStorage.getItem("offset")) || 0;
  const productList = await getProducts(offsetFromLS, limit);
  const { count, products, offset } = productList;
  localStorage.setItem("offset", offset);

  const btnsNext = document.querySelectorAll(".next");
  const btnsPrev = document.querySelectorAll(".previous");
  localStorage.setItem("totalPages", JSON.stringify(Math.ceil(count / limit)));

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
