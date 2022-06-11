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
    const productPrice = productCard.querySelector(".product-price");
    if (product.discount) {
      productPrice.classList.add("product-price-before");
      productPrice.innerHTML = `CLP ${product.price.toFixed(2)}`;
      const priceDiscount = document.createElement("span");
      priceDiscount.classList.add("product-price-discount");
      priceDiscount.innerHTML = `CLP ${(
        product.price -
        (product.price * product.discount) / 100
      ).toFixed(2)}`;
      productPrice.appendChild(priceDiscount);
    } else {
      productPrice.innerHTML = `CLP ${product.price.toFixed(2)}`;
    }
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
