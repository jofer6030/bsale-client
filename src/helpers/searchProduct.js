import { productDetails } from "../components/productDetail";
import { baseURL } from "../config/url";
import productItemView from "../views/product_item.html";

const getProducts = async (search) => {
  let products = [];
  try {
    const response = await fetch(`${baseURL}/product/list?search=${search}`);
    if (response.status === 200) {
      products = await response.json();
      return products;
    }
    return products;
  } catch (error) {
    console.log(error.message);
  }
};
const productsFind = document.querySelector(".products-find");

export const searchProduct = async (e) => {
  productsFind.classList.add("active");
  while (productsFind.firstChild) {
    productsFind.removeChild(productsFind.firstChild);
  }
  const { products } = await getProducts(e.target.value);
  if (!products) {
    return;
  }

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = productItemView;
    productItem.querySelector("img").src =
      product.url_image ||
      "https://bitsofco.de/content/images/2018/12/broken-1.png";
    productItem.querySelector(".product-name").innerHTML = product.name;
    productItem.querySelector(".product-discount").innerHTML = product.discount
      ? `- ${product.discount}%`
      : "";
    if (product.discount) {
      productItem.querySelector(".product-price").innerHTML = `CLP ${(
        product.price -
        (product.price * product.discount) / 100
      ).toFixed(2)}`;
    } else {
      productItem.querySelector(
        ".product-price"
      ).innerHTML = `CLP ${product.price.toFixed(2)}`;
    }

    productItem.addEventListener("click", () => productDetails(product));
    productsFind.appendChild(productItem);
  });
};

export const clearProducList = () => {
  productsFind.classList.remove("active");
  while (productsFind.firstChild) {
    productsFind.removeChild(productsFind.firstChild);
  }
};

export const clearProducListBlur = (e) => {
  if (e.target.value === "") {
    clearProducList();
  }
};

productsFind.addEventListener("mouseleave", (e) => {
  const modal = document.querySelector(".modal-product-detail");
  if (modal.classList.contains("active")) {
    return;
  } else {
    clearProducList();
  }
});
