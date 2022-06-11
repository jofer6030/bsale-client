import viewCard from "../views/card_product.html";
import { categories } from "../helpers/categoryList";

export const createCardProduct = (products) => {
  const productCardList = document.createElement("div");
  productCardList.classList.add("card-product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");

    productCard.classList.add("card-product");
    productCard.innerHTML = viewCard;
    productCard.querySelector("img").src =
      product.url_image ||
      "https://bitsofco.de/content/images/2018/12/broken-1.png";
    productCard.querySelector(".product-name").innerHTML = product.name;
    productCard.querySelector(
      ".product-price"
    ).innerHTML = `CLP ${product.price.toFixed(2)}`;
    productCard.querySelector(".product-discount").innerHTML =
      product.discount === 0 ? "" : `-${product.discount}%`;
    productCard.querySelector(".product-category").innerHTML =
      typeof product.category === "string"
        ? product.category.toUpperCase()
        : categories.find((category) => category.id === product.category).name;

    productCardList.appendChild(productCard);
  });
  return productCardList;
};
