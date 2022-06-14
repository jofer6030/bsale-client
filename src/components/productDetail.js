import productDetailView from "../views/productDetailView.html";
const modal = document.querySelector(".modal-product-detail");

modal.addEventListener("click", (e) => {
  if (!e.target.classList.contains("product-detail")) {
    closeModalDetails();
  }
});

export const productDetails = (product) => {
  modal.classList.add("active");
  console.log(product);

  const closeModal = document.createElement("div");
  closeModal.classList.add("close-modal");
  closeModal.innerHTML = "X";
  closeModal.addEventListener("click", closeModalDetails);

  const productDetail = document.createElement("div");
  productDetail.classList.add("product-detail");
  productDetail.innerHTML = productDetailView;
  productDetail.querySelector("img").src =
    product.url_image ||
    "https://bitsofco.de/content/images/2018/12/broken-1.png";
  productDetail.querySelector(".product-detail-name").innerHTML = product.name;
  const productAttributes = productDetail.querySelector(
    ".product-detail-attributes"
  );

  const divPrice = document.createElement("div");
  divPrice.classList.add("product-detail-price");

  const spanPriceOriginal = document.createElement("span");
  const spanPriceBefore = document.createElement("span");
  spanPriceBefore.innerHTML = `CLP ${product.price.toFixed(2)}`;

  if (product.discount) {
    const spanDiscount = document.createElement("span");
    spanPriceBefore.classList.add("product-detail-price-before");
    spanPriceOriginal.classList.add("product-detail-price-after");
    spanDiscount.classList.add("product-detail-discount");

    spanPriceOriginal.innerHTML = `CLP ${(
      product.price -
      (product.price * product.discount) / 100
    ).toFixed(2)}`;

    divPrice.append(spanPriceBefore, spanPriceOriginal);

    spanDiscount.innerHTML = `- ${product.discount}%`;
    productAttributes.append(spanDiscount, divPrice);
  } else {
    divPrice.append(spanPriceBefore);
    productAttributes.style.justifyContent = "flex-end";
    productAttributes.append(divPrice);
  }

  productDetail.appendChild(closeModal);
  modal.appendChild(productDetail);
};

const closeModalDetails = () => {
  modal.classList.remove("active");
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
};
